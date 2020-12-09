//Etsitään sivulta main elementti.
const main = document.querySelector('main');

//Ilmoitetaan, löytyykö elementtiä.
if (main != null) {
    console.log("Elementti löytyi!");
} else {
    console.error("Jotain meni pieleen.");
}

addEventListener("load", function() {
    //Käydään taulukko läpi ja lisätään taulukon tiedot html koodiin.
    for(let i = 0; i < kuvataulukko.length; i++) {
        const article = kuvataulukko[i];

        let buttonList = "";
        if (article.buttons) {
            for(let x = 0; x < article.buttons.length; x++) {
                let button = article.buttons[x];
                buttonList +=
                    `
            <button id="${button.id}" class="pointer" style="left: ${button.pos.width}; bottom: ${button.pos.height};" >
            ?
            <span class="tooltiptext">${button.id}</span>
            </button>
            `
            }
        } else {
            wikipediaCaller(article.otsikko, true);
        }

        main.innerHTML +=
            `
          <article>
            <figure class="${article.tiedostonimi}">
                ${buttonList}
            </figure>
            <figcaption id="${article.otsikko}-figcaption">
                <p style="margin: 0; text-align: center"> Klikkaa kuvassa olevaa kysymysmerkkiä saadaksesi tietoa. </p>
            </figcaption>
          </article>
          <hr class="mobile-divide">
           `;
    }

    createImages();

    const buttonList = document.querySelectorAll('button'); //Haetaan kaikki kuvien napit.

    /*
     Luodaan kaikille napeille kuuntelija.
     Jos nappia klikataan, kutsutaan wikipedia artikkelin tekijää, jolle annetaan painetun napin id (haettava otsikko)
     Sitten muilta saman kuvan napeilta poistetaan mahdollinen "active" luokka ja painetulle napille lisätään active luokka.
     Jos nappi, jota painetaan sisältää jo active luokan, se tarkoittaa, että kutsuttava artikkeli on jo olemassa, eikä mitään tarvitse tehdä.
    */

    for (let i = 0; i < buttonList.length; i++) {
        const button = buttonList[i];
        button.addEventListener("click", button => {
            let targetButton = button.target;
            if(!targetButton.classList.contains("active")){
                for(let i = 0; buttonList.length > i; i++){
                    if(buttonList[i].classList.contains("active")){
                        buttonList[i].classList.remove("active");
                    }
                }
                wikipediaCaller(targetButton.id, false);
                targetButton.classList.add("active");
            }
        })
    }
})

/*
 Wikipedia caller funktio, joka hallinnoi wikipedia artikkelin luomisen.
*/
function wikipediaCaller(search, autogen){
    callWikipediaAPI(search).then(response => {
        loadArticle(search, parseResponse(response, search), autogen);
    });
}

/*
 Funktio, joka etsii kohteen, johon wikipedia artikkeli kuuluu laittaa ja luo sen sinne.
*/
function loadArticle(search, content, autogen) {
    //Täytettävä html pohja.
    const template =
        `
        <h2>${search}</h2>
        <div class="figcaption-content">
            ${content}
        </div>
        `;

    //Jos wikipedia artikkelin sisältö ei ole tyhjä, se luodaan elementin sisälle, muuten annetaan virhe.
    if(content){
        //Jos autogen on päällä, oikea elementti estitään suoraan id perusteella ja sen sisälle luodaan artikkeli.
        if(autogen){
            const figcaptionElement = document.querySelector("#"+search+"-figcaption");

            if(!figcaptionElement){
                sendErrorCode("ei löydetty napin parent -elementtiä.");
            }

            figcaptionElement.innerHTML = template;

            /*
            Jos autogen ei ole päällä, eli pyyntö tuli napilta. Etsitään napin ancestor elementti ja etsitään sieltä oikea elementti.
            Liäsksi elementille annetaan id merkiksi siitä, että mikä artikkeli elementtiin on ladattu.
             */
        } else {
            const figcaptionElement = document.querySelector("#"+search).parentElement.parentElement.querySelector("figcaption");

            if(!figcaptionElement){
                sendErrorCode("ei löydetty napin parent -elementtiä.");
            }

            figcaptionElement.id = search + "-figcaption";
            figcaptionElement.innerHTML = template;
        }
    } else {
        console.error("Wikipedia artikkelin lataus ongelma");
    }
}

