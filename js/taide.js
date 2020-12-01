//Etsitään main tägi html koodista.
let maini = document.querySelector('main');
//Katsotaan, löytyykö main elementtiä.
if (maini != null) {
    console.log("Elementti löytyi!");
} else {
    console.log("Jotain meni pieleen.");
}

kuvataulukko.forEach(image => {
    maini.innerHTML +=
        `
      <article>
      ${luoKuva(image.tiedostonimi, image.otsikko)}
      </article>
     `;
})


