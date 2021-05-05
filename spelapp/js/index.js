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
      console.log(user.guesses, user.finalGuessId)
      if(user.guesses > 0 && user.finalGuessId) {
        console.log("Correct guess - you've won!");
      }
      if(user.guesses > 0 && !user.finalGuessId) {
        console.log('Guess was wrong, good bye, or try to hack us ;)');
        window.location.replace ('../../database/admin/logout.php');
      }
      // user = {
      //   "username": user.username,
      //   "suspects": user.suspects,
      //   "notes": user.notes
      // };
      STATE.user = user;
      STATE.end = user.time;
  
      console.log(STATE.user);
    } catch (error) {
      console.log(error);
    }
  })

