/***************************************************************************
                         qgscomposer.cpp  -  description
                             -------------------
    begin                : January 2005
    copyright            : (C) 2005 by Radim Blazek
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
#include <qdir.h>
#include <qprinter.h>
#include <qpainter.h>
#include <qwmatrix.h>
#include <qlayout.h>
#include <qfile.h>
#include <qstring.h>
#include <qmessagebox.h>
#include <qtabwidget.h>
#include <qpoint.h>
#include <qcombobox.h>
#include <qobjectlist.h>
#include <qpaintdevicemetrics.h>
#include <qdom.h>
#include <qsettings.h>
#include <qdesktopwidget.h>
#include <qapplication.h>
#include <qevent.h>
#include <qvaluelist.h>
#include <qsplitter.h>

#include "qgisapp.h"
#include "qgsproject.h"

#include "qgscomposerview.h"
#include "qgscomposer.h"
#include "qgscomposition.h"
#include "qgscomposeritem.h"
#include "qgscomposermap.h"

#include <iostream>

QgsComposer::QgsComposer( QgisApp *qgis): QgsComposerBase()
{
    mQgis = qgis;
    mFirstTime = true;

    std::cout << "QgsComposer::QgsComposer" << std::endl;

    mView = new QgsComposerView ( this, mViewFrame);
    mPrinter = 0;

    QGridLayout *l = new QGridLayout(mViewFrame, 1, 1 );
    l->addWidget( mView, 0, 0 );

    mCompositionOptionsLayout = new QGridLayout( mCompositionOptionsFrame, 1, 1 );
    mItemOptionsLayout = new QGridLayout( mItemOptionsFrame, 1, 1 );

    mCompositionNameComboBox->insertItem( "Map 1" );

    mComposition  = new QgsComposition( this, 1 );
    mComposition->setActive ( true );

    if ( ! connect( mQgis, SIGNAL( projectRead() ), this, SLOT( projectRead()) ) ) {
        qDebug( "unable to connect to projectRead" );
    } 
    if ( ! connect( mQgis, SIGNAL( newProject() ), this, SLOT(newProject()) ) ) {
        qDebug( "unable to connect to newProject" );
    }

    // Doesn't work, there is not such signal I think (copy from QgisApp)
    if ( ! connect(mQgis, SIGNAL(aboutToQuit()), this, SLOT(saveWindowState()) ) ) { 
        qDebug( "unable to connect to aboutToQuit" );
    }
    restoreWindowState();

    selectItem(); // Set selection tool
}

QgsComposer::~QgsComposer()
{
}

void QgsComposer::open ( void )
{
    if ( mFirstTime ) {
	mComposition->createDefault();
	mFirstTime = false;
    }
	
    show();
}
    
void QgsComposer::removeWidgetChildren ( QWidget *w )
{
    std::cout << "QgsComposer::removeWidgetChildren" << std::endl;

    const QObjectList *ol = mItemOptionsFrame->children();
    if ( ol ) {
	QObjectListIt olit( *ol );
	QObject *ob;
	while( (ob = olit.current()) ) {
	    ++olit;
	    if( ob->isWidgetType() ) {
		QWidget *ow = (QWidget *) ob;
		w->removeChild ( ob );
		ow->hide ();
	    }
	}
    }
}

void QgsComposer::showCompositionOptions ( QWidget *w ) {
    std::cout << "QgsComposer::showCompositionOptions" << std::endl;

    removeWidgetChildren ( mCompositionOptionsFrame );
    
    if ( w ) { 
	w->reparent ( mCompositionOptionsFrame, QPoint(0,0), TRUE );
	mCompositionOptionsLayout->addWidget( w, 0, 0 );
    }
}

void QgsComposer::showItemOptions ( QWidget *w )
{
    std::cout << "QgsComposer::showItemOptions" << std::endl;

    removeWidgetChildren ( mItemOptionsFrame );
	
    // NOTE: It is better to leave there the tab with item options if w is NULL

    if ( w ) {
        w->reparent ( mItemOptionsFrame, QPoint(0,0), TRUE );

	mItemOptionsLayout->addWidget( w, 0, 0 );
        mOptionsTabWidget->setCurrentPage (1);
    }
}

QgsMapCanvas *QgsComposer::mapCanvas(void)
{
    return mQgis->getMapCanvas();
}

QgsComposerView *QgsComposer::view(void)
{
    return mView;
}

QgsComposition *QgsComposer::composition(void)
{
    return mComposition;
}

void QgsComposer::zoomFull(void)
{
    QWMatrix m;

    // scale
    double xscale = 1.0 * (mView->width()-10) / mComposition->canvas()->width();
    double yscale = 1.0 * (mView->height()-10) / mComposition->canvas()->height();
    double scale = ( xscale < yscale ? xscale : yscale );

    // translate
    double dx = ( mView->width() - scale * mComposition->canvas()->width() ) / 2;
    double dy = ( mView->height() - scale * mComposition->canvas()->height() ) / 2;

    m.translate ( dx, dy );
    m.scale( scale, scale );

    mView->setWorldMatrix( m );
    mView->repaintContents();
}

void QgsComposer::zoomIn(void)
{
    QWMatrix m = mView->worldMatrix();
    m.scale( 2.0, 2.0 );
    mView->setWorldMatrix( m );
    mView->repaintContents();
}

void QgsComposer::zoomOut(void)
{
    QWMatrix m = mView->worldMatrix();
    m.scale( 0.5, 0.5 );
    mView->setWorldMatrix( m );
    mView->repaintContents();
}

void QgsComposer::print(void)
{
    /* Uff!!! It is impossible to set a custom page size for QPrinter.
     * Only the sizes hardcoded in Qt library can be used.
     * 'Fortunately', it seems that everything is written to postscript output file,
     * regardless the pages size ->
     *
     * 1) outputToFile == false: If the output page size doesn't match the user defined size 
     *                           (in QgsComposer) the output is rescaled and centered so that 
     *                           it fit to the select output page size. 
     *                           a warning is displayed, that the map was rescaled.
     *                           
     * 2) outputToFile == true:  the output postscript file is written (page size is not
     *                           important but bigger is better because it lefts enough space
     *                           in BoundingBox definition), then the file is reopened, 
     *                           and the BoundingBox is redefined.
     */ 

    // NOTE: QT 3.2 has QPrinter::setOptionEnabled but only for three options 
    if ( !mPrinter ) {
	
	mPrinter = new QPrinter ( QPrinter::PrinterResolution );
	//mPrinter = new QPrinter ( QPrinter::HighResolution );
	//mPrinter = new QPrinter ( QPrinter::ScreenResolution );
	mPrinter->setFullPage ( true );
	mPrinter->setOutputToFile (true ) ;
	mPrinter->setOutputFileName ( QDir::convertSeparators ( QDir::home().path() + "/" + "qgis.eps") );
	mPrinter->setOrientation ( QPrinter::Landscape );
	mPrinter->setColorMode ( QPrinter::Color );
	mPrinter->setPageSize ( QPrinter::A4 );
    }

    mPrinter->setResolution ( mComposition->resolution() );

    if ( mPrinter->setup(this) ) {
	// WARNING: If QCanvasView recieves repaint signal during the printing
	// (e.g. covered by QPrinter::setup dialog) it breaks somehow drawing of QCanvas items 
	// (for example not all features in the map are drawn.
	// I don't know how to stop temporarily updating, (I don't want to reimplement 
	// repaint in QCanvasView, so I unset the view, print and reset.
	mView->setCanvas(0);
	
	int resolution = mPrinter->resolution();
            
	std::cout << "Resolution = " << resolution << std::endl;

	double scale = resolution / 25.4 / mComposition->scale();

	mComposition->setPlotStyle ( QgsComposition::Print );
	
	if ( mPrinter->outputToFile() ) {
	    std::cout << "Print to file" << std::endl;
	   
#ifdef Q_WS_X11
	    // NOTE: On UNIX setPageSize after setup() works, but setOrientation does not
	    //   -> the BoundingBox must follow the orientation 

	    QPrinter::PageSize psize = mPrinter->pageSize();
	    // B0 ( 1000x1414mm = 2835x4008pt ) is the biggest defined in Qt, a map can be bigger 
	    // but probably not bigger than 9999x9999pt = 3527x3527mm 
	    mPrinter->setPageSize ( QPrinter::B0 );
#endif

	    QPainter p(mPrinter);
	    p.scale ( scale, scale); 

	    mComposition->canvas()->drawArea ( QRect(0,0, 
			        (int) (mComposition->paperWidth() * mComposition->scale()),
			        (int) (mComposition->paperHeight() * mComposition->scale()) ), 
	                                       &p, FALSE );
	    p.end();

#ifdef Q_WS_X11
	    // reset the page
	    mPrinter->setPageSize ( psize );
	    
	    // Overwrite the bounding box
	    QFile f(mPrinter->outputFileName());
	    f.open( IO_ReadWrite );

	    Q_LONG offset = 0;
	    Q_LONG size;
	    bool found = false;
	    QString s;
	    while ( !f.atEnd() ) {
	        size = f.readLine ( s, 100 );
		if ( s.find ("%%BoundingBox:") == 0 ) {
		    found = true;
		    break;
		}
		offset += size;
	    }
	    
	    if ( found ) {
		int w,h;
	       
	        w = (int) ( 72 * mComposition->paperWidth() / 25.4 );
		h = (int) ( 72 * mComposition->paperHeight() / 25.4 );
		if ( mPrinter->orientation() == QPrinter::Landscape ) { 
		    int tmp = w; w = h; h = tmp;
		}
		s.sprintf( "%%%%BoundingBox: 0 0 %d %d", w, h );

		if ( s.length() > size ) {
		    QMessageBox::warning(this,"Error in Print", "Cannot format BoundingBox");
		} else {
		    if ( ! f.at(offset) ) {
			QMessageBox::warning(this,"Error in Print", "Cannot seek");
		    } else {
			/* Write spaces (for case the size > s.length() ) */
			QString es;
			es.fill(' ', size-1 );
			f.flush();
			if ( f.writeBlock ( es.ascii(), size-1 ) < size-1 ) {
			    QMessageBox::warning(this,"Error in Print", "Cannot overwrite BoundingBox");
			}
			f.flush();
		        f.at(offset);
			f.flush();
			if ( f.writeBlock ( s.ascii(), s.length() ) <  s.length()-1 ) {
			    QMessageBox::warning(this,"Error in Print", "Cannot overwrite BoundingBox");
			}
			f.flush();
		    }
		}
	    } else {
	        QMessageBox::warning(this,"Error in Print", "Cannot find BoundingBox");
	    }

	    f.close();
#endif
	} else { 
	    bool print = true;
	    
	    // Check size 
	    QPaintDeviceMetrics pm(mPrinter);
	    
            std::cout << "Paper: " << pm.widthMM() << " x " << pm.heightMM() << std::endl;
	    if ( mComposition->paperWidth() != pm.widthMM() || 
		 mComposition->paperHeight() != pm.heightMM() )
	    {
		int answer = QMessageBox::warning ( 0, "Paper does not match", 
			     "The selected paper size does not match the composition size",
			       QMessageBox::Ok,  QMessageBox::Abort );

		if ( answer == QMessageBox::Abort )
		    print = false;
	    
	    }
	    
	    if ( print ) {
                std::cout << "Printing ... " << std::endl;
		QPainter p(mPrinter);
		p.scale ( scale, scale); 
		mComposition->canvas()->drawArea ( QRect(0,0, (int)mComposition->paperWidth(),
						    (int)mComposition->paperHeight() ), &p, FALSE );
		p.end();
                std::cout << "... printing finished" << std::endl;
	    }
	}
	
	mComposition->setPlotStyle ( QgsComposition::Preview );
	mView->setCanvas(mComposition->canvas());
    }

    // TODO: mPrinter->setup() moves the composer under Qgisapp, get it to foreground somehow
}

