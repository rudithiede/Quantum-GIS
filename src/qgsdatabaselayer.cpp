#include <qstring.h>
#include <qpainter.h>
#include "qgsrect.h"
#include <libpq++.h>
#include <qmessagebox.h>
#include "qgsdatabaselayer.h"

QgsDatabaseLayer::QgsDatabaseLayer(const char *conninfo, QString table) :
  QgsMapLayer(QgsMapLayer::DATABASE, table),tableName(table){
  // create the database layer and get the needed information
  // about it from the database
  dataSource = conninfo;
  PgDatabase *pd = new PgDatabase(conninfo);
  if(pd->Status()==CONNECTION_OK){
    // get the geometry column
    QString sql = "select f_geometry_column from geometry_columns where f_table_name='"
      + tableName + "'";
    qWarning("Getting geometry column: " + sql);
    int result = pd->ExecTuplesOk((const char *) sql);
    if(result){
      geometryColumn =  pd->GetValue(0,"f_geometry_column");
      // set the extent of the layer
      QString sql =  "select xmax(extent(" + geometryColumn + ")) as xmax,"
	"xmin(extent(" + geometryColumn + ")) as xmin,"
	"ymax(extent(" + geometryColumn + ")) as ymax,"
	"ymin(extent(" + geometryColumn + ")) as ymin"
	" from " + tableName;
      qWarning("Getting extents: " + sql);
      result = pd->ExecTuplesOk((const char *)sql);
     			  
      if(result){
	QString vRight = pd->GetValue(0,"right");
	layerExtent.setXmax(QString(pd->GetValue(0,"xmax")).toDouble());
	layerExtent.setXmin(QString(pd->GetValue(0,"xmin")).toDouble());
	layerExtent.setYmax(QString(pd->GetValue(0,"ymax")).toDouble());
	layerExtent.setYmin(QString(pd->GetValue(0,"ymin")).toDouble());
	QString xMsg;
	QTextOStream(&xMsg).precision(18);
	QTextOStream(&xMsg).width(18);
	QTextOStream(&xMsg) << "Set extents to: " << layerExtent.xMin() << ", " <<
	  layerExtent.yMin() << " " << layerExtent.xMax() << ", " << layerExtent.yMax();
	qWarning(xMsg);
       
      }else{
	QString msg = "Unable to access " + tableName;
	//QMessageBox::warning(this,"Connection Problem",msg); 
	valid = false;
      }
    }else{
      QString msg =  "Unable to get geometry information for " + tableName;
      //QMessageBox::warning(this,"Connection Problem",msg); 
      valid = false;
    }
   
    delete pd;
  }
}
QgsDatabaseLayer::~QgsDatabaseLayer(){
}
QgsRect QgsDatabaseLayer::calculateExtent(){
  return layerExtent;
}
void QgsDatabaseLayer::draw(QPainter *p, QgsRect *viewExtent, int yTransform){
  // painter is active (begin has been called
  /* Steps to draw the layer
     1. get the features in the view extent by SQL query
     2. read WKB for a feature
     3. transform
     4. draw
  */
  PgCursor pgs(dataSource, "drawCursor");
  QString sql = "select asbinary(" + geometryColumn + ",'" + endianString();
  sql +=   "') as features from " + tableName;
  sql += " where " + geometryColumn;
  sql +=  " && GeometryFromText('BOX3D(" + viewExtent->stringRep();
  sql += ")'::box3d,-1)";
  qWarning(sql);
  pgs.Declare((const char *)sql, true);
  int res = pgs.Fetch();
  cout << "Number of matching records: " << pgs.Tuples() << endl;
  for (int idx = 0; idx < pgs.Tuples (); idx++)
    {
      // allocate memory for the item
      char *feature = new char[pgs.GetLength (idx, 0) + 1];
      memset (feature, '\0', pgs.GetLength (idx, 0) + 1);
      memcpy (feature, pgs.GetValue (idx, 0), pgs.GetLength (idx, 0));
      wkbType = (int)feature[1];
      cout << "Feature type: " << wkbType << endl;
      // read each feature based on its type
      double *x;
      double *y;
      int *nPoints;
      int numPoints;
      int numLineStrings;
      int idx,jdx;
      char *ptr;
      char lsb;
      int ttype;
      switch(wkbType){
      case WKBPoint:
	x = (double *) (feature + 5);
	y = (double *) (feature + 5 + sizeof (double));
	  p->drawRect ((int) *x, yTransform - (int) *y, 15000,
			  15000);
	break;
      case WKBLineString:
	// get number of points in the line
	numPoints = (int)(feature + 1 + sizeof(int));
	ptr = feature + 1 + 2 * sizeof(int);
	for(idx = 0; idx < numPoints; idx++){
	  x = (double *) ptr;
	  ptr += sizeof(double);
	  y = (double *) ptr;
	  ptr += sizeof(double);
	  if(idx == 0)
	    p->moveTo((int) *x, yTransform - (int) *y);
	  else
	    p->lineTo((int) *x, yTransform - (int) *y);
	    
	}
	break;
      case WKBMultiLineString:
	numLineStrings =  (int)(feature[5]);
	ptr = feature+9;
	for(jdx = 0; jdx < numLineStrings; jdx++){
	  // each of these is a wbklinestring so must handle as such
	  lsb = *ptr;
	  ptr += 5; // skip type since we know its 2
	  nPoints = (int *)ptr;
	  ptr += sizeof(int);
	for(idx = 0; idx < *nPoints; idx++){
	  x = (double *) ptr;
	  ptr += sizeof(double);
	  y = (double *) ptr;
	  ptr += sizeof(double);
	  if(idx == 0)
	    p->moveTo((int) *x, yTransform - (int) *y);
	  else
	    p->lineTo((int) *x, yTransform - (int) *y);
	    
	}
	}
	break;
      case WKBPolygon:
	break;
      }
 
    }



}
int QgsDatabaseLayer::endian(){
  char *chkEndian = new char[4];
  memset (chkEndian, '\0', 4);
  chkEndian[0] = 0xE8;
  int *ce = (int *) chkEndian;
  if(232 == *ce)
    return NDR;
  else
    return XDR;
}
QString QgsDatabaseLayer::endianString(){
  char *chkEndian = new char[4];
  memset (chkEndian, '\0', 4);
  chkEndian[0] = 0xE8;
  int *ce = (int *) chkEndian;
  if(232 == *ce)
    return QString("NDR");
  else
    return QString("XDR");
}
