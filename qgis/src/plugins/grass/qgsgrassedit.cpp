/***************************************************************************
    qgsgrassselect.cpp  -  Select GRASS layer dialog
                             -------------------
    begin                : March, 2004
    copyright            : (C) 2004 by Radim Blazek
    email                : blazek@itc.it
 ***************************************************************************/
/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
#include <iostream>
#include <qdir.h>
#include <qevent.h>
#include <qfile.h>
#include <qsettings.h>
#include <qpixmap.h>
#include <q3listbox.h>
#include <qstringlist.h>
#include <qlabel.h>
#include <QComboBox>
#include <qspinbox.h>
#include <qmessagebox.h>
#include <qinputdialog.h>
#include <qsettings.h>
#include <qpainter.h>
#include <qpixmap.h>
#include <qpen.h>
#include <q3pointarray.h>
#include <qcursor.h>
#include <qnamespace.h>
#include <q3listview.h>
#include <qcolordialog.h>
#include <q3table.h>
#include <qstatusbar.h>
#include <qglobal.h>

#include <QActionGroup>
#include <QCloseEvent>
#include <QToolBar>

#include "qgis.h"
#include "qgsapplication.h"
#include "qgsmapcanvas.h"
#include "qgsmaplayer.h"
#include "qgsvectorlayer.h"
#include "qgsdataprovider.h"
#include "qgsmaptopixel.h"
#include "qgsfield.h"
#include "qgsfeatureattribute.h"
#include "qgslegend.h"
#include "qgsvertexmarker.h"
#include "qgsrubberband.h"

extern "C" {
#include <grass/gis.h>
#include <grass/Vect.h>
}

#include "../../src/providers/grass/qgsgrass.h"
#include "../../src/providers/grass/qgsgrassprovider.h"
#include "qgsgrassattributes.h"
#include "qgsgrassedit.h"
#include "qgsgrassedittools.h"
#include "qgsgrassutils.h"

#include "qgsmapcanvasitem.h"
#include "qgsmaptoolpan.h"

class QgsGrassEditLayer : public QgsMapCanvasItem
{
  public:
    
    QgsGrassEditLayer(QgsMapCanvas* mapCanvas):QgsMapCanvasItem(mapCanvas)
    {
      updatePosition();
    }
    
    virtual void drawShape(QPainter & p)
    {
      p.drawPixmap(mPanningOffset.x(),mPanningOffset.y(), mPixmap);
    }
    
    virtual void updatePosition()
    {      
      move(mPanningOffset.x(),mPanningOffset.y());
      setSize(mMapCanvas->width(), mMapCanvas->height());      
    }
    
    QPixmap& pixmap() { return mPixmap; }
    
  private:
    
    QPixmap mPixmap;
};



bool QgsGrassEdit::mRunning = false;

QgsGrassEdit::QgsGrassEdit ( QgisApp *qgisApp, QgisIface *iface, 
    QWidget * parent, Qt::WFlags f )
    :QMainWindow(parent,f), QgsGrassEditBase ()
{
#ifdef QGISDEBUG
  std::cerr << "QgsGrassEdit()" << std::endl;
#endif

  setupUi(this);
  
  mRunning = true;
  mValid = false;
  mTool = QgsGrassEdit::NONE;
  mSuspend = false;
  mQgisApp = qgisApp;
  mIface = iface;
  mNewMap = false;

  mCanvas = mIface->getMapCanvas();

  // TODO QGIS: crash if canvas is empty

  // At moment QgisIface::activeLayer() does not work
  QgsMapLayer *layer = (QgsMapLayer *) mIface->activeLayer();

  if ( !isEditable(layer) ) return;

  //TODO dynamic_cast ?
  QgsVectorLayer *vector = (QgsVectorLayer*)layer;

  //TODO dynamic_cast ?
  mProvider = (QgsGrassProvider *) vector->getDataProvider();

  init();

}

bool QgsGrassEdit::isEditable ( QgsMapLayer *layer )
{
  if ( !layer ) return false;

  std::cerr << "layer name: " << layer->name().toLocal8Bit().data() << std::endl;

  if ( layer->type() != QgsMapLayer::VECTOR ) {
    std::cerr << "The selected layer is not vector." << std::endl;
    return false;
  }

  //TODO dynamic_cast ?
  QgsVectorLayer *vector = (QgsVectorLayer*)layer;

  std::cerr << "Vector layer type: " << vector->providerType().toLocal8Bit().data() << std::endl;

  if ( vector->providerType() != "grass" ) {
    std::cerr << "The selected layer is not GRASS." << std::endl;
    return false;
  }

  return true;
}

QgsGrassEdit::QgsGrassEdit ( QgisApp *qgisApp, QgisIface *iface, 
    QgsGrassProvider *provider,
    QWidget * parent, Qt::WFlags f )
    :QMainWindow(parent, 0, f), QgsGrassEditBase ()
{
#ifdef QGISDEBUG
  std::cerr << "QgsGrassEdit()" << std::endl;
#endif

  setupUi(this);

  mRunning = true;
  mValid = false;
  mTool = QgsGrassEdit::NONE;
  mSuspend = false;
  mQgisApp = qgisApp;
  mIface = iface;
  mNewMap = true;

  mCanvas = mIface->getMapCanvas();

  mProvider = provider;

  init();
}

