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
  maini.innerHTML +=
      `
      <img src = ${kuvataulukko[i].tiedostonimi} alt = "kuva" >
      
      `;
}


