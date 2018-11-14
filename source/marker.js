const { Marker } = require('mapbox-gl');
console.log('marker', Marker);

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords)=>{

  if(!iconURLs.hasOwnProperty(type)){
    type = 'activities';
  }

  const newMarker = document.createElement('div');
  newMarker.style.width = '32px';
  newMarker.style.height = '37px';
  newMarker.style.backgroundImage = `url(${iconURLs[type]})`;
  return new Marker(newMarker).setLngLat(coords);
}

module.exports = buildMarker;
