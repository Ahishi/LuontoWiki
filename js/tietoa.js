const tietotaulukko = [
  {
    'suunnitelma': 'tietoa/Luonto.wiki_mainosvideo_ryhmä6.docx',
    'aanitys1': 'tietoa/Kohtaus1.mp3',
    'aanitys2': 'tietoa/Kohtaus2.mp3',
    'aanitys3': 'tietoa/Kohtaus3.mp3',
    'aanitys4': 'tietoa/Kohtaus4.mp3',
  },
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
otsikko.innerText += "Mainosvideo"
//Käydään taulukko läpi ja sijoitetaan article elementin sisään taulukon tiedot.
for (let i = 0; i < tietotaulukko.length; i++) {
  article.innerHTML +=
      `
      <iframe width="800" height="500" src="https://www.youtube.com/embed/Cw2F0whq9Oc" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br>
      <br>
      <a href=${tietotaulukko[i].suunnitelma}> Lataa suunnitelma tästä linkistä.</a>
      <h2>Äänitykset</h2>
      <audio controls>
      <source src=${tietotaulukko[i].aanitys1} type="audio/mpeg">
      </audio>
      <audio controls>
      <source src=${tietotaulukko[i].aanitys2} type="audio/mpeg">
      </audio>
      <audio controls>
      <source src=${tietotaulukko[i].aanitys3} type="audio/mpeg">
      </audio>
      <audio controls>
      <source src=${tietotaulukko[i].aanitys4} type="audio/mpeg">
      </audio>
      
      `
}