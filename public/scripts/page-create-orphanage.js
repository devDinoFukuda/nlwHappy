//trabalhando com api do mapa
const map = L.map('mapid').setView([-27.2145, -49.6435], 15);
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
  //popupAnchor: [170,2]
});
/*
//Criando pop overlay:
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240
}).setContent('Lar das meninas <a href="orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg"></a>');


//pop-up para o mapa:
//Obs: não esquecer de modificar a Latitude e Longitude
L.marker([-27.2145, -49.6435], {icon}).addTo(map)
    .bindPopup(popup)
    //.openPopup();

 
L.marker([-27.2145, -49.6435], {icon}).addTo(map)    
*/


//create and add marker
let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remover icon, depois adiciona
  marker && map.removeLayer(marker)

  //add icon tileLayer
  marker = L.marker([lat, lng], {icon})
  .addTo(map)

})

//adicionar campo de fotos

function addPhotoField() {
  //pegar o container de fotos no html
  const container = document.querySelector("#images");
  //e duplica-lo .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //realizar a duplicação da última imagem adicionada
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
  // o -1 é necessário para buscar o array correto pois o array começa pelo indice 0 
  
  //Verificar se o campo está vazio, sendo sim, não add ao container de imagens
  const input = newFieldContainer.children[0]
  
  if(input.value =="") {
    return
  }
  
  //limpar o campo antes de adicionar no container de imagens
  input.value ="";
  //adicionar a img duplicada no container
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
 const span = event.currentTarget;

 const fieldsContainer = document.querySelectorAll(".new-upload");
 if(fieldsContainer.length < 2) {
   //limpar o valor do campo
   span.parentNode.children[0].value = "";
   return
 }
 //deletar o campo
 span.parentNode.remove();
 
}

//troca sim e não no clique
function toggleSelect (event) {
  //pegar o botao clicado

  //retirar se tiver class.active
  document.querySelectorAll('.button-select button')
  .forEach(button => button.classList.remove("active"));

  //colocar a class.active
  const button = event.currentTarget
  button.classList.add("active");

  //atualizar meu input hidden(escondido)
  const input = document.querySelector('[name="open_on_weekends"]')
  
  //verificar sim ou não
  input.value = button.dataset.value;

}
/*
function validate(event) {
  //validar se lat e lng estão preenchidos
  event.preventDefault()
}
*/
