/***************************************************************************
    qgsgrassprovider.cpp -  Data provider for GRASS format
                             -------------------
    begin                : March, 2004
    copyright            : (C) 2004 by Gary E.Sherman, Radim Blazek
    email                : sherman@mrcc.com, blazek@itc.it
 ***************************************************************************/
/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
#include <string.h>
#include <iostream>
#include <vector>
#include <cfloat>

#include <qpixmap.h>
#include <qiconset.h>
#include <qdir.h>
#include <qstring.h>
#include <qdatetime.h>
#include <qmessagebox.h>

#include "../../src/qgis.h"
#include "../../src/qgsdataprovider.h"
#include "../../src/qgsfeature.h"
#include "../../src/qgsfield.h"
#include "../../src/qgsrect.h"

extern "C" {
#include <gis.h>
#include <dbmi.h>
#include <Vect.h>
}

#include "qgsgrass.h"
#include "qgsgrassprovider.h"

std::vector<GLAYER> QgsGrassProvider::mLayers;
std::vector<GMAP> QgsGrassProvider::mMaps;

QgsGrassProvider::QgsGrassProvider(QString uri):mDataSourceUri(uri)
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider URI: " << uri << std::endl;
    #endif

    QTime time;
    time.start();

    mValid = false;
    checkEndian();
    
    // Parse URI 
    QDir dir ( uri );  // it is not a directory in fact
    uri = dir.path();  // no dupl '/'

    mLayer = dir.dirName();
    uri = uri.left( dir.path().findRev('/') );
    dir = QDir(uri);
    mMapName = dir.dirName();
    dir.cdUp(); 
    mMapset = dir.dirName();
    dir.cdUp(); 
    mLocation = dir.dirName();
    dir.cdUp(); 
    mGisdbase = dir.path();
    
    #ifdef QGISDEBUG
    std::cerr << "gisdbase: " << mGisdbase << std::endl;
    std::cerr << "location: " << mLocation << std::endl;
    std::cerr << "mapset: "   << mMapset << std::endl;
    std::cerr << "mapName: "  << mMapName << std::endl;
    std::cerr << "layer: "    << mLayer << std::endl;
    #endif

    /* Parse Layer, supported layers <field>_point, <field>_line, <field>_area
    *  Layer is opened even if it is empty (has no features) 
    */
    mLayerField = -1;       
    if ( mLayer.compare("boundary") == 0 ) { // currently not used
        mLayerType = BOUNDARY;
	mGrassType = GV_BOUNDARY;
    } else if ( mLayer.compare("centroid") == 0 ) { // currently not used
        mLayerType = CENTROID;
	mGrassType = GV_CENTROID;
    } else {
	// Get field number
	int pos = mLayer.find('_');

	if ( pos == -1 ) {
	    std::cerr << "Invalid layer name, no underscore found: " << mLayer << std::endl;
	    return;
	}

	mLayerField = mLayer.left(pos).toInt();

	QString ts = mLayer.right( mLayer.length() - pos - 1 );
	if ( ts.compare("point") == 0 ) {
	    mLayerType = POINT;
	    mGrassType = GV_POINT; // ?! centroids may be points
	} else if ( ts.compare("line") == 0 ) {
	    mLayerType = LINE;
	    mGrassType = GV_LINE | GV_BOUNDARY; 
	} else if ( ts.compare("polygon") == 0 ) {
	    mLayerType = POLYGON;
	    mGrassType = GV_AREA; 
	} else {
	    std::cerr << "Invalid layer name, wrong type: " << ts << std::endl;
	    return;
	}
    }
    #ifdef QGISDEBUG
    std::cerr << "mLayerField: " << mLayerField << std::endl;
    std::cerr << "mLayerType: " << mLayerType << std::endl;
    #endif

    if ( mLayerType == BOUNDARY || mLayerType == CENTROID ) {
	std::cerr << "Layer type not supported." << std::endl;
	return;
    }

    // Set QGIS type
    switch ( mLayerType ) {
	case POINT:
	case CENTROID:
            mQgisType = QGis::WKBPoint; 
	    break;
	case LINE:
	case BOUNDARY:
            mQgisType = QGis::WKBLineString; 
	    break;
	case POLYGON:
	    mQgisType = QGis::WKBPolygon;
	    break;
    }

    mLayerId = openLayer(mGisdbase, mLocation, mMapset, mMapName, mLayerField);
    if ( mLayerId < 0 ) {
	std::cerr << "Cannot open GRASS layer:" << uri << std::endl;
	return;
    }
    #ifdef QGISDEBUG
    std::cerr << "mLayerId: " << mLayerId << std::endl;
    #endif

    mMap = layerMap(mLayerId);

    // Getting the total number of features in the layer
    mNumberFeatures = 0;
    mCidxFieldIndex = -1;
    if ( mLayerField >= 0 ) {
	mCidxFieldIndex = Vect_cidx_get_field_index ( mMap, mLayerField);
	if ( mCidxFieldIndex >= 0 ) {
	    mNumberFeatures = Vect_cidx_get_type_count ( mMap, mLayerField, mGrassType );
	    mCidxFieldNumCats = Vect_cidx_get_num_cats_by_index ( mMap, mCidxFieldIndex );
	}
    } else {
	// TODO nofield layers
	mNumberFeatures = 0;
	mCidxFieldNumCats = 0;
    }
    mNextCidx = 0;

    #ifdef QGISDEBUG
    std::cerr << "mNumberFeatures = " << mNumberFeatures << " mCidxFieldIndex = " << mCidxFieldIndex
              << " mCidxFieldNumCats = " << mCidxFieldNumCats << std::endl;
    #endif


    // Create selection array
    mSelectionSize = allocateSelection ( mMap, &mSelection );
    resetSelection(1); // TODO ? - where what reset

    mMapVersion = mMaps[mLayers[mLayerId].mapId].version;

    // Init structures
    mPoints = Vect_new_line_struct ();
    mCats = Vect_new_cats_struct ();
    mList = Vect_new_list ();

    mValid = true;

    #ifdef QGISDEBUG
    std::cerr << "New GRASS layer opened, time (ms): " << time.elapsed() << std::endl;
    #endif
}

