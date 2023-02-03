var map = L.map('map', {
  scrollWheelZoom: false
}).setView([51.473361, 11.965619], 100);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([51.473361, 11.965619]).addTo(map);

function onMarkerClick(e) {
    marker.bindPopup('Georg-Cantor-Gymnasium<br>Torstraße 13<br>06110 Halle (Saale)<br><b><a href="https://www.qwant.com/maps/place/osm:way:54033279@Georg-Cantor-Gymnasium">Route</a>').openPopup();
}

map.on('click', onMarkerClick);
