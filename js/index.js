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
  //Jos otsikko ei ole Keltavahvero tai Mustikka lisätään sivulle kuvat ja elementit sivulle normaalisti.
  if (kuvataulukko[i].otsikko !== 'Keltavahvero' && kuvataulukko[i].otsikko !== 'Mustikka') {

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
    /*Jos kuvien otsikkona on Mustikka tai Keltavahvero, Lisätään muuten elementit normaalisti sivulle, mutta laitetaan
    kuvat "rotate" luokkaan, jotta kuvat kääntyvät 90 astetta.*/
  } else
    {

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
        <img class="rotate" src=${kuvataulukko[i].tiedostonimi} alt="kuva">
    </figure>
  </article>
  <hr class="mobile-divide">
       `;
  }




}



