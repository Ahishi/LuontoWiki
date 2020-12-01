//Etsitään sivulta main elementti.
const maini = document.querySelector('main');

//Ilmoitetaan, löytyykö elementtiä.
if (maini != null) {
  console.log("Elementti löytyi!");
} else {
  console.error("Jotain meni pieleen.");
}

//Käydään taulukko läpi ja lisätään taulukon tiedot html koodiin.
kuvataulukko.forEach(article => {

  let buttonList = "";
  if(article.buttons){
    article.buttons.forEach(button => {
      buttonList += `
        <button class="pointer tooltip" style="left: ${button.pos.width}; bottom: ${button.pos.height};" >
        ?
        <span class="tooltiptext">${button.tooltip}</span>
        </button>
      `
    })
  }

  maini.innerHTML +=
      `
  <article>
    <figure>
        ${luoKuva(article.tiedostonimi, article.otsikko)}
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
})



