//Importamos los modulos que vamos ha utilizar  
import ViewMap from "https://js.arcgis.com/4.25/@arcgis/core/views/MapView.js"
import esriConfig from "https://js.arcgis.com/4.25/@arcgis/core/config.js"
import WebMap from "https://js.arcgis.com/4.25/@arcgis/core/WebMap.js"
import  ScaleBar from "https://js.arcgis.com/4.25/@arcgis/core/widgets/ScaleBar.js"
import  Legend from "https://js.arcgis.com/4.25/@arcgis/core/widgets/Legend.js"


//Clave Api
esriConfig.apiKey =
    "AAPK3a46155e72e141f7a1e526779e26ee9eAjXhDfndw1NljGMOgVuF26eFX3-eeUXZZOyG1ndpeWqpSuegyvOx67wvbav2qGrx";

    /// ya no se pasa el mapa base  si no que pasamos la web map que contiene ya los datos del elemento
    const webmap=new WebMap({
        portalItem:{
            id:"41281c51f9de45edaf1c8ed44bb10e30"
        }
    })
//haora visualizamos el web map pero ya no se ponen cordenadas ni zoom
    const view=new ViewMap({
        container:"viewDiv",
        map:webmap
    })
///// se agrega el  botton o widgets para tener mas contesto del tiempo de recorrido
    const scalebar = new ScaleBar({
        view: view
      });

      view.ui.add(scalebar, "bottom-left");
/// agregamos el widgets o botton para tener mas informacion  de los simbolos 
      const legend = new Legend ({
        view: view
      });
      view.ui.add(legend, "top-right");