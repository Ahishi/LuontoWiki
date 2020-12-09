//Lista navigaatio objekteista
const navItems = [
    {
        //Esitettävä nimi
        'itemName': 'Etusivu',
        //Napin kohde osoite
        'itemTarget': 'index.html',
    },
    {
        'itemName': 'Taide',
        'itemTarget': 'taide.html',
    },
    {
        'itemName': 'Kartta',
        'itemTarget': 'kartta.html',
    },
    {
        'itemName': 'Tietoa',
        'itemTarget': 'tietoa.html',
    },
]

const mobileLimit = 450; //Ikkunan leveys, jota pienempi määritetään mobiiliksi
const body = document.querySelector("body"); //Etsitään body -elementti
const navbar = document.querySelector("nav"); //Etsitään nav -elementti
let navButton;
let mobileNavbar;

/*
Jos navbar löydettään, sen sisälle renderöidään sopiva navbar.
Jos navbaria ei löydy, tehdään fatal error.
 */

if (navbar) {
    navbarRenderer();
} else {
    throw "Nav -elementtiä ei löydetty!";
}

//Ikkunaan lisätään kuuntelija, joka kuuntelee ikkunan koon vaihtamista.
window.addEventListener('resize', navbarRenderer);

/* -- Funktiot -- */

/*
Funktio päättää renderöidäänkö mobiili vai normaali navbar.
Lisäksi se tarkistaa onko navbar jo renderöity ja onko se oikeanlainen.

Jos navbaria ei ole vielä renderöity: renderöidään uusi oikeanlainen navbar.
Jos navbar on jo renderöity, mutta vaaditaan toisenlainen navbar: vanha puhdistetaan
ja luodaan oikeanlainen-
*/

function navbarRenderer() {
    if (navbar.innerText) {
        if (isMobile() && !navbar.innerHTML.includes('mobile-nav')) {
            clearNav();
            createMobileNavbar();
        } else if (!isMobile() && navbar.innerHTML.includes('mobile-nav')) {
            clearNav();
            createNavbar();
        }
    } else {
        if (isMobile()) {
            createMobileNavbar();
        } else {
            createNavbar();
        }
    }
}

//Palautta kysyttäessä, onko ikkunan koko vähemmän kuin mobiilin raja.

function isMobile() {
    return window.innerWidth <= mobileLimit;
}

// Avaa mobiilin sivu navbarin, jos se on kiinni.
function openNav() {
    if (mobileNavbar.classList.contains("hidden")) {
        mobileNavbar.classList.remove("hidden");
        body.classList.add("no-overflow");
    }
}

// Sulkee mobiilin sivu navbarin, jos se on auki.
function closeNav() {
    mobileNavbar.classList.add("hidden");
    body.classList.remove("no-overflow");
}

// Kutsuttaessa luo normaalin navbarin nav -elementin sisälle
function createNavbar() {
    let ul = document.createElement("ul");
    ul.id = "navbar";
    listRenderer(ul);

    navbar.appendChild(ul);
}

// Kutsuttaessa luo mobiilin navbarin nav -elementin sisään.
function createMobileNavbar() {

    navbar.innerHTML =
        `
            <ul id="navbar">
                <li class="hide-on-regular">
                <a class="mobile-nav-icon">
                
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2_1_" x="0px" y="0px" viewBox="0 0 256 256" xml:space="preserve">
                <path d="M224.1,143.9h-192c-8.7,0-15.8-7.1-15.8-15.8l0,0c0-8.7,7.1-15.8,15.8-15.8h192c8.7,0,15.8,7.1,15.8,15.8l0,0  C239.9,136.8,232.8,143.9,224.1,143.9z"/>
                <path d="M224.1,207.8h-192c-8.7,0-15.8-7.1-15.8-15.8l0,0c0-8.7,7.1-15.8,15.8-15.8h192c8.7,0,15.8,7.1,15.8,15.8l0,0  C239.9,200.7,232.8,207.8,224.1,207.8z"/>
                <path d="M224,80H32c-8.7,0-15.8-7.1-15.8-15.8l0,0c0-8.7,7.1-15.8,15.8-15.8h192c8.7,0,15.8,7.1,15.8,15.8l0,0  C239.8,72.9,232.7,80,224,80z"/>
                </svg>
                
                </a>
                </li>
            </ul>
        `;

    //Luo elementin div.
    let div = document.createElement("div");
    //Annetaan div elementille luokka "hidden"
    div.className = "hidden";
    //Annetaan div elementille id "mobile-nav"
    div.id = "mobile-nav";

    //Luodaan lista elementti sivu navbaria varten.
    let ul = document.createElement("ul");

    //Kutsutaan list Renderer funktiota, joka luo tarvittavat listan osat.
    listRenderer(ul);

    //Luodaan sivu-navbariin sulkemis nappi.
    let a = document.createElement("a");
    a.className = "mobile-nav-icon close-mobile-nav-icon";
    a.innerHTML =
        `
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0px" y="0px" viewBox="0 0 256 256" xml:space="preserve">
            <style type="text/css">
            \t.st0{stroke:#000000;stroke-miterlimit:10;}
            </style>
            <path class="st0" d="M42.7,46.8L42.7,46.8c-5.4,5.4-5.4,14,0,19.4l150.2,150.2c5.4,5.4,14,5.4,19.4,0l0,0c5.4-5.4,5.4-14,0-19.4  L62.1,46.8C56.7,41.5,48,41.5,42.7,46.8z"/>
            <path class="st0" d="M212.3,46.8L212.3,46.8c-5.4-5.4-14-5.4-19.4,0L42.7,197.1c-5.4,5.4-5.4,14,0,19.4l0,0c5.4,5.4,14,5.4,19.4,0  L212.3,66.2C217.6,60.9,217.6,52.2,212.3,46.8z"/>
        </svg>
        `;
    //Kootaan elementit järjestykseen
    div.appendChild(a);
    div.appendChild(ul);
    navbar.appendChild(div);

    //Etsitään sulkemis ja avaamisnapit ja luodaaan niille kuuntelijat.
    mobileNavbar = document.querySelector("#mobile-nav");
    navButton = document.querySelectorAll(".mobile-nav-icon");

    //Lisätään kuuntelija avausnapille.
    if (navButton[0]) {
        navButton[0].addEventListener("click", openNav);
    }

    //Lisätään kuuntelija sulkemisnapille.
    if (navButton[1]) {
        navButton[1].addEventListener("click", closeNav);
    }
}

//Puhdistaa nav -elementin
function clearNav(){
    while (navbar.firstChild) {
        navbar.removeChild(navbar.lastChild);
    }
}

//Luo listan osiot navItems taulukon mukaan.
function listRenderer(ul){
    navItems.forEach((item) => {
        let li = document.createElement("li");
        let a = document.createElement("a");

        a.href = item.itemTarget;
        a.innerText = item.itemName;

        li.appendChild(a);
        ul.appendChild(li);
    })
}

//Kun rullataan ikkunassa, käytetään stick funktiota.
window.onscroll = function() {Stick()};

let sticky = navbar.offsetTop;

//Funktio, joka tekee navbarin tahmeaksi.
function Stick() {
    //Jos navbar ei näkyisi ikkunassa rullauksen jälkeen, navbar liitetään sivun yläreunaan. Muuten se palautetaan paikoilleen.
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}