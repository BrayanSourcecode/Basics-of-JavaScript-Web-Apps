import Map from "https://js.arcgis.com/4.25/@arcgis/core/Map.js";
import esriConfig from "https://js.arcgis.com/4.25/@arcgis/core/config.js";
import ViewMap from "https://js.arcgis.com/4.25/@arcgis/core/views/MapView.js";
import * as locator from "https://js.arcgis.com/4.25/@arcgis/core/rest/locator.js";
import Graphic from "https://js.arcgis.com/4.25/@arcgis/core/Graphic.js";

esriConfig.apiKey =
    "AAPK3a46155e72e141f7a1e526779e26ee9eAjXhDfndw1NljGMOgVuF26eFX3-eeUXZZOyG1ndpeWqpSuegyvOx67wvbav2qGrx";

const map = new Map({
    basemap: "arcgis-navigation",
});

const view = new ViewMap({
    map: map,
    center: [18.9553, 69.6492],
    zoom: 13,
    container: "viewDiv",
});

//creamos una lista con los lugares que queremos encontrar

const places = [
    "Choose a place type...",
    "Parks and Outdoors",
    "Coffee shop",
    "Gas station",
    "Food",
    "Hotel",
];

// primero creamos un selec para despues poder meter los lugares dentro
const select = document.createElement("select");
//despues  le agregamos unas clases al selec
select.setAttribute("class", "esri-widget esri-select");
//despues le agremos unos estilos al selec
select.setAttribute(
    "style",
    "width: 175px; font-family: 'Avenir Next W00'; font-size: 1em ;background-color: blueviolet;"
);

//recorremos el array con foreach y por cada elemento  que exista creamos una opcion y la ponermos en el html
places.forEach(function (p) {
    const option = document.createElement("option");
    option.value = p;
    option.innerHTML = p;
    select.appendChild(option);
});
view.ui.add(select, "top-right");

// haora vamos a localizar las opciones

const locatorUrl =
    "http://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer";

//creamos una funcion para funcar por catgoria
function findPlaces(category, pt) {
    locator
        .addressToLocations(locatorUrl, {
            location: pt,
            categories: [category],
            maxLocations: 25,
            outFields: ["Place_addr", "PlaceName"],
        })
        //limpiar el avistamiento
        //limpieza
        .then(function (results) {
            // bora los puntos que ya allan  en el mapa
            view.popup.close();
            view.graphics.removeAll();

            //haora crearemos un grafico para cada resultado
            results.forEach(function (result) {
                view.graphics.add(
                    new Graphic({
                        attributes: result.attributes, // Data attributes returned
                        geometry: result.location, // Point returned
                        symbol: {
                            type: "simple-marker",
                            color: "#000000",
                            size: "12px",
                            outline: {
                                color: "#ffffff",
                                width: "2px"
                            }
                        },
                        popupTemplate: {
                            title: "{PlaceName}", // Data attribute names
                            content: "{Place_addr}"
                        }

                    }));
            });
        });
}

// buscamos los lugares en el mapa
view.watch("stationary", function (val) {
    if (val) {
        findPlaces(select.value, view.center);
    }
});

//haora agregamos un eventos para escuchar los cambio de la categoria  y buscar dichos lugares y poner el punto
select.addEventListener("change", function (event) {
    findPlaces(event.target.value, view.center);
});