void QgsGrassProvider::update ( void )
{
    #ifdef QGISDEBUG
    std::cerr << "*** QgsGrassProvider::update ***" << std::endl;
    #endif

    mValid = false;
    // TODO check if reopened map is valid

    // Getting the total number of features in the layer
    // It may happen that the field disappeares from the map (deleted features, new map without that field)
    mNumberFeatures = 0;
    mCidxFieldIndex = -1;
    if ( mLayerField >= 0 ) {
	mCidxFieldIndex = Vect_cidx_get_field_index ( mMap, mLayerField);
	if ( mCidxFieldIndex >= 0 ) {
	    mNumberFeatures = Vect_cidx_get_type_count ( mMap, mLayerField, mGrassType );
	    mCidxFieldNumCats = Vect_cidx_get_num_cats_by_index ( mMap, mCidxFieldIndex );
	}
    } else {
	// TODO nofield layers
	mNumberFeatures = 0;
	mCidxFieldNumCats = 0;
    }
    mNextCidx = 0;

    #ifdef QGISDEBUG
    std::cerr << "mNumberFeatures = " << mNumberFeatures << " mCidxFieldIndex = " << mCidxFieldIndex
              << " mCidxFieldNumCats = " << mCidxFieldNumCats << std::endl;
    #endif

    // Create selection array
    if ( mSelection ) free ( mSelection );
    mSelectionSize = allocateSelection ( mMap, &mSelection );
    resetSelection(1); 
    
    mMapVersion = mMaps[mLayers[mLayerId].mapId].version;

    mValid = true;
}

int QgsGrassProvider::allocateSelection( struct Map_info *map, char **selection )
{
    int size;
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::allocateSellection" << std::endl;
    #endif
    
    int nlines = Vect_get_num_lines ( map );
    int nareas = Vect_get_num_areas ( map );
    
    if ( nlines > nareas ) {
	size = nlines + 1;
    } else {
	size = nareas + 1;
    }
    #ifdef QGISDEBUG
    std::cerr << "nlines = " << nlines << " nareas = " << nareas << " size = " << size << std::endl;
    #endif

    *selection = (char *) malloc ( size );

    return size;
}

QgsGrassProvider::~QgsGrassProvider()
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::~QgsGrassProvider()" << std::endl;
    #endif
    closeLayer ( mLayerId );
}

/**
* Get the first feature resutling from a select operation
* @return QgsFeature
*/
QgsFeature *QgsGrassProvider::getFirstFeature(bool fetchAttributes)
{
    #ifdef QGISDEBUG
    std::cout << "QgsGrassProvider::getFirstFeature()" << std::endl;
    #endif

    if ( isEdited() )
	return 0;

    mNextCidx = 0;
	
    return ( getNextFeature(fetchAttributes) );
}

/**
* Get the next feature resulting from a select operation
* @return false if there are no features in the selection set
*/
bool QgsGrassProvider::getNextFeature(QgsFeature &feature, bool fetchAttributes)
{
    #if QGISDEBUG > 3
    std::cout << "QgsGrassProvider::getNextFeature()" << std::endl;
    #endif

    if ( isEdited() )
	return 0;

    // TODO once clear how to do that 
    return false;
}

/**
* Get the next feature resulting from a select operation
* Return 0 if there are no features in the selection set
* @return QgsFeature
*/
QgsFeature *QgsGrassProvider::getNextFeature(bool fetchAttributes)
{
    int cat, type, id, idx;
    unsigned char *wkb;
    int wkbsize;

    #if QGISDEBUG > 3
    std::cout << "QgsGrassProvider::getNextFeature() mNextCidx = " << mNextCidx 
    	      << " fetchAttributes = " << fetchAttributes << std::endl;
    #endif

    if ( isEdited() )
	return 0;
    
    // Get next line/area id
    int found = 0;
    while ( mNextCidx < mCidxFieldNumCats ) {
	Vect_cidx_get_cat_by_index ( mMap, mCidxFieldIndex, mNextCidx++, &cat, &type, &id );
	// Warning: selection array is only of type line/area of current layer -> check type first

	if ( !(type & mGrassType) ) continue;
	if ( !mSelection[id] ) continue;
        found = 1;
	break;
    }
    if ( !found ) return 0; // No more features
    #if QGISDEBUG > 3
    std::cout << "cat = " << cat << " type = " << type << " id = " << id << std::endl;
    #endif

    QgsFeature *f = new QgsFeature(id);

    // TODO int may be 64 bits (memcpy)
    if ( type & (GV_POINTS | GV_LINES) ) { /* points or lines */
	Vect_read_line ( mMap, mPoints, mCats, id);
	int npoints = mPoints->n_points;
	
	if ( type & GV_POINTS ) {
	    wkbsize = 1 + 4 + 2*8;
	} else { // GV_LINES
	    wkbsize = 1+4+4+npoints*2*8;
	}	    
	wkb = new unsigned char[wkbsize];
	unsigned char *wkbp = wkb;
	wkbp[0] = (unsigned char) mEndian;
	wkbp += 1;

	/* WKB type */
	memcpy (wkbp, &mQgisType, 4);
	wkbp += 4;
	
	/* number of points */
	if ( type & GV_LINES ) {
	    memcpy (wkbp, &npoints, 4);
	    wkbp += 4;
	}
	
	for ( int i = 0; i < npoints; i++ ) {
	    memcpy (wkbp, &(mPoints->x[i]), 8);
	    memcpy (wkbp+8, &(mPoints->y[i]), 8);
	    wkbp += 16;
	}
    } else { // GV_AREA
	Vect_get_area_points ( mMap, id, mPoints );
	int npoints = mPoints->n_points;

	wkbsize = 1+4+4+4+npoints*2*8; // size without islands
	wkb = new unsigned char[wkbsize];
	wkb[0] = (unsigned char) mEndian;
	int offset = 1;

	/* WKB type */
	memcpy ( wkb+offset, &mQgisType, 4);
	offset += 4;

	/* Number of rings */
	int nisles = Vect_get_area_num_isles ( mMap, id );
	int nrings = 1 + nisles; 
	memcpy (wkb+offset, &nrings, 4);
	offset += 4;

	/* Outer ring */
	memcpy (wkb+offset, &npoints, 4);
	offset += 4;
	for ( int i = 0; i < npoints; i++ ) {
	    memcpy (wkb+offset, &(mPoints->x[i]), 8);
	    memcpy (wkb+offset+8, &(mPoints->y[i]), 8);
	    offset += 16;
	}
	
	/* Isles */
	for ( int i = 0; i < nisles; i++ ) {
	    Vect_get_isle_points ( mMap, Vect_get_area_isle (mMap, id, i), mPoints );
	    npoints = mPoints->n_points;
	    
	    // add space
	    wkbsize += 4+npoints*2*8;
	    wkb = (unsigned char *) realloc (wkb, wkbsize);

	    memcpy (wkb+offset, &npoints, 4);
	    offset += 4;
	    for ( int i = 0; i < npoints; i++ ) {
		memcpy (wkb+offset, &(mPoints->x[i]), 8);
		memcpy (wkb+offset+8, &(mPoints->y[i]), 8);
		offset += 16;
	    }
	}
    }

    f->setGeometry(wkb, wkbsize);

    if ( fetchAttributes ) {
	QgsGrassProvider::setFeatureAttributes( mLayerId, cat, f );  
    }
    
    return f;
}