void QgsGrassEdit::init()
{
  if ( !(mProvider->isGrassEditable()) ) {
    QMessageBox::warning( 0, "Warning", "You are not owner of the mapset, "
        "cannot open the vector for editing." );
    return;
  }

  if ( !(mProvider->startEdit()) ) {
    QMessageBox::warning( 0, "Warning", "Cannot open vector for update." );
    return;
  }

  QString myIconPath = QgsApplication::themePath() + "/grass/";


  QToolBar *tb = addToolBar(tr("Edit tools"));

  mNewPointAction = new QAction(
          QIcon(myIconPath+"grass_new_point.png"), tr("New point"), this);
  mNewPointAction->setShortcut ( QKeySequence(Qt::Key_F1) ); 
  tb->addAction ( mNewPointAction );
  connect ( mNewPointAction, SIGNAL(triggered()), this, SLOT(newPoint()) );

  mNewLineAction = new QAction(
          QIcon(myIconPath+"grass_new_line.png"), tr("New line"), this);
  mNewLineAction->setShortcut ( QKeySequence(Qt::Key_F2) ); 
  tb->addAction ( mNewLineAction );
  connect ( mNewLineAction, SIGNAL(triggered()), this, SLOT(newLine()) );

  mNewBoundaryAction = new QAction(
          QIcon(myIconPath+"grass_new_boundary.png"), tr("New boundary"), this);
  mNewBoundaryAction->setShortcut ( QKeySequence(Qt::Key_F3) ); 
  tb->addAction ( mNewBoundaryAction );
  connect ( mNewBoundaryAction, SIGNAL(triggered()), this, SLOT(newBoundary()) );

  mNewCentroidAction = new QAction(
          QIcon(myIconPath+"grass_new_centroid.png"), tr("New centroid"), this);
  mNewCentroidAction->setShortcut ( QKeySequence(Qt::Key_F4) ); 
  tb->addAction ( mNewCentroidAction );
  connect ( mNewCentroidAction, SIGNAL(triggered()), this, SLOT(newCentroid()) );

  mMoveVertexAction = new QAction(
          QIcon(myIconPath+"grass_move_vertex.png"), tr("Move vertex"), this);
  mMoveVertexAction->setShortcut ( QKeySequence(Qt::Key_F5) ); 
  tb->addAction ( mMoveVertexAction );
  connect ( mMoveVertexAction, SIGNAL(triggered()), this, SLOT(moveVertex()) );

  mAddVertexAction = new QAction(
          QIcon(myIconPath+"grass_add_vertex.png"), tr("Add vertex"), this);
  mAddVertexAction->setShortcut ( QKeySequence(Qt::Key_F6) ); 
  tb->addAction ( mAddVertexAction );
  connect ( mAddVertexAction, SIGNAL(triggered()), this, SLOT(addVertex()) );

  mDeleteVertexAction = new QAction(
          QIcon(myIconPath+"grass_delete_vertex.png"), tr("Delete vertex"), this);
  mDeleteVertexAction->setShortcut ( QKeySequence(Qt::Key_F7) ); 
  tb->addAction ( mDeleteVertexAction );
  connect ( mDeleteVertexAction, SIGNAL(triggered()), this, SLOT(deleteVertex()) );

  mMoveLineAction = new QAction(
          QIcon(myIconPath+"grass_move_line.png"), tr("Move line"), this);
  mMoveLineAction->setShortcut ( QKeySequence(Qt::Key_F9) ); 
  tb->addAction ( mMoveLineAction );
  connect ( mMoveLineAction, SIGNAL(triggered()), this, SLOT(moveLine()) );

  mSplitLineAction = new QAction(
          QIcon(myIconPath+"grass_split_line.png"), tr("Split line"), this);
  mSplitLineAction->setShortcut ( QKeySequence(Qt::Key_F10) ); 
  tb->addAction ( mSplitLineAction );
  connect ( mSplitLineAction, SIGNAL(triggered()), this, SLOT(splitLine()) );

  mDeleteLineAction = new QAction(
          QIcon(myIconPath+"grass_delete_line.png"), tr("Delete line"), this);
  mDeleteLineAction->setShortcut ( QKeySequence(Qt::Key_F11) ); 
  tb->addAction ( mDeleteLineAction );
  connect ( mDeleteLineAction, SIGNAL(triggered()), this, SLOT(deleteLine()) );

  mEditAttributesAction = new QAction(
          QIcon(myIconPath+"grass_edit_attributes.png"), tr("Edit attributes"), this);
  tb->addAction ( mEditAttributesAction );
  connect ( mEditAttributesAction, SIGNAL(triggered()), this, SLOT(editAttributes()) );

  mCloseEditAction = new QAction(
          QIcon(myIconPath+"grass_close_edit.png"), tr("Close"), this);
  tb->addAction ( mCloseEditAction );
  connect ( mCloseEditAction, SIGNAL(triggered()), this, SLOT(closeEdit()) );
  
  mNewPointAction->setCheckable ( true );
  mNewLineAction->setCheckable ( true );
  mNewBoundaryAction->setCheckable ( true );
  mNewCentroidAction->setCheckable ( true );
  mMoveVertexAction->setCheckable ( true );
  mAddVertexAction->setCheckable ( true );
  mDeleteVertexAction->setCheckable ( true );
  mMoveLineAction->setCheckable ( true );
  mSplitLineAction->setCheckable ( true );
  mDeleteLineAction->setCheckable ( true );
  mEditAttributesAction->setCheckable ( true );
  
  QActionGroup *ag = new QActionGroup ( this );
  ag->addAction ( mNewPointAction );
  ag->addAction ( mNewLineAction );
  ag->addAction ( mNewBoundaryAction );
  ag->addAction ( mNewCentroidAction );
  ag->addAction ( mMoveVertexAction );
  ag->addAction ( mAddVertexAction );
  ag->addAction ( mDeleteVertexAction );
  ag->addAction ( mMoveLineAction );
  ag->addAction ( mSplitLineAction );
  ag->addAction ( mDeleteLineAction );
  ag->addAction ( mEditAttributesAction );
  
  mEditPoints = Vect_new_line_struct ();
  mPoints = Vect_new_line_struct ();
  mCats = Vect_new_cats_struct ();

  // Set lines symbology from map
  int nlines = mProvider->numLines(); 
  mLineSymb.resize(nlines+1000);
  for ( int line = 1; line <= nlines; line++ ) {
    mLineSymb[line] = lineSymbFromMap ( line );
  }

  // Set nodes symbology from map
  int nnodes = mProvider->numNodes(); 
  mNodeSymb.resize(nnodes+1000); 
  for ( int node = 1; node <= nnodes; node++ ) {
    mNodeSymb[node] = nodeSymbFromMap ( node );
  }

  // Set default colors
  mSymb.resize(SYMB_COUNT);
  mSymb[SYMB_BACKGROUND].setColor    ( QColor ( 255, 255, 255 ) );  // white
  mSymb[SYMB_HIGHLIGHT].setColor     ( QColor ( 255, 255,   0 ) );  // yellow
  mSymb[SYMB_DYNAMIC].setColor       ( QColor ( 125, 125, 125 ) );  // grey
  mSymb[SYMB_POINT].setColor         ( QColor (   0,   0,   0 ) );  // black
  mSymb[SYMB_LINE].setColor          ( QColor (   0,   0,   0 ) );  // black
  mSymb[SYMB_BOUNDARY_0].setColor    ( QColor ( 255,   0,   0 ) );  // red
  mSymb[SYMB_BOUNDARY_1].setColor    ( QColor ( 255, 125,   0 ) );  // orange
  mSymb[SYMB_BOUNDARY_2].setColor    ( QColor (   0, 255,   0 ) );  // green
  mSymb[SYMB_CENTROID_IN].setColor   ( QColor (   0, 255,   0 ) );  // green
  mSymb[SYMB_CENTROID_OUT].setColor  ( QColor ( 255,   0,   0 ) );  // red
  mSymb[SYMB_CENTROID_DUPL].setColor ( QColor ( 255,   0, 255 ) );  // magenta
  mSymb[SYMB_NODE_1].setColor        ( QColor ( 255,   0,   0 ) );  // red
  mSymb[SYMB_NODE_2].setColor        ( QColor (   0, 255,   0 ) );  // green

  // Set mSymbDisplay
  mSymbDisplay.resize(SYMB_COUNT);
  mSymbDisplay[SYMB_BACKGROUND] = true;
  mSymbDisplay[SYMB_HIGHLIGHT] = true;
  mSymbDisplay[SYMB_DYNAMIC] = true;
  mSymbDisplay[SYMB_POINT] = true;
  mSymbDisplay[SYMB_LINE] = true;
  mSymbDisplay[SYMB_BOUNDARY_0] = true;
  mSymbDisplay[SYMB_BOUNDARY_1] = true;
  mSymbDisplay[SYMB_BOUNDARY_2] = true;
  mSymbDisplay[SYMB_CENTROID_IN] = true;
  mSymbDisplay[SYMB_CENTROID_OUT] = true;
  mSymbDisplay[SYMB_CENTROID_DUPL] = true;
  mSymbDisplay[SYMB_NODE_1] = true;
  mSymbDisplay[SYMB_NODE_2] = true;

  // Set symbology names
  mSymbName.resize(SYMB_COUNT);
  mSymbName[SYMB_BACKGROUND]    = "Background";
  mSymbName[SYMB_HIGHLIGHT]     = "Highlight";
  mSymbName[SYMB_DYNAMIC]       = "Dynamic";
  mSymbName[SYMB_POINT]         = "Point";
  mSymbName[SYMB_LINE]          = "Line";
  mSymbName[SYMB_BOUNDARY_0]    = "Boundary (no area)";
  mSymbName[SYMB_BOUNDARY_1]    = "Boundary (1 area)";
  mSymbName[SYMB_BOUNDARY_2]    = "Boundary (2 areas)";
  mSymbName[SYMB_CENTROID_IN]   = "Centroid (in area)";
  mSymbName[SYMB_CENTROID_OUT]  = "Centroid (outside area)";
  mSymbName[SYMB_CENTROID_DUPL] = "Centroid (duplicate in area)";
  mSymbName[SYMB_NODE_1]        = "Node (1 line)";
  mSymbName[SYMB_NODE_2]        = "Node (2 lines)";

  // Restore symbology
  QString spath = "/GRASS/edit/symb/";
  QSettings settings("QuantumGIS", "qgis");

  mLineWidth = settings.readNumEntry (
                 spath + "lineWidth", 1 );
  mSize = settings.readNumEntry (
                 spath + "markerSize", 9 );
  mLineWidthSpinBox->setValue(mLineWidth);
  mMarkerSizeSpinBox->setValue(mSize);

  for ( int i = 0; i < SYMB_COUNT; i++ ) {
    bool ok;
    bool displ = settings.readBoolEntry ( 
                  spath + "display/" + QString::number(i), 
                  true, &ok );
    if ( ok ) {
      mSymbDisplay[i] = displ;
    }

    QString colorName = settings.readEntry (
                 spath + "color/" + QString::number(i), 
                 "", &ok );
    if ( ok ) {
      QColor color( colorName );
      mSymb[i].setColor( color );
    }
    mSymb[i].setWidth( mLineWidth );
  }

  // Set Symbology in dialog
  symbologyList->setColumnText(0,"Disp");
  symbologyList->setColumnWidth(0,20);
  symbologyList->addColumn("Color");
  symbologyList->setColumnWidth(0,50);
  symbologyList->addColumn("Type");
  symbologyList->setColumnWidthMode(2,Q3ListView::Maximum);
  symbologyList->addColumn("Index", 0);
  symbologyList->clear();
  symbologyList->setSorting(-1);

  for ( int i = SYMB_COUNT-1; i >= 0; i-- ) {
    if ( i == SYMB_NODE_0 ) continue;

    QPixmap pm ( 40, 15 );
    pm.fill( mSymb[i].color() );
    QString index;
    index.sprintf ("%d", i );

    if ( i == SYMB_BACKGROUND || i == SYMB_HIGHLIGHT || i == SYMB_DYNAMIC ) { 
      Q3ListViewItem *lvi = new Q3ListViewItem ( symbologyList , "", "", mSymbName[i] );
      lvi->setPixmap ( 1, pm );
      lvi->setText ( 3, index );
    } else {
      Q3CheckListItem *clvi = new Q3CheckListItem ( symbologyList , "", Q3CheckListItem::CheckBox );
      clvi->setText ( 2, mSymbName[i] );
      clvi->setPixmap ( 1, pm );
      clvi->setOn ( mSymbDisplay[i] );
      clvi->setText ( 3, index );
    }
  }

  connect( symbologyList, SIGNAL(pressed(Q3ListViewItem *, const QPoint &, int)), 
      this, SLOT(changeSymbology(Q3ListViewItem *, const QPoint &, int)));

  // Init table tab
  mAttributeTable->setLeftMargin(0); // hide row labels
  mAttributeTable->horizontalHeader()->setLabel( 0, "Column" );
  mAttributeTable->horizontalHeader()->setLabel( 1, "Type" );
  mAttributeTable->horizontalHeader()->setLabel( 2, "Length" );

  int ndblinks = mProvider->numDbLinks();

  if ( ndblinks > 0 ) {
    for ( int i = 0; i < ndblinks; i++ ) {
      int f = mProvider->dbLinkField ( i ); 

      QString str;
      str.sprintf ( "%d", f );  
      mTableField->insertItem ( str );
      mFieldBox->insertItem( str );
      if ( i == 0 ) {
        setAttributeTable( f );
      }
    }
    mTableField->setCurrentItem ( 0 ); 
    mFieldBox->setCurrentItem ( 0 );
  } else { 
    mTableField->insertItem ( "1" );
    setAttributeTable ( 1 );

    mFieldBox->insertItem("1");
  }

  connect( mAttributeTable, SIGNAL(valueChanged(int,int)), this, SLOT(columnTypeChanged(int,int)) );

  // Set variables
  mSelectedLine = 0;
  mAttributes = 0;

  // Read max cats
  for (int i = 0; i < mProvider->cidxGetNumFields(); i++ ) {
    int field = mProvider->cidxGetFieldNumber(i);
    if ( field > 0 ) {
      int cat = mProvider->cidxGetMaxCat(i);
      MaxCat mc;
      mc.field = field;
      mc.maxCat = cat;
      mMaxCats.push_back(mc);
    }
  }

  connect( mCanvas, SIGNAL(renderComplete(QPainter *)), this, SLOT(postRender(QPainter *)));

  mCanvasEdit = new QgsGrassEditLayer(mCanvas);
  mCanvasEdit->show();
  
  mPixmap = &mCanvasEdit->pixmap();

  mRubberBandLine = new QgsRubberBand(mCanvas);
  mRubberBandIcon = new QgsVertexMarker(mCanvas);
  mRubberBandLine->setZ(20);
  mRubberBandIcon->setZ(20);
  mRubberBandLine->show();
  mRubberBandIcon->show();

  // Init GUI values
  mCatModeBox->insertItem( "Next not used", CAT_MODE_NEXT );
  mCatModeBox->insertItem( "Manual entry", CAT_MODE_MANUAL );
  mCatModeBox->insertItem( "No category", CAT_MODE_NOCAT );
  catModeChanged ( );

  // TODO: how to get keyboard events from canvas (shortcuts)

  newPoint();

  restorePosition();

  mValid = true; 
}

