#include "qgsspatialrefsys.h"

#include <cassert>
#include <iostream>
#include <sqlite3.h>

QgsSpatialRefSys::QgsSpatialRefSys(){}

QgsSpatialRefSys::QgsSpatialRefSys(QString theWkt) 
{
  createFromWkt(theWkt);
}

QgsSpatialRefSys::QgsSpatialRefSys(long theSrsId, 
        QString theDescription, 
        QString theProjectionAcronym, 
        QString theEllipsoidAcronym, 
        QString theParameters,
        long theSRID,
        long theEpsg,
        bool theGeoFlag)

{
}

QgsSpatialRefSys::QgsSpatialRefSys(const long theId, SRS_TYPE theType)
{
  switch (theType)
  {
    case QGIS_SRSID:
      createFromSystemSrsId(theId);
      break;
    case POSTGIS_SRID:
      createFromSrid(theId);
      break;
    case EPSG:
      createFromEpsg(theId);
      break;
    default:
       //THIS IS BAD...THIS PART OF CODE SHOULD NEVER BE REACHED...
       std::cout << "Unexpected case reached in " << __FILE__ << " : " << __LINE__ << std::endl;
  }; 

}

// Misc helper functions -----------------------

void QgsSpatialRefSys::createFromSrid(long theSrid)
{
#ifdef QGISDEBUG
  std::cout << " QgsSpatialRefSys::createFromSrid" << std::endl;
#endif
// Get the package data path and set the full path name to the sqlite3 spatial reference
// database.
#if defined(Q_OS_MACX) || defined(WIN32)
  QString PKGDATAPATH = qApp->applicationDirPath() + "/share/qgis";
#endif
  QString myDatabaseFileName = PKGDATAPATH;
  myDatabaseFileName += "/resources/srs.db";


  sqlite3      *myDatabase;
  char         *myErrorMessage = 0;
  const char   *myTail;
  sqlite3_stmt *myPreparedStatement;
  int           myResult;
  //check the db is available
  myResult = sqlite3_open(myDatabaseFileName.latin1(), &myDatabase);
  if(myResult) 
  {
    std::cout <<  "Can't open database: " <<  sqlite3_errmsg(myDatabase) << std::endl; 
    // XXX This will likely never happen since on open, sqlite creates the 
    //     database if it does not exist.
    assert(myResult == 0);
  }

  /*
    srs_id INTEGER PRIMARY KEY,
    description text NOT NULL,
    projection_acronym text NOT NULL,
    ellipsoid_acronym NOT NULL,
    parameters text NOT NULL,
    srid integer NOT NULL,
    epsg integer NOT NULL,
    is_geo integer NOT NULL);
  */

  QString mySql = "select srs_id,description,projection_acronym,ellipsoid_acronym,parameters,srid,epsg,is_geo from tbl_srs where srs_id='" + QString::number(theSrid) + "'";
  myResult = sqlite3_prepare(myDatabase, (const char *)mySql, mySql.length(), &myPreparedStatement, &myTail);
  // XXX Need to free memory from the error msg if one is set
  if(myResult == SQLITE_OK)
  {
      sqlite3_step(myPreparedStatement) == SQLITE_ROW;
      mSrsId = QString ((char *)sqlite3_column_text(myPreparedStatement,0)).toLong();
      mDescription = QString ((char *)sqlite3_column_text(myPreparedStatement,1));
      mProjectionAcronym = QString ((char *)sqlite3_column_text(myPreparedStatement,2));
      mEllipsoidAcronym = QString ((char *)sqlite3_column_text(myPreparedStatement,3));
      mParameters = QString ((char *)sqlite3_column_text(myPreparedStatement,4));
      mSRID = QString ((char *)sqlite3_column_text(myPreparedStatement,5)).toLong();
      mEpsg = QString ((char *)sqlite3_column_text(myPreparedStatement,6)).toLong();
      mGeoFlag = QString ((char *)sqlite3_column_text(myPreparedStatement,7));
      isValidFlag==true;

  }
  else
  {
#ifdef QGISDEBUG
    std::cout << " QgsSpatialRefSys::createFromSrid failed :  " << mySql << std::endl;
#endif
    isValidFlag==false;
  }
  sqlite3_finalize(myPreparedStatement);
  sqlite3_close(myDatabase);
}

