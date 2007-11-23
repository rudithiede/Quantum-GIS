; Script generated by the HM NIS Edit Script Wizard.

; HM NIS Edit Wizard helper defines
!define PRODUCT_NAME "Quantum GIS"
!define PRODUCT_VERSION_NUMBER "0.9.0-editing"
!define PRODUCT_VERSION_NAME "Ganymede"
!define PRODUCT_VERSION "${PRODUCT_VERSION_NUMBER} ${PRODUCT_VERSION_NAME}"
!define PRODUCT_PUBLISHER "qgis.org"
!define PRODUCT_WEB_SITE "http://qgis.org"
!define PRODUCT_DIR_REGKEY "Software\Microsoft\Windows\CurrentVersion\App Paths\qgis.exe"
!define PRODUCT_UNINST_KEY "Software\Microsoft\Windows\CurrentVersion\Uninstall\${PRODUCT_NAME}"
!define PRODUCT_UNINST_ROOT_KEY "HKLM"
!define PRODUCT_STARTMENU_REGVAL "NSIS:StartMenuDir"

SetCompressor zlib

; MUI 1.67 compatible ------
!include "MUI.nsh"
; Added by Tim for setting env vars (see this file on disk)
!include WriteEnvStr.nsh
;Added by Tim for a macro that will recursively delete the files in the install dir
!include RecursiveDelete.nsh
;Added by Tim to support unzipping downloaded sample data automatically
!include ZipDLL.nsh
;Added by what_nick to support python
!include python.nsh

; MUI Settings
!define MUI_ABORTWARNING
!define MUI_ICON "qgis64x64.ico"
!define MUI_UNICON "qgis64x64.ico"
; Added by Tim for side image
!define MUI_WELCOMEFINISHPAGE_BITMAP "sidebar.bmp"
; Welcome page
!insertmacro MUI_PAGE_WELCOME
; License page
!define MUI_LICENSEPAGE_RADIOBUTTONS
!insertmacro MUI_PAGE_LICENSE "LICENSE.txt"
; Components page
!insertmacro MUI_PAGE_COMPONENTS
; Directory page
!insertmacro MUI_PAGE_DIRECTORY
; Start menu page
var ICONS_GROUP
!define MUI_STARTMENUPAGE_NODISABLE
!define MUI_STARTMENUPAGE_DEFAULTFOLDER "Quantum GIS"
!define MUI_STARTMENUPAGE_REGISTRY_ROOT "${PRODUCT_UNINST_ROOT_KEY}"
!define MUI_STARTMENUPAGE_REGISTRY_KEY "${PRODUCT_UNINST_KEY}"
!define MUI_STARTMENUPAGE_REGISTRY_VALUENAME "${PRODUCT_STARTMENU_REGVAL}"
!insertmacro MUI_PAGE_STARTMENU Application $ICONS_GROUP
; Instfiles page
!insertmacro MUI_PAGE_INSTFILES
; Finish page
!define MUI_FINISHPAGE_RUN "$INSTDIR\qgis.exe"
!insertmacro MUI_PAGE_FINISH

; Uninstaller pages
!insertmacro MUI_UNPAGE_INSTFILES

; Language files
!insertmacro MUI_LANGUAGE "English"
!insertmacro MUI_LANGUAGE "French" 
!insertmacro MUI_LANGUAGE "German" 
!insertmacro MUI_LANGUAGE "SimpChinese" 
!insertmacro MUI_LANGUAGE "Japanese" 
!insertmacro MUI_LANGUAGE "Italian" 
!insertmacro MUI_LANGUAGE "Swedish" 
!insertmacro MUI_LANGUAGE "Russian" 
!insertmacro MUI_LANGUAGE "Portuguese" 
!insertmacro MUI_LANGUAGE "PortugueseBR" 
!insertmacro MUI_LANGUAGE "Polish" 
!insertmacro MUI_LANGUAGE "Czech" 
!insertmacro MUI_LANGUAGE "Slovak" 
!insertmacro MUI_LANGUAGE "Latvian" 
!insertmacro MUI_LANGUAGE "Indonesian" 

; Initialize language
Function .onInit
  !insertmacro MUI_LANGDLL_DISPLAY
FunctionEnd

; Reserve files
!insertmacro MUI_RESERVEFILE_INSTALLOPTIONS

; MUI end ------

Name "${PRODUCT_NAME} ${PRODUCT_VERSION}"
OutFile "qgis_setup${PRODUCT_VERSION_NUMBER}.exe"
InstallDir "$PROGRAMFILES\Quantum GIS"
InstallDirRegKey HKLM "${PRODUCT_DIR_REGKEY}" ""
ShowInstDetails show
ShowUnInstDetails show

