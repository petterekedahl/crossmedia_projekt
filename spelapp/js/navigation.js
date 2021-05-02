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
          loadInvestigationPage();
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

  const burgerMenu = document.querySelector('#burger-menu');
  const nav = document.querySelector('#navigation');

  let isActive = false;
  burgerMenu.addEventListener('click', (event) => {
    event.stopPropagation();

    const line1 = document.getElementById('burger1');
    const line2 = document.getElementById('burger2');
    const line3 = document.getElementById('burger3');

    if (!isActive) {
      isActive = true;
      line1.style.transform = 'translateY(2vh) rotate(45deg)';
      line3.style.transform = 'translateY(-2vh) rotate(-45deg)';
      line2.style.opacity = '0';
      nav.style.right = '0';
    } else {
      isActive = false;
      line1.style.transform = 'translateY(0) rotate(0deg)';
      line3.style.transform = 'translateY(0) rotate(0deg)';
      line2.style.opacity = '1';
      nav.style.right = '-100%';
    }

  })
}