void QgsSpatialRefSys::createFromWkt(QString theWkt)
{
 //this is really ugly but we need to get a QString to a char**
  char *myCharArrayPointer = (char *)theWkt.ascii();

  /* Here are the possible OGR error codes :
     typedef int OGRErr;
     #define OGRERR_NONE                0
     #define OGRERR_NOT_ENOUGH_DATA     1    --> not enough data to deserialize 
     #define OGRERR_NOT_ENOUGH_MEMORY   2
     #define OGRERR_UNSUPPORTED_GEOMETRY_TYPE 3
     #define OGRERR_UNSUPPORTED_OPERATION 4
     #define OGRERR_CORRUPT_DATA        5
     #define OGRERR_FAILURE             6
     #define OGRERR_UNSUPPORTED_SRS     7 
  */

  OGRSpatialReference myOgrSpatialRef;

  OGRErr myInputResult = myOgrSpatialRef.importFromWkt( & myCharArrayPointer );
  if (myInputResult != OGRERR_NONE)
  {
    std::cout << "vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv"<< std::endl;
    std::cout << "This SRS could *** NOT *** be set from the supplied WKT " << std::endl;
    std::cout << "INPUT: " << std::endl << theWkt << std::endl;
    std::cout << "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^" << std::endl;
    return;
  }


  // always morph from esri as it doesn't hurt anything
  myOgrSpatialRef.morphFromESRI();
  // create the proj4 structs needed for transforming 
  char *proj4src;
  myOgrSpatialRef.exportToProj4(&proj4src);

  //XXX TODO split out projext and ellipsoid acronym from the parameters
  mParameters=QString(proj4src);
}

void QgsSpatialRefSys::createFromEpsg(long theEpsg)
{
#ifdef QGISDEBUG
  std::cout << " QgsSpatialRefSys::createFromEpsg" << std::endl;
#endif
// Get the package data path and set the full path name to the sqlite3 spatial reference
// database.
#if defined(Q_OS_MACX) || defined(WIN32)
  QString PKGDATAPATH = qApp->applicationDirPath() + "/share/qgis";
#endif
  QString myDatabaseFileName = PKGDATAPATH;
  myDatabaseFileName += "/resources/srs.db";


  sqlite3      *myDatabase;
  char         *myErrorMessage = 0;
  const char   *myTail;
  sqlite3_stmt *myPreparedStatement;
  int           myResult;
  //check the db is available
  myResult = sqlite3_open(myDatabaseFileName.latin1(), &myDatabase);
  if(myResult) 
  {
    std::cout <<  "Can't open database: " <<  sqlite3_errmsg(myDatabase) << std::endl; 
    // XXX This will likely never happen since on open, sqlite creates the 
    //     database if it does not exist.
    assert(myResult == 0);
  }

  /*
    srs_id INTEGER PRIMARY KEY,
    description text NOT NULL,
    projection_acronym text NOT NULL,
    ellipsoid_acronym NOT NULL,
    parameters text NOT NULL,
    srid integer NOT NULL,
    epsg integer NOT NULL,
    is_geo integer NOT NULL);
  */

  QString mySql = "select srs_id,description,projection_acronym,ellipsoid_acronym,parameters,srid,epsg,is_geo from tbl_srs where epsg_id='" + QString::number(theEpsg) + "'";
  myResult = sqlite3_prepare(myDatabase, (const char *)mySql, mySql.length(), &myPreparedStatement, &myTail);
  // XXX Need to free memory from the error msg if one is set
  if(myResult == SQLITE_OK)
  {
      sqlite3_step(myPreparedStatement) == SQLITE_ROW;
      mSrsId = QString ((char *)sqlite3_column_text(myPreparedStatement,0)).toLong();
      mDescription = QString ((char *)sqlite3_column_text(myPreparedStatement,1));
      mProjectionAcronym = QString ((char *)sqlite3_column_text(myPreparedStatement,2));
      mEllipsoidAcronym = QString ((char *)sqlite3_column_text(myPreparedStatement,3));
      mParameters = QString ((char *)sqlite3_column_text(myPreparedStatement,4));
      mSRID = QString ((char *)sqlite3_column_text(myPreparedStatement,5)).toLong();
      mEpsg = QString ((char *)sqlite3_column_text(myPreparedStatement,6)).toLong();
      mGeoFlag = QString ((char *)sqlite3_column_text(myPreparedStatement,7));
      isValidFlag==true;

  }
  else
  {
#ifdef QGISDEBUG
    std::cout << " QgsSpatialRefSys::createFromEpsg failed :  " << mySql << std::endl;
#endif
    isValidFlag==false;
  }
  sqlite3_finalize(myPreparedStatement);
  sqlite3_close(myDatabase);
}