void QgsComposer::setToolActionsOff(void)
{
    actionSelectItem->setOn ( false );
    actionAddMap->setOn ( false );
    actionAddVectorLegend->setOn ( false );
    actionAddLabel->setOn ( false );
}

void QgsComposer::selectItem(void)
{
    mComposition->setTool ( QgsComposition::Select );
    setToolActionsOff();
    actionSelectItem->setOn ( true );
}

void QgsComposer::addMap(void)
{
    mComposition->setTool ( QgsComposition::AddMap );
    setToolActionsOff();
    actionAddMap->setOn ( true );
}

void QgsComposer::addVectorLegend(void)
{
    mComposition->setTool ( QgsComposition::AddVectorLegend );
    setToolActionsOff();
    actionAddVectorLegend->setOn ( true );
}

void QgsComposer::addLabel(void)
{
    mComposition->setTool ( QgsComposition::AddLabel );
    setToolActionsOff();
    actionAddLabel->setOn ( true );
}

void QgsComposer::moveEvent ( QMoveEvent *e ) { saveWindowState(); }
void QgsComposer::resizeEvent ( QResizeEvent *e ) { saveWindowState(); }

void QgsComposer::saveWindowState()
{
    std::cout << "QgsComposer::saveWindowState" << std::endl;
    QSettings settings;

    QPoint p = this->pos();
    QSize s = this->size();

    settings.writeEntry("/qgis/Composer/geometry/x", p.x());
    settings.writeEntry("/qgis/Composer/geometry/y", p.y());
    settings.writeEntry("/qgis/Composer/geometry/w", s.width());
    settings.writeEntry("/qgis/Composer/geometry/h", s.height());

    QValueList<int> list = mSplitter->sizes();
    QValueList<int>::Iterator it = list.begin();
    settings.writeEntry("/qgis/Composer/geometry/wiev", (int)(*it) );
    it++;
    settings.writeEntry("/qgis/Composer/geometry/options", (int)(*it) );
}

