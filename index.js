    // importamos el modulo map para escoger el mapa que queremos crear
    import Map from "https://js.arcgis.com/4.25/@arcgis/core/Map.js";
    // importamos en modulo de configuracion para conectarnos ala  api
    import esriConfig from "https://js.arcgis.com/4.25/@arcgis/core/config.js";
    // importamos el modulo para visualizar el mapa 
    import MapView from "https://js.arcgis.com/4.25/@arcgis/core/views/MapView.js";
// configuracion de la api
    esriConfig.apiKey = "YOUR_API_KEY";
// tipo de mapa 
    const map = new Map({
      basemap: "streets" // Basemap layer service
    });
// visaulizamos el mapa y ajustamos las cordenadas
    const view = new MapView({
      map: map,
      center:[-82.712174,41.429967], // Longitude, latitude
      zoom: 14, // Zoom level
      container: "viewDiv" // Div element
    });
