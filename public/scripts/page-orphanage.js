const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//trabalhando com api do mapa

const map = L.map('mapid', options).setView([lat, lng], 15);
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

//pop-up para o mapa:
//Obs: não esquecer de modificar a Latitude e Longitude
L
.marker([lat, lng], { icon })
.addTo(map)
    
//trabalhando a galeria de imagens

function selectImage (event) {
  const button = event.currentTarget; //significa botão clicad
  console.log('selectImage', event.currentTarget);
  //(button.children)

  //acessar cada button e excluir de cada um no html a class="active"
  const buttons = document.querySelectorAll(".images button");
  console.log(buttons);
  buttons.forEach( (button) => {
    button.classList.remove("active");
  });
  /*
  buttons.forEach(removeActiveClass);

  function removeActiveClass (button) {
    button.classList.remove("active")
  }
*/


//clicando e carregando a imagem no principal:
const image = button.children[0]
const imageContainer = document.querySelector(".orphanage-details > img")

//mudando o container, ou seja, a imagem principal
imageContainer.src = image.src;


//adicionando a class="active" em cada button
button.classList.add("active") // está buscando o button da const no começo da funcão

};  



