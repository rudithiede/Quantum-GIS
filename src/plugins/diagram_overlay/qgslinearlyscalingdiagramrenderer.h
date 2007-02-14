/***************************************************************************
                         qgslinearlyscalingdiagramrenderer.h  -  description
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

#ifndef QGSLINEARLYSCALINGDIAGRAMRENDERER_H
#define QGSLINEARLYSCALINGDIAGRAMRENDERER_H

#include "qgsdiagramrenderer.h"
#include "qgsdiagramitem.h"

/**This renderer scales the size of the diagram linearly between minimum/ maximum values of an attribute*/

class QgsLinearlyScalingDiagramRenderer: public QgsDiagramRenderer
{
 public:
  QgsLinearlyScalingDiagramRenderer(const QString& name, const QgsAttributeList& att, const std::list<QColor>& c);
  ~QgsLinearlyScalingDiagramRenderer();
  /**Returns an diagram image for a geographic feature. The caller takes ownership of the QImage. Returns 0 in case of error*/
  QImage* renderDiagram(const QgsFeature& f) const;
  /**Returns only the diagram size for a feature*/
  int getDiagramSize(int& width, int& height, double& value, const QgsFeature& f) const;
  /**Sets value, height and width of lower bound*/
  void setLowerItem(const QgsDiagramItem& item){mLowerItem = item;}
  /**Sets value, height and width of upper bound*/
  void setUpperItem(const QgsDiagramItem& item){mUpperItem = item;}
  /**Sets the index of the classification field*/
  void setClassificationField(int index){mClassificationField = index;}

 private:
  /**Value, height, width of lower bound*/
  QgsDiagramItem mLowerItem;
  /**Value, height, width of upper bound*/
  QgsDiagramItem mUpperItem;
  /**Index of the classification attribute*/
  int mClassificationField;
  QgsLinearlyScalingDiagramRenderer(); //default constructor is forbidden
};

#endif