void QgsGrassEdit::attributeTableFieldChanged ( void )
{
#ifdef QGISDEBUG
  std::cerr << "QgsGrassEdit::attributeTableFieldChanged" << std::endl;
#endif
  int field = mTableField->currentText().toInt();

  setAttributeTable ( field );
}

void QgsGrassEdit::setAttributeTable ( int field )
{
  mAttributeTable->setNumRows ( 0 );

  QString *key = mProvider->key ( field );

  if ( !key->isEmpty() ) { // Database link defined
    std::vector<QgsField> *cols = mProvider->columns ( field );

    mAttributeTable->setNumRows ( cols->size() );


    for ( int c = 0; c < cols->size(); c++ ) {
      QgsField col = (*cols)[c];

      Q3TableItem *ti;

      ti = new Q3TableItem( mAttributeTable, Q3TableItem::Never, col.name() );
      ti->setEnabled( false );
      mAttributeTable->setItem ( c, 0, ti );

      ti = new Q3TableItem( mAttributeTable, Q3TableItem::Never, col.type() );
      ti->setEnabled( false );
      mAttributeTable->setItem ( c, 1, ti );

      QString str;
      str.sprintf("%d", col.length() );
      ti = new Q3TableItem( mAttributeTable, Q3TableItem::Never, str );
      ti->setEnabled( false );
      mAttributeTable->setItem ( c, 2, ti );
    }
  } else {
    mAttributeTable->setNumRows ( 1 );

    Q3TableItem *ti;

    ti = new Q3TableItem( mAttributeTable, Q3TableItem::Always, "cat" );
    mAttributeTable->setItem ( 0, 0, ti );

    ti = new Q3TableItem( mAttributeTable, Q3TableItem::Never, "integer" );
    ti->setEnabled( false );
    mAttributeTable->setItem ( 0, 1, ti );

    ti = new Q3TableItem( mAttributeTable, Q3TableItem::Never, "" );
    ti->setEnabled( false );
    mAttributeTable->setItem ( 0, 2, ti );
  }
}