Section "Quantum GIS Application" SEC01
  ;this section is mandatory
  SectionIn RO
  ;Added by Tim to install for all users not just the logged in user..
  ;make sure this is at the top of the section
  SetShellVarContext all


  ;Set the reg key so we get default toolbar layout
  !include qgis_window_geometry.nsh
  SetOutPath "$INSTDIR"
  SetOverwrite try
;------- Qt 
  File "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\QtCore4.dll"
  File "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\QtGui4.dll"
  File "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\QtNetwork4.dll"
  File "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\QtXml4.dll"
  File "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\QtSvg4.dll"
  File "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\mingwm10.dll"
;------- qgis Related
  File "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\*.dll"
  File "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\*.exe"
;--File "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\libz.dll.1.2.3"
;------- proj and gdal Related
  File "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\*.csv"
;subdirs
  File /r "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\grass"
  ;File /r "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\lib"
  File /r "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\doc"
  File /r "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\i18n"
  File /r "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\images"
  File /r "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\man"
  File /r "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\resources"
  File /r "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\svg"
  File /r "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\themes"
  File /r "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\nad"
  File /r "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\msys"
  ;qt plugins
  File /r "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\plugins"
 
; Shortcuts
; Next line is important - added by Tim
; if its not there the application working dir will be the last used
; outpath 
  SetOutPath "$INSTDIR"
  !insertmacro MUI_STARTMENU_WRITE_BEGIN Application
  CreateDirectory "$SMPROGRAMS\$ICONS_GROUP"
  CreateShortCut "$SMPROGRAMS\$ICONS_GROUP\Quantum GIS.lnk" "$INSTDIR\qgis.exe"
  CreateShortCut "$DESKTOP\Quantum GIS.lnk" "$INSTDIR\qgis.exe"
  !insertmacro MUI_STARTMENU_WRITE_END
; Added by Tim to set the PROJ_LIB env var so teh nad dir can be located by Proj
  Push PROJ_LIB
  Push "$INSTDIR\nad"
  Call WriteEnvStr

SectionEnd

Section "Development headers" SEC02
 SetOutPath "$INSTDIR\include"
 File "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\include\*.h"
SectionEnd

Section "Python Extension" SEC03
 !insertmacro CHECK_PYTHON
 SetOutPath "$INSTDIR"
 File /r "C:\Program Files\qgis${PRODUCT_VERSION_NUMBER}\python"
 pythonskip:
SectionEnd

; /o means unchecked by default
Section /o "Sample Data - Spearfish (GRASS)" SEC04
 SetOutPath "$INSTDIR\SampleData\"
 NSISdl::download http://grass.itc.it/sampledata/spearfish_grass60data-0.3.zip spearfish.zip
 !insertmacro ZIPDLL_EXTRACT "$INSTDIR\SampleData\spearfish.zip" "$INSTDIR\SampleData\" "<ALL>"
 ;ZipDLL::extractall  "$INSTDIR\SampleData\spearfish.zip" "$INSTDIR\SampleData\"
 ;the next line is a hack / workaround for a problem in zipdll.nsh
 ;!endif
 ;!endif commented by freddy to solve the sample data extracting problem,
 ;also is neccesary to download header file for nsi from :
 ; http://forums.winamp.com/attachment.php?s=b03c6736d9de4a864dd2d4e7b40babfb&postid=1293264


SectionEnd

; /o means unchecked by default
Section /o "Sample Data - Alaska (Non GRASS)" SEC05
 SetOutPath "$INSTDIR\SampleData\Alaska\"
 NSISdl::download http://qgis.org/uploadfiles/qgis_sample_data.zip alaska.zip
 !insertmacro ZIPDLL_EXTRACT "$INSTDIR\SampleData\Alaska\alaska.zip" "$INSTDIR\SampleData\Alaska" "<ALL>"
; Shortcuts
  !insertmacro MUI_STARTMENU_WRITE_BEGIN Application
  !insertmacro MUI_STARTMENU_WRITE_END
SectionEnd


