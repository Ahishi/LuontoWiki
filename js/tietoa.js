const audioFileArray = [
  {
    'rec': 'tietoa/Kohtaus1.mp3',
  },
  {
    'rec': 'tietoa/Kohtaus2.mp3',
  },
  {
    'rec': 'tietoa/Kohtaus3.mp3',
  },
  {
    'rec': 'tietoa/Kohtaus4.mp3',
  }
];

//tietoa/Luonto.wiki_mainosvideo_ryhmä6.docx

//Etsitään figure elementti html-koodista.
const audioContainer = document.querySelector('#audio');

//Ilmoitetaan, löytyykö elementtiä.
if (audioContainer) {
  console.log("Elementti löytyi!");
}else {
  console.log("Jotain meni pieleen.")
}

//Käydään taulukko läpi ja sijoitetaan article elementin sisään taulukon tiedot.
for (let i = 0; i < audioFileArray.length; i++) {
  audioContainer.innerHTML +=
      `
      <audio controls>
        <source src=${audioFileArray[i].rec} type="audio/mpeg">
      </audio>
      `
}