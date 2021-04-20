class Suspect {
  constructor(data) {
    this.name = data.name,
    this.height = data.height,
    this.alibi = data.alibi,
    this.nationality = data.nationality,
    this.notes = data.notes,
    this.image = data.image,
    this.isStillSuspect = data.isStillSuspect,
    this.id = data.id,
    this.age = data.age
  }

  createHTML() {
    const noSuspectDiv = document.createElement('div');
    const card = document.createElement('div');
    const cardInner = document.createElement('div');
    const cardFront = document.createElement('div');
    const cardBack = document.createElement('div');
    const imageDiv = document.createElement('div');
    const image = document.createElement('img');
    const nameDiv = document.createElement('div');
    const infoDiv = document.createElement('div');
    const noteDiv = document.createElement('div');

    const notesButton = document.createElement('button');
    const noSuspectButton = document.createElement('button');

    noSuspectDiv.classList.add('suspect-is-suspect');

    // Set image div
    image.setAttribute('src', this.image);
    nameDiv.textContent = this.name;
    imageDiv.append(image, nameDiv);
    imageDiv.classList.add('suspect-image-div');
    nameDiv.classList.add('suspect-name');
    image.classList.add('suspect-image');

    // Set info div
    // set age
    const ageDiv = document.createElement('div');
    const ageSpan = document.createElement('span');
    const ageP = document.createElement('p');
    ageSpan.textContent = 'Age: ';
    ageP.textContent = this.age;
    ageDiv.append(ageSpan, ageP);

    ageDiv.classList.add('age-div');
    ageSpan.classList.add('age-span');
    ageP.classList.add('age-p');

    // set height
    const heightDiv = document.createElement('div');
    const heightSpan = document.createElement('span');
    const heightP = document.createElement('p');
    heightSpan.textContent = 'Height: ';
    heightP.textContent = this.height;
    heightDiv.append(heightSpan, heightP);

    heightDiv.classList.add('height-div');
    heightSpan.classList.add('height-span');
    heightP.classList.add('height-p');

    //set alibi
    const alibiDiv = document.createElement('div');
    const alibiSpan = document.createElement('span');
    const alibiP = document.createElement('p');
    alibiSpan.textContent = 'Alibi: ';
    alibiP.textContent = this.alibi;
    alibiDiv.append(alibiSpan, alibiP);

    alibiDiv.classList.add('alibi-div');
    alibiSpan.classList.add('alibi-span');
    alibiP.classList.add('alibi-p');

    // set nationality
    const nationalityDiv = document.createElement('div');
    const nationalitySpan = document.createElement('span');
    const nationalityP = document.createElement('p');
    nationalitySpan.textContent = 'Nationality: ';
    nationalityP.textContent = this.nationality;
    nationalityDiv.append(nationalitySpan, nationalityP);

    nationalityDiv.classList.add('natio-div');
    nationalitySpan.classList.add('natio-span');
    nationalityP.classList.add('natio-p');

    infoDiv.append(ageDiv, heightDiv, alibiDiv, nationalityDiv);
    infoDiv.classList.add('suspect-info-div');

    // Notes
    notesButton.textContent = 'Your notes:';
    notesButton.id = this.id + "suspect-note-button";

    noteDiv.append(notesButton, noSuspectButton);
    notesButton.classList.add('notes-button');
    noSuspectButton.classList.add(`no-suspect-button`);
    noSuspectButton.textContent = 'No interest';

    // Fill the cardFront
    cardFront.append(imageDiv, infoDiv, noteDiv);

    //Fill card back
    const yourNotes = document.createElement('div');
    const notesTitle = document.createElement('h3');
    const doneButton = document.createElement('button');

    notesTitle.textContent = 'Your Notes';
    yourNotes.setAttribute('contenteditable', true);
    doneButton.textContent = 'Done';

    cardBack.append(notesTitle, yourNotes, doneButton);

    cardFront.classList.add('suspect-card-front');
    cardFront.id = this.id + "suspect";
    if(!this.isStillSuspect)
      noSuspectDiv.classList.add('suspect-is-no-suspect');

    cardBack.classList.add('suspect-card-back');
    cardInner.classList.add('suspect-card-inner');
    card.classList.add('suspect-card');
    
    cardInner.append(cardFront, cardBack);
    card.append(noSuspectDiv, cardInner);

    notesButton.addEventListener('click', () => {
      cardInner.style.transform = 'rotateY(-180deg)';
    })

    doneButton.addEventListener('click', () => {
      cardInner.style.transform = 'rotateY(0deg)';

      STATE.user.suspects.forEach(suspect => {
        if (this.id == suspect.id) {
          suspect.notes = yourNotes.textContent;
          // postToDatabase();
        }
      })
    })

    noSuspectButton.addEventListener('click', () => {
      STATE.user.suspects.forEach(suspect => {
        if (this.id == suspect.id) {
          suspect.isStillSuspect != suspect.isStillSuspect;
          noSuspectDiv.classList.toggle('suspect-is-no-suspect');

          const addSuspect = document.createElement('button');
          addSuspect.classList.add('add-suspect-button');
          addSuspect.textContent = 'Add suspect';
          setTimeout(() => {
            noSuspectDiv.append(addSuspect);
            addSuspect.addEventListener('click', () => {
              suspect.isStillSuspect != suspect.isStillSuspect;
              noSuspectDiv.classList.toggle('suspect-is-no-suspect');
              noSuspectDiv.innerHTML = '';
              // postToDatabase();
            })
          }, 500);
          // postToDatabase();
        }
      })
    })

    return card;
  }
}