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
    figure.className = "figure";
    const image = createImage(item.tiedostonimi, item.otsikko);
    image.id = i.toString();
    figure.appendChild(image);
    article.appendChild(figure);

    const newSlide = document.createElement("div");
    newSlide.className = "slide";
    const slideImage = createImage(item.tiedostonimi, item.otsikko);
    newSlide.appendChild(slideImage);
    modalContent.appendChild(newSlide);
}

const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", function () {
    closeLightbox();
})

const controls = document.querySelectorAll(".control");
controls[0].addEventListener("click", function() {
    nextSlide();
})

controls[1].addEventListener("click", function() {
    prevSlide()
})

const imageList = document.querySelectorAll('figure');
for (i = 0; i < imageList.length; i++) {
    const image = imageList[i];
    image.addEventListener("click", onClick => {
        console.log("klikattu => " + onClick.target.id)
        openLightbox();
        showCurrentSlide(onClick.target.id);
    })
}

// Avaa lightbox
function openLightbox() {
    document.querySelector("#myModal").style.display = "flex";
}

// Sulje lightbox
function closeLightbox() {
    document.querySelector("#myModal").style.display = "none";
    HTML.className = "";
}

let slideIndex = 0;

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

function showSlide() {
    let slides = document.querySelectorAll(".slide");
    let numberText = document.querySelector(".number-text");
    const indexLength = slides.length - 1;
    console.log(slideIndex);

    if (slideIndex > indexLength) {
        slideIndex = 0;
        console.log("yeet");
    }

    if (slideIndex < 0) {
        slideIndex = indexLength;
        console.log("yeet");
    }

    for (let i = 0; i <= indexLength; i++) {
        slides[i].style.display = "none";
    }

    if (slideIndex >= 0) {
        slides[slideIndex].style.display = "block";
        HTML.className = "no-overflow";
        numberText.textContent = (parseInt(slideIndex)+1).toString() + "/" + (indexLength+1).toString();
    }
}

