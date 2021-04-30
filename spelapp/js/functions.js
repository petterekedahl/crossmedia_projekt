const API = '../../database/api.php';

function postToDatabase(method, action, data = STATE.user) {
  const payload = {
    userId: STATE.userId,
    payload: { ...data },
    action
  }
  
  if (method == 'PUT') {
    const putReq = new Request(API, {
      method: 'PUT',
      headers: {'Content-Type': 'Application/json'},
      body: JSON.stringify(payload)
    })
    fetch(putReq)
      .then(response => response.json())
      .then(response => {
        try {
          if(response.guesses > 0 && response.finalGuessId) {
            console.log("Correct guess - you've won!");
          }
          if(response.guesses > 0 && !response.finalGuessId) {
            console.log('Guess was wrong, good bye, or try to hack us ;)');
            // alert('You are up next.')
            const wrongPopUp = document.createElement('div');
            wrongPopUp.classList.add('wrong-answer-pop');

            document.body.append(wrongPopUp);

            
            setTimeout(() => {
              wrongPopUp.textContent = 'Y_'
            }, 384)
            setTimeout(() => {
              wrongPopUp.textContent = 'Yo_'
            }, 768)
            setTimeout(() => {
              wrongPopUp.textContent = 'You_'
            }, 1152)
            setTimeout(() => {
              wrongPopUp.textContent = 'You _'
            }, 1536)
            setTimeout(() => {
              wrongPopUp.textContent = 'You a_'
            }, 1920)
            setTimeout(() => {
              wrongPopUp.textContent = 'You ar_'
            }, 2304)
            setTimeout(() => {
              wrongPopUp.textContent = 'You are_'
            }, 2688)
            setTimeout(() => {
              wrongPopUp.textContent = 'You are _'
            }, 3072)
            setTimeout(() => {
              wrongPopUp.textContent = 'You are n_'
            }, 3456)
            setTimeout(() => {
              wrongPopUp.textContent = 'You are ne_'
            }, 3840)
            setTimeout(() => {
              wrongPopUp.textContent = 'You are nex_'
            }, 4224)
            setTimeout(() => {
              wrongPopUp.textContent = 'You are nez_'
            }, 4408)
            setTimeout(() => {
              wrongPopUp.textContent = 'You are ne_'
            }, 4508)
            setTimeout(() => {
              wrongPopUp.textContent = 'You are nex_'
            }, 4608)
            setTimeout(() => {
              wrongPopUp.textContent = 'You are next_'
            }, 4992)
            setTimeout(() => {
              wrongPopUp.textContent = 'You are next._'
            }, 5376)
            setTimeout(() => {
              wrongPopUp.textContent = 'You are next.'
            }, 5760)
            setTimeout(() => {
              wrongPopUp.textContent = 'You are next._'
            }, 6144)
            setTimeout(() => {
              wrongPopUp.textContent = 'You are next.'
            }, 6528)
            setTimeout(() => {
              wrongPopUp.textContent = 'You are next._'
            }, 6912)

            setTimeout(() => {
              wrongPopUp.parentNode.removeChild(wrongPopUp);
              window.location.replace ('../../database/admin/logout.php');
            }, 7000);
          }
          console.log(response);
        }catch(error) {
          console.log(error);
        }
      })
  }

  if (method == 'POST') {
    const putReq = new Request(API, {
      method: 'POST',
      headers: {'Content-Type': 'Application/json'},
      body: JSON.stringify(payload)
    })
    fetch(putReq)
      .then(response => response.json())
      .then(data => {
        try {
          console.log(data);
        }catch(error) {
          console.log(error);
        }
      })
  }

  if (method == 'DELETE') {
    const putReq = new Request(API, {
      method: 'DELETE',
      headers: {'Content-Type': 'Application/json'},
      body: JSON.stringify(payload)
    })
    fetch(putReq)
      .then(response => response.json())
      .then(response => {
        try {
           console.log('Post deleted')
        }catch(error) {
          console.log(error);
        }
      })
  }
}