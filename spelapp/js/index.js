let whatPageToLoad = 0;
//Tar bort "welcome" när sidan har laddats klart
setTimeout(() => {
  const welcomeDiv = document.querySelector('.spel-welcome-div');
  const welcomeHeader = welcomeDiv.querySelector('h2');

  welcomeHeader.classList.add('welcome-div-hidden');

  setTimeout(() => {
    welcomeDiv.style.display = 'none';
    mainDiv.style.display = 'flex';
    whatPageToLoad = loadNavClicks();
  }, 1500);
}, 500);

switch (whatPageToLoad) {
  case 0:
    loadHomePage();
    break;
  case 1:
    loadInformationPage();
    break;
  case 2:
    loadProfilePage();
    break;
  case 3:
    loadSuspectPage();
    break;
  case 4:
    loadNotesPage();
    break;
  default:
    break;
}

