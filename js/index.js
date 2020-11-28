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
}else {
  console.log("Jotain meni pieleen.")
}
//Käydään taulukko läpi ja lisätään taulukon tiedot html koodiin.
for (let i = 0; i < kuvataulukko.length; i++) {
  maini.innerHTML +=
      `
  <article>
    <h2>${kuvataulukko[i].otsikko}</h2>
    <p>Donec ultrices tincidunt arcu non sodales neque sodales ut. Vitae semper quis lectus nulla. Imperdiet proin fermentum leo. Enim facilisis gravida neque convallis. Quis viverra nibh cras pulvinar mattis nunc sed. </p>
    <p><a class="button" href="">Lisätietoja</a></p>
    <img class="image" src=${kuvataulukko[i].tiedostonimi} alt="kuva">
  </article>
       `;
}



