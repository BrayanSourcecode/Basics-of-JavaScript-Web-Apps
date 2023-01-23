  // importamos el modulo map para escoger el mapa que queremos crear
    import Map from "https://js.arcgis.com/4.25/@arcgis/core/Map.js";
  // importamos en modulo de configuracion para conectarnos ala  api
    import esriConfig from "https://js.arcgis.com/4.25/@arcgis/core/config.js";
  // importamos el modulo para visualizar el mapa 
    import MapView from "https://js.arcgis.com/4.25/@arcgis/core/views/MapView.js";
  // configuracion de la api   
    esriConfig.apiKey = "AAPK3a46155e72e141f7a1e526779e26ee9eAjXhDfndw1NljGMOgVuF26eFX3-eeUXZZOyG1ndpeWqpSuegyvOx67wvbav2qGrx";
  // tipo de mapa 
    const map = new Map({
      basemap: "topo-vector" // Basemap layer service // hay varias bases
    });
// visualizamos el mapa y ajustamos las cordenadas tanbien s epuede hacer en 3d si usamos el  new SceneView
    const view = new MapView({
      map: map,
      center:[-118.80500,34.02700], // Longitude, latitude
      zoom: 13, // Zoom level
      container: "viewDiv" // Div element
    });
  

