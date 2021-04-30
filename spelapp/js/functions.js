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
            window.location.replace ('../../database/admin/logout.php');
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