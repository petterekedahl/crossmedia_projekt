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
      .then(user => {
        try {
          
        }catch(error) {
          console.log(error);
        }
      })
  }
}