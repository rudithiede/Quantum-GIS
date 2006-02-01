/***************************************************************************
    qgsmapcanvasitem.h  - base class for map canvas items
    ----------------------
    begin                : February 2006
    copyright            : (C) 2006 by Martin Dobias
    email                : wonder.sk at gmail dot com
 ***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
/* $Id$ */


#include "qgsmapcanvasitem.h"
#include "qgsmapcanvas.h"
#include "qgsmaptopixel.h"
#include <QRect>
#include <QPen>
#include <QBrush>
#include <QPainter>

QgsMapCanvasItem::QgsMapCanvasItem(QgsMapCanvas* mapCanvas)
  : Q3CanvasRectangle(mapCanvas->canvas()), mMapCanvas(mapCanvas), mResizeType(ResizeAuto)
{
  //setCanvas(mapCanvas->canvas());
  connect(mapCanvas, SIGNAL(extentsChanged(QgsRect)), this, SLOT(updatePosition()));
}

QgsMapCanvasItem::~QgsMapCanvasItem()
{
  updateCanvas();
}

QgsPoint QgsMapCanvasItem::toMapCoords(const QPoint& point)
{
  return mMapCanvas->getCoordinateTransform()->toMapCoordinates(point);
}
    

QPoint QgsMapCanvasItem::toCanvasCoords(const QgsPoint& point)
{
  double x = point.x(), y = point.y();
  mMapCanvas->getCoordinateTransform()->transformInPlace(x,y);
  return QPoint((int)(x+0.5), (int)(y+0.5)); // round the values
}
    
    
QgsRect QgsMapCanvasItem::rect()
{
  return mRect;
}
    
    
void QgsMapCanvasItem::setRect(const QgsRect& r)
{
  mRect = r;
  updatePosition();
  updateCanvas();
}


void QgsMapCanvasItem::updatePosition()
{
  if (mResizeType == ResizeAuto)
  {

    QRect r(toCanvasCoords(QgsPoint(mRect.xMin(), mRect.yMin())),
            toCanvasCoords(QgsPoint(mRect.xMax(), mRect.yMax())));
    r = r.normalized();
    move(r.left(), r.top());
    setSize(r.width(), r.height());

#ifdef QGISDEBUG
    std::cout << "QgsMapCanvasItem::updatePosition: [" << r.left() << "," << r.top() << "]-["
              << r.width() << "x" << r.height() << "]" << std::endl;
#endif
  }
  else
  {
    updatePositionManual();
  }
}


void QgsMapCanvasItem::drawShape(QPainter & p)
{
#ifdef QGISDEBUG
  std::cout << "drawShape: WARNING: this function should be reimplemented in child class!" << std::endl;
#endif
}

void QgsMapCanvasItem::updatePositionManual()
{
#ifdef QGISDEBUG
  std::cout << "updatePositionManual: WARNING: this function should be reimplemented in child class!" << std::endl;
#endif
}

void QgsMapCanvasItem::updateCanvas()
{
  update();
  mMapCanvas->canvas()->update(); //Contents();
}

void QgsMapCanvasItem::setResizeType(ResizeType type)
{
  mResizeType = type;
}
