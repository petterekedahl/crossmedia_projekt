const mainDiv = document.querySelector('#main-div');

//Tar bort "welcome" när sidan har laddats klart
setTimeout(() => {
  const welcomeDiv = document.querySelector('.spel-welcome-div');
  const welcomeHeader = welcomeDiv.querySelector('h2');

  welcomeHeader.classList.add('welcome-div-hidden');

  setTimeout(() => {
    welcomeDiv.style.display = 'none';
    mainDiv.style.display = 'flex';
    loadNavClicks();
    loadHomePage();
  }, 1500);
}, 500);

const requestLink = "../../database/api.php";
const userReq = new Request(requestLink + '?userId=' + STATE.userId);
fetch(userReq)
  .then(response => response.json())
  .then(user => {
    try {
      // user = {
      //   "username": user.username,
      //   "suspects": user.suspects,
      //   "notes": user.notes
      // };
      STATE.user = user;
  
      console.log(STATE.user);
    } catch (error) {
      console.log(error);
    }
  })

