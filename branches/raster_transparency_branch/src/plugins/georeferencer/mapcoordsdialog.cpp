#include <QValidator>
#include <mapcoordsdialog.h>


MapCoordsDialog::MapCoordsDialog() {

}


MapCoordsDialog::MapCoordsDialog(const QgsPoint& pixelCoords,
				 QWidget* parent, Qt::WFlags fl) 
  : QDialog(parent, fl) {
  setupUi(this);
  mPixelCoords = pixelCoords;
  leXCoord->setValidator(new QDoubleValidator(this));
  leYCoord->setValidator(new QDoubleValidator(this));
}


MapCoordsDialog::~MapCoordsDialog() {

}


void MapCoordsDialog::on_buttonOk_clicked() {
  QgsPoint mapCoords(leXCoord->text().toDouble(), leYCoord->text().toDouble());
  emit pointAdded(mPixelCoords, mapCoords);
  accept();
}

void MapCoordsDialog::on_buttonCancel_clicked()
{
  reject();
}

void MapCoordsDialog::setXY(QgsPoint & xy)
{
 leXCoord->insert(QString::number(xy.x(),'f',7));
 leYCoord->insert(QString::number(xy.y(),'f',7));
}
