//Kuvataulukko
const kuvataulukko = [
  {
    'tiedostonimi': 'img/Jäkälä.jpg',
  },
  {
    'tiedostonimi': 'img/Keltavahvero.jpg',
  },
  {
    'tiedostonimi': 'img/Meri.jpg',
  },
  {
    'tiedostonimi': 'img/Mustikka.jpg',
  },
  {
    'tiedostonimi': 'img/Ruska.jpg',
  },
  {
    'tiedostonimi': 'img/Havunneulaset.jpg',
  },
  {
    'tiedostonimi': 'img/Sammal2.jpg',
  },
];







//Etsitään main tägi html koodista.
let maini = document.querySelector('main');
//Katsotaan, löytyykö main elementtiä.
if (maini != null) {
  console.log("Elementit löytyi!");
}else {
  console.log("Jotain meni pieleen.");
}
//Käydään taulukko läpi ja viedään kuvat taulukosta sivulle.
for (let i = 0; i < kuvataulukko.length; i++) {
  //Jos otsikko ei ole Keltavahvero tai Mustikka lisätään sivulle kuvat ja elementit sivulle normaalisti.
  if (kuvataulukko[i].otsikko !== 'Keltavahvero' && kuvataulukko[i].otsikko !== 'Mustikka') {
    maini.innerHTML +=
        `
      <article>
      <img class="image" src = ${kuvataulukko[i].tiedostonimi} alt = "kuva" >
      </article>
      `;
    /*Jos kuvien otsikkona on Mustikka tai Keltavahvero, Lisätään muuten elementit normaalisti sivulle, mutta laitetaan
    kuvat "rotate" luokkaan, jotta kuvat kääntyvät 90 astetta.*/
  } else {
    maini.innerHTML +=
        `
      <article>
      <img class="rotate" src = ${kuvataulukko[i].tiedostonimi} alt = "kuva" >
      </article>
      `;
  }
}


