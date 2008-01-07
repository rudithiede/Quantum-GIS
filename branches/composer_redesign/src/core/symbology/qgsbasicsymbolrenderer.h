/***************************************************************************
    qgssymbolrenderer.h  -  Class which handles rendering of basic point
                            symbols, such as circles and diamonds.
                             -------------------
    begin                : Tue Dec 18 2007
    copyright            : (C) 2007 Steven Bell
    email                : botsnlinux at gmail.com
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
/* $Id$ */

#ifndef QGSBASICSYMBOLRENDERER_H
#define QGSBASICSYMBOLRENDERER_H

#include "qgssymbolrenderer.h"
class QString;

class QgsBasicSymbolRenderer : public QgsSymbolRenderer
{
public:
  typedef enum {CIRCLE, SQUARE, DIAMOND, CROSS, CROSS_2, TRIANGLE, STAR} SymbolShape;

  QgsBasicSymbolRenderer();
  QgsBasicSymbolRenderer(QString shape);
  QgsBasicSymbolRenderer(SymbolShape shape);

  void render(QPainter*); //implements pure virtual function from QgsSymbolRenderer

  void setShape(SymbolShape shape);
  void setShape(QString shape);
  SymbolShape shape(void);
  
private:
  SymbolShape mShape;
};
#endif /*QGSBASICSYMBOLRENDERER_H*/