void QgsGrassEdit::addColumn ( void )
{
#ifdef QGISDEBUG
  std::cerr << "QgsGrassEdit::addColumn()" << std::endl;
#endif
  int r = mAttributeTable->numRows();
  mAttributeTable->setNumRows( r+1 );
  mAttributeTable->setRowReadOnly ( r, false );

  QString cn;
  cn.sprintf ( "column%d", r+1 );

  Q3TableItem *ti;

  ti = new Q3TableItem( mAttributeTable, Q3TableItem::Always, cn );
  mAttributeTable->setItem ( r, 0, ti );

  QStringList types;
  types.push_back ( "integer" );
  types.push_back ( "double precision" );
  types.push_back ( "varchar" );

  Q3ComboTableItem *cti = new Q3ComboTableItem ( mAttributeTable, types ); 
  cti->setCurrentItem(0);
  mAttributeTable->setItem ( r, 1, cti );

  ti = new Q3TableItem( mAttributeTable, Q3TableItem::Never, "20" );
  ti->setEnabled(false);
  mAttributeTable->setItem ( r, 2, ti );
}

void QgsGrassEdit::columnTypeChanged ( int row, int col )
{
#ifdef QGISDEBUG
  std::cerr << "QgsGrassEdit::columnChanged() row = " << row << " col = " << col << std::endl;
#endif

  if ( col != 1 ) return;

  Q3ComboTableItem *cti = (Q3ComboTableItem *) mAttributeTable->item ( row, 1 ); 

  Q3TableItem *ti = mAttributeTable->item ( row, 2 );

  if ( cti->currentText().compare( "varchar" ) != 0 ) {
    Q3TableItem *nti = new Q3TableItem( mAttributeTable, Q3TableItem::Never, ti->text() );
    nti->setEnabled(false);
    mAttributeTable->setItem ( row, 2, nti );
    //delete ti;
  } else {
    Q3TableItem *nti = new Q3TableItem( mAttributeTable, Q3TableItem::Always, ti->text() );
    nti->setEnabled(true);
    mAttributeTable->setItem ( row, 2, nti );
    //delete ti;
  }
  mAttributeTable->updateCell ( row, 2 );
}

void QgsGrassEdit::alterTable ( void )
{
#ifdef QGISDEBUG
  std::cerr << "QgsGrassEdit::alterTable()" << std::endl;
#endif

  // Create new table if first column name is editable otherwise alter table
  int field = mTableField->currentText().toInt();

  Q3TableItem *ti;
  ti = mAttributeTable->item ( 0, 0 );

  QString sql;

  if ( mAttributeTable->item(0,0)->isEnabled() ) {
#ifdef QGISDEBUG
    std::cerr << "Create new table" << std::endl;
#endif

    for ( int i = 0; i < mAttributeTable->numRows(); i++ ) {
      if ( i > 0 ) sql.append(", " );


      sql.append ( mAttributeTable->item(i,0)->text() + " " + mAttributeTable->item(i,1)->text() );

      if ( mAttributeTable->item(i,1)->text().compare("varchar") == 0 ) {
        sql.append ( " (" + mAttributeTable->item(i,2)->text() + ")" );
      }
    }

    QString *error = mProvider->createTable ( field, mAttributeTable->item(0,0)->text(), sql );  

    if ( !error->isEmpty() ) {
      QMessageBox::warning( 0, "Warning", *error );
    } else {
      QMessageBox::information( 0, "Info", "The table was created" );
      QString str;
      str.sprintf ( "%d", field );
      mFieldBox->insertItem( str );
    }
    delete error;
  } else { 
#ifdef QGISDEBUG
    std::cerr << "Alter table" << std::endl;
#endif

    for ( int i = 0; i < mAttributeTable->numRows(); i++ ) {
      if ( !(mAttributeTable->item(i,0)->isEnabled()) ) continue;

      sql = mAttributeTable->item(i,0)->text() + " " + mAttributeTable->item(i,1)->text();

      if ( mAttributeTable->item(i,1)->text().compare("varchar") == 0 ) {
        sql.append ( " (" + mAttributeTable->item(i,2)->text() + ")" );
      }

      QString *error = mProvider->addColumn ( field, sql );  

      if ( !error->isEmpty() ) {
        QMessageBox::warning( 0, "Warning", *error );
      }
      delete error;
    }
  }

  setAttributeTable ( field );
}

void QgsGrassEdit::changeSymbology(Q3ListViewItem * item, const QPoint & pnt, int col)
{
#ifdef QGISDEBUG
  std::cerr << "QgsGrassEdit::changeSymbology() col = " << col << std::endl;
#endif

  QSettings settings("QuantumGIS", "qgis");

  if ( !item ) return;

  int index = item->text(3).toInt();

  if ( col == 0 ) { 
    if ( index == SYMB_BACKGROUND || index == SYMB_HIGHLIGHT || index == SYMB_DYNAMIC ) return; 

    Q3CheckListItem *clvi = (Q3CheckListItem *) item;
    mSymbDisplay[index] = clvi->isOn();

    int ww = settings.readNumEntry("/GRASS/windows/edit/w", 420);
    QString sn;
    // TODO use a name instead of index
    sn.sprintf( "/GRASS/edit/symb/display/%d", index );
    settings.writeEntry ( sn, mSymbDisplay[index] );
  } else if ( col == 1 ) {
    QColor color = QColorDialog::getColor ( mSymb[index].color(), this );
    mSymb[index].setColor( color );

    QPixmap pm ( 40, 15 );
    pm.fill( mSymb[index].color() );
    item->setPixmap ( 1, pm );

    QString sn;
    // TODO use a name instead of index
    sn.sprintf( "/GRASS/edit/symb/color/%d", index );
    settings.writeEntry ( sn, mSymb[index].color().name() );
  }
}

void QgsGrassEdit::lineWidthChanged()
{
#ifdef QGISDEBUG
    std::cerr << "QgsGrassEdit::lineWidthChanged()" << std::endl;
#endif
    QSettings settings("QuantumGIS", "qgis");
    mLineWidth = mLineWidthSpinBox->value();

    for ( int i = 0; i < SYMB_COUNT; i++ ) {
        mSymb[i].setWidth( mLineWidth );
    }
 
    QString spath = "/GRASS/edit/symb/";
    settings.writeEntry ( spath + "lineWidth", mLineWidth );
}

void QgsGrassEdit::markerSizeChanged()
{
#ifdef QGISDEBUG
    std::cerr << "QgsGrassEdit::markerSizeChanged()" << std::endl;
#endif
    QSettings settings("QuantumGIS", "qgis");
    mSize = mMarkerSizeSpinBox->value();
    QString spath = "/GRASS/edit/symb/";
    settings.writeEntry ( spath + "markerSize", mSize );
}

void QgsGrassEdit::restorePosition()
{
  QSettings settings("QuantumGIS", "qgis");
  int ww = settings.readNumEntry("/GRASS/windows/edit/w", 420);
  int wh = settings.readNumEntry("/GRASS/windows/edit/h", 150);
  int wx = settings.readNumEntry("/GRASS/windows/edit/x", 100);
  int wy = settings.readNumEntry("/GRASS/windows/edit/y", 100);
  resize(ww,wh);
  move(wx,wy);
}