QgsFeature* QgsGrassProvider::getNextFeature(std::list<int>& attlist)
{
    #ifdef QGISDEBUG
    std::cout << "QgsGrassProvider::getNextFeature()" << std::endl;
    #endif

    if ( isEdited() )
	return 0;

    return 0;//soon
}

void QgsGrassProvider::resetSelection( bool sel)
{
    #ifdef QGISDEBUG
    std::cout << "QgsGrassProvider::resetSelection()" << std::endl;
    #endif
    memset ( mSelection, (int) sel, mSelectionSize );
    mNextCidx = 0;
}

/**
* Select features based on a bounding rectangle. Features can be retrieved
* with calls to getFirstFeature and getNextFeature.
* @param mbr QgsRect containing the extent to use in selecting features
*/
void QgsGrassProvider::select(QgsRect *rect, bool useIntersect)
{
    #ifdef QGISDEBUG
    std::cout << "QgsGrassProvider::select() useIntersect = " << useIntersect << std::endl;
    #endif

    if ( isEdited() )
	return;

    // check if outdated and update if necessary
    int mapId = mLayers[mLayerId].mapId;
    if ( mapOutdated(mapId) ) {
        updateMap ( mapId );
    }
    if ( mMapVersion < mMaps[mapId].version ) {
        update();
    }

    resetSelection(0);
    
    if ( !useIntersect ) { // select by bounding boxes only
	BOUND_BOX box;
	box.N = rect->yMax(); box.S = rect->yMin(); 
	box.E = rect->xMax(); box.W = rect->xMin(); 
	box.T = PORT_DOUBLE_MAX; box.B = -PORT_DOUBLE_MAX; 
	if ( mLayerType == POINT || mLayerType == CENTROID || mLayerType == LINE || mLayerType == BOUNDARY ) {
	    Vect_select_lines_by_box(mMap, &box, mGrassType, mList);
	} else if ( mLayerType == POLYGON ) {
	    Vect_select_areas_by_box(mMap, &box, mList);
	}

    } else { // check intersection
	struct line_pnts *Polygon;
	
	Polygon = Vect_new_line_struct();

	Vect_append_point( Polygon, rect->xMin(), rect->yMin(), 0);
	Vect_append_point( Polygon, rect->xMax(), rect->yMin(), 0);
	Vect_append_point( Polygon, rect->xMax(), rect->yMax(), 0);
	Vect_append_point( Polygon, rect->xMin(), rect->yMax(), 0);
	Vect_append_point( Polygon, rect->xMin(), rect->yMin(), 0);

	if ( mLayerType == POINT || mLayerType == CENTROID || mLayerType == LINE || mLayerType == BOUNDARY ) {
	    Vect_select_lines_by_polygon ( mMap, Polygon, 0, NULL, mGrassType, mList);
	} else if ( mLayerType == POLYGON ) {
	    Vect_select_areas_by_polygon ( mMap, Polygon, 0, NULL, mList);
	}

	Vect_destroy_line_struct (Polygon);
    }
    for ( int i = 0; i < mList->n_values; i++ ) {
        if ( mList->value[i] <= mSelectionSize ) {
	    mSelection[mList->value[i]] = 1;
	} else {
	    std::cerr << "Selected element out of range" << std::endl;
	}
    }
	
    #ifdef QGISDEBUG
    std::cout << mList->n_values << " features selected" << std::endl;
    #endif
}

/**
* Set the data source specification. This may be a path or database
* connection string
* @uri data source specification
*/
void QgsGrassProvider::setDataSourceUri(QString uri)
{
	mDataSourceUri = uri;
}

/**
* Get the data source specification. This may be a path or database
* connection string
* @return data source specification
*/
QString QgsGrassProvider::getDataSourceUri()
{
	return mDataSourceUri;
}

/**
* Identify features within the search radius specified by rect
* @param rect Bounding rectangle of search radius
* @return std::vector containing QgsFeature objects that intersect rect
*/
std::vector<QgsFeature>& QgsGrassProvider::identify(QgsRect * rect)
{
    #ifdef QGISDEBUG
    std::cout << "QgsGrassProvider::identify()" << std::endl;
    #endif

    // TODO: does not return vector of features! Should it?

    if ( !isEdited() ) {
        select(rect, true);
    }
}

/* set endian */
void QgsGrassProvider::checkEndian()
{
	char *chkEndian = new char[4];
	memset(chkEndian, '\0', 4);
	chkEndian[0] = 0xE8;

	int *ce = (int *) chkEndian;
	if (232 == *ce)
	    mEndian = NDR;
	else
	    mEndian = XDR;
	delete[]chkEndian;
}

int QgsGrassProvider::endian()
{
	return mEndian;
}

QgsRect *QgsGrassProvider::extent()
{
    BOUND_BOX box;
    Vect_get_map_box ( mMap, &box );

    return new QgsRect( box.W, box.S, box.E, box.N);
}

/** 
* Return the feature type
*/
int QgsGrassProvider::geometryType(){
    return mQgisType;
}
/** 
* Return the feature type
*/
long QgsGrassProvider::featureCount(){
    return mNumberFeatures;
}

/**
* Return the number of fields
*/
int QgsGrassProvider::fieldCount(){
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::fieldCount() return:" << mLayers[mLayerId].fields.size() << std::endl;
    #endif
    return mLayers[mLayerId].fields.size();
}

