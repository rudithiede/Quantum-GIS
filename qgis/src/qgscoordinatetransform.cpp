/***************************************************************************
               QgsCoordinateTransform.cpp  - Coordinate Transforms
                             -------------------
    begin                : Dec 2004
    copyright            : (C) 2004 Tim Sutton
    email                : tim at linfiniti.com
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
#include "qgscoordinatetransform.h"

QgsCoordinateTransform::QgsCoordinateTransform( QString theSourceWKT, QString theDestWKT ) : QObject()
{
  mSourceWKT = theSourceWKT;
  mDestWKT = theDestWKT;
  //XXX Who spells initialize initialise?
  //XXX A: Its the queen's english....
  initialise();
}

QgsCoordinateTransform::~QgsCoordinateTransform()
{
  delete mSourceToDestXForm;
  delete mDestToSourceXForm;
}

void QgsCoordinateTransform::setSourceWKT(QString theWKT)
{
  mSourceWKT = theWKT;
  initialise();
}
void QgsCoordinateTransform::setDestWKT(QString theWKT)
{
#ifdef QGISDEBUG
  std::cout << "QgsCoordinateTransform::setDestWKT called" << std::endl;
#endif
  mDestWKT = theWKT;
  initialise();
}

void QgsCoordinateTransform::initialise()
{
 mInitialisedFlag=false; //guilty until proven innocent...
  //default to geo / wgs84 for now .... later we will make this user configurable
  QString myGeoWKT =    "GEOGCS[\"WGS 84\", "
    "  DATUM[\"WGS_1984\", "
    "    SPHEROID[\"WGS 84\",6378137,298.257223563, "
    "      AUTHORITY[\"EPSG\",7030]], "
    "    TOWGS84[0,0,0,0,0,0,0], "
    "    AUTHORITY[\"EPSG\",6326]], "
    "  PRIMEM[\"Greenwich\",0,AUTHORITY[\"EPSG\",8901]], "
    "  UNIT[\"DMSH\",0.0174532925199433,AUTHORITY[\"EPSG\",9108]], "
    "  AXIS[\"Lat\",NORTH], "
    "  AXIS[\"Long\",EAST], "
    "  AUTHORITY[\"EPSG\",4326]]";
  //default input projection to geo wgs84  
  if (mSourceWKT.isEmpty())
  {
   mSourceWKT = myGeoWKT;
  }
  //but default output projection to be the same as input proj
  //whatever that may be...
  if (mDestWKT.isEmpty())
  {
    mDestWKT = mSourceWKT;
  }  
  
  if (mSourceWKT == mDestWKT)
  {
    mShortCircuit=true;
    return;
  }
  else
  {
    mShortCircuit=false;
  }
  
  OGRSpatialReference myInputSpatialRefSys, myOutputSpatialRefSys;
  //this is really ugly but we need to get a QString to a char**
  char *mySourceCharArrayPointer = (char *)mSourceWKT.ascii();
  char *myDestCharArrayPointer = (char *)mDestWKT.ascii();
  
  /* Here are the possible OGR error codes :
     typedef int OGRErr;

    #define OGRERR_NONE                0
    #define OGRERR_NOT_ENOUGH_DATA     1    --> not enough data to deserialize 
    #define OGRERR_NOT_ENOUGH_MEMORY   2
    #define OGRERR_UNSUPPORTED_GEOMETRY_TYPE 3
    #define OGRERR_UNSUPPORTED_OPERATION 4
    #define OGRERR_CORRUPT_DATA        5
    #define OGRERR_FAILURE             6
    #define OGRERR_UNSUPPORTED_SRS     7 */
    
  OGRErr myInputResult = myInputSpatialRefSys.importFromWkt( & mySourceCharArrayPointer );
  if (myInputResult != OGRERR_NONE)
  {
    std::cout << "vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv"<< std::endl;
    std::cout << "The source projection for this layer could *** NOT *** be set " << std::endl;
    std::cout << "INPUT: " << std::endl << mSourceWKT << std::endl;
    std::cout << "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^" << std::endl;
    return;
  }

  OGRErr myOutputResult = myOutputSpatialRefSys.importFromWkt( & myDestCharArrayPointer );
  if (myOutputResult != OGRERR_NONE)
  {
    std::cout << "vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv"<< std::endl;
    std::cout << "The dest projection for this layer could *** NOT *** be set " << std::endl;
    std::cout << "OUTPUT: " << std::endl << mDestWKT << std::endl;
    std::cout << "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^" << std::endl;
    return;
  }  
  
  mSourceToDestXForm = OGRCreateCoordinateTransformation( &myInputSpatialRefSys, &myOutputSpatialRefSys );
  mDestToSourceXForm = OGRCreateCoordinateTransformation( &myOutputSpatialRefSys, &myInputSpatialRefSys );
  if ( ! mSourceToDestXForm || ! mDestToSourceXForm)
  {
    std::cout << "vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv"<< std::endl;
    std::cout << "The OGR Coordinate transformation for this layer could *** NOT *** be set " << std::endl;
    std::cout << "INPUT: " << std::endl << mSourceWKT << std::endl;
    std::cout << "OUTPUT: " << std::endl << mDestWKT  << std::endl;
    std::cout << "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^" << std::endl;
    return;
  }
  else
  {
    mInitialisedFlag = true;
    std::cout << "vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv"<< std::endl;
    std::cout << "The OGR Coordinate transformation for this layer was set to" << std::endl;
    std::cout << "INPUT: " << std::endl << mSourceWKT << std::endl;
  char *proj4src;
  myInputSpatialRefSys.exportToProj4(&proj4src);
  std::cout << "PROJ4: " << std::endl << proj4src << std::endl;  
    std::cout << "OUTPUT: " << std::endl << mDestWKT  << std::endl;
  char *proj4dest;
  myOutputSpatialRefSys.exportToProj4(&proj4dest);
  std::cout << "PROJ4: " << std::endl << proj4dest << std::endl;  
    std::cout << "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^" << std::endl;
  }
  //just a test to see if inverse 
  //inverseTransform(10.0,10.0);
  // Deactivate GDAL error messages.
  //CPLSetErrorHandler( errorHandler );

  // Guess if the source o dest CS is in degrees.
  //Searchf for this phrase in each wkt:  "unit[\"degree\"" 
}
