/* -- Yleiset asiat -- */

//Lista kaikista valmiista kuvakoista. Tämä helpottaa kuvakoiden välillä liikkumista.
const sizeSourceList = [
    {size : 512},
    {size : 1024},
    {size : 1600},
    {size : 2048},
    {size : 4096},
    {size : 8000},
];

//Funktio, joka hakee annetun koon kokoluokan suhteessa sizeSourceList:iin.

function getSizeClass(size){
    if(size < 512){
        return 0;
    } else if(size < 1024) {
        return 1;
    } else if(size < 2048) {
        return 3;
    } else if(size < 4096) {
        return 4;
    } else {
        return 5;
    }
}

/* -- Yleiset asiat -- */

/* -- Ikkunan koon muuttaminen -- */

window.addEventListener("resize", onResize); //Jos ikkunan koko muuttuu, kutsutaan funktio onResize;

function onResize(){
    const previousSize = parseInt(document.getElementsByClassName(kuvataulukko[0].tiedostonimi)[0].id); //Haetaan 1. kuvakehyksen tallennettu koko, koska kaikki kuvakehykset ovat saman kokoisia.
    const currentSize = sizeSourceList[getSizeClass(document.getElementsByClassName(kuvataulukko[0].tiedostonimi)[0].offsetWidth)].size; //Haetaan

    /*
     Jos Edellinen koko on pienempi, kuin nykyinen koko, ladataan isompi kuva. Kuvia ei kannata pienentää, jos ne on jo ladattu isompana.
     Jos halutaan vaihtaa, että koko vaihdetaan aina vaihda !==.
    */
    if(currentSize > previousSize){
        //Uudelleen luodaan kuvat oikean kokoisina.
        for(let i = 0; i < kuvataulukko.length; i++){
            createImage(i);
        }
    }

    //Jos löydetään active luokka, eli lightbox sisältää kuvan.
    if(document.getElementsByClassName("active").length > 0){
        const previousWindowSize = document.getElementsByClassName("active")[0].parentElement.id; //Haetaan ikkunan edellinen koko.
        const currentWindowSize = sizeSourceList[getSizeClass(window.innerWidth)].size.toString() //Haetaan nykyinen koko.

        /*
         Jos Edellinen koko on pienempi, kuin nykyinen koko, ladataan isompi kuva. Kuvia ei kannata pienentää, jos ne on jo ladattu isompana.
         Jos halutaan vaihtaa, että koko vaihdetaan aina vaihda !==.
        */
        if(previousWindowSize > currentWindowSize){
            const activeSlideIndex = function (){
                //Etsitään auki olevan kuvan slide.
                for(let i = 0; i < slides.length; i++){
                    if(slides[i].id) {
                        return i;
                    }
                }
            }
            document.getElementsByClassName("active")[0].parentElement.id //Etsitään aktiivisen sliden ladattu koko.
            createSlideImage(activeSlideIndex(), getSizeClass(window.innerWidth)) //Luodaan uusi lightbox kuva.
        }
    }
}

/* -- Ikkunan koon muuttaminen -- */

/* -- Normaalien kuvien luonti -- */

//Funktio, joka luo normaalit kuvat sivulle kuvataulukon mukaan.
function createImages() {
    for(let i = 0; i < kuvataulukko.length; i++){
        createImage(i);
    }
}

//Luodaan normaali kuva.
function createImage(i){
    try {
        const imageContainer = document.getElementsByClassName(kuvataulukko[i].tiedostonimi)[0]; //Haetaan elementti, johon kuva luodaan.
        const size = imageContainer.offsetWidth; //Haetaan elementin leveys, johon kuva luodaan. Käytetään kuvan koon päättämiseen.

        let image = new Image(); //Luodaan uusi kuva objekti.
        let sizeClass = getSizeClass(size); //Kysytään kuvan tarvittava kokoluokka kuvan containerin leveyden perusteella.

        imageContainer.id = sizeSourceList[sizeClass].size; //Laitetaan merkiksi kuvan koko.

        image.id = i; //Kuvalle laitetaan järjestysluku id:ksi.
        image.src =  "img/" + sizeSourceList[sizeClass].size + "x/" + kuvataulukko[i].tiedostonimi; //Kootaan kuvan osoite halutun kuvan koon perusteella.
        image.className = "image"; //Annetaan kuvalle luokka image.
        image.alt = kuvataulukko[i].otsikko + " -kuva"; //Annetaan kuvalle alt -arvo.

        //Etsitään, onko kuva jo olemassa (annetun järjestysluvun perusteella).
        if(document.getElementById(i)){
            //Etsitään vanha kuva
            let oldImage = document.getElementById(i);
            //Korvataan kuva uudella
            oldImage.parentNode.replaceChild(image, oldImage);
        } else {
            imageContainer.appendChild(image);
        }
    } catch (error) {
        console.error("Virhe kuvien luonnissa : " + error)
    }
}

/* -- Normaalien kuvien luonti -- */

/* -- Slide -kuvien luonti -- */

const slides = document.getElementsByClassName("slide"); //Haetaan slidet.

function createSlideImage(i, sizeClass){

    //Jokaista slide elementtiä kohti, niistä poistetaan kuvat ja id:t.
    for(let i = 0; i < slides.length; i++){
        slides[i].removeAttribute("id"); //Poistetaan id
        const oldImg = slides[i].getElementsByTagName("IMG")[0]; //Etsitään vanha kuva
        //Jos vanha kuva on olemassa, se poistetaan.
        if(oldImg){
            if(!oldImg.parentElement.id){
                oldImg.parentNode.removeChild(oldImg);
            }
        }
    }

    const imageContainer = slides[i]; //kuvan kehys on käsiteltävä slide.

    let image = new Image(); //Luodaan uusi kuva

    image.id = i + "-slide"; //Kuvan id on (järjestysluku)-slide.
    image.src =  "img/" + sizeSourceList[sizeClass].size + "x/" + kuvataulukko[i].tiedostonimi; //Luodaan kuvalle polku.
    image.className = "image active"; //Laitetaan kuvalle luokat image ja active.
    image.alt = kuvataulukko[i].otsikko + " -slide"; //Laitetaan kuvalle alt -arvo

    imageContainer.appendChild(image); //Lisätään kuva kehykseensä.
    imageContainer.id = sizeSourceList[getSizeClass(window.innerWidth)].size; //Kehyksen id:ksi laitetaan kuvan koko muistiin.

    //Jos kuvan latauksessa tapahtuu virhe, eli kuvasta ei löydy tarpeeksi suurta versiota.
    image.onerror = function () {
        console.warn("Näin suurta kuvakokoa ei löydetty, noudetaan alempi kuvakoko."); //Huomautetaan, että virhe käsitellään.
        //Jos kuvan kokoluokka on enemmän, kuin -1 (olisi mahdoton), pienennetään kuvan kokoluokkaa ja luodaan uusi kuva.
        if(sizeClass > -1){
            sizeClass--;
            createSlideImage(i, sizeClass);
        } else {
            throw("Virhe kuvan koon saannissa.");
        }
    }
}

/* -- Slide -kuvien luonti -- */