    // importamos el modulo map para escoger el mapa que queremos crear
    import Map from "https://js.arcgis.com/4.25/@arcgis/core/Map.js";
    // importamos en modulo de configuracion para conectarnos ala  api
    import esriConfig from "https://js.arcgis.com/4.25/@arcgis/core/config.js";
    // importamos el modulo para visualizar el mapa 
    import MapView from "https://js.arcgis.com/4.25/@arcgis/core/views/MapView.js";
    // importamos el modulo locate para la localizacion 
    import Locate from "https://js.arcgis.com/4.25/@arcgis/core/widgets/Locate.js";
    // importamos el modulo para dar nuevos estilos es los simbolos
    import Graphic from "https://js.arcgis.com/4.25/@arcgis/core/Graphic.js"
    // importamos el modulo para  hacer rastreo  de la ubicacion
    import Track from "https://js.arcgis.com/4.25/@arcgis/core/widgets/Track.js"
// configuracion de la api
    esriConfig.apiKey = "AAPKa786869977e644fcb62ff91efeea437djen3M1VbisXMFAVXlkamy7xxj5X7dWSOnCoC_EqWKF4Xtip89C9Q60T4VVZfbYpj";
// tipo de mapa 
    const map = new Map({
      basemap: "arcgis-navigation" // Basemap layer service // hay varias bases 
    });
// visualizamos el mapa y ajustamos las cordenadas tanbien s epuede hacer en 3d si usamos el  new SceneView
    const view = new MapView({
      map: map,
      center:[-40, 28], // Longitude, latitude
      zoom: 2, // Zoom level
      container: "viewDiv" // Div element
    });

    const locate = new Locate({
      view:view, //añade el boton de localizacion al la vista que especificamos 

      // aca se agrega  configuraciones de la  ubicacion 

       useHeadingEnabled:false, // se pone en falso para que la el mapa no este rotando o girando

        goToOverride: function(view, options) { // es una propiedad que recibe una funcion con dos parametros
          options.target.scale = 1800;  // la vista ala que le vamos hacer el zoom y la option que es el tamaño del zoom
          return view.goTo(options.target); // retornamos la vista con las propiedades
        }

    });

    view.ui.add(locate,"top-right"); // acede alas propiedade s de la clase view  y se agrega los parametros locate y la pocion donde queremos visualizar



    
       const track = new Track({
         view: view, //añade el boton de rastrear al la vista que especificamos 
         useHeadingEnabled: false, // se pone en falso para que la el mapa no este rotando o girando

      graphic: new Graphic({
        symbol: {  // cambia el simbolo actual por el que deseamos
          type: "simple-marker", // simbolo
          size: "24px", // tamaño
          color: "green",//color del simbolo
          outline: { // cambia el estilo de por fuera del simbolo
             color: "red", 
            width: "1.5px" //tamaño
          }
        }
      }),

     });

      view.ui.add(track, "top-left"); // acede alas propiedades de la clase view  y se agrega los parametros track y la pocion donde queremos visualizar el widge