/**
* Return fields
*/
std::vector<QgsField>& QgsGrassProvider::fields(){
      return mLayers[mLayerId].fields;

}

void QgsGrassProvider::reset(){
    resetSelection(1);
    mNextCidx = 0;
}

QString QgsGrassProvider::minValue(int position)
{
    if ( position >= fieldCount() ) {
	std::cerr << "Warning: access requested to invalid position in QgsGrassProvider::minValue()" 
	          << std::endl;
    }
    return QString::number( mLayers[mLayerId].minmax[position][0], 'f', 2 );
}

 
QString QgsGrassProvider::maxValue(int position)
{
    if ( position >= fieldCount() ) {
	std::cerr << "Warning: access requested to invalid position in QgsGrassProvider::maxValue()" 
	          << std::endl;
    }
    return QString::number( mLayers[mLayerId].minmax[position][1], 'f', 2 );
}

bool QgsGrassProvider::isValid(){
    #ifdef QGISDEBUG
    QString validString = mValid?"true":"false";
    std::cerr << "QgsGrassProvider::isValid() returned: " << validString << std::endl;
    #endif
    return mValid;
}

bool QgsGrassProvider::addFeature(QgsFeature* f)
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::addFeature()" << std::endl;
    #endif
    return false;
}

bool QgsGrassProvider::deleteFeature(int id)
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::deleteFeature()" << std::endl;
    #endif
    return false;
}

// ------------------------------------------------------------------------------------------------------
// Compare categories in GATT
static int cmpAtt ( const void *a, const void *b ) {
    GATT *p1 = (GATT *) a;
    GATT *p2 = (GATT *) b;
    return (p1->cat - p2->cat);
}

/* returns layerId or -1 on error */
int QgsGrassProvider::openLayer(QString gisdbase, QString location, QString mapset, QString mapName, int field)
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::openLayer()" << std::endl;
    std::cerr << "gisdbase: " << gisdbase << std::endl;
    std::cerr << "location: " << location << std::endl;
    std::cerr << "mapset: "   << mapset << std::endl;
    std::cerr << "mapName: "  << mapName << std::endl;
    std::cerr << "field: "    << field << std::endl;
    #endif

    // Check if this layer is already opened

    for ( int i = 0; i <  mLayers.size(); i++) {
	if ( !(mLayers[i].valid) ) continue;

	GMAP *mp = &(mMaps[mLayers[i].mapId]);

	if ( mp->gisdbase == gisdbase && mp->location == location && 
	     mp->mapset == mapset && mp->mapName == mapName && mLayers[i].field == field )
	{
	    // the layer already exists, return layer id
	    #ifdef QGISDEBUG
	    std::cerr << "The layer is already opened with ID = " << i << std::endl;
	    #endif
	    mLayers[i].nUsers++;
	    return i;
	}
    }

    // Create a new layer
    GLAYER layer;
    layer.valid = false;
    layer.field = field; 

    // Open map
    layer.mapId = openMap ( gisdbase, location, mapset, mapName );
    if ( layer.mapId < 0 ) {
	std::cerr << "Cannot open vector map" << std::endl;
	return -1;
    }
    #ifdef QGISDEBUG
    std::cerr << "layer.mapId = " << layer.mapId << std::endl;
    #endif
    layer.map = mMaps[layer.mapId].map;

    layer.attributes = 0; // because loadLayerSourcesFromMap will release old
    loadLayerSourcesFromMap ( layer );

    layer.valid = true;

    // Add new layer to layers
    mLayers.push_back(layer);
	
    #ifdef QGISDEBUG
    std::cerr << "New layer successfully opened" << layer.nAttributes << std::endl;
    #endif
        
    return mLayers.size() - 1; 
}

