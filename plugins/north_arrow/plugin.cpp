/***************************************************************************
  plugin.cpp 
  Import tool for various worldmap analysis output files
Functions:

-------------------
begin                : Jan 21, 2004
copyright            : (C) 2004 by Tim Sutton
email                : tim@linfiniti.com

 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
/*  $Id$ */

// includes

#include <qgisapp.h>
#include <qgsmaplayer.h>
#include <qgsrasterlayer.h>
#include "plugin.h"


#include <qtoolbar.h>
#include <qmenubar.h>
#include <qmessagebox.h>
#include <qpopupmenu.h>
#include <qlineedit.h>
#include <qaction.h>
#include <qapplication.h>
#include <qcursor.h>
#include <qpixmap.h>
#include <qpainter.h>
#include <qfont.h>
#include <qpicture.h>
#include <qpointarray.h>

//non qt includes
#include <iostream>

//the gui subclass
#include "plugingui.h"

// xpm for creating the toolbar icon
#include "icon.xpm"
// 
static const char * const ident_ = "$Id$";

static const char * const name_ = "NorthArrow";
static const char * const description_ = "This plugin displays a north arrow overlayed onto the map.";
static const char * const version_ = "Version 0.1";
static const QgisPlugin::PLUGINTYPE type_ = QgisPlugin::UI;


/**
 * Constructor for the plugin. The plugin is passed a pointer to the main app
 * and an interface object that provides access to exposed functions in QGIS.
 * @param qgis Pointer to the QGIS main window
 * @param _qI Pointer to the QGIS interface object
 */
Plugin::Plugin(QgisApp * theQGisApp, QgisIface * theQgisInterFace):
          qgisMainWindowPointer(theQGisApp), 
          qGisInterface(theQgisInterFace),
          QgisPlugin(name_,description_,version_,type_)
{
  mRotationInt=0;
}

Plugin::~Plugin()
{

}

/*
 * Initialize the GUI interface for the plugin 
 */
void Plugin::initGui()
{
  // add a menu with 2 items
  QPopupMenu *pluginMenu = new QPopupMenu(qgisMainWindowPointer);

  pluginMenu->insertItem(QIconSet(icon),"&NorthArrow", this, SLOT(run()));

  menuBarPointer = ((QMainWindow *) qgisMainWindowPointer)->menuBar();

  menuIdInt = qGisInterface->addMenu("&Decorations", pluginMenu);
  // Create the action for tool
  QAction *myQActionPointer = new QAction("North Arrow", QIconSet(icon), "&Wmi",0, this, "run");
  // Connect the action to the run
  connect(myQActionPointer, SIGNAL(activated()), this, SLOT(run()));
  //render the arrow each time the map is rendered
  connect(qGisInterface->getMapCanvas(), SIGNAL(renderComplete()), this, SLOT(renderNorthArrow()));
  // Add the toolbar
  toolBarPointer = new QToolBar((QMainWindow *) qgisMainWindowPointer, "Decorations");
  toolBarPointer->setLabel("North Arrow");
  // Add the zoom previous tool to the toolbar
  myQActionPointer->addTo(toolBarPointer);
  refreshCanvas();

}
//method defined in interface
void Plugin::help()
{
  //implement me!
}

// Slot called when the buffer menu item is activated
void Plugin::run()
{
  PluginGui *myPluginGui=new PluginGui(qgisMainWindowPointer,"North Arrow",true,0);
    //overides function byt the same name created in .ui
    myPluginGui->setRotation(mRotationInt);
  //listen for when the layer has been made so we can draw it
  connect(myPluginGui, SIGNAL(rotationChanged(int)), this, SLOT(rotationChanged(int)));
  myPluginGui->show();
  
}
//!draw a raster layer in the qui - intended to respond to signal sent by diolog when it as finished creating
//layer
void Plugin::drawRasterLayer(QString theQString)
{
  qGisInterface->addRasterLayer(theQString);
}
//!draw a vector layer in the qui - intended to respond to signal sent by diolog when it as finished creating a layer
////needs to be given vectorLayerPath, baseName, providerKey ("ogr" or "postgres");
void Plugin::drawVectorLayer(QString thePathNameQString, QString theBaseNameQString, QString theProviderQString)
{
 qGisInterface->addVectorLayer( thePathNameQString, theBaseNameQString, theProviderQString);
}

