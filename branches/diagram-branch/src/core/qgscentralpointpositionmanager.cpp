/***************************************************************************
                         qgscentralpointpositionmanager.cpp  -  description
                         ----------------------------------
    begin                : January 2007
    copyright            : (C) 2007 by Marco Hugentobler
    email                : marco dot hugentobler at karto dot baug dot ethz dot ch
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#include "qgscentralpointpositionmanager.h"
#include "qgsoverlayobject.h"
#include "qgsvectoroverlay.h"
#include <map>

QgsCentralPointPositionManager::QgsCentralPointPositionManager(QgsVectorLayer* vl): QgsOverlayObjectPositionManager(vl)
{

}
  
QgsCentralPointPositionManager::~QgsCentralPointPositionManager()
{

}

void QgsCentralPointPositionManager::findOptimalObjectPositions(const QgsRect& viewExtent, const QgsMapToPixel * cXf, const QgsCoordinateTransform* ct)
{
  QgsPoint currentPosition;

  for(std::list<QgsVectorOverlay*>::iterator list_it = mOverlays.begin(); list_it != mOverlays.end(); ++list_it)
    {
      std::multimap<int, QgsOverlayObject*>* objectMapPointer = (*list_it)->overlayObjects();
      if(!objectMapPointer)
	{
	  continue;
	}
      std::multimap<int, QgsOverlayObject*>::iterator map_it;
      for(map_it = objectMapPointer->begin(); map_it != objectMapPointer->end(); ++map_it)
	{
	  if(findObjectPosition(map_it->second->wkb(), currentPosition) != 0)
	    {
	      //error
	    }
	  map_it->second->setPosition(currentPosition);
	}
    }
}

int QgsCentralPointPositionManager::findObjectPosition(const unsigned char* wkb, QgsPoint& position) const
{
  QGis::WKBTYPE type;
  int currentPosition = 0; //parsing position in the wkb binary
  double currentX, currentY;
  bool hasZValue = false;

  currentPosition += 1;
  memcpy(&type, &(wkb[currentPosition]), sizeof(int));
  currentPosition += sizeof(int);

  switch (type)
    {
      //multigeometries should be already split
    case QGis::WKBMultiPoint25D:
    case QGis::WKBMultiPoint:
    case QGis::WKBMultiLineString25D:
    case QGis::WKBMultiLineString:
    case QGis::WKBMultiPolygon25D:
    case QGis::WKBMultiPolygon:
      return 1;

    case QGis::WKBPoint25D:
    case QGis::WKBPoint:
      memcpy(&currentX, &(wkb[currentPosition]), sizeof(double));
      currentPosition += sizeof(double);
      memcpy(&currentY, &(wkb[currentPosition]), sizeof(double));
      position.setX(currentX);
      position.setY(currentY);
      return 0;

    case QGis::WKBLineString25D:
      hasZValue = true;
    case QGis::WKBLineString://get the middle point
      {
	int numberOfPoints;
	memcpy(&numberOfPoints, &(wkb[currentPosition]), sizeof(int));
	currentPosition += sizeof(int);
	if(numberOfPoints < 1)
	  {
	    return 1;
	  }
	if(numberOfPoints > 2)
	  {
	    int midpoint = (numberOfPoints-1)/2    ;
	    for(int i = 0; i < midpoint; ++i)
	      {
		currentPosition += 2 * sizeof(double);
		if(hasZValue)
		  {
		    currentPosition += sizeof(double);
		  }
	      }
	  }
	double xPos, yPos;
	memcpy(&xPos, &(wkb[currentPosition]), sizeof(double));
	currentPosition+= sizeof(double);
	memcpy(&yPos, &(wkb[currentPosition]), sizeof(double));
	position.setX(xPos);
	position.setY(yPos);
	return 0;
      }
    case QGis::WKBPolygon25D:
      hasZValue = true;
    case QGis::WKBPolygon: //calculate the centroid of the first ring
      {
	currentPosition+= sizeof(int); //skip number of rings
	int numberOfPoints;
	memcpy(&numberOfPoints, &(wkb[currentPosition]), sizeof(int));
	currentPosition+= sizeof(int);
	double x[numberOfPoints];
	double y[numberOfPoints];

	for(int i = 0; i < numberOfPoints; ++i)
	  {
	    memcpy(&(x[i]), &(wkb[currentPosition]), sizeof(double));
	    currentPosition+= sizeof(double);
	    memcpy(&(y[i]), &(wkb[currentPosition]), sizeof(double));
	    currentPosition+= sizeof(double);
	    if(hasZValue)
	      {
		currentPosition += sizeof(double);
	      }
	  }
	double centroidX, centroidY;
	if(calculatePolygonCentroid(x, y, numberOfPoints, centroidX, centroidY) != 0)
	  {
	    return 1;
	  }
	else
	  {
	    position.setX(centroidX);
	    position.setY(centroidY);
	    return 0;
	  }
      }
    default:
      return 1;
    }
  return 0;
}

int QgsCentralPointPositionManager::calculatePolygonCentroid(double x[], double y[], int numberOfPoints, double& centroidX, double& centroidY) const
{
  register int i, j;
  double ai, atmp = 0, xtmp = 0, ytmp = 0;
  if(numberOfPoints < 3)
    {
      return 1;
    }

  for(i = numberOfPoints - 1, j = 0; j < numberOfPoints; i = j, j++)
    {
      ai = x[i] * y[j] - x[j] * y[i];
      atmp += ai;
      xtmp += (x[j] + x[i]) * ai;
      ytmp += (y[j] + y[i]) * ai;
    }
  if(atmp == 0)
    {
      return 2;
    }
  centroidX = xtmp/(3*atmp);
  centroidY = ytmp/(3*atmp);
  return 0;
}
