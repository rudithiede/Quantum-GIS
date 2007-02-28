#include "qgslinearlyscalingdiagramrenderer.h"
#include "qgsfeature.h"
#include "qgsfeatureattribute.h"
#include <limits>
#include <QDomElement>
#include <QImage>

QgsLinearlyScalingDiagramRenderer::QgsLinearlyScalingDiagramRenderer(const QString& name, const QgsAttributeList& att, const std::list<QColor>& c): QgsDiagramRenderer(name, att, c)
{
  
}

QgsLinearlyScalingDiagramRenderer::~QgsLinearlyScalingDiagramRenderer()
{

}

QImage* QgsLinearlyScalingDiagramRenderer::renderDiagram(const QgsFeature& f) const
{ 
  double theValue;
  int width, height;
  if(getDiagramSize(width, height, theValue, f))
    {
      return 0;
    }
  else
    {
      return mFactory.createDiagram(width, height, f);
    }
}

int QgsLinearlyScalingDiagramRenderer::getDiagramSize(int& width, int& height, double& value, const QgsFeature& f) const
{
  //find out attribute value of the feature
  QgsAttributeMap featureAttributes = f.attributeMap();
  QgsAttributeMap::const_iterator iter = featureAttributes.find(mClassificationField);
  if(iter == featureAttributes.constEnd())
    {
      return 0;
    }
  
  value = iter.value().fieldValue().toDouble();
  double scalefactor = (value - mLowerItem.lowerBound()) / (mUpperItem.lowerBound() - mLowerItem.lowerBound());

  //linearly interpolate height and width according to min/max value
  if(mWellKnownName == "Pie")
    {
      height = (int)(mLowerItem.height() + (mUpperItem.height() - mLowerItem.height())*scalefactor);
      width = (int)(mLowerItem.width() + (mUpperItem.width() - mLowerItem.height())*scalefactor);
    }
  else if(mWellKnownName == "Bar")
    {
      //height of the classification attribute
      int heightClassAttr = (int)(mLowerItem.height() + (mUpperItem.height() - mLowerItem.height())*scalefactor);
      //find out the highest value of all attributes
      double highestValue = -std::numeric_limits<double>::max();
      double currentValue = 0;
      for(QgsAttributeMap::const_iterator iter = featureAttributes.constBegin(); iter != featureAttributes.constEnd(); ++iter)
	{
	  currentValue = iter.value().fieldValue().toDouble();
	  if(currentValue > highestValue)
	    {
	      highestValue = currentValue;
	    }
	}
      height = (int)(heightClassAttr / value * highestValue);


      //calculate height for the highest value
      //width only depends on number of attributes
      width = featureAttributes.size() * 120;
      
    }
  return 0;
}

QImage* QgsLinearlyScalingDiagramRenderer::getLegendImage(QString& legendString) const
{
  //find out the quantity necessary for a fixed height
  int destHeight = (mUpperItem.height() + mLowerItem.height())/2;
  int destWidth;
  double destQuantity;
  QgsFeature dummyFeature;

  double totalHeightDiff = mUpperItem.height() - mLowerItem.height();
  if(totalHeightDiff == 0)
    {
      destQuantity = mUpperItem.lowerBound();
    }
  else
    {
      double totalQuantityDiff = mUpperItem.lowerBound() - mLowerItem.lowerBound();
      destQuantity = mLowerItem.lowerBound() + totalQuantityDiff * (destHeight - mLowerItem.height())/totalHeightDiff;
    } 

  legendString = QString::number(destQuantity, 'f');

  if(mWellKnownName == "Pie")
    {
      destWidth = destHeight;
      QgsAttributeList::const_iterator att_it; 
      for(att_it = mAttributes.constBegin(); att_it != mAttributes.constEnd(); ++att_it)
	{
	  dummyFeature.addAttribute(*att_it, QgsFeatureAttribute("", "1"));
	}
    }
  else if (mWellKnownName == "Bar")
    {
      destWidth = destHeight/3;
      dummyFeature.addAttribute(mClassificationField, QgsFeatureAttribute("", "1"));
    }
  return mFactory.createDiagram(destWidth, destHeight, dummyFeature);
}

bool QgsLinearlyScalingDiagramRenderer::readXML(const QDomNode& rendererNode)
{
  QDomElement rendererElem = rendererNode.toElement();

  double lowerBound, upperBound;
  int width, height;
  bool conversionOk;

  //loweritem
  QDomNodeList lowerItemList = rendererElem.elementsByTagName("loweritem"); 
  if(lowerItemList.size() < 1)
    {
      return false;
    }

  QDomElement lowerItemElem = lowerItemList.at(0).toElement();
  lowerBound = lowerItemElem.attribute("lower_bound").toDouble(&conversionOk);
  if(!conversionOk)
    {
      return false;
    }
  upperBound = lowerItemElem.attribute("upper_bound").toDouble(&conversionOk);
  if(!conversionOk)
    {
      return false;
    }
  width = lowerItemElem.attribute("width").toInt(&conversionOk);
  if(!conversionOk)
    {
      return false;
    }
  height = lowerItemElem.attribute("height").toInt(&conversionOk);
  if(!conversionOk)
    {
      return false;
    }
  setLowerItem(QgsDiagramItem(lowerBound, upperBound, height, width));

  //upperitem
  QDomNodeList upperItemList = rendererElem.elementsByTagName("upperitem");
  if(upperItemList.size() < 1)
    {
      return false;
    }
  
  QDomElement upperItemElem = upperItemList.at(0).toElement();
  lowerBound = upperItemElem.attribute("lower_bound").toDouble(&conversionOk);
  if(!conversionOk)
    {
      return false;
    }
  upperBound = upperItemElem.attribute("upper_bound").toDouble(&conversionOk);
  if(!conversionOk)
    {
      return false;
    }
  width = upperItemElem.attribute("width").toInt(&conversionOk);
  if(!conversionOk)
    {
      return false;
    }
  height = upperItemElem.attribute("height").toInt(&conversionOk);
  if(!conversionOk)
    {
      return false;
    }
  setUpperItem(QgsDiagramItem(lowerBound, upperBound, height, width));

  return true;
}

bool QgsLinearlyScalingDiagramRenderer::writeXML(QDomNode& overlay_node, QDomDocument& doc) const
{
  QDomElement rendererElement = doc.createElement("renderer");
  rendererElement.setAttribute("type", "linearly_scaling");
  overlay_node.appendChild(rendererElement);

  //loweritem
  QDomElement lowerItemElem = doc.createElement("loweritem");
  lowerItemElem.setAttribute("width", mLowerItem.width());
  lowerItemElem.setAttribute("height", mLowerItem.height());
  lowerItemElem.setAttribute("lower_bound", mLowerItem.lowerBound());
  lowerItemElem.setAttribute("upper_bound", mLowerItem.upperBound());
  rendererElement.appendChild(lowerItemElem);

  //upperitem
  QDomElement upperItemElem = doc.createElement("upperitem");
  upperItemElem.setAttribute("width", mUpperItem.width());
  upperItemElem.setAttribute("height", mUpperItem.height());
  upperItemElem.setAttribute("lower_bound", mUpperItem.lowerBound());
  upperItemElem.setAttribute("upper_bound", mUpperItem.upperBound());
  rendererElement.appendChild(upperItemElem);

  return true;
}