void QgsGrassProvider::loadLayerSourcesFromMap ( GLAYER &layer )
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::loadLayerSourcesFromMap" << std::endl;
    #endif

    // Reset and free 
    layer.fields.clear();
    if ( layer.attributes ) { 
	for ( int i = 0; i < layer.nAttributes; i ++ ) {
	    for ( int j = 0; j < layer.nColumns; j ++ ) {
		if ( layer.attributes[i].values[j] )
		    free ( layer.attributes[i].values[j] );
	    }
	    free ( layer.attributes[i].values );
	}
	free ( layer.attributes );
    }
    
    // Get field info
    layer.fieldInfo = Vect_get_field( layer.map, layer.field); // should work also with field = 0

    // Read attributes
    layer.nColumns = 0;
    layer.nAttributes = 0;
    layer.attributes = 0;
    layer.keyColumn = -1;
    if ( layer.fieldInfo == NULL ) {
        #ifdef QGISDEBUG
	std::cerr << "No field info -> no attribute table" << std::endl;
        #endif
    } else { 
        #ifdef QGISDEBUG
	std::cerr << "Field info found -> open database" << std::endl;
        #endif
	dbDriver *databaseDriver = db_start_driver_open_database ( layer.fieldInfo->driver, 
								   layer.fieldInfo->database );

	if ( databaseDriver == NULL ) {
	    std::cerr << "Cannot open database " << layer.fieldInfo->database << " by driver " 
		      << layer.fieldInfo->driver << std::endl;
	} else {
            #ifdef QGISDEBUG
	    std::cerr << "Database opened -> open select cursor" << std::endl;
            #endif
	    dbString dbstr; 
	    db_init_string (&dbstr);
	    db_set_string (&dbstr, "select * from ");
	    db_append_string (&dbstr, layer.fieldInfo->table);
	    
            #ifdef QGISDEBUG
	    std::cerr << "SQL: " << db_get_string(&dbstr) << std::endl;
            #endif
	    dbCursor databaseCursor;
	    if ( db_open_select_cursor(databaseDriver, &dbstr, &databaseCursor, DB_SCROLL) != DB_OK ){
		layer.nColumns = 0;
		db_close_database_shutdown_driver ( databaseDriver );
		QMessageBox::warning( 0, "Warning", "Cannot select attributes from table '" + 
			         QString(layer.fieldInfo->table) + "'" );
	    } else {
		int nRecords = db_get_num_rows ( &databaseCursor );
                #ifdef QGISDEBUG
		std::cerr << "Number of records: " << nRecords << std::endl;
                #endif
		
		dbTable  *databaseTable = db_get_cursor_table (&databaseCursor);
		layer.nColumns = db_get_table_number_of_columns(databaseTable);

		layer.minmax = new double[layer.nColumns][2];

		// Read columns' description 
		for (int i = 0; i < layer.nColumns; i++) {
		    layer.minmax[i][0] = DBL_MAX;
		    layer.minmax[i][1] = -DBL_MAX;

		    dbColumn *column = db_get_table_column (databaseTable, i);

		    int ctype = db_sqltype_to_Ctype ( db_get_column_sqltype(column) );
                    #ifdef QGISDEBUG
		    std::cerr << "column = " << db_get_column_name(column) 
			      << " ctype = " << ctype << std::endl;
                    #endif
		    
		    QString ctypeStr;
		    switch ( ctype ) {
			case DB_C_TYPE_INT:
			    ctypeStr = "integer";
			    break; 
			case DB_C_TYPE_DOUBLE:
			    ctypeStr = "double";
			    break; 
			case DB_C_TYPE_STRING:
			    ctypeStr = "string";
			    break; 
			case DB_C_TYPE_DATETIME:
			    ctypeStr = "datetime";
			    break; 
		    }
		    layer.fields.push_back ( QgsField( db_get_column_name(column), ctypeStr, 
		                     db_get_column_length(column), db_get_column_precision(column) ) );
		    
		    if ( G_strcasecmp ( db_get_column_name(column), layer.fieldInfo->key) == 0 ) {
			layer.keyColumn = i;
		    }
		}
    
		if ( layer.keyColumn < 0 ) {
		    layer.fields.clear();
                    layer.nColumns = 0;

		    QMessageBox::warning( 0, "Warning", "Key column '" + QString(layer.fieldInfo->key) + 
			         "' not found in the table '" + QString(layer.fieldInfo->table) + "'" );
		} else {
		    // Read attributes to the memory
		    layer.attributes = (GATT *) malloc ( nRecords * sizeof(GATT) );
		    while ( 1 ) {
			int more;
				
			if ( db_fetch (&databaseCursor, DB_NEXT, &more) != DB_OK ) {
			    std::cout << "Cannot fetch DB record" << std::endl;
			    break;
			}
			if ( !more ) break; // no more records

			// Check cat value
			dbColumn *column = db_get_table_column (databaseTable, layer.keyColumn);
			dbValue *value = db_get_column_value(column);
			layer.attributes[layer.nAttributes].cat = db_get_value_int (value);
			if ( layer.attributes[layer.nAttributes].cat < 1 ) continue; 

			layer.attributes[layer.nAttributes].values = (char **) malloc ( layer.nColumns * sizeof(char*) );

			for (int i = 0; i < layer.nColumns; i++) {
			    column = db_get_table_column (databaseTable, i);
			    int sqltype = db_get_column_sqltype(column);
			    int ctype = db_sqltype_to_Ctype ( sqltype );
			    value = db_get_column_value(column);
			    db_convert_value_to_string ( value, sqltype, &dbstr);

			    #if QGISDEBUG > 3
			    std::cout << "column: " << db_get_column_name(column) << std::endl;
			    std::cout << "value: " << db_get_string(&dbstr) << std::endl;
			    #endif

			    layer.attributes[layer.nAttributes].values[i] = strdup ( db_get_string(&dbstr) );

			    double dbl;
			    if ( ctype == DB_C_TYPE_INT ) {
				dbl = db_get_value_int ( value );
			    } else if ( ctype == DB_C_TYPE_DOUBLE ) {
				dbl = db_get_value_double ( value );
			    } else {
				dbl = 0;
			    }
			    
			    if ( dbl < layer.minmax[i][0] ) {
				layer.minmax[i][0] = dbl;
			    }
			    if ( dbl > layer.minmax[i][1] ) {
				layer.minmax[i][1] = dbl;
			    }
			}
			layer.nAttributes++;
		    }
		    // Sort attributes by category
		    qsort ( layer.attributes, layer.nAttributes, sizeof(GATT), cmpAtt );
		}
		db_close_cursor (&databaseCursor);
		db_close_database_shutdown_driver ( databaseDriver );
		db_free_string(&dbstr);

                #ifdef QGISDEBUG
		std::cerr << "fields.size = " << layer.fields.size() << std::endl;
		std::cerr << "number of attributes = " << layer.nAttributes << std::endl;
                #endif

	    }
	}
    }

    // Add cat if no attribute fields exist (otherwise qgis crashes)
    if ( layer.nColumns == 0 ) {
	layer.fields.push_back ( QgsField( "cat", "integer", 10, 0) );
	layer.minmax = new double[1][2];
	layer.minmax[0][0] = 0; 
	layer.minmax[0][1] = 0; 

	int cidx = Vect_cidx_get_field_index ( layer.map, layer.field );
	if ( cidx >= 0 ) {
	    int ncats, cat, type, id;
	    
	    ncats = Vect_cidx_get_num_cats_by_index ( layer.map, cidx );

	    if ( ncats > 0 ) {
		Vect_cidx_get_cat_by_index ( layer.map, cidx, 0, &cat, &type, &id );
	        layer.minmax[0][0] = cat; 

	        Vect_cidx_get_cat_by_index ( layer.map, cidx, ncats-1, &cat, &type, &id );
	        layer.minmax[0][1] = cat; 
	    }
	}
    }
}

void QgsGrassProvider::closeLayer( int layerId )
{
    #ifdef QGISDEBUG
    std::cerr << "Close layer " << layerId << std::endl;
    #endif

    // TODO: not tested because delete is never used for providers
    mLayers[layerId].nUsers--;

    if ( mLayers[layerId].nUsers == 0 ) { // No more users, free sources
        #ifdef QGISDEBUG
        std::cerr << "No more users -> delete layer" << std::endl;
        #endif

        mLayers[layerId].valid = false;

	// Column names/types
	mLayers[layerId].fields.resize(0);
	
	// Attributes
	for ( int i = 0; i < mLayers[layerId].nAttributes; i++ ) {
	    free ( mLayers[layerId].attributes[i].values );
	}
	free ( mLayers[layerId].attributes );
		
	delete[] mLayers[layerId].minmax;

	// Field info
	free ( mLayers[layerId].fieldInfo );

	closeMap ( mLayers[layerId].mapId );
    }
}

