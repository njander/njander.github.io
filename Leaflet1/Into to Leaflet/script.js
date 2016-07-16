//these are base maps, each maps can be used in the layers parameter below
var light = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

var dark = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'
});

//Let's add a marker
//maptime = L.marker([39.745352, -105.001942]).bindPopup('<p style="text-align: center">This is where we are! </p> North Building at Auraria Campus');

//this is how we start our map, we inform where to center it and at hat zoom lvl (greater the zoom level closer it is)
//The 'map'refers to the div that will hold the map
var map = L.map('map', {
    center: [9.6088742, -84.1511536],
    zoom: 3,
    layers: [dark]
});

$.getJSON("./data.geojson", function(data) {
    points = L.geoJson(data, {
        onEachFeature: function(feature, layer) {
            layer.bindPopup(feature.properties.Name + '<hr>' + feature.properties.Description );
        }
        }).addTo(map);
       });
