/***************************************************************************
  cdpwizard.cpp  -  description
  -------------------
begin                : Wed May 14 2003
copyright            : (C) 2003 by Tim Sutton
email                : t.sutton@reading.ac.uk
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#include "cdpwizard.h"
#include <qcombobox.h>
#include <qlistbox.h>
#include <qlineedit.h>
#include <qspinbox.h>
#include <string.h>
#include <qlabel.h>
#include <qlabel.h>
#include <qsettings.h>


//#define QGISDEBUG true

CDPWizard::CDPWizard( QWidget* parent , const char* name , bool modal , WFlags fl  )
        : CDPWizardBase( parent, name, modal, fl )
{
    initialise();
}

CDPWizard::CDPWizard()
{
    initialise();
}

CDPWizard::~CDPWizard()
{
    delete climateDataProcessor;
}

bool CDPWizard::initialise()
{
    //
    // Populate the file types combo
    //
    cboFileType->insertItem(tr("CRES African climate data"));
    cboFileType->insertItem(tr("ESRI & ASCII raster"));
    cboFileType->insertItem(tr("Hadley Centre HadCM3 SRES Scenario"));
    cboFileType->insertItem(tr("Hadley Centre HadCM3 IS92a Scenario"));
    cboFileType->insertItem(tr("IPCC Observed Climatology"));
    cboFileType->insertItem(tr("University of Reading Palaeoclimate data"));
    cboFileType->insertItem(tr("Max Planck Institute fur Meteorologie (MPIfM) ECHAM4 data"));
    cboFileType->insertItem(tr("CSIRO-Mk2 Model data"));
    cboFileType->insertItem(tr("National Center for Atmospheric Research (NCAR) NCAR-CSM and NCAR-PCM data"));
    cboFileType->insertItem(tr("Geophysical Fluid Dynamics Laboratory (GFDL) R30 Model data"));
    cboFileType->insertItem(tr("Canadian Center for Climate Modelling and Analysis (CCCma) CGCM2 Model data"));
    cboFileType->insertItem(tr("CCSR/NIES AGCM model data and CCSR OGCM model data"));

    //
    // set up the lstVariablesToCalc combo box
    //
#ifdef QGISDEBUG

    std::cout << "Adding items into the lstVariablesToCalc list box" << std::endl;
#endif

    lstVariablesToCalc->insertItem(tr("Annual mean diurnal temperature range"));
    lstVariablesToCalc->insertItem(tr("Annual mean number of frost days"));
    lstVariablesToCalc->insertItem(tr("Annual mean total incident solar radiation"));
    lstVariablesToCalc->insertItem(tr("Annual temperature range"));
    lstVariablesToCalc->insertItem(tr("Highest temperature in warmest month"));
    lstVariablesToCalc->insertItem(tr("Lowest temperature in coolest month"));
    lstVariablesToCalc->insertItem(tr("Mean daily precipitation"));
    lstVariablesToCalc->insertItem(tr("Mean daily precipitation in coolest month"));
    lstVariablesToCalc->insertItem(tr("Mean daily precipitation in coolest quarter"));
    lstVariablesToCalc->insertItem(tr("Mean daily precipitation in driest month"));
    lstVariablesToCalc->insertItem(tr("Mean daily precipitation in driest quarter"));
    lstVariablesToCalc->insertItem(tr("Mean daily precipitation in warmest month"));
    lstVariablesToCalc->insertItem(tr("Mean daily precipitation in warmest quarter"));
    lstVariablesToCalc->insertItem(tr("Mean daily precipitation in wettest month"));
    lstVariablesToCalc->insertItem(tr("Mean daily precipitation in wettest quarter"));
    lstVariablesToCalc->insertItem(tr("Mean diurnal temperature range in coolest month"));
    lstVariablesToCalc->insertItem(tr("Mean diurnal temperature range in warmest month"));
    lstVariablesToCalc->insertItem(tr("Mean precipitation in frost free months"));
    lstVariablesToCalc->insertItem(tr("Mean temperature"));
    lstVariablesToCalc->insertItem(tr("Mean temperature in coolest month"));
    lstVariablesToCalc->insertItem(tr("Mean temperature in coolest quarter"));
    lstVariablesToCalc->insertItem(tr("Mean temperature in frost free months"));
    lstVariablesToCalc->insertItem(tr("Mean temperature in warmest month"));
    lstVariablesToCalc->insertItem(tr("Mean temperature in warmest quarter"));
    lstVariablesToCalc->insertItem(tr("Mean wind speed"));
    lstVariablesToCalc->insertItem(tr("Number of months with minimum temperature above freezing"));
    lstVariablesToCalc->insertItem(tr("Radiation in coolest month"));
    lstVariablesToCalc->insertItem(tr("Radiation in coolest quarter"));
    lstVariablesToCalc->insertItem(tr("Radiation in driest month"));
    lstVariablesToCalc->insertItem(tr("Radiation in driest quarter"));
    lstVariablesToCalc->insertItem(tr("Radiation in warmest month"));
    lstVariablesToCalc->insertItem(tr("Radiation in warmest quarter"));
    lstVariablesToCalc->insertItem(tr("Radiation in wettest month"));
    lstVariablesToCalc->insertItem(tr("Radiation in wettest quarter"));
    lstVariablesToCalc->insertItem(tr("Standard deviation of mean precipitation"));
    lstVariablesToCalc->insertItem(tr("Standard deviation of mean temperature"));

    //
    //set up the output formats combo
    //
#ifdef QGISDEBUG

    std::cout << "Adding items into the output filetype combo box" << endl;
#endif

    cboOutputFormat->insertItem(tr("CSM for Matlab"));
    cboOutputFormat->insertItem(tr("CSM for Octave"));
    cboOutputFormat->insertItem(tr("Desktop GARP"));
    cboOutputFormat->insertItem(tr("ESRI ASCII Grid"));
    cboOutputFormat->insertItem(tr("Plain matrix with no header"));

    //
    // Create a climate data processor instance - this is the thing that does all
    // the hard work!
    //
    climateDataProcessor = new ClimateDataProcessor();

    //Load default settings
    loadDefaults();

    //presume all went ok
    return true;
}


void CDPWizard::saveDefaults()
{
    QSettings myQSettings;

    //Page 2
    myQSettings.writeEntry("/qgis/cdpwizard/meanTemp",leMeanTemp->text());
    myQSettings.writeEntry("/qgis/cdpwizard/minTemp",leMinTemp->text());
    myQSettings.writeEntry("/qgis/cdpwizard/maxTemp",leMaxTemp->text());
    myQSettings.writeEntry("/qgis/cdpwizard/diurnalTemp",leDiurnalTemp->text());
    myQSettings.writeEntry("/qgis/cdpwizard/meanPrecip",leMeanPrecipitation->text());
    myQSettings.writeEntry("/qgis/cdpwizard/frostDays",leFrostDays->text());
    myQSettings.writeEntry("/qgis/cdpwizard/totalSolarRadiation",leTotalSolarRadiation->text());
    myQSettings.writeEntry("/qgis/cdpwizard/windSpeed",leWindSpeed->text());
    myQSettings.writeEntry("/qgis/cdpwizard/fileType",cboFileType->currentItem());

    //Page 3
    myQSettings.writeEntry("/qgis/cdpwizard/firstYearInFile",spinFirstYearInFile->value());
    myQSettings.writeEntry("/qgis/cdpwizard/firstYearToCalc",spinFirstYearToCalc->value());
    myQSettings.writeEntry("/qgis/cdpwizard/lastYearToCalc",spinLastYearToCalc->value());

    //Page 4
    myQSettings.writeEntry("/qgis/cdpwizard/outputPath",leOutputPath->text());
    myQSettings.writeEntry("/qgis/cdpwizard/outputFormat",cboOutputFormat->currentItem());

}

void CDPWizard::loadDefaults()
{
    QSettings myQSettings;
    leMeanTemp->setText(myQSettings.readEntry("/qgis/cdpwizard/meanTemp"));
    leMinTemp->setText(myQSettings.readEntry("/qgis/cdpwizard/minTemp"));
    leMaxTemp->setText(myQSettings.readEntry("/qgis/cdpwizard/maxTemp"));
    leDiurnalTemp->setText(myQSettings.readEntry("/qgis/cdpwizard/diurnalTemp"));
    leMeanPrecipitation->setText(myQSettings.readEntry("/qgis/cdpwizard/meanPrecip"));
    leFrostDays->setText(myQSettings.readEntry("/qgis/cdpwizard/frostDays"));
    leTotalSolarRadiation->setText(myQSettings.readEntry("/qgis/cdpwizard/totalSolarRadiation"));
    leWindSpeed->setText(myQSettings.readEntry("/qgis/cdpwizard/windSpeed"));
    cboFileType->setCurrentItem(myQSettings.readNumEntry("/qgis/cdpwizard/fileType"));

    spinFirstYearInFile->setValue(myQSettings.readNumEntry("/qgis/cdpwizard/firstYearInFile"));
    spinFirstYearToCalc->setValue(myQSettings.readNumEntry("/qgis/cdpwizard/firstYearToCalc"));
    spinLastYearToCalc->setValue(myQSettings.readNumEntry("/qgis/cdpwizard/lastYearToCalc"));

    leOutputPath->setText(myQSettings.readEntry("/qgis/cdpwizard/outputPath"));
    cboOutputFormat->setCurrentItem(myQSettings.readNumEntry("/qgis/cdpwizard/outputFormat"));
}


/** This method overrides the virtual CDPWizardBase method of the same name. */
void CDPWizard::cboFileType_activated( const QString &myQString )
{
#ifdef QGISDEBUG
    std::cout << "cboFileType text changed" << std::endl;
#endif

    if (myQString==tr("CRES African climate data") || myQString==tr("University of Reading Palaeoclimate data"))
    {
        //show the user some instructions about how the files must be on disk
        lblFileSeriesNote->show();
        //set the label on the summary form
        lblFileSeriesSummary->setText(tr("<p align=\"right\">And <font color=\"red\"><b>are</b></font> in a file series</p>"));
    }
    else
    {
        //show the user some instructions about how the files must be on disk
        lblFileSeriesNote->hide();
        //set the label on the summary form
        lblFileSeriesSummary->setText(tr("<p align=\"right\">And <font color=\"red\"><b>are not</b></font> in a file series</p>"));
    }

}

