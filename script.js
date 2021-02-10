// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaG1udGgiLCJhIjoiY2toeHE2MWc1Mjh2cjJycGI3bjQ0ZnB6bSJ9.1RIv_qIwg1HyDjUKQ260OQ', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'pk.eyJ1IjoiaG1udGgiLCJhIjoiY2toeHE2MWc1Mjh2cjJycGI3bjQ0ZnB6bSJ9.1RIv_qIwg1HyDjUKQ260OQ'
// }).addTo(mymap);

// const url = 'https://geo.ipify.org/api/v1?apiKey=at_DhbBoxvNn6JuKGhovzsWcqvNLrkY3&ipAddress=&domain=crustplay.com';


const mymap = L.map('mapid').setView([0, 0], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var locationIcon = L.icon({
    iconUrl: 'images/icon-location.svg',
    iconSize:     [45, 55], // size of the icon
    iconAnchor:   [26.47, 54], // point of the icon which will correspond to marker's location
});


var ip = '';
var domain = '';
const api_key = 'at_DhbBoxvNn6JuKGhovzsWcqvNLrkY3';
const api_url = 'https://geo.ipify.org/api/v1?';
var url = api_url + 'apiKey=' + api_key + '&ipAddress=' + ip + '&domain=' + domain;

async function myFunction(){
    document.getElementById("demo").style.display = "none"; // Input Alert display reset to none on next click.

    var inputvalue =  document.getElementById('ipAddress').value;

     if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(inputvalue))
      {
        console.log('its an IP address');
        ip = inputvalue;
      } else if(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(inputvalue)) {  
        console.log("its a domain name");
        domain = inputvalue;
      } else {
        // alert("please enter a valid IP address or domain name!");
        document.getElementById("demo").style.display = "block";
        document.getElementById('demo').innerHTML = 'hey! check your input';
        ip = '';
        domain = '';
      }
    
    url = await api_url + 'apiKey=' + api_key + '&ipAddress=' + ip + '&domain=' + domain;
    console.log(url);
    
    getData();
}

// Trigger button on clicking enter
var input = document.getElementById("ipAddress");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
}); 
// _____________________Enter button close

const marker = L.marker([0, 0], {icon: locationIcon}).addTo(mymap);

async function getData() {
    const response = await fetch(url);
    const data =  await response.json();
    const lat = data.location.lat;
    const lon = data.location.lng;

    console.log(data);

    marker.setLatLng([lat, lon]);
    mymap.setView([lat, lon], 4);

    document.getElementById('box1').textContent = data.ip;
    document.getElementById('box2').textContent = data.location.region + ', ' + data.location.country + ' ' + data.location.postalCode;
    document.getElementById('box3').textContent = 'UTC' + data.location.timezone;
    document.getElementById('box4').textContent = data.isp;
}
getData();