/* returns mapId or -1 on error */
int QgsGrassProvider::openMap(QString gisdbase, QString location, QString mapset, QString mapName)
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::openMap()" << std::endl;
    #endif

    QString tmpPath = gisdbase + "/" + location + "/" + mapset + "/" + mapName;

    // Check if this map is already opened
    for ( int i = 0; i <  mMaps.size(); i++) {
	if ( mMaps[i].path == tmpPath ) 
	{
	    // the map is already opened, return map id
            #ifdef QGISDEBUG
	    std::cerr << "The map is already opened with ID = " << i << std::endl;
            #endif
	    mMaps[i].nUsers++;
	    return i;
	}
    }

    GMAP map;
    map.gisdbase = gisdbase;
    map.location = location;
    map.mapset = mapset;
    map.mapName = mapName;
    map.path = tmpPath;
    map.nUsers = 1;
    map.version = 1;
    map.update = 0;
    map.map = (struct Map_info *) malloc ( sizeof(struct Map_info) );

    // Set GRASS location
    QgsGrass::setLocation ( gisdbase, location ); 
#ifdef QGISDEBUG
	std::cerr << "Setting  gisdbase, location: " << gisdbase << ", " << location << std::endl;
#endif

    // Find the vector
    char *ms = G_find_vector2 ( (char *) mapName.ascii(), (char *) mapset.ascii()) ;

    if ( ms == NULL) {
        std::cerr << "Cannot find GRASS vector" << std::endl;
	return -1;
    }

    // Read the time of vector dir before Vect_open_old, because it may take long time (when the vector
    // could be owerwritten)
    QFileInfo di ( gisdbase + "/" + location + "/" + mapset + "/vector/" + mapName );
    map.lastModified = di.lastModified();

    // Open vector
    QgsGrass::resetError(); // to "catch" error after Vect_open_old()
    Vect_set_open_level (2);
    Vect_open_old ( map.map, (char *) mapName.ascii(), (char *) mapset.ascii());

    if ( QgsGrass::getError() == QgsGrass::FATAL ) {
	std::cerr << "Cannot open GRASS vector: " << QgsGrass::getErrorMessage() << std::endl;
	return -1;
    }
    #ifdef QGISDEBUG
    std::cerr << "GRASS map successfully opened" << std::endl;
    #endif

    // Add new map to maps
    mMaps.push_back(map);

    return mMaps.size() - 1; // map id 
}

void QgsGrassProvider::updateMap ( int mapId )
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::updateMap() mapId = " << mapId << std::endl;
    #endif

    /* Close map */
    GMAP *map = &(mMaps[mapId]);

    map->valid = false;
    map->version++;

    QgsGrass::setLocation ( (char *) map->gisdbase.ascii(), (char *) map->location.ascii() ); 

    // TODO: Should be done better / in other place ?
    // TODO: Is it necessary for close ?
    G__setenv( "MAPSET", (char *) map->mapset.ascii() );
    
    Vect_close ( map->map );

    QFileInfo di ( map->gisdbase + "/" + map->location + "/" + map->mapset + "/vector/" + map->mapName );
    map->lastModified = di.lastModified();

    // Reopen vector
    QgsGrass::resetError(); // to "catch" error after Vect_open_old()
    Vect_set_open_level (2);
    Vect_open_old ( map->map, (char *) map->mapName.ascii(), (char *) map->mapset.ascii());

    if ( QgsGrass::getError() == QgsGrass::FATAL ) {
	std::cerr << "Cannot reopen GRASS vector: " << QgsGrass::getErrorMessage() << std::endl;

	// TODO if reopen fails, mLayers should be also updated
	return;
    }

    #ifdef QGISDEBUG
    std::cerr << "GRASS map successfully reopened for reading." << std::endl;
    #endif

    for ( int i = 0; i <  mLayers.size(); i++) {
	// if ( !(mLayers[i].valid) ) continue; // ?

	if  ( mLayers[i].mapId == mapId ) {
            loadLayerSourcesFromMap ( mLayers[i] );
	}
    }

    map->valid = true;
}

void QgsGrassProvider::closeMap( int mapId )
{
    #ifdef QGISDEBUG
    std::cerr << "Close map " << mapId << std::endl;
    #endif

    // TODO: not tested because delete is never used for providers
    mMaps[mapId].nUsers--;

    if ( mMaps[mapId].nUsers == 0 ) { // No more users, free sources
        #ifdef QGISDEBUG
        std::cerr << "No more users -> delete map" << std::endl;
        #endif

        // TODO: do this better, probably maintain QgsGrassEdit as one user
	if ( mMaps[mapId].update ) {
	    QMessageBox::warning( 0, "Warning", "The vector was currently edited, "
		                     "you can expect crash soon." );
	}

        mMaps[mapId].valid = false;
	Vect_close ( mMaps[mapId].map );
    }
}

bool QgsGrassProvider::mapOutdated( int mapId )
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::mapOutdated()" << std::endl;
    #endif

    GMAP *map = &(mMaps[mapId]);
    
    QString dp = map->gisdbase + "/" + map->location + "/" + map->mapset + "/vector/" + map->mapName;
    QFileInfo di ( dp );

    if ( map->lastModified < di.lastModified() ) {
	#ifdef QGISDEBUG
	std::cerr << "**** The map " << mapId << " was modified ****" << std::endl;
	#endif
	
	return true;
    }

    return false;
}

/** Set feature attributes */
void QgsGrassProvider::setFeatureAttributes ( int layerId, int cat, QgsFeature *feature )
{
    #if QGISDEBUG > 3
    std::cerr << "setFeatureAttributes cat = " << cat << std::endl;
    #endif
    if ( mLayers[layerId].nColumns > 0 ) {
	// find cat
	GATT key;
	key.cat = cat;
	GATT *att = (GATT *) bsearch ( &key, mLayers[layerId].attributes, mLayers[layerId].nAttributes,
		                       sizeof(GATT), cmpAtt);

	for (int i = 0; i < mLayers[layerId].nColumns; i++) {
	    if ( att != NULL ) {
		feature->addAttribute ( mLayers[layerId].fields[i].name(), att->values[i]);
	    } else { /* it may happen that attributes are missing -> set to empty string */
		feature->addAttribute ( mLayers[layerId].fields[i].name(), "");
	    }
	}
    } else { 
	QString tmp;
	tmp.sprintf("%d", cat );
	feature->addAttribute ( "cat", tmp);
    }
}

