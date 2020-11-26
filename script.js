var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaG1udGgiLCJhIjoiY2toeHE2MWc1Mjh2cjJycGI3bjQ0ZnB6bSJ9.1RIv_qIwg1HyDjUKQ260OQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaG1udGgiLCJhIjoiY2toeHE2MWc1Mjh2cjJycGI3bjQ0ZnB6bSJ9.1RIv_qIwg1HyDjUKQ260OQ'
}).addTo(mymap);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(mymap);

// L.marker([51.5, -0.09]).addTo(mymap);

var locationIcon = L.icon({
    iconUrl: 'images/icon-location.svg',

    iconSize:     [45, 55], // size of the icon
    iconAnchor:   [26.47, 54], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([51.505, -0.09], {icon: locationIcon}).addTo(mymap);