void QgsSpatialRefSys::createFromSystemSrsId (long theSrsId)
{
#ifdef QGISDEBUG
  std::cout << " QgsSpatialRefSys::createFromSystemSrsId" << std::endl;
#endif
// Get the package data path and set the full path name to the sqlite3 spatial reference
// database.
#if defined(Q_OS_MACX) || defined(WIN32)
  QString PKGDATAPATH = qApp->applicationDirPath() + "/share/qgis";
#endif
  QString myDatabaseFileName = PKGDATAPATH;
  myDatabaseFileName += "/resources/srs.db";


  sqlite3      *myDatabase;
  char         *myErrorMessage = 0;
  const char   *myTail;
  sqlite3_stmt *myPreparedStatement;
  int           myResult;
  //check the db is available
  myResult = sqlite3_open(myDatabaseFileName.latin1(), &myDatabase);
  if(myResult) 
  {
    std::cout <<  "Can't open database: " <<  sqlite3_errmsg(myDatabase) << std::endl; 
    // XXX This will likely never happen since on open, sqlite creates the 
    //     database if it does not exist.
    assert(myResult == 0);
  }

  /*
    srs_id INTEGER PRIMARY KEY,
    description text NOT NULL,
    projection_acronym text NOT NULL,
    ellipsoid_acronym NOT NULL,
    parameters text NOT NULL,
    srid integer NOT NULL,
    epsg integer NOT NULL,
    is_geo integer NOT NULL);
  */

  QString mySql = "select srs_id,description,projection_acronym,ellipsoid_acronym,parameters,srid,epsg,is_geo from tbl_srs where srs_id='" + QString::number(theSrsId) + "'";
  myResult = sqlite3_prepare(myDatabase, (const char *)mySql, mySql.length(), &myPreparedStatement, &myTail);
  // XXX Need to free memory from the error msg if one is set
  if(myResult == SQLITE_OK)
  {
      sqlite3_step(myPreparedStatement) == SQLITE_ROW;
      mSrsId = QString ((char *)sqlite3_column_text(myPreparedStatement,0)).toLong();
      mDescription = QString ((char *)sqlite3_column_text(myPreparedStatement,1));
      mProjectionAcronym = QString ((char *)sqlite3_column_text(myPreparedStatement,2));
      mEllipsoidAcronym = QString ((char *)sqlite3_column_text(myPreparedStatement,3));
      mParameters = QString ((char *)sqlite3_column_text(myPreparedStatement,4));
      mSRID = QString ((char *)sqlite3_column_text(myPreparedStatement,5)).toLong();
      mEpsg = QString ((char *)sqlite3_column_text(myPreparedStatement,6)).toLong();
      mGeoFlag = QString ((char *)sqlite3_column_text(myPreparedStatement,7));
      isValidFlag==true;

  }
  else
  {
#ifdef QGISDEBUG
    std::cout << " QgsSpatialRefSys::createFromSystemSrsId failed :  " << mySql << std::endl;
#endif
    isValidFlag==false;
  }
  sqlite3_finalize(myPreparedStatement);
  sqlite3_close(myDatabase);
}


void QgsSpatialRefSys::createFromUserSrsId (long theSrsId)
{

}

QString QgsSpatialRefSys::toProjString () const
{
  //place holder for now....shoudl concatenate proj family, elliposid and parameters
  return mParameters;
}