void QgsGrassProvider::setFeatureAttributes ( int layerId, int cat, QgsFeature *feature, std::list<int>& attlist)
{
#ifdef QGISDEBUG
    std::cerr << "setFeatureAttributes cat = " << cat << std::endl;
    #endif
    if ( mLayers[layerId].nColumns > 0 ) {
	// find cat
	GATT key;
	key.cat = cat;
	GATT *att = (GATT *) bsearch ( &key, mLayers[layerId].attributes, mLayers[layerId].nAttributes,
		                       sizeof(GATT), cmpAtt);

	for (std::list<int>::iterator iter=attlist.begin(); iter!=attlist.end();++iter) {
	    if ( att != NULL ) {
		feature->addAttribute ( mLayers[layerId].fields[*iter].name(), att->values[*iter]);	
	    } else { /* it may happen that attributes are missing -> set to empty string */
		feature->addAttribute ( mLayers[layerId].fields[*iter].name(), "");	
	    } 
	}
    } else { 
	QString tmp;
	tmp.sprintf("%d", cat );
	feature->addAttribute ( "cat", tmp);
    }
}

/** Get pointer to map */
struct Map_info *QgsGrassProvider::layerMap ( int layerId )
{
    return ( mMaps[mLayers[layerId].mapId].map );
}

//-----------------------------------------  Edit -------------------------------------------------------

bool QgsGrassProvider::isEditable ( void )
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::isEditable" << std::endl;
    #endif

    if ( !isValid() ) 
	return false;

    /* Check if current user is owner of mapset */
    if ( G__mapset_permissions2((char*)mGisdbase.ascii(),(char*)mLocation.ascii(),(char*)mMapset.ascii()) != 1 )
	return false;

    // TODO: check format? (cannot edit OGR layers)

    return true;
}

bool QgsGrassProvider::isEdited ( void )
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::isEdited" << std::endl;
    #endif

    GMAP *map = &(mMaps[mLayers[mLayerId].mapId]);
    return (map->update);
}

bool QgsGrassProvider::startEdit ( void )
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::startEdit" << std::endl;
    std::cerr << "  uri = " << mDataSourceUri << std::endl;
    std::cerr << "  mMaps.size() = " << mMaps.size() << std::endl;
    #endif

    if ( !isEditable() )
	return false;

    // Check number of maps (the problem may appear if static variables are not shared - runtime linker)
    if ( mMaps.size() == 0 ) {
	QMessageBox::warning( 0, "Warning", "No maps opened in mMaps, probably problem in runtime linking, " 
			      "static variables are not shared by provider and plugin." );
	return false;
    }

    /* Close map */
    GMAP *map = &(mMaps[mLayers[mLayerId].mapId]);
    map->valid = false;

    QgsGrass::setLocation ( (char *) map->gisdbase.ascii(), (char *) map->location.ascii() ); 

    // Set current mapset (mapset was previously checked by isEditable() )
    // TODO: Should be done better / in other place ?
    G__setenv( "MAPSET", (char *) map->mapset.ascii() );

    Vect_close ( map->map );

    // TODO: Catch error 
     
    int level = Vect_open_update ( map->map, (char *) map->mapName.ascii(), (char *) map->mapset.ascii() );

    if (  level < 2 ) { 
	std::cerr << "Cannot open vector for update on level 2." << std::endl;
	// TODO reopen vector for reading
	return false;
    }

    #ifdef QGISDEBUG
    std::cerr << "Vector successfully reopened for update." << std::endl;
    #endif

    map->update = true;
    map->valid = true;

    return true;
}

bool QgsGrassProvider::closeEdit ( void )
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::closeEdit" << std::endl;
    #endif

    if ( !isValid() )
	return false;

    /* Close map */
    GMAP *map = &(mMaps[mLayers[mLayerId].mapId]);
    
    if ( !(map->update) )
	return false;

    map->valid = false;
    map->version++;

    QgsGrass::setLocation ( (char *) map->gisdbase.ascii(), (char *) map->location.ascii() ); 

    // Set current mapset (mapset was previously checked by isEditable() )
    // TODO: Should be done better / in other place ?
    // TODO: Is it necessary for build/close ?
    G__setenv( "MAPSET", (char *) map->mapset.ascii() );
    
    Vect_build_partial ( map->map, GV_BUILD_NONE, NULL);
    Vect_build ( map->map, stderr );
    Vect_close ( map->map );

    QFileInfo di ( mGisdbase + "/" + mLocation + "/" + mMapset + "/vector/" + mMapName );
    map->lastModified = di.lastModified();

    // Reopen vector
    QgsGrass::resetError(); // to "catch" error after Vect_open_old()
    Vect_set_open_level (2);
    Vect_open_old ( map->map, (char *) map->mapName.ascii(), (char *) map->mapset.ascii());

    if ( QgsGrass::getError() == QgsGrass::FATAL ) {
	std::cerr << "Cannot reopen GRASS vector: " << QgsGrass::getErrorMessage() << std::endl;
	return -1;
    }

    #ifdef QGISDEBUG
    std::cerr << "GRASS map successfully reopened for reading." << std::endl;
    #endif

    // Reload sources to layers
    for ( int i = 0; i <  mLayers.size(); i++) {
	// if ( !(mLayers[i].valid) ) continue; // ?

	if  ( mLayers[i].mapId == mLayers[mLayerId].mapId ) {
            loadLayerSourcesFromMap ( mLayers[i] );
	}
    }

    map->update = false;
    map->valid = true;

    return true;
}

int QgsGrassProvider::numLines ( void )
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::numLines" << std::endl;
    #endif

    return ( Vect_get_num_lines(mMap) );
}

int QgsGrassProvider::numNodes ( void )
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::numNodes" << std::endl;
    #endif

    return ( Vect_get_num_nodes(mMap) );
}

int QgsGrassProvider::readLine ( struct line_pnts *Points, struct line_cats *Cats, int line )
{
    #if QGISDEBUG > 3
    std::cerr << "QgsGrassProvider::readLine" << std::endl;
    #endif

    if ( Points )
	Vect_reset_line ( Points );

    if ( Cats )
	Vect_reset_cats ( Cats );

    if ( !Vect_line_alive(mMap, line) ) return -1;

    return ( Vect_read_line(mMap, Points, Cats, line) );
}

