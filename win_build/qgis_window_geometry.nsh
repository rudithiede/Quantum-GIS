############################### reg2nsis begin #################################
# This NSIS-script was generated by the Reg2Nsis utility                       #
# Author  : Artem Zankovich                                                    #
# URL     : http://aarrtteemm.nm.ru                                            #
# Usage   : You can freely inserts this into your setup script as inline text  #
#           or include file with the help of !include directive.               #
#           Please don't remove this header.                                   #
################################################################################

WriteRegStr HKEY_CURRENT_USER "Software\QuantumGIS" "" ""
WriteRegStr HKEY_CURRENT_USER "Software\QuantumGIS\qgis" "" ""
WriteRegStr HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Composer" "" ""
WriteRegDWORD HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Composer\geometry" "x" 0x154
WriteRegDWORD HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Composer\geometry" "y" 0xc8
WriteRegDWORD HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Composer\geometry" "w" 0x258
WriteRegDWORD HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Composer\geometry" "h" 0x190
WriteRegDWORD HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Composer\geometry" "wiev" 0xa
WriteRegDWORD HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Composer\geometry" "options" 0x54
WriteRegBin HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Geometry" "state" 40004200790074006500410072007200610079002800000000000000ff000000000000000000fd000000000000000000000000000500000000000000020061000000000000000400000000000000040000000000000008000000000000000800fc000000000000000200000000000000020000000000000004000000000000001600000046000000690000006c00000065000000540000006f0000006f0000006c0000004200000061000000720001000000000000000000000000000000be0000000000000000000000000000000000000000000000180000004c00000061000000790000006500000072000000540000006f0000006f0000006c000000420000006100000072000100000000000000be00000000000100900000000000000000000000000000000000000000000000140000004400000069000000670000006900000074000000690000007a000000690000006e000000670001000000000002004e00000000000200b200000000000000000000000000000000000000000000000800000048000000650000006c000000700000000000000004000100000000000000ff000000000000000000000000000000000000000000000002000000000000000400000000000000140000004100000074000000740000007200000069000000620000007500000074000000650000007300010000000000000000000000000001000400000000000000000000000000000000000000000000001c0000004d0000006100000070000000200000004e000000610000007600000069000000670000006100000074000000690000006f0000006e00010000000000010004000000000001002700000000000000000000000000000000000000000000000a00000047000000520000004100000053000000530001000000000002002b00000000000200d500000000000000000000000000000000000000000000000e000000500000006c0000007500000067000000690000006e000000730000000000000003009b000000000001006500000000000000000000000000000000002900
WriteRegStr HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Geometry" "maximized" "false"
WriteRegDWORD HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Geometry" "x" 0xfffffffc
WriteRegDWORD HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Geometry" "y" 0xfffffffc
WriteRegDWORD HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Geometry" "w" 0x500
WriteRegDWORD HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Geometry" "h" 0x2e6
WriteRegBin HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Geometry" "canvasSplitterState" 40004200790074006500410072007200610079002800000000000000ff00000000000000000000000000000002000000000001001200000000000300d60001000000000000000600010000000000000001002900
WriteRegBin HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Geometry" "legendSplitterState" 40004200790074006500410072007200610079002800000000000000ff0000000000000000000000000000000200000000000100eb000000000000005e0001000000000000000600010000000000000002002900
WriteRegStr HKEY_CURRENT_USER "Software\QuantumGIS\qgis\GRASS" "gisbase" ""
WriteRegStr HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Plugins" "Add Delimited Text Layer" "true"
WriteRegStr HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Plugins" "CopyrightLabel" "true"
WriteRegStr HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Plugins" "Georeferencer" "true"
WriteRegStr HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Plugins" "GPS Tools" "true"
WriteRegStr HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Plugins" "GRASS" "true"
WriteRegStr HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Plugins" "Graticule Creator" "true"
WriteRegStr HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Plugins" "Launcher" "true"
WriteRegStr HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Plugins" "NorthArrow" "true"
WriteRegStr HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Plugins" "PostgresSQL Geoprocessing" "true"
WriteRegStr HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Plugins" "ScaleBar" "true"
WriteRegStr HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Plugins" "SPIT" "true"
WriteRegStr HKEY_CURRENT_USER "Software\QuantumGIS\qgis\Plugins" "WFS plugin" "true"

###############################  reg2nsis end  #################################