//! Refresh the map display using the mapcanvas exported via the plugin interface
void Plugin::refreshCanvas()
{
 qGisInterface->getMapCanvas()->refresh();
}

void Plugin::renderNorthArrow()
{
    QPixmap myQPixmap; //to store the north arrow image in
    QString myFileNameQString = QString(PKGDATAPATH) + QString("/images/north_arrows/default.png");
    //std::cout << "Trying to load " << myFileNameQString << std::cout;
    if (myQPixmap.load(myFileNameQString))
    {
       // myPainterPixmap.fill();
        QPainter myQPainter;
        myQPainter.begin(qGisInterface->getMapCanvas()->canvasPixmap());	

        double centerXDouble = myQPixmap.width()/2;
	double centerYDouble = myQPixmap.height()/2;
        //save the current canvas rotation
        myQPainter.save();
	//myQPainter.translate( (int)centerXDouble, (int)centerYDouble );
	
        //rotate the canvas
        myQPainter.rotate( mRotationInt );
	//work out how to shift the image so that it appears in the center of the canvas
	//(x cos a + y sin a - x, -x sin a + y cos a - y)
	const double PI = 3.14159265358979323846;
	double myRadiansDouble = (PI/180) * mRotationInt;
        int xShift = static_cast<int>((
	              (centerXDouble * cos(myRadiansDouble)) + 
	              (centerYDouble * sin(myRadiansDouble))
		     ) - centerXDouble);
        int yShift = static_cast<int>((
	              (-centerXDouble * sin(myRadiansDouble)) + 
	              (centerYDouble * cos(myRadiansDouble))
		     ) - centerYDouble);	
		     	     
		     

	//draw the pixmap in the proper position
      	myQPainter.drawPixmap(xShift,yShift,myQPixmap);	


        //unrotate the canvase again
        myQPainter.restore();
        myQPainter.end();
	
	//bitBlt ( qGisInterface->getMapCanvas()->canvasPixmap(), 0, 0, &myPainterPixmap, 0, 0, -1 , -1, Qt::CopyROP, false);
	 
    }
    else
    {
        //myPainterPixmap.fill();
        QPainter myQPainter;
        myQPainter.begin(qGisInterface->getMapCanvas()->canvasPixmap());	
        QFont myQFont("time", 32, QFont::Bold);
        myQPainter.setFont(myQFont);
        myQPainter.setPen(Qt::black);
        myQPainter.drawText(10, 20, QString("Pixmap Not Found"));
        myQPainter.end();
    }

}
// Unload the plugin by cleaning up the GUI
void Plugin::unload()
{
  // remove the GUI
  menuBarPointer->removeItem(menuIdInt);
  delete toolBarPointer;
}


void Plugin::rotationChanged(int theInt)
{
  mRotationInt = theInt;
  refreshCanvas();
}








/** 
 * Required extern functions needed  for every plugin 
 * These functions can be called prior to creating an instance
 * of the plugin class
 */
// Class factory to return a new instance of the plugin class
extern "C" QgisPlugin * classFactory(QgisApp * theQGisAppPointer, QgisIface * theQgisInterfacePointer)
{
  return new Plugin(theQGisAppPointer, theQgisInterfacePointer);
}

// Return the name of the plugin - note that we do not user class members as
// the class may not yet be insantiated when this method is called.
extern "C" QString name()
{
    return name_;
}

// Return the description
extern "C" QString description()
{
    return description_;
}

// Return the type (either UI or MapLayer plugin)
extern "C" int type()
{
    return type_;
}

// Return the version number for the plugin
extern "C" QString version()
{
  return version_;
}

// Delete ourself
extern "C" void unload(QgisPlugin * thePluginPointer)
{
  delete thePluginPointer;
}
