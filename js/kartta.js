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
let markkeri;

/*Lisätään napille eventti, joka lukee minkä maakunnan käyttäjä on kirjoittanut hakukenttään ja sen mukaan, mitä käyttäjä
on kirjoittanut lähetetään tieto oikealle funnktiolle.*/
nappi.addEventListener('click', function() {
  if (hakukentta.value === "Uusimaa") {
    Uusimaa();
  }
})


/*Tehdään kaikille maakunnille funktio, joiden kautta lisätään hakukentässä olevan kaupungin
kaikkien kansallispuistojen sijainnit karttaan markkereiden avulla.*/
function Uusimaa(){
  markkeri = L.marker([59.87285355208106, 23.396464902953078]).addTo(kartta);
  markkeri.bindPopup("<b>Tammisaaren saariston kansallispuisto</b>").openPopup();
  return markkeri;

}



