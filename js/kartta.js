//Lisätään kartta.html tiedoston kartta elementtiin kartta ja asetetaan kartalle koordinaatit ja zoom taso.
let kartta = L.map('kartta').setView([60.99711167927537, 25.181358362971743], 7);

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

//Lisätään napille kuuntelija, joka lähettää etsinta funktiolle tiedon hakukentän merkkijonosta.
nappi.addEventListener('click', function () {
    etsinta();
});

hakukentta.addEventListener('focus', function() {
    if(hakukentta.classList.contains("redoutline")){
        hakukentta.classList.remove("redoutline");
    }
})

//Jos painetaan enter-nappia, rekisteröidään se napin painalluksena.
hakukentta.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        nappi.click();
    }
});

/*Lisätään napille eventti, joka lukee minkä maakunnan käyttäjä on kirjoittanut hakukenttään ja sen mukaan, mitä käyttäjä
on kirjoittanut lähetetään tieto oikealle funnktiolle.*/

function etsinta() {

    let haku = hakukentta.value.toLowerCase();

    if(!haku){
        hakukentta.classList.add("redoutline");
        setTimeout(function() { alert("Hakukenttä on tyhjä."); }, 100);
    } else {
        haku = haku.replace("-", "");

        switch (haku) {
            case "uusimaa":
                Uusimaa()
                break;
            case "varsinaissuomi":
                VarsinaisSuomi();
                break;
            case "kymenlaakso":
                Kymenlaakso();
                break;
            default:
                hakukentta.classList.add("redoutline");
                setTimeout(function() { alert("Haulla ei löytynyt mitään."); }, 100);
                break;
        }
    }
}


/*Tehdään kaikille maakunnille funktio, joiden kautta lisätään hakukentässä olevan maakunnan
kaikkien kansallispuistojen sijainnit karttaan markkereiden avulla.*/
function Uusimaa() {

    //Tammisaaren saariston kansallispuisto
    let markkeri1 = L.marker([59.87285355208106, 23.396464902953078])
        .addTo(kartta).bindPopup("<b>Tammisaaren saariston kansallispuisto</b>");

    //Sipoonkorven kansallispuisto
    let markkeri2 = L.marker([60.31272559361341, 25.16118601146589])
        .addTo(kartta).bindPopup("<b>Sipoonkorven kansallispuisto</b>");

    //Nuuksion kansallispuisto
    let markkeri3 = L.marker([60.311962112766174, 24.480393767011005])
        .addTo(kartta).bindPopup("<b>Nuuksion kansallispuisto</b>");

    //Zoomataan karttaa Uudenmaan alueelle
    kartta.setView([60.438155851965675, 24.85039397859702], 7);

    //Poistetaan markkerit, jos käyttäjä hakee jotain muuta.
    nappi.addEventListener('click', function () {
        markkeri1.remove();
        markkeri2.remove();
        markkeri3.remove();
    })
}

function VarsinaisSuomi() {
    //Saaristomeren kansallispuisto
    let markkeri1 = L.marker([59.93440387768849, 21.811790540558118])
        .addTo(kartta).bindPopup("<b>Saaristomeren kansallispuisto</b>");

    //Teijon kansallispuisto
    let markkeri2 = L.marker([60.22244431938928, 22.93590355135117])
        .addTo(kartta).bindPopup("<b>Teijon kansallispuisto</b>");

    //Kurjenrahkan kansallispuisto
    let markkeri3 = L.marker([60.74022702695141, 22.31989534303767])
        .addTo(kartta).bindPopup("<b>Kurjenrahkan kansallispuisto</b>");

    //Zoomataan karttaa Varsinais-Suomen alueelle
    kartta.setView([60.27930643830135, 22.598181697778543], 7);

    //Poistetaan markkerit, jos käyttäjä hakee jotain muuta.
    nappi.addEventListener('click', function () {
        markkeri1.remove();
        markkeri2.remove();
        markkeri3.remove();
    })
}

function Kymenlaakso() {
    //Valkmusan kansallispuisto
    let markkeri1 = L.marker([60.57190505523023, 26.704860335392915]).addTo(kartta).bindPopup("<b>Valkmusan kansallispuisto</b>");

    //Itäsien Suomelahden kansallispuisto
    let markkeri2 = L.marker([60.34859725763926, 27.457257986782444]).addTo(kartta).bindPopup("<b>Itäisen Suomenlahden kansallispuisto</b>");

    //Repoveden kansallispuisto
    let markkeri3 = L.marker([61.185316576818316, 26.89969205647982]).addTo(kartta).bindPopup("<b>Repoveden kansallispuisto</b>");

    //Zoomataan karttaa Kymenlaakson alueelle
    kartta.setView([60.693996777762095, 26.9818739983995], 7);

    //Poistetaan markkerit, jos käyttäjä hakee jotain muuta.
    nappi.addEventListener('click', function () {
        markkeri1.remove();
        markkeri2.remove();
        markkeri3.remove();
    })
}