void QgsGrassEdit::saveWindowLocation()
{
  QSettings settings("QuantumGIS", "qgis");
  QPoint p = this->pos();
  QSize s = this->size();
  settings.writeEntry("/GRASS/windows/edit/x", p.x());
  settings.writeEntry("/GRASS/windows/edit/y", p.y());
  settings.writeEntry("/GRASS/windows/edit/w", s.width());
  settings.writeEntry("/GRASS/windows/edit/h", s.height());
} 

void QgsGrassEdit::updateSymb ( void )
{
#ifdef QGISDEBUG
  std::cerr << "QgsGrassEdit::updateSymb" << std::endl;
#endif

  // Set lines symbology from map
  int nlines = mProvider->numLines(); 
  if ( nlines+1 >= mLineSymb.size() )
    mLineSymb.resize(nlines+1000); 

  nlines = mProvider->numUpdatedLines();
  for ( int i = 0; i < nlines; i++ ) {
    int line = mProvider->updatedLine(i);
    std::cerr << "updated line = " << line << std::endl;
    if ( !(mProvider->lineAlive(line)) ) continue;
    mLineSymb[line] = lineSymbFromMap ( line );
  }

  // Set nodes symbology from map
  int nnodes = mProvider->numNodes(); 
  if ( nnodes+1 >= mNodeSymb.size() )
    mNodeSymb.resize(nnodes+1000); 

  nnodes = mProvider->numUpdatedNodes(); 
  for ( int i = 0; i < nnodes; i++ ) {
    int node = mProvider->updatedNode(i);
    if ( !(mProvider->nodeAlive(node)) ) continue;
    mNodeSymb[node] = nodeSymbFromMap ( node );
    std::cerr << "node = " << node << " mNodeSymb = " << mNodeSymb[node] << std::endl;
  }
}

int QgsGrassEdit::nodeSymbFromMap ( int node )
{
#ifdef QGISDEBUG
  std::cerr << "QgsGrassEdit::nodeSymbFromMap() node = " <<  node << std::endl;
#endif

  int nlines = mProvider->nodeNLines ( node );

  int count = 0;

  for ( int i = 0; i < nlines; i++ ) {
    int line = abs (  mProvider->nodeLine(node,i) );
    int type = mProvider->readLine ( NULL, NULL, line );

    if ( type & GV_LINES )
      count++;
  }

  if ( count == 0 ) 
    return SYMB_NODE_0;
  else if ( count == 1 )
    return SYMB_NODE_1;

  return SYMB_NODE_2;
}

int QgsGrassEdit::lineSymbFromMap ( int line )
{
#ifdef QGISDEBUG
  std::cerr << "QgsGrassEdit::lineSymbFromMap() line = " << line << std::endl;
#endif

  int type = mProvider->readLine ( NULL, NULL, line );

  if ( type < 0 ) return 0;

  switch ( type ) {
    case GV_POINT:
      return SYMB_POINT;
      break;

    case GV_LINE:
      return SYMB_LINE;
      break;

    case GV_BOUNDARY:
      int left, right, nareas;

      if ( !(mProvider->lineAreas(line, &left, &right)) ) return 0;

      /* Count areas/isles on both sides */
      nareas = 0;
      if ( left != 0 ) nareas++;
      if ( right != 0 ) nareas++;
      if ( nareas == 0 ) return SYMB_BOUNDARY_0;
      else if ( nareas == 1 ) return SYMB_BOUNDARY_1;
      else return SYMB_BOUNDARY_2;
      break;

    case GV_CENTROID:
      int area = mProvider->centroidArea ( line );
      if ( area == 0 ) return SYMB_CENTROID_OUT;
      else if ( area > 0 ) return SYMB_CENTROID_IN;  
      else return SYMB_CENTROID_DUPL; /* area < 0 */ 
      break;
  }

  return 0; // Should not happen
}

QgsGrassEdit::~QgsGrassEdit()
{
#ifdef QGISDEBUG
  std::cerr << "QgsGrassEdit::~QgsGrassEdit()" << std::endl;
#endif

  if (mCanvasEdit) {
    
    eraseDynamic();
    mRubberBandLine->hide();
    mRubberBandIcon->hide();
    mRubberBandLine->reset();
    delete mRubberBandLine;
    delete mRubberBandIcon;
    delete mCanvasEdit;
    mCanvas->refresh();
  }

  saveWindowLocation();
  mRunning = false;
  
}

bool QgsGrassEdit::isRunning(void)
{
  return mRunning;
}

bool QgsGrassEdit::isValid(void)
{
  return mValid;
}

void QgsGrassEdit::closeEdit(void)
{
#ifdef QGISDEBUG
  std::cerr << "QgsGrassEdit::close()" << std::endl;
#endif

  // grass edit tool would become invalid
  // so change it to another one, e.g. pan tool
  mQgisApp->pan();

  // Disconnect signals
  // Warning: it seems that slots (postRender) can be called even 
  //          after disconnect (is it a queue?) 
  disconnect( this, SLOT(postRender(QPainter *)));

  mValid = false; // important for postRender

  if ( mAttributes ) {
    delete mAttributes;
  }

  mProvider->closeEdit(mNewMap);

  hide();

  // Add new layers
  if ( mNewMap )
  {
     QString uri = QDir::cleanDirPath ( mProvider->getDataSourceUri() );
     std::cerr << "uri = " << uri.ascii() << std::endl;
     // Note: QDir::cleanPath is using '/' also on Windows
     //QChar sep = QDir::separator();
     QChar sep = '/';

     QStringList split = QStringList::split ( sep, uri );
     split.pop_back(); // layer
     QString map = split.last();
     split.pop_back(); // map
     QString mapset = split.last();

     QgsGrassUtils::addVectorLayers ( mIface, QgsGrass::getDefaultGisdbase(), 
                                      QgsGrass::getDefaultLocation(),
				      mapset, map );
  }
  emit finished();
  delete this; 
}

void QgsGrassEdit::closeEvent(QCloseEvent *e)
{
#ifdef QGISDEBUG
  std::cerr << "QgsGrassEdit::closeEvent()" << std::endl;
#endif

  e->accept();

  closeEdit();
}

void QgsGrassEdit::catModeChanged ( void )
{
#ifdef QGISDEBUG
  std::cerr << "QgsGrassEdit::catModeChanged()" << std::endl;
#endif
  int mode = mCatModeBox->currentItem();

  int field = mFieldBox->currentText().toInt();

  if ( mode == CAT_MODE_NEXT ) { // Find next not used
    QString c = "1"; // Default for new field
    for (int i = 0; i < mMaxCats.size(); i++ ) {
      if ( mMaxCats[i].field == field ) {
        c.sprintf("%d", mMaxCats[i].maxCat+1);
        break;
      }
    }
    mCatEntry->setText ( c );
    mCatEntry->setEnabled(false);
    mFieldBox->setDisabled(false);
  } else if ( mode == CAT_MODE_MANUAL ) {
    mCatEntry->setEnabled(true);
    mFieldBox->setDisabled(false);
  } else { // CAT_MODE_NOCAT
    mCatEntry->clear ();
    mCatEntry->setEnabled(false);
    mFieldBox->setDisabled(true);
  }
}

