/***************************************************************************
                            qgsticksdownscalebarstyle.cpp
                            ------------------------------
    begin                : July 2008
    copyright            : (C) 2008 by Marco Hugentobler
    email                : marco.hugentobler@karto.baug.ethz.ch
 ***************************************************************************/
/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#include "qgsticksdownscalebarstyle.h"
#include "qgscomposerscalebar.h"
#include <QPainter>

QgsTicksDownScaleBarStyle::QgsTicksDownScaleBarStyle(const QgsComposerScaleBar* bar): QgsScaleBarStyle(bar)
{

}

QgsTicksDownScaleBarStyle::QgsTicksDownScaleBarStyle(): QgsScaleBarStyle(0)
{

}

QgsTicksDownScaleBarStyle::~QgsTicksDownScaleBarStyle()
{

}

QString QgsTicksDownScaleBarStyle::name() const
{
  return "Line Ticks Middle";
}

void QgsTicksDownScaleBarStyle::draw(QPainter* p) const
{
  if(!mScaleBar)
    {
      return;
    }
  double barTopPosition = mScaleBar->fontHeight() + mScaleBar->labelBarSpace() + mScaleBar->boxContentSpace();
  double middlePosition = barTopPosition + mScaleBar->height()/2.0;

  p->save();
  p->setPen(mScaleBar->pen());

  QList<QPair<double, double> > segmentInfo;
  mScaleBar->segmentPositions(segmentInfo);

  QList<QPair<double, double> >::const_iterator segmentIt = segmentInfo.constBegin();
  for(; segmentIt != segmentInfo.constEnd(); ++segmentIt)
    {
      p->drawLine(segmentIt->first, barTopPosition, segmentIt->first, barTopPosition + mScaleBar->height());
      p->drawLine(segmentIt->first, barTopPosition, segmentIt->first + mScaleBar->segmentMM(), barTopPosition); 
    }

  //draw last tick
  if(!segmentInfo.isEmpty())
    {
      double lastTickPositionX = segmentInfo.last().first + mScaleBar->segmentMM();
      p->drawLine(lastTickPositionX, barTopPosition, lastTickPositionX, barTopPosition + mScaleBar->height());
    }

  p->restore();

  //draw labels using the default method
  drawLabels(p);
}
