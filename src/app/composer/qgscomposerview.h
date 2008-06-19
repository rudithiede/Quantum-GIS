/***************************************************************************
                         qgscomposerview.h
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
/* $Id$ */
#ifndef QGSCOMPOSERVIEW_H
#define QGSCOMPOSERVIEW_H

#include <QGraphicsView>

class QKeyEvent;
class QMouseEvent;
class QgsComposition;
class QgsComposerItem;
class QgsComposerLabel;
class QgsComposerMap;

/**Widget to display the composer items. Manages the composer tools and the mouse/key events. 
 Creates the composer items according to the current map tools and keeps track off the rubber band item*/
class QgsComposerView: public QGraphicsView
{
    Q_OBJECT
	
public:

  /**Current tool*/
  enum Tool {
    Select = 0,      // Select/Move item
    AddMap,          // add new map 
    AddVectorLegend, // add vector legend
    AddLabel,        // add label
    AddScalebar,     // add scalebar
    AddPicture       // add raster/vector picture
  };
  
  QgsComposerView(QWidget* parent=0, const char* name=0, Qt::WFlags f=0);

  /**Add an item group containing the selected items*/
  void groupItems();

  /**Ungroups the selected items*/
  void ungroupItems();

  QgsComposerView::Tool currentTool() const {return mCurrentTool;}
  void setCurrentTool(QgsComposerView::Tool t) {mCurrentTool = t;}

  /**Sets composition (derived from QGraphicsScene)*/
  void setComposition(QgsComposition* c);
  /**Returns the composition or 0 in case of error*/
  QgsComposition* composition();
  
 protected:
  void mousePressEvent(QMouseEvent*);
  void mouseReleaseEvent(QMouseEvent*);
  void mouseMoveEvent(QMouseEvent*);
  
  void keyPressEvent ( QKeyEvent * e );
  void keyReleaseEvent ( QKeyEvent * e );
  
 private:
  /**Status of shift key (used for multiple selection)*/
  bool mShiftKeyPressed;
  /**Current composer tool*/
  QgsComposerView::Tool mCurrentTool;
  /**Rubber band item*/
  QGraphicsRectItem* mRubberBandItem;

  public slots:
  /**For QgsComposerItemGroup to send its signals to QgsComposer (or other classes that keep track of input widgets)*/
  void sendItemRemovedSignal(QgsComposerItem* item);

 signals:
  /**Is emitted when selected item changed. If 0, no item is selected*/
  void selectedItemChanged(const QgsComposerItem* selected);
  /**Ist emittted when new composer label has been added to the view*/
  void composerLabelAdded(QgsComposerLabel* label);
  /**Is emitted when new composer map has been added to the view*/
  void composerMapAdded(QgsComposerMap* map);
  /**Is emitted when a composer item has been removed from the scene*/
  void itemRemoved(QgsComposerItem*);
};

#endif
