//Lisätään kartta.html tiedoston kartta elementtiin kartta ja asetetaan kartalle koordinaatit ja zoom taso.
let kartta = L.map('kartta').setView([65.103,24.785], 5);
//Lisätään kartalle ominaisuuksia.
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'map data &copy; <a href ="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1Ijoia2FsbGV2byIsImEiOiJja2k4d2VlcmYwOXdjMnlvNXM3bDV4YjY2In0.ywr3bK8_LC89QuZxkzyOUg'
}).addTo(kartta);

//Muuttujat, joita käytetään haku toimintoon.
const nappi = document.getElementById('nappi');
const hakukentta = document.getElementById('hakuteksti');

//Haetaan <section>-elementti kartta.html tiedostosta.
const section = document.querySelector('section');


/*Lisätään napille eventti, joka lukee minkä maakunnan käyttäjä on kirjoittanut hakukenttään ja sen mukaan, mitä käyttäjä
on kirjoittanut lähetetään tieto oikealle funnktiolle.*/
nappi.addEventListener('click', function() {
  if (hakukentta.value === "Uusimaa" ||hakukentta.value === "uusimaa" || hakukentta.value === "UUSIMAA") {
    Uusimaa();
  }
  else if(hakukentta.value === "Varsinais-Suomi" || hakukentta.value === "varsinais-suomi" || hakukentta.value === "varsinais-Suomi" || hakukentta.value === "Varsinais Suomi" || hakukentta.value === "VARSINAIS SUOMI" || hakukentta.value === "varsinais suomi" || hakukentta.value === "varsinaissuomi" || hakukentta.value === "Varsinaissuomi" || hakukentta.value === "varsinaisSuomi") {
    VarsinaisSuomi();
  }
  else if(hakukentta.value === "Kymenlaakso" || hakukentta.value === "kymenlaakso" || hakukentta.value === "KYMENLAAKSO") {
    Kymenlaakso();
  }
  else{
    section.innerHTML +=
        `
        <p>Haulla ei löytynyt mitään. Muista kirjoittaa isoilla alkukirjaimilla.</p>
        `
  }
})


/*Tehdään kaikille maakunnille funktio, joiden kautta lisätään hakukentässä olevan kaupungin
kaikkien kansallispuistojen sijainnit karttaan markkereiden avulla.*/
function Uusimaa(){
  //Tammisaaren saariston kansallispuisto
  L.marker([59.87285355208106, 23.396464902953078])
  .addTo(kartta).bindPopup("<b>Tammisaaren saariston kansallispuisto</b>");

  //Sipoonkorven kansallispuisto
  L.marker([60.31272559361341, 25.16118601146589])
  .addTo(kartta).bindPopup("<b>Sipoonkorven kansallispuisto</b>");

  //Nuuksion kansallispuisto
  L.marker([60.311962112766174, 24.480393767011005])
  .addTo(kartta).bindPopup("<b>Nuuksion kansallispuisto</b>");

  //Zoomataan karttaa Uudenmaan alueelle
  kartta.setView([60.438155851965675, 24.85039397859702], 8);

}

function VarsinaisSuomi() {
  //Saaristomeren kansallispuisto
  L.marker([59.93440387768849, 21.811790540558118])
  .addTo(kartta).bindPopup("<b>Saaristomeren kansallispuisto</b>");

  //Teijon kansallispuisto
  L.marker([60.22244431938928, 22.93590355135117])
  .addTo(kartta).bindPopup("<b>Teijon kansallispuisto</b>");

  //Kurjenrahkan kansallispuisto
  L.marker([60.74022702695141, 22.31989534303767])
  .addTo(kartta).bindPopup("<b>Kurjenrahkan kansallispuisto</b>");

  //Zoomataan karttaa Varsinais-Suomen alueelle
  kartta.setView([60.27930643830135, 22.598181697778543], 8);
}

function Kymenlaakso() {
  //Valkmusan kansallispuisto
  L.marker([60.57190505523023, 26.704860335392915])
  .addTo(kartta).bindPopup("<b>Valkmusan kansallispuisto</b>");

  //Itäsien Suomelahden kansallispuisto
  L.marker([60.34859725763926, 27.457257986782444])
  .addTo(kartta).bindPopup("<b>Itäisen Suomenlahden kansallispuisto</b>");

  //Repoveden kansallispuisto
  L.marker([61.185316576818316, 26.89969205647982])
  .addTo(kartta).bindPopup("<b>Repoveden kansallispuisto</b>");

  //Zoomataan karttaa Kymenlaakson alueelle
  kartta.setView([60.693996777762095, 26.9818739983995], 8);
}


