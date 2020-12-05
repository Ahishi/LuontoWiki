//Asynkroninen funktio, joka kutsuu wikipedia API:a ja palauttaa sen antaman dumpin tekstinä.
async function callWikipediaAPI(target) {

    /* ****DEBUG**** */
    //console.log("tehdään " + target + " artikkelia...")
    /* ****DEBUG**** */

    //Rakennetaan url API:a varten, johon laitetaan tarvittavat parametrit mm. kohdesivu ja formaatti.
    const URL = "https://fi.wikipedia.org/w/api.php?" +
        new URLSearchParams({
            origin: "*",
            action: "parse",
            page: target,
            format: "json",
        })

    //Yritetään hakea fetch API:lla annetun url:n avulla wikipedia -sivun dumpiksi leikattua sisältöä.
    try {
        const req = await fetch(URL);    //Tehdään pyyntö ja odotetaan jatkamista, kunnes se saadaan.
        const json = await req.json();   //Otetaan pyynnön palauttama tieto ja otetaan siitä json.
        return json.parse.text["*"];     //Muutetaan json tekstiksi ja palautetaan.
    } catch (error) {
        sendErrorCode("Virhe API tiedonhaussa", error) //Tehdään virheilmoitus, jos API prosessissa tapahtuu virhe.
    }
}

/*
 Funktio, joka käsittelee API:sta saatua dataa.
 Annetusta datasta poistetaan kaikki muu paitsi otsikot ja informaatiota sisältävät kappaleet.
*/
function parseResponse(wikiDump) {
    const wikiFragments = document.createRange().createContextualFragment(wikiDump);//Luodaan api vastauksesta html käsiteltävä versio wiki API:n dumpista.
    const allElements = wikiFragments.querySelectorAll(".mw-parser-output *"); //Luodaan Node-lista kaikista wikinodeista parser-output divin sisältä.
    let validElementArray = []; //Taulukko hyväksytyistä kappaleista.

    //Käydään läpi kaikki Node-lista elementit, jolloi ne validoidaan ja muokataan käyttöä varten
    for (let i = 0; i < allElements.length; i++) {
        let element = allElements[i]; //Käytön helppoutta varten Node-listan osa liitetään yksittäiseen node muuttujaan.

        //Hyväksytään jos elementti on paragraph tai title.
        if (element.tagName === "P" || element.tagName === "H2") {
            //Hyväksytään, jos elementillä ei ole atribuutteja tai sillä ei ole lapsena <small>, <br> tai .image luokkaista elementtiä.
            if (!element.hasAttributes() && !element.querySelector("small") && !element.querySelector(".image") && !element.querySelector("br")) {
                const iElementAmount = element.querySelectorAll("i").length;

                //Hyväksytään, jos I elementtien määrä on enemmän kuin 0, mutta ei sama kuin kaikkien elementtien määrä.
                if (!(iElementAmount === element.querySelectorAll("*").length) || !(iElementAmount > 0)) {
                    //Jos elementti on kappale, se käsitellään kappale editorilla, muuten se käsitellään titteli editorilla.
                    if (element.tagName === "P") {
                        //Jos kappaleen tekstin pituus on alle 55 merkkiä, se hylätään.
                        if (element.innerText.length > 55) {
                            validElementArray.push(paragraphEditor(element)); //Paragraph editorin palauttama string lisätään luetteloon.
                        }
                    } else {
                        validElementArray.push(titleEditor(element)); //title editorin palauttama string lisätään luetteloon.
                    }
                }
            }
        }

    }

    return validElementArray.join(""); //Yhdistää ja palauttaa hyväksyttyjen kappaleiden taulukon.
}

//Editori funktio titteleille.
function titleEditor(element) {
    //Jos elementti sisältää edit sectionin se poistetaan.
    if (element.querySelector(".mw-editsection")) {
        element.removeChild(element.querySelector(".mw-editsection"));
    }

    //Tehdään lista <span> elementeistä.
    const spanList = element.querySelectorAll("span");

    for (let i = 0; i < spanList.length; i++) {
        let spanID = spanList[i].id; //Span elementin id on tehdään helpompaan muotoon.
        //Jos span elementin id on "Lähteet", "Aiheesta_muualla" tai "Katso_myös" se poistetaan.
        if (spanID === "Lähteet" || spanID === "Aiheesta_muualla" || spanID === "Katso_myös") {
            element.removeChild(element.querySelector("#" + spanID));
        }
    }

    return element.outerHTML; //Muunnetaan elementti string -muotoon ja palautetaan.
}

//Editori funktio paragrapheille
function paragraphEditor(element) {
    const length = element.querySelectorAll("*").length;
    //Testataan kaikki <p> elementin lapset.
    for (let i = 0; i < length; i++) {
        /*
            Jos elementti sisältää .reference luokan sisältävän osan, osa poistetaan.
            Muuten, jos elementti sisältää linkin, linkki korvataan pelkällä linkin sisältötekstillä.
         */
        if (element.querySelector("sup")) {
            element.removeChild(element.querySelector("sup"));
        } else if (element.querySelector("a")) {
            element.querySelector("a").outerHTML = element.querySelector("a").textContent;
        }
    }

    return element.outerHTML; //Muunnetaan elementti string -muotoon ja palautetaan.
}

//Funktio, jota voidaan kutsua mahdollisen virheen sattuessa ja luoda error.
function sendErrorCode(message, error) {
    if (!error) {
        error = "no error-message";
    }
    throw message + "," + " virhe : " + error + ".";
}