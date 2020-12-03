import mapboxgl from "mapbox-gl";
import { createWindyLayer } from "./windy";
import gfs from "./wind-global.json";

import "mapbox-gl/dist/mapbox-gl.css";

import "./styles.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGhlZ2lzZGV2IiwiYSI6ImNqdGQ5dGg5ZzEycDgzeXA4dzZhenp3YzEifQ.54Em__v1ZweuQqIRuD6oww";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v9",
  zoom: 2,
  center: [30.585, -8.754],
});

map.on("load", function () {
  // create windyCustom Layer
  const windyLayer = createWindyLayer("windy-layer", "windyLayerCanvas", {
    data: gfs,
  });

  // add windy Layer
  map.addLayer(windyLayer);
});
