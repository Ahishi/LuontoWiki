const article = document.querySelector('article');
const modalContent = document.querySelector(".modal-content");
const HTML = document.querySelector("html");

//Ilmoitetaan, löytyykö article -elementtiä.
if (!article) {
    throw ("Article -elementtiä ei löydetty!");
}

//Käydään taulukko läpi ja lisätään taulukon tiedot html koodiin.
for (let i = 0; i < kuvataulukko.length; i++) {
    const item = kuvataulukko[i];

    const figure = document.createElement("figure");
    figure.className = "figure " + item.tiedostonimi;
    article.appendChild(figure);

    const newSlide = document.createElement("div");
    newSlide.className = "slide";
    modalContent.appendChild(newSlide);
}

createImages(); //Luodaan kuvat (kuvaluoja.js)

//Sulkemisnappi on elementti, jolla on .close luokka ja lisätään kuuntelija, jota klikattaessa suljetaan lightbox.
const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", function () {
    closeLightbox();
})

//Etsitään ja lisätään kuuntelija ohjaimelle, joka klikattaessa antaa seuraavan kuvan.
const controls = document.querySelectorAll(".control");
controls[0].addEventListener("click", function() {
    nextSlide();
})

//Etsitään ja lisätään kuuntelija ohjaimelle, joka klikattaessa antaa edellisen kuvan.
controls[1].addEventListener("click", function() {
    prevSlide();
})

//Etsitään kaikki kuvakehykset.
const imageList = document.querySelectorAll('figure');

//Jokaista kuvakehystä kohden, lisätään kuuntelija, jota klikattaessa avataan kuvan lightbox ja ilmoitetaan consoleen.
for (let i = 0; i < imageList.length; i++) {
    const image = imageList[i];
    image.addEventListener("click", onClick => {
        console.log("klikattu => " + onClick.target.id)
        openLightbox();
        showCurrentSlide(onClick.target.id);
    })
}

// Avaa lightbox funktio
function openLightbox() {
    document.querySelector("#lightbox").style.display = "flex";
}

// Sulje lightbox funktio
function closeLightbox() {
    document.querySelector("#lightbox").style.display = "none";
    HTML.className = "";
}

let slideIndex = 0; //Sliden indeksi.

//Funktio, joka näyttää annetun sliden.
function showCurrentSlide(n){
    slideIndex = n;
    showSlide()
}

// näytä seuraava kuva
function nextSlide() {
    slideIndex++;
    showSlide();
}

// näytä edellinen kuva
function prevSlide(){
    slideIndex--;
    showSlide();
}

// Funktio, joka näyttää sliden
function showSlide() {
    let slides = document.querySelectorAll(".slide"); //Tehdään lista kaikista slideista.
    let numberText = document.querySelector(".number-text"); //Haetaan kuvan sijaintia ilmaiseva teksti.
    const indexLength = slides.length - 1; //Sliden määrä indeksinä.

    //Jos aikaisemmin annettu sliden indeksi on suurempi, kuin maksimi määrä. Palataan listan alkuun.
    if (slideIndex > indexLength) {
        slideIndex = 0;
    }

    //Jos halutun sliden indeksi on pienempi, kuin 0. Mennään listan loppuun.
    if (slideIndex < 0) {
        slideIndex = indexLength;
    }

    //Jokaista sliden elementtiä kohden, piilotetaan slide.
    for (let i = 0; i <= indexLength; i++) {
        slides[i].style.display = "none";
    }

    //Jos sliden indeksi on 0 tai suurempi (hyväksyttävä arvo)
    if (slideIndex >= 0) {
        createSlideImage(slideIndex, getSizeClass(window.innerWidth)); //Luodaan kuva slidelle. (kuvaluoja.js)
        slides[slideIndex].style.display = "block"; //Näytetään slide
        HTML.className = "no-overflow"; //Tehdään, että sivulla ei ole rullausmahdollisuutta, koska lightbox on kokoruudulla.
        numberText.textContent = (parseInt(slideIndex)+1).toString() + "/" + (indexLength+1).toString(); //Pidetään huolta kuvan sijainnin listalla ilmoittamisesta.
    }
}

