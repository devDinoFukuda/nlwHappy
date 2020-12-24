//trabalhando com api do mapa
const map = L.map('mapid').setView([-27.2145, -49.6435], 15,);
/*
51.505 latitude do mapa
0.09 longitude do mapa
13 zoom do mapa
*/

//o Mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Criando o Icon:
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58,68],
  iconAnchor: [29,68],
  popupAnchor: [170,2]
});

function addMarker({id, name, lat, lng}) {
  //Criando pop overlay:
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
  }).setContent(`${name}` 
  + `<a href="/orphanage?id=${id}">` 
  + '<img src="/images/arrow-white.svg">'
  + '</a>'
  );


  //pop-up para o mapa:
  //Obs: não esquecer de modificar a Latitude e Longitude
    L.marker([lat, lng], {icon}).addTo(map)
    .bindPopup(popup)
    //.openPopup();
}
const orphanageSpan = document.querySelectorAll('.orphanages span');
orphanageSpan.forEach( span =>{
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng

  }
  addMarker(orphanage)
})