bool QgsGrassProvider::nodeCoor ( int node, double *x, double *y )
{
    #if QGISDEBUG > 3
    std::cerr << "QgsGrassProvider::nodeCoor" << std::endl;
    #endif

    if ( !Vect_node_alive ( mMap, node) ) {
        *x = 0.0;
        *y = 0.0;
	return false;
    }
    
    Vect_get_node_coor ( mMap, node, x, y, NULL);
    return true;
}

bool QgsGrassProvider::lineNodes ( int line, int *node1, int *node2 )
{
    #if QGISDEBUG > 3
    std::cerr << "QgsGrassProvider::lineNodes" << std::endl;
    #endif
    
    if ( !Vect_line_alive(mMap, line) ) {
        *node1 = 0;
        *node2 = 0;
	return false;
    }
    
    Vect_get_line_nodes ( mMap, line, node1, node2 );
    return true;
}

long QgsGrassProvider::writeLine ( int type, struct line_pnts *Points, struct line_cats *Cats )
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::writeLine n_points = " << Points->n_points 
	      << " n_cats = " << Cats->n_cats << std::endl;
    #endif

    if ( !isEdited() )
	return -1;

    return ( Vect_write_line(mMap,type,Points,Cats) );
}

int QgsGrassProvider::rewriteLine ( int line, int type, struct line_pnts *Points, struct line_cats *Cats )
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::rewriteLine n_points = " << Points->n_points 
	      << " n_cats = " << Cats->n_cats << std::endl;
    #endif

    if ( !isEdited() )
	return -1;

    return ( Vect_rewrite_line(mMap,line,type,Points,Cats) );
}


int QgsGrassProvider::deleteLine ( int line )
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::deleteLine" << std::endl;
    #endif

    if ( !isEdited() )
	return -1;

    return ( Vect_delete_line(mMap,line) );
}

int QgsGrassProvider::findLine ( double x, double y, int type, double threshold )
{
    #if QGISDEBUG > 3
    std::cerr << "QgsGrassProvider::findLine" << std::endl;
    #endif

    return ( Vect_find_line(mMap,x,y,0,type,threshold,0,0) );
}

int QgsGrassProvider::findNode ( double x, double y, double threshold )
{
    return ( Vect_find_node ( mMap, x, y, 0, threshold, 0 ) );
}

bool QgsGrassProvider::lineAreas ( int line, int *left, int *right )
{
    #if QGISDEBUG > 3
    std::cerr << "QgsGrassProvider::lineAreas" << std::endl;
    #endif
    
    if ( !Vect_line_alive(mMap, line) ) {
        *left = 0;
        *right = 0;
	return false;
    }
    
    Vect_get_line_areas ( mMap, line, left, right );
    return true;
}

int QgsGrassProvider::centroidArea ( int centroid )
{
    #if QGISDEBUG > 3
    std::cerr << "QgsGrassProvider::centroidArea" << std::endl;
    #endif
    
    if ( !Vect_line_alive(mMap, centroid) ) {
	return 0;
    }
    
    return ( Vect_get_centroid_area(mMap,centroid) );
}

int QgsGrassProvider::nodeNLines ( int node )
{
    #if QGISDEBUG > 3
    std::cerr << "QgsGrassProvider::nodeNLines" << std::endl;
    #endif
    
    if ( !Vect_node_alive(mMap, node) ) {
	return 0;
    }
    
    return ( Vect_get_node_n_lines(mMap,node) );
}

int QgsGrassProvider::nodeLine ( int node, int idx )
{
    #if QGISDEBUG > 3
    std::cerr << "QgsGrassProvider::nodeLine" << std::endl;
    #endif
    
    if ( !Vect_node_alive(mMap, node) ) {
	return 0;
    }

    return ( Vect_get_node_line(mMap,node,idx) );
}

int QgsGrassProvider::lineAlive ( int line )
{
    #if QGISDEBUG > 3
    std::cerr << "QgsGrassProvider::lineAlive" << std::endl;
    #endif
    
    return ( Vect_line_alive(mMap, line) ) ;
}

int QgsGrassProvider::nodeAlive ( int node )
{
    #if QGISDEBUG > 3
    std::cerr << "QgsGrassProvider::nodeAlive" << std::endl;
    #endif
    
    return ( Vect_node_alive(mMap, node) ) ;
}

int QgsGrassProvider::numUpdatedLines ( void )
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::numUpdatedLines" << std::endl;
    std::cerr << "  numUpdatedLines = " << Vect_get_num_updated_lines(mMap) << std::endl;
    #endif
    
    return ( Vect_get_num_updated_lines(mMap) ) ;
}

int QgsGrassProvider::numUpdatedNodes ( void )
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::numUpdatedNodes" << std::endl;
    std::cerr << "  numUpdatedNodes = " << Vect_get_num_updated_nodes(mMap) << std::endl;
    #endif
    
    return ( Vect_get_num_updated_nodes(mMap) ) ;
}

int QgsGrassProvider::updatedLine ( int idx )
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::updatedLine idx = " << idx << std::endl;
    std::cerr << "  updatedLine = " << Vect_get_updated_line( mMap, idx ) << std::endl;
    #endif
    
    return ( Vect_get_updated_line( mMap, idx ) ) ;
}

int QgsGrassProvider::updatedNode ( int idx )
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassProvider::updatedNode idx = " << idx << std::endl;
    std::cerr << "  updatedNode = " << Vect_get_updated_node( mMap, idx ) << std::endl;
    #endif
    
    return ( Vect_get_updated_node( mMap, idx ) ) ;
}

int QgsGrassProvider::cidxGetNumFields( void ) 
{
    return ( Vect_cidx_get_num_fields(mMap) );
}

int QgsGrassProvider::cidxGetFieldNumber( int idx ) 
{
    return ( Vect_cidx_get_field_number(mMap, idx) );
}

int QgsGrassProvider::cidxGetMaxCat( int idx ) 
{
    int ncats = Vect_cidx_get_num_cats_by_index ( mMap, idx);

    int cat, type, id;
    Vect_cidx_get_cat_by_index ( mMap, idx, ncats-1, &cat, &type, &id );
    
    return ( cat );
}
    
