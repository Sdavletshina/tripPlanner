
const mapboxgl = require("mapbox-gl");
const {Map} = mapboxgl;
const buildMarker = require('./marker');

console.log(buildMarker, 'buildMarker')
mapboxgl.accessToken =
  'pk.eyJ1IjoiaGlsYXJ5d2VueWkiLCJhIjoiY2ptaTY0MW1qMDFtdDNrbzduNjgzMzlociJ9.Xe1SdmVIO9_VRCMYCecBmQ';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10',
});

const markerHotels= buildMarker('hotels', [-74.009, 40.705]);
markerHotels.addTo(map);
const markerActivities = buildMarker('activities', [-73.899, 40.705]);
markerActivities.addTo(map);
const markerRestaurants= buildMarker('restaurants', [-73.987, 40.705]);
markerRestaurants.addTo(map);
