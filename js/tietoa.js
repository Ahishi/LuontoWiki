const tietotaulukko = [
  {
    'kuva': 'img/Kalle_tietoja.jpg',
    'tekija': 'Kalle',
  }
];
//Etsitään article ja h2 elementti html-koodista.
const article = document.querySelector('article');
const otsikko = document.querySelector('h2');
//Ilmoitetaan, löytyykö elementtiä.
if (article != null) {
  console.log("Elementti löytyi!");
}else {
  console.log("Jotain meni pieleen.")
}
//Lisätäään sivulle otsikko.
otsikko.innerText += 'Tekijät';
//Käydään taulukko läpi ja sijoitetaan article elementin sisään taulukon tiedot.
for (let i = 0; i < tietotaulukko.length; i++) {
  article.innerHTML +=
      `
      <img class="image" src=${tietotaulukko[i].kuva} alt="tekijä">
      <p>${tietotaulukko[i].tekija}</p>
      `
}