void QgsComposer::restoreWindowState()
{
    QSettings settings;

    QDesktopWidget *d = QApplication::desktop();
    int dw = d->width();
    int dh = d->height();
    int w = settings.readNumEntry("/qgis/Composer/geometry/w", 600);
    int h = settings.readNumEntry("/qgis/Composer/geometry/h", 400);
    int x = settings.readNumEntry("/qgis/Composer/geometry/x", (dw - 600) / 2);
    int y = settings.readNumEntry("/qgis/Composer/geometry/y", (dh - 400) / 2);
    resize(w, h);
    move(x, y);

    // This doesn't work
    QValueList<int> list;
    w = settings.readNumEntry("/qgis/Composer/geometry/view", 300);
    list.push_back( w );
    w = settings.readNumEntry("/qgis/Composer/geometry/options", 300);
    list.push_back( w );
    mSplitter->setSizes ( list );
}

void QgsComposer::projectRead(void)
{
    std::cout << "QgsComposer::projectRead" << std::endl;
    
    if ( mComposition ) delete mComposition;
	
    mComposition  = new QgsComposition( this, 1 );
    mComposition->setActive ( true );
    mComposition->readSettings ( );

}

void QgsComposer::newProject(void)
{
    std::cout << "QgsComposer::newProject" << std::endl;

    if ( mComposition ) delete mComposition;
	
    mComposition  = new QgsComposition( this, 1 );
    mComposition->setActive ( true );

    // If composer is visible, create default immediately, otherwise wait for the first open()
    if ( isVisible() ) {
	mComposition->createDefault();
	mFirstTime = false;
    } else {
	mFirstTime = true;
    }
}

bool QgsComposer::writeSettings ( void )
{

}

bool QgsComposer::readSettings ( void )
{
    bool ok;

}

bool QgsComposer::writeXML( QDomNode & node, QDomDocument & doc )
{
    std::cout << "QgsComposer::writeXML" << std::endl;
    
    QDomElement compositionsNode = doc.createElement("compositions");

    node.appendChild( compositionsNode );

    return true;
}

bool QgsComposer::readXML( QDomNode & node )
{
    std::cout << "QgsComposer::readXML" << std::endl;

    return true;
}
