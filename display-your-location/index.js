    // importamos el modulo map para escoger el mapa que queremos crear
    import Map from "https://js.arcgis.com/4.25/@arcgis/core/Map.js";
    // importamos en modulo de configuracion para conectarnos ala  api
    import esriConfig from "https://js.arcgis.com/4.25/@arcgis/core/config.js";
    // importamos el modulo para visualizar el mapa 
    import MapView from "https://js.arcgis.com/4.25/@arcgis/core/views/MapView.js";
    // importamos el modulo locate para la localizacion 
    import Locate from "https://js.arcgis.com/4.25/@arcgis/core/widgets/Locate.js";
    import Graphic from "https://js.arcgis.com/4.25/@arcgis/core/Graphic.js"
    import Track from "https://js.arcgis.com/4.25/@arcgis/core/widgets/Track.js"
// configuracion de la api
    esriConfig.apiKey = "AAPKa786869977e644fcb62ff91efeea437djen3M1VbisXMFAVXlkamy7xxj5X7dWSOnCoC_EqWKF4Xtip89C9Q60T4VVZfbYpj";
// tipo de mapa 
    const map = new Map({
      basemap: "arcgis-navigation" // Basemap layer service
    });
// visualizamos el mapa y ajustamos las cordenadas
    const view = new MapView({
      map: map,
      center:[-40, 28], // Longitude, latitude
      zoom: 2, // Zoom level
      container: "viewDiv" // Div element
    });

    const locate = new Locate({
      view:view,
      useHeadingEnabled: false,
      goToOverride: function(view, options) {
        options.target.scale = 1500;
        return view.goTo(options.target);
      }
    });
    view.ui.add(locate,"top-left");

    const track = new Track({
      view: view,
      graphic: new Graphic({
        symbol: {
          type: "simple-marker",
          size: "12px",
          color: "green",
          outline: {
            color: "#efefef",
            width: "1.5px"
          }
        }
      }),
      useHeadingEnabled: false
    });
    view.ui.add(track, "top-left");