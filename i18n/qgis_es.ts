<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.0">
<context>
    <name>CoordinateCapture</name>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapture.cpp" line="92"/>
        <location filename="../src/plugins/coordinate_capture/coordinatecapture.cpp" line="149"/>
        <source>Coordinate Capture</source>
        <translation>Captura de coordenadas</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapture.cpp" line="94"/>
        <source>Click on the map to view coordinates and capture to clipboard.</source>
        <translation>Pulse en el mapa para ver las coordenadas y copiarlas al portapapeles.</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapture.cpp" line="99"/>
        <source>&amp;Coordinate Capture</source>
        <translation>&amp;Captura de coordenadas</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapture.cpp" line="115"/>
        <source>Click to select the CRS to use for coordinate display</source>
        <translation>Pulse para seleccionar el SRC a usar para la visualización de coordenadas</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapture.cpp" line="124"/>
        <source>Coordinate in your selected CRS</source>
        <translation>Coordenadas en su SRC seleccionado</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapture.cpp" line="128"/>
        <source>Coordinate in map canvas coordinate reference system</source>
        <translation>Coordenadas en el sistema de referencia de coordenadas de la vista del mapa</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapture.cpp" line="131"/>
        <source>Copy to clipboard</source>
        <translation>Copiar al portapapeles</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapture.cpp" line="136"/>
        <source>Click to enable mouse tracking. Click the canvas to stop</source>
        <translation>Pulse para activar el seguimiento del ratón. Pulse el lienzo del mapa para detener.</translation>
    </message>
</context>
<context>
    <name>CoordinateCaptureGui</name>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapturegui.cpp" line="55"/>
        <source>Welcome to your automatically generated plugin!</source>
        <translation>¡Bienvenido a su complemento generado automáticamente!</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapturegui.cpp" line="56"/>
        <source>This is just a starting point. You now need to modify the code to make it do something useful....read on for a more information to get yourself started.</source>
        <translation>Este es sólo un punto de inicio. Ahora necesita modificar el código para que haga algo útil... continúe leyendo para más información sobre cómo empezar.</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapturegui.cpp" line="57"/>
        <source>Documentation:</source>
        <translation>Documentación:</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapturegui.cpp" line="58"/>
        <source>You really need to read the QGIS API Documentation now at:</source>
        <translation>Ahora necesita leer la documentación del API de QGIS en:</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapturegui.cpp" line="59"/>
        <source>In particular look at the following classes:</source>
        <translation>En particular mire las siguientes clases:</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapturegui.cpp" line="62"/>
        <source>QgsPlugin is an ABC that defines required behaviour your plugin must provide. See below for more details.</source>
        <translation>QgsPlugin es una ABC que define los comportamientos requeridos que su complemento debe proporcionar. Vea más abajo para más detalles.</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapturegui.cpp" line="63"/>
        <source>What are all the files in my generated plugin directory for?</source>
        <translation>¿Para qué son todos los archivos generados en mi directorio de complementos?</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapturegui.cpp" line="64"/>
        <source>This is the generated CMake file that builds the plugin. You should add you application specific dependencies and source files to this file.</source>
        <translation>Este es el archivo CMake que construye el complemento. Debería añadir las dependencias específicas de su aplicación y los archivos fuente a este archivo.</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapturegui.cpp" line="65"/>
        <source>This is the class that provides the &apos;glue&apos; between your custom application logic and the QGIS application. You will see that a number of methods are already implemented for you - including some examples of how to add a raster or vector layer to the main application map canvas. This class is a concrete instance of the QgisPlugin interface which defines required behaviour for a plugin. In particular, a plugin has a number of static methods and members so that the QgsPluginManager and plugin loader logic can identify each plugin, create an appropriate menu entry for it etc. Note there is nothing stopping you creating multiple toolbar icons and menu entries for a single plugin. By default though a single menu entry and toolbar button is created and its pre-configured to call the run() method in this class when selected. This default implementation provided for you by the plugin builder is well documented, so please refer to the code for further advice.</source>
        <translation>Esta el la clase que proporciona el &quot;pegamento&quot; entre la lógica de su aplicación personal y la aplicación QGIS. Verá que ya hay implementados algunos métodos para usted - incluyendo algunos ejemplos de cómo añadir una capa ráster o vectorial a la vista principal del mapa de la aplicación. Esta clase es una instancia concreta de la interfaz QgisPlugin que define el comportamiento requerido para un complemento. En particular, un complemento tiene un número de métodos estáticos y miembros de forma que el QgsPluginManager y la lógica del cargador de complementos puedan identificar cada complemento, crear una entrada de menú apropiada para él, etc. Tenga en cuenta que no hay nada que le pare creando múltiples iconos de barras de herramientas y entradas de menú para un solo complemento. Sin embargo, de forma predeterminada sólo se crea una entrada de menú y un botón de barra de herramientas y está preconfigurado para llamar al método run() de esa clase cuando se selecciona. Esta implementación predeterminada proporcionada por el constructor de complementos está bien documentada, así que acuda al código para más información.</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapturegui.cpp" line="66"/>
        <source>This is a Qt designer &apos;ui&apos; file. It defines the look of the default plugin dialog without implementing any application logic. You can modify this form to suite your needs or completely remove it if your plugin does not need to display a user form (e.g. for custom MapTools).</source>
        <translation>Este es un archivo &quot;ui&quot; del diseñador de Qt. Define el aspecto del diálogo predeterminadado del complemento sin implementar ninguna lógica de la aplicación. Puede modificar este formulario para adaptarlo a sus necesidades o eliminarlo por completo si su complemento no necesita mostrar un formulario de usuario (por ej. para personalizar MapTools).</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapturegui.cpp" line="67"/>
        <source>This is the concrete class where application logic for the above mentioned dialog should go. The world is your oyster here really....</source>
        <translation>Esta es la clase concreta donde debe ir la lógica de la aplicación para el diálogo mencionado anteriormente. Aquí es donde está el quiz de la cuestión...</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapturegui.cpp" line="68"/>
        <source>This is the Qt4 resources file for your plugin. The Makefile generated for your plugin is all set up to compile the resource file so all you need to do is add your additional icons etc using the simple xml file format. Note the namespace used for all your resources e.g. (&apos;:/Homann/&apos;). It is important to use this prefix for all your resources. We suggest you include any other images and run time data in this resurce file too.</source>
        <translation>Este es el archivo de recursos de Qt4 para su complemento. El Makefile generado para su complemento está configurado por completo para compilar el archivo de recursos, así que todo lo que tiene que hacer es añadir sus iconos adicionales, etc. usando el sencillo formato de archivo xml. Fíjese en el namespace usado para todos sus recursos, ej. (&quot;:/[pluginname]/&quot;). Es importante usar este prefijo para todos sus recursos. Le sugerimos que incluya cualquier otra imagen y datos de tiempo de ejecución también en este archivo de recurso.</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapturegui.cpp" line="69"/>
        <source>This is the icon that will be used for your plugin menu entry and toolbar icon. Simply replace this icon with your own icon to make your plugin disctinctive from the rest.</source>
        <translation>Este es el icono que se usará para la entrada de menú e icono de barra de herramientas de su complemento. Simplemente sustituya este icono con el suyo para distinguirlo del resto.</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapturegui.cpp" line="70"/>
        <source>This file contains the documentation you are reading now!</source>
        <translation>¡Este archivo contiene la documentación que está leyendo ahora!</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapturegui.cpp" line="71"/>
        <source>Getting developer help:</source>
        <translation>Obtener ayuda de los desarrolladores:</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapturegui.cpp" line="72"/>
        <source>For Questions and Comments regarding the plugin builder template and creating your features in QGIS using the plugin interface please contact us via:</source>
        <translation>Para preguntas y comentarios sobre la plantilla del constructor de complementos y la creación de sus elementos en QGIS usando la interfaz de complementos, por favor póngase en contacto con nosotros via:</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapturegui.cpp" line="73"/>
        <source>&lt;li&gt; the QGIS developers mailing list, or &lt;/li&gt;&lt;li&gt; IRC (#qgis on freenode.net)&lt;/li&gt;</source>
        <translation>&lt;li&gt; la lista de correo de desarrolladores de QGIS o&lt;/li&gt;&lt;li&gt; IRC (#qgis en freenode.net)&lt;/li&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapturegui.cpp" line="74"/>
        <source>QGIS is distributed under the Gnu Public License. If you create a useful plugin please consider contributing it back to the community.</source>
        <translation>QGIS se distribuye bajo la Licencia Pública Gnu (GPL). Si crea un complemento útil, por favor valore ponerlo a su vez a disposición de la comunidad.</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapturegui.cpp" line="75"/>
        <source>Have fun and thank you for choosing QGIS.</source>
        <translation>Diviértase y gracias por elegir QGIS.</translation>
    </message>
</context>
<context>
    <name>CoordinateCaptureGuiBase</name>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecaptureguibase.ui" line="13"/>
        <source>QGIS Plugin Template</source>
        <translation>Plantilla de complementos de QGIS</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecaptureguibase.ui" line="47"/>
        <source>Plugin Template</source>
        <translation>Plantilla de complementos</translation>
    </message>
</context>
<context>
    <name>Dialog</name>
    <message>
        <location filename="../src/plugins/ogr_converter/dialog.cpp" line="115"/>
        <source>Connect</source>
        <translation>Conectar</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/dialog.cpp" line="119"/>
        <source>Browse</source>
        <translation>Explorar</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/dialog.cpp" line="192"/>
        <location filename="../src/plugins/ogr_converter/dialog.cpp" line="424"/>
        <source>OGR Converter</source>
        <translation>Conversor OGR</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/dialog.cpp" line="193"/>
        <location filename="../src/plugins/ogr_converter/dialog.cpp" line="421"/>
        <source>Could not establish connection to: &apos;</source>
        <translation>No se pudo establecer conexión con: &apos;</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/dialog.cpp" line="216"/>
        <source>Open OGR file</source>
        <translation>Abrir archivo OGR</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/dialog.cpp" line="218"/>
        <location filename="../src/plugins/ogr_converter/dialog.cpp" line="435"/>
        <source>OGR File Data Source (*.*)</source>
        <translation>Origen de datos de archivo OGR (*.*)</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/dialog.cpp" line="226"/>
        <source>Open Directory</source>
        <translation>Abrir directorio</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/dialog.cpp" line="241"/>
        <source>Input OGR dataset is missing!</source>
        <translation>¡Falta el conjunto de datos OGR de entrada!</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/dialog.cpp" line="248"/>
        <source>Input OGR layer name is missing!</source>
        <translation>¡Falta el nombre de la capa OGR de entrada!</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/dialog.cpp" line="262"/>
        <source>Target OGR format not selected!</source>
        <translation>¡No se ha seleccionado el formato OGR objetivo!</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/dialog.cpp" line="269"/>
        <source>Output OGR dataset is missing!</source>
        <translation>¡Falta el conjunto de datos OGR de salida!</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/dialog.cpp" line="276"/>
        <source>Output OGR layer name is missing!</source>
        <translation>¡Falta el nombre de la capa OGR de salida!</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/dialog.cpp" line="298"/>
        <source>Successfully translated layer &apos;</source>
        <translation>Traducida correctamente la capa &apos;</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/dialog.cpp" line="303"/>
        <source>Failed to translate layer &apos;</source>
        <translation>No se pudo traducir la capa &apos;</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/dialog.cpp" line="417"/>
        <source>Successfully connected to: &apos;</source>
        <translation>Conectado correctamente a: &apos;</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/dialog.cpp" line="434"/>
        <source>Choose a file name to save to</source>
        <translation>Seleccione un nombre de archivo en el que guardar</translation>
    </message>
</context>
<context>
    <name>Gui</name>
    <message>
        <location filename="../src/plugins/plugin_template/plugingui.cpp" line="55"/>
        <source>Welcome to your automatically generated plugin!</source>
        <translation>¡Bienvenido a su complemento generado automáticamente!</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/plugingui.cpp" line="56"/>
        <source>This is just a starting point. You now need to modify the code to make it do something useful....read on for a more information to get yourself started.</source>
        <translation>Este es sólo un punto de inicio. Ahora necesita modificar el código para que haga algo útil... continúe leyendo para más información sobre cómo empezar.</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/plugingui.cpp" line="57"/>
        <source>Documentation:</source>
        <translation>Documentación:</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/plugingui.cpp" line="58"/>
        <source>You really need to read the QGIS API Documentation now at:</source>
        <translation>Ahora necesita leer la documentación del API de QGIS en:</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/plugingui.cpp" line="59"/>
        <source>In particular look at the following classes:</source>
        <translation>En particular mire las siguientes clases:</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/plugingui.cpp" line="62"/>
        <source>QgsPlugin is an ABC that defines required behaviour your plugin must provide. See below for more details.</source>
        <translation>QgsPlugin es una ABC que define los comportamientos requeridos que su complemento debe proporcionar. Vea más abajo para más detalles.</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/plugingui.cpp" line="63"/>
        <source>What are all the files in my generated plugin directory for?</source>
        <translation>¿Para qué son todos los archivos generados en mi directorio de complementos?</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/plugingui.cpp" line="64"/>
        <source>This is the generated CMake file that builds the plugin. You should add you application specific dependencies and source files to this file.</source>
        <translation>Este es el archivo CMake que construye el complemento. Debería añadir las dependencias específicas de su aplicación y los archivos fuente a este archivo.</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/plugingui.cpp" line="65"/>
        <source>This is the class that provides the &apos;glue&apos; between your custom application logic and the QGIS application. You will see that a number of methods are already implemented for you - including some examples of how to add a raster or vector layer to the main application map canvas. This class is a concrete instance of the QgisPlugin interface which defines required behaviour for a plugin. In particular, a plugin has a number of static methods and members so that the QgsPluginManager and plugin loader logic can identify each plugin, create an appropriate menu entry for it etc. Note there is nothing stopping you creating multiple toolbar icons and menu entries for a single plugin. By default though a single menu entry and toolbar button is created and its pre-configured to call the run() method in this class when selected. This default implementation provided for you by the plugin builder is well documented, so please refer to the code for further advice.</source>
        <translation>Esta el la clase que proporciona el &quot;pegamento&quot; entre la lógica de su aplicación personal y la aplicación QGIS. Verá que ya hay implementados algunos métodos para usted - incluyendo algunos ejemplos de cómo añadir una capa ráster o vectorial a la vista principal del mapa de la aplicación. Esta clase es una instancia concreta de la interfaz QgisPlugin que define el comportamiento requerido para un complemento. En particular, un complemento tiene un número de métodos estáticos y miembros de forma que el QgsPluginManager y la lógica del cargador de complementos puedan identificar cada complemento, crear una entrada de menú apropiada para él, etc. Tenga en cuenta que no hay nada que le pare creando múltiples iconos de barras de herramientas y entradas de menú para un solo complemento. Sin embargo, de forma predeterminada sólo se crea una entrada de menú y un botón de barra de herramientas y está preconfigurado para llamar al método run() de esa clase cuando se selecciona. Esta implementación predeterminada proporcionada por el constructor de complementos está bien documentada, así que acuda al código para más información.</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/plugingui.cpp" line="66"/>
        <source>This is a Qt designer &apos;ui&apos; file. It defines the look of the default plugin dialog without implementing any application logic. You can modify this form to suite your needs or completely remove it if your plugin does not need to display a user form (e.g. for custom MapTools).</source>
        <translation>Este es un archivo &quot;ui&quot; del diseñador de Qt. Define el aspecto del diálogo predeterminadado del complemento sin implementar ninguna lógica de la aplicación. Puede modificar este formulario para adaptarlo a sus necesidades o eliminarlo por completo si su complemento no necesita mostrar un formulario de usuario (por ej. para personalizar MapTools).</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/plugingui.cpp" line="67"/>
        <source>This is the concrete class where application logic for the above mentioned dialog should go. The world is your oyster here really....</source>
        <translation>Esta es la clase concreta donde debe ir la lógica de la aplicación para el diálogo mencionado anteriormente. Aquí es donde está el quiz de la cuestión...</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/plugingui.cpp" line="68"/>
        <source>This is the Qt4 resources file for your plugin. The Makefile generated for your plugin is all set up to compile the resource file so all you need to do is add your additional icons etc using the simple xml file format. Note the namespace used for all your resources e.g. (&apos;:/Homann/&apos;). It is important to use this prefix for all your resources. We suggest you include any other images and run time data in this resurce file too.</source>
        <translation>Este es el archivo de recursos de Qt4 para su complemento. El Makefile generado para su complemento está configurado por completo para compilar el archivo de recursos, así que todo lo que tiene que hacer es añadir sus iconos adicionales, etc. usando el sencillo formato de archivo xml. Fíjese en el namespace usado para todos sus recursos, ej. (&quot;:/[pluginname]/&quot;). Es importante usar este prefijo para todos sus recursos. Le sugerimos que incluya cualquier otra imagen y datos de tiempo de ejecución también en este archivo de recurso.</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/plugingui.cpp" line="69"/>
        <source>This is the icon that will be used for your plugin menu entry and toolbar icon. Simply replace this icon with your own icon to make your plugin disctinctive from the rest.</source>
        <translation>Este es el icono que se usará para la entrada de menú e icono de barra de herramientas de su complemento. Simplemente sustituya este icono con el suyo para distinguirlo del resto.</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/plugingui.cpp" line="70"/>
        <source>This file contains the documentation you are reading now!</source>
        <translation>¡Este archivo contiene la documentación que está leyendo ahora!</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/plugingui.cpp" line="71"/>
        <source>Getting developer help:</source>
        <translation>Obtener ayuda de los desarrolladores:</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/plugingui.cpp" line="72"/>
        <source>For Questions and Comments regarding the plugin builder template and creating your features in QGIS using the plugin interface please contact us via:</source>
        <translation>Para preguntas y comentarios sobre la plantilla del constructor de complementos y la creación de sus elementos en QGIS usando la interfaz de complementos, por favor póngase en contacto con nosotros via:</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/plugingui.cpp" line="73"/>
        <source>&lt;li&gt; the QGIS developers mailing list, or &lt;/li&gt;&lt;li&gt; IRC (#qgis on freenode.net)&lt;/li&gt;</source>
        <translation>&lt;li&gt; la lista de correo de desarrolladores de QGIS o&lt;/li&gt;&lt;li&gt; IRC (#qgis en freenode.net)&lt;/li&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/plugingui.cpp" line="74"/>
        <source>QGIS is distributed under the Gnu Public License. If you create a useful plugin please consider contributing it back to the community.</source>
        <translation>QGIS se distribuye bajo la Licencia Pública Gnu (GPL). Si crea un complemento útil, por favor valore ponerlo a su vez a disposición de la comunidad.</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/plugingui.cpp" line="75"/>
        <source>Have fun and thank you for choosing QGIS.</source>
        <translation>Diviértase y gracias por elegir QGIS.</translation>
    </message>
</context>
<context>
    <name>MapCoordsDialogBase</name>
    <message>
        <location filename="../src/plugins/georeferencer/mapcoordsdialogbase.ui" line="13"/>
        <source>Enter map coordinates</source>
        <translation>Introducir coordenadas de mapa</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/mapcoordsdialogbase.ui" line="62"/>
        <source>X:</source>
        <translation>X:</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/mapcoordsdialogbase.ui" line="69"/>
        <source>Y:</source>
        <translation>Y:</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/mapcoordsdialogbase.ui" line="185"/>
        <source>&amp;OK</source>
        <translation>&amp;Aceptar</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/mapcoordsdialogbase.ui" line="172"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/mapcoordsdialogbase.ui" line="28"/>
        <source>Enter X and Y coordinates which correspond with the selected point on the image. Alternatively, click the button with icon of a pencil and then click a corresponding point on map canvas of QGIS to fill in coordinates of that point.</source>
        <translation>Introducir las coordenadas X e Y que correspondan con el punto seleccionado en la imagen. De forma alternativa, seleccionar el botón con el icono de un lápiz y luego hacer clic en un punto correspondiente sobre la vista del mapa de QGIS para rellenar las coordenadas de ese punto.</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/mapcoordsdialogbase.ui" line="137"/>
        <source> from map canvas</source>
        <translation> de la vista del mapa</translation>
    </message>
</context>
<context>
    <name>OgrConverterGuiBase</name>
    <message>
        <location filename="../src/plugins/ogr_converter/ogrconverterguibase.ui" line="25"/>
        <source>OGR Layer Converter</source>
        <translation>Conversor de capas OGR</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/ogrconverterguibase.ui" line="40"/>
        <source>Source</source>
        <translation>Fuente</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/ogrconverterguibase.ui" line="52"/>
        <location filename="../src/plugins/ogr_converter/ogrconverterguibase.ui" line="183"/>
        <source>Format</source>
        <translation>Formato</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/ogrconverterguibase.ui" line="88"/>
        <source>File</source>
        <translation>Archivo</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/ogrconverterguibase.ui" line="95"/>
        <source>Directory</source>
        <translation>Directorio</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/ogrconverterguibase.ui" line="102"/>
        <source>Remote source</source>
        <translation>Origen remoto</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/ogrconverterguibase.ui" line="109"/>
        <location filename="../src/plugins/ogr_converter/ogrconverterguibase.ui" line="206"/>
        <source>Dataset</source>
        <translation>Conjunto de datos</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/ogrconverterguibase.ui" line="129"/>
        <location filename="../src/plugins/ogr_converter/ogrconverterguibase.ui" line="226"/>
        <source>Browse</source>
        <translation>Explorar</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/ogrconverterguibase.ui" line="142"/>
        <location filename="../src/plugins/ogr_converter/ogrconverterguibase.ui" line="239"/>
        <source>Layer</source>
        <translation>Capa</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/ogrconverterguibase.ui" line="171"/>
        <source>Target</source>
        <translation>Objetivo</translation>
    </message>
</context>
<context>
    <name>OgrPlugin</name>
    <message>
        <location filename="../src/plugins/ogr_converter/plugin.cpp" line="57"/>
        <source>Run OGR Layer Converter</source>
        <translation>Ejecutar el conversor de capas OGR</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/plugin.cpp" line="67"/>
        <source>OG&amp;R Converter</source>
        <translation>Conversor OG&amp;R</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/plugin.cpp" line="60"/>
        <source>Translates vector layers between formats supported by OGR library</source>
        <translation>Traduce capas vectoriales entre formatos admitidos por la biblioteca OGR</translation>
    </message>
</context>
<context>
    <name>QFileDialog</name>
    <message>
        <location filename="../src/plugins/quick_print/quickprintgui.cpp" line="108"/>
        <source>Save experiment report to portable document format (.pdf)</source>
        <translation>Guardar informe del experimento a formato de documento portátil (.pdf)</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="3111"/>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="937"/>
        <source>Load layer properties from style file (.qml)</source>
        <translation>Cargar propiedades de la capa de archivo de estilo (.qml)</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="3177"/>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="1002"/>
        <source>Save layer properties as style file (.qml)</source>
        <translation>Guardar propiedades de la capa como archivo de estilo (.qml)</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/core/qgsdistancearea.cpp" line="285"/>
        <location filename="../src/core/qgsdistancearea.cpp" line="310"/>
        <source>Caught a coordinate system exception while trying to transform a point. Unable to calculate line length.</source>
        <translation>Capturada una excepción del sistema de coordenadas mientras se intentaba transformar un punto.No se puede calcular la longitud de la línea.</translation>
    </message>
    <message>
        <location filename="../src/core/qgsdistancearea.cpp" line="372"/>
        <location filename="../src/core/qgsdistancearea.cpp" line="401"/>
        <source>Caught a coordinate system exception while trying to transform a point. Unable to calculate polygon area.</source>
        <translation>Capturada una excepción del sistema de coordenadas mientras se intentaba transformar un punto.No se puede calcular el área del polígono.</translation>
    </message>
    <message>
        <location filename="../src/core/qgslabelattributes.cpp" line="61"/>
        <source>Label</source>
        <translation>Etiqueta</translation>
    </message>
    <message>
        <location filename="../src/core/qgsproviderregistry.cpp" line="86"/>
        <source>No Data Provider Plugins</source>
        <comment>No QGIS data provider plugins found in:</comment>
        <translation>No hay complementos de proveedores de datos</translation>
    </message>
    <message>
        <location filename="../src/core/qgsproviderregistry.cpp" line="89"/>
        <source>No vector layers can be loaded. Check your QGIS installation</source>
        <translation>No se pueden cargar capas vectoriales. Compruebe su instalación de QGIS.</translation>
    </message>
    <message>
        <location filename="../src/core/qgsproviderregistry.cpp" line="92"/>
        <source>No Data Providers</source>
        <translation>No hay proveedores de datos</translation>
    </message>
    <message>
        <location filename="../src/core/qgsproviderregistry.cpp" line="253"/>
        <source>No data provider plugins are available. No vector layers can be loaded</source>
        <translation>No hay complementos de proveedores de datos disponibles. No se pueden cargar capas vectoriales.</translation>
    </message>
    <message>
        <location filename="../src/core/qgssearchtreenode.cpp" line="287"/>
        <source>Referenced column wasn&apos;t found: </source>
        <translation>No se ha encontrado la columna indicada: </translation>
    </message>
    <message>
        <location filename="../src/core/qgssearchtreenode.cpp" line="291"/>
        <source>Division by zero.</source>
        <translation>División entre cero.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="2931"/>
        <location filename="../src/app/qgisapp.cpp" line="3109"/>
        <location filename="../src/app/qgisapp.cpp" line="3184"/>
        <source>QGis files (*.qgs)</source>
        <translation>Archivos QGis (*.qgs)</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptoolidentify.cpp" line="120"/>
        <location filename="../src/app/qgsmaptoolselect.cpp" line="71"/>
        <source>No active layer</source>
        <translation>No hay capa activa</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptoolidentify.cpp" line="154"/>
        <source>Band</source>
        <translation>Banda</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptoolidentify.cpp" line="347"/>
        <source>Length</source>
        <translation>Longitud</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptoolidentify.cpp" line="365"/>
        <source>Area</source>
        <translation>Área</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptoolidentify.cpp" line="381"/>
        <source>action</source>
        <translation>acción</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptoolidentify.cpp" line="389"/>
        <source> features found</source>
        <translation> objetos espaciales encontrados</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptoolidentify.cpp" line="393"/>
        <source> 1 feature found</source>
        <translation> 1 objeto espacial encontrado</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptoolidentify.cpp" line="398"/>
        <location filename="../src/app/qgsmaptoolidentify.cpp" line="399"/>
        <source>No features found</source>
        <translation>No se han encontrado objetos espaciales</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptoolidentify.cpp" line="399"/>
        <source>No features were found in the active layer at the point you clicked</source>
        <translation>No se han encontrado objetos espaciales en la capa activa en el punto en el que se ha pinchado</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptoolidentify.cpp" line="424"/>
        <source>Could not identify objects on</source>
        <translation>No se pudieron identificar objetos en</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptoolidentify.cpp" line="424"/>
        <source>because</source>
        <translation>porque</translation>
    </message>
    <message>
        <location filename="../src/core/qgsproject.cpp" line="769"/>
        <source>Project file read error: </source>
        <translation>Error de lectura del archivo del proyecto: </translation>
    </message>
    <message>
        <location filename="../src/core/qgsproject.cpp" line="770"/>
        <source> at line </source>
        <translation> en la línea </translation>
    </message>
    <message>
        <location filename="../src/core/qgsproject.cpp" line="770"/>
        <source> column </source>
        <translation> columna </translation>
    </message>
    <message>
        <location filename="../src/core/qgsproject.cpp" line="777"/>
        <source> for file </source>
        <translation> en el archivo </translation>
    </message>
    <message>
        <location filename="../src/core/qgsproject.cpp" line="931"/>
        <source>Unable to save to file </source>
        <translation>No se puede guardar a un archivo </translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgsleastsquares.cpp" line="33"/>
        <source>Fit to a linear transform requires at least 2 points.</source>
        <translation>Ajustar a una transformación lineal requiere al menos 2 puntos.</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgsleastsquares.cpp" line="75"/>
        <source>Fit to a Helmert transform requires at least 2 points.</source>
        <translation>Ajustar a una transformación de Helmert requiere al menos 2 puntos.</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgsleastsquares.cpp" line="131"/>
        <source>Fit to an affine transform requires at least 4 points.</source>
        <translation>Ajustar a una transformación afín requiere al menos 4 puntos.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="71"/>
        <source>New centroid</source>
        <translation>Nuevo centroide</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="73"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="230"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="234"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="238"/>
        <source>New point</source>
        <translation>Nuevo punto</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="123"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="135"/>
        <source>New vertex</source>
        <translation>Nuevo vértice</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="234"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="238"/>
        <source>Undo last point</source>
        <translation>Deshacer último punto</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="238"/>
        <source>Close line</source>
        <translation>Cerrar línea</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="262"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="292"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="328"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="516"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="557"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="590"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="601"/>
        <source>Select vertex</source>
        <translation>Seleccionar vértice</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="317"/>
        <source>Select new position</source>
        <translation>Seleccionar nueva posición</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="380"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="417"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="460"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="471"/>
        <source>Select line segment</source>
        <translation>Seleccionar segmento de línea</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="456"/>
        <source>New vertex position</source>
        <translation>Posición del nuevo vértice</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="456"/>
        <source>Release</source>
        <translation>Liberar</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="586"/>
        <source>Delete vertex</source>
        <translation>Borrar vértice</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="586"/>
        <source>Release vertex</source>
        <translation>Liberar vértice</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="617"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="648"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="666"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="675"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="711"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="751"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="758"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="870"/>
        <source>Select element</source>
        <translation>Seleccionar elemento</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="662"/>
        <source>New location</source>
        <translation>Nueva localización</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="662"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="747"/>
        <source>Release selected</source>
        <translation>Liberar selección</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="747"/>
        <source>Delete selected / select next</source>
        <translation>Borrar selección / seleccionar siguiente</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="774"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="816"/>
        <source>Select position on line</source>
        <translation>Seleccionar posición en la línea</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="837"/>
        <source>Split the line</source>
        <translation>Dividir la línea</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="837"/>
        <source>Release the line</source>
        <translation>Liberar la línea</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="841"/>
        <location filename="../src/plugins/grass/qgsgrassedittools.cpp" line="853"/>
        <source>Select point on line</source>
        <translation>Seleccionar punto en la línea</translation>
    </message>
    <message>
        <location filename="../src/providers/gpx/gpsdata.cpp" line="375"/>
        <source>Couldn&apos;t open the data source: </source>
        <translation>No se pudo abrir la fuente de datos: </translation>
    </message>
    <message>
        <location filename="../src/providers/gpx/gpsdata.cpp" line="398"/>
        <source>Parse error at line </source>
        <translation>Error de análisis en la línea </translation>
    </message>
    <message>
        <location filename="../src/providers/gpx/qgsgpxprovider.cpp" line="56"/>
        <source>GPS eXchange format provider</source>
        <translation>Proveedor de formato eXchange GPS</translation>
    </message>
    <message>
        <location filename="../src/providers/grass/qgsgrass.cpp" line="135"/>
        <location filename="../src/providers/grass/qgsgrass.cpp" line="167"/>
        <source>GRASS plugin</source>
        <translation>Complemento de GRASS</translation>
    </message>
    <message>
        <location filename="../src/providers/grass/qgsgrass.cpp" line="136"/>
        <source>QGIS couldn&apos;t find your GRASS installation.
Would you like to specify path (GISBASE) to your GRASS installation?</source>
        <translation>QGIS no pudo encontrar su instalación de GRASS.
¿Podría especificar la ruta (GISBASE) de su instalación de GRASS?</translation>
    </message>
    <message>
        <location filename="../src/providers/grass/qgsgrass.cpp" line="151"/>
        <source>Choose GRASS installation path (GISBASE)</source>
        <translation>Seleccionar ruta de instalación de GRASS (GISBASE)</translation>
    </message>
    <message>
        <location filename="../src/providers/grass/qgsgrass.cpp" line="168"/>
        <source>GRASS data won&apos;t be available if GISBASE is not specified.</source>
        <translation>Los datos de GRASS no estarán accesibles si no se especifica una GISBASE.</translation>
    </message>
    <message>
        <location filename="../src/plugins/copyright_label/plugin.cpp" line="49"/>
        <source>CopyrightLabel</source>
        <translation>Etiqueta de Copyright</translation>
    </message>
    <message>
        <location filename="../src/plugins/copyright_label/plugin.cpp" line="50"/>
        <source>Draws copyright information</source>
        <translation>Dibuja información de copyright</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapture.cpp" line="52"/>
        <location filename="../src/plugins/copyright_label/plugin.cpp" line="51"/>
        <location filename="../src/plugins/dxf2shp_converter/dxf2shpconverter.cpp" line="40"/>
        <location filename="../src/plugins/geoprocessing/qgspggeoprocessing.cpp" line="47"/>
        <location filename="../src/plugins/georeferencer/plugin.cpp" line="59"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="55"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="52"/>
        <location filename="../src/plugins/grid_maker/plugin.cpp" line="43"/>
        <location filename="../src/plugins/north_arrow/plugin.cpp" line="60"/>
        <location filename="../src/plugins/ogr_converter/plugin.cpp" line="35"/>
        <location filename="../src/plugins/plugin_template/plugin.cpp" line="40"/>
        <location filename="../src/plugins/quick_print/quickprintplugin.cpp" line="41"/>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="62"/>
        <location filename="../src/plugins/spit/qgsspitplugin.cpp" line="39"/>
        <location filename="../src/plugins/wfs/qgswfsplugin.cpp" line="31"/>
        <source>Version 0.1</source>
        <translation>Versión 0.1</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextplugin.cpp" line="42"/>
        <source>Version 0.2</source>
        <translation>Versión 0.2</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextplugin.cpp" line="43"/>
        <source>Loads and displays delimited text files containing x,y coordinates</source>
        <translation>Carga y muestra archivos de texto delimitado que contienen coordenadas X, Y</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextplugin.cpp" line="159"/>
        <source>Add Delimited Text Layer</source>
        <translation>Añadir capa de texto delimitado</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/plugin.cpp" line="57"/>
        <source>Georeferencer</source>
        <translation>Georreferenciador</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/plugin.cpp" line="58"/>
        <source>Adding projection info to rasters</source>
        <translation>Añadir información de proyección a los rásters</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="52"/>
        <source>GPS Tools</source>
        <translation>Herramientas de GPS</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="54"/>
        <source>Tools for loading and importing GPS data</source>
        <translation>Herramientas para cargar e importar datos de GPS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="831"/>
        <source>GRASS</source>
        <translation>GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="837"/>
        <source>GRASS layer</source>
        <translation>Capa de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grid_maker/plugin.cpp" line="41"/>
        <source>Graticule Creator</source>
        <translation>Creador de cuadrícula</translation>
    </message>
    <message>
        <location filename="../src/plugins/grid_maker/plugin.cpp" line="42"/>
        <source>Builds a graticule</source>
        <translation>Construye una cuadrícula</translation>
    </message>
    <message>
        <location filename="../src/plugins/north_arrow/plugin.cpp" line="58"/>
        <source>NorthArrow</source>
        <translation>Flecha de Norte</translation>
    </message>
    <message>
        <location filename="../src/plugins/north_arrow/plugin.cpp" line="59"/>
        <source>Displays a north arrow overlayed onto the map</source>
        <translation>Muestra una flecha de Norte superpuesta en el mapa</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/plugin.cpp" line="38"/>
        <source>[menuitemname]</source>
        <translation>[nombredeelementodemenu]</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/plugin.cpp" line="39"/>
        <source>[plugindescription]</source>
        <translation>[descripcióndecomplemento]</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="60"/>
        <source>ScaleBar</source>
        <translation>Barra de escala</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="61"/>
        <source>Draws a scale bar</source>
        <translation>Dibuja una barra de escala</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitplugin.cpp" line="37"/>
        <source>SPIT</source>
        <translation>SPIT</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitplugin.cpp" line="38"/>
        <source>Shapefile to PostgreSQL/PostGIS Import Tool</source>
        <translation>Herramienta de importación de shapefiles a PostgreSQL/PostGIS</translation>
    </message>
    <message>
        <location filename="../src/plugins/wfs/qgswfsplugin.cpp" line="29"/>
        <source>WFS plugin</source>
        <translation>Complemento de WFS</translation>
    </message>
    <message>
        <location filename="../src/plugins/wfs/qgswfsplugin.cpp" line="30"/>
        <source>Adds WFS layers to the QGIS canvas</source>
        <translation>Añade capas WFS a la vista de QGIS</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="48"/>
        <location filename="../src/app/qgsmaptooladdisland.cpp" line="43"/>
        <location filename="../src/app/qgsmaptooladdring.cpp" line="43"/>
        <location filename="../src/app/qgsmaptoolsplitfeatures.cpp" line="42"/>
        <source>Not a vector layer</source>
        <translation>No es una capa vectorial</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="49"/>
        <location filename="../src/app/qgsmaptooladdisland.cpp" line="44"/>
        <location filename="../src/app/qgsmaptooladdring.cpp" line="44"/>
        <location filename="../src/app/qgsmaptoolsplitfeatures.cpp" line="43"/>
        <source>The current layer is not a vector layer</source>
        <translation>La capa actual no es vectorial</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="72"/>
        <source>Layer cannot be added to</source>
        <translation>La capa no se puede añadir a</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="73"/>
        <source>The data provider for this layer does not support the addition of features.</source>
        <translation>El proveedor de datos de esta capa no da soporte para añadir objetos espaciales.</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="79"/>
        <location filename="../src/app/qgsmaptooladdisland.cpp" line="50"/>
        <location filename="../src/app/qgsmaptooladdring.cpp" line="50"/>
        <location filename="../src/app/qgsmaptoolmovefeature.cpp" line="65"/>
        <location filename="../src/app/qgsmaptoolsplitfeatures.cpp" line="49"/>
        <source>Layer not editable</source>
        <translation>Capa no editable</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="80"/>
        <location filename="../src/app/qgsmaptooladdisland.cpp" line="51"/>
        <location filename="../src/app/qgsmaptooladdring.cpp" line="51"/>
        <location filename="../src/app/qgsmaptoolmovefeature.cpp" line="66"/>
        <location filename="../src/app/qgsmaptoolsplitfeatures.cpp" line="50"/>
        <source>Cannot edit the vector layer. To make it editable, go to the file item of the layer, right click and check &apos;Allow Editing&apos;.</source>
        <translation>No se puede editar la capa vectorial. Para hacerla editable vaya al archivo de la capa, haga clic derecho y marque &apos;Permitir edición&apos;.</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptoolselect.cpp" line="72"/>
        <source>To select features, you must choose a vector layer by clicking on its name in the legend</source>
        <translation>Para seleccionar objetos espaciales debe elegir una capa vectorial haciendo clic en su nombre en la leyenda</translation>
    </message>
    <message>
        <location filename="../src/app/qgspluginregistry.cpp" line="416"/>
        <location filename="../src/python/qgspythonutilsimpl.cpp" line="100"/>
        <location filename="../src/python/qgspythonutilsimpl.cpp" line="199"/>
        <source>Python error</source>
        <translation>Error de Python</translation>
    </message>
    <message>
        <location filename="../src/python/qgspythonutilsimpl.cpp" line="497"/>
        <source>Couldn&apos;t load plugin </source>
        <translation>No se pudo cargar el complemento </translation>
    </message>
    <message>
        <location filename="../src/python/qgspythonutilsimpl.cpp" line="501"/>
        <source> due an error when calling its classFactory() method</source>
        <translation> debido a un error al llamar a su método classFactory()</translation>
    </message>
    <message>
        <location filename="../src/python/qgspythonutilsimpl.cpp" line="505"/>
        <source> due an error when calling its initGui() method</source>
        <translation> debido a un error al llamar a su método initGui()</translation>
    </message>
    <message>
        <location filename="../src/python/qgspythonutilsimpl.cpp" line="517"/>
        <source>Error while unloading plugin </source>
        <translation>Error al descargar complemento </translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="59"/>
        <source>2.5D shape type not supported</source>
        <translation>El tipo shape 2.5D no está soportado</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="59"/>
        <source>Adding features to 2.5D shapetypes is not supported yet</source>
        <translation>Añadir objetos espaciales a tipo shape 2.5 aún no está soportado</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="91"/>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="199"/>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="207"/>
        <source>Wrong editing tool</source>
        <translation>Herramienta de edición incorrecta</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="92"/>
        <source>Cannot apply the &apos;capture point&apos; tool on this vector layer</source>
        <translation>No se puede aplicar la herramienta &apos;Crear punto&apos; en esta capa vectorial</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="112"/>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="222"/>
        <location filename="../src/app/qgsmaptooladdisland.cpp" line="87"/>
        <location filename="../src/app/qgsmaptooladdring.cpp" line="66"/>
        <location filename="../src/app/qgsmaptoolsplitfeatures.cpp" line="65"/>
        <source>Coordinate transform error</source>
        <translation>Error de transformación de coordenadas</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="113"/>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="223"/>
        <location filename="../src/app/qgsmaptooladdisland.cpp" line="88"/>
        <location filename="../src/app/qgsmaptooladdring.cpp" line="67"/>
        <location filename="../src/app/qgsmaptoolsplitfeatures.cpp" line="66"/>
        <source>Cannot transform the point to the layers coordinate system</source>
        <translation>No se puede transformar el punto al sistema de coordenadas de las capas</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="200"/>
        <source>Cannot apply the &apos;capture line&apos; tool on this vector layer</source>
        <translation>No se puede aplicar la herramienta &apos;Crear línea&apos; en esta capa vectorial</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="208"/>
        <source>Cannot apply the &apos;capture polygon&apos; tool on this vector layer</source>
        <translation>No se puede aplicar la herramienta &apos;Crear polígono&apos; en esta capa vectorial</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="324"/>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="420"/>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="435"/>
        <source>Error</source>
        <translation>Error</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="324"/>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="420"/>
        <source>Cannot add feature. Unknown WKB type</source>
        <translation>No se puede añadir el objeto espacial. Tipo WKB desconocido.</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdisland.cpp" line="70"/>
        <location filename="../src/app/qgsmaptooladdisland.cpp" line="134"/>
        <source>Error, could not add island</source>
        <translation>Error, no se pudo añadir la isla</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdring.cpp" line="91"/>
        <source>A problem with geometry type occured</source>
        <translation>Ocurrió un problema con el tipo de geometría</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdring.cpp" line="95"/>
        <source>The inserted Ring is not closed</source>
        <translation>El anillo insertado no está cerrado</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdring.cpp" line="99"/>
        <source>The inserted Ring is not a valid geometry</source>
        <translation>El anillo insertado no es una geometría válida</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdring.cpp" line="103"/>
        <source>The inserted Ring crosses existing rings</source>
        <translation>El anillo insertado cruza anillos existentes</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdring.cpp" line="107"/>
        <source>The inserted Ring is not contained in a feature</source>
        <translation>El anillo insertado no está contenido en un objeto espacial</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdring.cpp" line="111"/>
        <source>An unknown error occured</source>
        <translation>Ocurrió un error desconocido</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdring.cpp" line="113"/>
        <source>Error, could not add ring</source>
        <translation>Error, no se pudo añadir el anillo</translation>
    </message>
    <message>
        <location filename="../src/core/qgsdistancearea.cpp" line="647"/>
        <source> km2</source>
        <translation> km²</translation>
    </message>
    <message>
        <location filename="../src/core/qgsdistancearea.cpp" line="652"/>
        <source> ha</source>
        <translation> Ha</translation>
    </message>
    <message>
        <location filename="../src/core/qgsdistancearea.cpp" line="657"/>
        <source> m2</source>
        <translation> m²</translation>
    </message>
    <message>
        <location filename="../src/core/qgsdistancearea.cpp" line="665"/>
        <location filename="../src/core/qgsdistancearea.cpp" line="685"/>
        <source> m</source>
        <translation> m</translation>
    </message>
    <message>
        <location filename="../src/core/qgsdistancearea.cpp" line="670"/>
        <source> km</source>
        <translation> km</translation>
    </message>
    <message>
        <location filename="../src/core/qgsdistancearea.cpp" line="675"/>
        <source> mm</source>
        <translation> mm</translation>
    </message>
    <message>
        <location filename="../src/core/qgsdistancearea.cpp" line="680"/>
        <source> cm</source>
        <translation> cm</translation>
    </message>
    <message>
        <location filename="../src/core/qgsdistancearea.cpp" line="694"/>
        <source> sq mile</source>
        <translation> milla²</translation>
    </message>
    <message>
        <location filename="../src/core/qgsdistancearea.cpp" line="699"/>
        <source> sq ft</source>
        <translation> pies²</translation>
    </message>
    <message>
        <location filename="../src/core/qgsdistancearea.cpp" line="706"/>
        <source> mile</source>
        <translation> milla</translation>
    </message>
    <message>
        <location filename="../src/core/qgsdistancearea.cpp" line="712"/>
        <source> foot</source>
        <translation> pie</translation>
    </message>
    <message>
        <location filename="../src/core/qgsdistancearea.cpp" line="714"/>
        <source> feet</source>
        <translation> pies</translation>
    </message>
    <message>
        <location filename="../src/core/qgsdistancearea.cpp" line="721"/>
        <source> sq.deg.</source>
        <translation> grados²</translation>
    </message>
    <message>
        <location filename="../src/core/qgsdistancearea.cpp" line="726"/>
        <source> degree</source>
        <translation> grado</translation>
    </message>
    <message>
        <location filename="../src/core/qgsdistancearea.cpp" line="728"/>
        <source> degrees</source>
        <translation> grados</translation>
    </message>
    <message>
        <location filename="../src/core/qgsdistancearea.cpp" line="732"/>
        <source> unknown</source>
        <translation> desconocido</translation>
    </message>
    <message>
        <location filename="../src/core/qgshttptransaction.cpp" line="294"/>
        <source>Received %1 of %2 bytes</source>
        <translation>Recibidos %1 de %2 bytes</translation>
    </message>
    <message>
        <location filename="../src/core/qgshttptransaction.cpp" line="300"/>
        <source>Received %1 bytes (total unknown)</source>
        <translation>Recibidos %1 bytes (total desconocido)</translation>
    </message>
    <message>
        <location filename="../src/core/qgshttptransaction.cpp" line="412"/>
        <source>Not connected</source>
        <translation>No conectado</translation>
    </message>
    <message>
        <location filename="../src/core/qgshttptransaction.cpp" line="418"/>
        <source>Looking up &apos;%1&apos;</source>
        <translation>Buscando &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="../src/core/qgshttptransaction.cpp" line="425"/>
        <source>Connecting to &apos;%1&apos;</source>
        <translation>Conectando a &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="../src/core/qgshttptransaction.cpp" line="432"/>
        <source>Sending request &apos;%1&apos;</source>
        <translation>Enviando petición &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="../src/core/qgshttptransaction.cpp" line="439"/>
        <source>Receiving reply</source>
        <translation>Recibiendo respuesta</translation>
    </message>
    <message>
        <location filename="../src/core/qgshttptransaction.cpp" line="445"/>
        <source>Response is complete</source>
        <translation>La respuesta está completa</translation>
    </message>
    <message>
        <location filename="../src/core/qgshttptransaction.cpp" line="451"/>
        <source>Closing down connection</source>
        <translation>Cerrando la conexión</translation>
    </message>
    <message>
        <location filename="../src/core/qgsproject.cpp" line="755"/>
        <source>Unable to open </source>
        <translation>No se puede abrir </translation>
    </message>
    <message>
        <location filename="../src/core/qgssearchtreenode.cpp" line="253"/>
        <source>Regular expressions on numeric values don&apos;t make sense. Use comparison instead.</source>
        <translation>Las expresiones regulares sobre valores numéricos no tienen sentido. Use la comparación en su lugar.</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgspggeoprocessing.cpp" line="46"/>
        <source>Geoprocessing functions for working with PostgreSQL/PostGIS layers</source>
        <translation>Funciones de geoprocesamiento para trabajar con capas PostgreSQL/PostGIS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="114"/>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="117"/>
        <source>Location: </source>
        <comment>Metadata in GRASS Browser</comment>
        <translation>Localización: </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="117"/>
        <source>&lt;br&gt;Mapset: </source>
        <comment>Metadata in GRASS Browser</comment>
        <translation>&lt;br&gt;Directorio de mapas: </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="121"/>
        <source>Location: </source>
        <translation>Localización: </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="121"/>
        <source>&lt;br&gt;Mapset: </source>
        <translation>&lt;br&gt;Directorio de mapas: </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="126"/>
        <source>&lt;b&gt;Raster&lt;/b&gt;</source>
        <translation>&lt;b&gt;Ráster&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="135"/>
        <source>Cannot open raster header</source>
        <translation>No se puede abrir la cabecera del ráster</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="139"/>
        <source>Rows</source>
        <translation>Filas</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="140"/>
        <source>Columns</source>
        <translation>Columnas</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="141"/>
        <source>N-S resolution</source>
        <translation>Resolución N-S</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="142"/>
        <source>E-W resolution</source>
        <translation>Resolución E-W</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="143"/>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="280"/>
        <source>North</source>
        <translation>Norte</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="144"/>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="282"/>
        <source>South</source>
        <translation>Sur</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="145"/>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="284"/>
        <source>East</source>
        <translation>Este</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="146"/>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="286"/>
        <source>West</source>
        <translation>Oeste</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="169"/>
        <source>Format</source>
        <translation>Formato</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="180"/>
        <source>Minimum value</source>
        <translation>Valor mínimo</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="181"/>
        <source>Maximum value</source>
        <translation>Valor máximo</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="192"/>
        <source>Data source</source>
        <translation>Fuente de datos</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="197"/>
        <source>Data description</source>
        <translation>Descripción de datos</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="206"/>
        <source>Comments</source>
        <translation>Comentarios</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="221"/>
        <source>Categories</source>
        <translation>Categorías</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="241"/>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="328"/>
        <source>&lt;b&gt;Vector&lt;/b&gt;</source>
        <translation>&lt;b&gt;Vectorial&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="254"/>
        <source>Points</source>
        <translation>Puntos</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="255"/>
        <source>Lines</source>
        <translation>Líneas</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="256"/>
        <source>Boundaries</source>
        <translation>Contornos</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="257"/>
        <source>Centroids</source>
        <translation>Centroides</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="260"/>
        <source>Faces</source>
        <translation>Caras</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="261"/>
        <source>Kernels</source>
        <translation>Kernels</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="264"/>
        <source>Areas</source>
        <translation>Áreas</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="265"/>
        <source>Islands</source>
        <translation>Islas</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="289"/>
        <source>Top</source>
        <translation>Arriba</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="290"/>
        <source>Bottom</source>
        <translation>Abajo</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="293"/>
        <source>yes</source>
        <translation>sí</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="293"/>
        <source>no</source>
        <translation>no</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="300"/>
        <source>History&lt;br&gt;</source>
        <translation>Historia&lt;br&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="329"/>
        <source>&lt;b&gt;Layer&lt;/b&gt;</source>
        <translation>&lt;b&gt;Capa&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="348"/>
        <source>Features</source>
        <translation>Objetos espaciales</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="357"/>
        <source>Driver</source>
        <translation>Controlador</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="358"/>
        <source>Database</source>
        <translation>Base de datos</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="359"/>
        <source>Table</source>
        <translation>Tabla</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodel.cpp" line="360"/>
        <source>Key column</source>
        <translation>Columna clave</translation>
    </message>
    <message>
        <location filename="../src/providers/grass/qgsgrass.cpp" line="441"/>
        <source>GISBASE is not set.</source>
        <translation>GISBASE no establecida.</translation>
    </message>
    <message>
        <location filename="../src/providers/grass/qgsgrass.cpp" line="446"/>
        <source> is not a GRASS mapset.</source>
        <translation> no es un directorio de mapas de GRASS.</translation>
    </message>
    <message>
        <location filename="../src/providers/grass/qgsgrass.cpp" line="480"/>
        <source>Cannot start </source>
        <translation>No se puede iniciar </translation>
    </message>
    <message>
        <location filename="../src/providers/grass/qgsgrass.cpp" line="454"/>
        <location filename="../src/providers/grass/qgsgrass.cpp" line="490"/>
        <source>Mapset is already in use.</source>
        <translation>El directorio de mapas ya está en uso.</translation>
    </message>
    <message>
        <location filename="../src/providers/grass/qgsgrass.cpp" line="505"/>
        <source>Temporary directory </source>
        <translation>El directorio temporal </translation>
    </message>
    <message>
        <location filename="../src/providers/grass/qgsgrass.cpp" line="505"/>
        <source> exist but is not writable</source>
        <translation> existe pero no se puede escribir</translation>
    </message>
    <message>
        <location filename="../src/providers/grass/qgsgrass.cpp" line="511"/>
        <source>Cannot create temporary directory </source>
        <translation>No se puede crear el directorio temporal </translation>
    </message>
    <message>
        <location filename="../src/providers/grass/qgsgrass.cpp" line="525"/>
        <source>Cannot create </source>
        <translation>No se puede crear </translation>
    </message>
    <message>
        <location filename="../src/providers/grass/qgsgrass.cpp" line="600"/>
        <source>Cannot remove mapset lock: </source>
        <translation>No se puede eliminar el bloqueo del directorio de mapas: </translation>
    </message>
    <message>
        <location filename="../src/providers/grass/qgsgrass.cpp" line="968"/>
        <location filename="../src/providers/grass/qgsgrass.cpp" line="985"/>
        <location filename="../src/providers/grass/qgsgrass.cpp" line="1021"/>
        <source>Warning</source>
        <translation>Atención</translation>
    </message>
    <message>
        <location filename="../src/providers/grass/qgsgrass.cpp" line="969"/>
        <source>Cannot read raster map region</source>
        <translation>No se puede la región del mapa ráster</translation>
    </message>
    <message>
        <location filename="../src/providers/grass/qgsgrass.cpp" line="986"/>
        <source>Cannot read vector map region</source>
        <translation>No se puede leer la región del mapa vectorial</translation>
    </message>
    <message>
        <location filename="../src/providers/grass/qgsgrass.cpp" line="1022"/>
        <source>Cannot read region</source>
        <translation>No se puede leer la región</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="2601"/>
        <source>Where is &apos;</source>
        <translation>¿Dónde está &apos;</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="2601"/>
        <source>original location: </source>
        <translation>localización original: </translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptoolidentify.cpp" line="121"/>
        <source>To identify features, you must choose an active layer by clicking on its name in the legend</source>
        <translation>Para identificar objetos espaciales, debe activar una capa haciendo clic en su nombre en la leyenda</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgspggeoprocessing.cpp" line="45"/>
        <source>PostgreSQL Geoprocessing</source>
        <translation>Geoprocesamiento PostgreSQL</translation>
    </message>
    <message>
        <location filename="../src/plugins/quick_print/quickprintplugin.cpp" line="38"/>
        <source>Quick Print</source>
        <translation>Impresión rápida</translation>
    </message>
    <message>
        <location filename="../src/plugins/quick_print/quickprintplugin.cpp" line="40"/>
        <source>Quick Print is a plugin to quickly print a map with minimal effort.</source>
        <translation>Impresión rápida es un complemento para imprimir rápidamente un mapa con el mínimo esfuerzo.</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptooladdfeature.cpp" line="435"/>
        <source>Could not remove polygon intersection</source>
        <translation>No se pudo eliminar la intersección de los polígonos</translation>
    </message>
    <message>
        <location filename="../src/core/qgsmaplayer.cpp" line="585"/>
        <source>The directory containing your dataset needs to be writeable!</source>
        <translation>Se tiene que poder escribir en el directorio que contiene su conjunto de datos.</translation>
    </message>
    <message>
        <location filename="../src/core/qgsmaplayer.cpp" line="599"/>
        <source>Created default style file as </source>
        <translation>Se ha creado el archivo de estilo predeterminado </translation>
    </message>
    <message>
        <location filename="../src/core/qgsproject.cpp" line="939"/>
        <source> is not writeable.</source>
        <translation> no se puede editar.</translation>
    </message>
    <message>
        <location filename="../src/core/qgsproject.cpp" line="940"/>
        <source>Please adjust permissions (if possible) and try again.</source>
        <translation>Por favor, ajuste los permisos (si es posible) y vuelva a intentarlo.</translation>
    </message>
    <message>
        <location filename="../src/python/qgspythonutilsimpl.cpp" line="64"/>
        <source>Couldn&apos;t load SIP module.</source>
        <translation>No se pudo cargar el módulo SIP.</translation>
    </message>
    <message>
        <location filename="../src/python/qgspythonutilsimpl.cpp" line="64"/>
        <location filename="../src/python/qgspythonutilsimpl.cpp" line="72"/>
        <location filename="../src/python/qgspythonutilsimpl.cpp" line="79"/>
        <source>Python support will be disabled.</source>
        <translation>El soporte para Python estará deshabilitado.</translation>
    </message>
    <message>
        <location filename="../src/python/qgspythonutilsimpl.cpp" line="72"/>
        <source>Couldn&apos;t load PyQt4.</source>
        <translation>No se pudo cargar PyQt4.</translation>
    </message>
    <message>
        <location filename="../src/python/qgspythonutilsimpl.cpp" line="79"/>
        <source>Couldn&apos;t load PyQGIS.</source>
        <translation>No se pudo cargar PyQGIS.</translation>
    </message>
    <message>
        <location filename="../src/python/qgspythonutilsimpl.cpp" line="90"/>
        <source>An error has occured while executing Python code:</source>
        <translation>Ha ocurrido un error mientras se ejecutaba el código de Python:</translation>
    </message>
    <message>
        <location filename="../src/python/qgspythonutilsimpl.cpp" line="94"/>
        <location filename="../src/python/qgspythonutilsimpl.cpp" line="194"/>
        <source>Python version:</source>
        <translation>Versión de Python:</translation>
    </message>
    <message>
        <location filename="../src/python/qgspythonutilsimpl.cpp" line="95"/>
        <location filename="../src/python/qgspythonutilsimpl.cpp" line="195"/>
        <source>Python path:</source>
        <translation>Ruta de Python:</translation>
    </message>
    <message>
        <location filename="../src/python/qgspythonutilsimpl.cpp" line="185"/>
        <source>An error occured during execution of following code:</source>
        <translation>Ocurrió un error durante la ejecución del siguiente código:</translation>
    </message>
    <message>
        <location filename="../src/providers/grass/qgsgrass.cpp" line="391"/>
        <source>Uncatched fatal GRASS error</source>
        <translation>Error fatal de GRASS no detectado</translation>
    </message>
    <message>
        <location filename="../src/core/qgsmaplayer.cpp" line="604"/>
        <source>ERROR: Failed to created default style file as %1 Check file permissions and retry.</source>
        <translation>ERROR: no se pudo crear el archivo de estilo predefinido como %1. Compruebe los permisos del archivo y vuelva a probar.</translation>
    </message>
    <message>
        <location filename="../src/core/composer/qgscomposerlegend.cpp" line="27"/>
        <source>Legend</source>
        <translation>Leyenda</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapture.cpp" line="50"/>
        <source>Coordinate Capture</source>
        <translation>Captura de coordenadas</translation>
    </message>
    <message>
        <location filename="../src/plugins/coordinate_capture/coordinatecapture.cpp" line="51"/>
        <source>Capture mouse coordinates in different CRS</source>
        <translation>Capturar las coordenadas del ratón en diferentes SRC</translation>
    </message>
    <message>
        <location filename="../src/plugins/dxf2shp_converter/dxf2shpconverter.cpp" line="37"/>
        <source>Dxf2Shp Converter</source>
        <translation>Conversor DxfaShp</translation>
    </message>
    <message>
        <location filename="../src/plugins/dxf2shp_converter/dxf2shpconverter.cpp" line="38"/>
        <source>Converts from dxf to shp file format</source>
        <translation>Convierte de formato de archivo dxf a shp</translation>
    </message>
    <message>
        <location filename="../src/plugins/interpolation/qgsgridfilewriter.cpp" line="65"/>
        <source>Interpolating...</source>
        <translation>Interpolando...</translation>
    </message>
    <message>
        <location filename="../src/plugins/interpolation/qgsgridfilewriter.cpp" line="65"/>
        <source>Abort</source>
        <translation>Abortar</translation>
    </message>
    <message>
        <location filename="../src/plugins/interpolation/qgsinterpolationplugin.cpp" line="22"/>
        <source>Interpolation plugin</source>
        <translation>Complemento de interpolación</translation>
    </message>
    <message>
        <location filename="../src/plugins/interpolation/qgsinterpolationplugin.cpp" line="23"/>
        <source>A plugin for interpolation based on vertices of a vector layer</source>
        <translation>Un complemento para interpolación basado en los vértices de una capa vectorial</translation>
    </message>
    <message>
        <location filename="../src/plugins/interpolation/qgsinterpolationplugin.cpp" line="24"/>
        <source>Version 0.001</source>
        <translation>Versión 0.001</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/plugin.cpp" line="33"/>
        <source>OGR Layer Converter</source>
        <translation>Conversor de capas OGR</translation>
    </message>
    <message>
        <location filename="../src/plugins/ogr_converter/plugin.cpp" line="34"/>
        <source>Translates vector layers between formats supported by OGR library</source>
        <translation>Traduce capas vectoriales entre formatos admitidos por la biblioteca OGR</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptoolselect.cpp" line="133"/>
        <source>CRS Exception</source>
        <translation>Excepción de SRC</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptoolselect.cpp" line="134"/>
        <source>Selection extends beyond layer&apos;s coordinate system.</source>
        <translation>La selección se extiende más allá del sistema de coordenadas de la capa.</translation>
    </message>
    <message>
        <location filename="../src/core/qgsmaplayer.cpp" line="545"/>
        <source>Loading style file </source>
        <translation>La carga del archivo de estilo </translation>
    </message>
    <message>
        <location filename="../src/core/qgsmaplayer.cpp" line="545"/>
        <source> failed because:</source>
        <translation> falló porque:</translation>
    </message>
    <message>
        <location filename="../src/core/qgsmaplayer.cpp" line="573"/>
        <source>Could not save symbology because:</source>
        <translation>No se pudo guardar la simbología porque:</translation>
    </message>
    <message>
        <location filename="../src/core/qgsproject.cpp" line="1024"/>
        <source>Unable to save to file. Your project may be corrupted on disk. Try clearing some space on the volume and check file permissions before pressing save again.</source>
        <translation>No se puede guardar en archivo. Puede que su proyecto esté dañado en el disco. Pruebe a liberar espacio en el volumen y compruebe los permisos de archivo antes de pulsar guardar de nuevo.</translation>
    </message>
    <message>
        <location filename="../src/app/qgspluginregistry.cpp" line="289"/>
        <source>Error Loading Plugin</source>
        <translation>Error al cargar el complemento</translation>
    </message>
    <message>
        <location filename="../src/app/qgspluginregistry.cpp" line="290"/>
        <source>There was an error loading a plugin.The following diagnostic information may help the QGIS developers resolve the issue:
%1.</source>
        <translation>Hubo un problema al cargar un complemento. La siguiente información de diagnóstico puede ayudar a los desarrolladores de QGIS a solucionar el asunto:
%1.</translation>
    </message>
    <message>
        <location filename="../src/app/qgspluginregistry.cpp" line="417"/>
        <source>Error when reading metadata of plugin </source>
        <translation>Error al leer metadatos del complemento </translation>
    </message>
</context>
<context>
    <name>QgisApp</name>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="215"/>
        <location filename="../src/app/qgisapp.cpp" line="370"/>
        <source>Quantum GIS - </source>
        <translation>Quantum GIS - </translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="325"/>
        <source>Checking database</source>
        <translation>Comprobando la base de datos</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="331"/>
        <source>Reading settings</source>
        <translation>Leyendo configuraciones</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="334"/>
        <source>Setting up the GUI</source>
        <translation>Configurando la interfaz gráfica de usuario (GUI)</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="394"/>
        <source>Restoring loaded plugins</source>
        <translation>Restableciendo complementos cargados</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="399"/>
        <source>Initializing file filters</source>
        <translation>Inicializando filtros de archivo</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="424"/>
        <source>Restoring window state</source>
        <translation>Restableciendo el estado de la ventana</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="428"/>
        <source>QGIS Ready!</source>
        <translation>¡QGIS preparado!</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="533"/>
        <source>&amp;New Project</source>
        <translation>&amp;Nuevo proyecto</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="536"/>
        <source>New Project</source>
        <translation>Nuevo proyecto</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="539"/>
        <source>&amp;Open Project...</source>
        <translation>&amp;Abrir proyecto...</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="542"/>
        <source>Open a Project</source>
        <translation>Abrir un proyecto</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="545"/>
        <source>&amp;Save Project</source>
        <translation>&amp;Guardar proyecto</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="548"/>
        <source>Save Project</source>
        <translation>Guardar proyecto</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="551"/>
        <source>Save Project &amp;As...</source>
        <translation>G&amp;uardar proyecto como...</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="554"/>
        <source>Save Project under a new name</source>
        <translation>Guardar proyecto con un nombre nuevo</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="557"/>
        <source>Save as Image...</source>
        <translation>Guardar como imagen...</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="560"/>
        <source>Save map as image</source>
        <translation>Guardar mapa como imagen</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="569"/>
        <source>Exit</source>
        <translation>Salir</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="572"/>
        <source>Exit QGIS</source>
        <translation>Salir de QGIS</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="791"/>
        <source>Add a Vector Layer</source>
        <translation>Añadir una capa vectorial</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="797"/>
        <source>Add a Raster Layer</source>
        <translation>Añadir una capa ráster</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="803"/>
        <source>Add a PostGIS Layer</source>
        <translation>Añadir una capa de PostGIS</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="782"/>
        <source>New Vector Layer...</source>
        <translation>Nueva capa vectorial...</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="785"/>
        <source>Create a New Vector Layer</source>
        <translation>Crear una capa vectorial nueva</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="842"/>
        <source>Remove Layer</source>
        <translation>Eliminar capa</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="845"/>
        <source>Remove a Layer</source>
        <translation>Eliminar una capa</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="864"/>
        <source>Show all layers in the overview map</source>
        <translation>Mostrar todas las capas en la vista general</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="867"/>
        <source>Remove All From Overview</source>
        <translation>Eliminar todo de la vista general</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="870"/>
        <source>Remove all layers from overview map</source>
        <translation>Eliminar todas las capas de la vista general</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="873"/>
        <source>Show All Layers</source>
        <translation>Mostrar todas las capas</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="876"/>
        <source>Show all layers</source>
        <translation>Mostrar todas las capas</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="879"/>
        <source>Hide All Layers</source>
        <translation>Ocultar todas las capas</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="882"/>
        <source>Hide all layers</source>
        <translation>Ocultar todas las capas</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="901"/>
        <source>Project Properties...</source>
        <translation>Propiedades del proyecto...</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="904"/>
        <source>Set project properties</source>
        <translation>Definir las propiedades del proyecto</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="907"/>
        <source>Options...</source>
        <translation>Opciones...</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="910"/>
        <source>Change various QGIS options</source>
        <translation>Cambiar varias opciones de QGIS</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="944"/>
        <source>Help Contents</source>
        <translation>Contenidos de la ayuda</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="951"/>
        <source>Help Documentation</source>
        <translation>Documentación de ayuda</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="954"/>
        <location filename="../src/app/qgisapp.cpp" line="959"/>
        <source>QGIS Home Page</source>
        <translation>Página web de QGIS</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="966"/>
        <source>About</source>
        <translation>Acerca de</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="967"/>
        <source>About QGIS</source>
        <translation>Acerca de QGIS</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="962"/>
        <source>Check Qgis Version</source>
        <translation>Comprobar versión de Qgis</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="963"/>
        <source>Check if your QGIS version is up to date (requires internet access)</source>
        <translation>Comprobar si su versión de QGIS está actualizada (requiere acceso a internet)</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="774"/>
        <source>Refresh</source>
        <translation>Actualizar</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="777"/>
        <source>Refresh Map</source>
        <translation>Actualizar mapa</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="692"/>
        <location filename="../src/app/qgisapp.cpp" line="695"/>
        <source>Zoom In</source>
        <translation>Acercar zum</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="698"/>
        <location filename="../src/app/qgisapp.cpp" line="701"/>
        <source>Zoom Out</source>
        <translation>Alejar zum</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="728"/>
        <source>Zoom Full</source>
        <translation>Zum general</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="731"/>
        <source>Zoom to Full Extents</source>
        <translation>Zum a toda la extensión</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="688"/>
        <source>Pan Map</source>
        <translation>Desplazar mapa</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="689"/>
        <source>Pan the map</source>
        <translation>Desplazar el mapa</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="746"/>
        <source>Zoom Last</source>
        <translation>Zum anterior</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="749"/>
        <source>Zoom to Last Extent</source>
        <translation>Zum a la extensión anterior</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="734"/>
        <location filename="../src/app/qgisapp.cpp" line="737"/>
        <source>Zoom to Layer</source>
        <translation>Zum a la capa</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="709"/>
        <source>Identify Features</source>
        <translation>Identificar objetos espaciales</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="712"/>
        <source>Click on features to identify them</source>
        <translation>Pulsar sobre los objetos espaciales para identificarlos</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="704"/>
        <location filename="../src/app/qgisapp.cpp" line="705"/>
        <source>Select Features</source>
        <translation>Seleccionar objetos espaciales</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="716"/>
        <source>Measure Line </source>
        <translation>Regla </translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="719"/>
        <source>Measure a Line</source>
        <translation>Regla</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="722"/>
        <source>Measure Area</source>
        <translation>Medir áreas</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="725"/>
        <source>Measure an Area</source>
        <translation>Medir un área</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="768"/>
        <location filename="../src/app/qgisapp.cpp" line="771"/>
        <source>Show Bookmarks</source>
        <translation>Mostrar marcadores</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="762"/>
        <source>New Bookmark...</source>
        <translation>Nuevo marcador...</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="765"/>
        <location filename="../src/app/qgisapp.cpp" line="5527"/>
        <source>New Bookmark</source>
        <translation>Nuevo marcador</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="813"/>
        <source>Add WMS Layer...</source>
        <translation>Añadir capa WMS...</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="857"/>
        <source>Add current layer to overview map</source>
        <translation>Añadir la capa actual a la vista general</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="890"/>
        <source>Open the plugin manager</source>
        <translation>Abrir el administrador de complementos</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="625"/>
        <source>Capture Point</source>
        <translation>Crear punto</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="628"/>
        <source>Capture Points</source>
        <translation>Crear puntos</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="632"/>
        <source>Capture Line</source>
        <translation>Crear línea</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="635"/>
        <source>Capture Lines</source>
        <translation>Crear líneas</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="639"/>
        <source>Capture Polygon</source>
        <translation>Crear polígono</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="642"/>
        <source>Capture Polygons</source>
        <translation>Crear polígonos</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="656"/>
        <location filename="../src/app/qgisapp.cpp" line="657"/>
        <source>Delete Selected</source>
        <translation>Borrar lo seleccionado</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="661"/>
        <location filename="../src/app/qgisapp.cpp" line="662"/>
        <source>Add Vertex</source>
        <translation>Añadir vértice</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="671"/>
        <location filename="../src/app/qgisapp.cpp" line="672"/>
        <source>Delete Vertex</source>
        <translation>Borrar vértice</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="666"/>
        <location filename="../src/app/qgisapp.cpp" line="667"/>
        <source>Move Vertex</source>
        <translation>Mover vértice</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="604"/>
        <source>Cut Features</source>
        <translation>Cortar objetos espaciales</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="607"/>
        <source>Cut selected features</source>
        <translation>Cortar los objetos espaciales seleccionados</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="611"/>
        <source>Copy Features</source>
        <translation>Copiar objetos espaciales</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="614"/>
        <source>Copy selected features</source>
        <translation>Copiar los objetos espaciales seleccionados</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="618"/>
        <source>Paste Features</source>
        <translation>Pegar objetos espaciales</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="621"/>
        <source>Paste selected features</source>
        <translation>Pegar los objetos espaciales seleccionados</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1055"/>
        <source>&amp;File</source>
        <translation>&amp;Archivo</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1059"/>
        <source>&amp;Open Recent Projects</source>
        <translation>Abrir proyectos &amp;recientes</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1122"/>
        <source>&amp;View</source>
        <translation>&amp;Ver</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1155"/>
        <source>&amp;Layer</source>
        <translation>&amp;Capa</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1187"/>
        <source>&amp;Settings</source>
        <translation>C&amp;onfiguración</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1204"/>
        <source>&amp;Plugins</source>
        <translation>Co&amp;mplementos</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1226"/>
        <source>&amp;Help</source>
        <translation>A&amp;yuda</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1248"/>
        <source>File</source>
        <translation>Archivo</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1265"/>
        <source>Manage Layers</source>
        <translation>Administrar capas</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1331"/>
        <source>Help</source>
        <translation>Ayuda</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1276"/>
        <source>Digitizing</source>
        <translation>Digitalización</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1297"/>
        <source>Map Navigation</source>
        <translation>Navegación de mapas</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1311"/>
        <source>Attributes</source>
        <translation>Atributos</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1325"/>
        <source>Plugins</source>
        <translation>Complementos</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1399"/>
        <source>Displays the current map scale</source>
        <translation>Muestra la escala del mapa actual</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1412"/>
        <source>Render</source>
        <translation>Representar</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1415"/>
        <source>When checked, the map layers are rendered in response to map navigation commands and other events. When not checked, no rendering is done. This allows you to add a large number of layers and symbolize them before rendering.</source>
        <translation>Cuando está marcada, las capas se representan respondiendo a los comandos de navegación y otros eventos. Cuando no está marcada, la representación no se hace. Esto permite añadir un gran número de capas y simbolizarlas antes de su representación.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1419"/>
        <source>Toggle map rendering</source>
        <translation>Conmutar la representación del mapa</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1447"/>
        <source>Ready</source>
        <translation>Preparado</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1633"/>
        <source>Map overview canvas. This canvas can be used to display a locator map that shows the current extent of the map canvas. The current extent is shown as a red rectangle. Any layer on the map can be added to the overview canvas.</source>
        <translation>Vista general del mapa. Esta vista puede usarse para visualizar un mapa de localización que muestra la extensión de la vista del mapa. La extensión actual se muestra como un rectángulo rojo. Cualquier capa del mapa se puede añadir a la vista general.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1698"/>
        <source>Map legend that displays all the layers currently on the map canvas. Click on the check box to turn a layer on or off. Double click on a layer in the legend to customize its appearance and set other properties.</source>
        <translation>Leyenda del mapa que muestra todas la capas actualmente en la vista del mapa. Marcar la casilla para conmutar su vista. Pulsar dos veces sobre una capa en la leyenda para personalizar su apariencia y ajustar otras propiedades.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1872"/>
        <source>Version</source>
        <translation>Versión</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1884"/>
        <source>New features</source>
        <translation>Nuevos objetos espaciales</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="383"/>
        <source>Checking provider plugins</source>
        <translation>Comprobando complementos del proveedor</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="387"/>
        <source>Starting Python</source>
        <translation>Iniciando Python</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="826"/>
        <source>Toggle editing</source>
        <translation>Conmutar edición</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="827"/>
        <source>Toggles the editing state of the current layer</source>
        <translation>Conmuta el estado de edición de la capa activa</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="676"/>
        <location filename="../src/app/qgisapp.cpp" line="677"/>
        <source>Add Ring</source>
        <translation>Añadir anillo</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="681"/>
        <source>Add Island</source>
        <translation>Añadir isla</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="682"/>
        <source>Add Island to multipolygon</source>
        <translation>Añadir isla a multipolígono</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1385"/>
        <source>Scale </source>
        <translation>Escala </translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1400"/>
        <source>Current map scale (formatted as x:y)</source>
        <translation>Escala actual del mapa (en formato X:Y)</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4764"/>
        <source>Map coordinates at mouse cursor position</source>
        <translation>Coordenadas del mapa en la posición del ratón</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="2203"/>
        <source>Open an OGR Supported Vector Layer</source>
        <translation>Abrir una capa vectorial soportada por OGR</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="2259"/>
        <source>is not a valid or recognized data source</source>
        <translation>no es una fuente de datos válida o reconocida</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="2260"/>
        <location filename="../src/app/qgisapp.cpp" line="5264"/>
        <source>Invalid Data Source</source>
        <translation>Fuente de datos no válida</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="2352"/>
        <source>Invalid Layer</source>
        <translation>Capa no válida</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="2352"/>
        <source>%1 is an invalid layer and cannot be loaded.</source>
        <translation>%1 es una capa no válida y no se puede cargar.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="2830"/>
        <source>Save As</source>
        <translation>Guardar como</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="2930"/>
        <source>Choose a QGIS project file to open</source>
        <translation>Seleccionar un archivo de proyecto de QGIS para abrir</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="2981"/>
        <location filename="../src/app/qgisapp.cpp" line="2992"/>
        <location filename="../src/app/qgisapp.cpp" line="3051"/>
        <source>QGIS Project Read Error</source>
        <translation>Error de lectura del proyecto de QGIS</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3053"/>
        <source>Try to find missing layers?</source>
        <translation>¿Buscar las capas perdidas?</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3069"/>
        <source>Unable to open project</source>
        <translation>No se puede abrir el proyecto</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3108"/>
        <source>Choose a QGIS project file</source>
        <translation>Seleccionar un archivo de proyecto de QGIS</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3142"/>
        <location filename="../src/app/qgisapp.cpp" line="3227"/>
        <source>Saved project to:</source>
        <translation>Proyecto guardado en:</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3154"/>
        <location filename="../src/app/qgisapp.cpp" line="3234"/>
        <source>Unable to save project</source>
        <translation>No se puede guardar el proyecto</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3155"/>
        <location filename="../src/app/qgisapp.cpp" line="3235"/>
        <source>Unable to save project to </source>
        <translation>No se puede guardar el proyecto en </translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3162"/>
        <location filename="../src/app/qgisapp.cpp" line="3241"/>
        <source>Unable to save project </source>
        <translation>No se puede guardar el proyecto </translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3299"/>
        <source>QGIS: Unable to load project</source>
        <translation>QGIS: No se puede cargar el proyecto</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3300"/>
        <source>Unable to load project </source>
        <translation>No se puede cargar el proyecto </translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3466"/>
        <source>Saved map image to</source>
        <translation>Imagen del mapa guardada en</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3736"/>
        <source>No Layer Selected</source>
        <translation>Ninguna capa seleccionada</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3737"/>
        <source>To delete features, you must select a vector layer in the legend</source>
        <translation>Para borrar objetos espaciales, debe seleccionar una capa vectorial en la leyenda</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3744"/>
        <source>No Vector Layer Selected</source>
        <translation>Ninguna capa vectorial seleccionada</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3745"/>
        <source>Deleting features only works on vector layers</source>
        <translation>Borrar objetos espaciales solo funciona en capas vectoriales</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3751"/>
        <source>Provider does not support deletion</source>
        <translation>El proveedor no soporta el borrado</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3752"/>
        <source>Data provider does not support deleting features</source>
        <translation>El proveedor de datos no soporta el borrado de objetos espaciales</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3758"/>
        <source>Layer not editable</source>
        <translation>Capa no editable</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3759"/>
        <source>The current layer is not editable. Choose &apos;Start editing&apos; in the digitizing toolbar.</source>
        <translation>La capa activa no se puede editar. Elegir &apos;Conmutar edición&apos; en la barra de herramientas Digitalización.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3765"/>
        <source>Problem deleting features</source>
        <translation>Problema al borrar objetos espaciales</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3766"/>
        <source>A problem occured during deletion of features</source>
        <translation>Ha ocurrido un problema durante el borrado de objetos espaciales</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4089"/>
        <source>Invalid scale</source>
        <translation>Escala no válida</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4275"/>
        <source>There is a new version of QGIS available</source>
        <translation>Hay una nueva versión de QGIS disponible</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4281"/>
        <source>You are running a development version of QGIS</source>
        <translation>Está utilizando una versión de desarrollo de QGIS</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4285"/>
        <source>You are running the current version of QGIS</source>
        <translation>Está utilizando la versión actualizada de QGIS</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4290"/>
        <source>Would you like more information?</source>
        <translation>¿Desea más información?</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4293"/>
        <location filename="../src/app/qgisapp.cpp" line="4306"/>
        <location filename="../src/app/qgisapp.cpp" line="4311"/>
        <location filename="../src/app/qgisapp.cpp" line="4339"/>
        <source>QGIS Version Information</source>
        <translation>Información de la versión de QGIS</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4299"/>
        <source>QGIS - Changes in SVN Since Last Release</source>
        <translation>QGIS - Cambios en el SVN desde la última versión</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4311"/>
        <source>Unable to get current version information from server</source>
        <translation>No se puede obtener información de la versión actual del servidor</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4325"/>
        <source>Connection refused - server may be down</source>
        <translation>Conexión rehusada - el servidor puede estar fuera de servicio</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4328"/>
        <source>QGIS server was not found</source>
        <translation>No se ha encontrado el servidor QGIS</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4331"/>
        <source>Network error while communicating with server</source>
        <translation>Error de red mientras se comunicaba con el servidor</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4334"/>
        <source>Unknown network socket error</source>
        <translation>Error de socket de red desconocido</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4339"/>
        <source>Unable to communicate with QGIS Version server</source>
        <translation>No se puede comunicar con el servidor de versión de QGIS</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4467"/>
        <location filename="../src/app/qgisapp.cpp" line="4512"/>
        <location filename="../src/app/qgisapp.cpp" line="5344"/>
        <source>Layer is not valid</source>
        <translation>La capa no es válida</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4468"/>
        <location filename="../src/app/qgisapp.cpp" line="4513"/>
        <location filename="../src/app/qgisapp.cpp" line="5345"/>
        <source>The layer is not a valid layer and can not be added to the map</source>
        <translation>La capa no es válida y no se puede añadir al mapa</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4557"/>
        <source>Save?</source>
        <translation>¿Guardar?</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4558"/>
        <source>Do you want to save the current project?</source>
        <translation>¿Quiere guardar el proyecto actual?</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4777"/>
        <source>Extents: </source>
        <translation>Extensiones: </translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="5170"/>
        <source>Open a GDAL Supported Raster Data Source</source>
        <translation>Abrir una fuente de datos ráster soportada por GDAL</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="5263"/>
        <source> is not a valid or recognized raster data source</source>
        <translation> no es una fuente de datos ráster válida o reconocida</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="5426"/>
        <source> is not a supported raster data source</source>
        <translation> no es una fuente de datos ráster soportada</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="5431"/>
        <source>Unsupported Data Source</source>
        <translation>Fuente de datos no soportada</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="5528"/>
        <source>Enter a name for the new bookmark:</source>
        <translation>Introducir un nombre para el nuevo marcador:</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4015"/>
        <location filename="../src/app/qgisapp.cpp" line="4028"/>
        <location filename="../src/app/qgisapp.cpp" line="5545"/>
        <source>Error</source>
        <translation>Error</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="5545"/>
        <source>Unable to create the bookmark. Your user database may be missing or corrupted</source>
        <translation>No se puede crear el marcador. Puede que falte su base de datos de usuario o esté dañada</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="646"/>
        <location filename="../src/app/qgisapp.cpp" line="647"/>
        <source>Move Feature</source>
        <translation>Mover objeto espacial</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="651"/>
        <location filename="../src/app/qgisapp.cpp" line="652"/>
        <source>Split Features</source>
        <translation>Dividir objetos espaciales</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="757"/>
        <source>Map Tips</source>
        <translation>Avisos del mapa</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="758"/>
        <source>Show information about a feature when the mouse is hovered over it</source>
        <translation>Mostrar información sobre un objeto espacial cuando se desliza el ratón sobre él</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1386"/>
        <source>Current map scale</source>
        <translation>Escala actual del mapa</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="5559"/>
        <source>Project file is older</source>
        <translation>El archivo del proyecto es más antiguo</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="5560"/>
        <source>&lt;p&gt;This project file was saved by an older version of QGIS.</source>
        <translation>&lt;p&gt;Este archivo de proyecto se guardó con una versión más antigua de QGIS.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="5561"/>
        <source> When saving this project file, QGIS will update it to the latest version, possibly rendering it useless for older versions of QGIS.</source>
        <translation> Cuando guarde este proyecto, QGIS lo actualizará a la última versión, dejándolo probablemente inservible para versiones anteriores de QGIS.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="5563"/>
        <source>&lt;p&gt;Even though QGIS developers try to maintain backwards compatibility, some of the information from the old project file might be lost.</source>
        <translation>&lt;P&gt;Incluso aunque los desarrolladores de QGIS tratan de mantener retrocompatibilidad, parte de la información del antiguo proyecto puede perderse.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="5566"/>
        <source> To improve the quality of QGIS, we appreciate if you file a bug report at %3.</source>
        <translation> Para mejorar la calidad de QGIS, agradecemos si rellena un informe de error en %3.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="5568"/>
        <source> Be sure to include the old project file, and state the version of QGIS you used to discover the error.</source>
        <translation> Asegúrese de incluir el archivo del antiguo proyecto e indicar la versión de QGIS que usó para descubrir el error.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="5570"/>
        <source>&lt;p&gt;To remove this warning when opening an older project file, uncheck the box &apos;%5&apos; in the %4 menu.</source>
        <translation>&lt;p&gt;Para eliminar este aviso al abrir un proyecto antiguo, desmarque la casilla &apos;%5&apos; en el menú %4.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="5572"/>
        <source>&lt;p&gt;Version of the project file: %1&lt;br&gt;Current version of QGIS: %2</source>
        <translation>&lt;p&gt;Versión del archivo de proyecto: %1 &lt;br&gt;Versión actual de QGIS: %2</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="5576"/>
        <source>&lt;tt&gt;Settings:Options:General&lt;/tt&gt;</source>
        <comment>Menu path to setting options</comment>
        <translation>&lt;tt&gt;Configuración:Opciones:General&lt;/tt&gt;</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="5577"/>
        <source>Warn me when opening a project file saved with an older version of QGIS</source>
        <translation>Avisarme al abrir archivos de proyecto guardados con una versión anterior de QGIS</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="898"/>
        <source>Toggle fullscreen mode</source>
        <translation>Cambiar el modo de pantalla completa</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1432"/>
        <source>Resource Location Error</source>
        <translation>Error en la localización de recursos</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1433"/>
        <source>Error reading icon resources from: 
 %1
 Quitting...</source>
        <translation>Error al leer recursos de iconos de: 
 %1
 Saliendo...</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1642"/>
        <source>Overview</source>
        <translation>Vista general</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1699"/>
        <source>Legend</source>
        <translation>Leyenda</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1851"/>
        <source>You are using QGIS version %1 built against code revision %2.</source>
        <translation>Está usando la versión %1 de QGIS compilada contra la revisión %2 del código.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1856"/>
        <source> This copy of QGIS has been built with PostgreSQL support.</source>
        <translation> Esta copia de QGIS se ha compilado con soporte para PostgreSQL.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1859"/>
        <source> This copy of QGIS has been built without PostgreSQL support.</source>
        <translation> Esta copia de QGIS se ha compilado sin soporte para PostgreSQL.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1861"/>
        <source>
This binary was compiled against Qt %1,and is currently running against Qt %2</source>
        <translation>
Este binario se compiló contra Qt %1 y se está ejecutando contra Qt %2</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1348"/>
        <source>Progress bar that displays the status of rendering layers and other time-intensive operations</source>
        <translation>Barra de progreso que muestra el estado de la renderización de capas y otras operaciones prolongadas</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1373"/>
        <source>Shows the map coordinates at the current cursor position. The display is continuously updated as the mouse is moved.</source>
        <translation>Muestra las coordenadas del mapa en la posición actual del cursor. Se actualiza continuamente a medida que se mueve el ratón.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1409"/>
        <source>Stop map rendering</source>
        <translation>Detener la renderización del mapa</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1584"/>
        <source>Map canvas. This is where raster and vector layers are displayed when added to the map</source>
        <translation>Vista del mapa. Aquí es donde se visualizan las capas ráster y vectoriales cuando se añaden al mapa</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="315"/>
        <source>Multiple Instances of QgisApp</source>
        <translation>Múltiples instancias de QgisApp</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="316"/>
        <source>Multiple instances of Quantum GIS application object detected.
Please contact the developers.
</source>
        <translation>Se detectaron múltiples instancias de objetos de la aplicación Quantum GIS.
Por favor, contacte con los desarrolladores.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="563"/>
        <source>&amp;Print Composer</source>
        <translation>Diseñador de im&amp;presión</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="566"/>
        <source>Print Composer</source>
        <translation>Diseñador de impresión</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="579"/>
        <source>&amp;Undo</source>
        <translation>&amp;Deshacer</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="580"/>
        <source>Ctrl+Z</source>
        <translation>Ctrl+Z</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="582"/>
        <source>Undo the last operation</source>
        <translation>Deshacer la última operación</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="585"/>
        <source>Cu&amp;t</source>
        <translation>C&amp;ortar</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="586"/>
        <location filename="../src/app/qgisapp.cpp" line="605"/>
        <source>Ctrl+X</source>
        <translation>Ctrl+X</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="588"/>
        <source>Cut the current selection&apos;s contents to the clipboard</source>
        <translation>Cortar el contenido de la selección actual y guardar en el portapapeles</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="591"/>
        <source>&amp;Copy</source>
        <translation>&amp;Copiar</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="592"/>
        <location filename="../src/app/qgisapp.cpp" line="612"/>
        <source>Ctrl+C</source>
        <translation>Ctrl+C</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="594"/>
        <source>Copy the current selection&apos;s contents to the clipboard</source>
        <translation>Copiar el contenido de la selección actual en el portapapeles</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="597"/>
        <source>&amp;Paste</source>
        <translation>&amp;Pegar</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="598"/>
        <location filename="../src/app/qgisapp.cpp" line="619"/>
        <source>Ctrl+V</source>
        <translation>Ctrl+V</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="600"/>
        <source>Paste the clipboard&apos;s contents into the current selection</source>
        <translation>Pegar el contenido del portapapeles en la selección actual</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="740"/>
        <location filename="../src/app/qgisapp.cpp" line="743"/>
        <source>Zoom to Selection</source>
        <translation>Zum a la selección</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="752"/>
        <source>Zoom Actual Size</source>
        <translation>Zum al tamaño real</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="753"/>
        <source>Zoom to Actual Size</source>
        <translation>Zum al tamaño real</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="788"/>
        <source>Add Vector Layer...</source>
        <translation>Añadir capa vectorial...</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="794"/>
        <source>Add Raster Layer...</source>
        <translation>Añadir capa ráster...</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="800"/>
        <source>Add PostGIS Layer...</source>
        <translation>Añadir capa PostGIS...</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="816"/>
        <source>Add a Web Mapping Server Layer</source>
        <translation>Añadir una capa de Servidor de Mapas Web (WMS)</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="819"/>
        <location filename="../src/app/qgisapp.cpp" line="822"/>
        <source>Open Attribute Table</source>
        <translation>Abrir tabla de atributos</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="832"/>
        <source>Save as Shapefile...</source>
        <translation>Guardar como archivo shape...</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="833"/>
        <source>Save the current layer as a shapefile</source>
        <translation>Guardar la capa actual como un archivo shape</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="837"/>
        <source>Save Selection as Shapefile...</source>
        <translation>Guardar la selección como archivo shape...</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="838"/>
        <source>Save the selection as a shapefile</source>
        <translation>Guardar la selección como un archivo shape</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="849"/>
        <source>Properties...</source>
        <translation>Propiedades...</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="850"/>
        <source>Set properties of the current layer</source>
        <translation>Establecer las propiedades de la capa actual</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="854"/>
        <source>Add to Overview</source>
        <translation>Añadir a la vista general</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="861"/>
        <source>Add All to Overview</source>
        <translation>Añadir todo a la vista general</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="887"/>
        <source>Manage Plugins...</source>
        <translation>Administrar complementos...</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="895"/>
        <source>Toggle Full Screen Mode</source>
        <translation>Conmutar el modo de pantalla completa</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="914"/>
        <source>Custom CRS...</source>
        <translation>SRC personalizado...</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="917"/>
        <source>Manage custom coordinate reference systems</source>
        <translation>Administrar sistemas de referencia de coordenadas personalizados</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="924"/>
        <source>Minimize</source>
        <translation>Minimizar</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="927"/>
        <source>Minimizes the active window to the dock</source>
        <translation>Minimiza la ventana activa</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="930"/>
        <source>Zoom</source>
        <translation>Zum</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="931"/>
        <source>Toggles between a predefined size and the window size set by the user</source>
        <translation>Alterna entre un tamaño predefinido y el tamaño de ventana establecido por el usuario</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="934"/>
        <source>Bring All to Front</source>
        <translation>Traer todo al frente</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="935"/>
        <source>Bring forward all open windows</source>
        <translation>Traer hacia delante todas las ventanas abiertas</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1083"/>
        <source>&amp;Edit</source>
        <translation>&amp;Edición</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1117"/>
        <source>Panels</source>
        <translation>Paneles</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1118"/>
        <source>Toolbars</source>
        <translation>Barras de herramientas</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1213"/>
        <source>&amp;Window</source>
        <translation>&amp;Ventana</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1362"/>
        <source>Toggle extents and mouse position display</source>
        <translation>Conmuta la visualización de la extensión y la posición del ratón</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1438"/>
        <source>This icon shows whether on the fly coordinate reference system transformation is enabled or not. Click the icon to bring up the project properties dialog to alter this behaviour.</source>
        <translation>Este icono muestra si está activada o no la transformación al vuelo del sistema de referencia de coordenadas. Pulse el icono para mostrar el diálogo de propiedades del proyecto para cambiar este comportamiento.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1442"/>
        <source>CRS status - Click to open coordinate reference system dialog</source>
        <translation>Estado del SRC. Pulse para abrir el diálogo de sistema de referencia de coordenadas</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3183"/>
        <source>Choose a file name to save the QGIS project file as</source>
        <translation>Seleccione un nombre de archivo para guardar el archivo de proyecto de QGIS</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3424"/>
        <source>Choose a file name to save the map image as</source>
        <translation>Seleccione un nombre de archivo para guardar la imagen del mapa</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3998"/>
        <source>Start editing failed</source>
        <translation>Ha fallado el comienzo de la edición</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="3998"/>
        <source>Provider cannot be opened for editing</source>
        <translation>El proveedor no se puede abrir para editar</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4006"/>
        <source>Stop editing</source>
        <translation>Detener edición</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4007"/>
        <source>Do you want to save the changes to layer %1?</source>
        <translation>¿Quiere guardar los cambios en la capa %1?</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4016"/>
        <source>Could not commit changes to layer %1

Errors:  %2
</source>
        <translation>No se pudieron transferir los cambios en la capa %1

Errores: %2</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4028"/>
        <source>Problems during roll back</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4216"/>
        <source>Python Console</source>
        <translation>Consola de Python</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4757"/>
        <source>Map coordinates for the current view extents</source>
        <translation>Coordenadas del mapa para la extensión actual de la vista</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="4849"/>
        <source>Maptips require an active layer</source>
        <translation>Los avisos del mapa requieren una capa activa</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1889"/>
        <source>HIG Compliance improvements for Windows / Mac OS X / KDE / Gnome</source>
        <translation>Mejoras en el cumplimiento de HIG para Windows /Mac OS X / KDE Gnome</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1892"/>
        <source>Saving a vector layer or subset of that layer to disk with a different Coordinate Reference System to the original.</source>
        <translation>Guardado de capas vectoriales o subconjuntos de capas en disco con un Sistema de Referencia de Coordenadas distinto del original.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1895"/>
        <source>Advanced topological editing of vector data.</source>
        <translation>Edición topológica avanzada para datos vectoriales.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1898"/>
        <source>Single click selection of vector features.</source>
        <translation>Selección con un solo clic de objetos espaciales vectoriales.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1901"/>
        <source>Many improvements to raster rendering and support for building pyramids external to the raster file.</source>
        <translation>Muchas mejoras en el renderizado ráster y capacidad de construir pirámides externas al archivo ráster.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1904"/>
        <source>Overhaul of the map composer for much improved printing support.</source>
        <translation>Revisión del diseñador de mapas para una capacidad de impresión muy mejorada.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1907"/>
        <source>A new &apos;coordinate capture&apos; plugin was added that lets you click on the map and then cut &amp; paste the coordinates to and from the clipboard.</source>
        <translation>Se añadió un complemento «Captura de coordenadas» nuevo que permite pulsar en el mapa con el ratón y cortar &amp; pegar las coordenadas a y desde el portapapeles.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1910"/>
        <source>A new plugin for converting between OGR supported formats was added.</source>
        <translation>Se añadió un complemento nuevo para convertir entre formatos admitidos por OGR.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1913"/>
        <source>A new plugin for converting from DXF files to shapefiles was added.</source>
        <translation>Se añadió un complemento nuevo para convertir de archivos DXF a archivos shape.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1916"/>
        <source>A new plugin was added for interpolating point features into ASCII grid layers.</source>
        <translation>Se añadió un complemento nuevo para interpolar objetos espaciales de tipo punto en capas de cuadrículas ASCII.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1922"/>
        <source>Plugin toolbar positions are now correctly saved when the application is closed.</source>
        <translation>Las posiciones de la barra de herramientas de complementos se guardan ahora correctamente al cerrar la aplicación.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1925"/>
        <source>In the WMS client, WMS standards support has been improved.</source>
        <translation>Se ha mejorado la capacidad para estándares WMS en el cliente WMS.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1928"/>
        <source>Complete API revision - we now have a stable API following well defined naming conventions.</source>
        <translation>Revisión completa de la API - ahora tenemos una API estable que sigue convenciones de nombres.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1931"/>
        <source>Ported all GDAL/OGR and GEOS usage to use C APIs only.</source>
        <translation>Migración de todo el uso de GDAL/OGR y GEOS para usar sólo la API de C.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1919"/>
        <source>The python plugin installer was completely overhauled, the new version having many improvements, including checking that the version of QGIS running will support a plugin that is being installed.</source>
        <translation>Se revisó completamente el instalador de complementos de python, con muchas mejoras en la nueva versión, incluyendo la comprobación de que la versión de QGIS que se está ejecutando admitirá un complemento que se está instalando.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1874"/>
        <location filename="../src/app/qgisapp.cpp" line="1879"/>
        <source>Changes</source>
        <translation>Cambios</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1875"/>
        <source>QGIS 1.0.2 is a bug fix release for the stable version of QGIS.A summary of the improvements can be found at https://trac.osgeo.org/qgis/query?status=closed&amp;milestone=Version+1.0.2</source>
        <translation>QGIS 1.0.2 es una versión de correción de errores de la versión estable de QGIS. Se puede encontrar un resumen de las mejoras en https://trac.osgeo.org/qgis/query?status=closed&amp;milestone=Version+1.0.2</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1880"/>
        <source>QGIS 1.0.1 is a bug fix release for the stable version of QGIS.A summary of the improvements can be found at https://trac.osgeo.org/qgis/query?status=closed&amp;milestone=Version+1.0.1</source>
        <translation>QGIS 1.0.1 es una versión de correción de errores de la versión estable de QGIS. Se puede encontrar un resumen de las mejoras en https://trac.osgeo.org/qgis/query?status=closed&amp;milestone=Version+1.0.1</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1934"/>
        <source>Vector editing overhaul - handling of geometry and attribute edit transactions is now handled transparently in one place.</source>
        <translation>Revisión de la edición vectorial - las transacciones de manejo de geometrías y de edición de atributos se hacen ahora de forma transparente en un sitio.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="1885"/>
        <source>The QGIS 1.0 release includes over 265 bug fixes and enhancements over the QGIS 0.11.0 release. In addition we have added the following new features:</source>
        <translation>La versión 1.0 de QGIS incluye más de 265 correciones de errores y mejoras con respecto a la versión 0.11.0. Además hemos añadido las siguientes funciones nuevas:</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="534"/>
        <source>Ctrl+N</source>
        <translation>Ctrl+N</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="540"/>
        <source>Ctrl+O</source>
        <translation type="unfinished">Ctrl+A</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="546"/>
        <source>Ctrl+S</source>
        <translation type="unfinished">Ctrl+S</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="552"/>
        <source>Shift+Ctrl+S</source>
        <translation>Mayúsculas+Ctrl+S</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="558"/>
        <source>Ctrl+I</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="564"/>
        <source>Ctrl+P</source>
        <translation>Ctrl+P</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="570"/>
        <source>Ctrl+Q</source>
        <translation type="unfinished">Ctrl+S</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="626"/>
        <source>.</source>
        <translation>.</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="633"/>
        <source>/</source>
        <translation>/</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="640"/>
        <source>Ctrl+/</source>
        <translation>Ctrl+/</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="693"/>
        <source>Ctrl++</source>
        <translation>Ctrl++</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="699"/>
        <source>Ctrl+-</source>
        <translation>Ctrl+-</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="710"/>
        <source>I</source>
        <translation>I</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="717"/>
        <source>M</source>
        <translation>M</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="723"/>
        <source>J</source>
        <translation>J</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="729"/>
        <source>F</source>
        <translation type="unfinished">G</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="741"/>
        <source>Ctrl+J</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="763"/>
        <source>Ctrl+B</source>
        <translation type="unfinished">Ctrl+M</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="769"/>
        <source>B</source>
        <translation type="unfinished">M</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="775"/>
        <source>Ctrl+R</source>
        <translation type="unfinished">Ctrl+A</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="783"/>
        <source>N</source>
        <translation>N</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="789"/>
        <source>V</source>
        <translation>V</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="795"/>
        <source>R</source>
        <translation>R</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="801"/>
        <source>D</source>
        <translation>D</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="814"/>
        <source>W</source>
        <translation type="unfinished">O</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="843"/>
        <source>Ctrl+D</source>
        <translation type="unfinished">Ctrl+E</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="855"/>
        <source>O</source>
        <translation type="unfinished">L</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="862"/>
        <source>+</source>
        <translation>+</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="868"/>
        <source>-</source>
        <translation>-</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="874"/>
        <source>S</source>
        <translation type="unfinished">S</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="880"/>
        <source>H</source>
        <translation type="unfinished">O</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="896"/>
        <source>Ctrl-F</source>
        <translation type="unfinished">C</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="902"/>
        <source>P</source>
        <translation>P</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="925"/>
        <source>Ctrl+M</source>
        <translation type="unfinished">Ctrl+R</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="946"/>
        <source>Ctrl+?</source>
        <translation>Ctrl+?</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="948"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="../src/app/qgisapp.cpp" line="956"/>
        <source>Ctrl+H</source>
        <translation type="unfinished">Ctrl+W</translation>
    </message>
</context>
<context>
    <name>QgisAppBase</name>
    <message>
        <location filename="../src/ui/qgisappbase.ui" line="13"/>
        <source>QGIS</source>
        <translation>QGIS</translation>
    </message>
</context>
<context>
    <name>QgsAbout</name>
    <message>
        <location filename="../src/ui/qgsabout.ui" line="13"/>
        <source>About Quantum GIS</source>
        <translation>Acerca de Quantum GIS</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsabout.ui" line="26"/>
        <source>About</source>
        <translation>Acerca de</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsabout.ui" line="65"/>
        <source>Version</source>
        <translation>Versión</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsabout.ui" line="129"/>
        <source>QGIS Home Page</source>
        <translation>Página web de QGIS</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsabout.ui" line="152"/>
        <source>What&apos;s New</source>
        <translation>Novedades</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsabout.ui" line="175"/>
        <source>Developers</source>
        <translation>Desarrolladores</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsabout.ui" line="189"/>
        <source>Providers</source>
        <translation>Proveedores</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsabout.ui" line="199"/>
        <source>Sponsors</source>
        <translation>Patrocinadores</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsabout.ui" line="230"/>
        <source>Ok</source>
        <translation>Aceptar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsabout.ui" line="50"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:x-large; font-weight:600;&quot;&gt;&lt;span style=&quot; font-size:x-large;&quot;&gt;Quantum GIS (QGIS)&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:x-large; font-weight:600;&quot;&gt;&lt;span style=&quot; font-size:x-large;&quot;&gt;Quantum GIS (QGIS)&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsabout.ui" line="91"/>
        <source>Quantum GIS is licensed under the GNU General Public License</source>
        <translation>Quantum GIS se distribuye bajo la Licencia Pública General GNU</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsabout.ui" line="104"/>
        <source>http://www.gnu.org/licenses</source>
        <translation>http://www.gnu.org/licenses</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsabout.ui" line="139"/>
        <source>Join our user mailing list</source>
        <translation>Únase a nuestra lista de correo de usuarios</translation>
    </message>
    <message>
        <location filename="../src/app/qgsabout.cpp" line="116"/>
        <source>&lt;p&gt;The following have sponsored QGIS by contributing money to fund development and other project costs&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/app/qgsabout.cpp" line="120"/>
        <source>Name</source>
        <translation type="unfinished">Nombre</translation>
    </message>
    <message>
        <location filename="../src/app/qgsabout.cpp" line="121"/>
        <source>Website</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/app/qgsabout.cpp" line="174"/>
        <source>Available QGIS Data Provider Plugins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/app/qgsabout.cpp" line="177"/>
        <source>Available Qt Database Plugins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/app/qgsabout.cpp" line="183"/>
        <source>Available Qt Image Plugins</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsAddAttrDialogBase</name>
    <message>
        <location filename="../src/ui/qgsaddattrdialogbase.ui" line="13"/>
        <source>Add Attribute</source>
        <translation>Añadir atributo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsaddattrdialogbase.ui" line="35"/>
        <source>Type:</source>
        <translation>Tipo:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsaddattrdialogbase.ui" line="22"/>
        <source>Name:</source>
        <translation>Nombre:</translation>
    </message>
</context>
<context>
    <name>QgsApplication</name>
    <message>
        <location filename="../src/core/qgsapplication.cpp" line="82"/>
        <source>Exception</source>
        <translation>Excepción</translation>
    </message>
</context>
<context>
    <name>QgsAttributeActionDialog</name>
    <message>
        <location filename="../src/app/qgsattributeactiondialog.cpp" line="150"/>
        <source>Select an action</source>
        <comment>File dialog window title</comment>
        <translation>Seleccionar una acción</translation>
    </message>
</context>
<context>
    <name>QgsAttributeActionDialogBase</name>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="247"/>
        <source>Remove the selected action</source>
        <translation>Eliminar la acción seleccionada</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="250"/>
        <source>Remove</source>
        <translation>Eliminar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="221"/>
        <source>Move the selected action down</source>
        <translation>Mover la acción seleccionada hacia abajo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="224"/>
        <source>Move down</source>
        <translation>Bajar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="211"/>
        <source>Move the selected action up</source>
        <translation>Mover la acción seleccionada hacia arriba</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="214"/>
        <source>Move up</source>
        <translation>Subir</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="144"/>
        <source>This list contains all actions that have been defined for the current layer. Add actions by entering the details in the controls below and then pressing the Insert action button. Actions can be edited here by double clicking on the item.</source>
        <translation>Esta lista contiene todas las acciones que han sido definidas para la capa actual. Añada acciones introduciendo los detalles en los controles inferiores y presionando el botón Insertar acción. Las acciones se pueden editar pulsando dos veces sobre ellas.</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="105"/>
        <source>The valid attribute names for this layer</source>
        <translation>Los nombres de atributo válidos para esta capa</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="112"/>
        <source>Inserts the selected field into the action, prepended with a %</source>
        <translation>Inserta el campo seleccionado en la acción, precedido con un %</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="115"/>
        <source>Insert field</source>
        <translation>Insertar campo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="185"/>
        <source>Update the selected action</source>
        <translation>Actualizar la acción seleccionada</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="188"/>
        <source>Update action</source>
        <translation>Actualizar acción</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="175"/>
        <source>Inserts the action into the list above</source>
        <translation>Inserta la acción en la lista de arriba</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="178"/>
        <source>Insert action</source>
        <translation>Insertar acción</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="122"/>
        <source>Captures any output from the action</source>
        <translation>Captura cualquier salida de la acción</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="125"/>
        <source>Captures the standard output or error generated by the action and displays it in a dialog box</source>
        <translation>Captura la salida estándar o el error generado por la acción y la muestra en un cuadro de diálogo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="128"/>
        <source>Capture output</source>
        <translation>Capturar salida</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="79"/>
        <source>Enter the action command here</source>
        <translation>Introduzca aquí el comando de acción</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="56"/>
        <source>Enter the action name here</source>
        <translation>Introduzca el nombre de la acción aquí</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="43"/>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="59"/>
        <source>Enter the name of an action here. The name should be unique (qgis will make it unique if necessary).</source>
        <translation>Introduzca el nombre de la acción aquí. El nombre debe ser único (QGIS lo hará único si es necesario).</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="66"/>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="82"/>
        <source>Enter the action here. This can be any program, script or command that is available on your system. When the action is invoked any set of characters that start with a % and then have the name of a field will be replaced by the value of that field. The special characters %% will be replaced by the value of the field that was selected. Double quote marks group text into single arguments to the program, script or command. Double quotes will be ignored if preceeded by a backslash</source>
        <translation>Introduzca la acción aquí. Ésta puede ser cualquier programa, script o comando que esté disponible en su sistema. Cuando se invoca una acción cualquier conjunto de caracteres que empiece por % y luego tenga el nombre de un campo se reemplazará con el valor de ese campo. Los caracteres especiales %% se reemplazarán por el valor del campo que se seleccionó. Las comillas dobles agrupan texto en argumentos simples para el programa, script o comando. Las comillas dobles se ignorarán si se preceden por una barra invertida (\)</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="46"/>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="157"/>
        <source>Name</source>
        <translation>Nombre</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="69"/>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="162"/>
        <source>Action</source>
        <translation>Acción</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="167"/>
        <source>Capture</source>
        <translation>Capturar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="19"/>
        <source>Attribute Actions</source>
        <translation>Acciones de atributos</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="37"/>
        <source>Action properties</source>
        <translation>Propiedades de acciones</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="89"/>
        <source>Browse for action</source>
        <translation>Explorar acciones</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="92"/>
        <source>Click to browse for an action</source>
        <translation>Pulse para explorar en busca de una acción</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="98"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributeactiondialogbase.ui" line="95"/>
        <source>Clicking the button will let you select an application to use as the action</source>
        <translation>Pulsar el botón le permitirá seleccionar una aplicación para usar como la acción</translation>
    </message>
</context>
<context>
    <name>QgsAttributeDialog</name>
    <message>
        <location filename="../src/app/qgsattributedialog.cpp" line="271"/>
        <source> (int)</source>
        <translation> (int)</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributedialog.cpp" line="275"/>
        <source> (dbl)</source>
        <translation> (dbl)</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributedialog.cpp" line="280"/>
        <source> (txt)</source>
        <translation> (txt)</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributedialog.cpp" line="256"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributedialog.cpp" line="315"/>
        <source>Select a file</source>
        <translation>Seleccionar un archivo</translation>
    </message>
</context>
<context>
    <name>QgsAttributeDialogBase</name>
    <message>
        <location filename="../src/ui/qgsattributedialogbase.ui" line="13"/>
        <source>Enter Attribute Values</source>
        <translation>Introducir valores de los atributos</translation>
    </message>
</context>
<context>
    <name>QgsAttributeTable</name>
    <message>
        <location filename="../src/app/qgsattributetable.cpp" line="357"/>
        <source>Run action</source>
        <translation>Ejecutar acción</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetable.cpp" line="631"/>
        <source>Updating selection...</source>
        <translation>Actualizando selección...</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetable.cpp" line="631"/>
        <source>Abort</source>
        <translation>Abortar</translation>
    </message>
</context>
<context>
    <name>QgsAttributeTableBase</name>
    <message>
        <location filename="../src/ui/qgsattributetablebase.ui" line="13"/>
        <source>Attribute Table</source>
        <translation>Tabla de atributos</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributetablebase.ui" line="148"/>
        <source>in</source>
        <translation>en</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributetablebase.ui" line="168"/>
        <source>Search</source>
        <translation>Búsqueda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributetablebase.ui" line="178"/>
        <source>Adva&amp;nced...</source>
        <translation>Ava&amp;nzado...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributetablebase.ui" line="181"/>
        <source>Alt+N</source>
        <translation>Alt+N</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributetablebase.ui" line="33"/>
        <source>Remove selection</source>
        <translation>Eliminar selección</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributetablebase.ui" line="50"/>
        <source>Move selected to top</source>
        <translation>Mover la selección arriba del todo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributetablebase.ui" line="60"/>
        <source>Ctrl+T</source>
        <translation>Ctrl+T</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributetablebase.ui" line="67"/>
        <source>Invert selection</source>
        <translation>Invertir selección</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributetablebase.ui" line="77"/>
        <source>Ctrl+S</source>
        <translation>Ctrl+S</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributetablebase.ui" line="84"/>
        <source>Copy selected rows to clipboard (Ctrl+C)</source>
        <translation>Copiar las filas seleccionadas al portapapeles (Ctrl+C)</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributetablebase.ui" line="87"/>
        <source>Copies the selected rows to the clipboard</source>
        <translation>Copia las filas seleccionadas al portapapeles</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributetablebase.ui" line="97"/>
        <source>Ctrl+C</source>
        <translation>Ctrl+C</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributetablebase.ui" line="107"/>
        <source>Zoom map to the selected rows</source>
        <translation>Zum a las filas seleccionadas </translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributetablebase.ui" line="135"/>
        <source>Search for</source>
        <translation>Buscar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributetablebase.ui" line="104"/>
        <source>Zoom map to the selected rows (Ctrl-J)</source>
        <translation>Acercar el mapa a las filas seleccionadas (Ctrl+F)</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributetablebase.ui" line="113"/>
        <source>Ctrl+J</source>
        <translation>Ctrl+F</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributetablebase.ui" line="207"/>
        <source>Toggle editing mode</source>
        <translation>Conmutar el modo edición</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsattributetablebase.ui" line="210"/>
        <source>Click to toggle table editing</source>
        <translation>Pulsar para conmutar la edición de la tabla</translation>
    </message>
</context>
<context>
    <name>QgsAttributeTableDisplay</name>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="117"/>
        <source>select</source>
        <translation>seleccionar</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="118"/>
        <source>select and bring to top</source>
        <translation>seleccionar y llevar arriba</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="119"/>
        <source>show only matching</source>
        <translation>mostrar solo coincidentes</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="361"/>
        <source>Search string parsing error</source>
        <translation>Buscar error de análisis de la cadena</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="368"/>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="409"/>
        <source>Search results</source>
        <translation>Resultados de la búsqueda</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="368"/>
        <source>You&apos;ve supplied an empty search string.</source>
        <translation>Ha suministrado una cadena de búsqueda vacía.</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="397"/>
        <source>Error during search</source>
        <translation>Error durante la búsqueda</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="408"/>
        <source>No matching features found.</source>
        <translation>No se han encontrado coincidencias.</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="125"/>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="132"/>
        <source>Attribute table - </source>
        <translation>Tabla de atributos - </translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="139"/>
        <source>QGIS</source>
        <translation>QGIS</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="143"/>
        <source>File</source>
        <translation>Archivo</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="144"/>
        <source>Close</source>
        <translation>Cerrar</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="144"/>
        <source>Ctrl+W</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="146"/>
        <source>Edit</source>
        <translation>Editar</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="147"/>
        <source>&amp;Undo</source>
        <translation>&amp;Deshacer</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="147"/>
        <source>Ctrl+Z</source>
        <translation>Ctrl+Z</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="150"/>
        <source>Cu&amp;t</source>
        <translation>Cor&amp;tar</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="150"/>
        <source>Ctrl+X</source>
        <translation>Ctrl+X</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="153"/>
        <source>&amp;Copy</source>
        <translation>&amp;Copiar</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="153"/>
        <source>Ctrl+C</source>
        <translation>Ctrl+C</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="154"/>
        <source>&amp;Paste</source>
        <translation>&amp;Pegar</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="154"/>
        <source>Ctrl+V</source>
        <translation>Ctrl+V</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="157"/>
        <source>Delete</source>
        <translation>Borrar</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="159"/>
        <source>Layer</source>
        <translation>Capa</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="161"/>
        <source>Zoom to Selection</source>
        <translation>Zum a la selección</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="161"/>
        <source>Ctrl+J</source>
        <translation>Ctrl+J</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="164"/>
        <source>Toggle Editing</source>
        <translation>Conmutar edición</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="170"/>
        <source>Table</source>
        <translation>Tabla</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="172"/>
        <source>Move to Top</source>
        <translation>Mover arriba</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="174"/>
        <source>Invert</source>
        <translation>Invertir</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="475"/>
        <source>bad_alloc exception</source>
        <translation>excepción bad_alloc</translation>
    </message>
    <message>
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="475"/>
        <source>Filling the attribute table has been stopped because there was no more virtual memory left</source>
        <translation>El relleno de la tabla de atributos se ha detenido porque no quedaba más memoria virtual</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/app/qgsattributetabledisplay.cpp" line="406"/>
        <source>Found %1 matching features.</source>
        <translation type="unfinished">
            <numerusform></numerusform>
        </translation>
    </message>
</context>
<context>
    <name>QgsBookmarks</name>
    <message>
        <location filename="../src/app/qgsbookmarks.cpp" line="158"/>
        <source>Really Delete?</source>
        <translation>¿Borrar realmente?</translation>
    </message>
    <message>
        <location filename="../src/app/qgsbookmarks.cpp" line="159"/>
        <source>Are you sure you want to delete the </source>
        <translation>¿Está seguro de que quiere borrar el marcador </translation>
    </message>
    <message>
        <location filename="../src/app/qgsbookmarks.cpp" line="159"/>
        <source> bookmark?</source>
        <translation> marcador?</translation>
    </message>
    <message>
        <location filename="../src/app/qgsbookmarks.cpp" line="175"/>
        <source>Error deleting bookmark</source>
        <translation>Error al borrar marcador</translation>
    </message>
    <message>
        <location filename="../src/app/qgsbookmarks.cpp" line="176"/>
        <source>Failed to delete the </source>
        <translation>Ha fallado el borrado del marcador </translation>
    </message>
    <message>
        <location filename="../src/app/qgsbookmarks.cpp" line="178"/>
        <source> bookmark from the database. The database said:
</source>
        <translation> marcador de la base de datos. La base de datos ha dicho:</translation>
    </message>
    <message>
        <location filename="../src/app/qgsbookmarks.cpp" line="58"/>
        <source>&amp;Delete</source>
        <translation>&amp;Borrar</translation>
    </message>
    <message>
        <location filename="../src/app/qgsbookmarks.cpp" line="59"/>
        <source>&amp;Zoom to</source>
        <translation>&amp;Zum a</translation>
    </message>
</context>
<context>
    <name>QgsBookmarksBase</name>
    <message>
        <location filename="../src/ui/qgsbookmarksbase.ui" line="13"/>
        <source>Geospatial Bookmarks</source>
        <translation>Marcadores geoespaciales</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsbookmarksbase.ui" line="29"/>
        <source>Name</source>
        <translation>Nombre</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsbookmarksbase.ui" line="34"/>
        <source>Project</source>
        <translation>Proyecto</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsbookmarksbase.ui" line="39"/>
        <source>Extent</source>
        <translation>Extensión</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsbookmarksbase.ui" line="44"/>
        <source>Id</source>
        <translation>Id</translation>
    </message>
</context>
<context>
    <name>QgsComposer</name>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="83"/>
        <source>QGIS - print composer</source>
        <translation>QGIS - diseñador de mapas</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="181"/>
        <source>Map 1</source>
        <translation>Mapa 1</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="473"/>
        <source>Big image</source>
        <translation>Imagen grande</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="474"/>
        <source>To create image </source>
        <translation>Crear imagen </translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="476"/>
        <source> requires circa </source>
        <translation> requiere cerca de </translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="477"/>
        <source> MB of memory</source>
        <translation> MB de memoria</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="504"/>
        <source>format</source>
        <translation>formato</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="597"/>
        <source>SVG warning</source>
        <translation>Aviso de SVG</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="598"/>
        <location filename="../src/app/composer/qgscomposer.cpp" line="1094"/>
        <source>Don&apos;t show this message again</source>
        <translation>No volver a mostrar este mensaje</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="624"/>
        <source>SVG Format</source>
        <translation>Formato SVG</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="94"/>
        <source>QGIS</source>
        <translation>QGIS</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="98"/>
        <source>File</source>
        <translation>Archivo</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="99"/>
        <source>Close</source>
        <translation>Cerrar</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="99"/>
        <source>Ctrl+W</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="105"/>
        <source>Edit</source>
        <translation>Editar</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="106"/>
        <source>&amp;Undo</source>
        <translation>&amp;Deshacer</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="106"/>
        <source>Ctrl+Z</source>
        <translation>Ctrl+Z</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="109"/>
        <source>Cu&amp;t</source>
        <translation>Cor&amp;tar</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="109"/>
        <source>Ctrl+X</source>
        <translation>Ctrl+X</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="111"/>
        <source>&amp;Copy</source>
        <translation>&amp;Copiar</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="111"/>
        <source>Ctrl+C</source>
        <translation>Ctrl+C</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="113"/>
        <source>&amp;Paste</source>
        <translation>&amp;Pegar</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="113"/>
        <source>Ctrl+V</source>
        <translation>Ctrl+V</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="115"/>
        <source>Delete</source>
        <translation>Borrar</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="118"/>
        <source>View</source>
        <translation>Ver</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="125"/>
        <source>Layout</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="527"/>
        <source>Choose a file name to save the map image as</source>
        <translation>Seleccione un nombre de archivo para guardar la imagen del mapa</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="623"/>
        <source>Choose a file name to save the map as</source>
        <translation>Seleccione un nombre de archivo para guardar el mapa</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="1092"/>
        <source>Project contains WMS layers</source>
        <translation>El proyecto contiene capas WMS</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="1093"/>
        <source>Some WMS servers (e.g. UMN mapserver) have a limit for the WIDTH and HEIGHT parameter. Printing layers from such servers may exceed this limit. If this is the case, the WMS layer will not be printed</source>
        <translation>Algunos servidores WMS (ej.: UMN mapserver) tiene un límite para los parámetros ANCHURA y ALTURA. Imprimir capas de esos servidores puede exceder este límite. Si es el caso, la capa WMS no se imprimirá.</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="602"/>
        <source>&lt;p&gt;The SVG export function in Qgis has several problems due to bugs and deficiencies in the </source>
        <translation>&lt;p&gt;La función de exportación a SVG de QGIS tiene varios problemas, debido a errores y deficiendias en el </translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="605"/>
        <source>Qt4 svg code. Of note, text does not appear in the SVG file and there are problems with the map bounding box clipping other items such as the legend or scale bar.&lt;/p&gt;</source>
        <translation>código svg de Qt4. A tener en cuenta, el texto no aparece en el archivo SVG y hay problemas con el recuadro del mapa que corta otros elementos como la leyenda o la barra de escala.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="610"/>
        <source>Qt4 svg code. In particular, there are problems with layers not being clipped to the map bounding box.&lt;/p&gt;</source>
        <translation>código svg de Qt4. En particular, hay problemas con las capas que no son cortadas por el recuadro del mapa.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposer.cpp" line="614"/>
        <source>If you require a vector-based output file from Qgis it is suggested that you try printing to PostScript if the SVG output is not satisfactory.&lt;/p&gt;</source>
        <translation>Si necesita obtener de QGIS un archivo de salida de base vectorial, se sugiere que prube a imprimir a PostScript si la salida SVG no es satisfactoria.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>QgsComposerBase</name>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="16"/>
        <source>MainWindow</source>
        <translation>Ventana principal</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="81"/>
        <source>General</source>
        <translation>General</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="134"/>
        <source>Composition</source>
        <translation>Diseño</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="142"/>
        <source>Item</source>
        <translation>Elemento</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="214"/>
        <source>Close</source>
        <translation>Cerrar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="194"/>
        <source>Help</source>
        <translation>Ayuda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="260"/>
        <source>&amp;Print...</source>
        <translation>Im&amp;primir...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="276"/>
        <source>Zoom In</source>
        <translation>Acercar zum</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="284"/>
        <source>Zoom Out</source>
        <translation>Alejar zum</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="295"/>
        <source>Add new map</source>
        <translation>Añadir mapa nuevo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="306"/>
        <source>Add new label</source>
        <translation>Añadir etiqueta nueva</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="317"/>
        <source>Add new vect legend</source>
        <translation>Añadir nueva leyenda vectorizada</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="328"/>
        <source>Select/Move item</source>
        <translation>Seleccionar/Mover elemento</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="355"/>
        <source>Add new scalebar</source>
        <translation>Añadir nueva barra de escala</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="366"/>
        <source>Refresh view</source>
        <translation>Actualizar vista</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="374"/>
        <source>Add Image</source>
        <translation>Añadir imagen</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="268"/>
        <source>Zoom Full</source>
        <translation>Zum general</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="292"/>
        <source>Add Map</source>
        <translation>Añadir mapa</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="303"/>
        <source>Add Label</source>
        <translation>Añadir etiqueta</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="314"/>
        <source>Add Vector Legend</source>
        <translation>Añadir leyenda vectorial</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="325"/>
        <source>Move Item</source>
        <translation>Mover elemento</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="336"/>
        <source>Export as Image...</source>
        <translation>Exportar como imagen...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="344"/>
        <source>Export as SVG...</source>
        <translation>Exportar como SVG...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="352"/>
        <source>Add Scalebar</source>
        <translation>Añadir barra de escala</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="363"/>
        <source>Refresh</source>
        <translation>Actualizar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="379"/>
        <source>Move Content</source>
        <translation>Mover contenido</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="382"/>
        <source>Move item content</source>
        <translation>Mover contenido del elemento</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="387"/>
        <source>Group</source>
        <translation>Agrupar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="390"/>
        <source>Group items</source>
        <translation>Agrupar elementos</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="395"/>
        <source>Ungroup</source>
        <translation>Desagrupar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="398"/>
        <source>Ungroup items</source>
        <translation>Desagrupar elementos</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="403"/>
        <source>Raise</source>
        <translation>Subir</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="406"/>
        <source>Raise selected items</source>
        <translation>Subir los elementos seleccionados</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="411"/>
        <source>Lower</source>
        <translation>Bajar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="414"/>
        <source>Lower selected items</source>
        <translation>Bajar los elementos seleccionados</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="419"/>
        <source>Bring to Front</source>
        <translation>Traer al frente</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="422"/>
        <source>Move selected items to top</source>
        <translation>Mover los elementos seleccionados arriba</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="427"/>
        <source>Send to Back</source>
        <translation>Enviar al fondo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerbase.ui" line="430"/>
        <source>Move selected items to bottom</source>
        <translation>Mover los elementos seleccionados abajo</translation>
    </message>
</context>
<context>
    <name>QgsComposerItemWidgetBase</name>
    <message>
        <location filename="../src/ui/qgscomposeritemwidgetbase.ui" line="13"/>
        <source>Form</source>
        <translation>Formulario</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposeritemwidgetbase.ui" line="19"/>
        <source>Composer item properties</source>
        <translation>Propiedades de elemento del diseñador</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposeritemwidgetbase.ui" line="25"/>
        <source>Color:</source>
        <translation>Color:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposeritemwidgetbase.ui" line="32"/>
        <source>Frame...</source>
        <translation>Marco...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposeritemwidgetbase.ui" line="39"/>
        <source>Background...</source>
        <translation>Fondo...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposeritemwidgetbase.ui" line="46"/>
        <source>Opacity:</source>
        <translation>Opacidad:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposeritemwidgetbase.ui" line="63"/>
        <source>Outline width: </source>
        <translation>Anchura de línea exterior: </translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposeritemwidgetbase.ui" line="73"/>
        <source>Frame</source>
        <translation>Marco</translation>
    </message>
</context>
<context>
    <name>QgsComposerLabelWidgetBase</name>
    <message>
        <location filename="../src/ui/qgscomposerlabelwidgetbase.ui" line="19"/>
        <source>Label Options</source>
        <translation>Opciones de etiquetas</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerlabelwidgetbase.ui" line="38"/>
        <source>Font</source>
        <translation>Tipo de letra</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerlabelwidgetbase.ui" line="45"/>
        <source>Margin (mm):</source>
        <translation>Margen (mm):</translation>
    </message>
</context>
<context>
    <name>QgsComposerLegendItemDialogBase</name>
    <message>
        <location filename="../src/ui/qgscomposerlegenditemdialogbase.ui" line="13"/>
        <source>Legend item properties</source>
        <translation>Propiedades del elemento de la leyenda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerlegenditemdialogbase.ui" line="19"/>
        <source>Item text:</source>
        <translation>Texto del elemento:</translation>
    </message>
</context>
<context>
    <name>QgsComposerLegendWidgetBase</name>
    <message>
        <location filename="../src/ui/qgscomposerlegendwidgetbase.ui" line="19"/>
        <source>Barscale Options</source>
        <translation>Opciones de la barra de escala</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerlegendwidgetbase.ui" line="25"/>
        <source>General</source>
        <translation>General</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerlegendwidgetbase.ui" line="33"/>
        <source>Title:</source>
        <translation>Título:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerlegendwidgetbase.ui" line="47"/>
        <source>Font:</source>
        <translation>Tipo de letra:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerlegendwidgetbase.ui" line="60"/>
        <source>Title...</source>
        <translation>Título...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerlegendwidgetbase.ui" line="67"/>
        <source>Layer...</source>
        <translation>Capa...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerlegendwidgetbase.ui" line="74"/>
        <source>Item...</source>
        <translation>Elemento...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerlegendwidgetbase.ui" line="85"/>
        <source>Symbol width: </source>
        <translation>Anchura de símbolo: </translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerlegendwidgetbase.ui" line="95"/>
        <source>Symbol height:</source>
        <translation>Altura de símbolo:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerlegendwidgetbase.ui" line="105"/>
        <source>Layer space: </source>
        <translation>Espacio de capa: </translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerlegendwidgetbase.ui" line="115"/>
        <source>Symbol space:</source>
        <translation>Espacio de símbolo:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerlegendwidgetbase.ui" line="129"/>
        <source>Icon label space:</source>
        <translation>Espacio de etiqueta de icono:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerlegendwidgetbase.ui" line="139"/>
        <source>Box space:</source>
        <translation>Espacio de recuadro:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerlegendwidgetbase.ui" line="154"/>
        <source>Legend items</source>
        <translation>Elementos de la leyenda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerlegendwidgetbase.ui" line="160"/>
        <source>down</source>
        <translation>abajo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerlegendwidgetbase.ui" line="167"/>
        <source>up</source>
        <translation>arriba</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerlegendwidgetbase.ui" line="174"/>
        <source>remove</source>
        <translation>eliminar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerlegendwidgetbase.ui" line="181"/>
        <source>edit...</source>
        <translation>editar...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerlegendwidgetbase.ui" line="188"/>
        <source>update</source>
        <translation>actualizar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerlegendwidgetbase.ui" line="195"/>
        <source>update all</source>
        <translation>actualizar todo</translation>
    </message>
</context>
<context>
    <name>QgsComposerMap</name>
    <message>
        <location filename="../src/core/composer/qgscomposermap.cpp" line="68"/>
        <location filename="../src/core/composer/qgscomposermap.cpp" line="83"/>
        <source>Map</source>
        <translation>Mapa</translation>
    </message>
    <message>
        <location filename="../src/core/composer/qgscomposermap.cpp" line="191"/>
        <source>Map will be printed here</source>
        <translation>El mapa se imprimirá aquí</translation>
    </message>
</context>
<context>
    <name>QgsComposerMapWidget</name>
    <message>
        <location filename="../src/app/composer/qgscomposermapwidget.cpp" line="40"/>
        <location filename="../src/app/composer/qgscomposermapwidget.cpp" line="107"/>
        <location filename="../src/app/composer/qgscomposermapwidget.cpp" line="215"/>
        <source>Cache</source>
        <translation>Caché</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposermapwidget.cpp" line="43"/>
        <location filename="../src/app/composer/qgscomposermapwidget.cpp" line="117"/>
        <location filename="../src/app/composer/qgscomposermapwidget.cpp" line="223"/>
        <source>Rectangle</source>
        <translation>Rectángulo</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposermapwidget.cpp" line="112"/>
        <location filename="../src/app/composer/qgscomposermapwidget.cpp" line="219"/>
        <source>Render</source>
        <translation>Representar</translation>
    </message>
</context>
<context>
    <name>QgsComposerMapWidgetBase</name>
    <message>
        <location filename="../src/ui/qgscomposermapwidgetbase.ui" line="19"/>
        <source>Map options</source>
        <translation>Opciones de mapa</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposermapwidgetbase.ui" line="25"/>
        <source>&lt;b&gt;Map&lt;/b&gt;</source>
        <translation>&lt;b&gt;Mapa&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposermapwidgetbase.ui" line="45"/>
        <source>Width</source>
        <translation>Anchura</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposermapwidgetbase.ui" line="61"/>
        <source>Height</source>
        <translation>Altura</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposermapwidgetbase.ui" line="83"/>
        <source>Scale:</source>
        <translation>Escala:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposermapwidgetbase.ui" line="93"/>
        <source>1:</source>
        <translation>1:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposermapwidgetbase.ui" line="106"/>
        <source>Map extent</source>
        <translation>Extensión del mapa</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposermapwidgetbase.ui" line="117"/>
        <source>X min:</source>
        <translation>X mín:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposermapwidgetbase.ui" line="124"/>
        <source>Y min:</source>
        <translation>Y mín:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposermapwidgetbase.ui" line="145"/>
        <source>X max:</source>
        <translation>X máx:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposermapwidgetbase.ui" line="155"/>
        <source>Y max:</source>
        <translation>Y máx:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposermapwidgetbase.ui" line="174"/>
        <source>set to map canvas extent</source>
        <translation>establecer a la extensión de la vista del mapa</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposermapwidgetbase.ui" line="197"/>
        <source>Preview</source>
        <translation>Vista preliminar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposermapwidgetbase.ui" line="220"/>
        <source>Update preview</source>
        <translation>Actualizar vista preliminar</translation>
    </message>
</context>
<context>
    <name>QgsComposerPictureWidget</name>
    <message>
        <location filename="../src/app/composer/qgscomposerpicturewidget.cpp" line="59"/>
        <source>Select svg or image file</source>
        <translation>Seleccionar svg o archivo de imagen</translation>
    </message>
</context>
<context>
    <name>QgsComposerPictureWidgetBase</name>
    <message>
        <location filename="../src/ui/qgscomposerpicturewidgetbase.ui" line="19"/>
        <source>Picture Options</source>
        <translation>Opciones de dibujo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerpicturewidgetbase.ui" line="57"/>
        <source>Browse...</source>
        <translation>Explorar...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerpicturewidgetbase.ui" line="74"/>
        <source>Width:</source>
        <translation>Anchura:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerpicturewidgetbase.ui" line="93"/>
        <source>Height:</source>
        <translation>Altura:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerpicturewidgetbase.ui" line="112"/>
        <source>Rotation:</source>
        <translation>Rotación:</translation>
    </message>
</context>
<context>
    <name>QgsComposerScaleBarWidget</name>
    <message>
        <location filename="../src/app/composer/qgscomposerscalebarwidget.cpp" line="34"/>
        <location filename="../src/app/composer/qgscomposerscalebarwidget.cpp" line="286"/>
        <source>Single Box</source>
        <translation>Recuadro simple</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposerscalebarwidget.cpp" line="35"/>
        <location filename="../src/app/composer/qgscomposerscalebarwidget.cpp" line="290"/>
        <source>Double Box</source>
        <translation>Recuadro doble</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposerscalebarwidget.cpp" line="36"/>
        <location filename="../src/app/composer/qgscomposerscalebarwidget.cpp" line="294"/>
        <location filename="../src/app/composer/qgscomposerscalebarwidget.cpp" line="298"/>
        <source>Line Ticks Middle</source>
        <translation>Línea con marcas en el centro</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposerscalebarwidget.cpp" line="37"/>
        <location filename="../src/app/composer/qgscomposerscalebarwidget.cpp" line="302"/>
        <source>Line Ticks Down</source>
        <translation>Línea con marcas en el abajo</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposerscalebarwidget.cpp" line="38"/>
        <location filename="../src/app/composer/qgscomposerscalebarwidget.cpp" line="306"/>
        <source>Line Ticks Up</source>
        <translation>Línea con marcas en el arriba</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposerscalebarwidget.cpp" line="39"/>
        <location filename="../src/app/composer/qgscomposerscalebarwidget.cpp" line="310"/>
        <source>Numeric</source>
        <translation>Numérico</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscomposerscalebarwidget.cpp" line="67"/>
        <location filename="../src/app/composer/qgscomposerscalebarwidget.cpp" line="148"/>
        <source>Map %1</source>
        <translation>Mapa %1</translation>
    </message>
</context>
<context>
    <name>QgsComposerScaleBarWidgetBase</name>
    <message>
        <location filename="../src/ui/qgscomposerscalebarwidgetbase.ui" line="19"/>
        <source>Barscale Options</source>
        <translation>Opciones de la barra de escala</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerscalebarwidgetbase.ui" line="25"/>
        <source>Segment size (map units):</source>
        <translation>Tamaño de segmento (unidades de mapa):</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerscalebarwidgetbase.ui" line="45"/>
        <source>Map units per bar unit:</source>
        <translation>Unidades de mapa por unidad de barra:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerscalebarwidgetbase.ui" line="62"/>
        <source>Number of segments:</source>
        <translation>Número de segmentos:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerscalebarwidgetbase.ui" line="75"/>
        <source>Segments left:</source>
        <translation>Segmentos a la izquierda:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerscalebarwidgetbase.ui" line="85"/>
        <source>Style:</source>
        <translation>Estilo:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerscalebarwidgetbase.ui" line="101"/>
        <source>Map:</source>
        <translation>Mapa:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerscalebarwidgetbase.ui" line="127"/>
        <source>Height (mm):</source>
        <translation>Altura (mm):</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerscalebarwidgetbase.ui" line="137"/>
        <source>Line width:</source>
        <translation>Anchura de línea:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerscalebarwidgetbase.ui" line="169"/>
        <source>Label space:</source>
        <translation>Espacio de etiqueta:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerscalebarwidgetbase.ui" line="179"/>
        <source>Box space:</source>
        <translation>Espacio de recuadro:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerscalebarwidgetbase.ui" line="189"/>
        <source>Unit label:</source>
        <translation>Etiqueta de unidades:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerscalebarwidgetbase.ui" line="211"/>
        <source>Font...</source>
        <translation>Tipo de letra...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposerscalebarwidgetbase.ui" line="218"/>
        <source>Color...</source>
        <translation>Color...</translation>
    </message>
</context>
<context>
    <name>QgsComposerVectorLegendBase</name>
    <message>
        <location filename="../src/ui/qgscomposervectorlegendbase.ui" line="21"/>
        <source>Vector Legend Options</source>
        <translation>Opciones de leyenda vectorizada</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposervectorlegendbase.ui" line="113"/>
        <source>Title</source>
        <translation>Título</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposervectorlegendbase.ui" line="92"/>
        <source>Map</source>
        <translation>Mapa</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposervectorlegendbase.ui" line="182"/>
        <source>Font</source>
        <translation>Fuente</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposervectorlegendbase.ui" line="167"/>
        <source>Box</source>
        <translation>Cajetín</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposervectorlegendbase.ui" line="53"/>
        <source>Preview</source>
        <translation>Previsualización</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposervectorlegendbase.ui" line="149"/>
        <source>Layers</source>
        <translation>Capas</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposervectorlegendbase.ui" line="154"/>
        <source>Group</source>
        <translation>Grupo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscomposervectorlegendbase.ui" line="159"/>
        <source>ID</source>
        <translation>ID</translation>
    </message>
</context>
<context>
    <name>QgsCompositionBase</name>
    <message>
        <location filename="../src/ui/qgscompositionbase.ui" line="19"/>
        <source>Composition</source>
        <translation>Diseño</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscompositionbase.ui" line="43"/>
        <source>Paper</source>
        <translation>Papel</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscompositionbase.ui" line="182"/>
        <source>Size</source>
        <translation>Tamaño</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscompositionbase.ui" line="166"/>
        <source>Units</source>
        <translation>Unidades</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscompositionbase.ui" line="150"/>
        <source>Width</source>
        <translation>Anchura</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscompositionbase.ui" line="134"/>
        <source>Height</source>
        <translation>Altura</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscompositionbase.ui" line="118"/>
        <source>Orientation</source>
        <translation>Orientación</translation>
    </message>
</context>
<context>
    <name>QgsCompositionWidget</name>
    <message>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="33"/>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="150"/>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="241"/>
        <source>Landscape</source>
        <translation>Horizontal</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="34"/>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="245"/>
        <source>Portrait</source>
        <translation>Vertical</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="61"/>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="95"/>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="110"/>
        <source>Custom</source>
        <translation>Personalizado</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="62"/>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="63"/>
        <source>A5 (148x210 mm)</source>
        <translation>A5 (148x210 mm)</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="64"/>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="65"/>
        <source>A4 (210x297 mm)</source>
        <translation>A4 (210x297 mm)</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="66"/>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="67"/>
        <source>A3 (297x420 mm)</source>
        <translation>A3 (297x420 mm)</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="68"/>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="69"/>
        <source>A2 (420x594 mm)</source>
        <translation>A2 (420x594 mm)</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="70"/>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="71"/>
        <source>A1 (594x841 mm)</source>
        <translation>A1 (594x841 mm)</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="72"/>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="73"/>
        <source>A0 (841x1189 mm)</source>
        <translation>A0 (841x1189 mm)</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="74"/>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="75"/>
        <source>B5 (176 x 250 mm)</source>
        <translation>B5 (176 x 250 mm)</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="76"/>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="77"/>
        <source>B4 (250 x 353 mm)</source>
        <translation>B4 (250 x 353 mm)</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="78"/>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="79"/>
        <source>B3 (353 x 500 mm)</source>
        <translation>B3 (353 x 500 mm)</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="80"/>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="81"/>
        <source>B2 (500 x 707 mm)</source>
        <translation>B2 (500 x 707 mm)</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="82"/>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="83"/>
        <source>B1 (707 x 1000 mm)</source>
        <translation>B1 (707 x 1000 mm)</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="84"/>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="85"/>
        <source>B0 (1000 x 1414 mm)</source>
        <translation>B0 (1000 x 1414 mm)</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="86"/>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="87"/>
        <source>Letter (8.5x11 inches)</source>
        <translation>Carta (8.5x11 pulgadas)</translation>
    </message>
    <message>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="88"/>
        <location filename="../src/app/composer/qgscompositionwidget.cpp" line="89"/>
        <source>Legal (8.5x14 inches)</source>
        <translation>Legal (8.5x14 pulgadas)</translation>
    </message>
</context>
<context>
    <name>QgsCompositionWidgetBase</name>
    <message>
        <location filename="../src/ui/qgscompositionwidgetbase.ui" line="19"/>
        <source>Composition</source>
        <translation>Diseño</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscompositionwidgetbase.ui" line="43"/>
        <source>Paper</source>
        <translation>Papel</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscompositionwidgetbase.ui" line="118"/>
        <source>Orientation</source>
        <translation>Orientación</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscompositionwidgetbase.ui" line="134"/>
        <source>Height</source>
        <translation>Altura</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscompositionwidgetbase.ui" line="150"/>
        <source>Width</source>
        <translation>Anchura</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscompositionwidgetbase.ui" line="166"/>
        <source>Units</source>
        <translation>Unidades</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscompositionwidgetbase.ui" line="182"/>
        <source>Size</source>
        <translation>Tamaño</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscompositionwidgetbase.ui" line="217"/>
        <source>Print quality (dpi)</source>
        <translation>Calidad de impresión (dpi)</translation>
    </message>
</context>
<context>
    <name>QgsContinuousColorDialogBase</name>
    <message>
        <location filename="../src/ui/qgscontinuouscolordialogbase.ui" line="13"/>
        <source>Continuous color</source>
        <translation>Color graduado</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscontinuouscolordialogbase.ui" line="119"/>
        <source>Draw polygon outline</source>
        <translation>Dibujar contorno del polígono</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscontinuouscolordialogbase.ui" line="109"/>
        <source>Classification Field:</source>
        <translation>Campo de clasificación:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscontinuouscolordialogbase.ui" line="93"/>
        <source>Minimum Value:</source>
        <translation>Valor mínimo:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscontinuouscolordialogbase.ui" line="80"/>
        <source>Outline Width:</source>
        <translation>Anchura del contorno:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscontinuouscolordialogbase.ui" line="54"/>
        <source>Maximum Value:</source>
        <translation>Valor máximo:</translation>
    </message>
</context>
<context>
    <name>QgsCoordinateTransform</name>
    <message>
        <location filename="../src/core/qgscoordinatetransform.cpp" line="483"/>
        <source>Failed</source>
        <translation>Ha fallado</translation>
    </message>
    <message>
        <location filename="../src/core/qgscoordinatetransform.cpp" line="483"/>
        <source>transform of</source>
        <translation>la transformación de</translation>
    </message>
    <message>
        <location filename="../src/core/qgscoordinatetransform.cpp" line="496"/>
        <source>with error: </source>
        <translation>con el error: </translation>
    </message>
    <message>
        <location filename="../src/core/qgscoordinatetransform.cpp" line="417"/>
        <source>The source spatial reference system (CRS) is not valid. </source>
        <translation>El sistema de referencia espacial (SRC) no es válido. </translation>
    </message>
    <message>
        <location filename="../src/core/qgscoordinatetransform.cpp" line="418"/>
        <location filename="../src/core/qgscoordinatetransform.cpp" line="425"/>
        <source>The coordinates can not be reprojected. The CRS is: </source>
        <translation>No se puede reproyectar las coordenadas. El SRC es: </translation>
    </message>
    <message>
        <location filename="../src/core/qgscoordinatetransform.cpp" line="424"/>
        <source>The destination spatial reference system (CRS) is not valid. </source>
        <translation>El sistema de referencia espacial de destino (SRC) no es válido. </translation>
    </message>
</context>
<context>
    <name>QgsCopyrightLabelPlugin</name>
    <message>
        <location filename="../src/plugins/copyright_label/plugin.cpp" line="64"/>
        <source>Bottom Left</source>
        <translation>Inferior izquierda</translation>
    </message>
    <message>
        <location filename="../src/plugins/copyright_label/plugin.cpp" line="64"/>
        <source>Top Left</source>
        <translation>Superior izquierda</translation>
    </message>
    <message>
        <location filename="../src/plugins/copyright_label/plugin.cpp" line="65"/>
        <source>Top Right</source>
        <translation>Superior derecha</translation>
    </message>
    <message>
        <location filename="../src/plugins/copyright_label/plugin.cpp" line="65"/>
        <source>Bottom Right</source>
        <translation>Inferior derecha</translation>
    </message>
    <message>
        <location filename="../src/plugins/copyright_label/plugin.cpp" line="77"/>
        <source>&amp;Copyright Label</source>
        <translation>Etiqueta de &amp;Copyright</translation>
    </message>
    <message>
        <location filename="../src/plugins/copyright_label/plugin.cpp" line="78"/>
        <source>Creates a copyright label that is displayed on the map canvas.</source>
        <translation>Crea una etiqueta de copyright que se muestra en la vista del mapa.</translation>
    </message>
    <message>
        <location filename="../src/plugins/copyright_label/plugin.cpp" line="88"/>
        <location filename="../src/plugins/copyright_label/plugin.cpp" line="202"/>
        <source>&amp;Decorations</source>
        <translation>&amp;Ilustraciones</translation>
    </message>
</context>
<context>
    <name>QgsCopyrightLabelPluginGuiBase</name>
    <message>
        <location filename="../src/plugins/copyright_label/pluginguibase.ui" line="13"/>
        <source>Copyright Label Plugin</source>
        <translation>Complemento etiqueta de copyright</translation>
    </message>
    <message>
        <location filename="../src/plugins/copyright_label/pluginguibase.ui" line="185"/>
        <source>Placement</source>
        <translation>Ubicación</translation>
    </message>
    <message>
        <location filename="../src/plugins/copyright_label/pluginguibase.ui" line="193"/>
        <source>Bottom Left</source>
        <translation>Inferior izquierda</translation>
    </message>
    <message>
        <location filename="../src/plugins/copyright_label/pluginguibase.ui" line="198"/>
        <source>Top Left</source>
        <translation>Superior izquierda</translation>
    </message>
    <message>
        <location filename="../src/plugins/copyright_label/pluginguibase.ui" line="203"/>
        <source>Bottom Right</source>
        <translation>Inferior derecha</translation>
    </message>
    <message>
        <location filename="../src/plugins/copyright_label/pluginguibase.ui" line="208"/>
        <source>Top Right</source>
        <translation>Superior derecha</translation>
    </message>
    <message>
        <location filename="../src/plugins/copyright_label/pluginguibase.ui" line="216"/>
        <source>Orientation</source>
        <translation>Orientación</translation>
    </message>
    <message>
        <location filename="../src/plugins/copyright_label/pluginguibase.ui" line="224"/>
        <source>Horizontal</source>
        <translation>Horizontal</translation>
    </message>
    <message>
        <location filename="../src/plugins/copyright_label/pluginguibase.ui" line="229"/>
        <source>Vertical</source>
        <translation>Vertical</translation>
    </message>
    <message>
        <location filename="../src/plugins/copyright_label/pluginguibase.ui" line="146"/>
        <source>Enable Copyright Label</source>
        <translation>Activar etiqueta de copyright</translation>
    </message>
    <message>
        <location filename="../src/plugins/copyright_label/pluginguibase.ui" line="57"/>
        <source>Color</source>
        <translation>Color</translation>
    </message>
    <message>
        <location filename="../src/plugins/copyright_label/pluginguibase.ui" line="98"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;span style=&quot; font-size:12pt;&quot;&gt;Description&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;Enter your copyright label below. This plugin supports basic html markup tags for formatting the label. For example:&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;&amp;lt;B&amp;gt; Bold text &amp;lt;/B&amp;gt; &lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;&lt;span style=&quot; font-weight:400; font-style:italic;&quot;&gt;&amp;lt;I&amp;gt; Italics &amp;lt;/I&amp;gt;&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-style:italic;&quot;&gt;&lt;span style=&quot; font-style:normal;&quot;&gt;(note: &amp;amp;copy; gives a copyright symbol)&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;span style=&quot; font-size:12pt;&quot;&gt;Description&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;Introduzca su etiqueta de copyright debajo. Este complemento admite etiquetas html básicas para dar formato a la etiqueta. Por ejemplo:&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;&amp;lt;B&amp;gt; Bold text &amp;lt;/B&amp;gt; &lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;&lt;span style=&quot; font-weight:400; font-style:italic;&quot;&gt;&amp;lt;I&amp;gt; Italics &amp;lt;/I&amp;gt;&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-style:italic;&quot;&gt;&lt;span style=&quot; font-style:normal;&quot;&gt;(note: &amp;amp;copy; proporciona un símbolo de copyright)&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/copyright_label/pluginguibase.ui" line="158"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;© QGIS 2008&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsCustomProjectionDialog</name>
    <message>
        <location filename="../src/app/qgscustomprojectiondialog.cpp" line="170"/>
        <source>Delete Projection Definition?</source>
        <translation>¿Borrar definición de proyección?</translation>
    </message>
    <message>
        <location filename="../src/app/qgscustomprojectiondialog.cpp" line="171"/>
        <source>Deleting a projection definition is not reversable. Do you want to delete it?</source>
        <translation>Borrar una definición de proyección no es reversible. ¿Desea continuar?</translation>
    </message>
    <message>
        <location filename="../src/app/qgscustomprojectiondialog.cpp" line="669"/>
        <location filename="../src/app/qgscustomprojectiondialog.cpp" line="696"/>
        <location filename="../src/app/qgscustomprojectiondialog.cpp" line="793"/>
        <location filename="../src/app/qgscustomprojectiondialog.cpp" line="847"/>
        <source>Abort</source>
        <translation>Abortar</translation>
    </message>
    <message>
        <location filename="../src/app/qgscustomprojectiondialog.cpp" line="674"/>
        <location filename="../src/app/qgscustomprojectiondialog.cpp" line="849"/>
        <source>New</source>
        <translation>Nueva</translation>
    </message>
    <message>
        <location filename="../src/app/qgscustomprojectiondialog.cpp" line="719"/>
        <location filename="../src/app/qgscustomprojectiondialog.cpp" line="725"/>
        <location filename="../src/app/qgscustomprojectiondialog.cpp" line="740"/>
        <location filename="../src/app/qgscustomprojectiondialog.cpp" line="771"/>
        <location filename="../src/app/qgscustomprojectiondialog.cpp" line="876"/>
        <location filename="../src/app/qgscustomprojectiondialog.cpp" line="891"/>
        <location filename="../src/app/qgscustomprojectiondialog.cpp" line="903"/>
        <source>QGIS Custom Projection</source>
        <translation>Proyección personalizada de QGIS</translation>
    </message>
    <message>
        <location filename="../src/app/qgscustomprojectiondialog.cpp" line="720"/>
        <source>This proj4 projection definition is not valid. Please give the projection a name before pressing save.</source>
        <translation>Esta definición de proyección proj4 no es válida. Por favor, dele un nombre a la proyección antes de guardar.</translation>
    </message>
    <message>
        <location filename="../src/app/qgscustomprojectiondialog.cpp" line="726"/>
        <source>This proj4 projection definition is not valid. Please add the parameters before pressing save.</source>
        <translation>Esta definición de proyección proj4 no es válida. Por favor, rellene los parámetros antes de guardar.</translation>
    </message>
    <message>
        <location filename="../src/app/qgscustomprojectiondialog.cpp" line="741"/>
        <source>This proj4 projection definition is not valid. Please add a proj= clause before pressing save.</source>
        <translation>Esta definición de proyección proj4 no es válida. Por favor, añada una cláusula proj= antes de guardar.</translation>
    </message>
    <message>
        <location filename="../src/app/qgscustomprojectiondialog.cpp" line="772"/>
        <source>This proj4 projection definition is not valid. Please correct before pressing save.</source>
        <translation>Esta definición de proyección proj4 no es válida. Por favor, corregir antes de guardar.</translation>
    </message>
    <message>
        <location filename="../src/app/qgscustomprojectiondialog.cpp" line="877"/>
        <source>This proj4 projection definition is not valid.</source>
        <translation>Esta definición de proyección proj4 no es válida.</translation>
    </message>
    <message>
        <location filename="../src/app/qgscustomprojectiondialog.cpp" line="892"/>
        <source>Northing and Easthing must be in decimal form.</source>
        <translation>El Norte y el Este deben estar en formato decimal.</translation>
    </message>
    <message>
        <location filename="../src/app/qgscustomprojectiondialog.cpp" line="904"/>
        <source>Internal Error (source projection invalid?)</source>
        <translation>Error interno (¿la proyección original no es válida?)</translation>
    </message>
</context>
<context>
    <name>QgsCustomProjectionDialogBase</name>
    <message>
        <location filename="../src/ui/qgscustomprojectiondialogbase.ui" line="22"/>
        <source>Define</source>
        <translation>Definición</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscustomprojectiondialogbase.ui" line="66"/>
        <source>|&lt;</source>
        <translation>|&lt;</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscustomprojectiondialogbase.ui" line="76"/>
        <source>&lt;</source>
        <translation>&lt;</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscustomprojectiondialogbase.ui" line="86"/>
        <source>1 of 1</source>
        <translation>1 de 1</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscustomprojectiondialogbase.ui" line="96"/>
        <source>&gt;</source>
        <translation>&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscustomprojectiondialogbase.ui" line="106"/>
        <source>&gt;|</source>
        <translation>&gt;|</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscustomprojectiondialogbase.ui" line="151"/>
        <source>Test</source>
        <translation>Probar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscustomprojectiondialogbase.ui" line="180"/>
        <source>Geographic / WGS84</source>
        <translation>Geográficas / WGS84</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscustomprojectiondialogbase.ui" line="253"/>
        <source>Calculate</source>
        <translation>Calcular</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscustomprojectiondialogbase.ui" line="38"/>
        <source>Name</source>
        <translation>Nombre</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscustomprojectiondialogbase.ui" line="51"/>
        <location filename="../src/ui/qgscustomprojectiondialogbase.ui" line="167"/>
        <source>Parameters</source>
        <translation>Parámetros</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscustomprojectiondialogbase.ui" line="116"/>
        <source>*</source>
        <translation>*</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscustomprojectiondialogbase.ui" line="126"/>
        <source>S</source>
        <translation>S</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscustomprojectiondialogbase.ui" line="136"/>
        <source>X</source>
        <translation>X</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscustomprojectiondialogbase.ui" line="194"/>
        <source>North</source>
        <translation>Norte</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscustomprojectiondialogbase.ui" line="224"/>
        <source>East</source>
        <translation>Este</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscustomprojectiondialogbase.ui" line="13"/>
        <source>Custom Coordinate Reference System Definition</source>
        <translation>Definición de sistema de referencia de coordenadas personalizado</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscustomprojectiondialogbase.ui" line="28"/>
        <source>You can define your own custom Coordinate Reference System (CRS) here. The definition must conform to the proj4 format for specifying a CRS.</source>
        <translation>Puede definir su propio Sistema de Referencia de Coordenadas (SRC) aquí. La definición debe ajustarse al formato proj4 para especificar un SRC.</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscustomprojectiondialogbase.ui" line="157"/>
        <source>Use the text boxes below to test the CRS definition you are creating. Enter a coordinate where both the lat/long and the transformed result are known (for example by reading off a map). Then press the calculate button to see if the CRS definition you are creating is accurate.</source>
        <translation>Use los cuadros de texto para probar la definición del SRC que está creando. Introduzca una coordenada donde tanto la lat/long como el resultado transformado sean conocidos (por ejemplo tomándolos de un mapa). Pulse luego el botón Calcular para ver si le definición del SRC que está creando es correcta.</translation>
    </message>
    <message>
        <location filename="../src/ui/qgscustomprojectiondialogbase.ui" line="187"/>
        <source>Destination CRS        </source>
        <translation>SCR de destino         </translation>
    </message>
</context>
<context>
    <name>QgsDbSourceSelect</name>
    <message>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="58"/>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="151"/>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="60"/>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="159"/>
        <source>Sql</source>
        <translation>Sql</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="234"/>
        <source>Are you sure you want to remove the </source>
        <translation>¿Está seguro de que quiere eliminar la conexión </translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="234"/>
        <source> connection and all associated settings?</source>
        <translation> y su configuración?</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="235"/>
        <source>Confirm Delete</source>
        <translation>Confirmar la eliminación</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="342"/>
        <source>Select Table</source>
        <translation>Seleccionar tabla</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="342"/>
        <source>You must select a table in order to add a Layer.</source>
        <translation>Debe seleccionar una tabla para poder añadir una capa.</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="403"/>
        <source>Password for </source>
        <translation>Contraseña para </translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="404"/>
        <source>Please enter your password:</source>
        <translation>Por favor, introduzca su contraseña:</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="454"/>
        <source>Connection failed</source>
        <translation>Conexión fallida</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="455"/>
        <source>Connection to %1 on %2 failed. Either the database is down or your settings are incorrect.%3Check your username and password and try again.%4The database said:%5%6</source>
        <translation>La conexión a %1 en %2 ha fallado. Puede ser que la base de datos esté inactiva o que su configuración sea incorrecta.%3Compruebe el nombre de usuario y la contraseña y pruebe de nuevo.%4La base de datos ha dicho:%5%6</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="52"/>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="127"/>
        <source>Wildcard</source>
        <translation>Comodín</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="53"/>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="131"/>
        <source>RegExp</source>
        <translation>Expresión regular</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="55"/>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="139"/>
        <source>All</source>
        <translation>Todos</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="56"/>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="143"/>
        <source>Schema</source>
        <translation>Esquema</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="57"/>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="147"/>
        <source>Table</source>
        <translation>Tabla</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="59"/>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="155"/>
        <source>Geometry column</source>
        <translation>Columna de geometría</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="567"/>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="638"/>
        <source>Accessible tables could not be determined</source>
        <translation>No se pudieron determinar las tablas accesibles</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="568"/>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="639"/>
        <source>Database connection was successful, but the accessible tables could not be determined.

The error message from the database was:
%1
</source>
        <translation>La conexión a la base de datos tuvo éxito, pero no se pudieron determinar las tablas accesibles.

El mensaje de error de la base de datos fue:
%1</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="674"/>
        <source>No accessible tables found</source>
        <translation>No se encontraron tablas accesibles</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbsourceselect.cpp" line="675"/>
        <source>Database connection was successful, but no accessible tables were found.

Please verify that you have SELECT privilege on a table carrying PostGIS
geometry.</source>
        <translation>La conexión a la base de datos tuvo éxito, pero no se encontraron tablas accesibles.

Por favor, verifique que tiene privilegios para SELECT sobre una tabla que lleve la geometría PostGIS.</translation>
    </message>
</context>
<context>
    <name>QgsDbSourceSelectBase</name>
    <message>
        <location filename="../src/ui/qgsdbsourceselectbase.ui" line="13"/>
        <source>Add PostGIS Table(s)</source>
        <translation>Añadir tabla(s) PostGIS</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsdbsourceselectbase.ui" line="111"/>
        <source>Help</source>
        <translation>Ayuda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsdbsourceselectbase.ui" line="114"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsdbsourceselectbase.ui" line="140"/>
        <source>Add</source>
        <translation>Añadir</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsdbsourceselectbase.ui" line="156"/>
        <source>Close</source>
        <translation>Cerrar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsdbsourceselectbase.ui" line="54"/>
        <source>PostgreSQL Connections</source>
        <translation>Conexiones de PostgreSQL</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsdbsourceselectbase.ui" line="66"/>
        <source>Delete</source>
        <translation>Borrar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsdbsourceselectbase.ui" line="73"/>
        <source>Edit</source>
        <translation>Editar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsdbsourceselectbase.ui" line="80"/>
        <source>New</source>
        <translation>Nueva</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsdbsourceselectbase.ui" line="87"/>
        <source>Connect</source>
        <translation>Conectar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsdbsourceselectbase.ui" line="183"/>
        <source>Search:</source>
        <translation>Buscar:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsdbsourceselectbase.ui" line="190"/>
        <source>Search mode:</source>
        <translation>Modo de búsqueda:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsdbsourceselectbase.ui" line="200"/>
        <source>Search in columns:</source>
        <translation>Buscar en columnas:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsdbsourceselectbase.ui" line="216"/>
        <source>Search options...</source>
        <translation>Opciones de búsqueda...</translation>
    </message>
</context>
<context>
    <name>QgsDbTableModel</name>
    <message>
        <location filename="../src/app/qgsdbtablemodel.cpp" line="25"/>
        <source>Schema</source>
        <translation>Esquema</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbtablemodel.cpp" line="26"/>
        <source>Table</source>
        <translation>Tabla</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbtablemodel.cpp" line="27"/>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbtablemodel.cpp" line="28"/>
        <source>Geometry column</source>
        <translation>Columna de geometría</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbtablemodel.cpp" line="29"/>
        <source>Sql</source>
        <translation>Sql</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbtablemodel.cpp" line="237"/>
        <source>Point</source>
        <translation>Punto</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbtablemodel.cpp" line="241"/>
        <source>Multipoint</source>
        <translation>Múltiples puntos</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbtablemodel.cpp" line="245"/>
        <source>Line</source>
        <translation>Línea</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbtablemodel.cpp" line="249"/>
        <source>Multiline</source>
        <translation>Múltiples línea</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbtablemodel.cpp" line="253"/>
        <source>Polygon</source>
        <translation>Polígono</translation>
    </message>
    <message>
        <location filename="../src/app/qgsdbtablemodel.cpp" line="257"/>
        <source>Multipolygon</source>
        <translation>Múltiples polígono</translation>
    </message>
</context>
<context>
    <name>QgsDelAttrDialogBase</name>
    <message>
        <location filename="../src/ui/qgsdelattrdialogbase.ui" line="13"/>
        <source>Delete Attributes</source>
        <translation>Borrar atributos</translation>
    </message>
</context>
<context>
    <name>QgsDelimitedTextPlugin</name>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextplugin.cpp" line="99"/>
        <source>&amp;Add Delimited Text Layer</source>
        <translation>&amp;Añadir capa de texto delimitado</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextplugin.cpp" line="101"/>
        <source>Add a delimited text file as a map layer. </source>
        <translation>Añade una capa de texto delimitado como una capa del mapa. </translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextplugin.cpp" line="102"/>
        <source>The file must have a header row containing the field names. </source>
        <translation>El archivo debe tener una fila de encabezado con los nombres de los campos. </translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextplugin.cpp" line="103"/>
        <source>X and Y fields are required and must contain coordinates in decimal units.</source>
        <translation>Los campos X e Y son necesarios y deben contener las coordenadas en unidades decimales.</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextplugin.cpp" line="108"/>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextplugin.cpp" line="140"/>
        <source>&amp;Delimited text</source>
        <translation>&amp;Texto delimitado</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextplugin.cpp" line="54"/>
        <source>DelimitedTextLayer</source>
        <translation>CapaDeTextoDelimitado</translation>
    </message>
</context>
<context>
    <name>QgsDelimitedTextPluginGui</name>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextplugingui.cpp" line="125"/>
        <source>No layer name</source>
        <translation>Ningún nombre de capa</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextplugingui.cpp" line="125"/>
        <source>Please enter a layer name before adding the layer to the map</source>
        <translation>Por favor, introduzca un nombre para la capa antes de añadir ésta al mapa</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextplugingui.cpp" line="207"/>
        <source>No delimiter</source>
        <translation>No hay delimitador</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextplugingui.cpp" line="207"/>
        <source>Please specify a delimiter prior to parsing the file</source>
        <translation>Por favor, especifique un delimitador antes de analizar el archivo</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextplugingui.cpp" line="241"/>
        <source>Choose a delimited text file to open</source>
        <translation>Seleccione un archivo de texto delimitado para abrir</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextplugingui.cpp" line="35"/>
        <source>Parse</source>
        <translation>Analizar</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextplugingui.cpp" line="60"/>
        <source>Description</source>
        <translation>Descripción</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextplugingui.cpp" line="61"/>
        <source>Select a delimited text file containing a header row and one or more rows of x and y coordinates that you would like to use as a point layer and this plugin will do the job for you!</source>
        <translation>Seleccione un archivo de texto delimitado que contenga una fila de encabezado y una o más filas de coordenadas X e Y que quiera usar como capa de puntos y este complemento hará el trabajo por usted.</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextplugingui.cpp" line="64"/>
        <source>Use the layer name box to specify the legend name for the new layer. Use the delimiter box to specify what delimeter is used in your file (e.g. space, comma, tab or a regular expression in Perl style). After choosing a delimiter, press the parse button and select the columns containing the x and y values for the layer.</source>
        <translation>Use el recuadro Nombre de la capa para especificar el nombre de la nueva capa en la leyenda. Use el recuadro delimitador para especificar qué delimitador se usa en su archivo ej.: espacio, coma, tabulador o una expresión regular en estilo Perl). Después de elegir un delimitador, pulse el botón Analizar y seleccione las columnas que contienen los valores X e Y para la capa.</translation>
    </message>
</context>
<context>
    <name>QgsDelimitedTextPluginGuiBase</name>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="13"/>
        <source>Create a Layer from a Delimited Text File</source>
        <translation>Crear una capa a partir de un archivo de texto delimitado</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="91"/>
        <source>&lt;p align=&quot;right&quot;&gt;X field&lt;/p&gt;</source>
        <translation>&lt;p align=&quot;right&quot;&gt;Coordenada X&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="110"/>
        <source>Name of the field containing x values</source>
        <translation>Nombre del campo que contiene los valores de la X</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="113"/>
        <source>Name of the field containing x values. Choose a field from the list. The list is generated by parsing the header row of the delimited text file.</source>
        <translation>Nombre del campo que contiene los valores de la X. Seleccione un campo de la lista. La lista se genera al analizar la fila de encabezado del archivo de texto delimitado.</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="123"/>
        <source>&lt;p align=&quot;right&quot;&gt;Y field&lt;/p&gt;</source>
        <translation>&lt;p align=&quot;right&quot;&gt;Coordenada Y&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="142"/>
        <source>Name of the field containing y values</source>
        <translation>Nombre del campo que contiene los valores de la Y</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="145"/>
        <source>Name of the field containing y values. Choose a field from the list. The list is generated by parsing the header row of the delimited text file.</source>
        <translation>Nombre del campo que contiene los valores de la Y. Seleccione un campo de la lista. La lista se genera al analizar la fila de encabezado del archivo de texto delimitado.</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="284"/>
        <source>Sample text</source>
        <translation>Texto de muestra</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="51"/>
        <source>Delimited Text Layer</source>
        <translation>Capa de texto delimitado</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="174"/>
        <source>Delimited text file</source>
        <translation>Archivo de texto delimitado</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="181"/>
        <source>Full path to the delimited text file</source>
        <translation>Ruta completa al archivo de texto delimitado</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="184"/>
        <source>Full path to the delimited text file. In order to properly parse the fields in the file, the delimiter must be defined prior to entering the file name. Use the Browse button to the right of this field to choose the input file.</source>
        <translation>Ruta completa al archivo de texto delimitado. Para poder analizar los campos del archivo correctamente, el delimitador debe definirse antes de introducir el nombre del archivo. Utilice el botón Explorar situado a la derecha de este campo para seleccionar el archivo de entrada.</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="197"/>
        <source>Browse to find the delimited text file to be processed</source>
        <translation>Explorar para buscar el archivo de texto delimitado a procesar</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="200"/>
        <source>Use this button to browse to the location of the delimited text file. This button will not be enabled until a delimiter has been entered in the &lt;i&gt;Delimiter&lt;/i&gt; box. Once a file is chosen, the X and Y field drop-down boxes will be populated with the fields from the delimited text file.</source>
        <translation>Use este botón para buscar el archivo de texto. Este botón no se activará hasta que se haya introducido un delimitador en el recuadro &lt;i&gt; Delimitador&lt;/i&gt;. Una vez que se ha seleccionado un archivo, los cuadros combinados de las coordenadas X e Y se rellenarán con los campos del archivo de texto delimitado.</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="229"/>
        <source>Layer name</source>
        <translation>Nombre de la capa</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="236"/>
        <source>Name to display in the map legend</source>
        <translation>Nombre para mostrar en la leyenda del mapa</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="239"/>
        <source>Name displayed in the map legend</source>
        <translation>Nombre mostrado en la leyenda del mapa</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="354"/>
        <source>Delimiter</source>
        <translation>Delimitador</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="373"/>
        <source>Delimiter to use when splitting fields in the text file. The delimiter can be more than one character.</source>
        <translation>Delimitador a usar para dividir campos en el archivo de texto. El delimitador puede ser más de un carácter.</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="376"/>
        <source>Delimiter to use when splitting fields in the delimited text file. The delimiter can be 1 or more characters in length.</source>
        <translation>Delimitador a usar para dividir campos en el archivo de texto. El delimitador puede tener uno o más caracteres.</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="203"/>
        <source>Browse...</source>
        <translation>Explorar...</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="383"/>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="386"/>
        <source>The delimiter is taken as is</source>
        <translation>El delimitador se toma tal como es</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="389"/>
        <source>Plain characters</source>
        <translation>Caracteres sencillos</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="396"/>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="399"/>
        <source>The delimiter is a regular expression</source>
        <translation>El delimitador es una expresión regular</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="402"/>
        <source>Regular expression</source>
        <translation>Expresión regular</translation>
    </message>
    <message>
        <location filename="../src/plugins/delimited_text/qgsdelimitedtextpluginguibase.ui" line="64"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>QgsDelimitedTextProvider</name>
    <message>
        <location filename="../src/providers/delimitedtext/qgsdelimitedtextprovider.cpp" line="401"/>
        <source>Note: the following lines were not loaded because Qgis was unable to determine values for the x and y coordinates:
</source>
        <translation>Nota: las líneas siguientes no se han cargado porque Qgis no pudo determinar los valores de las coordenadas X e Y:
</translation>
    </message>
    <message>
        <location filename="../src/providers/delimitedtext/qgsdelimitedtextprovider.cpp" line="400"/>
        <source>Error</source>
        <translation>Error</translation>
    </message>
</context>
<context>
    <name>QgsDetailedItemWidgetBase</name>
    <message>
        <location filename="../src/ui/qgsdetaileditemwidgetbase.ui" line="13"/>
        <source>Form</source>
        <translation>Formulario</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsdetaileditemwidgetbase.ui" line="96"/>
        <source>Heading Label</source>
        <translation>Etiqueta de cabecera</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsdetaileditemwidgetbase.ui" line="117"/>
        <source>Detail label</source>
        <translation>Etiqueta de detalle</translation>
    </message>
</context>
<context>
    <name>QgsDlgPgBufferBase</name>
    <message>
        <location filename="../src/plugins/geoprocessing/qgsdlgpgbufferbase.ui" line="13"/>
        <source>Buffer features</source>
        <translation>Crear buffer de objetos espaciales</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgsdlgpgbufferbase.ui" line="28"/>
        <source>Parameters</source>
        <translation>Parámetros</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgsdlgpgbufferbase.ui" line="59"/>
        <source>Geometry column:</source>
        <translation>Columna de la geometría:</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgsdlgpgbufferbase.ui" line="66"/>
        <source>Add the buffered layer to the map?</source>
        <translation>¿Añadir la capa de buffer al mapa?</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgsdlgpgbufferbase.ui" line="92"/>
        <source>Spatial reference ID:</source>
        <translation>ID de la referencia espacial:</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgsdlgpgbufferbase.ui" line="118"/>
        <source>Schema:</source>
        <translation>Esquema:</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgsdlgpgbufferbase.ui" line="125"/>
        <source>Unique field to use as feature id:</source>
        <translation>Campo único a utilizar como identificador:</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgsdlgpgbufferbase.ui" line="132"/>
        <source>Table name for the buffered layer:</source>
        <translation>Nombre de la tabla de la capa del buffer:</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgsdlgpgbufferbase.ui" line="172"/>
        <source>Create unique object id</source>
        <translation>Crear id de objetos único</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgsdlgpgbufferbase.ui" line="216"/>
        <source>public</source>
        <translation>público</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgsdlgpgbufferbase.ui" line="224"/>
        <source>Buffer distance in map units:</source>
        <translation>Distancia de buffer en unidades del mapa:</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgsdlgpgbufferbase.ui" line="234"/>
        <source>&lt;h2&gt;Buffer the features in layer: &lt;/h2&gt;</source>
        <translation>&lt;h2&gt;Crear buffer de los objetos espaciales de la capa: &lt;/h2&gt;</translation>
    </message>
</context>
<context>
    <name>QgsEncodingFileDialog</name>
    <message>
        <location filename="../src/gui/qgsencodingfiledialog.cpp" line="29"/>
        <source>Encoding:</source>
        <translation>Codificación:</translation>
    </message>
</context>
<context>
    <name>QgsGPSDeviceDialog</name>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialog.cpp" line="45"/>
        <source>New device %1</source>
        <translation>Nuevo receptor %1</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialog.cpp" line="59"/>
        <source>Are you sure?</source>
        <translation>¿Está seguro?</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialog.cpp" line="60"/>
        <source>Are you sure that you want to delete this device?</source>
        <translation>¿Está seguro de que quiere borrar este receptor?</translation>
    </message>
</context>
<context>
    <name>QgsGPSDeviceDialogBase</name>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialogbase.ui" line="19"/>
        <source>GPS Device Editor</source>
        <translation>Editor de receptores GPS</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialogbase.ui" line="66"/>
        <source>New device</source>
        <translation>Nuevo receptor</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialogbase.ui" line="79"/>
        <source>Delete device</source>
        <translation>Borrar receptor</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialogbase.ui" line="92"/>
        <source>Update device</source>
        <translation>Actualizar receptor</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialogbase.ui" line="154"/>
        <source>This is the name of the device as it will appear in the lists</source>
        <translation>Así es como aparecerá el nombre del receptor en la lista</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialogbase.ui" line="163"/>
        <source>Commands</source>
        <translation>Comandos</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialogbase.ui" line="190"/>
        <source>Track download:</source>
        <translation>Descargar track:</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialogbase.ui" line="197"/>
        <source>Route upload:</source>
        <translation>Cargar ruta:</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialogbase.ui" line="204"/>
        <source>Waypoint download:</source>
        <translation>Descargar waypoint:</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialogbase.ui" line="211"/>
        <source>The command that is used to download routes from the device</source>
        <translation>El comando que se usa para descargar rutas del receptor</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialogbase.ui" line="218"/>
        <source>Route download:</source>
        <translation>Descargar ruta:</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialogbase.ui" line="225"/>
        <source>The command that is used to upload waypoints to the device</source>
        <translation>El comando que se usa para cargar waypoints al receptor</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialogbase.ui" line="232"/>
        <source>Track upload:</source>
        <translation>Cargar track:</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialogbase.ui" line="239"/>
        <source>The command that is used to download tracks from the device</source>
        <translation>El comando que se usa para descargar tracks del receptor</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialogbase.ui" line="246"/>
        <source>The command that is used to upload routes to the device</source>
        <translation>El comando que se usa para cargar rutas al receptor</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialogbase.ui" line="253"/>
        <source>The command that is used to download waypoints from the device</source>
        <translation>El comando que se usa para descargar waypoints del receptor</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialogbase.ui" line="260"/>
        <source>The command that is used to upload tracks to the device</source>
        <translation>El comando que se usa para cargar tracks al receptor</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialogbase.ui" line="267"/>
        <source>Waypoint upload:</source>
        <translation>Cargar waypoint:</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialogbase.ui" line="141"/>
        <source>Device name</source>
        <translation>Nombre del dispositivo</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsdevicedialogbase.ui" line="283"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;In the download and upload commands there can be special words that will be replaced by QGIS when the commands are used. These words are:&lt;span style=&quot; font-style:italic;&quot;&gt;%babel&lt;/span&gt; - the path to GPSBabel&lt;br /&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;%in&lt;/span&gt; - the GPX filename when uploading or the port when downloading&lt;br /&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;%out&lt;/span&gt; - the port when uploading or the GPX filename when downloading&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;En las órdenes para descargar y cargar puede haber palabras especiales que serán reemplazadas por QGIS cuando se utilicen estas órdenes. Estas palabras son:&lt;span style=&quot; font-style:italic;&quot;&gt;%babel&lt;/span&gt; - ruta de GPSBabel&lt;br /&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;%dentro&lt;/span&gt; - el nombre del archivo GPX cuando se está cargando o el puerto cuando se está descargando&lt;br /&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;%fuera&lt;/span&gt; - el puerto cuando se está cargando o el nombre del archivo GPX cuando se está descargando&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>QgsGPSPlugin</name>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="90"/>
        <source>&amp;Gps Tools</source>
        <translation>Herramientas &amp;GPS</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="91"/>
        <source>&amp;Create new GPX layer</source>
        <translation>&amp;Crear nueva capa GPX</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="93"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="94"/>
        <source>Creates a new GPX layer and displays it on the map canvas</source>
        <translation>Crea una capa GPX nueva y la muestra en la vista del mapa</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="99"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="100"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="199"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="200"/>
        <source>&amp;Gps</source>
        <translation>&amp;GPS</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="160"/>
        <source>Save new GPX file as...</source>
        <translation>Guardar nuevo archivo GPX como...</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="162"/>
        <source>GPS eXchange file (*.gpx)</source>
        <translation>Archivo GPS eXchange (*.gpx)</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="169"/>
        <source>Could not create file</source>
        <translation>No se pudo crear el archivo</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="170"/>
        <source>Unable to create a GPX file with the given name. </source>
        <translation>No se puede crear un archivo GPX con este nombre. </translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="171"/>
        <source>Try again with another name or in another </source>
        <translation>Inténtelo de nuevo con otro nombre o en otro </translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="172"/>
        <source>directory.</source>
        <translation>directorio.</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="213"/>
        <source>GPX Loader</source>
        <translation>Cargador de GPX</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="214"/>
        <source>Unable to read the selected file.
</source>
        <translation>No se puede leer el archivo seleccionado.
</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="215"/>
        <source>Please reselect a valid file.</source>
        <translation>Por favor, vuelva a seleccionar un archivo válido.</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="264"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="336"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="424"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="516"/>
        <source>Could not start process</source>
        <translation>No se pudo iniciar el proceso</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="265"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="337"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="425"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="517"/>
        <source>Could not start GPSBabel!</source>
        <translation>No se pudo iniciar GPSBabel</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="270"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="342"/>
        <source>Importing data...</source>
        <translation>Importando datos...</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="270"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="342"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="430"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="522"/>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="283"/>
        <source>Could not import data from %1!

</source>
        <translation>No se pudieron importar datos de %1

</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="286"/>
        <source>Error importing data</source>
        <translation>Error al importar datos</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="411"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="504"/>
        <source>Not supported</source>
        <translation>No soportado</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="412"/>
        <source>This device does not support downloading </source>
        <translation>Este receptor no soporta la descarga </translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="413"/>
        <source>of </source>
        <translation>de </translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="430"/>
        <source>Downloading data...</source>
        <translation>Descargando datos...</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="443"/>
        <source>Could not download data from GPS!

</source>
        <translation>No se pudieron descargar datos del GPS

</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="445"/>
        <source>Error downloading data</source>
        <translation>Error al descargar datos</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="505"/>
        <source>This device does not support uploading of </source>
        <translation>Este receptor no soporta el cargar datos de </translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="522"/>
        <source>Uploading data...</source>
        <translation>Cargando datos...</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="535"/>
        <source>Error while uploading data to GPS!

</source>
        <translation>Error al cargar datos al GPS

</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="537"/>
        <source>Error uploading data</source>
        <translation>Error al cargar datos</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="355"/>
        <source>Could not convert data from %1!

</source>
        <translation>¡No se pudieron convertir los datos desde %1!</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugin.cpp" line="358"/>
        <source>Error converting data</source>
        <translation>Error al convertir datos</translation>
    </message>
</context>
<context>
    <name>QgsGPSPluginGui</name>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="153"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="239"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="297"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="552"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="573"/>
        <source>GPS eXchange format (*.gpx)</source>
        <translation>formato GPS eXchange (*.gpx)</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="246"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="559"/>
        <source>Select GPX file</source>
        <translation>Seleccionar archivo GPX</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="261"/>
        <source>Select file and format to import</source>
        <translation>Seleccionar archivo y formato a importar</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="102"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="281"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="533"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="534"/>
        <source>Waypoints</source>
        <translation>Waypoints</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="102"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="283"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="533"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="534"/>
        <source>Routes</source>
        <translation>Rutas</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="103"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="285"/>
        <source>Tracks</source>
        <translation>Tracks</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="538"/>
        <source>QGIS can perform conversions of GPX files, by using GPSBabel (%1) to perform the conversions.</source>
        <translation>QGIS puede realizar conversiones de archivos GPX, usando GPSBabel (%1) para hacer las conversiones.</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="486"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="505"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="520"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="540"/>
        <source>This requires that you have GPSBabel installed where QGIS can find it.</source>
        <translation>Esto requiere que tenga instalado GPSBabel donde QGIS lo pueda encontrar</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="465"/>
        <source>GPX is the %1, which is used to store information about waypoints, routes, and tracks.</source>
        <translation>GPX es el %1, que se usa para guardar información sobre waypoints, rutas y tracks.</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="466"/>
        <source>GPS eXchange file format</source>
        <translation>Formato de archivo GPS eXchange</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="467"/>
        <source>Select a GPX file and then select the feature types that you want to load.</source>
        <translation>Seleccione un archivo GPX y luego elija el tipo de objetos espaciales que quiere cargar.</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="480"/>
        <source>This tool will help you download data from a GPS device.</source>
        <translation>Esta herramienta le ayudará a descargar datos de un receptor GPS.</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="481"/>
        <source>Choose your GPS device, the port it is connected to, the feature type you want to download, a name for your new layer, and the GPX file where you want to store the data.</source>
        <translation>Seleccione su receptor GPS, el puerto al que está conectado, el tipo de objeto espacial que quiere descargar, un nombre para su nueva capa y el archivo GPX donde quiera guardar los datos.</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="482"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="501"/>
        <source>If your device isn&apos;t listed, or if you want to change some settings, you can also edit the devices.</source>
        <translation>Si su receptor no está en la lista o si quiere cambiar alguna configuración, también puede editar los receptores.</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="483"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="502"/>
        <source>This tool uses the program GPSBabel (%1) to transfer the data.</source>
        <translation>Esta herramienta usa el programa GPSBabel (%1) para transferir los datos.</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="499"/>
        <source>This tool will help you upload data from a GPX layer to a GPS device.</source>
        <translation>Esta herramienta le ayudará a cargar datos de una capa GPX a un receptor GPS.</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="500"/>
        <source>Choose the layer you want to upload, the device you want to upload it to, and the port your device is connected to.</source>
        <translation>Seleccione la capa que quiere cargar , el receptor en el que la quiere cargar y el puerto al que está conectado.</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="518"/>
        <source>QGIS can only load GPX files by itself, but many other formats can be converted to GPX using GPSBabel (%1).</source>
        <translation>QGIS sólo puede cargar archivos GPX por si mismo, pero otros muchos formatos se pueden convertir a GPX usando GPSBabel (%1).</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="522"/>
        <source>All file formats can not store waypoints, routes, and tracks, so some feature types may be disabled for some file formats.</source>
        <translation>No todos los formatos de archivo pueden guardar waypoints, rutas y tracks, por lo que algunos tipos de objeto espacial pueden estar deshabilitados para algunos formatos de archivo.</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="151"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="295"/>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="571"/>
        <source>Choose a file name to save under</source>
        <translation>Seleccione un nombre de archivo bajo el que guardar</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="521"/>
        <source>Select a GPS file format and the file that you want to import, the feature type that you want to use, a GPX file name that you want to save the converted file as, and a name for the new layer.</source>
        <translation>Seleccione un formato de archivo de GPS y el archivo que quiere importar, el tipo de objeto espacial que quiere usar, un nombre de archivo con el que quiera guardar el archivo convertido a GPX y un nombre para la nueva capa.</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpsplugingui.cpp" line="541"/>
        <source>Select a GPX input file name, the type of conversion you want to perform, a GPX file name that you want to save the converted file as, and a name for the new layer created from the result.</source>
        <translation>Seleccione un nombre de archivo GPX de entrada, el tipo de conversión que quiere realizar, un nombre de archivo GPX con el que quiera guardar el archivo convertido y un nombre para la nueva capa creada a partir del resultado.</translation>
    </message>
</context>
<context>
    <name>QgsGPSPluginGuiBase</name>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="13"/>
        <source>GPS Tools</source>
        <translation>Herramientas GPS</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="70"/>
        <source>Load GPX file</source>
        <translation>Cargar archivo GPX</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="116"/>
        <source>File:</source>
        <translation>Archivo:</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="133"/>
        <source>Feature types:</source>
        <translation>Tipo de objetos espaciales:</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="143"/>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="419"/>
        <source>Waypoints</source>
        <translation>Waypoints</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="156"/>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="424"/>
        <source>Routes</source>
        <translation>Rutas</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="169"/>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="429"/>
        <source>Tracks</source>
        <translation>Tracks</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="180"/>
        <source>Import other file</source>
        <translation>Importar otro archivo</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="220"/>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="454"/>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="617"/>
        <source>Layer name:</source>
        <translation>Nombre de la capa:</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="244"/>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="641"/>
        <source>GPX output file:</source>
        <translation>Archivo de salida GPX:</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="277"/>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="405"/>
        <source>Feature type:</source>
        <translation>Tipo de objeto espacial:</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="298"/>
        <source>File to import:</source>
        <translation>Archivo a importar:</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="306"/>
        <source>Download from GPS</source>
        <translation>Descargar desde GPS</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="365"/>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="528"/>
        <source>Port:</source>
        <translation>Puerto:</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="437"/>
        <source>Output file:</source>
        <translation>Archivo de salida:</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="325"/>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="562"/>
        <source>GPS device:</source>
        <translation>Receptor GPS:</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="555"/>
        <source>Edit devices</source>
        <translation>Editar receptores</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="465"/>
        <source>Upload to GPS</source>
        <translation>Cargar al GPS</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="569"/>
        <source>Data layer:</source>
        <translation>Capa de datos:</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="123"/>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="234"/>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="631"/>
        <source>Browse...</source>
        <translation>Explorar...</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="227"/>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="447"/>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="624"/>
        <source>Save As...</source>
        <translation>Guardar como...</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="284"/>
        <source>(Note: Selecting correct file type in browser dialog important!)</source>
        <translation>(Nota: ¡Seleccionar el tipo de archivo correcto en el diálogo de exploración es importante!)</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="577"/>
        <source>GPX Conversions</source>
        <translation>Conversiones GPX</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="674"/>
        <source>Conversion:</source>
        <translation>Conversión:</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="688"/>
        <source>GPX input file:</source>
        <translation>Archivo GPX de entrada:</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="106"/>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="207"/>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="315"/>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="508"/>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="604"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="342"/>
        <source>Edit devices...</source>
        <translation>Editar dispositivos...</translation>
    </message>
    <message>
        <location filename="../src/plugins/gps_importer/qgsgpspluginguibase.ui" line="382"/>
        <source>Refresh</source>
        <translation>Actualizar</translation>
    </message>
</context>
<context>
    <name>QgsGPXProvider</name>
    <message>
        <location filename="../src/providers/gpx/qgsgpxprovider.cpp" line="72"/>
        <source>Bad URI - you need to specify the feature type.</source>
        <translation>URI errónea - necesita especificar el tipo de objeto espacial.</translation>
    </message>
    <message>
        <location filename="../src/providers/gpx/qgsgpxprovider.cpp" line="120"/>
        <source>GPS eXchange file</source>
        <translation>Archivo GPS eXchange</translation>
    </message>
    <message>
        <location filename="../src/providers/gpx/qgsgpxprovider.cpp" line="815"/>
        <source>Digitized in QGIS</source>
        <translation>Digitalizado en QGIS</translation>
    </message>
</context>
<context>
    <name>QgsGenericProjectionSelector</name>
    <message>
        <location filename="../src/gui/qgsgenericprojectionselector.cpp" line="43"/>
        <source>Define this layer&apos;s projection:</source>
        <translation>Definir la proyección de esta capa:</translation>
    </message>
    <message>
        <location filename="../src/gui/qgsgenericprojectionselector.cpp" line="44"/>
        <source>This layer appears to have no projection specification.</source>
        <translation>Parece que esta capa no tiene no tiene especificada la proyección.</translation>
    </message>
    <message>
        <location filename="../src/gui/qgsgenericprojectionselector.cpp" line="45"/>
        <source>By default, this layer will now have its projection set to that of the project, but you may override this by selecting a different projection below.</source>
        <translation>Por omisión, se utilizará la misma que para el proyecto, pero puede ignorarla seleccionado una proyección diferente a continuación.</translation>
    </message>
</context>
<context>
    <name>QgsGenericProjectionSelectorBase</name>
    <message>
        <location filename="../src/ui/qgsgenericprojectionselectorbase.ui" line="13"/>
        <source>Projection Selector</source>
        <translation>Selector de proyección</translation>
    </message>
</context>
<context>
    <name>QgsGeomTypeDialog</name>
    <message>
        <location filename="../src/app/qgsgeomtypedialog.cpp" line="30"/>
        <source>Real</source>
        <translation>Real</translation>
    </message>
    <message>
        <location filename="../src/app/qgsgeomtypedialog.cpp" line="31"/>
        <source>Integer</source>
        <translation>Entero</translation>
    </message>
    <message>
        <location filename="../src/app/qgsgeomtypedialog.cpp" line="32"/>
        <source>String</source>
        <translation>Cadena</translation>
    </message>
</context>
<context>
    <name>QgsGeomTypeDialogBase</name>
    <message>
        <location filename="../src/ui/qgsgeomtypedialogbase.ui" line="13"/>
        <source>New Vector Layer</source>
        <translation>Nueva capa vectorial</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsgeomtypedialogbase.ui" line="35"/>
        <location filename="../src/ui/qgsgeomtypedialogbase.ui" line="85"/>
        <location filename="../src/ui/qgsgeomtypedialogbase.ui" line="155"/>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsgeomtypedialogbase.ui" line="41"/>
        <source>Point</source>
        <translation>Punto</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsgeomtypedialogbase.ui" line="48"/>
        <source>Line</source>
        <translation>Línea</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsgeomtypedialogbase.ui" line="55"/>
        <source>Polygon</source>
        <translation>Polígono</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsgeomtypedialogbase.ui" line="72"/>
        <location filename="../src/ui/qgsgeomtypedialogbase.ui" line="150"/>
        <source>Name</source>
        <translation>Nombre</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsgeomtypedialogbase.ui" line="22"/>
        <source>File format</source>
        <translation>Formato de archivo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsgeomtypedialogbase.ui" line="65"/>
        <source>Attributes</source>
        <translation>Atributos</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsgeomtypedialogbase.ui" line="114"/>
        <location filename="../src/ui/qgsgeomtypedialogbase.ui" line="127"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsgeomtypedialogbase.ui" line="111"/>
        <source>Delete selected attribute</source>
        <translation>Borrar el atributo seleccionado</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsgeomtypedialogbase.ui" line="124"/>
        <source>Add attribute</source>
        <translation>Añadir atributo</translation>
    </message>
</context>
<context>
    <name>QgsGeorefDescriptionDialogBase</name>
    <message>
        <location filename="../src/plugins/georeferencer/qgsgeorefdescriptiondialogbase.ui" line="13"/>
        <source>Description georeferencer</source>
        <translation>Georreferenciador de descripción</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgsgeorefdescriptiondialogbase.ui" line="44"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:12pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-size:11pt; font-weight:600;&quot;&gt;Description&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:9pt;&quot;&gt;This plugin can generate world files for rasters. You select points on the raster and give their world coordinates, and the plugin will compute the world file parameters. The more coordinates you can provide the better the result will be.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:12pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-size:11pt; font-weight:600;&quot;&gt;Descripciónn&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:9pt;&quot;&gt;Este complemento puede generar archivos de referenciación (world files) para imágenes ráster. Seleccione puntos en el ráster e introduzca sus coordenadas y el complemento procesará los parámetros del archivo de referenciación. Cuantas más coordenadas pueda proporcionar, mejor será el resultado&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>QgsGeorefPlugin</name>
    <message>
        <location filename="../src/plugins/georeferencer/plugin.cpp" line="91"/>
        <location filename="../src/plugins/georeferencer/plugin.cpp" line="98"/>
        <location filename="../src/plugins/georeferencer/plugin.cpp" line="119"/>
        <source>&amp;Georeferencer</source>
        <translation>Geo&amp;rreferenciador</translation>
    </message>
</context>
<context>
    <name>QgsGeorefPluginGui</name>
    <message>
        <location filename="../src/plugins/georeferencer/plugingui.cpp" line="86"/>
        <source>Choose a raster file</source>
        <translation>Seleccionar un archivo ráster</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/plugingui.cpp" line="88"/>
        <source>Raster files (*.*)</source>
        <translation>Archivos ráster (*.*)</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/plugingui.cpp" line="99"/>
        <source>Error</source>
        <translation>Error</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/plugingui.cpp" line="100"/>
        <source>The selected file is not a valid raster file.</source>
        <translation>El archivo seleccionado no es un archivo ráster válido.</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/plugingui.cpp" line="127"/>
        <source>World file exists</source>
        <translation>El archivo de referenciación (world file) ya existe</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/plugingui.cpp" line="128"/>
        <source>&lt;p&gt;The selected file already seems to have a </source>
        <translation>&lt;p&gt;Parece que el archivo seleccionado ya tiene un </translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/plugingui.cpp" line="129"/>
        <source>world file! Do you want to replace it with the </source>
        <translation>archivo de referenciación (world file). ¿Quiere reemplazarlo con el </translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/plugingui.cpp" line="130"/>
        <source>new world file?&lt;/p&gt;</source>
        <translation>nuevo archivo de referenciación (world file)?&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>QgsGeorefPluginGuiBase</name>
    <message>
        <location filename="../src/plugins/georeferencer/pluginguibase.ui" line="13"/>
        <source>Georeferencer</source>
        <translation>Georreferenciador</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/pluginguibase.ui" line="22"/>
        <source>Raster file:</source>
        <translation>Archivo ráster:</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/pluginguibase.ui" line="99"/>
        <source>Close</source>
        <translation>Cerrar</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/pluginguibase.ui" line="76"/>
        <source>Arrange plugin windows</source>
        <translation>Ajustar ventanas de complementos</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/pluginguibase.ui" line="45"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/pluginguibase.ui" line="69"/>
        <source>Description...</source>
        <translation>Descripción...</translation>
    </message>
</context>
<context>
    <name>QgsGeorefWarpOptionsDialogBase</name>
    <message>
        <location filename="../src/plugins/georeferencer/qgsgeorefwarpoptionsdialogbase.ui" line="13"/>
        <source>Warp options</source>
        <translation>Opciones de combado</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgsgeorefwarpoptionsdialogbase.ui" line="35"/>
        <source>Resampling method:</source>
        <translation>Método de remuestreo:</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgsgeorefwarpoptionsdialogbase.ui" line="46"/>
        <source>Nearest neighbour</source>
        <translation>Vecino más próximo</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgsgeorefwarpoptionsdialogbase.ui" line="51"/>
        <source>Linear</source>
        <translation>Lineal</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgsgeorefwarpoptionsdialogbase.ui" line="56"/>
        <source>Cubic</source>
        <translation>Cúbica</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgsgeorefwarpoptionsdialogbase.ui" line="74"/>
        <source>OK</source>
        <translation>Aceptar</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgsgeorefwarpoptionsdialogbase.ui" line="64"/>
        <source>Use 0 for transparency when needed</source>
        <translation>Usar 0 para transparencia cuando sea necesario</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgsgeorefwarpoptionsdialogbase.ui" line="28"/>
        <source>Compression:</source>
        <translation>Compresión:</translation>
    </message>
</context>
<context>
    <name>QgsGraduatedSymbolDialog</name>
    <message>
        <location filename="../src/app/qgsgraduatedsymboldialog.cpp" line="69"/>
        <location filename="../src/app/qgsgraduatedsymboldialog.cpp" line="86"/>
        <location filename="../src/app/qgsgraduatedsymboldialog.cpp" line="300"/>
        <location filename="../src/app/qgsgraduatedsymboldialog.cpp" line="368"/>
        <source>Equal Interval</source>
        <translation>Intervalo igual</translation>
    </message>
    <message>
        <location filename="../src/app/qgsgraduatedsymboldialog.cpp" line="70"/>
        <location filename="../src/app/qgsgraduatedsymboldialog.cpp" line="82"/>
        <location filename="../src/app/qgsgraduatedsymboldialog.cpp" line="187"/>
        <location filename="../src/app/qgsgraduatedsymboldialog.cpp" line="301"/>
        <location filename="../src/app/qgsgraduatedsymboldialog.cpp" line="343"/>
        <source>Quantiles</source>
        <translation>Cuantiles</translation>
    </message>
    <message>
        <location filename="../src/app/qgsgraduatedsymboldialog.cpp" line="71"/>
        <location filename="../src/app/qgsgraduatedsymboldialog.cpp" line="78"/>
        <location filename="../src/app/qgsgraduatedsymboldialog.cpp" line="183"/>
        <location filename="../src/app/qgsgraduatedsymboldialog.cpp" line="394"/>
        <source>Empty</source>
        <translation>Vacío</translation>
    </message>
</context>
<context>
    <name>QgsGraduatedSymbolDialogBase</name>
    <message>
        <location filename="../src/ui/qgsgraduatedsymboldialogbase.ui" line="25"/>
        <source>graduated Symbol</source>
        <translation>Símbolo graduado</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsgraduatedsymboldialogbase.ui" line="188"/>
        <source>Delete class</source>
        <translation>Borrar clase</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsgraduatedsymboldialogbase.ui" line="181"/>
        <source>Classify</source>
        <translation>Clasificar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsgraduatedsymboldialogbase.ui" line="55"/>
        <source>Classification field</source>
        <translation>Campo de clasificación</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsgraduatedsymboldialogbase.ui" line="93"/>
        <source>Mode</source>
        <translation>Modo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsgraduatedsymboldialogbase.ui" line="131"/>
        <source>Number of classes</source>
        <translation>Número de clases</translation>
    </message>
</context>
<context>
    <name>QgsGrassAttributes</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassattributes.cpp" line="266"/>
        <source>Warning</source>
        <translation>Atención</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassattributes.cpp" line="121"/>
        <source>Column</source>
        <translation>Columna</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassattributes.cpp" line="122"/>
        <source>Value</source>
        <translation>Valor</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassattributes.cpp" line="123"/>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassattributes.cpp" line="267"/>
        <source>ERROR</source>
        <translation>ERROR</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassattributes.cpp" line="271"/>
        <source>OK</source>
        <translation>Aceptar</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassattributes.cpp" line="157"/>
        <source>Layer</source>
        <translation>Capa</translation>
    </message>
</context>
<context>
    <name>QgsGrassAttributesBase</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassattributesbase.ui" line="43"/>
        <source>GRASS Attributes</source>
        <translation>Atributos de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassattributesbase.ui" line="80"/>
        <source>Tab 1</source>
        <translation>Tab 1</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassattributesbase.ui" line="112"/>
        <source>result</source>
        <translation>resultado</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassattributesbase.ui" line="182"/>
        <source>Update database record</source>
        <translation>Actualizar registro de la base de datos</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassattributesbase.ui" line="185"/>
        <source>Update</source>
        <translation>Actualizar</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassattributesbase.ui" line="210"/>
        <source>Add new category using settings in GRASS Edit toolbox</source>
        <translation>Añadir nueva categoría utilizando las especificaciones de la caja de herramientas de edición de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassattributesbase.ui" line="213"/>
        <source>New</source>
        <translation>Nueva</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassattributesbase.ui" line="238"/>
        <source>Delete selected category</source>
        <translation>Borrar la categoría seleccionada</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassattributesbase.ui" line="241"/>
        <source>Delete</source>
        <translation>Borrar</translation>
    </message>
</context>
<context>
    <name>QgsGrassBrowser</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="43"/>
        <source>Tools</source>
        <translation>Herramientas</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="47"/>
        <source>Add selected map to canvas</source>
        <translation>Añadir el mapa seleccionado a la vista del mapa</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="55"/>
        <source>Copy selected map</source>
        <translation>Copiar el mapa seleccionado</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="63"/>
        <source>Rename selected map</source>
        <translation>Cambiar nombre del mapa seleccionado</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="71"/>
        <source>Delete selected map</source>
        <translation>Borrar el mapa seleccionado</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="79"/>
        <source>Set current region to selected map</source>
        <translation>Establecer la región actual al mapa seleccionado</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="87"/>
        <source>Refresh</source>
        <translation>Actualizar</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="255"/>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="319"/>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="355"/>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="372"/>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="412"/>
        <source>Warning</source>
        <translation>Atención</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="255"/>
        <source>Cannot copy map </source>
        <translation>No se puede copiar el mapa </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="257"/>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="321"/>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="374"/>
        <source>&lt;br&gt;command: </source>
        <translation>&lt;br&gt;comando: </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="319"/>
        <source>Cannot rename map </source>
        <translation>No se puede cambiar el nombre del mapa</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="356"/>
        <source>Delete map &lt;b&gt;</source>
        <translation>Borrar mapa &lt;b&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="372"/>
        <source>Cannot delete map </source>
        <translation>No se puede borrar el mapa </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="413"/>
        <source>Cannot write new region</source>
        <translation>No se puede guardar una nueva región</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="239"/>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="240"/>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="303"/>
        <location filename="../src/plugins/grass/qgsgrassbrowser.cpp" line="304"/>
        <source>New name</source>
        <translation>Nuevo nombre</translation>
    </message>
</context>
<context>
    <name>QgsGrassEdit</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="237"/>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="244"/>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="695"/>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="726"/>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="1085"/>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="1382"/>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="1403"/>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="1409"/>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="1420"/>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="1454"/>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="1522"/>
        <source>Warning</source>
        <translation>Atención</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="237"/>
        <source>You are not owner of the mapset, cannot open the vector for editing.</source>
        <translation>No es propietario del directorio de mapas, no puede abrir el vectorial para editarlo.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="244"/>
        <source>Cannot open vector for update.</source>
        <translation>No se puede abrir el vectorial para actualizar.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="256"/>
        <source>Edit tools</source>
        <translation>Herramientas de edición</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="259"/>
        <source>New point</source>
        <translation>Nuevo punto</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="265"/>
        <source>New line</source>
        <translation>Nueva línea</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="271"/>
        <source>New boundary</source>
        <translation>Nuevo contorno</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="277"/>
        <source>New centroid</source>
        <translation>Nuevo centroide</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="283"/>
        <source>Move vertex</source>
        <translation>Mover vértice</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="289"/>
        <source>Add vertex</source>
        <translation>Añadir vértice</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="295"/>
        <source>Delete vertex</source>
        <translation>Borrar vértice</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="301"/>
        <source>Move element</source>
        <translation>Mover elemento</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="307"/>
        <source>Split line</source>
        <translation>Dividir línea</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="313"/>
        <source>Delete element</source>
        <translation>Borrar elemento</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="319"/>
        <source>Edit attributes</source>
        <translation>Editar atributos</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="324"/>
        <source>Close</source>
        <translation>Cerrar</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="699"/>
        <source>Info</source>
        <translation>Info</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="699"/>
        <source>The table was created</source>
        <translation>La tabla ha sido creada</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="1382"/>
        <source>Tool not yet implemented.</source>
        <translation>Herramienta no implementada todavía.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="1403"/>
        <source>Cannot check orphan record: </source>
        <translation>No se puede comprobar registro huérfano: </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="1410"/>
        <source>Orphan record was left in attribute table. &lt;br&gt;Delete the record?</source>
        <translation>El registro huérfano se dejó en la tabla de atributos. &lt;br&gt;¿Borrar el registro?</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="1420"/>
        <source>Cannot delete orphan record: </source>
        <translation>No se puede borrar el registro huérfano: </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="1454"/>
        <source>Cannot describe table for field </source>
        <translation>No se puede describir la tabla por el campo </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="1885"/>
        <source>Left: </source>
        <translation>Izquierda: </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="1886"/>
        <source>Middle: </source>
        <translation>Medio: </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="407"/>
        <source>Background</source>
        <translation>Fondo</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="408"/>
        <source>Highlight</source>
        <translation>Resaltado</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="409"/>
        <source>Dynamic</source>
        <translation>Dinámico</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="410"/>
        <source>Point</source>
        <translation>Punto</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="411"/>
        <source>Line</source>
        <translation>Línea</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="412"/>
        <source>Boundary (no area)</source>
        <translation>Contorno (sin área)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="413"/>
        <source>Boundary (1 area)</source>
        <translation>Contorno (1 área)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="414"/>
        <source>Boundary (2 areas)</source>
        <translation>Contorno (2 áreas)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="415"/>
        <source>Centroid (in area)</source>
        <translation>Centroide (en el área)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="416"/>
        <source>Centroid (outside area)</source>
        <translation>Centroide (fuera del área)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="417"/>
        <source>Centroid (duplicate in area)</source>
        <translation>Centroide (duplicado en el área)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="418"/>
        <source>Node (1 line)</source>
        <translation>Nodo (1 línea)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="419"/>
        <source>Node (2 lines)</source>
        <translation>Nodo (2 líneas)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="548"/>
        <source>Next not used</source>
        <translation>La siguiente sin usar</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="549"/>
        <source>Manual entry</source>
        <translation>Entrada manual</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="550"/>
        <source>No category</source>
        <translation>Ninguna categoría</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassedit.cpp" line="1887"/>
        <source>Right: </source>
        <translation>Derecha: </translation>
    </message>
</context>
<context>
    <name>QgsGrassEditBase</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrasseditbase.ui" line="13"/>
        <source>GRASS Edit</source>
        <translation>Edición de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasseditbase.ui" line="40"/>
        <location filename="../src/plugins/grass/qgsgrasseditbase.ui" line="84"/>
        <source>Category</source>
        <translation>Categoría</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasseditbase.ui" line="54"/>
        <source>Mode</source>
        <translation>Modo</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasseditbase.ui" line="154"/>
        <source>Settings</source>
        <translation>Configuración</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasseditbase.ui" line="162"/>
        <source>Snapping in screen pixels</source>
        <translation>Autoensamblado en píxeles de la pantalla</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasseditbase.ui" line="213"/>
        <source>Symbology</source>
        <translation>Simbología</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasseditbase.ui" line="227"/>
        <source>Line width</source>
        <translation>Ancho de línea</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasseditbase.ui" line="250"/>
        <source>Marker size</source>
        <translation>Tamaño de marcador</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasseditbase.ui" line="327"/>
        <source>Table</source>
        <translation>Tabla</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasseditbase.ui" line="416"/>
        <source>Add Column</source>
        <translation>Añadir columna</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasseditbase.ui" line="423"/>
        <source>Create / Alter Table</source>
        <translation>Crear / modificar tabla</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasseditbase.ui" line="107"/>
        <location filename="../src/plugins/grass/qgsgrasseditbase.ui" line="335"/>
        <source>Layer</source>
        <translation>Capa</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasseditbase.ui" line="295"/>
        <source>Disp</source>
        <translation type="unfinished">Título</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasseditbase.ui" line="300"/>
        <source>Color</source>
        <translation>Color</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasseditbase.ui" line="305"/>
        <location filename="../src/plugins/grass/qgsgrasseditbase.ui" line="388"/>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasseditbase.ui" line="310"/>
        <source>Index</source>
        <translation>Índice</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasseditbase.ui" line="383"/>
        <source>Column</source>
        <translation>Columna</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasseditbase.ui" line="393"/>
        <source>Length</source>
        <translation>Longitud</translation>
    </message>
</context>
<context>
    <name>QgsGrassElementDialog</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassutils.cpp" line="114"/>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassutils.cpp" line="143"/>
        <source>Ok</source>
        <translation>Aceptar</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassutils.cpp" line="148"/>
        <source>&lt;font color=&apos;red&apos;&gt;Enter a name!&lt;/font&gt;</source>
        <translation>&lt;font color=&apos;red&apos;&gt;¡Introduzca un nombre!&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassutils.cpp" line="159"/>
        <source>&lt;font color=&apos;red&apos;&gt;This is name of the source!&lt;/font&gt;</source>
        <translation>&lt;font color=&apos;red&apos;&gt;¡Este es el nombre del origen!&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassutils.cpp" line="165"/>
        <source>&lt;font color=&apos;red&apos;&gt;Exists!&lt;/font&gt;</source>
        <translation>&lt;font color=&apos;red&apos;&gt;¡Existe!&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassutils.cpp" line="166"/>
        <source>Overwrite</source>
        <translation>Sobrescribir</translation>
    </message>
</context>
<context>
    <name>QgsGrassMapcalc</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="77"/>
        <source>Mapcalc tools</source>
        <translation>Herramientas Mapcalc</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="80"/>
        <source>Add map</source>
        <translation>Añadir mapa</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="87"/>
        <source>Add constant value</source>
        <translation>Añadir constante</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="94"/>
        <source>Add operator or function</source>
        <translation>Añadir operador o función</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="101"/>
        <source>Add connection</source>
        <translation>Añadir conexión</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="108"/>
        <source>Select item</source>
        <translation>Seleccionar elemento</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="115"/>
        <source>Delete selected item</source>
        <translation>Borrar elemento seleccionado</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="125"/>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="130"/>
        <source>Save</source>
        <translation>Guardar</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="136"/>
        <source>Save as</source>
        <translation>Guardar como</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="144"/>
        <source>Addition</source>
        <translation>Suma</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="145"/>
        <source>Subtraction</source>
        <translation>Resta</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="146"/>
        <source>Multiplication</source>
        <translation>Multiplicación</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="147"/>
        <source>Division</source>
        <translation>División</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="148"/>
        <source>Modulus</source>
        <translation>Módulo</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="149"/>
        <source>Exponentiation</source>
        <translation>Exponencial</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="152"/>
        <source>Equal</source>
        <translation>Igual</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="153"/>
        <source>Not equal</source>
        <translation>Distinto</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="154"/>
        <source>Greater than</source>
        <translation>Mayor que</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="155"/>
        <source>Greater than or equal</source>
        <translation>Mayor o igual que</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="156"/>
        <source>Less than</source>
        <translation>Menor que</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="157"/>
        <source>Less than or equal</source>
        <translation>Menor o igual que</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="158"/>
        <source>And</source>
        <translation>Y</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="159"/>
        <source>Or</source>
        <translation>O</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="162"/>
        <source>Absolute value of x</source>
        <translation>Valor absoluto de x</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="163"/>
        <source>Inverse tangent of x (result is in degrees)</source>
        <translation>Inverso de la tangente de x (resultado en grados)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="164"/>
        <source>Inverse tangent of y/x (result is in degrees)</source>
        <translation>Inverso de la tangente de y/x (resultado en grados)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="165"/>
        <source>Current column of moving window (starts with 1)</source>
        <translation>Columna actual de la ventana movible (empieza con 1)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="166"/>
        <source>Cosine of x (x is in degrees)</source>
        <translation>Coseno de x (x en grados)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="167"/>
        <source>Convert x to double-precision floating point</source>
        <translation>Convertir x a coma flotante (precisión doble)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="168"/>
        <source>Current east-west resolution</source>
        <translation>Resolución actual Este-Oeste</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="169"/>
        <source>Exponential function of x</source>
        <translation>Elevado a x</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="170"/>
        <source>x to the power y</source>
        <translation>x elevado a y</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="171"/>
        <source>Convert x to single-precision floating point</source>
        <translation>Convertir x a coma flotante (precisión simple)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="172"/>
        <source>Decision: 1 if x not zero, 0 otherwise</source>
        <translation>Decisión: 1 si x no es cero, 0 para el resto</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="173"/>
        <source>Decision: a if x not zero, 0 otherwise</source>
        <translation>Decisión: a si x no es cero, 0 para el resto</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="174"/>
        <source>Decision: a if x not zero, b otherwise</source>
        <translation>Decisión: a si x no es cero, b para el resto</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="175"/>
        <source>Decision: a if x &gt; 0, b if x is zero, c if x &lt; 0</source>
        <translation>Decisión: a si x &gt; 0, b si x es cero, c si x &lt; 0</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="176"/>
        <source>Convert x to integer [ truncates ]</source>
        <translation>Convertir x a entero [ truncar ]</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="177"/>
        <source>Check if x = NULL</source>
        <translation>Comprobar si x = NULO</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="178"/>
        <source>Natural log of x</source>
        <translation>Logaritmo neperiano de x</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="179"/>
        <source>Log of x base b</source>
        <translation>Logaritmo de x en base b</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="180"/>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="181"/>
        <source>Largest value</source>
        <translation>Máximo</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="182"/>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="183"/>
        <source>Median value</source>
        <translation>Mediana</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="184"/>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="185"/>
        <source>Smallest value</source>
        <translation>Mínimo</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="186"/>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="187"/>
        <source>Mode value</source>
        <translation>Moda</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="188"/>
        <source>1 if x is zero, 0 otherwise</source>
        <translation>1 si x = 0, 0 para el resto</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="189"/>
        <source>Current north-south resolution</source>
        <translation>Resolución Norte-Sur actual</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="190"/>
        <source>NULL value</source>
        <translation>Valor NULO</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="191"/>
        <source>Random value between a and b</source>
        <translation>Valor aleatorio entre a y b</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="192"/>
        <source>Round x to nearest integer</source>
        <translation>Redondear x al número entero más próximo</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="193"/>
        <source>Current row of moving window (Starts with 1)</source>
        <translation>Fila actual de la ventana movible (empieza con 1)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="194"/>
        <source>Sine of x (x is in degrees)</source>
        <comment>sin(x)</comment>
        <translation>Seno de x (x en grados)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="195"/>
        <source>Square root of x</source>
        <comment>sqrt(x)</comment>
        <translation>Raíz cuadrada de x</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="196"/>
        <source>Tangent of x (x is in degrees)</source>
        <comment>tan(x)</comment>
        <translation>Tangente de x (x en grados)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="197"/>
        <source>Current x-coordinate of moving window</source>
        <translation>Coordenada X de la ventana movible</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="198"/>
        <source>Current y-coordinate of moving window</source>
        <translation>Coordenada Y de la ventana movible</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="486"/>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="516"/>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="538"/>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="571"/>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="768"/>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="1044"/>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="1062"/>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="1069"/>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="1235"/>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="1242"/>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="1259"/>
        <source>Warning</source>
        <translation>Atención</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="486"/>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="538"/>
        <source>Cannot get current region</source>
        <translation>No se puede estimar la región actual</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="516"/>
        <source>Cannot check region of map </source>
        <translation>No se puede comprobar la región del mapa </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="571"/>
        <source>Cannot get region of map </source>
        <translation>No se puede obtener la región del mapa </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="768"/>
        <source>No GRASS raster maps currently in QGIS</source>
        <translation>Actualmente no hay mapas ráster de GRASS en QGIS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="1044"/>
        <source>Cannot create &apos;mapcalc&apos; directory in current mapset.</source>
        <translation>No se puede crear el directorio &quot;mapcalc&quot; en el directorio de mapas actual.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="1055"/>
        <source>New mapcalc</source>
        <translation>Nuevo mapcalc</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="1056"/>
        <source>Enter new mapcalc name:</source>
        <translation>Introduzca el nombre del nuevo mapcalc:</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="1062"/>
        <source>Enter vector name</source>
        <translation>Introducir nombre del vectorial</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="1070"/>
        <source>The file already exists. Overwrite? </source>
        <translation>El archivo ya existe. ¿Desea sobrescribirlo?</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="1088"/>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="1106"/>
        <source>Save mapcalc</source>
        <translation>Guardar mapcalc</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="1088"/>
        <source>File name empty</source>
        <translation>Nombre de archivo vacío</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="1107"/>
        <source>Cannot open mapcalc file</source>
        <translation>No se puede abrir el archivo mapcalc</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="1235"/>
        <source>The mapcalc schema (</source>
        <translation>El esquema del mapcalc (</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="1236"/>
        <source>) not found.</source>
        <translation>) no se ha encontrado.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="1242"/>
        <source>Cannot open mapcalc schema (</source>
        <translation>No se puede abrir el esquema del mapcalc (</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="1255"/>
        <source>Cannot read mapcalc schema (</source>
        <translation>No se puede leer el esquema del mapcalc (</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="1256"/>
        <source>
at line </source>
        <translation>
en la línea </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="1257"/>
        <source> column </source>
        <translation> columna </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="209"/>
        <location filename="../src/plugins/grass/qgsgrassmapcalc.cpp" line="1330"/>
        <source>Output</source>
        <translation>Salida</translation>
    </message>
</context>
<context>
    <name>QgsGrassMapcalcBase</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalcbase.ui" line="13"/>
        <source>MainWindow</source>
        <translation>Ventana principal</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmapcalcbase.ui" line="22"/>
        <source>Output</source>
        <translation>Salida</translation>
    </message>
</context>
<context>
    <name>QgsGrassModule</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="1111"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="1378"/>
        <source>Run</source>
        <translation>Ejecutar</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="1350"/>
        <source>Stop</source>
        <translation>Detener</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="159"/>
        <source>Module</source>
        <translation>Módulo</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="173"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="178"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="189"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="215"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="978"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="1131"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="1142"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="1169"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="1272"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="1344"/>
        <source>Warning</source>
        <translation>Atención</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="173"/>
        <source>The module file (</source>
        <translation>El archivo del módulo (</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="173"/>
        <source>) not found.</source>
        <translation>) no se ha encontrado.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="178"/>
        <source>Cannot open module file (</source>
        <translation>No se puede abrir el archivo del módulo (</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="178"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="964"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="968"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="980"/>
        <source>)</source>
        <translation>)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="186"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="975"/>
        <source>Cannot read module file (</source>
        <translation>No se puede leer el archivo del módulo (</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="186"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="975"/>
        <source>):
</source>
        <translation>):
</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="186"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="975"/>
        <source>
at line </source>
        <translation>
en la línea </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="215"/>
        <source>Module </source>
        <translation>Módulo </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="215"/>
        <source> not found</source>
        <translation> no encontrado</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="259"/>
        <source>Cannot find man page </source>
        <translation>No se puede encontrar la página del manual </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="968"/>
        <source>Not available, cannot open description (</source>
        <translation>No disponible, no se puede abrir la descripción (</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="976"/>
        <source> column </source>
        <translation> columna </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="980"/>
        <source>Not available, incorrect description (</source>
        <translation>No disponible, descripción incorrecta (</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="1142"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="1170"/>
        <source>Cannot get input region</source>
        <translation>No se puede obtener la región de entrada</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="1158"/>
        <source>Use Input Region</source>
        <translation>Usar región de entrada</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="1272"/>
        <source>Cannot find module </source>
        <translation>No se puede encontrar el módulo </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="1344"/>
        <source>Cannot start module: </source>
        <translation>No se puede iniciar el módulo: </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="1363"/>
        <source>&lt;B&gt;Successfully finished&lt;/B&gt;</source>
        <translation>&lt;B&gt;Finalizado correctamente&lt;/B&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="1371"/>
        <source>&lt;B&gt;Finished with error&lt;/B&gt;</source>
        <translation>&lt;B&gt;Finalizado con error&lt;/B&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="1376"/>
        <source>&lt;B&gt;Module crashed or killed&lt;/B&gt;</source>
        <translation>&lt;B&gt;Módulo finalizado o matado&lt;/B&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="964"/>
        <source>Not available, description not found (</source>
        <translation>No disponible, no se encuentra la descripción (</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="260"/>
        <source>Please ensure you have the GRASS documentation installed.</source>
        <translation>Por favor, asegúrese de que tiene instalada la documentación de GRASS.</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleBase</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodulebase.ui" line="13"/>
        <source>GRASS Module</source>
        <translation>Módulo de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodulebase.ui" line="20"/>
        <source>Options</source>
        <translation>Opciones</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodulebase.ui" line="25"/>
        <source>Output</source>
        <translation>Salida</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodulebase.ui" line="47"/>
        <source>Manual</source>
        <translation>Manual</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodulebase.ui" line="116"/>
        <source>Run</source>
        <translation>Ejecutar</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodulebase.ui" line="139"/>
        <source>View output</source>
        <translation>Ver salida</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodulebase.ui" line="159"/>
        <source>Close</source>
        <translation>Cerrar</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodulebase.ui" line="78"/>
        <source>TextLabel</source>
        <translation>EtiquetaDeTexto</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleField</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="2808"/>
        <source>Attribute field</source>
        <translation>Campo de atributos</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleFile</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="3016"/>
        <source>File</source>
        <translation>Archivo</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="3132"/>
        <source>:&amp;nbsp;missing value</source>
        <translation>:&amp;nbsp;falta el valor</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="3139"/>
        <source>:&amp;nbsp;directory does not exist</source>
        <translation>:&amp;nbsp;el directorio no existe</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleGdalInput</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="2613"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="2628"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="2758"/>
        <source>Warning</source>
        <translation>Atención</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="2613"/>
        <source>Cannot find layeroption </source>
        <translation>No se puede encontrar la opción capa </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="2759"/>
        <source>PostGIS driver in OGR does not support schemas!&lt;br&gt;Only the table name will be used.&lt;br&gt;It can result in wrong input if more tables of the same name&lt;br&gt;are present in the database.</source>
        <translation>El controlador PostGIS de OGR no soporta esquemas.&lt;br&gt;Sólo se usará el nombre de la tabla.&lt;br&gt;Esto puede dar como resultado entradas incorrectas si hay más tablas con el mismo nombre&lt;br&gt;en la base de datos.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="2786"/>
        <source>:&amp;nbsp;no input</source>
        <translation>:&amp;nbsp;ninguna entrada</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="2628"/>
        <source>Cannot find whereoption </source>
        <translation>No se puede encontrar la opción dónde </translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleInput</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="2041"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="2050"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="2123"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="2140"/>
        <source>Warning</source>
        <translation>Atención</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="2041"/>
        <source>Cannot find typeoption </source>
        <translation>No se puede encontrar la opción tipo </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="2050"/>
        <source>Cannot find values for typeoption </source>
        <translation>No se pueden encontrar valores para la opción tipo </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="2123"/>
        <source>Cannot find layeroption </source>
        <translation>No se puede encontrar la opción capa </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="2140"/>
        <source>GRASS element </source>
        <translation>Elemento de GRASS </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="2140"/>
        <source> not supported</source>
        <translation> no soportado</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="2164"/>
        <source>Use region of this map</source>
        <translation>Usar la región de este mapa</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="2510"/>
        <source>:&amp;nbsp;no input</source>
        <translation>:&amp;nbsp;ninguna entrada</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleOption</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="1949"/>
        <source>:&amp;nbsp;missing value</source>
        <translation>:&amp;nbsp;falta el valor</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleSelection</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="2900"/>
        <source>Attribute field</source>
        <translation>Campo de atributo</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleStandardOptions</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="324"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="342"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="361"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="397"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="537"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="771"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="806"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="830"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="870"/>
        <source>Warning</source>
        <translation>Atención</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="324"/>
        <source>Cannot find module </source>
        <translation>No se puede encontrar el módulo </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="342"/>
        <source>Cannot start module </source>
        <translation>No se puede iniciar el módulo </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="356"/>
        <source>Cannot read module description (</source>
        <translation>No se puede leer la descripción del módulo (</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="356"/>
        <source>):
</source>
        <translation>):
</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="356"/>
        <source>
at line </source>
        <translation>
en la línea </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="357"/>
        <source> column </source>
        <translation> columna </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="397"/>
        <source>Cannot find key </source>
        <translation>No se puede encontrar la clave </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="537"/>
        <source>Item with id </source>
        <translation>Ítem con ID </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="537"/>
        <source> not found</source>
        <translation> no encontrado</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="771"/>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="830"/>
        <source>Cannot get current region</source>
        <translation>No se puede obtener la región actual</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="806"/>
        <source>Cannot check region of map </source>
        <translation>No se puede comprobar la región del mapa </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassmodule.cpp" line="870"/>
        <source>Cannot set region of map </source>
        <translation>No se puede establecer la región del mapa </translation>
    </message>
</context>
<context>
    <name>QgsGrassNewMapset</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="137"/>
        <source>Database</source>
        <translation>Base de datos</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="149"/>
        <source>Location 2</source>
        <translation>Localización 2</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="144"/>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="146"/>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="153"/>
        <source>User&apos;s mapset</source>
        <translation>Directorio de mapas del usuario</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="142"/>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="151"/>
        <source>System mapset</source>
        <translation>Directorio de mapas del sistema</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="140"/>
        <source>Location 1</source>
        <translation>Localización 1</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="202"/>
        <source>Enter path to GRASS database</source>
        <translation>Introduzca la ruta a la base de datos de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="210"/>
        <source>The directory doesn&apos;t exist!</source>
        <translation>¡El directorio no existe!</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="239"/>
        <source>No writable locations, the database not writable!</source>
        <translation>¡Ninguna localización que se pueda escribir, la base de datos no se puede escribir!</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="356"/>
        <source>Enter location name!</source>
        <translation>¡Introduzca el nombre de la localización!</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="363"/>
        <source>The location exists!</source>
        <translation>¡La localización existe!</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="494"/>
        <source>Selected projection is not supported by GRASS!</source>
        <translation>¡La proyección seleccionada no está soportada por GRASS!</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="529"/>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="578"/>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="754"/>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="760"/>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="775"/>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="866"/>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="876"/>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="903"/>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="989"/>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="1077"/>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="1086"/>
        <source>Warning</source>
        <translation>Atención</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="530"/>
        <source>Cannot create projection.</source>
        <translation>No se puede crear la proyección.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="578"/>
        <source>Cannot reproject previously set region, default region set.</source>
        <translation>No se puede reproyectar la región establecida previamente, se establece la región predeterminada.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="706"/>
        <source>North must be greater than south</source>
        <translation>El Norte debe ser mayor que el Sur</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="711"/>
        <source>East must be greater than west</source>
        <translation>El Este debe ser mayor que el Oeste</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="755"/>
        <source>Regions file (</source>
        <translation>Archivo de regiones (</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="755"/>
        <source>) not found.</source>
        <translation>) no encontrado.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="761"/>
        <source>Cannot open locations file (</source>
        <translation>No se puede abrir el archivo de localizaciones (</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="761"/>
        <source>)</source>
        <translation>)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="771"/>
        <source>Cannot read locations file (</source>
        <translation>No se puede leer el archivo de localizaciones (</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="771"/>
        <source>):
</source>
        <translation>):
</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="772"/>
        <source>
at line </source>
        <translation>
en la línea </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="773"/>
        <source> column </source>
        <translation> columna </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="904"/>
        <source>Cannot reproject selected region.</source>
        <translation>No se puede reproyectar la región seleccionada.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="989"/>
        <source>Cannot reproject region</source>
        <translation>No se puede reproyectar la región</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="1207"/>
        <source>Enter mapset name.</source>
        <translation>Introduzca el nombre del directorio de mapas.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="1217"/>
        <source>The mapset already exists</source>
        <translation>El directorio de mapas ya existe</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="1235"/>
        <source>Database: </source>
        <translation>Base de datos: </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="1246"/>
        <source>Location: </source>
        <translation>Localización: </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="1248"/>
        <source>Mapset: </source>
        <translation>Directorio de mapas: </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="1279"/>
        <source>Create location</source>
        <translation>Crear localización</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="1280"/>
        <source>Cannot create new location: </source>
        <translation>No se puede crear la nueva localización: </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="1310"/>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="1321"/>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="1328"/>
        <source>Create mapset</source>
        <translation>Crear directorio de mapas</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="1321"/>
        <source>Cannot open DEFAULT_WIND</source>
        <translation>No se puede abrir DEFAULT_WIND</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="1328"/>
        <source>Cannot open WIND</source>
        <translation>No se puede abrir WIND</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="1350"/>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="1356"/>
        <source>New mapset</source>
        <translation>Nuevo directorio de mapas</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="1351"/>
        <source>New mapset successfully created, but cannot be opened: </source>
        <translation>El nuevo directorio de mapas de creó correctamente, pero no se puede abrir: </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="1357"/>
        <source>New mapset successfully created and set as current working mapset.</source>
        <translation>El nuevo directorio de mapas se creó correctamente y se estableció como el directorio de mapas de trabajo actual.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="1311"/>
        <source>Cannot create new mapset directory</source>
        <translation>No se puede crear el nuevo directorio de mapas</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="867"/>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="877"/>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="1078"/>
        <location filename="../src/plugins/grass/qgsgrassnewmapset.cpp" line="1087"/>
        <source>Cannot create QgsCoordinateReferenceSystem</source>
        <translation>No se puede crear QgsCoordinateReferenceSystem</translation>
    </message>
</context>
<context>
    <name>QgsGrassNewMapsetBase</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="52"/>
        <source>Example directory tree:</source>
        <translation>Ejemplo de árbol de directorios:</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="561"/>
        <source>Database Error</source>
        <translation>Error de la base de datos</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="586"/>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="2668"/>
        <source>Database:</source>
        <translation>Base de datos:</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="607"/>
        <source>Select existing directory or create a new one:</source>
        <translation>Seleccionar un directorio existente o crear uno nuevo:</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="639"/>
        <source>Location</source>
        <translation>Localización</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="654"/>
        <source>Select location</source>
        <translation>Seleccionar localización</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="671"/>
        <source>Create new location</source>
        <translation>Crear nueva localización</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="1147"/>
        <source>Location Error</source>
        <translation>Error en la localización</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="1669"/>
        <source>Projection Error</source>
        <translation>Error de la proyección</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="1676"/>
        <source>Coordinate system</source>
        <translation>Sistema de coordenadas</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="1188"/>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="1688"/>
        <source>Projection</source>
        <translation>Proyección</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="1695"/>
        <source>Not defined</source>
        <translation>Sin definir</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="1798"/>
        <source>Set current QGIS extent</source>
        <translation>Establecer la extensión actual de QGIS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="1827"/>
        <source>Set</source>
        <translation>Establecer</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="1839"/>
        <source>Region Error</source>
        <translation>Error de la región</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="1870"/>
        <source>S</source>
        <translation>S</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="1906"/>
        <source>W</source>
        <translation>O</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="1945"/>
        <source>E</source>
        <translation>E</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="1981"/>
        <source>N</source>
        <translation>N</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="2041"/>
        <source>New mapset:</source>
        <translation>Nuevo directorio de mapas:</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="2526"/>
        <source>Mapset Error</source>
        <translation>Error del directorio de mapas</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="2567"/>
        <source>&lt;p align=&quot;center&quot;&gt;Existing masets&lt;/p&gt;</source>
        <translation>&lt;p align=&quot;center&quot;&gt;Directorios de mapas existentes&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="2687"/>
        <source>Location:</source>
        <translation>Localización:</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="2706"/>
        <source>Mapset:</source>
        <translation>Directorio de mapas:</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="13"/>
        <source>New Mapset</source>
        <translation>Nuevo directorio de mapas</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="17"/>
        <source>GRASS Database</source>
        <translation>Base de datos de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="39"/>
        <source>Tree</source>
        <translation>Árbol</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="44"/>
        <source>Comment</source>
        <translation>Comentario</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="59"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;GRASS data are stored in tree directory structure. The GRASS database is the top-level directory in this tree structure.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;Los datos de GRASS se guardan en una estructura de directorios en árbol. La base de datos de GRASS es el directorio superior en esta estructura en árbol.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="596"/>
        <source>Browse...</source>
        <translation>Explorar...</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="633"/>
        <source>GRASS Location</source>
        <translation>Localización de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="1163"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;The GRASS location is a collection of maps for a particular territory or project.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;La localización de GRASS es una colección de mapas de un territorio o proyecto en particular.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="1716"/>
        <source>Default GRASS Region</source>
        <translation>Región predeterminada de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="1747"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;The GRASS region defines a workspace for raster modules. The default region is valid for one location. It is possible to set a different region in each mapset. It is possible to change the default location region later.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;La región de GRASS define un entorno de trabajo para los módulos ráster. La región predeterminada es válida para una localización. Es posible establecer una región diferente en cada directorio de mapas. Se puede cambiar la región predeterminada más tarde.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="2033"/>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="2587"/>
        <source>Mapset</source>
        <translation>Directorio de mapa</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="2592"/>
        <source>Owner</source>
        <translation>Propietario</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="2625"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;The GRASS mapset is a collection of maps used by one user. A user can read maps from all mapsets in the location but he can open for writing only his mapset (owned by user).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;El directorio de mapas de GRASS es una colección de mapas utilizados por un usuario. Un usuario puede leer mapas de todos los directorios de mapas de la localización, pero sólo puede abrir para editar su directorio de mapas.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassnewmapsetbase.ui" line="2650"/>
        <source>Create New Mapset</source>
        <translation>Crear nuevo directorio de mapas</translation>
    </message>
</context>
<context>
    <name>QgsGrassPlugin</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="127"/>
        <source>Open mapset</source>
        <translation>Abrir directorio de mapas</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="128"/>
        <source>New mapset</source>
        <translation>Nuevo directorio de mapas</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="129"/>
        <source>Close mapset</source>
        <translation>Cerrar directorio de mapas</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="132"/>
        <source>Add GRASS vector layer</source>
        <translation>Añadir capa vectorial de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="134"/>
        <source>Add GRASS raster layer</source>
        <translation>Añadir capa ráster de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="136"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="150"/>
        <source>Open GRASS tools</source>
        <translation>Abrir herramientas de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="139"/>
        <source>Display Current Grass Region</source>
        <translation>Mostrar región actual de Grass</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="143"/>
        <source>Edit Current Grass Region</source>
        <translation>Editar la región actual de Grass</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="145"/>
        <source>Edit Grass Vector layer</source>
        <translation>Editar capa vectorial de Grass</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="148"/>
        <source>Adds a GRASS vector layer to the map canvas</source>
        <translation>Añade una capa vectorial de GRASS a la vista del mapa</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="149"/>
        <source>Adds a GRASS raster layer to the map canvas</source>
        <translation>Añade una capa ráster de GRASS a la vista del mapa</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="151"/>
        <source>Displays the current GRASS region as a rectangle on the map canvas</source>
        <translation>Muestra la región actual de GRASS como un rectángulo en la vista del mapa</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="152"/>
        <source>Edit the current GRASS region</source>
        <translation>Editar la región actual de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="153"/>
        <source>Edit the currently selected GRASS vector layer.</source>
        <translation>Editar la capa vectorial de GRASS seleccionada actualmente.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="168"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="169"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="170"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="171"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="172"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="173"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="174"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="175"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="176"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="177"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="762"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="763"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="764"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="765"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="766"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="767"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="768"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="769"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="770"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="771"/>
        <source>&amp;GRASS</source>
        <translation>&amp;GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="180"/>
        <source>GRASS</source>
        <translation>GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="64"/>
        <source>GrassVector</source>
        <translation>VectorialDeGrass</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="65"/>
        <source>0.1</source>
        <translation>0.1</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="66"/>
        <source>GRASS layer</source>
        <translation>Capa de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="146"/>
        <source>Create new Grass Vector</source>
        <translation>Crear nuevo vectorial de Grass</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="341"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="411"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="455"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="479"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="504"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="519"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="550"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="562"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="663"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="679"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="733"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="743"/>
        <source>Warning</source>
        <translation>Atención</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="411"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="455"/>
        <source>GRASS Edit is already running.</source>
        <translation>Le edición de GRASS ya se está ejecutando.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="463"/>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="464"/>
        <source>New vector name</source>
        <translation>Nombre del nuevo vectorial</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="479"/>
        <source>Cannot create new vector: </source>
        <translation>No se puede crear el nuevo vectorial: </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="504"/>
        <source>New vector created but cannot be opened by data provider.</source>
        <translation>Se creó el nuevo vectorial pero el proveedor de datos no lo puede abrir.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="519"/>
        <source>Cannot start editing.</source>
        <translation>No se puede iniciar la edición.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="550"/>
        <source>GISDBASE, LOCATION_NAME or MAPSET is not set, cannot display current region.</source>
        <translation>BASE DE DATOS, NOMBRE_LOCALIZACIÓN o DIRECTORIO DE MAPAS no están establecidos, no se puede mostrar la región actual.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="562"/>
        <source>Cannot read current region: </source>
        <translation>No se puede leer la región actual: </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="663"/>
        <source>Cannot open the mapset. </source>
        <translation>No se abrir el directorio de mapas. </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="679"/>
        <source>Cannot close mapset. </source>
        <translation>No se puede cerrar el directorio de mapas. </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="734"/>
        <source>Cannot close current mapset. </source>
        <translation>No se puede cerrar el directorio de mapas actual. </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassplugin.cpp" line="743"/>
        <source>Cannot open GRASS mapset. </source>
        <translation>No se puede abrir el directorio de mapas de GRASS. </translation>
    </message>
</context>
<context>
    <name>QgsGrassRegion</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassregion.cpp" line="163"/>
        <location filename="../src/plugins/grass/qgsgrassregion.cpp" line="172"/>
        <location filename="../src/plugins/grass/qgsgrassregion.cpp" line="433"/>
        <source>Warning</source>
        <translation>Atención</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassregion.cpp" line="163"/>
        <source>GISDBASE, LOCATION_NAME or MAPSET is not set, cannot display current region.</source>
        <translation>BASE DE DATOS, NOMBRE_LOCALIZACIÓN o DIRECTORIO DE MAPAS no están establecidos, no se puede mostrar la región actual.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassregion.cpp" line="172"/>
        <source>Cannot read current region: </source>
        <translation>No se puede leer la región actual: </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassregion.cpp" line="433"/>
        <source>Cannot write region</source>
        <translation>No se puede escribir la región</translation>
    </message>
</context>
<context>
    <name>QgsGrassRegionBase</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassregionbase.ui" line="13"/>
        <source>GRASS Region Settings</source>
        <translation>Configuración de la región de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassregionbase.ui" line="92"/>
        <source>N</source>
        <translation>N</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassregionbase.ui" line="169"/>
        <source>W</source>
        <translation>O</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassregionbase.ui" line="195"/>
        <source>E</source>
        <translation>E</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassregionbase.ui" line="266"/>
        <source>S</source>
        <translation>S</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassregionbase.ui" line="316"/>
        <source>N-S Res</source>
        <translation>Resolución N-S</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassregionbase.ui" line="329"/>
        <source>Rows</source>
        <translation>Filas</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassregionbase.ui" line="339"/>
        <source>Cols</source>
        <translation>Columnas</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassregionbase.ui" line="352"/>
        <source>E-W Res</source>
        <translation>Resolución E-O</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassregionbase.ui" line="407"/>
        <source>Color</source>
        <translation>Color</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassregionbase.ui" line="427"/>
        <source>Width</source>
        <translation>Anchura</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassregionbase.ui" line="514"/>
        <source>OK</source>
        <translation>Aceptar</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassregionbase.ui" line="537"/>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
</context>
<context>
    <name>QgsGrassSelect</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselect.cpp" line="64"/>
        <source>Select GRASS Vector Layer</source>
        <translation>Seleccionar capa vectorial de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselect.cpp" line="71"/>
        <source>Select GRASS Raster Layer</source>
        <translation>Seleccionar capa ráster de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselect.cpp" line="78"/>
        <source>Select GRASS mapcalc schema</source>
        <translation>Seleccionar esquema mapcalc de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselect.cpp" line="86"/>
        <source>Select GRASS Mapset</source>
        <translation>Seleccionar directorio de mapas de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselect.cpp" line="428"/>
        <source>Warning</source>
        <translation>Atención</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselect.cpp" line="428"/>
        <source>Cannot open vector on level 2 (topology not available).</source>
        <translation>No se puede abrir el vectorial en el nivel 2 (topología no disponible).</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselect.cpp" line="485"/>
        <source>Choose existing GISDBASE</source>
        <translation>Elija una base de datos (GISBASE) existente</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselect.cpp" line="502"/>
        <source>Wrong GISDBASE, no locations available.</source>
        <translation>Base de datos (GISBASE) incorrecta, ninguna localización disponible.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselect.cpp" line="503"/>
        <source>Wrong GISDBASE</source>
        <translation>Base de datos (GISBASE) incorrecta</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselect.cpp" line="521"/>
        <source>Select a map.</source>
        <translation>Seleccionar un mapa.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselect.cpp" line="522"/>
        <source>No map</source>
        <translation>Ningún mapa</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselect.cpp" line="530"/>
        <source>No layer</source>
        <translation>Ninguna capa</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselect.cpp" line="531"/>
        <source>No layers available in this map</source>
        <translation>No hay ninguna capa disponible en este mapa</translation>
    </message>
</context>
<context>
    <name>QgsGrassSelectBase</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselectbase.ui" line="19"/>
        <source>Add GRASS Layer</source>
        <translation>Añadir capa de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselectbase.ui" line="82"/>
        <source>Gisdbase</source>
        <translation>Base de datos (Gisdbase)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselectbase.ui" line="95"/>
        <source>Location</source>
        <translation>Localización</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselectbase.ui" line="102"/>
        <source>Mapset</source>
        <translation>Directorio de mapa</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselectbase.ui" line="119"/>
        <source>Select or type map name (wildcards &apos;*&apos; and &apos;?&apos; accepted for rasters)</source>
        <translation>Seleccionar o escribir el nombre del mapa (se aceptan los comodines &apos;*&apos; y &apos;?&apos; para los ráster)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselectbase.ui" line="135"/>
        <source>Map name</source>
        <translation>Nombre del mapa</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselectbase.ui" line="142"/>
        <source>Layer</source>
        <translation>Capa</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselectbase.ui" line="185"/>
        <source>Browse</source>
        <translation>Explorar</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselectbase.ui" line="192"/>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassselectbase.ui" line="199"/>
        <source>OK</source>
        <translation>Aceptar</translation>
    </message>
</context>
<context>
    <name>QgsGrassShellBase</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrassshellbase.ui" line="19"/>
        <source>GRASS Shell</source>
        <translation>Consola de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrassshellbase.ui" line="49"/>
        <source>Close</source>
        <translation>Cerrar</translation>
    </message>
</context>
<context>
    <name>QgsGrassTools</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrasstools.cpp" line="125"/>
        <source>Browser</source>
        <translation>Explorador</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasstools.cpp" line="66"/>
        <source>GRASS Tools</source>
        <translation>Herramientas de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasstools.cpp" line="118"/>
        <location filename="../src/plugins/grass/qgsgrasstools.cpp" line="363"/>
        <source>GRASS Tools: </source>
        <translation>Herramientas de GRASS: </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasstools.cpp" line="185"/>
        <location filename="../src/plugins/grass/qgsgrasstools.cpp" line="233"/>
        <location filename="../src/plugins/grass/qgsgrasstools.cpp" line="238"/>
        <location filename="../src/plugins/grass/qgsgrasstools.cpp" line="250"/>
        <source>Warning</source>
        <translation>Atención</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasstools.cpp" line="185"/>
        <source>GRASS Shell is not compiled.</source>
        <translation>La consola de GRASS no está compilada.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasstools.cpp" line="233"/>
        <source>The config file (</source>
        <translation>El archivo de configuración (</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasstools.cpp" line="233"/>
        <source>) not found.</source>
        <translation>) no se ha encontrado.</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasstools.cpp" line="238"/>
        <source>Cannot open config file (</source>
        <translation>No se puede abrir el archivo de configuración (</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasstools.cpp" line="238"/>
        <source>)</source>
        <translation>)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasstools.cpp" line="247"/>
        <source>Cannot read config file (</source>
        <translation>No se puede leer el archivo de configuración (</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasstools.cpp" line="247"/>
        <source>
at line </source>
        <translation>
en la línea </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasstools.cpp" line="248"/>
        <source> column </source>
        <translation> columna </translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasstools.cpp" line="176"/>
        <source>Cannot start command shell (%1)</source>
        <translation>No se puede iniciar la consola de órdenes (%1)</translation>
    </message>
</context>
<context>
    <name>QgsGrassToolsBase</name>
    <message>
        <location filename="../src/plugins/grass/qgsgrasstoolsbase.ui" line="13"/>
        <source>Grass Tools</source>
        <translation>Herramientas de GRASS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasstoolsbase.ui" line="23"/>
        <source>Modules Tree</source>
        <translation>Árbol de módulos</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasstoolsbase.ui" line="42"/>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <location filename="../src/plugins/grass/qgsgrasstoolsbase.ui" line="51"/>
        <source>Modules List</source>
        <translation>Lista de módulos</translation>
    </message>
</context>
<context>
    <name>QgsGridMakerPlugin</name>
    <message>
        <location filename="../src/plugins/grid_maker/plugin.cpp" line="91"/>
        <source>&amp;Graticule Creator</source>
        <translation>&amp;Generador de cuadrícula</translation>
    </message>
    <message>
        <location filename="../src/plugins/grid_maker/plugin.cpp" line="92"/>
        <source>Creates a graticule (grid) and stores the result as a shapefile</source>
        <translation>Crea una cuadricula (grid) y guarda el resultado como un archivo shape</translation>
    </message>
    <message>
        <location filename="../src/plugins/grid_maker/plugin.cpp" line="98"/>
        <location filename="../src/plugins/grid_maker/plugin.cpp" line="134"/>
        <source>&amp;Graticules</source>
        <translation>&amp;Cuadrículas</translation>
    </message>
</context>
<context>
    <name>QgsGridMakerPluginGui</name>
    <message>
        <location filename="../src/plugins/grid_maker/plugingui.cpp" line="51"/>
        <location filename="../src/plugins/grid_maker/plugingui.cpp" line="62"/>
        <source>QGIS - Grid Maker</source>
        <translation>QGIS - Creador de cuadrículas</translation>
    </message>
    <message>
        <location filename="../src/plugins/grid_maker/plugingui.cpp" line="118"/>
        <source>ESRI Shapefile (*.shp)</source>
        <translation>Archivo Shape de ESRI (*.shp)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grid_maker/plugingui.cpp" line="52"/>
        <source>Please enter the file name before pressing OK!</source>
        <translation>¡Por favor, introduzca el nombre de archivo antes de pulsar Aceptar!</translation>
    </message>
    <message>
        <location filename="../src/plugins/grid_maker/plugingui.cpp" line="63"/>
        <source>Please enter intervals before pressing OK!</source>
        <translation>¡Por favor, introduzca los intervalos antes de pulsar Aceptar!</translation>
    </message>
    <message>
        <location filename="../src/plugins/grid_maker/plugingui.cpp" line="116"/>
        <source>Choose a file name to save under</source>
        <translation>Seleccione un nombre de archivo bajo el que guardar</translation>
    </message>
</context>
<context>
    <name>QgsGridMakerPluginGuiBase</name>
    <message>
        <location filename="../src/plugins/grid_maker/pluginguibase.ui" line="322"/>
        <source>Graticule Builder</source>
        <translation>Generador de cuadrículas</translation>
    </message>
    <message>
        <location filename="../src/plugins/grid_maker/pluginguibase.ui" line="243"/>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <location filename="../src/plugins/grid_maker/pluginguibase.ui" line="264"/>
        <source>Point</source>
        <translation>Punto</translation>
    </message>
    <message>
        <location filename="../src/plugins/grid_maker/pluginguibase.ui" line="274"/>
        <source>Polygon</source>
        <translation>Polígono</translation>
    </message>
    <message>
        <location filename="../src/plugins/grid_maker/pluginguibase.ui" line="146"/>
        <source>Origin (lower left)</source>
        <translation>Origen (esquina inferior izquierda)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grid_maker/pluginguibase.ui" line="93"/>
        <source>End point (upper right)</source>
        <translation>Punto final (esquina superior derecha)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grid_maker/pluginguibase.ui" line="209"/>
        <source>Output (shape) file</source>
        <translation>Archivo de salida (shape)</translation>
    </message>
    <message>
        <location filename="../src/plugins/grid_maker/pluginguibase.ui" line="233"/>
        <source>Save As...</source>
        <translation>Guardar como...</translation>
    </message>
    <message>
        <location filename="../src/plugins/grid_maker/pluginguibase.ui" line="13"/>
        <source>QGIS Graticule Creator</source>
        <translation>Generador de cuadrículas de QGIS</translation>
    </message>
    <message>
        <location filename="../src/plugins/grid_maker/pluginguibase.ui" line="40"/>
        <source>Graticle size</source>
        <translation>Tamaño de cuadrícula</translation>
    </message>
    <message>
        <location filename="../src/plugins/grid_maker/pluginguibase.ui" line="70"/>
        <source>Y Interval:</source>
        <translation>Intervalo Y:</translation>
    </message>
    <message>
        <location filename="../src/plugins/grid_maker/pluginguibase.ui" line="80"/>
        <source>X Interval:</source>
        <translation>Intervalo X:</translation>
    </message>
    <message>
        <location filename="../src/plugins/grid_maker/pluginguibase.ui" line="123"/>
        <location filename="../src/plugins/grid_maker/pluginguibase.ui" line="176"/>
        <source>Y</source>
        <translation>Y</translation>
    </message>
    <message>
        <location filename="../src/plugins/grid_maker/pluginguibase.ui" line="133"/>
        <location filename="../src/plugins/grid_maker/pluginguibase.ui" line="186"/>
        <source>X</source>
        <translation>X</translation>
    </message>
    <message>
        <location filename="../src/plugins/grid_maker/pluginguibase.ui" line="287"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Arial&apos;; font-size:11pt;&quot;&gt;&lt;span style=&quot; font-size:10pt;&quot;&gt;This plugin will help you to build a graticule shapefile that you can use as an overlay within your qgis map viewer.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Arial&apos;;&quot;&gt;Please enter all units in decimal degrees&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Arial&apos;; font-size:11pt;&quot;&gt;&lt;span style=&quot; font-size:10pt;&quot;&gt;Este complemento le ayudará a construir un archivo shape de cuadrícula que pueda usar superpuesto en su visor de mapas de QGIS.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Arial&apos;;&quot;&gt;Por favor, introduzca todas las unidades en grados decimales&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>QgsHelpViewer</name>
    <message>
        <location filename="../src/helpviewer/qgshelpviewer.cpp" line="138"/>
        <source>This help file does not exist for your language</source>
        <translation>Este archivo de ayuda no existe en su idioma</translation>
    </message>
    <message>
        <location filename="../src/helpviewer/qgshelpviewer.cpp" line="142"/>
        <source>If you would like to create it, contact the QGIS development team</source>
        <translation>Si desea crearlo, contacte con el equipo de desarrollo de QGIS</translation>
    </message>
    <message>
        <location filename="../src/helpviewer/qgshelpviewer.cpp" line="158"/>
        <source>Quantum GIS Help</source>
        <translation>Ayuda de Quantum GIS</translation>
    </message>
    <message>
        <location filename="../src/helpviewer/qgshelpviewer.cpp" line="187"/>
        <source>Quantum GIS Help - </source>
        <translation>Ayuda de Quantum GIS - </translation>
    </message>
    <message>
        <location filename="../src/helpviewer/qgshelpviewer.cpp" line="192"/>
        <location filename="../src/helpviewer/qgshelpviewer.cpp" line="217"/>
        <source>Error</source>
        <translation>Error</translation>
    </message>
    <message>
        <location filename="../src/helpviewer/qgshelpviewer.cpp" line="193"/>
        <source>Failed to get the help text from the database</source>
        <translation>No se pudo obtener el texto de ayuda de la base de datos</translation>
    </message>
    <message>
        <location filename="../src/helpviewer/qgshelpviewer.cpp" line="218"/>
        <source>The QGIS help database is not installed</source>
        <translation>La base de datos de ayuda de QGIS no está instalada</translation>
    </message>
</context>
<context>
    <name>QgsHelpViewerBase</name>
    <message>
        <location filename="../src/helpviewer/qgshelpviewerbase.ui" line="13"/>
        <location filename="../src/ui/qgshelpviewerbase.ui" line="13"/>
        <source>QGIS Help</source>
        <translation>Ayuda de QGIS</translation>
    </message>
    <message>
        <location filename="../src/helpviewer/qgshelpviewerbase.ui" line="62"/>
        <location filename="../src/ui/qgshelpviewerbase.ui" line="78"/>
        <source>&amp;Close</source>
        <translation>&amp;Cerrar</translation>
    </message>
    <message>
        <location filename="../src/helpviewer/qgshelpviewerbase.ui" line="65"/>
        <location filename="../src/ui/qgshelpviewerbase.ui" line="81"/>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <location filename="../src/ui/qgshelpviewerbase.ui" line="39"/>
        <source>&amp;Home</source>
        <translation>&amp;Inicio</translation>
    </message>
    <message>
        <location filename="../src/ui/qgshelpviewerbase.ui" line="42"/>
        <source>Alt+H</source>
        <translation>Alt+I</translation>
    </message>
    <message>
        <location filename="../src/ui/qgshelpviewerbase.ui" line="52"/>
        <source>&amp;Forward</source>
        <translation>A&amp;delante</translation>
    </message>
    <message>
        <location filename="../src/ui/qgshelpviewerbase.ui" line="55"/>
        <source>Alt+F</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <location filename="../src/ui/qgshelpviewerbase.ui" line="65"/>
        <source>&amp;Back</source>
        <translation>A&amp;trás</translation>
    </message>
    <message>
        <location filename="../src/ui/qgshelpviewerbase.ui" line="68"/>
        <source>Alt+B</source>
        <translation>Alt+T</translation>
    </message>
</context>
<context>
    <name>QgsHttpTransaction</name>
    <message>
        <location filename="../src/core/qgshttptransaction.cpp" line="255"/>
        <source>WMS Server responded unexpectedly with HTTP Status Code %1 (%2)</source>
        <translation>El servidor WMS ha respondido de forma inesperada con el código de estado HTTP %1 (%2)</translation>
    </message>
    <message>
        <location filename="../src/core/qgshttptransaction.cpp" line="334"/>
        <source>HTTP response completed, however there was an error: %1</source>
        <translation>Respuesta HTTP completada, sin embargo ha habido un error: %1</translation>
    </message>
    <message>
        <location filename="../src/core/qgshttptransaction.cpp" line="384"/>
        <source>HTTP transaction completed, however there was an error: %1</source>
        <translation>Transacción HTTP completada, sin embargo ha habido un error: %1</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/core/qgshttptransaction.cpp" line="462"/>
        <source>Network timed out after %1 seconds of inactivity.
This may be a problem in your network connection or at the WMS server.</source>
        <translation type="unfinished">
            <numerusform></numerusform>
        </translation>
    </message>
</context>
<context>
    <name>QgsIDWInterpolatorDialogBase</name>
    <message>
        <location filename="../src/plugins/interpolation/qgsidwinterpolatordialogbase.ui" line="13"/>
        <source>Dialog</source>
        <translation>Diálogo</translation>
    </message>
    <message>
        <location filename="../src/plugins/interpolation/qgsidwinterpolatordialogbase.ui" line="19"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:12pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Inverse Distance Weighting&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-weight:600;&quot;&gt;&lt;span style=&quot; font-weight:400;&quot;&gt;The only parameter for the IDW interpolation method is the coefficient that describes the decrease of weights with distance.&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:12pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Inverse Distance Weighting&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-weight:600;&quot;&gt;&lt;span style=&quot; font-weight:400;&quot;&gt;El único parámetro para el método de interpolación IDW es el coeficiente que describe la disminución de pesos con la distancia.&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/interpolation/qgsidwinterpolatordialogbase.ui" line="32"/>
        <source>Distance coefficient P:</source>
        <translation>Coeficiente P de distancia:</translation>
    </message>
</context>
<context>
    <name>QgsIdentifyResults</name>
    <message>
        <location filename="../src/app/qgsidentifyresults.cpp" line="45"/>
        <source>Feature</source>
        <translation>Objeto espacial</translation>
    </message>
    <message>
        <location filename="../src/app/qgsidentifyresults.cpp" line="46"/>
        <source>Value</source>
        <translation>Valor</translation>
    </message>
    <message>
        <location filename="../src/app/qgsidentifyresults.cpp" line="110"/>
        <source>Run action</source>
        <translation>Ejecutar acción</translation>
    </message>
    <message>
        <location filename="../src/app/qgsidentifyresults.cpp" line="59"/>
        <source>(Derived)</source>
        <translation>(Derivado)</translation>
    </message>
    <message>
        <location filename="../src/app/qgsidentifyresults.cpp" line="214"/>
        <source>Identify Results - </source>
        <translation>Resultados de la identificación - </translation>
    </message>
</context>
<context>
    <name>QgsIdentifyResultsBase</name>
    <message>
        <location filename="../src/ui/qgsidentifyresultsbase.ui" line="13"/>
        <source>Identify Results</source>
        <translation>Resultados de la identificación</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsidentifyresultsbase.ui" line="43"/>
        <source>Help</source>
        <translation>Ayuda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsidentifyresultsbase.ui" line="46"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsidentifyresultsbase.ui" line="72"/>
        <source>Close</source>
        <translation>Cerrar</translation>
    </message>
</context>
<context>
    <name>QgsInterpolationDialog</name>
    <message>
        <location filename="../src/plugins/interpolation/qgsinterpolationdialog.cpp" line="54"/>
        <location filename="../src/plugins/interpolation/qgsinterpolationdialog.cpp" line="210"/>
        <source>Triangular interpolation (TIN)</source>
        <translation>Interpolación triangular (TIN)</translation>
    </message>
    <message>
        <location filename="../src/plugins/interpolation/qgsinterpolationdialog.cpp" line="55"/>
        <location filename="../src/plugins/interpolation/qgsinterpolationdialog.cpp" line="206"/>
        <source>Inverse Distance Weighting (IDW)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsInterpolationDialogBase</name>
    <message>
        <location filename="../src/plugins/interpolation/qgsinterpolationdialogbase.ui" line="19"/>
        <source>Interpolation plugin</source>
        <translation>Complemento de interpolación</translation>
    </message>
    <message>
        <location filename="../src/plugins/interpolation/qgsinterpolationdialogbase.ui" line="31"/>
        <source>Input</source>
        <translation>Entrada</translation>
    </message>
    <message>
        <location filename="../src/plugins/interpolation/qgsinterpolationdialogbase.ui" line="37"/>
        <source>Input vector layer</source>
        <translation>Capa vectorial de entrada</translation>
    </message>
    <message>
        <location filename="../src/plugins/interpolation/qgsinterpolationdialogbase.ui" line="64"/>
        <source>Use z-Coordinate for interpolation</source>
        <translation>Usar coordenada Z para interpolación</translation>
    </message>
    <message>
        <location filename="../src/plugins/interpolation/qgsinterpolationdialogbase.ui" line="71"/>
        <source>Interpolation attribute </source>
        <translation>Atributo de interpolación </translation>
    </message>
    <message>
        <location filename="../src/plugins/interpolation/qgsinterpolationdialogbase.ui" line="100"/>
        <source>Output</source>
        <translation>Salida</translation>
    </message>
    <message>
        <location filename="../src/plugins/interpolation/qgsinterpolationdialogbase.ui" line="106"/>
        <source>Interpolation method</source>
        <translation>Método de interpolación</translation>
    </message>
    <message>
        <location filename="../src/plugins/interpolation/qgsinterpolationdialogbase.ui" line="119"/>
        <location filename="../src/plugins/interpolation/qgsinterpolationdialogbase.ui" line="176"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="../src/plugins/interpolation/qgsinterpolationdialogbase.ui" line="129"/>
        <source>Number of columns</source>
        <translation>Número de columnas</translation>
    </message>
    <message>
        <location filename="../src/plugins/interpolation/qgsinterpolationdialogbase.ui" line="146"/>
        <source>Number of rows</source>
        <translation>Número de filas</translation>
    </message>
    <message>
        <location filename="../src/plugins/interpolation/qgsinterpolationdialogbase.ui" line="163"/>
        <source>Output file </source>
        <translation>Archivo de salida </translation>
    </message>
</context>
<context>
    <name>QgsInterpolationPlugin</name>
    <message>
        <location filename="../src/plugins/interpolation/qgsinterpolationplugin.cpp" line="40"/>
        <location filename="../src/plugins/interpolation/qgsinterpolationplugin.cpp" line="43"/>
        <location filename="../src/plugins/interpolation/qgsinterpolationplugin.cpp" line="49"/>
        <source>&amp;Interpolation</source>
        <translation>&amp;Interpolación</translation>
    </message>
</context>
<context>
    <name>QgsLUDialogBase</name>
    <message>
        <location filename="../src/ui/qgsludialogbase.ui" line="13"/>
        <source>Enter class bounds</source>
        <translation>Introducir límites de la clase</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsludialogbase.ui" line="40"/>
        <source>Lower value</source>
        <translation>Valor más bajo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsludialogbase.ui" line="79"/>
        <source>-</source>
        <translation>-</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsludialogbase.ui" line="66"/>
        <source>Upper value</source>
        <translation>Valor más alto</translation>
    </message>
</context>
<context>
    <name>QgsLabelDialog</name>
    <message>
        <location filename="../src/app/qgslabeldialog.cpp" line="206"/>
        <source>Auto</source>
        <translation>Auto</translation>
    </message>
</context>
<context>
    <name>QgsLabelDialogBase</name>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="19"/>
        <source>Form1</source>
        <translation>Form1</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="313"/>
        <source>Font size units</source>
        <translation>Unidades del tamaño de fuente</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="326"/>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="589"/>
        <source>Map units</source>
        <translation>Unidades del mapa</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="319"/>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="582"/>
        <source>Points</source>
        <translation>Puntos</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="877"/>
        <source>Transparency:</source>
        <translation>Transparencia:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="152"/>
        <source>Font</source>
        <translation>Fuente</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="187"/>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="480"/>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="235"/>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="824"/>
        <source>Placement</source>
        <translation>Ubicación</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="244"/>
        <source>Below Right</source>
        <translation>Abajo derecha</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="251"/>
        <source>Right</source>
        <translation>Derecha</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="258"/>
        <source>Below</source>
        <translation>Abajo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="265"/>
        <source>Over</source>
        <translation>Sobre</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="275"/>
        <source>Above</source>
        <translation>Arriba</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="282"/>
        <source>Left</source>
        <translation>Izquierda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="289"/>
        <source>Below Left</source>
        <translation>Abajo izquierda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="296"/>
        <source>Above Right</source>
        <translation>Arriba derecha</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="303"/>
        <source>Above Left</source>
        <translation>Arriba izquierda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="90"/>
        <source>Buffer</source>
        <translation>Margen</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="500"/>
        <source>Buffer size units</source>
        <translation>Unidades de tamaño del margen</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="513"/>
        <source>Size is in map units</source>
        <translation>Tamaño en unidades del mapa</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="506"/>
        <source>Size is in points</source>
        <translation>El tamaño está en puntos</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="900"/>
        <source>Size:</source>
        <translation>Tamaño:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="95"/>
        <source>Position</source>
        <translation>Posición</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="576"/>
        <source>Offset units</source>
        <translation>Unidades de desplazamiento</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="999"/>
        <source>Preview:</source>
        <translation>Previsualizar:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="1008"/>
        <source>QGIS Rocks!</source>
        <translation>¡QGIS Avanza!</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="30"/>
        <source>Field containing label</source>
        <translation>Campo que contiene la etiqueta</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="53"/>
        <source>Default label</source>
        <translation>Etiqueta predeterminada</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="100"/>
        <source>Data defined style</source>
        <translation>Estilo definido por datos</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="105"/>
        <source>Data defined alignment</source>
        <translation>Alineación definida por datos</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="110"/>
        <source>Data defined buffer</source>
        <translation>Buffer definido por datos</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="115"/>
        <source>Data defined position</source>
        <translation>Posición definida por datos</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="162"/>
        <source>Font transparency</source>
        <translation>Transparencia de tipo de letra</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="206"/>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="493"/>
        <source>Color</source>
        <translation>Color</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="213"/>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="840"/>
        <source>Angle (deg)</source>
        <translation>Ángulo (grados)</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="432"/>
        <source>Buffer labels?</source>
        <translation>¿Poner margen a las etiquetas?</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="442"/>
        <source>Buffer size</source>
        <translation>Tamaño del margen</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="455"/>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="786"/>
        <source>Transparency</source>
        <translation>Transparencia</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="548"/>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="963"/>
        <source>X Offset (pts)</source>
        <translation>Desplazamiento X (pts)</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="562"/>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="979"/>
        <source>Y Offset (pts)</source>
        <translation>Desplazamiento Y (pts)</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="630"/>
        <source>&amp;Font family</source>
        <translation>&amp;Familia del tipo de letra</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="656"/>
        <source>&amp;Bold</source>
        <translation>&amp;Negrita</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="682"/>
        <source>&amp;Italic</source>
        <translation>&amp;Cursiva</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="708"/>
        <source>&amp;Underline</source>
        <translation>&amp;Subrayado</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="734"/>
        <source>&amp;Size</source>
        <translation>&amp;Tamaño</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="760"/>
        <source>Size units</source>
        <translation>Unidades de tamaño</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="931"/>
        <source>X Coordinate</source>
        <translation>Coordenada X</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="947"/>
        <source>Y Coordinate</source>
        <translation>Coordenada Y</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="410"/>
        <source>Multiline labels?</source>
        <translation>¿Etiquetas multilínea?</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="85"/>
        <source>General</source>
        <translation>General</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="349"/>
        <source>Use scale dependent rendering</source>
        <translation>Utilizar representación dependiente de la escala</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="361"/>
        <source>Maximum</source>
        <translation>Máximo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="371"/>
        <source>Minimum</source>
        <translation>Mínimo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="381"/>
        <source>Minimum scale at which this layer will be displayed. </source>
        <translation>Escala mínima a la que se mostrará esta capa. </translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="394"/>
        <source>Maximum scale at which this layer will be displayed. </source>
        <translation>Escala máxima a la que se mostrará esta capa. </translation>
    </message>
    <message>
        <location filename="../src/ui/qgslabeldialogbase.ui" line="220"/>
        <source>°</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsLegend</name>
    <message>
        <location filename="../src/app/legend/qgslegend.cpp" line="114"/>
        <source>group</source>
        <translation>grupo</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegend.cpp" line="452"/>
        <source>&amp;Remove</source>
        <translation>E&amp;liminar</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegend.cpp" line="445"/>
        <source>&amp;Make to toplevel item</source>
        <translation>&amp;Subir el elemento al nivel superior</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegend.cpp" line="457"/>
        <source>Re&amp;name</source>
        <translation>Cambiar &amp;nombre</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegend.cpp" line="462"/>
        <source>&amp;Add group</source>
        <translation>&amp;Añadir grupo</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegend.cpp" line="463"/>
        <source>&amp;Expand all</source>
        <translation>&amp;Expandir todo</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegend.cpp" line="464"/>
        <source>&amp;Collapse all</source>
        <translation>&amp;Comprimir todo</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegend.cpp" line="466"/>
        <source>Show file groups</source>
        <translation>Mostrar grupos de archivos</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegend.cpp" line="1868"/>
        <source>No Layer Selected</source>
        <translation>Ninguna capa no seleccionada</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegend.cpp" line="1869"/>
        <source>To open an attribute table, you must select a vector layer in the legend</source>
        <translation>Para abrir una tabla de atributos, debe seleccionar una capa vectorial en la leyenda</translation>
    </message>
</context>
<context>
    <name>QgsLegendLayer</name>
    <message>
        <location filename="../src/app/legend/qgslegendlayer.cpp" line="481"/>
        <source>&amp;Zoom to layer extent</source>
        <translation>&amp;Zum a la extensión de la capa</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayer.cpp" line="484"/>
        <source>&amp;Zoom to best scale (100%)</source>
        <translation>&amp;Zum a la mejor escala (100%)</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayer.cpp" line="488"/>
        <source>&amp;Show in overview</source>
        <translation>Mo&amp;strar en la vista general</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayer.cpp" line="494"/>
        <source>&amp;Remove</source>
        <translation>E&amp;liminar</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayer.cpp" line="501"/>
        <source>&amp;Open attribute table</source>
        <translation>&amp;Abrir tabla de atributos</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayer.cpp" line="525"/>
        <source>Save as shapefile...</source>
        <translation>Guardar como archivo shape...</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayer.cpp" line="532"/>
        <source>Save selection as shapefile...</source>
        <translation>Guardar selección como archivo shape...</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayer.cpp" line="542"/>
        <source>&amp;Properties</source>
        <translation>&amp;Propiedades</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayer.cpp" line="591"/>
        <source>Multiple layers</source>
        <translation>Capas múltiples</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayer.cpp" line="592"/>
        <source>This item contains multiple layers. Displaying multiple layers in the table is not supported.</source>
        <translation>El elemento contiene múltiples capas. Visualizar múltiples capas en la tabla no está implementado.</translation>
    </message>
</context>
<context>
    <name>QgsLegendLayerFile</name>
    <message>
        <location filename="../src/app/legend/qgslegendlayerfile.cpp" line="244"/>
        <source>Save layer as...</source>
        <translation>Guardar capa como...</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayerfile.cpp" line="332"/>
        <location filename="../src/app/legend/qgslegendlayerfile.cpp" line="335"/>
        <source>Error</source>
        <translation>Error</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayerfile.cpp" line="319"/>
        <source>Saving done</source>
        <translation>Guardado terminado</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayerfile.cpp" line="319"/>
        <source>Export to Shapefile has been completed</source>
        <translation>La exportación a archivo shape se ha completado</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayerfile.cpp" line="323"/>
        <source>Driver not found</source>
        <translation>No se ha encontrado el controlador</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayerfile.cpp" line="323"/>
        <source>ESRI Shapefile driver is not available</source>
        <translation>El controlador de archivos shape de ESRI no está disponible</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayerfile.cpp" line="327"/>
        <source>Error creating shapefile</source>
        <translation>Error al crear el archivo shape</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayerfile.cpp" line="328"/>
        <source>The shapefile could not be created (</source>
        <translation>El archivo shape no se ha podido crear (</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayerfile.cpp" line="332"/>
        <source>Layer creation failed</source>
        <translation>Ha fallado la creación de la capa</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayerfile.cpp" line="362"/>
        <source>&amp;Zoom to layer extent</source>
        <translation>&amp;Zum a la extensión de la capa</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayerfile.cpp" line="365"/>
        <source>&amp;Show in overview</source>
        <translation>Mo&amp;strar en la vista general</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayerfile.cpp" line="373"/>
        <source>&amp;Remove</source>
        <translation>E&amp;liminar</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayerfile.cpp" line="382"/>
        <source>&amp;Open attribute table</source>
        <translation>&amp;Abrir tabla de atributos</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayerfile.cpp" line="395"/>
        <source>Save as shapefile...</source>
        <translation>Guardar como archivo shape...</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayerfile.cpp" line="397"/>
        <source>Save selection as shapefile...</source>
        <translation>Guardar selección como archivo shape...</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayerfile.cpp" line="414"/>
        <source>&amp;Properties</source>
        <translation>&amp;Propiedades</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayerfile.cpp" line="336"/>
        <source>Layer attribute table contains unsupported datatype(s)</source>
        <translation>La tabla de atributos de la capa contiene tipos de datos no soportados</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayerfile.cpp" line="280"/>
        <source>Select the coordinate reference system for the saved shapefile.</source>
        <translation>Seleccione el sistema de referencia de coordenadas para el archivo shape guardado.</translation>
    </message>
    <message>
        <location filename="../src/app/legend/qgslegendlayerfile.cpp" line="281"/>
        <source>The data points will be transformed from the layer coordinate reference system.</source>
        <translation>Los puntos de datos se transformarán a partir del sistema de referencia de coordenadas de la capa.</translation>
    </message>
</context>
<context>
    <name>QgsMapCanvas</name>
    <message>
        <location filename="../src/gui/qgsmapcanvas.cpp" line="1254"/>
        <source>Could not draw</source>
        <translation>No se pudo dibujar</translation>
    </message>
    <message>
        <location filename="../src/gui/qgsmapcanvas.cpp" line="1254"/>
        <source>because</source>
        <translation>porque</translation>
    </message>
</context>
<context>
    <name>QgsMapLayer</name>
    <message>
        <location filename="../src/core/qgsmaplayer.cpp" line="501"/>
        <location filename="../src/core/qgsmaplayer.cpp" line="517"/>
        <source>%1 at line %2 column %3</source>
        <translation>%1 en la línea %2 columna %3</translation>
    </message>
    <message>
        <location filename="../src/core/qgsmaplayer.cpp" line="620"/>
        <source>User database could not be opened.</source>
        <translation>No se pudo abrir la base de datos del usuario.</translation>
    </message>
    <message>
        <location filename="../src/core/qgsmaplayer.cpp" line="635"/>
        <source>The style table could not be created.</source>
        <translation>No se pudo crear la tabla de estilos.</translation>
    </message>
    <message>
        <location filename="../src/core/qgsmaplayer.cpp" line="650"/>
        <source>The style %1 was saved to database</source>
        <translation>El estilo %1 se guardó en la base de datos</translation>
    </message>
    <message>
        <location filename="../src/core/qgsmaplayer.cpp" line="667"/>
        <source>The style %1 was updated in the database.</source>
        <translation>El estilo %1 se actualizó en la base de datos.</translation>
    </message>
    <message>
        <location filename="../src/core/qgsmaplayer.cpp" line="672"/>
        <source>The style %1 could not be updated in the database.</source>
        <translation>El estilo %1 no se pudo actualizar en la base de datos.</translation>
    </message>
    <message>
        <location filename="../src/core/qgsmaplayer.cpp" line="679"/>
        <source>The style %1 could not be inserted into database.</source>
        <translation>El estilo %1 no se pudo insertar en la base de datos.</translation>
    </message>
    <message>
        <location filename="../src/core/qgsmaplayer.cpp" line="522"/>
        <source>style not found in database</source>
        <translation>estilo no encontrado en la base de datos</translation>
    </message>
</context>
<context>
    <name>QgsMapToolIdentify</name>
    <message>
        <location filename="../src/app/qgsmaptoolidentify.cpp" line="162"/>
        <source>(clicked coordinate)</source>
        <translation>(coordenada pinchada)</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptoolidentify.cpp" line="224"/>
        <source>WMS identify result for %1
%2</source>
        <translation>Resultado de identificación WMS para %1
%2</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/app/qgsmaptoolidentify.cpp" line="404"/>
        <source>- %1 features found</source>
        <comment>Identify results window title</comment>
        <translation type="unfinished">
            <numerusform></numerusform>
        </translation>
    </message>
</context>
<context>
    <name>QgsMapToolSplitFeatures</name>
    <message>
        <location filename="../src/app/qgsmaptoolsplitfeatures.cpp" line="90"/>
        <source>Split error</source>
        <translation>Error en la división</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptoolsplitfeatures.cpp" line="90"/>
        <source>An error occured during feature splitting</source>
        <translation>Ocurrió un error durante la división de los objetos espaciales</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptoolsplitfeatures.cpp" line="85"/>
        <source>No feature split done</source>
        <translation>No se ha dividido ningún objeto espacial</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptoolsplitfeatures.cpp" line="85"/>
        <source>If there are selected features, the split tool only applies to the selected ones. If you like to split all features under the split line, clear the selection</source>
        <translation>Si hay objetos espaciales seleccionados, la herramienta de división sólo se aplica a aquellos seleccionados. Si quiere dividir todos los objetos espaciales bajo la línea de división, elimine la selección.</translation>
    </message>
</context>
<context>
    <name>QgsMapToolVertexEdit</name>
    <message>
        <location filename="../src/app/qgsmaptoolvertexedit.cpp" line="51"/>
        <source>Snap tolerance</source>
        <translation>Tolerancia de autoensamblado</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptoolvertexedit.cpp" line="52"/>
        <source>Don&apos;t show this message again</source>
        <translation>No volver a mostrar este mensaje</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptoolvertexedit.cpp" line="56"/>
        <source>Could not snap segment.</source>
        <translation>No se pudo autoensamblar el segmento.</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmaptoolvertexedit.cpp" line="58"/>
        <source>Have you set the tolerance in Settings &gt; Project Properties &gt; General?</source>
        <translation>¿Ha establecido la tolerancia de autoensamblado en Configuración &gt; Propiedades del proyecto &gt; General?</translation>
    </message>
</context>
<context>
    <name>QgsMapserverExport</name>
    <message>
        <location filename="../tools/mapserver_export/qgsmapserverexport.cpp" line="76"/>
        <source>Name for the map file</source>
        <translation>Nombre para el archivo del mapa</translation>
    </message>
    <message>
        <location filename="../tools/mapserver_export/qgsmapserverexport.cpp" line="84"/>
        <source>Choose the QGIS project file</source>
        <translation>Seleccione el archivo de proyecto de QGIS</translation>
    </message>
    <message>
        <location filename="../tools/mapserver_export/qgsmapserverexport.cpp" line="85"/>
        <source>QGIS Project Files (*.qgs);;All files (*.*)</source>
        <comment>Filter list for selecting files from a dialog box</comment>
        <translation>Archivos de proyectos de QGIS (*.qgs);;Todos los archivos (*.*)</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmapserverexport.cpp" line="73"/>
        <location filename="../tools/mapserver_export/qgsmapserverexport.cpp" line="201"/>
        <source>Overwrite File?</source>
        <translation>¿Sobrescribir archivo?</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmapserverexport.cpp" line="74"/>
        <source> exists. 
Do you want to overwrite it?</source>
        <translation> existe. 
¿Quiere sobrescribirlo?</translation>
    </message>
    <message>
        <location filename="../tools/mapserver_export/qgsmapserverexport.cpp" line="77"/>
        <source>MapServer map files (*.map);;All files (*.*)</source>
        <comment>Filter list for selecting files from a dialog box</comment>
        <translation>Archivos de mapa de MapServer (*.map);;Todos los archivos (*.*)</translation>
    </message>
    <message>
        <location filename="../tools/mapserver_export/qgsmapserverexport.cpp" line="202"/>
        <source> exists. 
Do you want to overwrite it?</source>
        <comment>a fileName is prepended to this text, and appears in a dialog box</comment>
        <translation> existe. 
¿Quiere sobrescribirlo?</translation>
    </message>
</context>
<context>
    <name>QgsMapserverExportBase</name>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="14"/>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="13"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="14"/>
        <source>Export to Mapserver</source>
        <translation>Exportar a MapServer</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="406"/>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="31"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="352"/>
        <source>Map file</source>
        <translation>Archivo de mapa</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="457"/>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="41"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="403"/>
        <source>Export LAYER information only</source>
        <translation>Exportar sólo información de la CAPA</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="56"/>
        <source>&amp;Help</source>
        <translation>&amp;Ayuda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="59"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="85"/>
        <source>&amp;OK</source>
        <translation>&amp;Aceptar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="101"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="116"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="207"/>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="126"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="159"/>
        <source>Map</source>
        <translation>Mapa</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="384"/>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="144"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="330"/>
        <source>Name</source>
        <translation>Nombre</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="349"/>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="154"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="304"/>
        <source>Height</source>
        <translation>Altura</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="248"/>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="167"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="182"/>
        <source>Units</source>
        <translation>Unidades</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="265"/>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="177"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="229"/>
        <source>Image type</source>
        <translation>Tipo de imagen</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="279"/>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="188"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="243"/>
        <source>gif</source>
        <translation>gif</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="284"/>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="193"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="248"/>
        <source>gtiff</source>
        <translation>gtiff</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="289"/>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="198"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="253"/>
        <source>jpeg</source>
        <translation>jpeg</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="294"/>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="203"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="258"/>
        <source>png</source>
        <translation>png</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="299"/>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="208"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="263"/>
        <source>swf</source>
        <translation>swf</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="304"/>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="213"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="268"/>
        <source>userdefined</source>
        <translation>definida por el usuario</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="309"/>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="218"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="273"/>
        <source>wbmp</source>
        <translation>wbmp</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="226"/>
        <source>MinScale</source>
        <translation>Escala mínima</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="236"/>
        <source>MaxScale</source>
        <translation>Escala máxima</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="252"/>
        <source>Prefix attached to map, scalebar and legend GIF filenames created using this MapFile. It should be kept short.</source>
        <translation>Prefijo añadido al nombre de los archivos GIF del mapa, la barra de escala y la leyenda creados usando este archivo de mapa. Debe ser corto.</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="336"/>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="265"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="291"/>
        <source>Width</source>
        <translation>Anchura</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="41"/>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="278"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="29"/>
        <source>Web Interface Definition</source>
        <translation>Definición del interfaz web</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="137"/>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="293"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="98"/>
        <source>Header</source>
        <translation>Encabezado</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="182"/>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="303"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="134"/>
        <source>Footer</source>
        <translation>Pie de página</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="88"/>
        <location filename="../src/ui/qgsmapserverexportbase.ui" line="313"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="58"/>
        <source>Template</source>
        <translation>Plantilla</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="98"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="68"/>
        <source>Path to the MapServer template file</source>
        <translation>Ruta al archivo de plantilla de MapServer</translation>
    </message>
    <message>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="196"/>
        <source>dd</source>
        <translation>dd</translation>
    </message>
    <message>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="201"/>
        <source>feet</source>
        <translation>pies</translation>
    </message>
    <message>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="206"/>
        <source>meters</source>
        <translation>metros</translation>
    </message>
    <message>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="211"/>
        <source>miles</source>
        <translation>millas</translation>
    </message>
    <message>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="216"/>
        <source>inches</source>
        <translation>pulgadas</translation>
    </message>
    <message>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="221"/>
        <source>kilometers</source>
        <translation>kilómetros</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="394"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="340"/>
        <source>Prefix attached to map, scalebar and legend GIF filenames created using this MapFile</source>
        <translation>Prefijo añadido al nombre de los archivos GIF del mapa, la barra de escala y la leyenda creados usando este archivo de mapa</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="416"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="362"/>
        <source>Name for the map file to be created from the QGIS project file</source>
        <translation>Nombre para el archivo de mapa que se va a crear a partir del proyecto de QGIS</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="430"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="376"/>
        <source>Full path to the QGIS project file to export to MapServer map format</source>
        <translation>Ruta completa al proyecto de QGIS para exportar al formato de mapa de MapServer</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="437"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="383"/>
        <source>QGIS project file</source>
        <translation>Archivo de proyecto de QGIS</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="454"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="400"/>
        <source>If checked, only the layer information will be processed</source>
        <translation>Si se marca, sólo será procesada la información de la capa</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="105"/>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="150"/>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="195"/>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="423"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="75"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="111"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="147"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="369"/>
        <source>Browse...</source>
        <translation>Explorar...</translation>
    </message>
    <message>
        <location filename="../python/plugins/mapserver_export/qgsmapserverexportbase.ui" line="447"/>
        <location filename="../tools/mapserver_export/qgsmapserverexportbase.ui" line="393"/>
        <source>Save As...</source>
        <translation>Guardar como...</translation>
    </message>
</context>
<context>
    <name>QgsMeasureBase</name>
    <message>
        <location filename="../src/ui/qgsmeasurebase.ui" line="19"/>
        <source>Measure</source>
        <translation>Medida</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsmeasurebase.ui" line="66"/>
        <source>Total:</source>
        <translation>Total:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsmeasurebase.ui" line="102"/>
        <source>Help</source>
        <translation>Ayuda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsmeasurebase.ui" line="125"/>
        <source>New</source>
        <translation>Nueva</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsmeasurebase.ui" line="132"/>
        <source>Cl&amp;ose</source>
        <translation>&amp;Cerrar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsmeasurebase.ui" line="86"/>
        <source>Segments</source>
        <translation>Segmentos</translation>
    </message>
</context>
<context>
    <name>QgsMeasureDialog</name>
    <message>
        <location filename="../src/app/qgsmeasuredialog.cpp" line="196"/>
        <source>Segments (in meters)</source>
        <translation>Segmentos (en metros)</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmeasuredialog.cpp" line="199"/>
        <source>Segments (in feet)</source>
        <translation>Segmentos (en pies)</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmeasuredialog.cpp" line="202"/>
        <source>Segments (in degrees)</source>
        <translation>Segmentos (en grados)</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmeasuredialog.cpp" line="205"/>
        <source>Segments</source>
        <translation>Segmentos</translation>
    </message>
</context>
<context>
    <name>QgsMeasureTool</name>
    <message>
        <location filename="../src/app/qgsmeasuretool.cpp" line="74"/>
        <source>Incorrect measure results</source>
        <translation>Resultados de medida incorrectos</translation>
    </message>
    <message>
        <location filename="../src/app/qgsmeasuretool.cpp" line="75"/>
        <source>&lt;p&gt;This map is defined with a geographic coordinate system (latitude/longitude) but the map extents suggests that it is actually a projected coordinate system (e.g., Mercator). If so, the results from line or area measurements will be incorrect.&lt;/p&gt;&lt;p&gt;To fix this, explicitly set an appropriate map coordinate system using the &lt;tt&gt;Settings:Project Properties&lt;/tt&gt; menu.</source>
        <translation>&lt;p&gt;Este mapa está definido con un sistema de coordenadas geográficas (latitud/longitud), pero la extensión del mapa sugiere que en realidad es un sistema de coordenadas proyectado (ej.: Mercator). Si es así, las medidas de líneas o áreas serán incorrectas.&lt;/p&gt;&lt;p&gt;Para corregir esto, establezca de forma explicita un sistema de coordenadas del mapa adecuado usando el menú &lt;tt&gt;Configuración&gt;Propiedades de proyecto&lt;/tt&gt;.</translation>
    </message>
</context>
<context>
    <name>QgsMessageViewer</name>
    <message>
        <location filename="../src/ui/qgsmessageviewer.ui" line="13"/>
        <source>QGIS Message</source>
        <translation>Mensaje de QGIS</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsmessageviewer.ui" line="28"/>
        <source>Don&apos;t show this message again</source>
        <translation>No mostrar este mensaje de nuevo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsmessageviewer.ui" line="48"/>
        <source>Close</source>
        <translation>Cerrar</translation>
    </message>
</context>
<context>
    <name>QgsNewConnection</name>
    <message>
        <location filename="../src/app/qgsnewconnection.cpp" line="119"/>
        <location filename="../src/app/qgsnewconnection.cpp" line="123"/>
        <source>Test connection</source>
        <translation>Probar conexión</translation>
    </message>
    <message>
        <location filename="../src/app/qgsnewconnection.cpp" line="123"/>
        <source>Connection failed - Check settings and try again.

Extended error information:
</source>
        <translation>La conexión ha fallado - Compruebe la configuración y vuelva a intentarlo.

Información extensa sobre el error:
</translation>
    </message>
    <message>
        <location filename="../src/app/qgsnewconnection.cpp" line="119"/>
        <source>Connection to %1 was successful</source>
        <translation>La conexión a %1 tuvo éxito</translation>
    </message>
</context>
<context>
    <name>QgsNewConnectionBase</name>
    <message>
        <location filename="../src/ui/qgsnewconnectionbase.ui" line="21"/>
        <source>Create a New PostGIS connection</source>
        <translation>Crear una nueva conexión a PostGIS</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewconnectionbase.ui" line="39"/>
        <source>Connection Information</source>
        <translation>Información sobre la conexión</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewconnectionbase.ui" line="67"/>
        <source>Only look in the &apos;public&apos; schema</source>
        <translation>Buscar sólo en el esquema &quot;público&quot;</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewconnectionbase.ui" line="90"/>
        <source>Only look in the geometry_columns table</source>
        <translation>Buscar sólo en la tabla de columnas de la geometría</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewconnectionbase.ui" line="105"/>
        <source>Save Password</source>
        <translation>Guardar contraseña</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewconnectionbase.ui" line="112"/>
        <source>Test Connect</source>
        <translation>Probar conexión</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewconnectionbase.ui" line="137"/>
        <source>Name</source>
        <translation>Nombre</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewconnectionbase.ui" line="147"/>
        <source>Host</source>
        <translation>Servidor</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewconnectionbase.ui" line="157"/>
        <source>Database</source>
        <translation>Base de datos</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewconnectionbase.ui" line="167"/>
        <source>Port</source>
        <translation>Puerto</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewconnectionbase.ui" line="177"/>
        <source>Username</source>
        <translation>Nombre de usuario</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewconnectionbase.ui" line="187"/>
        <source>Password</source>
        <translation>Contraseña</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewconnectionbase.ui" line="207"/>
        <source>Name of the new connection</source>
        <translation>Nombre de la nueva conexión</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewconnectionbase.ui" line="220"/>
        <source>5432</source>
        <translation>5432</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewconnectionbase.ui" line="252"/>
        <source>OK</source>
        <translation>Aceptar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewconnectionbase.ui" line="268"/>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewconnectionbase.ui" line="284"/>
        <source>Help</source>
        <translation>Ayuda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewconnectionbase.ui" line="287"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewconnectionbase.ui" line="61"/>
        <source>Restrict the search to the public schema for spatial tables not in the geometry_columns table</source>
        <translation>Restringir la búsqueda al esquema público de las tablas espaciales que no están en la tabla de columnas de la geometría</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewconnectionbase.ui" line="64"/>
        <source>When searching for spatial tables that are not in the geometry_columns tables, restrict the search to tables that are in the public schema (for some databases this can save lots of time)</source>
        <translation>Cuando se busca en tablas espaciales que no están en las tablas de columnas de la geometría, restringir la búsqueda a tablas que están en el esquema público (en algunas bases de datos esto puede ahorrar mucho tiempo)</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewconnectionbase.ui" line="84"/>
        <source>Restrict the displayed tables to those that are in the geometry_columns table</source>
        <translation>Restringir las tablas mostradas a aquellas que están en la tabla de columnas de la geometría</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewconnectionbase.ui" line="87"/>
        <source>Restricts the displayed tables to those that are in the geometry_columns table. This can speed up the initial display of spatial tables.</source>
        <translation>Restringe las tablas mostradas a aquellas que están en la tabla de columnas de la geometría. Esto puede acelerar la visualización inicial de las tablas espaciales.</translation>
    </message>
</context>
<context>
    <name>QgsNewHttpConnectionBase</name>
    <message>
        <location filename="../src/ui/qgsnewhttpconnectionbase.ui" line="50"/>
        <source>Name of the new connection</source>
        <translation>Nombre de la nueva conexión</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewhttpconnectionbase.ui" line="31"/>
        <source>Name</source>
        <translation>Nombre</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewhttpconnectionbase.ui" line="60"/>
        <source>URL</source>
        <translation>URL</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewhttpconnectionbase.ui" line="73"/>
        <source>HTTP address of the Web Map Server</source>
        <translation>Dirección HTTP del servidor de mapas web</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewhttpconnectionbase.ui" line="13"/>
        <source>Create a new WMS connection</source>
        <translation>Crear una nueva conexión WMS</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsnewhttpconnectionbase.ui" line="25"/>
        <source>Connection details</source>
        <translation>Detalles de la conexión</translation>
    </message>
</context>
<context>
    <name>QgsNorthArrowPlugin</name>
    <message>
        <location filename="../src/plugins/north_arrow/plugin.cpp" line="80"/>
        <source>Bottom Left</source>
        <translation>Inferior izquierda</translation>
    </message>
    <message>
        <location filename="../src/plugins/north_arrow/plugin.cpp" line="80"/>
        <source>Top Left</source>
        <translation>Superior izquierda</translation>
    </message>
    <message>
        <location filename="../src/plugins/north_arrow/plugin.cpp" line="81"/>
        <source>Top Right</source>
        <translation>Superior derecha</translation>
    </message>
    <message>
        <location filename="../src/plugins/north_arrow/plugin.cpp" line="81"/>
        <source>Bottom Right</source>
        <translation>Inferior derecha</translation>
    </message>
    <message>
        <location filename="../src/plugins/north_arrow/plugin.cpp" line="94"/>
        <source>&amp;North Arrow</source>
        <translation>Flecha de &amp;Norte</translation>
    </message>
    <message>
        <location filename="../src/plugins/north_arrow/plugin.cpp" line="95"/>
        <source>Creates a north arrow that is displayed on the map canvas</source>
        <translation>Crea una flecha de norte que se muestra en la vista del mapa</translation>
    </message>
    <message>
        <location filename="../src/plugins/north_arrow/plugin.cpp" line="104"/>
        <location filename="../src/plugins/north_arrow/plugin.cpp" line="254"/>
        <source>&amp;Decorations</source>
        <translation>&amp;Ilustraciones</translation>
    </message>
    <message>
        <location filename="../src/plugins/north_arrow/plugin.cpp" line="245"/>
        <source>North arrow pixmap not found</source>
        <translation>No se ha encontrado la imagen de flecha de Norte</translation>
    </message>
</context>
<context>
    <name>QgsNorthArrowPluginGui</name>
    <message>
        <location filename="../src/plugins/north_arrow/plugingui.cpp" line="157"/>
        <source>Pixmap not found</source>
        <translation>No se ha encontrado la imagen</translation>
    </message>
</context>
<context>
    <name>QgsNorthArrowPluginGuiBase</name>
    <message>
        <location filename="../src/plugins/north_arrow/pluginguibase.ui" line="13"/>
        <location filename="../src/plugins/north_arrow/pluginguibase.ui" line="235"/>
        <source>North Arrow Plugin</source>
        <translation>Complemento de flecha de Norte</translation>
    </message>
    <message>
        <location filename="../src/plugins/north_arrow/pluginguibase.ui" line="35"/>
        <source>Properties</source>
        <translation>Propiedades</translation>
    </message>
    <message>
        <location filename="../src/plugins/north_arrow/pluginguibase.ui" line="55"/>
        <source>Angle</source>
        <translation>Ángulo</translation>
    </message>
    <message>
        <location filename="../src/plugins/north_arrow/pluginguibase.ui" line="62"/>
        <source>Placement</source>
        <translation>Ubicación</translation>
    </message>
    <message>
        <location filename="../src/plugins/north_arrow/pluginguibase.ui" line="75"/>
        <source>Set direction automatically</source>
        <translation>Establecer la dirección automáticamente</translation>
    </message>
    <message>
        <location filename="../src/plugins/north_arrow/pluginguibase.ui" line="85"/>
        <source>Enable North Arrow</source>
        <translation>Activar flecha de Norte</translation>
    </message>
    <message>
        <location filename="../src/plugins/north_arrow/pluginguibase.ui" line="137"/>
        <source>Placement on screen</source>
        <translation>Ubicación en la pantalla</translation>
    </message>
    <message>
        <location filename="../src/plugins/north_arrow/pluginguibase.ui" line="141"/>
        <source>Top Left</source>
        <translation>Superior izquierda</translation>
    </message>
    <message>
        <location filename="../src/plugins/north_arrow/pluginguibase.ui" line="146"/>
        <source>Top Right</source>
        <translation>Superior derecha</translation>
    </message>
    <message>
        <location filename="../src/plugins/north_arrow/pluginguibase.ui" line="151"/>
        <source>Bottom Left</source>
        <translation>Inferior izquierda</translation>
    </message>
    <message>
        <location filename="../src/plugins/north_arrow/pluginguibase.ui" line="156"/>
        <source>Bottom Right</source>
        <translation>Inferior derecha</translation>
    </message>
    <message>
        <location filename="../src/plugins/north_arrow/pluginguibase.ui" line="164"/>
        <source>Preview of north arrow</source>
        <translation>Previsualización de la flecha de Norte</translation>
    </message>
    <message>
        <location filename="../src/plugins/north_arrow/pluginguibase.ui" line="183"/>
        <source>Icon</source>
        <translation>Icono</translation>
    </message>
    <message>
        <location filename="../src/plugins/north_arrow/pluginguibase.ui" line="198"/>
        <source>Browse...</source>
        <translation>Explorar...</translation>
    </message>
</context>
<context>
    <name>QgsOptions</name>
    <message>
        <location filename="../src/app/qgsoptions.cpp" line="156"/>
        <source>Detected active locale on your system: </source>
        <translation>Idioma activo detectado en su sistema: </translation>
    </message>
    <message>
        <location filename="../src/app/qgsoptions.cpp" line="176"/>
        <source>to vertex</source>
        <translation>a vértice</translation>
    </message>
    <message>
        <location filename="../src/app/qgsoptions.cpp" line="177"/>
        <source>to segment</source>
        <translation>a segmento</translation>
    </message>
    <message>
        <location filename="../src/app/qgsoptions.cpp" line="178"/>
        <source>to vertex and segment</source>
        <translation>a vértice y segmento</translation>
    </message>
    <message>
        <location filename="../src/app/qgsoptions.cpp" line="185"/>
        <location filename="../src/app/qgsoptions.cpp" line="191"/>
        <location filename="../src/app/qgsoptions.cpp" line="345"/>
        <source>Semi transparent circle</source>
        <translation>Círculo semitransparente</translation>
    </message>
    <message>
        <location filename="../src/app/qgsoptions.cpp" line="186"/>
        <location filename="../src/app/qgsoptions.cpp" line="195"/>
        <location filename="../src/app/qgsoptions.cpp" line="349"/>
        <source>Cross</source>
        <translation>Cruz</translation>
    </message>
    <message>
        <location filename="../src/app/qgsoptions.cpp" line="70"/>
        <source>Show all features</source>
        <translation>Mostrar todos los objetos espaciales</translation>
    </message>
    <message>
        <location filename="../src/app/qgsoptions.cpp" line="71"/>
        <source>Show selected features</source>
        <translation>Mostrar los objetos espaciales seleccionados</translation>
    </message>
    <message>
        <location filename="../src/app/qgsoptions.cpp" line="72"/>
        <source>Show features in current canvas</source>
        <translation>Mostrar los objetos espaciales en el lienzo actual</translation>
    </message>
</context>
<context>
    <name>QgsOptionsBase</name>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="13"/>
        <source>QGIS Options</source>
        <translation>Opciones de QGIS</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="212"/>
        <source>Hide splash screen at startup</source>
        <translation>Ocultar la pantalla de bienvenida al iniciar la aplicación</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="188"/>
        <source>&lt;b&gt;Note: &lt;/b&gt;Theme changes take effect the next time QGIS is started</source>
        <translation>&lt;b&gt;Nota: &lt;/b&gt;Los cambios de tema tendrán efecto la próxima vez que inicie QGIS</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="271"/>
        <source>&amp;Rendering</source>
        <translation>&amp;Representación</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="300"/>
        <source>Map display will be updated (drawn) after this many features have been read from the data source</source>
        <translation>La vista del mapa se actualizará después de que todos estos objetos espaciales sean leídos de la fuente de datos</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="283"/>
        <source>By default new la&amp;yers added to the map should be displayed</source>
        <translation>Por omisión, las nuevas &amp;capas añadidas al mapa se deben visualizar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="341"/>
        <source>Make lines appear less jagged at the expense of some drawing performance</source>
        <translation>Hacer que las líneas se muestren menos quebradas a expensas de la calidad del dibujo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="351"/>
        <source>Fix problems with incorrectly filled polygons</source>
        <translation>Solucionar problemas con polígonos rellenados incorrectamente</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="358"/>
        <source>Continuously redraw the map when dragging the legend/map divider</source>
        <translation>Redibujar el mapa continuamente cuando se desplaza el separador entre mapa y leyenda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="382"/>
        <source>&amp;Map tools</source>
        <translation>Herramientas de &amp;mapa</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="542"/>
        <source>Search radius</source>
        <translation>Radio de búsqueda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="580"/>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="472"/>
        <source>Measure tool</source>
        <translation>Herramienta de medida</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="400"/>
        <source>Panning and zooming</source>
        <translation>Desplazar y zum</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="419"/>
        <source>Zoom</source>
        <translation>Zum</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="424"/>
        <source>Zoom and recenter</source>
        <translation>Zum y centrar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="434"/>
        <source>Nothing</source>
        <translation>Nada</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="854"/>
        <source>Select Global Default ...</source>
        <translation>Seleccionar proyección global predeterminada...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="32"/>
        <source>&amp;General</source>
        <translation>&amp;General</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="907"/>
        <source>Locale</source>
        <translation>Idioma</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="922"/>
        <source>Locale to use instead</source>
        <translation>Idioma a usar en su lugar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="961"/>
        <source>Additional Info</source>
        <translation>Información adicional</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="967"/>
        <source>Detected active locale on your system:</source>
        <translation>Idioma activo detectado en su sistema:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="348"/>
        <source>Selecting this will unselect the &apos;make lines less&apos; jagged toggle</source>
        <translation>Con esta opción desactivará el &quot;hacer las líneas menos quebradas&quot;</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="613"/>
        <source>Digitizing</source>
        <translation>Digitalización</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="619"/>
        <source>Rubberband</source>
        <translation>Banda elástica</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="635"/>
        <source>Line width in pixels</source>
        <translation>Anchura de la línea en píxeles</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="671"/>
        <source>Snapping</source>
        <translation>Autoensamblado</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="429"/>
        <source>Zoom to mouse cursor</source>
        <translation>Zoom al cursor del ratón</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="770"/>
        <source>Vertex markers</source>
        <translation>Marcadores de vértices</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="38"/>
        <source>Project files</source>
        <translation>Archivos de proyecto</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="56"/>
        <source>Prompt to save project changes when required</source>
        <translation>Preguntar si guardar cambios en el proyecto cuando sea necesario</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="63"/>
        <source>Warn when opening a project file saved with an older version of QGIS</source>
        <translation>Avisar cuando se abra un proyecto guardado con una versión anterior de QGIS</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="73"/>
        <source>Default Map Appearance (overridden by project properties)</source>
        <translation>Apariencia predeterminada del mapa (anulada por las propiedades del proyecto)</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="79"/>
        <source>Selection color</source>
        <translation>Color de selección</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="115"/>
        <source>Background color</source>
        <translation>Color de fondo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="154"/>
        <source>&amp;Application</source>
        <translation>&amp;Aplicación</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="166"/>
        <source>Icon theme</source>
        <translation>Tema de iconos</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="198"/>
        <source>Capitalise layer names in legend</source>
        <translation>Comenzar el nombre de las capas con mayúsculas en la leyenda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="205"/>
        <source>Display classification attribute names in legend</source>
        <translation>Mostrar nombre de atributos de clasificación en la leyenda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="277"/>
        <source>Rendering behavior</source>
        <translation>Comportamiento de la representación</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="290"/>
        <source>Number of features to draw before updating the display</source>
        <translation>Número de objetos espaciales a dibujar antes de actualizar la visualización</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="313"/>
        <source>&lt;b&gt;Note:&lt;/b&gt; Use zero to prevent display updates until all features have been rendered</source>
        <translation>&lt;b&gt;Nota:&lt;/b&gt; Usar cero para evitar actualizaciones de la visualización hasta que todos los objetos espaciales se hayan representado</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="323"/>
        <source>Rendering quality</source>
        <translation>Calidad de representación</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="442"/>
        <source>Zoom factor</source>
        <translation>Factor de zum</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="449"/>
        <source>Mouse wheel action</source>
        <translation>Acción de la rueda del ratón</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="519"/>
        <source>Rubberband color</source>
        <translation>Color de la banda de medida</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="529"/>
        <source>Ellipsoid for distance calculations</source>
        <translation>Elipsoide para el cálculo de distancias</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="560"/>
        <source>&lt;b&gt;Note:&lt;/b&gt; Specify the search radius as a percentage of the map width</source>
        <translation>&lt;b&gt;Nota:&lt;/b&gt; Especifique el radio de búsqueda como porcentaje de la anchura del mapa</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="570"/>
        <source>Search radius for identifying features and displaying map tips</source>
        <translation>Radio de búsqueda para identificar objetos espaciales y mostrar avisos del mapa</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="625"/>
        <source>Line width</source>
        <translation>Ancho de línea</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="645"/>
        <source>Line colour</source>
        <translation>Color de línea</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="677"/>
        <source>Default snap mode</source>
        <translation>Modo de autoensamblado por omisión</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="707"/>
        <source>Default snapping tolerance in layer units</source>
        <translation>Tolerancia de autoensamblado predeterminada en unidades de la capa</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="737"/>
        <source>Search radius for vertex edits in layer units</source>
        <translation>Radio de búsqueda para edición de vértices en unidades de la capa</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="776"/>
        <source>Marker style</source>
        <translation>Estilo de marcadores</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="913"/>
        <source>Override system locale</source>
        <translation>Ignorar el idioma del sistema</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="935"/>
        <source>&lt;b&gt;Note:&lt;/b&gt; Enabling / changing overide on local requires an application restart</source>
        <translation>&lt;b&gt;Nota:&lt;/b&gt; Activar / cambiar ignorar el idioma requiere reiniciar la aplicación</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="978"/>
        <source>Proxy</source>
        <translation>Proxy</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="984"/>
        <source>Use proxy for web access</source>
        <translation>Usar proxy para acceso web</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="996"/>
        <source>Host</source>
        <translation>Servidor</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="1009"/>
        <source>Port</source>
        <translation>Puerto</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="1022"/>
        <source>User</source>
        <translation>Usuario</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="1032"/>
        <location filename="../src/ui/qgsoptionsbase.ui" line="1049"/>
        <source>Leave this blank if no proxy username / password are required</source>
        <translation>Dejar en blanco si no se requiere nombre de usuario/contraseña de proxy</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="1039"/>
        <source>Password</source>
        <translation>Contraseña</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="219"/>
        <source>Open attribute table in a dock window</source>
        <translation>Abrir tabla de atributos en una ventada adosada</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="823"/>
        <source>CRS</source>
        <translation>SRC</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="864"/>
        <source>When layer is loaded that has no coordinate reference system (CRS)</source>
        <translation>Cuando se carga una capa que no tiene sistema de referencia de coordenadas (SRC)</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="882"/>
        <source>Prompt for CRS</source>
        <translation>Preguntar SRC</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="889"/>
        <source>Project wide default CRS will be used</source>
        <translation>Usar el SRC predeterminado del proyecto</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="896"/>
        <source>Global default CRS displa&amp;yed below will be used</source>
        <translation>Usar el SRC global predeterminado mostrado debajo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsoptionsbase.ui" line="232"/>
        <source>Attribute table behaviour</source>
        <translation>Comportamiento de la tabla de atributos</translation>
    </message>
</context>
<context>
    <name>QgsPasteTransformationsBase</name>
    <message>
        <location filename="../src/ui/qgspastetransformationsbase.ui" line="16"/>
        <source>Paste Transformations</source>
        <translation>Pegar transformaciones</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspastetransformationsbase.ui" line="39"/>
        <source>&lt;b&gt;Note: This function is not useful yet!&lt;/b&gt;</source>
        <translation>&lt;b&gt;Nota: Esta función todavía no es útil&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspastetransformationsbase.ui" line="62"/>
        <source>Source</source>
        <translation>Fuente</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspastetransformationsbase.ui" line="83"/>
        <source>Destination</source>
        <translation>Destino</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspastetransformationsbase.ui" line="122"/>
        <source>&amp;Help</source>
        <translation>&amp;Ayuda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspastetransformationsbase.ui" line="125"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspastetransformationsbase.ui" line="151"/>
        <source>Add New Transfer</source>
        <translation>Añadir nueva transformación</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspastetransformationsbase.ui" line="158"/>
        <source>&amp;OK</source>
        <translation>&amp;Aceptar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspastetransformationsbase.ui" line="174"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>QgsPgGeoprocessing</name>
    <message>
        <location filename="../src/plugins/geoprocessing/qgspggeoprocessing.cpp" line="76"/>
        <source>&amp;Buffer features</source>
        <translation>&amp;Crear buffer de objetos espaciales</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgspggeoprocessing.cpp" line="78"/>
        <source>A new layer is created in the database with the buffered features.</source>
        <translation>Se crea una nueva capa en la base de datos con el buffer de los objetos espaciales.</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgspggeoprocessing.cpp" line="84"/>
        <location filename="../src/plugins/geoprocessing/qgspggeoprocessing.cpp" line="445"/>
        <source>&amp;Geoprocessing</source>
        <translation>Geo&amp;procesamiento</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgspggeoprocessing.cpp" line="119"/>
        <source>Buffer features in layer %1</source>
        <translation>Crear buffer de objetos espaciales de la capa %1</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgspggeoprocessing.cpp" line="345"/>
        <source>Unable to add geometry column</source>
        <translation>No se puede añadir la columna de la geometría</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgspggeoprocessing.cpp" line="346"/>
        <source>Unable to add geometry column to the output table </source>
        <translation>No se ha podido añadir la columna de la geomtría a la tabla de salida </translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgspggeoprocessing.cpp" line="353"/>
        <source>Unable to create table</source>
        <translation>No se puede crear la tabla</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgspggeoprocessing.cpp" line="354"/>
        <source>Failed to create the output table </source>
        <translation>No se ha podido crear la tabla de salida </translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgspggeoprocessing.cpp" line="364"/>
        <source>Error connecting to the database</source>
        <translation>Error al conectarse a la base de datos</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgspggeoprocessing.cpp" line="370"/>
        <source>No GEOS support</source>
        <translation>No hay soporte para GEOS</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgspggeoprocessing.cpp" line="371"/>
        <source>Buffer function requires GEOS support in PostGIS</source>
        <translation>La función buffer requiere soporte GEOS en PostGIS</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgspggeoprocessing.cpp" line="384"/>
        <source>No Active Layer</source>
        <translation>Ninguna capa activa</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgspggeoprocessing.cpp" line="385"/>
        <source>You must select a layer in the legend to buffer</source>
        <translation>Debe seleccionar una capa en la leyenda para crear el buffer</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgspggeoprocessing.cpp" line="376"/>
        <source>Not a PostgreSQL/PostGIS Layer</source>
        <translation>No es una capa PostgreSQL/PostGIS</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgspggeoprocessing.cpp" line="77"/>
        <source>Create a buffer for a PostgreSQL layer. </source>
        <translation>Crear un área de influencia de una capa PostgreSQL. </translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgspggeoprocessing.cpp" line="378"/>
        <source> is not a PostgreSQL/PostGIS layer.
</source>
        <translation> no es una capa PostgreSQL/PostGIS</translation>
    </message>
    <message>
        <location filename="../src/plugins/geoprocessing/qgspggeoprocessing.cpp" line="379"/>
        <source>Geoprocessing functions are only available for PostgreSQL/PostGIS Layers</source>
        <translation>Las funciones de geoprocesamiento sólo están disponibles para capas PostgreSQL/PostGIS</translation>
    </message>
</context>
<context>
    <name>QgsPgQueryBuilder</name>
    <message>
        <location filename="../src/app/qgspgquerybuilder.cpp" line="53"/>
        <location filename="../src/app/qgspgquerybuilder.cpp" line="84"/>
        <source>Table &lt;b&gt;%1&lt;/b&gt; in database &lt;b&gt;%2&lt;/b&gt; on host &lt;b&gt;%3&lt;/b&gt;, user &lt;b&gt;%4&lt;/b&gt;</source>
        <translation>Tabla &lt;b&gt;%1&lt;/b&gt; en la base de datos &lt;b&gt;%2&lt;/b&gt; en el servidor &lt;b&gt;%3&lt;/b&gt;, usuario &lt;b&gt;%4&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/app/qgspgquerybuilder.cpp" line="68"/>
        <source>Connection Failed</source>
        <translation>Ha fallado la conexión</translation>
    </message>
    <message>
        <location filename="../src/app/qgspgquerybuilder.cpp" line="68"/>
        <source>Connection to the database failed:</source>
        <translation>Ha fallado la conexión a la base de datos:</translation>
    </message>
    <message>
        <location filename="../src/app/qgspgquerybuilder.cpp" line="207"/>
        <source>Database error</source>
        <translation>Error de la base de datos</translation>
    </message>
    <message>
        <location filename="../src/app/qgspgquerybuilder.cpp" line="207"/>
        <source>&lt;p&gt;Failed to get sample of field values using SQL:&lt;/p&gt;&lt;p&gt;</source>
        <translation>&lt;p&gt;No se pudieron obtener muestras de los valores de los campos utilizando SQL:&lt;/p&gt;&lt;p&gt;</translation>
    </message>
    <message>
        <location filename="../src/app/qgspgquerybuilder.cpp" line="282"/>
        <source>Query Result</source>
        <translation>Resultados de la consulta</translation>
    </message>
    <message>
        <location filename="../src/app/qgspgquerybuilder.cpp" line="283"/>
        <source>The where clause returned </source>
        <translation>La cláusula &quot;donde&quot; (WHERE) devolvió </translation>
    </message>
    <message>
        <location filename="../src/app/qgspgquerybuilder.cpp" line="284"/>
        <source> rows.</source>
        <translation> filas.</translation>
    </message>
    <message>
        <location filename="../src/app/qgspgquerybuilder.cpp" line="288"/>
        <source>Query Failed</source>
        <translation>Ha fallado la consulta</translation>
    </message>
    <message>
        <location filename="../src/app/qgspgquerybuilder.cpp" line="289"/>
        <source>An error occurred when executing the query:</source>
        <translation>Se ha producido un error mientras se ejecutaba la consulta:</translation>
    </message>
    <message>
        <location filename="../src/app/qgspgquerybuilder.cpp" line="344"/>
        <source>No Records</source>
        <translation>Sin registros</translation>
    </message>
    <message>
        <location filename="../src/app/qgspgquerybuilder.cpp" line="344"/>
        <source>The query you specified results in zero records being returned. Valid PostgreSQL layers must have at least one feature.</source>
        <translation>La consulta que ha especificado devuelve cero registros. Las capas válidas de PostgreSQL deben tener al menos un objeto espacial.</translation>
    </message>
    <message>
        <location filename="../src/app/qgspgquerybuilder.cpp" line="271"/>
        <source>No Query</source>
        <translation>Ninguna consulta</translation>
    </message>
    <message>
        <location filename="../src/app/qgspgquerybuilder.cpp" line="271"/>
        <source>You must create a query before you can test it</source>
        <translation>Debe crear una consulta antes de probarlo</translation>
    </message>
    <message>
        <location filename="../src/app/qgspgquerybuilder.cpp" line="337"/>
        <source>Error in Query</source>
        <translation>Error en la consulta</translation>
    </message>
</context>
<context>
    <name>QgsPgQueryBuilderBase</name>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="21"/>
        <source>PostgreSQL Query Builder</source>
        <translation>Constructor de consultas de PostgreSQL</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="328"/>
        <source>Clear</source>
        <translation>Limpiar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="338"/>
        <source>Test</source>
        <translation>Probar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="348"/>
        <source>Ok</source>
        <translation>Aceptar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="358"/>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="83"/>
        <source>Values</source>
        <translation>Valores</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="139"/>
        <source>All</source>
        <translation>Todos</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="126"/>
        <source>Sample</source>
        <translation>Muestra</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="46"/>
        <source>Fields</source>
        <translation>Campos</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="149"/>
        <source>Operators</source>
        <translation>Operadores</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="167"/>
        <source>=</source>
        <translation>=</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="209"/>
        <source>IN</source>
        <translation>EN</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="216"/>
        <source>NOT IN</source>
        <translation>NO EN</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="174"/>
        <source>&lt;</source>
        <translation>&lt;</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="230"/>
        <source>&gt;</source>
        <translation>&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="202"/>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="258"/>
        <source>&lt;=</source>
        <translation>&lt;=</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="251"/>
        <source>&gt;=</source>
        <translation>&gt;=</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="223"/>
        <source>!=</source>
        <translation>!=</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="237"/>
        <source>LIKE</source>
        <translation>COMO</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="195"/>
        <source>AND</source>
        <translation>Y</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="244"/>
        <source>ILIKE</source>
        <translation>DISTINTO DE</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="188"/>
        <source>OR</source>
        <translation>O</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="181"/>
        <source>NOT</source>
        <translation>NO</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="274"/>
        <source>SQL where clause</source>
        <translation>Cláusula &quot;donde&quot; (WHERE) de SQL</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="133"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Retrieve &lt;span style=&quot; font-weight:600;&quot;&gt;all&lt;/span&gt; the record in the vector file (&lt;span style=&quot; font-style:italic;&quot;&gt;if the table is big, the operation can consume some time&lt;/span&gt;)&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Recuperar &lt;span style=&quot; font-weight:600;&quot;&gt;todos&lt;/span&gt; los registros del archivo vectorial (&lt;span style=&quot; font-style:italic;&quot;&gt;si la tabla es grande, la operación puede llevar un poco de tiempo&lt;/span&gt;)&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="120"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Take a &lt;span style=&quot; font-weight:600;&quot;&gt;sample&lt;/span&gt; of records in the vector file&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Tomar una &lt;span style=&quot; font-weight:600;&quot;&gt;muestra&lt;/span&gt; de los registros del archivo vectorial&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="101"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;List of values for the current field.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Lista de valores para el campo actual.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="64"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;List of fields in this vector file&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Lista de campos en este archivo vectorial&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspgquerybuilderbase.ui" line="33"/>
        <source>Datasource</source>
        <translation>Origen de datos</translation>
    </message>
</context>
<context>
    <name>QgsPluginInstaller</name>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="30"/>
        <source>Couldn&apos;t parse output from the repository</source>
        <translation>No se pudo analizar la salida del repositorio</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="33"/>
        <source>Couldn&apos;t open the system plugin directory</source>
        <translation>No se pudo abrir el directorio de complementos del sistema</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="34"/>
        <source>Couldn&apos;t open the local plugin directory</source>
        <translation>No se pudo abrir el directorio de complementos local</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="44"/>
        <source>Fetch Python Plugins...</source>
        <translation>Obtener complementos de Python...</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="45"/>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="46"/>
        <source>Install more plugins from remote repositories</source>
        <translation>Instalar más complementos desde repositorios remotos</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="47"/>
        <source>Looking for new plugins...</source>
        <translation>Buscando complementos nuevos...</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="50"/>
        <source>There is a new plugin available</source>
        <translation>Hay disponible un complemento nuevo</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="51"/>
        <source>There is a plugin update available</source>
        <translation>Hay disponible una actualización de complemento</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="54"/>
        <source>QGIS Python Plugin Installer</source>
        <translation>Instalador de complementos de Python de QGIS</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="55"/>
        <source>Error reading repository:</source>
        <translation>Error al leer el repositorio:</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="65"/>
        <source>Nothing to remove! Plugin directory doesn&apos;t exist:</source>
        <translation>¡Nada que eliminar! El directorio de complementos no existe:</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="66"/>
        <source>Failed to remove the directory:</source>
        <translation>No se pudo eliminar el directorio:</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="67"/>
        <source>Check permissions or remove it manually</source>
        <translation>Compruebe los permisos o elimínelo manualmente</translation>
    </message>
</context>
<context>
    <name>QgsPluginInstallerDialog</name>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="113"/>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="178"/>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="195"/>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="197"/>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="204"/>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="207"/>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="212"/>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="217"/>
        <source>QGIS Python Plugin Installer</source>
        <translation>Instalador de complementos de Python de QGIS</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="114"/>
        <source>Error reading repository:</source>
        <translation>Error al leer el repositorio:</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="117"/>
        <source>all repositories</source>
        <translation>todos lo repositorios</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="118"/>
        <source>connected</source>
        <translation>conectado</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="119"/>
        <source>This repository is connected</source>
        <translation>Este repositorio está conectado</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="120"/>
        <source>unavailable</source>
        <translation>no disponible</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="121"/>
        <source>This repository is enabled, but unavailable</source>
        <translation>Este repositorio está activado, pero no está disponible</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="122"/>
        <source>disabled</source>
        <translation>deshabilitado</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="123"/>
        <source>This repository is disabled</source>
        <translation>Este repositorio está deshabilitado</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="124"/>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="211"/>
        <source>This repository is blocked due to incompatibility with your Quantum GIS version</source>
        <translation>Este repositorio está bloqueado debido a incompatibilidad con su versión de Quantum GIS</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="125"/>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="134"/>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="135"/>
        <source>orphans</source>
        <translation>huérfanos</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="126"/>
        <source>any status</source>
        <translation>cualquier estado</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="127"/>
        <source>not installed</source>
        <comment>plural</comment>
        <translation>no instalado</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="128"/>
        <source>installed</source>
        <comment>plural</comment>
        <translation>Instalado</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="129"/>
        <source>upgradeable and news</source>
        <translation>actualizables y nuevos</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="138"/>
        <source>This plugin is not installed</source>
        <translation>Este complemento no está instalado</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="139"/>
        <source>This plugin is installed</source>
        <translation>Este complemento está instalado</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="140"/>
        <source>This plugin is installed, but there is an updated version available</source>
        <translation>Este complemento está instalado, pero hay disponible una versión actualizada</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="141"/>
        <source>This plugin is installed, but I can&apos;t find it in any enabled repository</source>
        <translation>Este complemento está instalado, pero no se puede encontrar en ninguno de los repositorios habilitados</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="142"/>
        <source>This plugin is not installed and is seen for the first time</source>
        <translation>Este complemento no está instalado y se ve por primera vez</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="143"/>
        <source>This plugin is installed and is newer than its version available in a repository</source>
        <translation>Este complemento está instalado y es más nuevo que la versión disponible en un repositorio</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="147"/>
        <source>not installed</source>
        <comment>singular</comment>
        <translation>no instalado</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="148"/>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="150"/>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="152"/>
        <source>installed</source>
        <comment>singular</comment>
        <translation>instalado</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="149"/>
        <source>upgradeable</source>
        <comment>singular</comment>
        <translation>actualizable</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="151"/>
        <source>new!</source>
        <comment>singular</comment>
        <translation>¡nuevo!</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="153"/>
        <source>invalid</source>
        <comment>singular</comment>
        <translation>no válido</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="155"/>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="158"/>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="160"/>
        <source>installed version</source>
        <translation>versión instalada</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="156"/>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="157"/>
        <source>available version</source>
        <translation>versión disponible</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="159"/>
        <source>That&apos;s the newest available version</source>
        <translation>Esta es la versión más reciente disponible</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="161"/>
        <source>There is no version available for download</source>
        <translation>No hay ninguna versión disponible para descargar</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="165"/>
        <source>only locally available</source>
        <translation>sólo disponible localmente</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="168"/>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="172"/>
        <source>Install plugin</source>
        <translation>Instalar complemento</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="169"/>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="174"/>
        <source>Reinstall plugin</source>
        <translation>Reinstalar complemento</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="170"/>
        <source>Upgrade plugin</source>
        <translation>Actualizar complemento</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="171"/>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="175"/>
        <source>Install/upgrade plugin</source>
        <translation>Instalar/actualizar complemento</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="173"/>
        <source>Downgrade plugin</source>
        <translation>Desactualizar complemento</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="179"/>
        <source>Are you sure you want to downgrade the plugin to the latest available version? The installed one is newer!</source>
        <translation>¿Está seguro de que quiere desactualizar el complemento a la última versión disponible? ¡La versión instalada es más nueva!</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="180"/>
        <source>Plugin installation failed</source>
        <translation>Falló la instalación del complemento</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="181"/>
        <source>Plugin has disappeared</source>
        <translation>El complemento ha desaparecido</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="182"/>
        <source>The plugin seems to have been installed but I don&apos;t know where. Probably the plugin package contained a wrong named directory.
Please search the list of installed plugins. I&apos;m nearly sure you&apos;ll find the plugin there, but I just can&apos;t determine which of them it is. It also means that I won&apos;t be able to determine if this plugin is installed and inform you about available updates. However the plugin may work. Please contact the plugin author and submit this issue.</source>
        <translation>El complemento parece haber sido instalado, pero no se sabe donde. Probablemente el paquete del complemento contenía un nombre de directorio incorrecto.
Por favor, busque en la lista de complemento instalados. Es casi seguro que lo encontrará ahí, pero no se puede determinar cuál de ellos es. Esto también significa que no se podrá determinar si el complemento está instalado ni informarle de actualizaciones disponibles. Sin embargo, el complemento puede funcionar. Por favor, informe al autor del complemento del problema.</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="183"/>
        <source>Plugin installed successfully</source>
        <translation>El complemento se instaló correctamente</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="190"/>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="196"/>
        <source>Plugin uninstall failed</source>
        <translation>Falló la desinstalación del complemento</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="193"/>
        <source>Are you sure you want to uninstall the following plugin?</source>
        <translation>¿Está seguro de que quiere desinstalar el siguiente complemento?</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="194"/>
        <source>Warning: this plugin isn&apos;t available in any accessible repository!</source>
        <translation>Advertencia: este complemento no está disponible en ningún repositorio accesible.</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="198"/>
        <source>Plugin uninstalled successfully</source>
        <translation>El complemento se desinstaló correctamente</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="208"/>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="213"/>
        <source>Unable to add another repository with the same URL!</source>
        <translation>¡No se puede añadir otro repositorio con la misma URL!</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="216"/>
        <source>Are you sure you want to remove the following repository?</source>
        <translation>¿Está seguro de que quiere eliminar el siguiente repositorio?</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="144"/>
        <source>This plugin is incompatible with your Quantum GIS version and probably won&apos;t work.</source>
        <translation>Este complemento es incompatible con su versión de Quantum GIS y probablemente no funcionará.</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="146"/>
        <source>This plugin seems to be broken.
It has been installed but can&apos;t be loaded.
Here is the error message:</source>
        <translation>Este complemento parece estar roto.
Se ha instalado pero no se puede cargar.
Aqui está el mensaje de error:</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="154"/>
        <source>Note that it&apos;s an uninstallable core plugin</source>
        <translation>Tenga en cuenta que este es un complemento de núcleo no desinstalable</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="162"/>
        <source>This plugin is broken</source>
        <translation>Este complemento está roto</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="163"/>
        <source>This plugin requires a newer version of Quantum GIS</source>
        <translation>Este complemento necesita una versión más reciente de Quantum GIS</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="164"/>
        <source>This plugin requires a missing module</source>
        <translation>Este complemento necesita un módulo que falta</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="185"/>
        <source>Plugin reinstalled successfully</source>
        <translation>Complemento reinstalado correctamente</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="187"/>
        <source>The plugin is designed for a newer version of Quantum GIS. The minimum required version is:</source>
        <translation>El complemento está diseñado para una versión más reciente de Quantum GIS. La versión mínima requerida es:</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="188"/>
        <source>The plugin depends on some components missing on your system. You need to install the following Python module in order to enable it:</source>
        <translation>El complemento depende de algunos componentes que faltan en su sistema. Necesita instalar el siguiente módulo de Python para activarlo:</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="189"/>
        <source>The plugin is broken. Python said:</source>
        <translation>El complemento está roto. Python dijo:</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="145"/>
        <source>The required Python module is not installed.
For more information, please visit its homepage and Quantum GIS wiki.</source>
        <translation>El módulo requerido de Python no está instalado.
Para más información, por favor visite su página web y el wiki de Quantun GIS.</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="184"/>
        <source>Python plugin installed.
Now you need to enable it in Plugin Manager.</source>
        <translation>Complemento de Python instalado.
Ahora necesita activarlo en el Administrador de complementos.</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="186"/>
        <source>Python plugin reinstalled.
You need to restart Quantum GIS in order to reload it.</source>
        <translation>Complemento de Python reinstalado.
Tiene que reiniciar Quantum GIS para recargarlo.</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="199"/>
        <source>Python plugin uninstalled. Note that you may need to restart Quantum GIS in order to remove it completely.</source>
        <translation>Complemento de python desinstalado. Tenga en cuenta que puede necesitar reiniciar Quantum GIS para eliminarlo completamente.</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="203"/>
        <source>You are about to add several plugin repositories that are neither authorized nor supported by the Quantum GIS team. Plugin authors generally make efforts to ensure that their work is useful and safe, however, we can assume no responsibility for them.</source>
        <translation>Va a añadir varios repositorios de complementos que no están autorizados ni apoyados por el equipo de Quantum GIS. Los autores de complementos generalmente se esfuerzan para asegurar que su trabajo sea útil y seguro, sin embargo, no podemos asumir ninguna responsabilidad en su nombre.</translation>
    </message>
</context>
<context>
    <name>QgsPluginInstallerDialogBase</name>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="14"/>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="20"/>
        <source>QGIS Python Plugin Installer</source>
        <translation>Instalador de complementos de Python de QGIS</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="36"/>
        <source>Plugins</source>
        <translation>Complementos</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="39"/>
        <source>List of available and installed plugins</source>
        <translation>Lista de complementos disponibles e instalados</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="50"/>
        <source>Filter:</source>
        <translation>Filtrar:</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="60"/>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="63"/>
        <source>Display only plugins containing this word in their metadata</source>
        <translation>Mostrar sólo complementos que contengan esta palabra en sus metadatos</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="79"/>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="85"/>
        <source>Display only plugins from given repository</source>
        <translation>Mostrar sólo complementos de un repositorio dado</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="89"/>
        <source>all repositories</source>
        <translation>todos lo repositorios</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="106"/>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="109"/>
        <source>Display only plugins with matching status</source>
        <translation>Mostrar sólo complementos con estado concordante</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="134"/>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="242"/>
        <source>Status</source>
        <translation>Estado</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="139"/>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="247"/>
        <source>Name</source>
        <translation>Nombre</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="144"/>
        <source>Version</source>
        <translation>Versión</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="149"/>
        <source>Description</source>
        <translation>Descripción</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="154"/>
        <source>Author</source>
        <translation>Autor</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="159"/>
        <source>Repository</source>
        <translation>Repositorio</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="194"/>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="197"/>
        <source>Install, reinstall or upgrade the selected plugin</source>
        <translation>Instalar, reinstalar o actualizar el complemento seleccionado</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="200"/>
        <source>Install/upgrade plugin</source>
        <translation>Instalar/actualizar complemento</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="210"/>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="213"/>
        <source>Uninstall the selected plugin</source>
        <translation>Desinstalar el complemento seleccionado</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="216"/>
        <source>Uninstall plugin</source>
        <translation>Desinstalar complemento</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="226"/>
        <source>Repositories</source>
        <translation>Repositorios</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="229"/>
        <source>List of plugin repositories</source>
        <translation>Lista de repositorios de complementos</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="252"/>
        <source>URL</source>
        <translation>URL</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="260"/>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="266"/>
        <source>Allow the Installer to look for updates and news in enabled repositories on QGIS startup</source>
        <translation>Permitir al instalador buscar actualizaciones y nuevos en los repositorios activos al inicio de QGIS</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="269"/>
        <source>Check for updates on startup</source>
        <translation>Comprobar actualizaciones al inicio</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="295"/>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="298"/>
        <source>Add third party plugin repositories to the list</source>
        <translation>Añadir repositorios de terceros a la lista</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="301"/>
        <source>Add 3rd party repositories</source>
        <translation>Añadir repositorios de terceros</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="321"/>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="324"/>
        <source>Add a new plugin repository</source>
        <translation>Añadir un nuevo repositorio de complementos</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="327"/>
        <source>Add...</source>
        <translation>Añadir...</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="334"/>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="337"/>
        <source>Edit the selected repository</source>
        <translation>Editar el repositorio seleccionado</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="340"/>
        <source>Edit...</source>
        <translation>Editar...</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="347"/>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="350"/>
        <source>Remove the selected repository</source>
        <translation>Eliminar el repositorio seleccionado</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="353"/>
        <source>Delete</source>
        <translation>Borrar</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="369"/>
        <source>The plugins will be installed to ~/.qgis/python/plugins</source>
        <translation>El complemento se instalará en ~/.qgis/python/plugins</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="382"/>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="385"/>
        <source>Close the Installer window</source>
        <translation>Cerrar la ventana del instalador</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerbase.ui" line="388"/>
        <source>Close</source>
        <translation>Cerrar</translation>
    </message>
</context>
<context>
    <name>QgsPluginInstallerFetchingDialog</name>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="72"/>
        <source>Success</source>
        <translation>Éxito</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="73"/>
        <source>Resolving host name...</source>
        <translation>Resolviendo nombre del servidor...</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="74"/>
        <source>Connecting...</source>
        <translation>Conectando...</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="75"/>
        <source>Host connected. Sending request...</source>
        <translation>Servidor conectado. Enviando petición...</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="76"/>
        <source>Downloading data...</source>
        <translation>Descargando datos...</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="77"/>
        <source>Idle</source>
        <translation>Desocupado</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="78"/>
        <source>Closing connection...</source>
        <translation>Cerrando conexión...</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="79"/>
        <source>Error</source>
        <translation>Error</translation>
    </message>
</context>
<context>
    <name>QgsPluginInstallerFetchingDialogBase</name>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerfetchingbase.ui" line="14"/>
        <source>Fetching repositories</source>
        <translation>Recopilando repositorios</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerfetchingbase.ui" line="39"/>
        <source>Overall progress:</source>
        <translation>Progreso global:</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerfetchingbase.ui" line="111"/>
        <source>Abort fetching</source>
        <translation>Cancelar la recopilación</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerfetchingbase.ui" line="167"/>
        <source>Repository</source>
        <translation>Repositorio</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerfetchingbase.ui" line="172"/>
        <source>State</source>
        <translation>Estado</translation>
    </message>
</context>
<context>
    <name>QgsPluginInstallerInstallingDialog</name>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="85"/>
        <source>Installing...</source>
        <translation>Instalando...</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="86"/>
        <source>Resolving host name...</source>
        <translation>Resolviendo nombre del servidor...</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="87"/>
        <source>Connecting...</source>
        <translation>Conectando...</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="88"/>
        <source>Host connected. Sending request...</source>
        <translation>Servidor conectado. Enviando petición...</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="89"/>
        <source>Downloading data...</source>
        <translation>Descargando datos...</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="90"/>
        <source>Idle</source>
        <translation>Desocupado</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="91"/>
        <source>Closing connection...</source>
        <translation>Cerrando conexión...</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="92"/>
        <source>Error</source>
        <translation>Error</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="95"/>
        <source>Failed to unzip the plugin package. Probably it&apos;s broken or missing from the repository. You may also want to make sure that you have write permission to the plugin directory:</source>
        <translation>La descompresión del paquete del complemento falló. Probablemente está roto o falta en el repositorio. Puede que también quiera asegurarse de que tiene permiso de escritura en el directorio de complementos:</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="98"/>
        <source>Aborted by user</source>
        <translation>Cancelado por el usuario</translation>
    </message>
</context>
<context>
    <name>QgsPluginInstallerInstallingDialogBase</name>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerinstallingbase.ui" line="14"/>
        <source>QGIS Python Plugin Installer</source>
        <translation>Instalador de complementos de Python de QGIS</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerinstallingbase.ui" line="41"/>
        <source>Installing plugin:</source>
        <translation>Instalando complemento:</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerinstallingbase.ui" line="63"/>
        <source>Connecting...</source>
        <translation>Conectando...</translation>
    </message>
</context>
<context>
    <name>QgsPluginInstallerPluginErrorDialog</name>
    <message>
        <location filename="../python/plugins/plugin_installer/i18n.cpp" line="105"/>
        <source>no error message received</source>
        <translation>no se recivió ningún mensaje de error</translation>
    </message>
</context>
<context>
    <name>QgsPluginInstallerPluginErrorDialogBase</name>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerpluginerrorbase.ui" line="20"/>
        <source>Error loading plugin</source>
        <translation>Error al cargar el complemento</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerpluginerrorbase.ui" line="35"/>
        <source>The plugin seems to be invalid or have unfulfilled dependencies. It has been installed, but can&apos;t be loaded. If you really need this plugin, you can contact its author or &lt;a href=&quot;http://lists.osgeo.org/mailman/listinfo/qgis-user&quot;&gt;QGIS users group&lt;/a&gt; and try to solve the problem. If not, you can just uninstall it. Here is the error message below:</source>
        <translation>El complemento parece no ser válido o tiene dependencias insatisfechas. Se ha instalado, pero no se puede cargar. Si realmente lo necesita, puede contactar con el autor o &lt;a href=&quot;http://lists.osgeo.org/mailman/listinfo/qgis-user&quot;&gt;el grupo se usuarios de QGIS&lt;/a&gt; e intantar solucionar el problema. Si no, puede simplemente desinstalarlo. A continuación está el mensaje de error:</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerpluginerrorbase.ui" line="83"/>
        <source>Do you want to uninstall this plugin now? If you&apos;re unsure, probably you would like to do this.</source>
        <translation>¿Quiere desinstalar este complemento ahora? Si no está seguro, probablemente quiera hacerlo.</translation>
    </message>
</context>
<context>
    <name>QgsPluginInstallerRepositoryDetailsDialogBase</name>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerrepositorybase.ui" line="20"/>
        <source>Repository details</source>
        <translation>Detalles del repositorio</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerrepositorybase.ui" line="41"/>
        <source>Name:</source>
        <translation>Nombre:</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerrepositorybase.ui" line="64"/>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerrepositorybase.ui" line="67"/>
        <source>Enter a name for the repository</source>
        <translation>Introduzca un nombre para el repositorio</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerrepositorybase.ui" line="74"/>
        <source>URL:</source>
        <translation>URL:</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerrepositorybase.ui" line="81"/>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerrepositorybase.ui" line="84"/>
        <source>Enter the repository URL, beginning with &quot;http://&quot;</source>
        <translation>Introduzca la URL del repositorio, comenzando con &quot;http://&quot;</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerrepositorybase.ui" line="103"/>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerrepositorybase.ui" line="106"/>
        <source>Enable or disable the repository (disabled repositories will be omitted)</source>
        <translation>Activar o desactivar el repositorio (los repositorios desactivados se omitirán)</translation>
    </message>
    <message>
        <location filename="../python/plugins/plugin_installer/qgsplugininstallerrepositorybase.ui" line="109"/>
        <source>Enabled</source>
        <translation>Activado</translation>
    </message>
</context>
<context>
    <name>QgsPluginManager</name>
    <message>
        <location filename="../src/app/qgspluginmanager.cpp" line="209"/>
        <source>No Plugins</source>
        <translation>No hay complementos</translation>
    </message>
    <message>
        <location filename="../src/app/qgspluginmanager.cpp" line="209"/>
        <source>No QGIS plugins found in </source>
        <translation>No se han econtrado complementos de QGIS en </translation>
    </message>
    <message>
        <location filename="../src/app/qgspluginmanager.cpp" line="85"/>
        <source>&amp;Select All</source>
        <translation>&amp;Seleccionar todos</translation>
    </message>
    <message>
        <location filename="../src/app/qgspluginmanager.cpp" line="86"/>
        <source>&amp;Clear All</source>
        <translation>&amp;Limpiar todos</translation>
    </message>
    <message>
        <location filename="../src/app/qgspluginmanager.cpp" line="154"/>
        <source>[ incompatible ]</source>
        <translation>[ incompatible ]</translation>
    </message>
</context>
<context>
    <name>QgsPluginManagerBase</name>
    <message>
        <location filename="../src/ui/qgspluginmanagerbase.ui" line="16"/>
        <source>QGIS Plugin Manager</source>
        <translation>Administrador de complementos de QGIS</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspluginmanagerbase.ui" line="25"/>
        <source>To enable / disable a plugin, click its checkbox or description</source>
        <translation>Para activar /desactivar un complemento, pulse en su casilla o descripción</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspluginmanagerbase.ui" line="45"/>
        <source>&amp;Filter</source>
        <translation>&amp;Filtrar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspluginmanagerbase.ui" line="58"/>
        <source>Plugin Directory:</source>
        <translation>Directorio de complementos:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspluginmanagerbase.ui" line="71"/>
        <source>Directory</source>
        <translation>Directorio</translation>
    </message>
</context>
<context>
    <name>QgsPointDialog</name>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="495"/>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="497"/>
        <source>Zoom In</source>
        <translation>Acercar zum</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="496"/>
        <source>z</source>
        <translation>z</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="500"/>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="502"/>
        <source>Zoom Out</source>
        <translation>Alejar zum</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="501"/>
        <source>Z</source>
        <translation>Z</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="505"/>
        <source>Zoom To Layer</source>
        <translation>Zum a la capa</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="507"/>
        <source>Zoom to Layer</source>
        <translation>Hace zum a la capa</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="510"/>
        <source>Pan Map</source>
        <translation>Mover mapa</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="511"/>
        <source>Pan the map</source>
        <translation>Mueve el mapa</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="514"/>
        <source>Add Point</source>
        <translation>Añadir punto</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="515"/>
        <source>.</source>
        <translation>.</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="516"/>
        <source>Capture Points</source>
        <translation>Crear puntos</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="519"/>
        <source>Delete Point</source>
        <translation>Borrar punto</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="520"/>
        <source>Delete Selected</source>
        <translation>Borrar lo seleccionado</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="187"/>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="267"/>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="442"/>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="453"/>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="573"/>
        <source>Linear</source>
        <translation>Lineal</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="215"/>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="271"/>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="574"/>
        <source>Helmert</source>
        <translation>Helmert</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="198"/>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="206"/>
        <source>Choose a name for the world file</source>
        <translation>Seleccionar un nombre para el archivo de referenciación (world file)</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="273"/>
        <source>Warning</source>
        <translation>Atención</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="288"/>
        <source>Affine</source>
        <translation>Afinidad</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="290"/>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="298"/>
        <source>Not implemented!</source>
        <translation>Sin implementar</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="291"/>
        <source>&lt;p&gt;An affine transform requires changing the original raster file. This is not yet supported.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Una transformación por afinidad requiere cambiar el archivo ráster original. Esto todavía no está soportado.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="299"/>
        <source>&lt;p&gt;The </source>
        <translation>&lt;p&gt; La transformación </translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="301"/>
        <source> transform is not yet supported.&lt;/p&gt;</source>
        <translation> aún no está soportada.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="307"/>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="339"/>
        <source>Error</source>
        <translation>Error</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="340"/>
        <source>Could not write to </source>
        <translation>No se pudo escribir </translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="279"/>
        <source>Currently all modified files will be written in TIFF format.</source>
        <translation>Actualmente todos los archivos modificados se escribirán en formato TIFF.</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="274"/>
        <source>&lt;p&gt;A Helmert transform requires modifications in the raster layer.&lt;/p&gt;&lt;p&gt;The modified raster will be saved in a new file and a world file will be generated for this new file instead.&lt;/p&gt;&lt;p&gt;Are you sure that this is what you want?&lt;/p&gt;</source>
        <translation>&lt;p&gt;Una transformacioń Helmert requiere modificaciones en la capa ráster.&lt;/p&gt;&lt;p&gt;El ráster modificado se guardará en un nuevo archivo y se generará un archivo de referenciación para dicho archivo.&lt;/p&gt;&lt;p&gt;¿Está seguro de que es eso lo que quiere?&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialog.cpp" line="224"/>
        <source>-modified</source>
        <comment>Georeferencer:QgsPointDialog.cpp - used to modify a user given file name</comment>
        <translation>-modificado</translation>
    </message>
</context>
<context>
    <name>QgsPointDialogBase</name>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialogbase.ui" line="105"/>
        <source>Add points</source>
        <translation>Añadir puntos</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialogbase.ui" line="130"/>
        <source>Delete points</source>
        <translation>Borrar puntos</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialogbase.ui" line="178"/>
        <source>Zoom in</source>
        <translation>Acercar zum</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialogbase.ui" line="200"/>
        <source>Zoom out</source>
        <translation>Alejar zum</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialogbase.ui" line="222"/>
        <source>Zoom to the raster extents</source>
        <translation>Zum a la extensión del ráster</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialogbase.ui" line="244"/>
        <source>Pan</source>
        <translation>Mover</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialogbase.ui" line="45"/>
        <source>Modified raster:</source>
        <translation>Raster modificado:</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialogbase.ui" line="52"/>
        <source>World file:</source>
        <translation>Archivo de referenciación (world file):</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialogbase.ui" line="65"/>
        <source>Transform type:</source>
        <translation>Tipo de transformación:</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialogbase.ui" line="13"/>
        <source>Reference points</source>
        <translation>Puntos de referencia</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialogbase.ui" line="31"/>
        <location filename="../src/plugins/georeferencer/qgspointdialogbase.ui" line="38"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialogbase.ui" line="75"/>
        <source>Create</source>
        <translation>Crear</translation>
    </message>
    <message>
        <location filename="../src/plugins/georeferencer/qgspointdialogbase.ui" line="282"/>
        <source>Create and load layer</source>
        <translation>Crear y cargar capa</translation>
    </message>
</context>
<context>
    <name>QgsPostgresProvider</name>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="105"/>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="125"/>
        <source>Unable to access relation</source>
        <translation>No se puede acceder a la relación</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="106"/>
        <source>Unable to access the </source>
        <translation>No se puede acceder a la relación </translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="107"/>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="127"/>
        <source> relation.
The error message from the database was:
</source>
        <translation> relación.
El mensaje de error de la base de datos fue:
</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="920"/>
        <source>No suitable key column in table</source>
        <translation>No hay una columna de clave adecuada</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="921"/>
        <source>The table has no column suitable for use as a key.

Qgis requires that the table either has a column of type
int4 with a unique constraint on it (which includes the
primary key) or has a PostgreSQL oid column.
</source>
        <translation>La tabla no tiene una columna adecuada para utilizar como clave.

Qgis necesita que la tabla tenga una columna de tipo
int4 con reserva única en ella (lo que incluye la
clave primaria) o que tenga una columna oid de PostgreSQL.</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="963"/>
        <source>The unique index on column</source>
        <translation>El índice único en la columna</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="965"/>
        <source>is unsuitable because Qgis does not currently support non-int4 type columns as a key into the table.
</source>
        <translation>no es adecuado porque actualmente Qgis no admite columnas de tipo no-int4 como clave de la tabla.
</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="987"/>
        <source>and </source>
        <translation>y </translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="993"/>
        <source>The unique index based on columns </source>
        <translation>El índice único basado en columnas </translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="994"/>
        <source> is unsuitable because Qgis does not currently support multiple columns as a key into the table.
</source>
        <translation> no es adecuado porque actualmente Qgis no admite columnas múltiples como clave de la tabla.</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="1037"/>
        <source>Unable to find a key column</source>
        <translation>No se puede encontrar una columna de clave</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="1116"/>
        <source> derives from </source>
        <translation> deriva de </translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="1121"/>
        <source>and is suitable.</source>
        <translation>y es adecuada.</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="1125"/>
        <source>and is not suitable </source>
        <translation>y no es adecuada </translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="1126"/>
        <source>type is </source>
        <translation>es de tipo </translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="1128"/>
        <source> and has a suitable constraint)</source>
        <translation> y tiene la reserva adecuada)</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="1130"/>
        <source> and does not have a suitable constraint)</source>
        <translation> y no tiene la reserva adecuada)</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="1214"/>
        <source>Note: </source>
        <translation>Nota: </translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="1215"/>
        <source>initially appeared suitable but does not contain unique data, so is not suitable.
</source>
        <translation>inicialmente parecía adecuada pero no contiene datos únicos, por lo que no es aceptable.
</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="1227"/>
        <source>The view you selected has the following columns, none of which satisfy the above conditions:</source>
        <translation>La vista que ha seleccionado contiene las siguientes columnas, ninguna de las cuales satisface las condiciones anteriores:</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="1229"/>
        <source>Qgis requires that the view has a column that can be used as a unique key. Such a column should be derived from a table column of type int4 and be a primary key, have a unique constraint on it, or be a PostgreSQL oid column. To improve performance the column should also be indexed.
</source>
        <translation>Qgis necesita que la vista tenga una columna que pueda ser utilizada como clave única. Esta columna debería proceder de una columna de una tabla de tipo int4 y ser una clave primaria, tener una reserva única o ser una columna oid de PostgreSQL. Para un mejor funcionamiento la columna también debería estar indexada.</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="1235"/>
        <source>The view </source>
        <translation>La vista </translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="1236"/>
        <source>has no column suitable for use as a unique key.
</source>
        <translation>no tiene columnas adecuadas para usar como clave única.
</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="1237"/>
        <source>No suitable key column in view</source>
        <translation>No hay una columna de clave adecuada en la vista</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="2553"/>
        <source>Unknown geometry type</source>
        <translation>Tipo de geometría desconocido</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="2554"/>
        <source>Column </source>
        <translation>Columna </translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="2554"/>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="2563"/>
        <source> in </source>
        <translation> en </translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="2555"/>
        <source> has a geometry type of </source>
        <translation> tiene una geometría de tipo </translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="2556"/>
        <source>, which Qgis does not currently support.</source>
        <translation>, que Qgis no soporta actualmente.</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="2565"/>
        <source>. The database communication log was:
</source>
        <translation>. La registro de comunicación de la base de datos fue:
</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="2566"/>
        <source>Unable to get feature type and srid</source>
        <translation>No se ha podido obtener el tipo ni el srid del objeto espacial</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="2562"/>
        <source>Qgis was unable to determine the type and srid of column </source>
        <translation>QGIS no pude determinar el tipo y srid de la columna </translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="126"/>
        <source>Unable to determine table access privileges for the </source>
        <translation>No se pueden determinar los privilegios de acceso a tabla para el </translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="1888"/>
        <source>Error while adding features</source>
        <translation>Error al añadir objetos espaciales</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="1928"/>
        <source>Error while deleting features</source>
        <translation>Error al borrar objetos espaciales</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="1966"/>
        <source>Error while adding attributes</source>
        <translation>Error al añadir atributos</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="2011"/>
        <source>Error while deleting attributes</source>
        <translation>Error al borrar atributos</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="2081"/>
        <source>Error while changing attributes</source>
        <translation>Error al cambiar atributos</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.h" line="482"/>
        <source>unexpected PostgreSQL error</source>
        <translation>error inesperado de PostgreSQL</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="2160"/>
        <source>Error while changing geometry values</source>
        <translation>Error al cambiar los valores de la geometría</translation>
    </message>
</context>
<context>
    <name>QgsPostgresProvider::Conn</name>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="323"/>
        <source>No GEOS Support!</source>
        <translation>GEOS no está implementado</translation>
    </message>
    <message>
        <location filename="../src/providers/postgres/qgspostgresprovider.cpp" line="324"/>
        <source>Your PostGIS installation has no GEOS support.
Feature selection and identification will not work properly.
Please install PostGIS with GEOS support (http://geos.refractions.net)</source>
        <translation>Su instalación de PostGIS no admite GEOS.
La selección e identificación de objetos espaciales no funcionarán correctamente.
Instale PostGIS con capacidad para GEOS (http://geos.refractions.net)
</translation>
    </message>
</context>
<context>
    <name>QgsProjectPropertiesBase</name>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="13"/>
        <source>Project Properties</source>
        <translation>Propiedades del proyecto</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="32"/>
        <source>General</source>
        <translation>General</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="54"/>
        <source>Default project title</source>
        <translation>Título del proyecto por omisión</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="51"/>
        <source>Descriptive project name</source>
        <translation>Nombre descriptivo del proyecto</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="157"/>
        <source>Meters</source>
        <translation>Metros</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="167"/>
        <source>Feet</source>
        <translation>Pies</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="174"/>
        <source>Decimal degrees</source>
        <translation>Grados decimales</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="184"/>
        <source>Precision</source>
        <translation>Precisión</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="190"/>
        <source>Automatically sets the number of decimal places in the mouse position display</source>
        <translation>Establece automáticamente el número de decimales en la visualización en la posición del ratón</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="193"/>
        <source>The number of decimal places that are used when displaying the mouse position is automatically set to be enough so that moving the mouse by one pixel gives a change in the position display</source>
        <translation>El número de decimales usado cuando se visualiza en la posición del ratón se establece automaticamente de manera que un movimiento del ratón de un solo píxel cambia la posición de la visualización</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="196"/>
        <source>Automatic</source>
        <translation>Automática</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="206"/>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="209"/>
        <source>Sets the number of decimal places to use for the mouse position display</source>
        <translation>Estable el número de decimales a usar para la visualización en la posición del ratón</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="212"/>
        <source>Manual</source>
        <translation>Manual</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="219"/>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="222"/>
        <source>The number of decimal places for the manual option</source>
        <translation>Número de decimales para la opción manual</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="235"/>
        <source>decimal places</source>
        <translation>lugares decimales</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="251"/>
        <source>Digitizing</source>
        <translation>Digitalización</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="257"/>
        <source>Enable topological editing</source>
        <translation>Activar edición topológica</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="271"/>
        <source>Snapping options...</source>
        <translation>Opciones de autoensamblado...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="264"/>
        <source>Avoid intersections of new polygons</source>
        <translation>Evitar intersecciones de nuevos polígonos</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="38"/>
        <source>Title and colors</source>
        <translation>Título y colores</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="44"/>
        <source>Project title</source>
        <translation>Título del proyecto</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="61"/>
        <source>Selection color</source>
        <translation>Color de selección</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="100"/>
        <source>Background color</source>
        <translation>Color de fondo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="139"/>
        <source>Map units</source>
        <translation>Unidades del mapa</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="282"/>
        <source>Coordinate Reference System (CRS)</source>
        <translation>Sistema de referencia de coordenadas (SRC)</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectpropertiesbase.ui" line="300"/>
        <source>Enable &apos;on the fly&apos; CRS transformation</source>
        <translation>Activar transformación de SRC al vuelo</translation>
    </message>
</context>
<context>
    <name>QgsProjectionSelector</name>
    <message>
        <location filename="../src/gui/qgsprojectionselector.cpp" line="491"/>
        <source>User Defined Coordinate Systems</source>
        <translation>Sistemas de coordenadas definidos por el usuario</translation>
    </message>
    <message>
        <location filename="../src/gui/qgsprojectionselector.cpp" line="568"/>
        <source>Geographic Coordinate Systems</source>
        <translation>Sistemas de coordenadas geográficas</translation>
    </message>
    <message>
        <location filename="../src/gui/qgsprojectionselector.cpp" line="577"/>
        <source>Projected Coordinate Systems</source>
        <translation>Sistemas de coordenadas proyectadas</translation>
    </message>
    <message>
        <location filename="../src/gui/qgsprojectionselector.cpp" line="931"/>
        <source>Resource Location Error</source>
        <translation>Error en la localización de recursos</translation>
    </message>
    <message>
        <location filename="../src/gui/qgsprojectionselector.cpp" line="932"/>
        <source>Error reading database file from: 
 %1
Because of this the projection selector will not work...</source>
        <translation>Error al leer el archivo de base de datos de: 
 %1
Debido a esto no funcionará el selector de proyecciones...</translation>
    </message>
</context>
<context>
    <name>QgsProjectionSelectorBase</name>
    <message>
        <location filename="../src/ui/qgsprojectionselectorbase.ui" line="111"/>
        <source>Search</source>
        <translation>Buscar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectionselectorbase.ui" line="155"/>
        <source>Find</source>
        <translation>Encontrar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectionselectorbase.ui" line="133"/>
        <source>Name</source>
        <translation>Nombre</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectionselectorbase.ui" line="117"/>
        <source>EPSG ID</source>
        <translation>EPSG ID</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectionselectorbase.ui" line="19"/>
        <source>Coordinate Reference System Selector</source>
        <translation>Selector de sistema de referencia de coordenadas</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectionselectorbase.ui" line="53"/>
        <source>Coordinate Reference System</source>
        <translation>Sistema de referencia de coordenadas</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectionselectorbase.ui" line="58"/>
        <source>EPSG</source>
        <translation>EPSG</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsprojectionselectorbase.ui" line="63"/>
        <source>ID</source>
        <translation>ID</translation>
    </message>
</context>
<context>
    <name>QgsPythonDialog</name>
    <message>
        <location filename="../src/ui/qgspythondialog.ui" line="13"/>
        <source>Python console</source>
        <translation>Consola de Python</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspythondialog.ui" line="58"/>
        <source>&gt;&gt;&gt;</source>
        <translation>&gt;&gt;&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/qgspythondialog.ui" line="33"/>
        <source>To access Quantum GIS environment from this python console use object from global scope which is an instance of QgisInterface class.&lt;br&gt;Usage e.g.: iface.zoomFull()</source>
        <translation>Para acceder al entorno de Quantum GIS desde esta consola de python use objetos de ámbito global, lo que es una instancia de la clase QgisInterface.&lt;br&gt;Ejemplo de uso: iface.zoomFull()</translation>
    </message>
</context>
<context>
    <name>QgsQuickPrint</name>
    <message>
        <location filename="../src/gui/qgsquickprint.cpp" line="831"/>
        <source> km</source>
        <translation> km</translation>
    </message>
    <message>
        <location filename="../src/gui/qgsquickprint.cpp" line="836"/>
        <source> mm</source>
        <translation> mm</translation>
    </message>
    <message>
        <location filename="../src/gui/qgsquickprint.cpp" line="841"/>
        <source> cm</source>
        <translation> cm</translation>
    </message>
    <message>
        <location filename="../src/gui/qgsquickprint.cpp" line="845"/>
        <source> m</source>
        <translation> m</translation>
    </message>
    <message>
        <location filename="../src/gui/qgsquickprint.cpp" line="850"/>
        <source> miles</source>
        <translation> millas</translation>
    </message>
    <message>
        <location filename="../src/gui/qgsquickprint.cpp" line="855"/>
        <source> mile</source>
        <translation> milla</translation>
    </message>
    <message>
        <location filename="../src/gui/qgsquickprint.cpp" line="860"/>
        <source> inches</source>
        <translation> pulgadas</translation>
    </message>
    <message>
        <location filename="../src/gui/qgsquickprint.cpp" line="865"/>
        <source> foot</source>
        <translation> pie</translation>
    </message>
    <message>
        <location filename="../src/gui/qgsquickprint.cpp" line="869"/>
        <source> feet</source>
        <translation> pies</translation>
    </message>
    <message>
        <location filename="../src/gui/qgsquickprint.cpp" line="874"/>
        <source> degree</source>
        <translation> grado</translation>
    </message>
    <message>
        <location filename="../src/gui/qgsquickprint.cpp" line="876"/>
        <source> degrees</source>
        <translation> grados</translation>
    </message>
    <message>
        <location filename="../src/gui/qgsquickprint.cpp" line="879"/>
        <source> unknown</source>
        <translation> desconocido</translation>
    </message>
</context>
<context>
    <name>QgsRasterLayer</name>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="80"/>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2463"/>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="3382"/>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="3398"/>
        <source>Not Set</source>
        <translation>No establecido</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2475"/>
        <source>Driver:</source>
        <translation>Controlador:</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2500"/>
        <source>Dataset Description</source>
        <translation>Descripción del conjunto de datos</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2552"/>
        <source>Dimensions:</source>
        <translation>Dimensiones:</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2565"/>
        <source>No Data Value</source>
        <translation>Valor sin datos</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2580"/>
        <source>Data Type:</source>
        <translation>Tipo de datos:</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2586"/>
        <source>GDT_Byte - Eight bit unsigned integer</source>
        <translation>GDT_Byte - Entero natural de 8 bits</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2589"/>
        <source>GDT_UInt16 - Sixteen bit unsigned integer </source>
        <translation>GDT_UInt16 - Entero natural de 16 bits </translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2592"/>
        <source>GDT_Int16 - Sixteen bit signed integer </source>
        <translation>GDT_Int16 - Número entero de 16 bits </translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2595"/>
        <source>GDT_UInt32 - Thirty two bit unsigned integer </source>
        <translation>GDT_UInt32 - Entero natural de 32 bits </translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2598"/>
        <source>GDT_Int32 - Thirty two bit signed integer </source>
        <translation>GDT_Int32 - Número entero de 32 bits </translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2601"/>
        <source>GDT_Float32 - Thirty two bit floating point </source>
        <translation>GDT_Float32 - Número de coma flotante de 32 bits </translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2604"/>
        <source>GDT_Float64 - Sixty four bit floating point </source>
        <translation>GDT_Float64 - Número de coma flotante de 64 bits </translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2607"/>
        <source>GDT_CInt16 - Complex Int16 </source>
        <translation>GDT_CInt16 - Número complejo Int16 </translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2610"/>
        <source>GDT_CInt32 - Complex Int32 </source>
        <translation>GDT_CInt32 - Número complejo Int32 </translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2613"/>
        <source>GDT_CFloat32 - Complex Float32 </source>
        <translation>GDT_CFloat32 - Número conplejo Float32 </translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2616"/>
        <source>GDT_CFloat64 - Complex Float64 </source>
        <translation>GDT_CFloat64 - Número complejo Float64 </translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2619"/>
        <source>Could not determine raster data type.</source>
        <translation>No se pudo determinar el tipo de datos ráster.</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2624"/>
        <source>Pyramid overviews:</source>
        <translation>Pirámides:</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2645"/>
        <source>Layer Spatial Reference System: </source>
        <translation>Sistema de referencia espacial de la capa: </translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2673"/>
        <source>Origin:</source>
        <translation>Origen:</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2682"/>
        <source>Pixel Size:</source>
        <translation>Tamaño de píxel:</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2700"/>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="4895"/>
        <source>Band</source>
        <translation>Banda</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2707"/>
        <source>Band No</source>
        <translation>Número de banda</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2719"/>
        <source>No Stats</source>
        <translation>No hay estadísticas</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2722"/>
        <source>No stats collected yet</source>
        <translation>Todavía no se han recogido estadísticas</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2732"/>
        <source>Min Val</source>
        <translation>Valor mínimo</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2740"/>
        <source>Max Val</source>
        <translation>Valor máximo</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2748"/>
        <source>Range</source>
        <translation>Intervalo</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2756"/>
        <source>Mean</source>
        <translation>Media</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2764"/>
        <source>Sum of squares</source>
        <translation>Suma de cuadrados</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2772"/>
        <source>Standard Deviation</source>
        <translation>Desviación estándar</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2780"/>
        <source>Sum of all cells</source>
        <translation>Suma de todas las celdas</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2788"/>
        <source>Cell Count</source>
        <translation>Número de celdas</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="1071"/>
        <source>Average Magphase</source>
        <translation>Fase magnética (Magphase) media</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="1076"/>
        <source>Average</source>
        <translation>Media</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="1842"/>
        <source>out of extent</source>
        <translation>fuera de la extensión</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="1880"/>
        <source>null (no data)</source>
        <translation>nulo (sin datos)</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2574"/>
        <source>NoDataValue not set</source>
        <translation>No se ha establecido el valor sin datos (NoDataValue)</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2521"/>
        <source>Band %1</source>
        <translation>Banda %1</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="406"/>
        <source>%1 and all other files (*)</source>
        <translation>%1 y todos los demás ficheros (*)</translation>
    </message>
    <message>
        <source>Band%1</source>
        <translation type="obsolete">Banda%1</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2555"/>
        <source>X: %1 Y: %2 Bands: %3</source>
        <translation>X: %1 Y: %2 Bandas: %3</translation>
    </message>
    <message>
        <location filename="../src/core/raster/qgsrasterlayer.cpp" line="2655"/>
        <source>Project Spatial Reference System: </source>
        <translation>Sistema de referencia espacial del proyecto: </translation>
    </message>
</context>
<context>
    <name>QgsRasterLayerProperties</name>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="103"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="610"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="954"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="972"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1001"/>
        <source>Grayscale</source>
        <translation>Escala de grises</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="104"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="593"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1060"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1714"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2377"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2382"/>
        <source>Pseudocolor</source>
        <translation>Pseudocolor</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="105"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="597"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1064"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1714"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2382"/>
        <source>Freak Out</source>
        <translation>Alucinante</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="796"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="810"/>
        <source>Columns: </source>
        <translation>Columnas: </translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="797"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="811"/>
        <source>Rows: </source>
        <translation>Filas: </translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="800"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="812"/>
        <source>No-Data Value: </source>
        <translation>Valor sin datos: </translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="810"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="811"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="812"/>
        <source>n/a</source>
        <translation>n/d</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1581"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1861"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2745"/>
        <source>Write access denied</source>
        <translation>Acceso de escritura denegado</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1582"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1861"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2745"/>
        <source>Write access denied. Adjust the file permissions and try again.

</source>
        <translation>Acceso de escritura denegado. Ajuste los permisos del archivo e inténtelo de nuevo.

</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1586"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1592"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1597"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1602"/>
        <source>Building pyramids failed.</source>
        <translation>Ha fallado la construcción de pirámides.</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1593"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1603"/>
        <source>Building pyramid overviews is not supported on this type of raster.</source>
        <translation>La creación de pirámides no se admite en este tipo de ráster.</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="109"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="718"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="731"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="747"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2468"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2925"/>
        <source>No Stretch</source>
        <translation>Sin estiramiento</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="110"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="702"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="735"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1077"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2930"/>
        <source>Stretch To MinMax</source>
        <translation>Estirar a MinMax</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="111"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="706"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="739"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1081"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2935"/>
        <source>Stretch And Clip To MinMax</source>
        <translation>Estirar y unir a MinMax</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="112"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="710"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="743"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1085"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2940"/>
        <source>Clip To MinMax</source>
        <translation>Unir a MinMax</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="137"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="876"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1425"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2709"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2804"/>
        <source>Discrete</source>
        <translation>Discreto</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="140"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2592"/>
        <source>Equal interval</source>
        <translation>Intervalo igual</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2615"/>
        <source>Quantiles</source>
        <translation>Cuantiles</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="306"/>
        <source>Description</source>
        <translation>Descripción</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="307"/>
        <source>Large resolution raster layers can slow navigation in QGIS.</source>
        <translation>Las capas ráster de elevada resolución pueden ralentizar la navegación en QGIS.</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="308"/>
        <source>By creating lower resolution copies of the data (pyramids) performance can be considerably improved as QGIS selects the most suitable resolution to use depending on the level of zoom.</source>
        <translation>Creando copias de menor resolución de los datos (pirámides) se puede mejorar el rendimiento de forma considerable, ya que QGIS selecciona la resolución más adecuada dependiendo del nivel de zum.</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="309"/>
        <source>You must have write access in the directory where the original data is stored to build pyramids.</source>
        <translation>Debe tener permiso de escritura en el directorio donde están almacenados los datos originales para construir las pirámides.</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="361"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1774"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1833"/>
        <source>Red</source>
        <translation>Rojo</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="362"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1775"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1833"/>
        <source>Green</source>
        <translation>Verde</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="363"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1776"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1833"/>
        <source>Blue</source>
        <translation>Azul</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="364"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="403"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1777"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1802"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1833"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1846"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1850"/>
        <source>Percent Transparent</source>
        <translation>Porcentaje transparente</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="397"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1796"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1846"/>
        <source>Gray</source>
        <translation>Gris</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="401"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1800"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1850"/>
        <source>Indexed Value</source>
        <translation>Valor indexado</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="605"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="714"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1523"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1525"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1528"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1530"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1734"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2923"/>
        <source>User Defined</source>
        <translation>Definido por el usuario</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="804"/>
        <source>No-Data Value: Not Set</source>
        <translation>Valor sin datos: no establecido</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1818"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2691"/>
        <source>Save file</source>
        <translation>Guardar archivo</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1818"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2278"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2691"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2773"/>
        <source>Textfile (*.txt)</source>
        <translation>Archivo de texto (*.txt)</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1830"/>
        <source>QGIS Generated Transparent Pixel Value Export File</source>
        <translation>Archivo de exportación de valores de píxel transparente generado por QGIS</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2278"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2773"/>
        <source>Open file</source>
        <translation>Abrir archivo</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2351"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2841"/>
        <source>Import Error</source>
        <translation>Error de importación</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2351"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2841"/>
        <source>The following lines contained errors

</source>
        <translation>Las siguientes líneas contenían errores</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2356"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2846"/>
        <source>Read access denied</source>
        <translation>Acceso de lectura denegado</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2356"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2846"/>
        <source>Read access denied. Adjust the file permissions and try again.

</source>
        <translation>Acceso de lectura denegado. Ajuste los permisos de archivo y pruebe de nuevo.</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2382"/>
        <source>Color Ramp</source>
        <translation>Rampa de colores</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="56"/>
        <source>Not Set</source>
        <translation>No establecido</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="3077"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="3094"/>
        <source>Default Style</source>
        <translation>Estilo predeterminado</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="3113"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="3132"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="3179"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="3198"/>
        <source>QGIS Layer Style File (*.qml)</source>
        <translation>Archivo de estilo de capa de QGIS (*.qml)</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="3157"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="3224"/>
        <source>QGIS</source>
        <translation>QGIS</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="3157"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="3224"/>
        <source>Unknown style format: </source>
        <translation>Formato de estilo desconocido: </translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="106"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="601"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="980"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1068"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1365"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1724"/>
        <source>Colormap</source>
        <translation>Mapa de color</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="138"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="872"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1421"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2705"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2756"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2800"/>
        <source>Linear</source>
        <translation>Lineal</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="139"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="880"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2808"/>
        <source>Exact</source>
        <translation>Exacto</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="310"/>
        <source>Please note that building internal pyramids may alter the original data file and once created they cannot be removed!</source>
        <translation>¡Por favor, tenga en cuenta que la construcción de pirámides internas puede alterar el archivo de datos original y una vez creadas no se pueden eliminar!</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="311"/>
        <source>Please note that building internal pyramids could corrupt your image - always make a backup of your data first!</source>
        <translation>¡Por favor, tenga en cuenta que la construcción de pirámides internas puede estropear su imagen - haga siempre una copia de seguridad antes!</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="726"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2918"/>
        <source>Default</source>
        <translation>Predeterminado</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1587"/>
        <source>The file was not writeable. Some formats do not support pyramid overviews. Consult the GDAL documentation if in doubt.</source>
        <translation>El archivo no se puede escribir. Algunos formatos no admiten vistas de pirámides. Consulta la documentación de GDAL en caso de duda.</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2684"/>
        <source>Custom color map entry</source>
        <translation>Entrada de mapa de colores personalizado</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2703"/>
        <source>QGIS Generated Color Map Export File</source>
        <translation>Archivo de exportación de mapa de colores generado por QGIS</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2761"/>
        <source>Load Color Map</source>
        <translation>Cargar mapa de colores</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="3150"/>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="3217"/>
        <source>Saved Style</source>
        <translation>Estilo guardado</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="1598"/>
        <source>Building internal pyramid overviews is not supported on raster layers with JPEG compression.</source>
        <translation>La construcción de vistas de pirámides internas no está admitida en capas ráster con compresión JPEG.</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="437"/>
        <source>Note: Minimum Maximum values are estimates or user defined</source>
        <translation>Nota: los valores Mínimo Máximo son estimas o definidos por el usuario</translation>
    </message>
    <message>
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="441"/>
        <source>Note: Minimum Maximum values are actual values computed from the band(s)</source>
        <translation>Nota: los valores Mínimo Máximo son valores reales procesador a partir de la banda(s)</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/app/qgsrasterlayerproperties.cpp" line="2761"/>
        <source>The color map for Band %n failed to load</source>
        <translation type="unfinished">
            <numerusform></numerusform>
        </translation>
    </message>
</context>
<context>
    <name>QgsRasterLayerPropertiesBase</name>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="13"/>
        <source>Raster Layer Properties</source>
        <translation>Propiedades de la capa ráster</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="34"/>
        <source>Symbology</source>
        <translation>Simbología</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="930"/>
        <source>&lt;p align=&quot;right&quot;&gt;Full&lt;/p&gt;</source>
        <translation>&lt;p align=&quot;right&quot;&gt;Total&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="884"/>
        <source>None</source>
        <translation>Nada</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1327"/>
        <source>General</source>
        <translation>General</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1512"/>
        <source>Thumbnail</source>
        <translation>Miniatura</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1371"/>
        <source>Columns:</source>
        <translation>Columnas:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1384"/>
        <source>Rows:</source>
        <translation>Filas:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1397"/>
        <source>No Data:</source>
        <translation>Sin datos:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1418"/>
        <source>Maximum scale at which this layer will be displayed. </source>
        <translation>Escala máxima a la que se mostrará esta capa. </translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1441"/>
        <source>Minimum scale at which this layer will be displayed. </source>
        <translation>Escala mínima a la que se mostrará esta capa. </translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1631"/>
        <source>Metadata</source>
        <translation>Metadatos</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1644"/>
        <source>Pyramids</source>
        <translation>Pirámides</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1718"/>
        <source>Average</source>
        <translation>Media</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1723"/>
        <source>Nearest Neighbour</source>
        <translation>Vecino más próximo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1746"/>
        <source>Histogram</source>
        <translation>Histograma</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1812"/>
        <source>Options</source>
        <translation>Opciones</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1783"/>
        <source>Chart Type</source>
        <translation>Tipo de gráfico</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1894"/>
        <source>Refresh</source>
        <translation>Actualizar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="635"/>
        <source>Max</source>
        <translation>Máx</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="597"/>
        <source>Min</source>
        <translation>Mín</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="910"/>
        <source> 00%</source>
        <translation> 00%</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="40"/>
        <source>Render as</source>
        <translation>Representar como</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="222"/>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1031"/>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1048"/>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1062"/>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1076"/>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1103"/>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1117"/>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1203"/>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1233"/>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1247"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1134"/>
        <source>Colormap</source>
        <translation>Mapa de color</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1170"/>
        <source>Delete entry</source>
        <translation>Borrar entrada</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1316"/>
        <source>Classify</source>
        <translation>Clasificar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1262"/>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1267"/>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1272"/>
        <source>2</source>
        <translation>2</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="727"/>
        <source>Estimate (faster)</source>
        <translation>Estimar (más rápido)</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="767"/>
        <source>Load</source>
        <translation>Cargar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="747"/>
        <source>Actual (slower)</source>
        <translation>Real (más lento)</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="795"/>
        <source>Current</source>
        <translation>Actual</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="818"/>
        <source>Save current contrast enhancement algorithm as default. This setting will be persistent between QGIS sessions.</source>
        <translation>Guardar el algoritmo actual de mejora del contraste como predeterminado. Esta configuración se mantendrá entre sesiones de QGIS.</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="821"/>
        <source>Saves current contrast enhancement algorithm as a default. This setting will be persistent between QGIS sessions.</source>
        <translation>Guarda la configuración actual del algoritmo de mejora del contraste como predeterminado. Esta configuración se mantendrá entre sesiones de QGIS.</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="835"/>
        <source>Default</source>
        <translation>Predeterminado</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="842"/>
        <source>TextLabel</source>
        <translation>EtiquetaDeTexto</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="853"/>
        <source>Transparency</source>
        <translation>Transparencia</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="46"/>
        <source>Single band gray</source>
        <translation>Gris de una banda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="66"/>
        <source>Three band color</source>
        <translation>Color de tres bandas</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="118"/>
        <source>RGB mode band selection and scaling</source>
        <translation>Selección de banda del modo RGB y escalado</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="124"/>
        <source>Red band</source>
        <translation>Banda roja</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="156"/>
        <source>Green band</source>
        <translation>Banda verde</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="188"/>
        <source>Blue band</source>
        <translation>Banda azul</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="242"/>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="584"/>
        <source>Custom min / max values</source>
        <translation>Valores mínimo / máximo personalizados</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="255"/>
        <source>Red min</source>
        <translation>Mínimo de rojo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="306"/>
        <source>Red max</source>
        <translation>Máximo de rojo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="344"/>
        <source>Green min</source>
        <translation>Mínimo de verde</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="382"/>
        <source>Green max</source>
        <translation>Máximo de verde</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="420"/>
        <source>Blue min</source>
        <translation>Mínimo de azul</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="458"/>
        <source>Blue max</source>
        <translation>Máximo de azul</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="526"/>
        <source>Single band properties</source>
        <translation>Propiedades de banda única</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="538"/>
        <source>Gray band</source>
        <translation>Banda gris</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="561"/>
        <source>Color map</source>
        <translation>Mapa de color</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="92"/>
        <source>Invert color map</source>
        <translation>Invertir mapa de color</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="490"/>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="667"/>
        <source>Use standard deviation</source>
        <translation>Usar desviación estándar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="721"/>
        <source>Load min / max values from band</source>
        <translation>Cargar valores min / max de la banda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="777"/>
        <source>Contrast enhancement</source>
        <translation>Mejora de contraste</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="859"/>
        <source>Global transparency</source>
        <translation>Transparencia global</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="940"/>
        <source>No data value</source>
        <translation>Valor de sin datos</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="949"/>
        <source>Reset no data value</source>
        <translation>Restablecer valor de sin datos</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="959"/>
        <source>Custom transparency options</source>
        <translation>Opciones de transparencia personalizada</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="965"/>
        <source>Transparency band</source>
        <translation>Banda de transparencia</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="991"/>
        <source>Transparent pixel list</source>
        <translation>Lista de píxeles transparentes</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1028"/>
        <source>Add values manually</source>
        <translation>Añadir valores manualmente</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1045"/>
        <source>Add Values from display</source>
        <translation>Añadir valores desde la visualización</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1059"/>
        <source>Remove selected row</source>
        <translation>Eliminar la fila seleccionada</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1073"/>
        <source>Default values</source>
        <translation>Valores predeterminados</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1100"/>
        <source>Import from file</source>
        <translation>Importar de archivo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1114"/>
        <source>Export to file</source>
        <translation>Exporta a archivo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1286"/>
        <source>Number of entries</source>
        <translation>Número de entradas</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1140"/>
        <source>Color interpolation</source>
        <translation>Interpolación de color</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1306"/>
        <source>Classification mode</source>
        <translation>Modo de clasificación</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1406"/>
        <source>Scale dependent visibility</source>
        <translation>Visibilidad dependiente de la escala</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1431"/>
        <source>Maximum</source>
        <translation>Máximo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1454"/>
        <source>Minimum</source>
        <translation>Mínimo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1346"/>
        <source>Layer source</source>
        <translation>Fuente de la capa</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1333"/>
        <source>Display name</source>
        <translation>Nombre a visualizar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1657"/>
        <source>Pyramid resolutions</source>
        <translation>Resoluciones de pirámides</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1707"/>
        <source>Resampling method</source>
        <translation>Método de remuestreo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1738"/>
        <source>Build pyramids</source>
        <translation>Construir pirámides</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1792"/>
        <source>Line graph</source>
        <translation>Gráfico de líneas</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1802"/>
        <source>Bar chart</source>
        <translation>Gráfico de barras</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1818"/>
        <source>Column count</source>
        <translation>Cuenta de columnas</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1841"/>
        <source>Out of range OK?</source>
        <translation>¿Aceptar fuera de intervalo?</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1848"/>
        <source>Allow approximation</source>
        <translation>Permitir aproximación</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1905"/>
        <source>Restore Default Style</source>
        <translation>Restaurar estilo predeterminado</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1912"/>
        <source>Save As Default</source>
        <translation>Guardar como predeterminado</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1919"/>
        <source>Load Style ...</source>
        <translation>Cargar estilo...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1926"/>
        <source>Save Style ...</source>
        <translation>Guardar estilo...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="707"/>
        <source>Note:</source>
        <translation>Nota:</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="233"/>
        <source>Default R:1 G:2 B:3</source>
        <translation>R:1 G:2 B:3 predeterminado</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1163"/>
        <source>Add entry</source>
        <translation>Añadir entrada</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1177"/>
        <source>Sort</source>
        <translation>Ordenar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1200"/>
        <source>Load color map from band</source>
        <translation>Cargar mapa de color de banda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1230"/>
        <source>Load color map from file</source>
        <translation>Cargar mapa de color de archivo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1244"/>
        <source>Export color map to file</source>
        <translation>Exportar mapa de color a archivo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1280"/>
        <source>Generate new color map</source>
        <translation>Generar nuevo mapa de color</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1467"/>
        <source>Coordinate reference system</source>
        <translation>Sistema de referencia de coordenadas</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1476"/>
        <source>Change ...</source>
        <translation>Cambiar...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1549"/>
        <source>Legend</source>
        <translation>Leyenda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1586"/>
        <source>Palette</source>
        <translation>Paleta</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1650"/>
        <source>Notes</source>
        <translation>Notas</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1700"/>
        <source>Build pyramids internally if possible</source>
        <translation>Construir pirámides internamente si es posible</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsrasterlayerpropertiesbase.ui" line="1670"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;;&quot;&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsRunProcess</name>
    <message>
        <location filename="../src/core/qgsrunprocess.cpp" line="73"/>
        <location filename="../src/core/qgsrunprocess.cpp" line="152"/>
        <source>Unable to run command</source>
        <translation>No se puede ejecutar el comando</translation>
    </message>
    <message>
        <location filename="../src/core/qgsrunprocess.cpp" line="54"/>
        <source>Starting</source>
        <translation>Empezando</translation>
    </message>
    <message>
        <location filename="../src/core/qgsrunprocess.cpp" line="119"/>
        <source>Done</source>
        <translation>Hecho</translation>
    </message>
    <message>
        <location filename="../src/core/qgsrunprocess.cpp" line="72"/>
        <source>Action</source>
        <translation>Acción</translation>
    </message>
</context>
<context>
    <name>QgsScaleBarPlugin</name>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="76"/>
        <source>Bottom Left</source>
        <translation>Inferior izquierda</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="76"/>
        <source>Top Left</source>
        <translation>Superior izquierda</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="77"/>
        <source>Top Right</source>
        <translation>Superior derecha</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="77"/>
        <source>Bottom Right</source>
        <translation>Inferior derecha</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="79"/>
        <source>Tick Down</source>
        <translation>Marcas abajo</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="79"/>
        <source>Tick Up</source>
        <translation>Marcas arriba</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="80"/>
        <source>Bar</source>
        <translation>Barra</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="80"/>
        <source>Box</source>
        <translation>Cajetín</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="100"/>
        <source>&amp;Scale Bar</source>
        <translation>Barra de &amp;escala</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="101"/>
        <source>Creates a scale bar that is displayed on the map canvas</source>
        <translation>Crea una barra de escala que se muestra en la Vista del mapa</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="110"/>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="539"/>
        <source>&amp;Decorations</source>
        <translation>&amp;Ilustraciones</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="160"/>
        <source> metres/km</source>
        <translation> metros/km</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="278"/>
        <source> feet</source>
        <translation> pies</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="162"/>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="285"/>
        <source> degrees</source>
        <translation> grados</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="240"/>
        <source> km</source>
        <translation> km</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="245"/>
        <source> mm</source>
        <translation> mm</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="250"/>
        <source> cm</source>
        <translation> cm</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="254"/>
        <source> m</source>
        <translation> m</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="274"/>
        <source> foot</source>
        <translation> pie</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="283"/>
        <source> degree</source>
        <translation> grado</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="288"/>
        <source> unknown</source>
        <translation> desconocido</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="161"/>
        <source> feet/miles</source>
        <translation> pies/millas</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="259"/>
        <source> miles</source>
        <translation> millas</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="264"/>
        <source> mile</source>
        <translation> milla</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/plugin.cpp" line="269"/>
        <source> inches</source>
        <translation> pulgadas</translation>
    </message>
</context>
<context>
    <name>QgsScaleBarPluginGuiBase</name>
    <message>
        <location filename="../src/plugins/scale_bar/pluginguibase.ui" line="13"/>
        <location filename="../src/plugins/scale_bar/pluginguibase.ui" line="300"/>
        <source>Scale Bar Plugin</source>
        <translation>Complemento de Barra de escala</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/pluginguibase.ui" line="73"/>
        <location filename="../src/plugins/scale_bar/pluginguibase.ui" line="76"/>
        <source>Click to select the colour</source>
        <translation>Pulsar para seleccionar el color</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/pluginguibase.ui" line="94"/>
        <source>Size of bar:</source>
        <translation>Tamaño de la barra:</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/pluginguibase.ui" line="109"/>
        <source>Automatically snap to round number on resize</source>
        <translation>Redondear números automáticamente al cambiar de tamaño</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/pluginguibase.ui" line="127"/>
        <source>Colour of bar:</source>
        <translation>Color de la barra:</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/pluginguibase.ui" line="143"/>
        <source>Top Left</source>
        <translation>Superior izquierda</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/pluginguibase.ui" line="148"/>
        <source>Top Right</source>
        <translation>Superior derecha</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/pluginguibase.ui" line="153"/>
        <source>Bottom Left</source>
        <translation>Inferior izquierda</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/pluginguibase.ui" line="158"/>
        <source>Bottom Right</source>
        <translation>Inferior derecha</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/pluginguibase.ui" line="174"/>
        <source>Enable scale bar</source>
        <translation>Activar barra de escala</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/pluginguibase.ui" line="192"/>
        <source>Scale bar style:</source>
        <translation>Estilo de la barra de escala:</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/pluginguibase.ui" line="207"/>
        <source>Select the style of the scale bar</source>
        <translation>Seleccionar el estilo de la barra de escala</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/pluginguibase.ui" line="211"/>
        <source>Tick Down</source>
        <translation>Marcas abajo</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/pluginguibase.ui" line="216"/>
        <source>Tick Up</source>
        <translation>Marcas arriba</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/pluginguibase.ui" line="221"/>
        <source>Box</source>
        <translation>Cajetín</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/pluginguibase.ui" line="226"/>
        <source>Bar</source>
        <translation>Barra</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/pluginguibase.ui" line="254"/>
        <source>Placement:</source>
        <translation>Ubicación:</translation>
    </message>
    <message>
        <location filename="../src/plugins/scale_bar/pluginguibase.ui" line="274"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;This plugin draws a scale bar on the map. Please note the size option below is a &apos;preferred&apos; size and may have to be altered by QGIS depending on the level of zoom.  The size is measured according to the map units specified in the project properties.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Este complemento dibuja una barra de escala sobre el mapa. Tenga en cuenta que la opción Tamaño indicada abajo es un tamaño &apos;preferido&apos; y puede que tenga que ser alterada por QGIS dependiendo del nivel de zum. El tamaño se establece de acuerdo con las unidades del mapa especificadas en las propiedades del proyecto.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>QgsSearchQueryBuilder</name>
    <message>
        <location filename="../src/app/qgssearchquerybuilder.cpp" line="169"/>
        <source>No matching features found.</source>
        <translation>No se han encontrado objetos espaciales coincidentes.</translation>
    </message>
    <message>
        <location filename="../src/app/qgssearchquerybuilder.cpp" line="170"/>
        <source>Search results</source>
        <translation>Resultados de la búsqueda</translation>
    </message>
    <message>
        <location filename="../src/app/qgssearchquerybuilder.cpp" line="179"/>
        <source>Search string parsing error</source>
        <translation>Error al analizar la cadena de búsqueda</translation>
    </message>
    <message>
        <location filename="../src/app/qgssearchquerybuilder.cpp" line="235"/>
        <source>No Records</source>
        <translation>Ningún registro</translation>
    </message>
    <message>
        <location filename="../src/app/qgssearchquerybuilder.cpp" line="235"/>
        <source>The query you specified results in zero records being returned.</source>
        <translation>La consulta que especificó no ha devuelto ningún registro.</translation>
    </message>
    <message>
        <location filename="../src/app/qgssearchquerybuilder.cpp" line="41"/>
        <source>Search query builder</source>
        <translation>Constructor de consultas de búsqueda</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/app/qgssearchquerybuilder.cpp" line="167"/>
        <source>Found %1 matching features.</source>
        <translation type="unfinished">
            <numerusform></numerusform>
        </translation>
    </message>
</context>
<context>
    <name>QgsServerSourceSelect</name>
    <message>
        <location filename="../src/app/qgsserversourceselect.cpp" line="172"/>
        <source>Are you sure you want to remove the </source>
        <translation>¿Está seguro de que quiere eliminar la conexión </translation>
    </message>
    <message>
        <location filename="../src/app/qgsserversourceselect.cpp" line="172"/>
        <source> connection and all associated settings?</source>
        <translation> y toda su configuración?</translation>
    </message>
    <message>
        <location filename="../src/app/qgsserversourceselect.cpp" line="173"/>
        <source>Confirm Delete</source>
        <translation>Confirmar borrado</translation>
    </message>
    <message>
        <location filename="../src/app/qgsserversourceselect.cpp" line="352"/>
        <source>WMS Provider</source>
        <translation>Proveedor WMS</translation>
    </message>
    <message>
        <location filename="../src/app/qgsserversourceselect.cpp" line="353"/>
        <source>Could not open the WMS Provider</source>
        <translation>No se pudo conectar al proveedor WMS</translation>
    </message>
    <message>
        <location filename="../src/app/qgsserversourceselect.cpp" line="363"/>
        <source>Select Layer</source>
        <translation>Seleccionar capa</translation>
    </message>
    <message>
        <location filename="../src/app/qgsserversourceselect.cpp" line="363"/>
        <source>You must select at least one layer first.</source>
        <translation>Primero debe seleccionar al menos una capa.</translation>
    </message>
    <message>
        <location filename="../src/app/qgsserversourceselect.cpp" line="367"/>
        <source>Coordinate Reference System</source>
        <translation>Sistema de referencia de coordenadas</translation>
    </message>
    <message>
        <location filename="../src/app/qgsserversourceselect.cpp" line="367"/>
        <source>There are no available coordinate reference system for the set of layers you&apos;ve selected.</source>
        <translation>No hay un sistema de coordenadas de referencia para las capas seleccionadas.</translation>
    </message>
    <message>
        <location filename="../src/app/qgsserversourceselect.cpp" line="634"/>
        <source>Could not understand the response.  The</source>
        <translation>La respuesta es ininteligible. El proveedor </translation>
    </message>
    <message>
        <location filename="../src/app/qgsserversourceselect.cpp" line="635"/>
        <source>provider said</source>
        <translation> ha dicho</translation>
    </message>
    <message>
        <location filename="../src/app/qgsserversourceselect.cpp" line="686"/>
        <source>WMS proxies</source>
        <translation>Proxy del servidor WMS</translation>
    </message>
    <message>
        <location filename="../src/app/qgsserversourceselect.cpp" line="686"/>
        <source>Several WMS servers have been added to the server list. Note that if you access the internet via a web proxy, you will need to set the proxy settings in the QGIS options dialog.</source>
        <translation>Se han añadido varios servidores WMS a la lista de servidores. Tenga en cuenta que si accede a internet mediante un proxy necesitará configurarlo en el diálogo de opciones de QGIS.</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/app/qgsserversourceselect.cpp" line="475"/>
        <source>Coordinate Reference System (%1 available)</source>
        <translation type="unfinished">
            <numerusform></numerusform>
        </translation>
    </message>
</context>
<context>
    <name>QgsServerSourceSelectBase</name>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="13"/>
        <source>Add Layer(s) from a Server</source>
        <translation>Añadir capa(s) de un servidor</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="34"/>
        <source>Server Connections</source>
        <translation>Conexiones de servidor</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="46"/>
        <source>Adds a few example WMS servers</source>
        <translation>Añadir unos cuantos servidores WMS de ejemplo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="52"/>
        <source>Add default servers</source>
        <translation>Añadir servidores por omisión</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="81"/>
        <source>C&amp;onnect</source>
        <translation>Co&amp;nectar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="91"/>
        <source>Edit</source>
        <translation>Editar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="101"/>
        <source>Delete</source>
        <translation>Borrar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="108"/>
        <source>&amp;New</source>
        <translation>&amp;Nuevo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="118"/>
        <source>Coordinate Reference System</source>
        <translation>Sistema de referencia de coordenadas</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="156"/>
        <source>Change ...</source>
        <translation>Cambiar...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="174"/>
        <source>Ready</source>
        <translation>Preparado</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="187"/>
        <source>&amp;Add</source>
        <translation>&amp;Añadir</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="190"/>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="203"/>
        <source>Layers</source>
        <translation>Capas</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="230"/>
        <source>ID</source>
        <translation>ID</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="235"/>
        <source>Name</source>
        <translation>Nombre</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="240"/>
        <source>Title</source>
        <translation>Título</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="245"/>
        <source>Abstract</source>
        <translation>Resumen</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="270"/>
        <source>Image encoding</source>
        <translation>Codificación de la imagen</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="296"/>
        <source>Help</source>
        <translation>Ayuda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="299"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="309"/>
        <source>C&amp;lose</source>
        <translation>&amp;Cerrar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsserversourceselectbase.ui" line="312"/>
        <source>Alt+L</source>
        <translation>Alt+C</translation>
    </message>
</context>
<context>
    <name>QgsShapeFile</name>
    <message>
        <location filename="../src/plugins/spit/qgsshapefile.cpp" line="314"/>
        <location filename="../src/plugins/spit/qgsshapefile.cpp" line="337"/>
        <location filename="../src/plugins/spit/qgsshapefile.cpp" line="379"/>
        <location filename="../src/plugins/spit/qgsshapefile.cpp" line="449"/>
        <source>The database gave an error while executing this SQL:</source>
        <translation>La base de datos dio un error mientras ejecutaba esta SQL:</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsshapefile.cpp" line="316"/>
        <location filename="../src/plugins/spit/qgsshapefile.cpp" line="340"/>
        <location filename="../src/plugins/spit/qgsshapefile.cpp" line="381"/>
        <location filename="../src/plugins/spit/qgsshapefile.cpp" line="457"/>
        <source>The error was:</source>
        <translation>El error fue:</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsshapefile.cpp" line="453"/>
        <source>... (rest of SQL trimmed)</source>
        <comment>is appended to a truncated SQL statement</comment>
        <translation>... (cortado el resto de la SQL)</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsshapefile.cpp" line="89"/>
        <source>Scanning </source>
        <translation>Escaneando </translation>
    </message>
</context>
<context>
    <name>QgsSingleSymbolDialog</name>
    <message>
        <location filename="../src/app/qgssinglesymboldialog.cpp" line="114"/>
        <source>Solid Line</source>
        <translation>Línea continua</translation>
    </message>
    <message>
        <location filename="../src/app/qgssinglesymboldialog.cpp" line="115"/>
        <source>Dash Line</source>
        <translation>Línea de rayas</translation>
    </message>
    <message>
        <location filename="../src/app/qgssinglesymboldialog.cpp" line="116"/>
        <source>Dot Line</source>
        <translation>Línea de puntos</translation>
    </message>
    <message>
        <location filename="../src/app/qgssinglesymboldialog.cpp" line="117"/>
        <source>Dash Dot Line</source>
        <translation>Línea de rayas y puntos</translation>
    </message>
    <message>
        <location filename="../src/app/qgssinglesymboldialog.cpp" line="118"/>
        <source>Dash Dot Dot Line</source>
        <translation>Línea de raya punto punto</translation>
    </message>
    <message>
        <location filename="../src/app/qgssinglesymboldialog.cpp" line="119"/>
        <source>No Pen</source>
        <translation>Sin dibujo</translation>
    </message>
    <message>
        <location filename="../src/app/qgssinglesymboldialog.cpp" line="138"/>
        <source>No Brush</source>
        <translation>Sin relleno</translation>
    </message>
    <message>
        <location filename="../src/app/qgssinglesymboldialog.cpp" line="124"/>
        <source>Solid</source>
        <translation>Sólido</translation>
    </message>
    <message>
        <location filename="../src/app/qgssinglesymboldialog.cpp" line="125"/>
        <source>Horizontal</source>
        <translation>Horizontal</translation>
    </message>
    <message>
        <location filename="../src/app/qgssinglesymboldialog.cpp" line="126"/>
        <source>Vertical</source>
        <translation>Vertical</translation>
    </message>
    <message>
        <location filename="../src/app/qgssinglesymboldialog.cpp" line="127"/>
        <source>Cross</source>
        <translation>Cruz</translation>
    </message>
    <message>
        <location filename="../src/app/qgssinglesymboldialog.cpp" line="128"/>
        <source>BDiagonal</source>
        <translation>Diagonal atrás</translation>
    </message>
    <message>
        <location filename="../src/app/qgssinglesymboldialog.cpp" line="129"/>
        <source>FDiagonal</source>
        <translation>Diagonal adelante</translation>
    </message>
    <message>
        <location filename="../src/app/qgssinglesymboldialog.cpp" line="130"/>
        <source>Diagonal X</source>
        <translation>Diagonal X</translation>
    </message>
    <message>
        <location filename="../src/app/qgssinglesymboldialog.cpp" line="131"/>
        <source>Dense1</source>
        <translation>Denso 1</translation>
    </message>
    <message>
        <location filename="../src/app/qgssinglesymboldialog.cpp" line="132"/>
        <source>Dense2</source>
        <translation>Denso 2</translation>
    </message>
    <message>
        <location filename="../src/app/qgssinglesymboldialog.cpp" line="133"/>
        <source>Dense3</source>
        <translation>Denso 3</translation>
    </message>
    <message>
        <location filename="../src/app/qgssinglesymboldialog.cpp" line="134"/>
        <source>Dense4</source>
        <translation>Denso 4</translation>
    </message>
    <message>
        <location filename="../src/app/qgssinglesymboldialog.cpp" line="135"/>
        <source>Dense5</source>
        <translation>Denso 5</translation>
    </message>
    <message>
        <location filename="../src/app/qgssinglesymboldialog.cpp" line="136"/>
        <source>Dense6</source>
        <translation>Denso 6</translation>
    </message>
    <message>
        <location filename="../src/app/qgssinglesymboldialog.cpp" line="137"/>
        <source>Dense7</source>
        <translation>Denso 7</translation>
    </message>
    <message>
        <location filename="../src/app/qgssinglesymboldialog.cpp" line="139"/>
        <source>Texture</source>
        <translation>Textura</translation>
    </message>
</context>
<context>
    <name>QgsSingleSymbolDialogBase</name>
    <message>
        <location filename="../src/ui/qgssinglesymboldialogbase.ui" line="19"/>
        <source>Single Symbol</source>
        <translation>Símbolo único</translation>
    </message>
    <message>
        <location filename="../src/ui/qgssinglesymboldialogbase.ui" line="130"/>
        <source>Size</source>
        <translation>Tamaño</translation>
    </message>
    <message>
        <location filename="../src/ui/qgssinglesymboldialogbase.ui" line="76"/>
        <source>Point Symbol</source>
        <translation>Símbolo de punto</translation>
    </message>
    <message>
        <location filename="../src/ui/qgssinglesymboldialogbase.ui" line="120"/>
        <source>Area scale field</source>
        <translation>Campo de escala de área</translation>
    </message>
    <message>
        <location filename="../src/ui/qgssinglesymboldialogbase.ui" line="110"/>
        <source>Rotation field</source>
        <translation>Campo de rotación</translation>
    </message>
    <message>
        <location filename="../src/ui/qgssinglesymboldialogbase.ui" line="176"/>
        <source>Style Options</source>
        <translation>Opciones de estilo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgssinglesymboldialogbase.ui" line="338"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgssinglesymboldialogbase.ui" line="182"/>
        <source>Outline style</source>
        <translation>Estilo de línea exterior</translation>
    </message>
    <message>
        <location filename="../src/ui/qgssinglesymboldialogbase.ui" line="214"/>
        <source>Outline color</source>
        <translation>Color de línea exterior</translation>
    </message>
    <message>
        <location filename="../src/ui/qgssinglesymboldialogbase.ui" line="249"/>
        <source>Outline width</source>
        <translation>Anchura de línea exterior</translation>
    </message>
    <message>
        <location filename="../src/ui/qgssinglesymboldialogbase.ui" line="275"/>
        <source>Fill color</source>
        <translation>Color de relleno</translation>
    </message>
    <message>
        <location filename="../src/ui/qgssinglesymboldialogbase.ui" line="310"/>
        <source>Fill style</source>
        <translation>Estilo de relleno</translation>
    </message>
    <message>
        <location filename="../src/ui/qgssinglesymboldialogbase.ui" line="48"/>
        <source>Label</source>
        <translation>Etiqueta</translation>
    </message>
</context>
<context>
    <name>QgsSnappingDialog</name>
    <message>
        <location filename="../src/app/qgssnappingdialog.cpp" line="63"/>
        <location filename="../src/app/qgssnappingdialog.cpp" line="81"/>
        <location filename="../src/app/qgssnappingdialog.cpp" line="147"/>
        <source>to vertex</source>
        <translation>a vértice</translation>
    </message>
    <message>
        <location filename="../src/app/qgssnappingdialog.cpp" line="64"/>
        <location filename="../src/app/qgssnappingdialog.cpp" line="85"/>
        <location filename="../src/app/qgssnappingdialog.cpp" line="151"/>
        <source>to segment</source>
        <translation>a segmento</translation>
    </message>
    <message>
        <location filename="../src/app/qgssnappingdialog.cpp" line="65"/>
        <location filename="../src/app/qgssnappingdialog.cpp" line="89"/>
        <source>to vertex and segment</source>
        <translation>a vértice y segmento</translation>
    </message>
</context>
<context>
    <name>QgsSnappingDialogBase</name>
    <message>
        <location filename="../src/ui/qgssnappingdialogbase.ui" line="13"/>
        <source>Snapping options</source>
        <translation>Opciones de autoensamblado</translation>
    </message>
    <message>
        <location filename="../src/ui/qgssnappingdialogbase.ui" line="26"/>
        <source>Layer</source>
        <translation>Capa</translation>
    </message>
    <message>
        <location filename="../src/ui/qgssnappingdialogbase.ui" line="31"/>
        <source>Mode</source>
        <translation>Modo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgssnappingdialogbase.ui" line="36"/>
        <source>Tolerance</source>
        <translation>Tolerancia</translation>
    </message>
</context>
<context>
    <name>QgsSpit</name>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="70"/>
        <source>File Name</source>
        <translation>Nombre de archivo</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="70"/>
        <source>Feature Class</source>
        <translation>Clase de objetos espaciales</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="70"/>
        <source>Features</source>
        <translation>Objetos espaciales</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="71"/>
        <source>DB Relation Name</source>
        <translation>Nombre de la relación de la BD</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="71"/>
        <source>Schema</source>
        <translation>Esquema</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="148"/>
        <source>Are you sure you want to remove the [</source>
        <translation>¿Está seguro de que quiere eliminar la conexión [</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="148"/>
        <source>] connection and all associated settings?</source>
        <translation>] y toda su configuración?</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="149"/>
        <source>Confirm Delete</source>
        <translation>Confirmar borrado</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="172"/>
        <source>Add Shapefiles</source>
        <translation>Añadir archivos shape</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="174"/>
        <source>Shapefiles (*.shp);;All files (*.*)</source>
        <translation>Archivos shape (*.shp);;Todos los archivos (*.*)</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="268"/>
        <source>The following Shapefile(s) could not be loaded:

</source>
        <translation>No se han podido cargar los siguientes archivos shape:

</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="272"/>
        <source>REASON: File cannot be opened</source>
        <translation>MOTIVO: el archivo no se puede abrir</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="277"/>
        <source>REASON: One or both of the Shapefile files (*.dbf, *.shx) missing</source>
        <translation>MOTIVO: faltan uno o varios de los archivos del shape (*.dbf, *shx)</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="354"/>
        <source>General Interface Help:</source>
        <translation>Ayuda de la Interfaz general:</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="356"/>
        <source>PostgreSQL Connections:</source>
        <translation>Conexiones PostgreSQL:</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="358"/>
        <source>[New ...] - create a new connection</source>
        <translation>[Nueva...] - crear una conexión nueva</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="359"/>
        <source>[Edit ...] - edit the currently selected connection</source>
        <translation>[Editar...] - editar la conexión seleccionada actualmente</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="360"/>
        <source>[Remove] - remove the currently selected connection</source>
        <translation>[Eliminar] - eliminar la conexión seleccionada actualmente</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="361"/>
        <source>-you need to select a connection that works (connects properly) in order to import files</source>
        <translation>-debe seleccionar una conexión que funcione para poder importar archivos</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="362"/>
        <source>-when changing connections Global Schema also changes accordingly</source>
        <translation>-cuando se cambian las conexiones el esquema global cambia en concordancia</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="363"/>
        <source>Shapefile List:</source>
        <translation>Lista de archivos shape:</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="365"/>
        <source>[Add ...] - open a File dialog and browse to the desired file(s) to import</source>
        <translation>[Añadir...] - abrir un cuadro de diálogo y buscar los archivos a importar</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="366"/>
        <source>[Remove] - remove the currently selected file(s) from the list</source>
        <translation>[Eliminar] - eliminar los archivos seleccionados de la lista</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="367"/>
        <source>[Remove All] - remove all the files in the list</source>
        <translation>[Eliminar todos] - eliminar todos los archivos de la lista</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="368"/>
        <source>[SRID] - Reference ID for the shapefiles to be imported</source>
        <translation>[SRID] - ID de referencia para los archivos shape a importar</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="369"/>
        <source>[Use Default (SRID)] - set SRID to -1</source>
        <translation>[Utilizar (SRID) por omisión] - establecer SRID a -1</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="370"/>
        <source>[Geometry Column Name] - name of the geometry column in the database</source>
        <translation>[Nombre de columna de la geometría] - nombre de la columna de la geometría en la base de datos</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="371"/>
        <source>[Use Default (Geometry Column Name)] - set column name to &apos;the_geom&apos;</source>
        <translation>[Utilizar [Nombre de columna de la geometría] por omisión] - establecer el nombre de la columna a &quot;the_geom&quot;</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="372"/>
        <source>[Glogal Schema] - set the schema for all files to be imported into</source>
        <translation>[Esquema global] - establecer el esquema para todos los archivos a importar</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="374"/>
        <source>[Import] - import the current shapefiles in the list</source>
        <translation>[Importar] - importar los archivos shape actuales de la lista</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="375"/>
        <source>[Quit] - quit the program
</source>
        <translation>[Cerrar] - salir del programa
</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="376"/>
        <source>[Help] - display this help dialog</source>
        <translation>[Ayuda] - mostrar esta ayuda</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="394"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="428"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="513"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="538"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="548"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="573"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="594"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="615"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="635"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="658"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="692"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="732"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="750"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="780"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="808"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="814"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="831"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="835"/>
        <source>Import Shapefiles</source>
        <translation>Importar archivos shape</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="394"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="835"/>
        <source>You need to specify a Connection first</source>
        <translation>Primero debe especificar una conexión</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="428"/>
        <source>Connection failed - Check settings and try again</source>
        <translation>La conexión ha fallado - Comprobar la configuración y probar de nuevo</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="468"/>
        <source>PostGIS not available</source>
        <translation>PostGIS no está disponible</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="469"/>
        <source>&lt;p&gt;The chosen database does not have PostGIS installed, but this is required for storage of spatial data.&lt;/p&gt;</source>
        <translation>&lt;p&gt;La base de datos seleccionada no tiene instalado PostGIS, lo cual es necesario para almacenar datos espaciales.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="514"/>
        <source>You need to add shapefiles to the list first</source>
        <translation>Primero debe añadir archivos shape a la lista</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="519"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="581"/>
        <source>Importing files</source>
        <translation>Importando archivos</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="519"/>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="523"/>
        <source>Progress</source>
        <translation>Progreso</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="532"/>
        <source>Problem inserting features from file:</source>
        <translation>Problemas al insertar objetos espaciales del archivo:</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="539"/>
        <source>Invalid table name.</source>
        <translation>Nombre de la tabla no válido.</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="549"/>
        <source>No fields detected.</source>
        <translation>No se han detectado campos.</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="574"/>
        <source>The following fields are duplicates:</source>
        <translation>Los siguientes campos están duplicados:</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="595"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="616"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="636"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="659"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="693"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="733"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="751"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="781"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="815"/>
        <source>&lt;p&gt;Error while executing the SQL:&lt;/p&gt;&lt;p&gt;</source>
        <translation>&lt;p&gt;Error al ejecutar la SQL:&lt;/p&gt;&lt;p&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="596"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="617"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="637"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="660"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="694"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="734"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="752"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="782"/>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="816"/>
        <source>&lt;/p&gt;&lt;p&gt;The database said:</source>
        <translation>&lt;/p&gt;&lt;p&gt;La base de datos ha dicho:</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="674"/>
        <source>Import Shapefiles - Relation Exists</source>
        <translation>Importar archivos shape - La relación existe</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="675"/>
        <source>The Shapefile:</source>
        <translation>El archivo shape:</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="675"/>
        <source>will use [</source>
        <translation>utilizará la relación [</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="676"/>
        <source>] relation for its data,</source>
        <translation>] para sus datos,</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="676"/>
        <source>which already exists and possibly contains data.</source>
        <translation>que ya existe y posiblemente contenga datos.</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="677"/>
        <source>To avoid data loss change the &quot;DB Relation Name&quot;</source>
        <translation>Para evitar la pérdida de datos cambie el &quot;Nombre de la relación de la BD&quot;</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="677"/>
        <source>for this Shapefile in the main dialog file list.</source>
        <translation>para este archivo shape en la lista de archivos del diálogo principal.</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="678"/>
        <source>Do you want to overwrite the [</source>
        <translation>¿Quiere sobrescribir la relación [</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="678"/>
        <source>] relation?</source>
        <translation>]?</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="831"/>
        <source>%1 of %2 shapefiles could not be imported.</source>
        <translation>No se pudieron importar %1 de %2 archivos shape.</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="408"/>
        <source>Password for </source>
        <translation>Contraseña para </translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspit.cpp" line="409"/>
        <source>Please enter your password:</source>
        <translation>Por favor, introduzca su contraseña:</translation>
    </message>
</context>
<context>
    <name>QgsSpitBase</name>
    <message>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="19"/>
        <source>SPIT - Shapefile to PostGIS Import Tool</source>
        <translation>SPIT - Herramienta para importar archivos shape a PostGIS</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="169"/>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="172"/>
        <source>Add a shapefile to the list of files to be imported</source>
        <translation>Añadir un archivo shape a la lista de archivos a importar</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="175"/>
        <source>Add</source>
        <translation>Añadir</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="182"/>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="185"/>
        <source>Remove the selected shapefile from the import list</source>
        <translation>Eliminar el archivo shape seleccionado de la lista de importación</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="108"/>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="188"/>
        <source>Remove</source>
        <translation>Eliminar</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="195"/>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="198"/>
        <source>Remove all the shapefiles from the import list</source>
        <translation>Eliminar todos los archivos shape de la lista de importación</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="201"/>
        <source>Remove All</source>
        <translation>Eliminar todos</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="221"/>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="224"/>
        <source>Set the SRID to the default value</source>
        <translation>Establecer el SRID al valor por omisión</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="234"/>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="237"/>
        <source>Set the geometry column name to the default value</source>
        <translation>Establecer el nombre de la columna de la geometría al valor por omisión</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="273"/>
        <source>Global Schema</source>
        <translation>Esquema global</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="54"/>
        <source>PostgreSQL Connections</source>
        <translation>Conexiones PostgreSQL</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="115"/>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="118"/>
        <source>Create a new PostGIS connection</source>
        <translation>Crear una nueva conexión a PostGIS</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="121"/>
        <source>New</source>
        <translation>Nueva</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="102"/>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="105"/>
        <source>Remove the current PostGIS connection</source>
        <translation>Eliminar la conexión actual a PostGIS</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="89"/>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="92"/>
        <source>Edit the current PostGIS connection</source>
        <translation>Editar la conexión actual a PostGIS</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="95"/>
        <source>Edit</source>
        <translation>Editar</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="144"/>
        <source>Import options and shapefile list</source>
        <translation>Opciones de importación y lista de archivos shape</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="227"/>
        <source>Use Default SRID or specify here</source>
        <translation>Usar SRID por omisión o especificar aquí</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="240"/>
        <source>Use Default Geometry Column Name or specify here</source>
        <translation>Usar nombre de columna de geometría por omisión o especificar aquí</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="263"/>
        <source>Primary Key Column Name</source>
        <translation>Nombre de la columna de clave primaria</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="128"/>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="131"/>
        <source>Connect to PostGIS</source>
        <translation>Conectar a PostGIS</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitbase.ui" line="134"/>
        <source>Connect</source>
        <translation>Conectar</translation>
    </message>
</context>
<context>
    <name>QgsSpitPlugin</name>
    <message>
        <location filename="../src/plugins/spit/qgsspitplugin.cpp" line="68"/>
        <source>&amp;Import Shapefiles to PostgreSQL</source>
        <translation>&amp;Importar archivos shape a PostgreSQL</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitplugin.cpp" line="69"/>
        <source>Import shapefiles into a PostGIS-enabled PostgreSQL database. The schema and field names can be customized on import</source>
        <translation>Importar archivos shape a una base de datos PostgreSQL-PostGIS. El esquema y los nombres de los campos se pueden personalizar al importar</translation>
    </message>
    <message>
        <location filename="../src/plugins/spit/qgsspitplugin.cpp" line="75"/>
        <location filename="../src/plugins/spit/qgsspitplugin.cpp" line="93"/>
        <source>&amp;Spit</source>
        <translation>I&amp;mportar (Spit)</translation>
    </message>
</context>
<context>
    <name>QgsTINInterpolatorDialog</name>
    <message>
        <location filename="../src/plugins/interpolation/qgstininterpolatordialog.cpp" line="25"/>
        <source>Linear interpolation</source>
        <translation>Interpolación lineal</translation>
    </message>
</context>
<context>
    <name>QgsTINInterpolatorDialogBase</name>
    <message>
        <location filename="../src/plugins/interpolation/qgstininterpolatordialogbase.ui" line="13"/>
        <source>Triangle based interpolation</source>
        <translation>Interpolación basada en triángulos</translation>
    </message>
    <message>
        <location filename="../src/plugins/interpolation/qgstininterpolatordialogbase.ui" line="19"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:12pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;This interpolator provides different methods for interpolation in a triangular irregular network (TIN).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:12pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Este interpolador proporciona diferentes métodos para la interpolación en una red triangular irregular (TIN).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/interpolation/qgstininterpolatordialogbase.ui" line="31"/>
        <source>Interpolation method:</source>
        <translation>Método de interpolación:</translation>
    </message>
</context>
<context>
    <name>QgsUniqueValueDialog</name>
    <message>
        <location filename="../src/app/qgsuniquevaluedialog.cpp" line="282"/>
        <source>Confirm Delete</source>
        <translation>Confirmar borrado</translation>
    </message>
    <message>
        <location filename="../src/app/qgsuniquevaluedialog.cpp" line="283"/>
        <source>The classification field was changed from &apos;%1&apos; to &apos;%2&apos;.
Should the existing classes be deleted before classification?</source>
        <translation>El campo de clasificación se cambió de &apos;%1&apos; a &apos;%2&apos;.
¿Deben borrarse las clases existentes antes de la clasificación?</translation>
    </message>
</context>
<context>
    <name>QgsUniqueValueDialogBase</name>
    <message>
        <location filename="../src/ui/qgsuniquevaluedialogbase.ui" line="19"/>
        <source>Form1</source>
        <translation>Form1</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsuniquevaluedialogbase.ui" line="93"/>
        <source>Classify</source>
        <translation>Clasificar</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsuniquevaluedialogbase.ui" line="49"/>
        <source>Classification field</source>
        <translation>Campo de clasificación</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsuniquevaluedialogbase.ui" line="100"/>
        <source>Add class</source>
        <translation>Añadir clase</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsuniquevaluedialogbase.ui" line="107"/>
        <source>Delete classes</source>
        <translation>Borrar clases</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsuniquevaluedialogbase.ui" line="114"/>
        <source>Randomize Colors</source>
        <translation>Colores aleatorios</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsuniquevaluedialogbase.ui" line="121"/>
        <source>Reset Colors</source>
        <translation>Restablecer colores</translation>
    </message>
</context>
<context>
    <name>QgsVectorLayer</name>
    <message>
        <location filename="../src/core/qgsvectorlayer.cpp" line="2634"/>
        <source>ERROR: no provider</source>
        <translation>ERROR: ningún proveedor</translation>
    </message>
    <message>
        <location filename="../src/core/qgsvectorlayer.cpp" line="2640"/>
        <source>ERROR: layer not editable</source>
        <translation>ERROR: capa no editable</translation>
    </message>
    <message>
        <location filename="../src/core/qgsvectorlayer.cpp" line="2676"/>
        <source>SUCCESS: %1 attributes added.</source>
        <translation>ÉXITO: se han añadido %1 atributos.</translation>
    </message>
    <message>
        <location filename="../src/core/qgsvectorlayer.cpp" line="2682"/>
        <source>ERROR: %1 new attributes not added</source>
        <translation>ERROR: no se han añadido %1 atributos nuevos</translation>
    </message>
    <message>
        <location filename="../src/core/qgsvectorlayer.cpp" line="2654"/>
        <source>SUCCESS: %1 attributes deleted.</source>
        <translation>ÉXITO: se han borrado %1 atributos.</translation>
    </message>
    <message>
        <location filename="../src/core/qgsvectorlayer.cpp" line="2660"/>
        <source>ERROR: %1 attributes not deleted.</source>
        <translation>ERROR: no se han borrado %1 atributos.</translation>
    </message>
    <message>
        <location filename="../src/core/qgsvectorlayer.cpp" line="2723"/>
        <source>SUCCESS: attribute %1 was added.</source>
        <translation>ÉXITO: se añadió el atributo %1.</translation>
    </message>
    <message>
        <location filename="../src/core/qgsvectorlayer.cpp" line="2730"/>
        <source>ERROR: attribute %1 not added</source>
        <translation>ERROR: no se añadió el atributo %1</translation>
    </message>
    <message>
        <location filename="../src/core/qgsvectorlayer.cpp" line="2789"/>
        <source>SUCCESS: %1 attribute values changed.</source>
        <translation>ÉXITO: se cambiaron los valores de %1 atributos.</translation>
    </message>
    <message>
        <location filename="../src/core/qgsvectorlayer.cpp" line="2794"/>
        <source>ERROR: %1 attribute value changes not applied.</source>
        <translation>ERROR: no se aplicaron los cambios en el valor del atributo %1.</translation>
    </message>
    <message>
        <location filename="../src/core/qgsvectorlayer.cpp" line="2826"/>
        <source>SUCCESS: %1 features added.</source>
        <translation>ÉXITO: se han añadido %1 objetos espaciales.</translation>
    </message>
    <message>
        <location filename="../src/core/qgsvectorlayer.cpp" line="2831"/>
        <source>ERROR: %1 features not added.</source>
        <translation>ERROR: no se han añadido %1 objetos espaciales.</translation>
    </message>
    <message>
        <location filename="../src/core/qgsvectorlayer.cpp" line="2844"/>
        <source>SUCCESS: %1 geometries were changed.</source>
        <translation>ÉXITO: se cambiaron %1 geometrías.</translation>
    </message>
    <message>
        <location filename="../src/core/qgsvectorlayer.cpp" line="2849"/>
        <source>ERROR: %1 geometries not changed.</source>
        <translation>ERROR: no se cambiaron %1 geometrías.</translation>
    </message>
    <message>
        <location filename="../src/core/qgsvectorlayer.cpp" line="2861"/>
        <source>SUCCESS: %1 features deleted.</source>
        <translation>ÉXITO: se borraron %1 objetos espaciales.</translation>
    </message>
    <message>
        <location filename="../src/core/qgsvectorlayer.cpp" line="2871"/>
        <source>ERROR: %1 features not deleted.</source>
        <translation>ERROR: no se borraron %1 objetos espaciales.</translation>
    </message>
    <message>
        <location filename="../src/core/qgsvectorlayer.cpp" line="2348"/>
        <source>No renderer object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/core/qgsvectorlayer.cpp" line="2352"/>
        <source>Classification field not found</source>
        <translation>No se ha encontrado el campo de clasificación</translation>
    </message>
</context>
<context>
    <name>QgsVectorLayerProperties</name>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="304"/>
        <source>Transparency: </source>
        <translation>Transparencia: </translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="318"/>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="395"/>
        <source>Single Symbol</source>
        <translation>Símbolo único</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="322"/>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="398"/>
        <source>Graduated Symbol</source>
        <translation>Símbolo graduado</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="326"/>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="399"/>
        <source>Continuous Color</source>
        <translation>Color graduado</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="330"/>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="400"/>
        <source>Unique Value</source>
        <translation>Valor único</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="353"/>
        <source>This button opens the PostgreSQL query builder and allows you to create a subset of features to display on the map canvas rather than displaying all features in the layer</source>
        <translation>Este botón abre el constructor de consultas de PostgreSQL y permite crear un subconjunto de objetos espaciales para mostrar en la vista del mapa, en vez de mostrarlos todos</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="356"/>
        <source>The query used to limit the features in the layer is shown here. This is currently only supported for PostgreSQL layers. To enter or modify the query, click on the Query Builder button</source>
        <translation>Aquí se muestra la consulta usada para limitar los objetos espaciales de las capas. Esto actualmente sólo está soportado para capas PostgreSQL. Para introducir o modificar la consulta, pulse el botón Constructor de consultas</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="652"/>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="658"/>
        <source>Spatial Index</source>
        <translation>Índice espacial</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="658"/>
        <source>Creation of spatial index failed</source>
        <translation>Ha fallado la creación del índice espacial</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="671"/>
        <source>General:</source>
        <translation>General:</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="685"/>
        <source>Storage type of this layer : </source>
        <translation>Tipo de almacenamiento de esta capa: </translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="691"/>
        <source>Source for this layer : </source>
        <translation>Fuente de esta capa: </translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="708"/>
        <source>Geometry type of the features in this layer : </source>
        <translation>Tipo de geometría de los objetos espaciales en esta capa: </translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="716"/>
        <source>The number of features in this layer : </source>
        <translation>Número de objetos espaciales en esta capa: </translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="721"/>
        <source>Editing capabilities of this layer : </source>
        <translation>Posibilidades de edición de esta capa: </translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="729"/>
        <source>Extents:</source>
        <translation>Extensión:</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="733"/>
        <source>In layer spatial reference system units : </source>
        <translation>En unidades del sistema espacial de referencia de la capa: </translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="734"/>
        <source>xMin,yMin </source>
        <translation>xMín,yMín </translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="738"/>
        <source> : xMax,yMax </source>
        <translation> : xMáx,yMáx </translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="794"/>
        <source>In project spatial reference system units : </source>
        <translation>En unidades del sistema espacial de referencia del proyecto: </translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="768"/>
        <source>Layer Spatial Reference System:</source>
        <translation>Sistema de referencia espacial de la capa:</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="805"/>
        <source>Attribute field info:</source>
        <translation>Información del campo del atributo:</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="812"/>
        <source>Field</source>
        <translation>Campo</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="815"/>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="818"/>
        <source>Length</source>
        <translation>Tamaño</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="821"/>
        <source>Precision</source>
        <translation>Precisión</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="678"/>
        <source>Layer comment: </source>
        <translation>Comentario de la capa: </translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="824"/>
        <source>Comment</source>
        <translation>Comentario</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="901"/>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="920"/>
        <source>Default Style</source>
        <translation>Estilo predeterminado</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="939"/>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="958"/>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="1004"/>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="1023"/>
        <source>QGIS Layer Style File (*.qml)</source>
        <translation>Archivo de estilo de capa de QGIS (*.qml)</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="983"/>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="1051"/>
        <source>QGIS</source>
        <translation>QGIS</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="983"/>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="1051"/>
        <source>Unknown style format: </source>
        <translation>Formato de estilo desconocido: </translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="134"/>
        <source>id</source>
        <translation>ID</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="135"/>
        <source>name</source>
        <translation>nombre</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="136"/>
        <source>type</source>
        <translation>tipo</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="137"/>
        <source>length</source>
        <translation>longitud</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="138"/>
        <source>precision</source>
        <translation>precisión</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="139"/>
        <source>comment</source>
        <translation>comentario</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="140"/>
        <source>edit widget</source>
        <translation>control de edición</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="141"/>
        <source>values</source>
        <translation>valores</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="166"/>
        <source>line edit</source>
        <translation>edición de línea</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="167"/>
        <source>unique values</source>
        <translation>valores únicos</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="168"/>
        <source>unique values (editable)</source>
        <translation>valores únicos (editable)</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="169"/>
        <source>value map</source>
        <translation>mapa de valor</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="170"/>
        <source>classification</source>
        <translation>clasificación</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="171"/>
        <source>range (editable)</source>
        <translation>intervalo (editable)</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="172"/>
        <source>range (slider)</source>
        <translation>intervalo (deslizador)</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="173"/>
        <source>file name</source>
        <translation>nombre de archivo</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="249"/>
        <source>Name conflict</source>
        <translation>Conflicto de nombres</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="249"/>
        <source>The attribute could not be inserted. The name already exists in the table.</source>
        <translation>No se pudo insertar el atributo. El nombre ya existe en la tabla.</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="653"/>
        <source>Creation of spatial index successful</source>
        <translation>Creación de índice espacial correcta</translation>
    </message>
    <message>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="976"/>
        <location filename="../src/app/qgsvectorlayerproperties.cpp" line="1044"/>
        <source>Saved Style</source>
        <translation>Estilo guardado</translation>
    </message>
</context>
<context>
    <name>QgsVectorLayerPropertiesBase</name>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="19"/>
        <source>Layer Properties</source>
        <translation>Propiedades de la capa</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="313"/>
        <source>Symbology</source>
        <translation>Simbología</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="107"/>
        <source>General</source>
        <translation>General</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="119"/>
        <source>Display name</source>
        <translation>Mostrar el nombre</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="132"/>
        <source>Display field for the Identify Results dialog box</source>
        <translation>Campo para mostrar en el cuadro de diálogo de resultados de la identificación</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="135"/>
        <source>This sets the display field for the Identify Results dialog box</source>
        <translation>Establece el campo que se mostrará con la herramienta de identificación</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="138"/>
        <source>Display field</source>
        <translation>Mostrar campo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="148"/>
        <source>Use this control to set which field is placed at the top level of the Identify Results dialog box.</source>
        <translation>Use este control para indicar el campo que se situará en el nivel superior del cuadro de diálogo de resultados de la identificación.</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="179"/>
        <source>Use scale dependent rendering</source>
        <translation>Utilizar representación dependiente de la escala</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="220"/>
        <source>Minimum scale at which this layer will be displayed. </source>
        <translation>Escala mínima a la que se mostrará esta capa. </translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="233"/>
        <source>Maximum scale at which this layer will be displayed. </source>
        <translation>Escala máxima a la que se mostrará esta capa. </translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="162"/>
        <source>Create Spatial Index</source>
        <translation>Crear índice espacial</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="249"/>
        <source>Subset</source>
        <translation>Subconjunto</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="296"/>
        <source>Query Builder</source>
        <translation>Constructor de consultas</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="420"/>
        <source>Metadata</source>
        <translation>Metadatos</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="449"/>
        <source>Labels</source>
        <translation>Etiquetas</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="461"/>
        <source>Display labels</source>
        <translation>Mostrar etiquetas</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="488"/>
        <source>Actions</source>
        <translation>Acciones</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="48"/>
        <source>Restore Default Style</source>
        <translation>Restaurar estilo predeterminado</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="55"/>
        <source>Save As Default</source>
        <translation>Guardar como predeterminado</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="62"/>
        <source>Load Style ...</source>
        <translation>Cargar estilo...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="69"/>
        <source>Save Style ...</source>
        <translation>Guardar estilo...</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="331"/>
        <source>Legend type</source>
        <translation>Tipo de leyenda</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="369"/>
        <source>Transparency</source>
        <translation>Transparencia</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="113"/>
        <source>Options</source>
        <translation>Opciones</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="200"/>
        <source>Maximum</source>
        <translation>Máximo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="210"/>
        <source>Minimum</source>
        <translation>Mínimo</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="169"/>
        <source>Change CRS</source>
        <translation>Cambiar SRC</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="511"/>
        <source>Attributes</source>
        <translation>Atributos</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="528"/>
        <source>New column</source>
        <translation>Nueva columna</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="537"/>
        <source>Ctrl+N</source>
        <translation>Ctrl+N</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="544"/>
        <source>Delete column</source>
        <translation>Borrar columna</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="553"/>
        <source>Ctrl+X</source>
        <translation>Ctrl+X</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="560"/>
        <source>Toggle editing mode</source>
        <translation>Conmutar el modo edición</translation>
    </message>
    <message>
        <location filename="../src/ui/qgsvectorlayerpropertiesbase.ui" line="563"/>
        <source>Click to toggle table editing</source>
        <translation>Pulsar para conmutar la edición de la tabla</translation>
    </message>
</context>
<context>
    <name>QgsWFSPlugin</name>
    <message>
        <location filename="../src/plugins/wfs/qgswfsplugin.cpp" line="49"/>
        <location filename="../src/plugins/wfs/qgswfsplugin.cpp" line="52"/>
        <location filename="../src/plugins/wfs/qgswfsplugin.cpp" line="59"/>
        <source>&amp;Add WFS layer</source>
        <translation>&amp;Añadir capa WFS</translation>
    </message>
</context>
<context>
    <name>QgsWFSProvider</name>
    <message>
        <location filename="../src/providers/wfs/qgswfsprovider.cpp" line="1370"/>
        <source>unknown</source>
        <translation>desconocido</translation>
    </message>
    <message>
        <location filename="../src/providers/wfs/qgswfsprovider.cpp" line="1376"/>
        <source>received %1 bytes from %2</source>
        <translation>recibidos %1 bytes de %2</translation>
    </message>
</context>
<context>
    <name>QgsWFSSourceSelect</name>
    <message>
        <location filename="../src/plugins/wfs/qgswfssourceselect.cpp" line="257"/>
        <source>Are you sure you want to remove the </source>
        <translation>¿Está seguro de que quiere eleminar la conexión </translation>
    </message>
    <message>
        <location filename="../src/plugins/wfs/qgswfssourceselect.cpp" line="257"/>
        <source> connection and all associated settings?</source>
        <translation> y toda su configuración?</translation>
    </message>
    <message>
        <location filename="../src/plugins/wfs/qgswfssourceselect.cpp" line="258"/>
        <source>Confirm Delete</source>
        <translation>Confirmar borrado</translation>
    </message>
</context>
<context>
    <name>QgsWFSSourceSelectBase</name>
    <message>
        <location filename="../src/plugins/wfs/qgswfssourceselectbase.ui" line="29"/>
        <source>Title</source>
        <translation>Título</translation>
    </message>
    <message>
        <location filename="../src/plugins/wfs/qgswfssourceselectbase.ui" line="34"/>
        <source>Name</source>
        <translation>Nombre</translation>
    </message>
    <message>
        <location filename="../src/plugins/wfs/qgswfssourceselectbase.ui" line="39"/>
        <source>Abstract</source>
        <translation>Resumen</translation>
    </message>
    <message>
        <location filename="../src/plugins/wfs/qgswfssourceselectbase.ui" line="47"/>
        <source>Coordinate Reference System</source>
        <translation>Sistema de referencia de coordenadas</translation>
    </message>
    <message>
        <location filename="../src/plugins/wfs/qgswfssourceselectbase.ui" line="85"/>
        <source>Change ...</source>
        <translation>Cambiar...</translation>
    </message>
    <message>
        <location filename="../src/plugins/wfs/qgswfssourceselectbase.ui" line="95"/>
        <source>Server Connections</source>
        <translation>Conexiones de servidor</translation>
    </message>
    <message>
        <location filename="../src/plugins/wfs/qgswfssourceselectbase.ui" line="107"/>
        <source>&amp;New</source>
        <translation>&amp;Nuevo</translation>
    </message>
    <message>
        <location filename="../src/plugins/wfs/qgswfssourceselectbase.ui" line="117"/>
        <source>Delete</source>
        <translation>Borrar</translation>
    </message>
    <message>
        <location filename="../src/plugins/wfs/qgswfssourceselectbase.ui" line="127"/>
        <source>Edit</source>
        <translation>Editar</translation>
    </message>
    <message>
        <location filename="../src/plugins/wfs/qgswfssourceselectbase.ui" line="153"/>
        <source>C&amp;onnect</source>
        <translation>Co&amp;nectar</translation>
    </message>
    <message>
        <location filename="../src/plugins/wfs/qgswfssourceselectbase.ui" line="13"/>
        <source>Add WFS Layer from a Server</source>
        <translation>Añadir capa WFS desde un servidor</translation>
    </message>
</context>
<context>
    <name>QgsWmsProvider</name>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="613"/>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="653"/>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="669"/>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="704"/>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="721"/>
        <source>Tried URL: </source>
        <translation>URL probada: </translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="650"/>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="701"/>
        <source>HTTP Exception</source>
        <translation>Excepción HTTP</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="664"/>
        <source>WMS Service Exception</source>
        <translation>Excepción del servicio WMS</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="774"/>
        <source>Could not get WMS capabilities: %1 at line %2 column %3</source>
        <translation>No se pudieron obtener las capacidades del WMS: %1 en la línea %2 columna %3</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="779"/>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="806"/>
        <source>This is probably due to an incorrect WMS Server URL.</source>
        <translation>Probablemente se deba a una URL incorrecta del servidor WMS.</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="800"/>
        <source>Could not get WMS capabilities in the expected format (DTD): no %1 or %2 found</source>
        <translation>No se pudieron obtener las capacidades del WMS en el formato esperado (DTD): no se ha encontrado %1 o %2</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1549"/>
        <source>Could not get WMS Service Exception at %1: %2 at line %3 column %4</source>
        <translation>No se pudo obtener una excepción del servicio WMS en %1: %2 en la línea %3 columna %4</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1602"/>
        <source>Request contains a Format not offered by the server.</source>
        <translation>La solicitud contiene un formato no ofrecido por el servidor.</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1606"/>
        <source>Request contains a CRS not offered by the server for one or more of the Layers in the request.</source>
        <translation>La solicitud contiene un CRS no ofrecido por el servidor para una o más de las capas solicitadas.</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1610"/>
        <source>Request contains a SRS not offered by the server for one or more of the Layers in the request.</source>
        <translation>La solicitud contiene un SRS no ofrecido por el servidor para una o más de las capas solicitadas.</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1614"/>
        <source>GetMap request is for a Layer not offered by the server, or GetFeatureInfo request is for a Layer not shown on the map.</source>
        <translation>La solicitud de obtención de mapa (GetMap) es para una capa no ofrecida por el servidor o la solicitud de información del tema (GetFeatureInfo) es para una capa que no mostrada en el mapa.</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1619"/>
        <source>Request is for a Layer in a Style not offered by the server.</source>
        <translation>La solicitud es para una capa en un estilo no ofrecido por el servidor.</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1623"/>
        <source>GetFeatureInfo request is applied to a Layer which is not declared queryable.</source>
        <translation>La solicitud de información del tema (GetFeatureInfo) se aplica a una capa no declarada consultable.</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1627"/>
        <source>GetFeatureInfo request contains invalid X or Y value.</source>
        <translation>La solicitud de información del tema (GetFeatureInfo) contiene valores no válidos de X o Y.</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1631"/>
        <source>Value of (optional) UpdateSequence parameter in GetCapabilities request is equal to current value of service metadata update sequence number.</source>
        <translation>El valor del parámetro (opcional) UpdateSequence en la consulta GetCapabilities es igual al valor actual del número de secuencia del servicio de actualización de los metadatos.</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1636"/>
        <source>Value of (optional) UpdateSequence parameter in GetCapabilities request is greater than current value of service metadata update sequence number.</source>
        <translation>El valor del parámetro (opcional) UpdateSequence en la consulta GetCapabilities es mayor que el valor actual del número de secuencia del servicio de actualización de los metadatos.</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1641"/>
        <source>Request does not include a sample dimension value, and the server did not declare a default value for that dimension.</source>
        <translation>La solicitud no incluye un valor de muestra para la dimensión y el servidor no ha declarado un valor por omisión para esa dimensión.</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1646"/>
        <source>Request contains an invalid sample dimension value.</source>
        <translation>La solicitud contiene un valor de muestra para la dimensión no válido.</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1650"/>
        <source>Request is for an optional operation that is not supported by the server.</source>
        <translation>La solicitud es para una operación opcional no soportada por el servidor.</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1654"/>
        <source>(Unknown error code from a post-1.3 WMS server)</source>
        <translation>(Código de error desconocido de un servidor post-1.3 WMS)</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1657"/>
        <source>The WMS vendor also reported: </source>
        <translation>El productor WMS también informó: </translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1842"/>
        <source>Server Properties:</source>
        <translation>Propiedades del servidor:</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1851"/>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1973"/>
        <source>Property</source>
        <translation>Propiedad</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1854"/>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1976"/>
        <source>Value</source>
        <translation>Valor</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1859"/>
        <source>WMS Version</source>
        <translation>Versión WMS</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1867"/>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="2003"/>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="2106"/>
        <source>Title</source>
        <translation>Título</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1875"/>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="2011"/>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="2114"/>
        <source>Abstract</source>
        <translation>Resumen</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1883"/>
        <source>Keywords</source>
        <translation>Palabras clave</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1891"/>
        <source>Online Resource</source>
        <translation>Recursos en línea</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1899"/>
        <source>Contact Person</source>
        <translation>Persona de contacto</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1911"/>
        <source>Fees</source>
        <translation>Cuotas</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1919"/>
        <source>Access Constraints</source>
        <translation>Restricciones de acceso</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1927"/>
        <source>Image Formats</source>
        <translation>Formatos de imagen</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1935"/>
        <source>Identify Formats</source>
        <translation>Formatos de identificación</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1943"/>
        <source>Layer Count</source>
        <translation>Número de capas</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1963"/>
        <source>Layer Properties: </source>
        <translation>Propiedades de la capa: </translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1981"/>
        <source>Selected</source>
        <translation>Seleccionado</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1985"/>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="2022"/>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="2030"/>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="2038"/>
        <source>Yes</source>
        <translation>Sí</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1985"/>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="2022"/>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="2030"/>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="2038"/>
        <source>No</source>
        <translation>No</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1990"/>
        <source>Visibility</source>
        <translation>Visibilidad</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1996"/>
        <source>Visible</source>
        <translation>Visible</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1996"/>
        <source>Hidden</source>
        <translation>Oculta</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1998"/>
        <source>n/a</source>
        <translation>n/d</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="2019"/>
        <source>Can Identify</source>
        <translation>Se puede identificar</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="2027"/>
        <source>Can be Transparent</source>
        <translation>Puede ser transparente</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="2035"/>
        <source>Can Zoom In</source>
        <translation>Se puede acercar el zum</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="2043"/>
        <source>Cascade Count</source>
        <translation>Cuenta en cascada</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="2051"/>
        <source>Fixed Width</source>
        <translation>Anchura fija</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="2059"/>
        <source>Fixed Height</source>
        <translation>Altura fija</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="2067"/>
        <source>WGS 84 Bounding Box</source>
        <translation>Marco de la WGS 84</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="2089"/>
        <source>Available in style</source>
        <translation>Disponible en estilo</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="2098"/>
        <source>Name</source>
        <translation>Nombre</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="2199"/>
        <source>Layer cannot be queried.</source>
        <translation>La capa no se puede consultar.</translation>
    </message>
    <message>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="773"/>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="799"/>
        <location filename="../src/providers/wms/qgswmsprovider.cpp" line="1548"/>
        <source>Dom Exception</source>
        <translation>Excepción dom</translation>
    </message>
</context>
<context>
    <name>QuickPrintGui</name>
    <message>
        <location filename="../src/plugins/quick_print/quickprintgui.cpp" line="110"/>
        <location filename="../src/plugins/quick_print/quickprintgui.cpp" line="129"/>
        <source>Portable Document Format (*.pdf)</source>
        <translation>Formato de documento portátil (*.pdf)</translation>
    </message>
    <message>
        <location filename="../src/plugins/quick_print/quickprintgui.cpp" line="154"/>
        <source>quickprint</source>
        <translation>impresión rápida</translation>
    </message>
    <message>
        <location filename="../src/plugins/quick_print/quickprintgui.cpp" line="154"/>
        <source>Unknown format: </source>
        <translation>Formato desconocido: </translation>
    </message>
</context>
<context>
    <name>QuickPrintGuiBase</name>
    <message>
        <location filename="../src/plugins/quick_print/quickprintguibase.ui" line="13"/>
        <source>QGIS Quick Print Plugin</source>
        <translation>Complemento de impresión rápida de QGIS</translation>
    </message>
    <message>
        <location filename="../src/plugins/quick_print/quickprintguibase.ui" line="158"/>
        <source>Quick Print</source>
        <translation>Impresión rápida</translation>
    </message>
    <message>
        <location filename="../src/plugins/quick_print/quickprintguibase.ui" line="129"/>
        <source>Map Title e.g. ACME inc.</source>
        <translation>Título del mapa, ej. ACME inc.</translation>
    </message>
    <message>
        <location filename="../src/plugins/quick_print/quickprintguibase.ui" line="116"/>
        <source>Map Name e.g. Water Features</source>
        <translation>Nombre del mapa, ej. Elementos acuáticos</translation>
    </message>
    <message>
        <location filename="../src/plugins/quick_print/quickprintguibase.ui" line="103"/>
        <source>Copyright</source>
        <translation>Copyright</translation>
    </message>
    <message>
        <location filename="../src/plugins/quick_print/quickprintguibase.ui" line="48"/>
        <source>Output</source>
        <translation>Salida</translation>
    </message>
    <message>
        <location filename="../src/plugins/quick_print/quickprintguibase.ui" line="60"/>
        <source>Use last filename but incremented.</source>
        <translation>Usar el último nombre de archivo, pero incrementado.</translation>
    </message>
    <message>
        <location filename="../src/plugins/quick_print/quickprintguibase.ui" line="67"/>
        <source>last used filename but incremented will be shown here</source>
        <translation>el último nombre de archivo usado incrementado se mostrará aquí</translation>
    </message>
    <message>
        <location filename="../src/plugins/quick_print/quickprintguibase.ui" line="77"/>
        <source>Prompt for file name</source>
        <translation>Preguntar nombre de archivo</translation>
    </message>
    <message>
        <location filename="../src/plugins/quick_print/quickprintguibase.ui" line="38"/>
        <source>Note: If you want more control over the map layout please use the map composer function in QGIS.</source>
        <translation>Nota: si quiere más control sobre la disposición del mapa, por favor use la función Diseñador de mapas de QGIS.</translation>
    </message>
    <message>
        <location filename="../src/plugins/quick_print/quickprintguibase.ui" line="93"/>
        <source>Page Size</source>
        <translation>Tamaño de página</translation>
    </message>
</context>
<context>
    <name>QuickPrintPlugin</name>
    <message>
        <location filename="../src/plugins/quick_print/quickprintplugin.cpp" line="75"/>
        <source>Quick Print</source>
        <translation>Impresión rápida</translation>
    </message>
    <message>
        <location filename="../src/plugins/quick_print/quickprintplugin.cpp" line="82"/>
        <source>&amp;Quick Print</source>
        <translation>Impresión &amp;rápida</translation>
    </message>
    <message>
        <location filename="../src/plugins/quick_print/quickprintplugin.cpp" line="77"/>
        <source>Provides a way to quickly produce a map with minimal user input.</source>
        <translation>Proporciona una forma de producir rápidamente un mapa con intervención mínima del usuario.</translation>
    </message>
</context>
<context>
    <name>[pluginname]GuiBase</name>
    <message>
        <location filename="../src/plugins/plugin_template/pluginguibase.ui" line="13"/>
        <source>QGIS Plugin Template</source>
        <translation>Plantilla de complementos de QGIS</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/pluginguibase.ui" line="47"/>
        <source>Plugin Template</source>
        <translation>Plantilla de complementos</translation>
    </message>
</context>
<context>
    <name>dxf2shpConverter</name>
    <message>
        <location filename="../src/plugins/dxf2shp_converter/dxf2shpconverter.cpp" line="73"/>
        <source>Converts DXF files in Shapefile format</source>
        <translation>Convierte archivos DXF a formato SHP</translation>
    </message>
    <message>
        <location filename="../src/plugins/dxf2shp_converter/dxf2shpconverter.cpp" line="80"/>
        <location filename="../src/plugins/dxf2shp_converter/dxf2shpconverter.cpp" line="109"/>
        <source>&amp;Dxf2Shp</source>
        <translation>&amp;Dxf2Shp</translation>
    </message>
</context>
<context>
    <name>dxf2shpConverterGui</name>
    <message>
        <location filename="../src/plugins/dxf2shp_converter/dxf2shpconvertergui.ui" line="25"/>
        <source>Dxf Importer</source>
        <translation>Importador DXF</translation>
    </message>
    <message>
        <location filename="../src/plugins/dxf2shp_converter/dxf2shpconvertergui.ui" line="34"/>
        <source>Input Dxf file</source>
        <translation>Archivo dxf de entrada</translation>
    </message>
    <message>
        <location filename="../src/plugins/dxf2shp_converter/dxf2shpconvertergui.ui" line="44"/>
        <location filename="../src/plugins/dxf2shp_converter/dxf2shpconvertergui.ui" line="64"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="../src/plugins/dxf2shp_converter/dxf2shpconvertergui.ui" line="51"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;MS Shell Dlg 2&apos;; font-size:8pt;&quot;&gt;&lt;span style=&quot; font-size:10pt;&quot;&gt;Output file&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;MS Shell Dlg 2&apos;; font-size:8pt;&quot;&gt;&lt;span style=&quot; font-size:10pt;&quot;&gt;Archivo de salida&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/plugins/dxf2shp_converter/dxf2shpconvertergui.ui" line="83"/>
        <source>Output file type</source>
        <translation>Tipo de archivo de salida</translation>
    </message>
    <message>
        <location filename="../src/plugins/dxf2shp_converter/dxf2shpconvertergui.ui" line="89"/>
        <source>Polyline</source>
        <translation>Polilínea</translation>
    </message>
    <message>
        <location filename="../src/plugins/dxf2shp_converter/dxf2shpconvertergui.ui" line="99"/>
        <source>Polygon</source>
        <translation>Polígono</translation>
    </message>
    <message>
        <location filename="../src/plugins/dxf2shp_converter/dxf2shpconvertergui.ui" line="106"/>
        <source>Point</source>
        <translation>Punto</translation>
    </message>
    <message>
        <location filename="../src/plugins/dxf2shp_converter/dxf2shpconvertergui.ui" line="116"/>
        <source>Export text labels</source>
        <translation>Exportar etiquetas de texto</translation>
    </message>
    <message>
        <location filename="../src/plugins/dxf2shp_converter/dxf2shpconvertergui.cpp" line="120"/>
        <source>Fields description:
* Input DXF file: path to the DXF file to be converted
* Output Shp file: desired name of the shape file to be created
* Shp output file type: specifies the type of the output shape file
* Export text labels checkbox: if checked, an additional shp points layer will be created,   and the associated dbf table will contain informations about the &quot;TEXT&quot; fields found in the dxf file, and the text strings themselves

---
Developed by Paolo L. Scala, Barbara Rita Barricelli, Marco Padula
CNR, Milan Unit (Information Technology), Construction Technologies Institute.
For support send a mail to scala@itc.cnr.it
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/plugins/dxf2shp_converter/dxf2shpconvertergui.cpp" line="152"/>
        <source>Choose a DXF file to open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/plugins/dxf2shp_converter/dxf2shpconvertergui.cpp" line="162"/>
        <source>Choose a file name to save to</source>
        <translation type="unfinished">Seleccione un nombre de archivo en el que guardar</translation>
    </message>
</context>
<context>
    <name>pluginname</name>
    <message>
        <location filename="../src/plugins/plugin_template/plugin.cpp" line="73"/>
        <source>[menuitemname]</source>
        <translation>[nombredeelementodemenu]</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/plugin.cpp" line="80"/>
        <source>&amp;[menuname]</source>
        <translation>&amp;{nombremenu]</translation>
    </message>
    <message>
        <location filename="../src/plugins/plugin_template/plugin.cpp" line="75"/>
        <source>Replace this with a short description of what the plugin does</source>
        <translation>Sustituya esto por una breve descripción de lo que hace el complemento</translation>
    </message>
</context>
</TS>
