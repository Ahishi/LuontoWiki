//Lista navigaatio objekteista
const navItems = [
    {
        //Esitettävä nimi
        'itemName': 'Etusivu',
        //Napin kohde osoite
        'itemTarget': 'index.html',
        //Napin ikonin polku
        'iconPath': '',
    },
    {
        'itemName': 'Taide',
        'itemTarget': 'taide.html',
        'iconPath': '',
    },
    {
        'itemName': 'Kartta',
        'itemTarget': 'kartta.html',
        'iconPath': '',
    },
    {
        'itemName': 'Tietoa',
        'itemTarget': 'tietoa.html',
        'iconPath': '',
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
                <li class="hide-on-regular"><a class="mobile-nav-icon">Avaa</a></li>
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
    a.textContent = "Sulje";

    //Kootaan elementit järjestykseen
    div.appendChild(a);
    div.appendChild(ul);
    navbar.appendChild(div);

    //Etsitään sulkemis ja avaamisnapit ja luodaaan niille kuuntelijat.
    mobileNavbar = document.querySelector("#mobile-nav");
    navButton = document.querySelectorAll(".mobile-nav-icon");

    if (navButton[0]) {
        navButton[0].addEventListener("click", openNav);
    }

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