void QgsGrassEdit::fieldChanged ( void )
{
#ifdef QGISDEBUG
  std::cerr << "QgsGrassEdit::fieldChanged()" << std::endl;
#endif
  int mode = mCatModeBox->currentItem();
  int field = mFieldBox->currentText().toInt();

  if ( mode == CAT_MODE_NEXT ) { // Find next not used
    QString c = "1"; // Default for new field
    for (int i = 0; i < mMaxCats.size(); i++ ) {
      if ( mMaxCats[i].field == field ) {
        c.sprintf("%d", mMaxCats[i].maxCat+1);
        break;
      }
    }
    mCatEntry->setText ( c );
  }
}

int QgsGrassEdit::writeLine ( int type, struct line_pnts *Points )
{
  int mode = mCatModeBox->currentItem();
  int field = mFieldBox->currentText().toInt();
  int cat = mCatEntry->text().toInt();

  Vect_reset_cats ( mCats );
  if ( mode == CAT_MODE_NEXT || mode == CAT_MODE_MANUAL ) {
    Vect_cat_set ( mCats, field, cat );

    // Insert new DB record if link is defined and the record for this cat does not exist
    QString *key = mProvider->key ( field );

    if ( !key->isEmpty() ) { // Database link defined 
      std::vector<QgsFeatureAttribute> *atts = mProvider->attributes ( field, cat );

      if ( atts->size() == 0 ) { // Nothing selected
        QString *error = mProvider->insertAttributes ( field, cat );

        if ( !error->isEmpty() ) {
          QMessageBox::warning( 0, "Warning", *error );
        }
        delete error;
      }

      delete atts;
    }
  }
  Vect_line_prune ( Points );
  int line = mProvider->writeLine ( type, Points, mCats );

  increaseMaxCat();
  return line;
}

void QgsGrassEdit::increaseMaxCat ( void )
{
  int mode = mCatModeBox->currentItem();
  int field = mFieldBox->currentText().toInt();
  int cat = mCatEntry->text().toInt();

  if ( mode == CAT_MODE_NEXT || mode == CAT_MODE_MANUAL ) {
    int found = 0;
    for (int i = 0; i < mMaxCats.size(); i++ ) {
      if ( mMaxCats[i].field == field ) {
        if ( cat > mMaxCats[i].maxCat ) {
          mMaxCats[i].maxCat = cat;
        }
        found = 1;
        break;
      }
    }
    if ( !found ) { 
      MaxCat mc;
      mc.field = field;
      mc.maxCat = cat;
      mMaxCats.push_back(mc);
    }

    if ( mode == CAT_MODE_NEXT ) { 
      QString c; 
      c.sprintf("%d", cat+1);
      mCatEntry->setText ( c );
    }
  }

}

double QgsGrassEdit::threshold ( void )
{
  int snapPixels = mSnapPixels->text().toInt();

  // Convert to map units (not nice)
  mTransform = mCanvas->getCoordinateTransform();
  double x1 = mTransform->toMapCoordinates( 0, 0 ).x();
  double x2 = mTransform->toMapCoordinates( snapPixels, 0 ).x();

  return ( x2 - x1 );
}

void QgsGrassEdit::snap (  double *x, double *y )
{
  double thresh = threshold();

  int node = mProvider->findNode ( *x, *y, thresh );

  if ( node > 0 ) {
    mProvider->nodeCoor ( node, x, y );
  }
}

void QgsGrassEdit::snap (  QgsPoint & point )
{
  double x = point.x();
  double y = point.y();

  snap ( &x, &y );

  point.setX(x);
  point.setY(y);
}

void QgsGrassEdit::newPoint(void) { startTool(QgsGrassEdit::NEW_POINT); }
void QgsGrassEdit::newLine(void) { 
  std::cerr << "QgsGrassEdit::newLine" << std::endl;
  startTool(QgsGrassEdit::NEW_LINE); 
}
void QgsGrassEdit::newBoundary(void) { 
  std::cerr << "QgsGrassEdit::newBoundary" << std::endl;
  startTool(QgsGrassEdit::NEW_BOUNDARY); 
}
void QgsGrassEdit::newCentroid(void) { startTool(QgsGrassEdit::NEW_CENTROID); }
void QgsGrassEdit::moveVertex(void) { startTool(QgsGrassEdit::MOVE_VERTEX); }
void QgsGrassEdit::addVertex(void) { startTool(QgsGrassEdit::ADD_VERTEX); }
void QgsGrassEdit::deleteVertex(void) { startTool(QgsGrassEdit::DELETE_VERTEX); }
void QgsGrassEdit::splitLine(void) { startTool(QgsGrassEdit::SPLIT_LINE); }
void QgsGrassEdit::moveLine(void) { startTool(QgsGrassEdit::MOVE_LINE); }
void QgsGrassEdit::deleteLine(void) { startTool(QgsGrassEdit::DELETE_LINE); }
void QgsGrassEdit::editCats(void) { startTool(QgsGrassEdit::EDIT_CATS); }
void QgsGrassEdit::editAttributes(void) { startTool(QgsGrassEdit::EDIT_ATTRIBUTES); }

void QgsGrassEdit::startTool(int tool)
{
#ifdef QGISDEBUG
  std::cerr << "QgsGrassEdit::startTool() tool = " << tool << std::endl;
#endif

  // Delete last dynamic drawing from canvas
  eraseDynamic();
  if ( mSelectedLine > 0 )
    displayElement ( mSelectedLine, mSymb[mLineSymb[mSelectedLine]], mSize );

  // close old tool by setting NULL tool
  mCanvas->setMapTool(NULL);

  // All necessary data were written -> reset mEditPoints etc.
  Vect_reset_line ( mEditPoints );
  mSelectedLine = 0;

  // TODO: mTool != NEW_LINE is a hack for lines until more buttons can be recieved
  if ( mAttributes && mTool != QgsGrassEdit::NEW_LINE && mTool != QgsGrassEdit::NEW_BOUNDARY ) {
    delete mAttributes;
    mAttributes = 0;
  }

  // Start new tool
  mTool = tool;

  QgsMapTool* t = NULL;
  switch (mTool)
  {
    case NEW_POINT:
      t = new QgsGrassEditNewPoint(this, false);
      t->setAction(mNewPointAction);
      break;
      
    case NEW_CENTROID:
      t = new QgsGrassEditNewPoint(this, true);
      t->setAction(mNewCentroidAction);
      break;
      
    case NEW_LINE:
      t = new QgsGrassEditNewLine(this, false);
      t->setAction(mNewLineAction);
      break;
  
    case NEW_BOUNDARY:
      t = new QgsGrassEditNewLine(this, true);
      t->setAction(mNewBoundaryAction);
      break;
      
    case MOVE_VERTEX:
      t = new QgsGrassEditMoveVertex(this);
      t->setAction(mMoveVertexAction);
      break;
      
    case ADD_VERTEX:
      t = new QgsGrassEditAddVertex(this);
      t->setAction(mAddVertexAction);
      break;
      
    case DELETE_VERTEX:
      t = new QgsGrassEditDeleteVertex(this);
      t->setAction(mDeleteVertexAction);
      break;
      
    case MOVE_LINE:
      t = new QgsGrassEditMoveLine(this);
      t->setAction(mMoveLineAction);
      break;
      
    case DELETE_LINE:
      t = new QgsGrassEditDeleteLine(this);
      t->setAction(mDeleteLineAction);
      break;
      
    case SPLIT_LINE:
      t = new QgsGrassEditSplitLine(this);
      t->setAction(mSplitLineAction);
      break;
      
    case EDIT_ATTRIBUTES:
      t = new QgsGrassEditAttributes(this);
      t->setAction(mEditAttributesAction);
      break;
      
    case EDIT_CATS:
      mTool = NONE;
      QMessageBox::warning( 0, "Warning", "Tool not yet implemented." );
      break;

    default:
      std::cerr << "Unknown tool" << std::endl;
      break;
  }
    
  // assign newly created tool to map canvas
  // canvas will take care of destroying it
  mCanvas->setMapTool(t);

}