Section -AdditionalIcons
  ;Added by Tim to install for all users not just the logged in user..
  ;make sure this is at the top of the section
  SetShellVarContext all

  SetOutPath $INSTDIR
  !insertmacro MUI_STARTMENU_WRITE_BEGIN Application
  WriteIniStr "$INSTDIR\${PRODUCT_NAME}.url" "InternetShortcut" "URL" "${PRODUCT_WEB_SITE}"
  CreateShortCut "$SMPROGRAMS\$ICONS_GROUP\Website.lnk" "$INSTDIR\${PRODUCT_NAME}.url"
  CreateShortCut "$SMPROGRAMS\$ICONS_GROUP\Uninstall.lnk" "$INSTDIR\uninst.exe"
  !insertmacro MUI_STARTMENU_WRITE_END
SectionEnd

Section -Post
  WriteUninstaller "$INSTDIR\uninst.exe"
  WriteRegStr HKLM "${PRODUCT_DIR_REGKEY}" "" "$INSTDIR\qgis.exe"
  WriteRegStr ${PRODUCT_UNINST_ROOT_KEY} "${PRODUCT_UNINST_KEY}" "DisplayName" "$(^Name)"
  WriteRegStr ${PRODUCT_UNINST_ROOT_KEY} "${PRODUCT_UNINST_KEY}" "UninstallString" "$INSTDIR\uninst.exe"
  WriteRegStr ${PRODUCT_UNINST_ROOT_KEY} "${PRODUCT_UNINST_KEY}" "DisplayIcon" "$INSTDIR\qgis.exe"
  WriteRegStr ${PRODUCT_UNINST_ROOT_KEY} "${PRODUCT_UNINST_KEY}" "DisplayVersion" "${PRODUCT_VERSION}"
  WriteRegStr ${PRODUCT_UNINST_ROOT_KEY} "${PRODUCT_UNINST_KEY}" "URLInfoAbout" "${PRODUCT_WEB_SITE}"
  WriteRegStr ${PRODUCT_UNINST_ROOT_KEY} "${PRODUCT_UNINST_KEY}" "Publisher" "${PRODUCT_PUBLISHER}"
SectionEnd

; Section descriptions
!insertmacro MUI_FUNCTION_DESCRIPTION_BEGIN
  !insertmacro MUI_DESCRIPTION_TEXT ${SEC01} "Main application files - you really need this!"
  !insertmacro MUI_DESCRIPTION_TEXT ${SEC02} "Header files for developers."
  !insertmacro MUI_DESCRIPTION_TEXT ${SEC03} "Python Scripting Engine."
  !insertmacro MUI_DESCRIPTION_TEXT ${SEC04} "20mb Download of sample data in GRASS format (not required if you have your own data already)"
  !insertmacro MUI_DESCRIPTION_TEXT ${SEC05} "20mb Download of sample shapefiles and TIFF data for Alaska (not required if you have your own data already)"
!insertmacro MUI_FUNCTION_DESCRIPTION_END


Function un.onUninstSuccess
  HideWindow
  MessageBox MB_ICONINFORMATION|MB_OK "$(^Name) was successfully removed from your computer."
FunctionEnd

Function un.onInit
  MessageBox MB_ICONQUESTION|MB_YESNO|MB_DEFBUTTON2 "Are you sure you want to completely remove $(^Name) and all of its components?" IDYES +2
  Abort
FunctionEnd


Section Uninstall
  ;Added by Tim to install for all users not just the logged in user..
  ;make sure this is at the top of the section
  SetShellVarContext all

  # remove the variable
  Push PROJ_LIB
  Call un.DeleteEnvStr

  !insertmacro MUI_STARTMENU_GETFOLDER "Application" $ICONS_GROUP
  Delete "$INSTDIR\${PRODUCT_NAME}.url"
  Delete "$INSTDIR\uninst.exe"

;----------------- icons and shortcuts
  Delete "$SMPROGRAMS\$ICONS_GROUP\Uninstall.lnk"
  Delete "$SMPROGRAMS\$ICONS_GROUP\Website.lnk"
  Delete "$DESKTOP\Quantum GIS.lnk"
  Delete "$SMPROGRAMS\$ICONS_GROUP\Quantum GIS.lnk"
  RMDir "$SMPROGRAMS\$ICONS_GROUP"

;----------------- The application dir gets zapped next ...  
  ;I added this recursive delte implementation because
  ; RM -R wasnt working properly
  Push "$INSTDIR"
  !insertmacro RemoveFilesAndSubDirs "$INSTDIR\"
  RMDir "$INSTDIR"


  DeleteRegKey ${PRODUCT_UNINST_ROOT_KEY} "${PRODUCT_UNINST_KEY}"
  DeleteRegKey HKLM "${PRODUCT_DIR_REGKEY}"
  SetAutoClose true
SectionEnd

