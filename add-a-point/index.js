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
    color: "red",  // Orange
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




 // se va agregar un alinea haora en el mapa

 //se crea un objectos  con el type y un paths que es los aparametros de la linea 
 const  Polyline= {
    type:"polyline",
    paths:[
        [-118.821527826096, 34.0139576938577], //Longitude, latitude
        [-118.814893761649, 34.0080602407843], //Longitude, latitude
        [-118.808878330345, 34.0016642996246]  //Longitude, latitude
    ]
 };

 // despues creamos un  el simbolo con el que vamos a graficar la linea
const simplelineSymbol ={
    type:"simple-line",
    color:"red",
    width: 6
};


const polylineGraphic = new Graphic({
    geometry :Polyline,
    symbol: simplelineSymbol
})
// final mente pasamos los paramaetros y mostramos la linea en el mapa 
graphicsLayer.add(polylineGraphic);



// haora vamos a mostrar un polygon e el mapa

 //pasamos el typo de grafico que vamos  a visualizar  y los parametros  donde lo queremos visualizar
const Polygon ={
    type:"polygon",
    rings:[
        [-118.818984489994, 34.0137559967283], //Longitude, latitude
        [-118.806796597377, 34.0215816298725], //Longitude, latitude
        [-118.791432890735, 34.0163883241613], //Longitude, latitude
        [-118.79596686535, 34.008564864635],   //Longitude, latitude
        [-118.808558110679, 34.0035027131376]  //Longitude, latitude
    ]
};

// creamos el tipo de simbolo  y los colores y proiedades 
const simpleFillSymbol={
    type:"simple-fill",
    color: [0,0,255],
    outline:{
        color:[0,0,255],
        with:1
    }
};
// parametros para la ventana emergente
const popupTemplate={
    title:"{Polygono}",
    content:"{polygono de prueba}"
}


const attributes={
Name:"Graphic",
description:"i am polygono "
}

const polygonGraphic = new Graphic({
    geometry:Polygon,
    symbol:simpleFillSymbol,

// parametros de la ventana emergente
    attributes: attributes,
    popupTemplate: popupTemplate

})

// finalmente agregamos el grafico al mapa 
graphicsLayer.add(polygonGraphic);




