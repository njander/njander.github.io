

       var map = L.map('map', {
     		center: [37.166111, -119.449444],
     		zoom: 6
     	});

     	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
     		maxZoom: 18,
     		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
     			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
     			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
     		id: 'mapbox.streets'
     	}).addTo(map);

     	var wmsLayer = L.tileLayer.wms('https://qgiscloud.com/njander/Tmax_01_20180901_4/wms?', {
     		layers: 'Tmax01_8_CA',
     		transpareny: 'true',
     		opacity: 0.5,
     	}).addTo(map);
