//Etsitään sivulta main elementti.
const main = document.querySelector('main');

//Ilmoitetaan, löytyykö elementtiä.
if (main != null) {
    console.log("Elementti löytyi!");
} else {
    console.error("Jotain meni pieleen.");
}

//Käydään taulukko läpi ja lisätään taulukon tiedot html koodiin.
for(let i = 0; i < kuvataulukko.length; i++) {
    const article = kuvataulukko[i];

    let buttonList = "";
    if (article.buttons) {
        for(let x = 0; x < article.buttons.length; x++) {
            let button = article.buttons[x];
            buttonList +=
                `
            <button class="pointer" style="left: ${button.pos.width}; bottom: ${button.pos.height};" >
            ?
            <span class="tooltiptext">${button.tooltip}</span>
            </button>
            `
        }
    }

    let image = createImage(article.tiedostonimi, article.otsikko).outerHTML;

    main.innerHTML +=
        `
  <article>
    <figure>
        ${image}
        ${buttonList}
    </figure>
    
    <figcaption>
       <h2>${article.otsikko}</h2>
       <div>
            ${article.content}
       </div>
       <a class="button" href="">Lisätietoja</a>
    </figcaption>
  </article>
  <hr class="mobile-divide">
       `;
}

//Asetetaan kuvien napeille kuuntelijat.
const buttonList = document.querySelectorAll('button');

for (let i = 0; i < buttonList.length; i++) {
  buttonList[i].addEventListener(function() {


  })
}

