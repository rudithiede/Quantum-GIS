/***************************************************************************
 *   Copyright (C) 2003 by Tim Sutton                                      *
 *   tim@linfiniti.com                                                     *
 *                                                                         *
 *   This is a plugin generated from the QGIS plugin template              *
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 ***************************************************************************/
#ifndef PLUGINGUI_H
#define PLUGINGUI_H

#include <pluginguibase.h>

/**
@author Tim Sutton
*/
class PluginGui : public PluginGuiBase
{
Q_OBJECT
public:
    PluginGui();
    PluginGui( QWidget* parent = 0, const char* name = 0, bool modal = FALSE, WFlags fl = 0 );
    ~PluginGui();
    void pbnOK_clicked();
    void pbnCancel_clicked();

private:
    void rotatePixmap(int theRotationInt);
signals:
   //void drawRasterLayer(QString);
   //void drawVectorrLayer(QString,QString,QString);
   void rotationChanged(int);
public slots:
    void setRotation(int);
private slots:
    //overides function byt the same name created in .ui
    void spinRotation_valueChanged( int theInt);
    //overides function byt the same name created in .ui
    void sliderRotation_valueChanged( int theInt);   
};

#endif
