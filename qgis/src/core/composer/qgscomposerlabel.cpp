/***************************************************************************
                         qgscomposerlabel.cpp
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

#include "qgscomposerlabel.h"
#include <QDate>
#include <QDomElement>
#include <QPainter>

QgsComposerLabel::QgsComposerLabel( QgsComposition *composition ): QgsComposerItem( composition ), mMargin( 1.0 )
{
  //default font size is 10 point
  mFont.setPointSizeF( 10 );
}

QgsComposerLabel::~QgsComposerLabel()
{
}

void QgsComposerLabel::paint( QPainter* painter, const QStyleOptionGraphicsItem* itemStyle, QWidget* pWidget )
{
  if ( !painter )
  {
    return;
  }

  drawBackground( painter );
  painter->setPen( QPen( QColor( 0, 0, 0 ) ) ); //draw all text black
  painter->setFont( mFont );

  QFontMetricsF fontSize( mFont );

  //support multiline labels
  double penWidth = pen().widthF();
  QRectF painterRect( penWidth + mMargin, penWidth + mMargin, rect().width() - 2 * penWidth - 2 * mMargin,
                      rect().height() - 2 * penWidth - 2 * mMargin );


  drawText( painter, painterRect, displayText(), mFont );

  drawFrame( painter );
  if ( isSelected() )
  {
    drawSelectionBoxes( painter );
  }
}

void QgsComposerLabel::setText( const QString& text )
{
  mText = text;
}

QString QgsComposerLabel::displayText() const
{
  QString displayText = mText;
  replaceDateText( displayText );
  return displayText;
}

void QgsComposerLabel::replaceDateText( QString& text ) const
{
  int currentDatePos = text.indexOf( "$CURRENT_DATE" );
  if ( currentDatePos != -1 )
  {
    //check if there is a bracket just after $CURRENT_DATE
    QString formatText;
    int openingBracketPos = text.indexOf( "(", currentDatePos );
    int closingBracketPos = text.indexOf( ")", openingBracketPos + 1 );
    if ( openingBracketPos != -1 && closingBracketPos != -1 && ( closingBracketPos - openingBracketPos ) > 1 )
    {
      formatText = text.mid( openingBracketPos + 1, closingBracketPos - openingBracketPos - 1 );
      text.replace( currentDatePos, closingBracketPos - currentDatePos + 1, QDate::currentDate().toString( formatText ) );
    }
    else //no bracket
    {
      text.replace( "$CURRENT_DATE", QDate::currentDate().toString() );
    }
  }
}

void QgsComposerLabel::setFont( const QFont& f )
{
  mFont = f;
}

void QgsComposerLabel::adjustSizeToText()
{
  double textWidth = textWidthMillimeters( mFont, displayText() );
  double fontAscent = fontAscentMillimeters( mFont );

  setSceneRect( QRectF( transform().dx(), transform().dy(), textWidth + 2 * mMargin + 2 * pen().widthF() + 1, \
                        fontAscent + 2 * mMargin + 2 * pen().widthF() + 1 ) );
}

QFont QgsComposerLabel::font() const
{
  return mFont;
}

bool QgsComposerLabel::writeXML( QDomElement& elem, QDomDocument & doc ) const
{
  if ( elem.isNull() )
  {
    return false;
  }

  QDomElement composerLabelElem = doc.createElement( "ComposerLabel" );

  composerLabelElem.setAttribute( "labelText", mText );
  composerLabelElem.setAttribute( "margin", QString::number( mMargin ) );


  //font
  QDomElement labelFontElem = doc.createElement( "LabelFont" );
  labelFontElem.setAttribute( "description", mFont.toString() );
  composerLabelElem.appendChild( labelFontElem );

  elem.appendChild( composerLabelElem );
  return _writeXML( composerLabelElem, doc );
}

bool QgsComposerLabel::readXML( const QDomElement& itemElem, const QDomDocument& doc )
{
  if ( itemElem.isNull() )
  {
    return false;
  }

  //restore label specific properties

  //text
  mText = itemElem.attribute( "labelText" );

  //margin
  mMargin = itemElem.attribute( "margin" ).toDouble();

  //font
  QDomNodeList labelFontList = itemElem.elementsByTagName( "LabelFont" );
  if ( labelFontList.size() > 0 )
  {
    QDomElement labelFontElem = labelFontList.at( 0 ).toElement();
    mFont.fromString( labelFontElem.attribute( "description" ) );
  }

  //restore general composer item properties
  QDomNodeList composerItemList = itemElem.elementsByTagName( "ComposerItem" );
  if ( composerItemList.size() > 0 )
  {
    QDomElement composerItemElem = composerItemList.at( 0 ).toElement();
    _readXML( composerItemElem, doc );
  }
  return true;
}