//Etsitään kartta elementti kartta.html tiedostosta ja lisätään siihen elementtiin kartta. Kartalle asetetaan koordinaatit ja zoom taso.
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