void QgsGrassEdit::checkOrphan ( int field, int cat )
{
  #ifdef QGISDEBUG
  std::cerr << "QgsGrassEdit::checkOrphan field = " << field
               << " cat = " << cat << std::endl;
  #endif

  int orphan;
  QString *error = mProvider->isOrphan ( field, cat, &orphan );

  if ( !error->isEmpty() ) {
      QMessageBox::warning( 0, "Warning", "Cannot check orphan record: "
                + *error );
      return;
  }
  if ( !orphan ) return;

  int ret = QMessageBox::question ( 0, "Warning", 
	      "Orphan record was left in attribute table. "
	      "<br>Delete the record?",  
	      QMessageBox::Yes,  QMessageBox::No );

  if ( ret == QMessageBox::No ) return;

  // Delete record
  error = mProvider->deleteAttributes ( field, cat );
  if ( !error->isEmpty() ) {
      QMessageBox::warning( 0, "Warning", "Cannot delete orphan record: "
                + *error );
      return;
  }
}

void QgsGrassEdit::addAttributes ( int field, int cat )
{
  QString *key = mProvider->key ( field );

  QString lab;
  lab.sprintf ( "%d:%d", field, cat );
  int tab = mAttributes->addTab( lab );
  mAttributes->setField ( tab, field );

  QString catLabel;
  if ( key->isEmpty() ) {
    catLabel = "Category";
  } else {
    catLabel = *key;
  }
  mAttributes->setCat ( tab, catLabel, cat );

  if ( !key->isEmpty() ) { // Database link defined 
    std::vector<QgsField> *cols = mProvider->columns ( field );

    if ( cols->size() == 0 ) {
      QString str;
      str.setNum( field );
      QMessageBox::warning( 0, "Warning", "Cannot describe table for field " + str );
    } else {
      std::vector<QgsFeatureAttribute> *atts = 
        mProvider->attributes ( field, cat );

      if ( atts->size() == 0 ) { // cannot select attributes
        mAttributes->addTextRow ( tab, "WARNING: ATTRIBUTES MISSING" );
      } else {
        int size;
        if ( atts->size() < cols->size() )
          size = atts->size();
        else
          size = cols->size();

        for ( int j = 0; j < cols->size(); j++ ) {
          QgsField col = (*cols)[j];
          QgsFeatureAttribute att = (*atts)[j];
          std::cerr << " name = " << col.name().toLocal8Bit().data() <<  std::endl;

          if ( col.name() != *key ) {
            std::cerr << " value = " << att.fieldValue().toLocal8Bit().data() <<  std::endl;
            mAttributes->addAttribute ( tab, col.name(), att.fieldValue(), col.type() );
          }
        }
      }
      delete atts;
    }
    delete cols;
  }
}

void QgsGrassEdit::addCat ( int line )
{
  int mode = mCatModeBox->currentItem();
  int field = mFieldBox->currentText().toInt();
  int cat = mCatEntry->text().toInt();

  int type = mProvider->readLine ( mPoints, mCats, line );
  if ( mode == CAT_MODE_NEXT || mode == CAT_MODE_MANUAL ) {
    Vect_cat_set ( mCats, field, cat );
  }

  line = mProvider->rewriteLine ( line, type, mPoints, mCats );
  if ( mAttributes ) mAttributes->setLine ( line );
  updateSymb();
  increaseMaxCat();

  // Insert new DB record if link is defined and the record for this cat does not exist
  QString *key = mProvider->key ( field );

  if ( !key->isEmpty() ) { // Database link defined 
    std::vector<QgsFeatureAttribute> *atts = mProvider->attributes ( field, cat );

    if ( atts->size() == 0 ) { // Nothing selected
      QString *error = mProvider->insertAttributes ( field, cat );

      if ( !error->isEmpty() ) {
        QMessageBox::warning( 0, "Warning", *error );
      }
      delete error;
    }

    delete atts;
  }

  addAttributes( field, cat );
}

void QgsGrassEdit::deleteCat ( int line, int field, int cat )
{
#ifdef QGISDEBUG
  std::cerr << "QgsGrassEdit::deleteCat" << std::endl;
#endif

  int type = mProvider->readLine ( mPoints, mCats, line );
  Vect_field_cat_del ( mCats, field, cat );

  line = mProvider->rewriteLine ( line, type, mPoints, mCats );
  if ( mAttributes ) mAttributes->setLine ( line );

  // Check orphan record
  checkOrphan ( field, cat );

  updateSymb();
}


void QgsGrassEdit::postRender(QPainter *)
{
#ifdef QGISDEBUG
  std::cerr << "QgsGrassEdit::postRender" << std::endl;
#endif

  // Warning: it seems that this slot can be called even 
  //          after disconnect (is it a queue?) 
  //          -> check mValid

  if ( !mValid ) return;

  displayMap();

  // Redisplay highlighted
  if ( mSelectedLine ) {
    displayElement ( mSelectedLine, mSymb[SYMB_HIGHLIGHT], mSize );
  }
}

void QgsGrassEdit::displayMap ()
{
#ifdef QGISDEBUG
  std::cerr << "QgsGrassEdit::displayMap" << std::endl;
#endif

  mTransform = mCanvas->getCoordinateTransform();

  // re-create pixmap - it's transparent by default
  *mPixmap = QPixmap(mCanvas->size());
  mPixmap->fill(QColor(0,0,0,0));

  QPainter *painter = new QPainter();
  painter->begin(mPixmap);
  
  // Display lines
  int nlines = mProvider->numLines(); 

  QPen pen;

  // TODO?: 2 loops, first lines, then points
  for ( int line = 1; line <= nlines; line++ ) {
    displayElement ( line, mSymb[mLineSymb[line]], mSize, painter );
  }

  // Display nodes
  int nnodes = mProvider->numNodes(); 

  pen.setColor(QColor(255,0,0));

  if ( mSymbDisplay[SYMB_NODE_1] || mSymbDisplay[SYMB_NODE_2] ) {
    for ( int node = 1; node <= nnodes; node++ ) {
      if ( mNodeSymb[node] == SYMB_NODE_0 ) continue; // do not display nodes with points only
      displayNode ( node, mSymb[mNodeSymb[node]], mSize, painter ); 
    }
  }

  painter->end();
  delete painter;
  
  mCanvas->updateContents();
}

void QgsGrassEdit::displayUpdated (void)
{
#ifdef QGISDEBUG
  std::cerr << "QgsGrassEdit::displayUpdated" << std::endl;
#endif

  mTransform = mCanvas->getCoordinateTransform();

  QPainter *painter = new QPainter();
  painter->begin(mPixmap);

  // Display lines
  int nlines = mProvider->numUpdatedLines();

  for ( int i = 0; i < nlines; i++ ) {
    int line = mProvider->updatedLine(i);
    if ( !(mProvider->lineAlive(line)) ) continue;

    displayElement ( line, mSymb[mLineSymb[line]], mSize, painter );
  }

  // Display nodes
  int nnodes = mProvider->numUpdatedNodes(); 
  for ( int i = 0; i < nnodes; i++ ) {
    int node = mProvider->updatedNode(i);
    if ( !(mProvider->nodeAlive(node)) ) continue;
    if ( mNodeSymb[node] == SYMB_NODE_0 ) continue; // do not display nodes with points only
    displayNode ( node, mSymb[mNodeSymb[node]], mSize, painter ); 
  }

  painter->end();
  delete painter;

  mCanvas->updateContents();
}

