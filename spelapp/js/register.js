// const regForm = document.getElementById('register-form');

// regForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const usernameDiv = document.getElementById('register-username');
//   const emailDiv = document.getElementById('register-email');
//   const passwordDiv = document.getElementById('register-password');
//   const password2 = document.getElementById('register-password2');

//   const username = usernameDiv.value;
//   const email = emailDiv.value;
//   const password = passwordDiv.value;

//   if(passwordDiv.value != password2.value) {
//     console.log("Passwords do not match");
//     return;
//   }

//   const newRegister = {
//     username,
//     email,
//     password
//   };

//   const regReq = new Request('../../database/admin/register.php', {
//     method: "POST",
//     header: {"Content-Type": "application/json"},
//     body: JSON.stringify(newRegister)
//   });
//   fetch(regReq)
//     .then(response => response.json())
//     .then(response => {
//       console.log(response);
//     })
// })