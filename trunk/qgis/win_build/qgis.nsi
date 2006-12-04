; Script generated by the HM NIS Edit Script Wizard.

; HM NIS Edit Wizard helper defines
!define PRODUCT_NAME "Quantum GIS"
!define PRODUCT_VERSION "0.8preview3"
!define PRODUCT_PUBLISHER "qgis.org"
!define PRODUCT_WEB_SITE "http://qgis.org"
!define PRODUCT_DIR_REGKEY "Software\Microsoft\Windows\CurrentVersion\App Paths\qgis.exe"
!define PRODUCT_UNINST_KEY "Software\Microsoft\Windows\CurrentVersion\Uninstall\${PRODUCT_NAME}"
!define PRODUCT_UNINST_ROOT_KEY "HKLM"
!define PRODUCT_STARTMENU_REGVAL "NSIS:StartMenuDir"

SetCompressor zlib
; Added by Tim for setting env vars (see this file on disk)
!include WriteEnvStr.nsh

; MUI 1.67 compatible ------
!include "MUI.nsh"

; MUI Settings
!define MUI_ABORTWARNING
!define MUI_ICON "C:\dev\cpp\qgis\win_build\qgis64x64.ico"
!define MUI_UNICON "C:\dev\cpp\qgis\win_build\qgis64x64.ico"
; Added by Tim for side image
!define MUI_WELCOMEFINISHPAGE_BITMAP "C:\dev\cpp\qgis\win_build\sidebar.bmp"
; Welcome page
!insertmacro MUI_PAGE_WELCOME
; License page
!define MUI_LICENSEPAGE_RADIOBUTTONS
!insertmacro MUI_PAGE_LICENSE "C:\dev\cpp\qgis\LICENSE.txt"
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
OutFile "qgis_setup.exe"
InstallDir "$PROGRAMFILES\Quantum GIS"
InstallDirRegKey HKLM "${PRODUCT_DIR_REGKEY}" ""
ShowInstDetails show
ShowUnInstDetails show

Section "MainSection" SEC01
  SetOutPath "$INSTDIR"
  SetOverwrite try
;------- Qt 
  File "C:\dev\cpp\qgis\qgis-release\QtCore4.dll"
  File "C:\dev\cpp\qgis\qgis-release\QtGui4.dll"
  File "C:\dev\cpp\qgis\qgis-release\QtNetwork4.dll"
  File "C:\dev\cpp\qgis\qgis-release\QtXml4.dll"
  File "C:\dev\cpp\qgis\qgis-release\QtSvg4.dll"
  File "C:\dev\cpp\qgis\qgis-release\mingwm10.dll"
;------- qgis Related
  File "C:\dev\cpp\qgis\qgis-release\*.dll"
  File "C:\dev\cpp\qgis\qgis-release\*.exe"
;------- proj and gdal Related
  File "C:\dev\cpp\qgis\qgis-release\*.csv"
;subdirs
  File /r "C:\dev\cpp\qgis\qgis-release\grass"
  File /r "C:\dev\cpp\qgis\qgis-release\lib"
  File /r "C:\dev\cpp\qgis\qgis-release\share"
  File /r "C:\dev\cpp\qgis\qgis-release\nad"
  File /r "C:\dev\cpp\qgis\qgis-release\msys"
 
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

Section "Sample Data" SEC02
 ; SetOutPath "$INSTDIR\SampleData\EnvironmentLayers\2050\A1F"
 ; File "C:\dev/cpp/qgis/\qgis-release\SampleData\EnvironmentLayers\2050\A1F\Annual_dev/cpp/qgis/erature_range.asc"

; Shortcuts
  !insertmacro MUI_STARTMENU_WRITE_BEGIN Application
  !insertmacro MUI_STARTMENU_WRITE_END
SectionEnd

Section -AdditionalIcons
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
  !insertmacro MUI_DESCRIPTION_TEXT ${SEC02} "Sample data (not required if you have your own data already)"
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
  # remove the variable
  Push PROJ_LIB
  Call un.DeleteEnvStr

  !insertmacro MUI_STARTMENU_GETFOLDER "Application" $ICONS_GROUP
  Delete "$INSTDIR\${PRODUCT_NAME}.url"
  Delete "$INSTDIR\uninst.exe"
  Delete "$INSTDIR\*.exe"
  Delete "$INSTDIR\*.dll"
  Delete "$INSTDIR\*.csv"
;----------------- subdirs
  RMDir /r "$INSTDIR/grass"
  RMDir /r "$INSTDIR/lib"
  RMDir /r "$INSTDIR/share"
  RMDir /r "$INSTDIR/nad"
  RMDir /r "$INSTDIR/msys"
;----------------- icons and shortcuts
  Delete "$SMPROGRAMS\$ICONS_GROUP\Uninstall.lnk"
  Delete "$SMPROGRAMS\$ICONS_GROUP\Website.lnk"
  Delete "$DESKTOP\Quantum GIS.lnk"
  Delete "$SMPROGRAMS\$ICONS_GROUP\Quantum GIS.lnk"
  RMDir "$SMPROGRAMS\$ICONS_GROUP"

  ;RMDir "$INSTDIR\plugins"
  RMDir "$INSTDIR"


  DeleteRegKey ${PRODUCT_UNINST_ROOT_KEY} "${PRODUCT_UNINST_KEY}"
  DeleteRegKey HKLM "${PRODUCT_DIR_REGKEY}"
  SetAutoClose true
SectionEnd
