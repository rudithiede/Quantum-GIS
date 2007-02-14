/***************************************************************************
                         qgsdiagramdialog.cpp  -  description
                         --------------------
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

#include "qgsdiagramdialog.h"
#include "qgsdiagramrenderer.h"
#include "qgsdiagramoverlay.h"
#include "qgsfield.h"
#include "qgslinearlyscalingdialog.h"
#include "qgslinearlyscalingdiagramrenderer.h"
#include "qgsvectordataprovider.h"
#include <QColorDialog>


QgsDiagramDialog::QgsDiagramDialog(QgsVectorLayer* vl): QgsVectorOverlayDialog(vl)
{
  setupUi(this);
  QObject::connect(mAddPushButton, SIGNAL(clicked()), this, SLOT(addAttribute()));
  QObject::connect(mRemovePushButton, SIGNAL(clicked()), this, SLOT(removeAttribute()));
  QObject::connect(mClassificationTypeComboBox, SIGNAL(currentIndexChanged(const QString&)), this, SLOT(changeClassificationType(const QString&)));
  QObject::connect(mClassificationComboBox, SIGNAL(currentIndexChanged(const QString&)), this, SLOT(changeClassificationAttribute(const QString&)));
  QObject::connect(mAttributesTreeWidget, SIGNAL(itemDoubleClicked( QTreeWidgetItem*, int)), this, SLOT(handleItemDoubleClick(QTreeWidgetItem*, int)));

  //insert attributes into combo box
  QgsVectorDataProvider *provider;
  if ((provider = dynamic_cast<QgsVectorDataProvider *>(mVectorLayer->getDataProvider())))
    {
      const QgsFieldMap & fields = provider->fields();
      QString str;
      
      for (QgsFieldMap::const_iterator it = fields.begin(); it != fields.end(); ++it)
        {
	  str = (*it).name();
	  mAttributesComboBox->insertItem(str);
	  mClassificationComboBox->insertItem(str);
        }
    } 

  //insert classification types:
  mClassificationTypeComboBox->insertItem(0, "linearly scaled");

  mDiagramTypeComboBox->insertItem(0, "Bar");
  mDiagramTypeComboBox->insertItem(0, "Pie");

  QStringList headerLabels;
  headerLabels << "Attribute";
  headerLabels << "Color";
  mAttributesTreeWidget->setHeaderLabels(headerLabels);
}

QgsDiagramDialog::QgsDiagramDialog(): QgsVectorOverlayDialog(0)
{

}
 
QgsDiagramDialog::~QgsDiagramDialog()
{

}

void QgsDiagramDialog::addAttribute()
{
  QTreeWidgetItem* newItem = new QTreeWidgetItem(mAttributesTreeWidget);

  //text
  QString currentText = mAttributesComboBox->currentText();
  newItem->setText(0, currentText);
  
  //and icon
  int red = 1 + (int) (255.0 * rand() / (RAND_MAX + 1.0));
  int green = 1 + (int) (255.0 * rand() / (RAND_MAX + 1.0));
  int blue = 1 + (int) (255.0 * rand() / (RAND_MAX + 1.0));
  QColor randomColor(red, green, blue);
  newItem->setBackground(1, QBrush(randomColor));
	    
  if(!currentText.isNull() && !currentText.isEmpty())
    {
      mAttributesTreeWidget->addTopLevelItem(newItem);
    }
}

void QgsDiagramDialog::removeAttribute()
{
  QTreeWidgetItem* currentItem = mAttributesTreeWidget->currentItem();
  if(currentItem)
    {
      delete currentItem;
    }
}

void QgsDiagramDialog::changeClassificationType(const QString& newType)
{
  if(newType == "linearly scaled")
    {
      QWidget* currentWidget = mWidgetStackRenderers->currentWidget();
      if(currentWidget)
	{
	  mWidgetStackRenderers->removeWidget(currentWidget);
	}
      QWidget* newWidget = new QgsLinearlyScalingDialog(mVectorLayer);
      mWidgetStackRenderers->addWidget(newWidget);
      mWidgetStackRenderers->setCurrentWidget(newWidget);
      changeClassificationAttribute(mClassificationComboBox->currentText());
    }
}

void QgsDiagramDialog::changeClassificationAttribute(const QString& newAttribute)
{
  int attributeIndex = indexFromAttributeName(newAttribute);
  if(attributeIndex == -1)
    {
      return;
    }
  QgsDiagramRendererWidget* rendererWidget = dynamic_cast<QgsDiagramRendererWidget*>(mWidgetStackRenderers->currentWidget());
  if(!rendererWidget)
    {
      return;
    }
  rendererWidget->changeClassificationField(attributeIndex);
}

void QgsDiagramDialog::apply() const
{
  std::list<QColor> colorList;
  QgsAttributeList attList;

  int topLevelItemCount = mAttributesTreeWidget->topLevelItemCount();
  QTreeWidgetItem* currentItem;
  int currentAttribute;

  if(mDisplayDiagramsCheckBox->checkState() == Qt::Unchecked)
    {
      //remove any diagram overlays from the vector layer
      if(mVectorLayer)
	{
	  mVectorLayer->removeOverlay("diagram");
	}
      return;
    }
  
  int classificationField = indexFromAttributeName(mClassificationComboBox->currentText());
  
  for(int i = 0; i < topLevelItemCount; ++i)
    {
      currentItem = mAttributesTreeWidget->topLevelItem(i);
      currentAttribute = indexFromAttributeName(currentItem->text(0));
      if(currentAttribute != -1)
	{
	  colorList.push_back(currentItem->background(1).color());
	  attList.push_back(currentAttribute);
	}
    }

  QgsDiagramRendererWidget* rendererWidget = dynamic_cast<QgsDiagramRendererWidget*>(mWidgetStackRenderers->currentWidget());
    if(!rendererWidget)
      {
	return;
      }

  QgsDiagramRenderer* renderer = rendererWidget->createRenderer(mDiagramTypeComboBox->currentText(), classificationField, attList, colorList);
  if(!renderer)
    {
      return;
    }

  //create QgsDiagramOverlay and add the renderer to it
    
    //the overlay may need a different attribute list than the renderer
	if(!attList.contains(classificationField))
	{
		attList.push_back(classificationField);	
	}
    
  QgsDiagramOverlay* diagramOverlay = new QgsDiagramOverlay(mVectorLayer);
  diagramOverlay->setDiagramRenderer(renderer);
  diagramOverlay->setAttributes(attList);
  
  //add the new overlay to the vector layer
  mVectorLayer->addOverlay(diagramOverlay);
}

int QgsDiagramDialog::indexFromAttributeName(const QString& name) const
{
  QgsVectorDataProvider *provider;
  int notFound = -1;
  if ((provider = dynamic_cast<QgsVectorDataProvider *>(mVectorLayer->getDataProvider())))
    {
      const QgsFieldMap & fields = provider->fields();
      for (QgsFieldMap::const_iterator it = fields.begin(); it != fields.end(); ++it)
        {
	  if((*it).name() == name)
	    {
	      return it.key();
	    }
        }
    }
  return notFound;
}

void QgsDiagramDialog::handleItemDoubleClick(QTreeWidgetItem * item, int column)
{
  if(column == 1) //change color
    {
      QColor newColor = QColorDialog::getColor();
      if(newColor.isValid())
	{
	  item->setBackground(1, QBrush(newColor));
	}
    }
}
