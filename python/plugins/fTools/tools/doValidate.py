# -*- coding: utf-8 -*-
from PyQt4.QtCore import *
from PyQt4.QtGui import *
from qgis.core import *
from ui_frmVisual import Ui_Dialog
import ftools_utils
import math

class ValidateDialog( QDialog, Ui_Dialog ):
  def __init__(self, iface):
    QDialog.__init__(self)
    self.iface = iface
    self.setupUi(self)
    self.setModal(False) # we want to be able to interact with the featuresmc.extent().width()
    # adjust user interface
    self.setWindowTitle( self.tr( "Check geometry validity" ) )
    self.cmbField.setVisible( False )
    self.label.setVisible( False )
    self.useSelected.setVisible( True )
    self.label_2.setText( self.tr( "Geometry errors" ) )
    self.label_4.setText( self.tr( "Total encountered errors" ) )
    self.partProgressBar.setVisible( False )
    self.tblUnique.setSelectionMode(QAbstractItemView.SingleSelection)
    self.tblUnique.setSelectionBehavior(QAbstractItemView.SelectRows)
    # populate list of available layers
    myList = ftools_utils.getLayerNames( [ QGis.Point, QGis.Line, QGis.Polygon ] )
    self.connect(self.tblUnique, SIGNAL("currentItemChanged(QTableWidgetItem*, QTableWidgetItem*)" ), 
    self.zoomToError)
    self.inShape.addItems( myList )
    self.cancel_close = self.buttonBox_2.button(QDialogButtonBox.Close)
    self.buttonOk = self.buttonBox_2.button(QDialogButtonBox.Ok)
    self.progressBar.setValue(0)
    self.storedScale = self.iface.mapCanvas().scale()
    
  def keyPressEvent( self, e ):
    if ( e.modifiers() == Qt.ControlModifier or \
         e.modifiers() == Qt.MetaModifier ) and \
         e.key() == Qt.Key_C:
      #selection = self.tblUnique.selectedItems()
      items = QString()
      for row in range( self.tblUnique.rowCount() ):
        items.append( self.tblUnique.item( row, 0 ).text()
        + "," + self.tblUnique.item( row, 1 ).text() + "\n" )
      if not items.isEmpty():
        clip_board = QApplication.clipboard()
        clip_board.setText( items )
    else:
      QDialog.keyPressEvent( self, e )

  def accept( self ):
    if self.inShape.currentText() == "":
      QMessageBox.information( self, self.tr("Error!"), self.tr( "Please specify input vector layer" ) )
    elif self.cmbField.isVisible() and self.cmbField.currentText() == "":
      QMessageBox.information( self, self.tr("Error!"), self.tr( "Please specify input field" ) )
    else:
      self.validate( self.inShape.currentText(), self.useSelected.checkState() )
      
  def zoomToError(self, curr, prev):
      if curr is None:
        return
      row = curr.row() # if we clicked in the first column, we want the second
      item = self.tblUnique.item(row, 1)
      if not item.data(Qt.UserRole) is None:
        mc = self.iface.mapCanvas()
        x = item.data(Qt.UserRole).toPyObject().x()
        y = item.data(Qt.UserRole).toPyObject().y()
        mc.zoomToPreviousExtent()
        scale = mc.scale()
        rect = QgsRectangle(float(x)-(4.0/scale),float(y)-(4.0/scale),
                            float(x)+(4.0/scale),float(y)+(4.0/scale))
        # Set the extent to our new rectangle
        mc.setExtent(rect)
        # Refresh the map
        mc.refresh()

  def validate( self,  myLayer, mySelection ):
    vlayer = ftools_utils.getVectorLayerByName( myLayer )
    self.tblUnique.clearContents()
    self.tblUnique.setRowCount( 0 )
    self.lstCount.clear()
    self.buttonOk.setEnabled( False )
    self.testThread = validateThread( self.iface.mainWindow(), self, vlayer, mySelection )
    QObject.connect( self.testThread, SIGNAL( "runFinished(PyQt_PyObject)" ), self.runFinishedFromThread )
    QObject.connect( self.testThread, SIGNAL( "runStatus(PyQt_PyObject)" ), self.runStatusFromThread )
    QObject.connect( self.testThread, SIGNAL( "runRange(PyQt_PyObject)" ), self.runRangeFromThread )
    self.cancel_close.setText( self.tr("Cancel") )
    QObject.connect( self.cancel_close, SIGNAL( "clicked()" ), self.cancelThread )
    QApplication.setOverrideCursor( Qt.WaitCursor )
    self.testThread.start()
    return True

  def cancelThread( self ):
    self.testThread.stop()
    QApplication.restoreOverrideCursor()
    self.buttonOk.setEnabled( True )
    
  def runFinishedFromThread( self, output ):
    self.testThread.stop()
    QApplication.restoreOverrideCursor()
    self.buttonOk.setEnabled( True )
    self.tblUnique.setColumnCount( 2 )
    count = 0
    for rec in output:
      if len(rec[1]) < 1:
        continue
      where = None
      for err in rec[1]: # for each error we find
        self.tblUnique.insertRow(count)
        fidItem = QTableWidgetItem( str(rec[0]) )
        self.tblUnique.setItem( count, 0, fidItem )
        if err.hasWhere(): # if there is a location associated with the error
          where = err.where()
        message = err.what()
        errItem = QTableWidgetItem( message )
        errItem.setData(Qt.UserRole, QVariant(where))
        self.tblUnique.setItem( count, 1, errItem )
        count += 1
    self.tblUnique.setHorizontalHeaderLabels( [ self.tr("Feature"), self.tr("Error(s)") ] )
    self.tblUnique.horizontalHeader().setResizeMode( 0, QHeaderView.ResizeToContents )
    self.tblUnique.horizontalHeader().show()
    self.tblUnique.horizontalHeader().setResizeMode( 1, QHeaderView.Stretch )
    self.tblUnique.resizeRowsToContents()
    self.lstCount.insert(str(count))
    self.cancel_close.setText( "Close" )
    QObject.disconnect( self.cancel_close, SIGNAL( "clicked()" ), self.cancelThread )
    return True
    
  def runStatusFromThread( self, status ):
    self.progressBar.setValue( status )
        
  def runRangeFromThread( self, range_vals ):
    self.progressBar.setRange( range_vals[ 0 ], range_vals[ 1 ] )

