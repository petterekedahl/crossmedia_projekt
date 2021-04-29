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
    imageDiv.append(image);
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

    infoDiv.append(nameDiv, ageDiv, heightDiv, alibiDiv, nationalityDiv);
    infoDiv.classList.add('suspect-info-div');

    // front card buttons
    notesButton.textContent = 'Your notes:';
    notesButton.id = this.id + "suspect-note-button";

    noteDiv.append(notesButton, noSuspectButton);
    notesButton.classList.add('notes-button');
    noSuspectButton.classList.add(`no-suspect-button`);
    noSuspectButton.textContent = 'No interest';

    noteDiv.classList.add('suspect-card-front-div');

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

    if(!this.isStillSuspect) {
      noSuspectDiv.classList.add('suspect-is-no-suspect');
      const addSuspect = document.createElement('button');
      addSuspect.classList.add('add-suspect-button');
      addSuspect.textContent = 'Add suspect';
      noSuspectDiv.append(addSuspect);
      STATE.user.suspects.forEach(suspect => { 
        if (this.id == suspect.id) {
          addSuspect.addEventListener('click', () => {
            suspect.isStillSuspect = true;
            noSuspectDiv.classList.toggle('suspect-is-no-suspect');
            noSuspectDiv.innerHTML = '';
            postToDatabase('PUT', 'suspect change', suspect);
          })
        }
      })
    }

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
          postToDatabase('PUT', 'suspect change', suspect);
        }
      })
    })

    noSuspectButton.addEventListener('click', () => {
      STATE.user.suspects.forEach(suspect => {
        if (this.id == suspect.id) {
          suspect.isStillSuspect = false;
          noSuspectDiv.classList.toggle('suspect-is-no-suspect');

          const addSuspect = document.createElement('button');
          addSuspect.classList.add('add-suspect-button');
          addSuspect.textContent = 'Add suspect';
          setTimeout(() => {
            noSuspectDiv.append(addSuspect);
            addSuspect.addEventListener('click', () => {
              suspect.isStillSuspect = true;
              noSuspectDiv.classList.toggle('suspect-is-no-suspect');
              noSuspectDiv.innerHTML = '';
              postToDatabase('PUT', 'suspect change', suspect);
            })
          }, 500);
          postToDatabase('PUT', 'suspect change', suspect);
        }
      })
    })

    return card;
  }
}

class Notes {
  constructor(data) {
    this.notes = data.notes,
    this.title = data.title
    this.date = data.date
    this.id = data.id;
  }

