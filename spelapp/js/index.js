const mainDiv = document.querySelector('#main-div');

//Tar bort "welcome" när sidan har laddats klart
setTimeout(() => {
  const welcomeDiv = document.querySelector('.spel-welcome-div');
  const welcomeHeader = welcomeDiv.querySelector('h2');

  welcomeHeader.classList.add('welcome-div-hidden');

  setTimeout(() => {
    welcomeDiv.style.display = 'none';
    mainDiv.style.display = 'flex';
  }, 1500);
}, 500);


