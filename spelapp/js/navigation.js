function loadNavClicks() {
  const navLinks = document.querySelectorAll('#nav-div > div');

  const burgerMenu = document.querySelector('#burger-menu');
  let isActive = false;

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
          isActive = activateMenu(isActive)
          break;
        case 1:
          loadInformationPage();
          isActive = activateMenu(isActive)
          break;
        case 2:
          loadInvestigationPage();
          isActive = activateMenu(isActive)
          break;
        case 3:
          loadSuspectPage();
          isActive = activateMenu(isActive)
          break;
        case 4:
          loadNotesPage();
          isActive = activateMenu(isActive);
          break;
        default:
          break;
      }
    })
  }

  function activateMenu(isActive) {
    const nav = document.querySelector('#navigation');
    const line1 = document.getElementById('burger1');
    const line2 = document.getElementById('burger2');
    const line3 = document.getElementById('burger3');

    if (document.documentElement.clientWidth > 800) return;

    if (nav.style.right == '-100%' || nav.style.right == '') {
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

    return isActive;
  }

  burgerMenu.addEventListener('click', (event) => {
    event.stopPropagation();

    isActive = activateMenu(isActive);

  })

  function timerCreation() {
    const countDown = setInterval(() => {
      // Get the local time of the user and get the remaining time between the two dates
      const localTimeNow = new Date().getTime();
      const timeLeft = STATE.end - localTimeNow;

      // console.log(localTimeNow);
      // console.log(STATE.end);

      // console.log(timeLeft);

      // Calculating days, hours, minutes, seconds to the Event day
      const times = [
        { hours: Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) },
        { minutes: Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60)) },
        { seconds: Math.floor(timeLeft % (1000 * 60) / 1000) },
      ];

      // Checking if times.objects is below 10 or 0 to add an extra 0
      for (let i = 0; i < 3; i += 1) {
        if (times[i].hours < 10) {
          times[i].hours = `0${times[i].hours}`;
        }
        if (times[i].minutes < 10) {
          times[i].minutes = `0${times[i].minutes}`;
        }
        if (times[i].seconds < 10) {
          times[i].seconds = `0${times[i].seconds}`;
        }
        if (times[i].hours === 0) {
          times[i].hours = '00';
        }
        if (times[i].minutes === 0) {
          times[i].minutes = '00';
        }
        if (times[i].seconds === 0) {
          times[i].seconds = '00';
        }
      }

      // Add result to the website
      document.getElementById('timer-hour').textContent = times[0].hours;
      document.getElementById('timer-minute').textContent = times[1].minutes;
      document.getElementById('timer-seconds').textContent = times[2].seconds;
    }, 1000);
  }

  timerCreation()
}

window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth > 799) {
    document.querySelector('#navigation').style.right = '0';
  }
})
