import Map from "https://js.arcgis.com/4.25/@arcgis/core/Map.js";
// importamos en modulo de configuracion para conectarnos ala  api
import esriConfig from "https://js.arcgis.com/4.25/@arcgis/core/config.js";
// importamos el modulo para visualizar el mapa 
import MapView from "https://js.arcgis.com/4.25/@arcgis/core/views/MapView.js";
// importamos el modulo para dar nuevos estilos es los simbolos
import Graphic from "https://js.arcgis.com/4.25/@arcgis/core/Graphic.js"
//HJDGSHSHAJ
import GraphicsLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/GraphicsLayer.js"
const map= new Map({
    basemap:"arcgis-topographic"
})

const view= new MapView({
    map:map,
    center:[-118.80500,34.02700],
    zoom:13,
    container:"viewDiv"

})

// creamos  las cordenadas del punto que vamos a visualizar 
const point = { //Create a point
    type: "point",
    longitude: -118.80657463861,
    latitude: 34.0005930608889
 };
 // despues definimos  el color del punto  y el estilo
 const simpleMarkerSymbol = {
    type: "simple-marker",
    color: [226, 119, 40],  // Orange
    outline: {
        color: [255, 255, 255], // White
        width: 1
    }
 };
// finalmente creamos el grafico o punto y le pasamos las condenadas
// y los estilos que queremos 
 const pointGraphic = new Graphic({
    geometry: point,
    symbol: simpleMarkerSymbol
 });



 const graphicsLayer = new GraphicsLayer();

 graphicsLayer.add(pointGraphic); // agregamos el punto a la variable 

 map.add(graphicsLayer);// finalmente fizualizamos  el map con los parametros de la variable graphi




 //// se agrego un punto 