function loadNavClicks() {
  const navLinks = document.querySelectorAll('#nav-div > div');

  
  
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
      document.querySelector('.active').classList.remove('active');
      document.querySelector('.active-slidein-div').classList.remove('active-slidein-div');
      navLinks[i].querySelector('.nav-button').classList.add('active');
      navLinks[i].querySelector('.nav-slidein-div').classList.add('active-slidein-div');

      return i;
    })
  }
}