void QgsGrassEdit::displayElement ( int line, const QPen & pen, int size, QPainter *painter)
{
#if QGISDEBUG
  std::cerr << "QgsGrassEdit::displayElement() line = " << line << std::endl;
#endif

  if ( !mSymbDisplay[mLineSymb[line]] ) return;

  int type = mProvider->readLine ( mPoints, NULL, line );
  if ( type < 0 ) return;

  QPainter *myPainter;
  if ( !painter ) {
    myPainter = new QPainter();
    myPainter->begin(mPixmap);
  } else {
    myPainter = painter;
  }

  if ( type & GV_POINTS ) {
    displayIcon ( mPoints->x[0], mPoints->y[0], pen, QgsVertexMarker::ICON_CROSS, size, myPainter );
  } else { // line
    QgsPoint point;
    Q3PointArray pointArray(mPoints->n_points);

    for ( int i = 0; i < mPoints->n_points; i++ ) {
      point.setX(mPoints->x[i]);
      point.setY(mPoints->y[i]);
      mTransform->transform(&point);
      pointArray.setPoint( i, static_cast<int>(point.x()), 
          static_cast<int>(point.y()) ); 
    }

    myPainter->setPen ( pen );
    myPainter->drawPolyline ( pointArray );
  }

  if ( !painter ) {
    myPainter->end();
    mCanvas->updateContents();
    delete myPainter;
  }
}

void QgsGrassEdit::eraseElement ( int line )
{
#ifdef QGISDEBUG
  std::cerr << "QgsGrassEdit::eraseElement() line = " << line << std::endl;
#endif

  int type = mProvider->readLine ( NULL, NULL, line );
  if ( type < 0 ) return;

  // Erase line
  displayElement ( line, mSymb[SYMB_BACKGROUND], mSize );

  // Erase nodes
  if ( type & GV_LINES ) {
    int node1, node2;
    mProvider->lineNodes( line, &node1, &node2 );

    double x, y;
    mProvider->nodeCoor( node1, &x, &y );
    displayIcon ( x, y, mSymb[SYMB_BACKGROUND], QgsVertexMarker::ICON_X, mSize );

    mProvider->nodeCoor( node2, &x, &y );
    displayIcon ( x, y, mSymb[SYMB_BACKGROUND], QgsVertexMarker::ICON_X, mSize );
  }
}

void QgsGrassEdit::eraseDynamic ( void )
{
  displayDynamic ( 0, 0.0, 0.0, QgsVertexMarker::ICON_NONE, 0 );
}

void QgsGrassEdit::displayDynamic ( struct line_pnts *Points )
{
  displayDynamic ( Points, 0.0, 0.0, QgsVertexMarker::ICON_NONE, 0 );
}

void QgsGrassEdit::displayDynamic ( double x, double y, int type, int size )
{
#if QGISDEBUG
  std::cerr << "QgsGrassEdit::displayDynamic icon" << std::endl;
#endif

  displayDynamic ( 0, x, y, type, size );
}

void QgsGrassEdit::displayDynamic ( struct line_pnts *Points, double x, double y, int type, int size )
{
#if QGISDEBUG
   std::cerr << "QgsGrassEdit::displayDynamic Points = " << Points << " type = " << type  << std::endl;
#endif
    QgsPoint point;

    mTransform = mCanvas->getCoordinateTransform();

    mRubberBandLine->reset();

    if ( Points )
    {
        for ( int i = 0; i < Points->n_points; i++ ) 
        {
	    point.setX(Points->x[i]);
	    point.setY(Points->y[i]);
      mRubberBandLine->addPoint(point);
        }
    }

    mRubberBandIcon->setIconType(type);
    mRubberBandIcon->setIconSize(size);
    mRubberBandIcon->setCenter(QgsPoint(x,y));
}

void QgsGrassEdit::displayNode ( int node, const QPen & pen, int size, QPainter *painter )
{
#if QGISDEBUG
  std::cerr << "QgsGrassEdit::displayNode() node = " << node << std::endl;
#endif

  if ( !mSymbDisplay[mNodeSymb[node]] ) return;

  double x, y;

  if ( !(mProvider->nodeCoor(node,&x,&y )) ) return;

  displayIcon ( x, y, pen, QgsVertexMarker::ICON_X, size, painter );
}

void QgsGrassEdit::displayIcon ( double x, double y, const QPen & pen, 
    int type, int size, QPainter *painter )
{
#if QGISDEBUG
  std::cerr << "QgsGrassEdit::displayIcon()" << std::endl;
#endif

  QgsPoint point;
  Q3PointArray pointArray(2);

  point.setX(x);
  point.setY(y);
  mTransform->transform(&point);

  int px = static_cast<int>(point.x());
  int py = static_cast<int>(point.y());
  int m = (size-1)/2;

  QPainter *myPainter;
  if ( !painter ) {
    myPainter = new QPainter();
    myPainter->begin(mPixmap);
  } else {
    myPainter = painter;
  }

  myPainter->setPen ( pen );

  switch ( type ) {
    case QgsVertexMarker::ICON_CROSS :
      pointArray.setPoint( 0, px-m, py ); 
      pointArray.setPoint( 1, px+m, py ); 
      myPainter->drawPolyline ( pointArray );

      pointArray.setPoint( 0, px, py+m ); 
      pointArray.setPoint( 1, px, py-m ); 
      myPainter->drawPolyline ( pointArray );
      break;
    case QgsVertexMarker::ICON_X :
      pointArray.setPoint( 0, px-m, py+m ); 
      pointArray.setPoint( 1, px+m, py-m ); 
      myPainter->drawPolyline ( pointArray );

      pointArray.setPoint( 0, px-m, py-m ); 
      pointArray.setPoint( 1, px+m, py+m ); 
      myPainter->drawPolyline ( pointArray );
      break;
    case QgsVertexMarker::ICON_BOX :
      pointArray.resize(5);
      pointArray.setPoint( 0, px-m, py-m ); 
      pointArray.setPoint( 1, px+m, py-m ); 
      pointArray.setPoint( 2, px+m, py+m ); 
      pointArray.setPoint( 3, px-m, py+m ); 
      pointArray.setPoint( 4, px-m, py-m ); 
      myPainter->drawPolyline ( pointArray );
      break;
  }

  if ( !painter ) {
    myPainter->end();
    mCanvas->updateContents();
    delete myPainter;
  }
}

void QgsGrassEdit::setCanvasPropmt( QString left, QString mid, QString rigth)
{
  std::cerr << "QgsGrassEdit::setCanvasPropmt" << std::endl;
  mCanvasPrompt = "";
  if ( left.length() > 0 ) mCanvasPrompt.append ( tr("Left: ") + left + "   " );
  if ( mid.length() > 0 ) mCanvasPrompt.append ( tr("Middle: ") + mid + "   " );
  if ( rigth.length() > 0 ) mCanvasPrompt.append ( tr("Rigth: ") + rigth );
}
