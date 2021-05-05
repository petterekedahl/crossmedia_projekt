// class ClueSubmitter {
//   constructor(data) {
//     this.content = data.content;
//     this.id = data.id;
//   }

//   createHTML() {
//     const div = document.createElement('div');
//     const title = document.createElement('h2');
//     const clueInformation = document.createElement('p');

//     div.classList.add('investigation-clue-submit-div');
//     title.classList.add('investigation-submit-title');
//     clueInformation.classList.add('investigation-submit-info');
    
//     if (this.id == 0) {
//       clueInformation.textContent = 'Submit your crime scene information here.'
//     } else {
//       clueInformation.textContent = 'Submit your information for the second crime scene here.'
//     }

//     div.append(title, clueInformation);

//     if (this.content) {
//       const clueDiv = document.createElement('div');
//       clueDiv.classList.add('investigation-clue-content');
//       clueDiv.textContent = this.content;

//       clueInformation.textContent = "This is what we found out about the murderer from the information you provided.";

//       div.append(clueDiv);
//     } else {
//       const submitionDiv = document.createElement('div');
//       const button = document.createElement('button');
//       button.classList.add('investigation-submit-button');
//       button.textContent = 'Submit';

//       const input = document.createElement('input');
//       input.classList.add('investigation-submit-input');
//       input.setAttribute('placeholder', 'Enter information');

//       submitionDiv.append(input, button);

//       button.addEventListener('click', () => {
//         if (this.id == 0) {
//           STATE.user.clue1 = input.value;
//         }
//         if (this.id == 1) {
//           STATE.user.clue2 = input.value;
//         }

//         submitionDiv.innerHTML = `<p class="investigation-submition-thankyou">Thank you for your submition, we will post what we find out here whenever we have looked through your submission.</p>`

//         postToDatabase('PUT', 'submit-clue');
//       })

//       div.append(submitionDiv);
//     }

//     return div;
//   }
// }

// for (let i = 0; i < 2; i++) {
//   let newClueSubmit = new ClueSubmitter({
//     content: STATE.user[`clue${i+1}`],
//     id: i,
//   })

//   cluesDiv.append(newClueSubmit.createHTML());
// }

// cluesDiv.classList.add('investigation-clue-div');
// const cluesDiv = document.createElement('div');