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


//Etsitään sivulta <article> elementit.
const artikkeli1 = document.getElementById('article1');
const artikkeli2 = document.getElementById('article2');
const artikkeli3 = document.getElementById('article3');
const artikkeli4 = document.getElementById('article4');




  artikkeli1.innerHTML +=
      `
      <img src= ${kuvataulukko[0].tiedostonimi} alt="kuva">
      
      `;
  artikkeli2.innerHTML +=
    `
      <img src= ${kuvataulukko[1].tiedostonimi}  alt="kuva">
      
      `;
  artikkeli3.innerHTML +=
    `
      <img src= ${kuvataulukko[2].tiedostonimi}  alt="kuva">
      
      `;
  artikkeli4.innerHTML +=
    `
      <img src= ${kuvataulukko[3].tiedostonimi}  alt="kuva">
      
      `;