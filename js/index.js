//Kuvataulukko
const kuvataulukko = [
  {
    'otsikko': 'Jäkälä',
    'tiedostonimi': 'img/Jäkälä.jpg',
  },
  {
    'otsikko': 'Keltavahvero',
    'tiedostonimi': 'img/Keltavahvero.jpg',
  },
  {
    'otsikko': 'Meri',
    'tiedostonimi': 'img/Meri.jpg',
  },
  {
    'otsikko': 'Mustikka',
    'tiedostonimi': 'img/Mustikka.jpg',
  },
];


//Etsitään sivulta main elementti.
const maini = document.querySelector('main');

//Ilmoitetaan, löytyykö elementtiä.
if (maini != null) {
  console.log("Elementti löytyi!");
} else {
  console.error("Jotain meni pieleen.");
}

//Käydään taulukko läpi ja lisätään taulukon tiedot html koodiin.
for (let i = 0; i < kuvataulukko.length; i++) {
  maini.innerHTML +=
      `
  <article>
    <figcaption>
       <h2>${kuvataulukko[i].otsikko}</h2>
       <div>
            <p>
                Donec ultrices tincidunt arcu non sodales neque sodales ut. Vitae semper quis lectus nulla. Imperdiet proin fermentum leo. Enim facilisis gravida neque convallis. Quis viverra nibh cras pulvinar mattis nunc sed. 
                Donec ultrices tincidunt arcu non sodales neque sodales ut. Vitae semper quis lectus nulla. Imperdiet proin fermentum leo. Enim facilisis gravida neque convallis. Quis viverra nibh cras pulvinar mattis nunc sed.
                Donec ultrices tincidunt arcu non sodales neque sodales ut. Vitae semper quis lectus nulla. Imperdiet proin fermentum leo. Enim facilisis gravida neque convallis. Quis viverra nibh cras pulvinar mattis nunc sed.
                Donec ultrices tincidunt arcu non sodales neque sodales ut. Vitae semper quis lectus nulla. Imperdiet proin fermentum leo. Enim facilisis gravida neque convallis. Quis viverra nibh cras pulvinar mattis nunc sed.
            </p>
            <br>
            <p>
                Donec ultrices tincidunt arcu non sodales neque sodales ut. Vitae semper quis lectus nulla. Imperdiet proin fermentum leo. Enim facilisis gravida neque convallis. Quis viverra nibh cras pulvinar mattis nunc sed. 
                Donec ultrices tincidunt arcu non sodales neque sodales ut. Vitae semper quis lectus nulla. Imperdiet proin fermentum leo. Enim facilisis gravida neque convallis. Quis viverra nibh cras pulvinar mattis nunc sed.
            </p>
       </div>
       <a class="button" href="">Lisätietoja</a>
    </figcaption>
    <figure>
        <img class="image" src=${kuvataulukko[i].tiedostonimi} alt="kuva">
    </figure>
  </article>
  <hr class="mobile-divide">
       `;
}



