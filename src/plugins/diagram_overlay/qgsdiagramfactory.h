/***************************************************************************
                         qgsdiagramfactory.h  -  description
                         -------------------
    begin                : September 2007
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

#ifndef QGSDIAGRAMFACTORY_H
#define QGSDIAGRAMFACTORY_H

#include <QMap>
#include <QString>

class QgsFeature;
class QgsRenderContext;
class QDomDocument;
class QDomNode;
class QImage;

/**Interface for classes that create diagrams*/
class QgsDiagramFactory
{
 public:
  /**Describes if the size describes one dimensional height (e.g. bar chart), \
     a diameter (e.g. piechart) or a squareside. This may be taken into consideration \
     from a renderer for interpolation*/
  enum SizeType
    {
      HEIGHT,
      DIAMETER,
      SQUARESIDE,
    };

  enum SizeUnit //size in millimeters on output device or in map units on map
  {
    MM,
    MapUnits
  };
  
  /**Creates the diagram image for a feature in order to be placed on the map
  @param size diagram size (may be height, diameter, squaresize depending on diagram type
  @param f feature that is symbolized by the diagram
  @param renderContext rendering parameters*/
  virtual QImage* createDiagram(int size, const QgsFeature& f, const QgsRenderContext& renderContext) const = 0;
  /**Creates the text/images for the legend items. The caller takes ownership of the generated \
   image objects. 
  @param size diagram size that should be represented in the legend
  @param u size may be in MM on output device or in map units on map
  @param renderContext rendering parameters
  @param value diagram value that should be represented in the legend
  @param items generated items
  @return 0 in case of success*/
  virtual int createLegendContent(int size, const QgsRenderContext& renderContext, QString value, QMap<QString, QImage*>& items) const = 0;
  /**Gets the width and height (in pixels) of the diagram image. Considers different width, height values, the maximum width of the drawing pen and the conversion from mm size to pixels according to render context.
  @param size diagram size calculated by diagram renderer
  @param f reference to the feature associated with the diagram
  @param the render context (contains mm scale factor and raster scale factor)
  @param width out: the width of the diagram image in pixels
  @param height out: the height of the diagram image in pixels*/
  virtual int getDiagramDimensions(int size, const QgsFeature& f, const QgsRenderContext& context, int& width, int& height) const = 0;
  virtual bool writeXML(QDomNode& overlay_node, QDomDocument& doc) const = 0;
  virtual ~QgsDiagramFactory(){}
  /**Default is one dimensional scaling*/
  virtual QgsDiagramFactory::SizeType sizeType() const {return QgsDiagramFactory::HEIGHT;}

  void setSizeUnit(SizeUnit u){mSizeUnit = u;}

 protected:
  /**Size units of diagram items*/
  SizeUnit mSizeUnit;
};

#endif
