/***************************************************************************
                         qgsrenderer.cpp  -  description
                             -------------------
    begin                : Sat Jan 4 2003
    copyright            : (C) 2003 by Gary E.Sherman
    email                : sherman at mrcc.com
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

#include <cassert>
#include "qgsrenderitem.h"
#include "qgssymbol.h"

#include <QDomNode>

QgsRenderItem::QgsRenderItem(): mSymbol(new QgsSymbol())
{
}

QgsRenderItem::~QgsRenderItem()
{
    delete mSymbol;
}

QgsRenderItem::QgsRenderItem(QgsSymbol* symbol, QString _value, QString _label):
    mSymbol(symbol),mValue(_value), mLabel(_label)
{
}

void QgsRenderItem::setLabel(QString label)
{
  mLabel = label;
}

void QgsRenderItem::setSymbol(QgsSymbol s)
{
    (*mSymbol) = s;
}

const QString & QgsRenderItem::label() const
{
  return mLabel;
}

void QgsRenderItem::setSymbol(QgsSymbol* s)
{
    delete mSymbol;
    mSymbol=s;
}

void QgsRenderItem::setValue(QString value)
{
    mValue=value;
}

QgsSymbol* QgsRenderItem::getSymbol()
{
  assert(this != 0);
    return mSymbol;
}

bool QgsRenderItem::writeXML( QDomNode & parent, QDomDocument & document )
{
    bool returnval=false;
    QDomElement renderitem=document.createElement("renderitem");
    parent.appendChild(renderitem);
    QDomElement value=document.createElement("value");
    QDomText valuetxt=document.createTextNode(mValue);
    value.appendChild(valuetxt);
    renderitem.appendChild(value);
    if(mSymbol)
    {
	returnval=mSymbol->writeXML(renderitem,document);
    }
    QDomElement label=document.createElement("label");
    QDomText labeltxt=document.createTextNode(mLabel);
    label.appendChild(labeltxt);
    renderitem.appendChild(label);
    return returnval;
}