bool QgsSpatialRefSys::isValid() const
{
  //XXXXXXXXX DO ME!
  return true;
}
// Accessors -----------------------------------

/*! Get the SrsId
 *  @return  long theSrsId The internal sqlite3 srs.db primary key for this srs 
 */
long QgsSpatialRefSys::srid() const
{
  return mSRID;
}
/*! Get the Description
 * @return  QString the Description A textual description of the srs.
 */
QString QgsSpatialRefSys::description () const
{
  return mDescription;
}
/*! Get the Projection Acronym
 * @return  QString theProjectionAcronym The official proj4 acronym for the projection family
 */
QString QgsSpatialRefSys::projectionAcronym() const
{
  return mProjectionAcronym;
}
/*! Get the Ellipsoid Acronym
 * @return  QString theEllipsoidAcronym The official proj4 acronym for the ellipoid
 */
QString QgsSpatialRefSys::ellipsoid () const 
{
  return mEllipsoidAcronym;
}
/* Get the Proj Parameters. If proj and ellps keys are found in the parameters,
 * they will be stripped out and the Projection and ellipsoid acronyms will be
 * overridden with these.
 * @return  QString theParameters Proj4 format specifies (excluding proj and ellips) that define this srs.
 */
QString QgsSpatialRefSys::parameters () const
{
  return mParameters;
}
/*! Get this Geographic? flag
 * @return  bool theGeoFlag Whether this is a geographic or projected coordinate system
 */
bool QgsSpatialRefSys::geographicFlag () const
{
  return mGeoFlag;
}

/*! Set the postgis srid for this srs
 * @return  long theSRID the Postgis spatial_ref_sys identifier for this srs (defaults to 0)
 */
long QgsSpatialRefSys::postgisSrid () const
{
  return mSRID ;
}
/*! Set the EPSG identifier for this srs
 * @return  long theEpsg the ESPG identifier for this srs (defaults to 0)
 */
long QgsSpatialRefSys::epsg () const
{
  return mEpsg;
}

// Mutators -----------------------------------


/*! Set the SrsId
 *  @param  long theSrsId The internal sqlite3 srs.db primary key for this srs 
 */
void QgsSpatialRefSys::setSrid(long theSrid)
{
  mSRID=theSrid;
}
/*! Set the Description
 * @param  QString the Description A textual description of the srs.
 */
void QgsSpatialRefSys::setDescription (QString theDescription)
{
  mDescription = theDescription;
}
/*! Set the Projection Acronym
 * @param  QString theProjectionAcronym The official proj4 acronym for the projection family
 */
void QgsSpatialRefSys::setProjectionAcronym(QString theProjectionAcronym)
{
  mProjectionAcronym=theProjectionAcronym;
}
/*! Set the Ellipsoid Acronym
 * @param  QString theEllipsoidAcronym The official proj4 acronym for the ellipoid
 */
void QgsSpatialRefSys::setEllipsoid (QString theEllipsoidAcronym)
{
  mEllipsoidAcronym=theEllipsoidAcronym;
}
/* Set the Proj Parameters. If proj and ellps keys are found in the parameters,
 * they will be stripped out and the Projection and ellipsoid acronyms will be
 * overridden with these.
 * @param  QString theParameters Proj4 format specifies (excluding proj and ellips) that define this srs.
 */
void QgsSpatialRefSys::setParameters (QString theParameters)
{
  mParameters=theParameters;
}
/*! Set this Geographic? flag
 * @param  bool theGeoFlag Whether this is a geographic or projected coordinate system
 */
void QgsSpatialRefSys::setGeographicFlag (bool theGeoFlag)
{
  mGeoFlag=theGeoFlag;
}

/*! Set the postgis srid for this srs
 * @param  long theSRID the Postgis spatial_ref_sys identifier for this srs (defaults to 0)
 */
void QgsSpatialRefSys::setPostgisSrid (long theSrid)
{
  mSRID=theSrid;
}
/*! Set the EPSG identifier for this srs
 * @param  long theEpsg the ESPG identifier for this srs (defaults to 0)
 */
void QgsSpatialRefSys::setEpsg (long theEpsg)
{
  mEpsg=theEpsg;
}
