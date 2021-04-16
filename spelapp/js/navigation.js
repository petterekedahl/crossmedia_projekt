function loadNavClicks() {
  const navLinks = document.querySelectorAll('#nav-div > div');

  
  
  for (let i = 0; i < navLinks.length; i++) {
    whatPageToLoad = 0;
    navLinks[i].addEventListener('click', () => {
      document.querySelector('.active').classList.remove('active');
      document.querySelector('.active-slidein-div').classList.remove('active-slidein-div');
      navLinks[i].querySelector('.nav-button').classList.add('active');
      navLinks[i].querySelector('.nav-slidein-div').classList.add('active-slidein-div');

      whatPageToLoad = i;

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
    })
  }
}