class validateThread( QThread ):
  def __init__( self, parentThread, parentObject, vlayer, mySelection ):
    QThread.__init__( self, parentThread )
    self.parent = parentObject
    self.running = False
    self.vlayer = vlayer
    self.mySelection = mySelection

  def run( self ):
    self.running = True
    output = self.check_geometry( self.vlayer )
    self.emit( SIGNAL( "runFinished(PyQt_PyObject)" ), output )
    self.emit( SIGNAL( "runStatus(PyQt_PyObject)" ), 0 )

  def stop(self):
    self.running = False

  def check_geometry( self, vlayer ):
    lstErrors = []
    if self.mySelection:
      layer = vlayer.selectedFeatures()
      nFeat = len(layer)
    else:
      #layer = vlayer # requires SIP >= 4.9
      layer = []
      layer.select([]) # select all features, and ignore attributes
      ft = QgsFeature()
      while vlayer.nextFeature(ft)
        layer.append(ft)
        ft = QgsFeature()
      nFeat = layer.featureCount()
    nElement = 0
    if nFeat > 0:
      self.emit( SIGNAL( "runStatus(PyQt_PyObject)" ), 0 )
      self.emit( SIGNAL( "runRange(PyQt_PyObject)" ), ( 0, nFeat ) )
    for feat in layer:
      if not self.running:
        return list()
      geom = QgsGeometry(feat.geometry()) # ger reference to geometry
      self.emit(SIGNAL("runStatus(PyQt_PyObject)"), nElement)
      nElement += 1
      lstErrors.append((feat.id(), list(geom.validateGeometry())))
    self.emit( SIGNAL( "runStatus(PyQt_PyObject)" ), nFeat )
    return lstErrors