/** This is the page selected event which I am reimplementing to do some housekeeping
 *    between wizard pages.
 *    This routine is a slot that runs each time next is pressed to update the summary page */
void CDPWizard::formSelected(const QString  &thePageNameQString)
{
    QString myQString;
    QLineEdit *myLineEdit;
    if (thePageNameQString==tr("File type and variables")) //we do this after leaving the file selection page
    {
#ifdef QGISDEBUG
        std::cout << "Leaving file selection page" << std::endl;
#endif

        climateDataProcessor->setMeanTempFileName(leMeanTemp->text());
        climateDataProcessor->setMinTempFileName(leMinTemp->text());
        climateDataProcessor->setMaxTempFileName(leMaxTemp->text());
        climateDataProcessor->setDiurnalTempFileName(leDiurnalTemp->text());
        climateDataProcessor->setMeanPrecipFileName(leMeanPrecipitation->text());
        climateDataProcessor->setFrostDaysFileName(leFrostDays->text());
        climateDataProcessor->setTotalSolarRadFileName(leTotalSolarRadiation->text());
        climateDataProcessor->setWindSpeedFileName(leWindSpeed->text());

        /////////////////////////////////////////////////////////////////////
        //
        // OK now we need to update the list of available calculations that
        //                       can be carried out.
        //
        /////////////////////////////////////////////////////////////////////
        //
        // get the input file type
        //
        climateDataProcessor->setInputFileType(cboFileType->currentText().latin1());
        //Should not need to have the next line here - it slows everythinf down!
        //climateDataProcessor->makeFileGroups(0);
#ifdef QGISDEBUG

        std::cout << "Getting available calculations list" << std::endl;
#endif

        climateDataProcessor->makeAvailableCalculationsMap();
        // and then update the list box

        //List the calculations in  availableCalculationsMap  using an iterator
        QMap<QString, bool> myAvailableCalculationsMap = climateDataProcessor->getAvailableCalculationsMap();
        QMap<QString, bool>::const_iterator myIter;
#ifdef QGISDEBUG

        std::cout << myAvailableCalculationsMap.size() << " available calculations in list which are:" << std::endl;
        std::cout << climateDataProcessor->getDescription() << std::endl;
#endif
        //clear the current entries from the box
        lstVariablesToCalc->clear();
        for (myIter=myAvailableCalculationsMap.begin(); myIter != myAvailableCalculationsMap.end(); myIter++)
        {
            if (myIter.data())
            {
#ifdef QGISDEBUG
                std::cout << myIter.key() << QString(": true\n");
#endif

                //need to add some logic here to select the inserted item
                lstVariablesToCalc->insertItem(myIter.key());
            }
            else
            {
#ifdef QGISDEBUG
                std::cout << myIter->first <<  QString(": false\n");
#endif

                //need to add some logic here to select the inserted item
                lstVariablesToCalc->insertItem(myIter.key());
            }
        }


    } //end of test for page 3

    if (thePageNameQString==tr("Summary of processing to be performed")) //we do this when  we arrive at the summary of variables to be calculated
    {
        //update the summary of vars to calculate
        txtVariableSummary->clear();
        for ( unsigned int i = 0; i < lstVariablesToCalc->count(); i++ )
        {
            QListBoxItem *item = lstVariablesToCalc->item( i );
            // if the item is selected...
            if ( item->isSelected() )
            {
                // increment the count of selected items
                txtVariableSummary->append(item->text());
            }
        }

        //update the start and end date summary boxes
        leStartYearSummary->setText(QString::number(spinFirstYearToCalc->value()));
        leEndYearSummary->setText(QString::number(spinLastYearToCalc->value()));

        //update the output file format summary box
        leInputFormatSummary->setText(cboFileType->currentText());

        //update the file output path box
        leOutputPathSummary->setText(leOutputPath->text());

        txtInputFileSummary->clear();
        txtInputFileSummary->append(leMeanTemp->text());
        txtInputFileSummary->append(leMinTemp->text());
        txtInputFileSummary->append(leMaxTemp->text());
        txtInputFileSummary->append(leDiurnalTemp->text());
        txtInputFileSummary->append(leMeanPrecipitation->text());
        txtInputFileSummary->append(leMeanPrecipitation->text());
        txtInputFileSummary->append(leFrostDays->text());
        txtInputFileSummary->append(leTotalSolarRadiation->text());
    } //end of test for page 5

    if (thePageNameQString==tr("Progress")) //we do this when we start the calculation
    {
        int myFirstYearInFileInt, myJobStartYearInt, myJobEndYearInt;
        QString myInputFileTypeString, myOutputFileTypeString, myOutputPathString;
        QString myQString;
        /////////////////////////////////////////////////////////////
        //                                                         //
        // First we test the basic form of climate data processor  //
        // where no parameters are passed with the constructor and //
        // each property is set individually.                      //
        //                                                         //
        /////////////////////////////////////////////////////////////

        // get the first year in file value
        climateDataProcessor->setFileStartYearInt(spinFirstYearInFile->value());

        // get the first year in file to be processed in this job
        climateDataProcessor->setJobStartYearInt(spinFirstYearToCalc->value());

        // get the last year in file to be processed in this job
        climateDataProcessor->setJobEndYearInt(spinLastYearToCalc->value());

        // get the ouput file path
        climateDataProcessor->setOutputFilePathString(leOutputPath->text());

        // get the input file type
        climateDataProcessor->setInputFileType(cboFileType->currentText());

        // get the ouput file type
        climateDataProcessor->setOutputFileType(cboOutputFormat->currentText());

        //
        // find out if datafiles are in series (discrete files for each month)
        // We are using the isVisible property for the label, but we cant guarantee
        // that the wizard page on which the label occurs will be visible so we need
        // to use the isVisibleTo(parent) property, with a reference to the wzard page as parent
        //
        QWidget *  myPageWidget = page(1);
#ifdef QGISDEBUG

        std::cout << "\nFile in series label visible? "<<   lblFileSeriesNote->isVisible() << std::endl;
#endif

        if (lblFileSeriesNote->isVisibleTo(myPageWidget))
        {
#ifdef QGISDEBUG
            std::cout << "Setting files in series flag to true" << std::endl;
#endif

            climateDataProcessor->setFilesInSeriesFlag(true);
        }
        else
        {
#ifdef QGISDEBUG
            std::cout << "Setting files in series flag to false" << std::endl;
#endif

            climateDataProcessor->setFilesInSeriesFlag(false);
        }


        //setup the climate data processor's filereaders
        climateDataProcessor->makeFileGroups (1);    //hardcoding year 1 for now

        //add each selected user calculation to the user calculation map
        // Go through all items of the first ListBox
        for ( unsigned int i = 0; i < lstVariablesToCalc->count(); i++ )
        {
            QListBoxItem *myQListBoxItem = lstVariablesToCalc->item( i );
            // if the item is selected...
            if ( myQListBoxItem->isSelected() )
            {
                climateDataProcessor->addUserCalculation(myQListBoxItem->text().latin1() );
            }
        }

        //get a summary of the climate dataprocessor class now
#ifdef QGISDEBUG
        std::cout << climateDataProcessor->getDescription() << endl;
#endif
        //
        //now we let the climatedataprocessor run!
        //
        climateDataProcessor->run();
        setFinishEnabled( step_6, TRUE );

    }
}               //end of formSelected

void CDPWizard::accept()
{

    //LOGIC REQUIRED TO CHECK THE USER IS ON THE LAST PAGE
    //Save default settings
    saveDefaults();

}