  createHTML() {
    const note = document.createElement('div');
    const noteContainer = document.createElement('div');
    const noteInfoDiv = document.createElement('div');
    const noteTitle = document.createElement('div');
    const noteDate = document.createElement('div');

    note.classList.add('note-container-div');
    noteContainer.classList.add('notes');
    noteInfoDiv.classList.add('note-info-div');
    noteTitle.classList.add('note-title');
    noteDate.classList.add('note-date');

    noteInfoDiv.append(noteTitle, noteDate);
    note.append(noteInfoDiv, noteContainer);

    noteTitle.textContent = this.title;
    noteDate.textContent = this.date;
    noteContainer.textContent = this.notes;

    let isNoteOpen = false;

    note.addEventListener('click', (event) => {
      event.stopPropagation();
      note.classList.toggle('note-container-active');
      noteContainer.addEventListener('click', (event) => {
        event.stopPropagation();
      })
      noteTitle.addEventListener('click', (event) => {
        event.stopPropagation();
      })

      let notesButtonDiv = document.createElement('div');
      const noteDeleteButt = document.createElement('button');
      const noteSaveButt = document.createElement('button');
      const noteCancelButt = document.createElement('button');

      noteDeleteButt.textContent = 'Delete';
      noteCancelButt.textContent = 'Cancel';
      noteSaveButt.textContent = 'Save';
      
      if (!isNoteOpen) {
        noteTitle.setAttribute("contenteditable", true);
        noteContainer.setAttribute("contenteditable", true);
        notesButtonDiv.append(noteDeleteButt, noteSaveButt, noteCancelButt);
        note.append(notesButtonDiv);
        isNoteOpen = true;
      } else {
        notesButtonDiv = document.querySelector('.notes-active-buttons');
        noteTitle.setAttribute("contenteditable", false);
        noteContainer.setAttribute("contenteditable", false);
        note.removeChild(notesButtonDiv);
        isNoteOpen = false;
      }
  
      noteDeleteButt.classList.add('notes-delete-button');
      noteSaveButt.classList.add('notes-save-button');
      notesButtonDiv.classList.toggle('notes-active-buttons');
      noteContainer.classList.toggle('notes-active');
      noteTitle.classList.toggle('note-title-active');

      noteDeleteButt.addEventListener('click', (event) => {
        event.stopPropagation();

        STATE.user.notes.map((note, index) => {
          if (this.id == note.id) {
            postToDatabase('DELETE', 'delete note', note);
            STATE.user.notes.splice(index, 1);
          }
        })
        note.innerHTML = '';

        const allNotesContainer = document.querySelector('#note-container');
        noteContainer.classList.toggle('notes-active');
        allNotesContainer.removeChild(note);
      });

      noteSaveButt.addEventListener('click', (event) => {
        event.stopPropagation();

        STATE.user.notes.forEach(note => {
          if (this.id == note.id) {
            note.notes = noteContainer.textContent;
            note.title = noteTitle.textContent;

            noteTitle.removeAttribute("contenteditable", false);
            noteContainer.setAttribute("contenteditable", false);
            postToDatabase('PUT', 'save your notes', note);
          }
        })
        noteContainer.classList.toggle('notes-active');
        noteTitle.classList.toggle('note-title-active');

        notesButtonDiv = document.querySelector('.notes-active-buttons');
        noteTitle.setAttribute("contenteditable", false);
        noteContainer.setAttribute("contenteditable", false);
        note.removeChild(notesButtonDiv);
        isNoteOpen = false;
      });
    });

    return note;
  }
}

class InterrogationRecord {
  constructor(data) {
    this.src = data.src,
    this.date = data.date,
    this.name = data.name
  }

  createHTML() {
    const interContainer = document.createElement('div');
    const recordContainer = document.createElement('div');

    //Header
    const upper = document.createElement('h2');
    const lower = document.createElement('div');

    const seeMoreButton = document.createElement('button');
    seeMoreButton.textContent = 'Click to see more.';
    seeMoreButton.classList.add('see-more-interrogation');

    upper.innerHTML =`
      Interrogation record - <span>${this.name}</span>
    `;
    lower.innerHTML =`
      Published: <span>${this.date}</span>.
    `;
    lower.append(seeMoreButton);

    const embedPdf = document.createElement('embed');
    embedPdf.setAttribute('type', 'application/pdf');
    embedPdf.setAttribute('src', this.src);
    embedPdf.setAttribute('height', '0px');
    embedPdf.setAttribute('width', '100%');

    recordContainer.append(upper, lower, embedPdf);

    seeMoreButton.addEventListener('click', (event) => {
      event.stopPropagation();

      if (seeMoreButton.className.includes('seeMore-active')) {
        seeMoreButton.classList.remove('seeMore-active');
        seeMoreButton.textContent = 'Click to see more.';

        embedPdf.style.height = '0px';

        embedPdf.classList.remove('pdf-showing');
      } else {
        const otherEmbedPdf = document.querySelector('.pdf-showing');
        const otherButton = document.querySelector('.seeMore-active');
        if (otherEmbedPdf && otherButton) {
          otherEmbedPdf.style.height = '0px';
          otherEmbedPdf.classList.remove('pdf-showing');

          otherButton.textContent = 'Click to see more.';
          otherButton.classList.remove('seeMore-active');
        }
        
        seeMoreButton.classList.add('seeMore-active');
        seeMoreButton.textContent = 'Close preview.';

        embedPdf.style.height = '500px';

        embedPdf.classList.add('pdf-showing');
      }
    })

    interContainer.append(recordContainer);
    return interContainer;
  }
}
