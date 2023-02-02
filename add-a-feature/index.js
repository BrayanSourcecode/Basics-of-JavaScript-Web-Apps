import Map from"https://js.arcgis.com/4.25/@arcgis/core/Map.js"
import MapView from"https://js.arcgis.com/4.25/@arcgis/core/views/MapView.js"
import esriConfig from "https://js.arcgis.com/4.25/@arcgis/core/config.js"
import FeatureLayer from"https://js.arcgis.com/4.25/@arcgis/core/layers/FeatureLayer.js"


 esriConfig.apiKey="AAPK3a46155e72e141f7a1e526779e26ee9eAjXhDfndw1NljGMOgVuF26eFX3-eeUXZZOyG1ndpeWqpSuegyvOx67wvbav2qGrx";

 "BASE MAP"
 const map=new Map({
    basemap:"arcgis-topographic"
 })

const view=new MapView({
    map:map,
    center:[-118.80500,34.02700],
    zoom:13,
    container:"viewDiv"

})
//agremamos una capa de puntos de referencia en el mapa

// guardamos los puntos que se van a visualizar en el mapa. que estan en esa direccion url que guardamos
const trailheadslayer=new FeatureLayer({
    url:"https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0"
})
map.add(trailheadslayer);

// agregamos una capa de lineas de entidades

//guamos las lineas que se van a visualizar . que estan en la url indicada
const trailsLayer = new FeatureLayer({
    url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0"
  });

  map.add(trailsLayer);

  //agregar capa de entidades de poligonos 

  const parksLayer =new FeatureLayer({
    url:"https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0"
  })

map.add(parksLayer);




