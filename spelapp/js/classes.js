class Suspect {
  constructor(data) {
    this.name = data.name,
    this.height = data.height,
    this.alibi = data.alibi,
    this.nationality = data.nationality,
    this.notes = data.notes,
    this.image = data.image,
    this.isStillSuspect = data.isStillSuspect,
    this.id = data.id
  }

  createHTML() {
    console.log(this.height);
    const card = document.createElement('div');
    const imageDiv = document.createElement('div');
    const image = document.createElement('img');
    const nameDiv = document.createElement('div');
    const infoDiv = document.createElement('div');
    const noteDiv = document.createElement('div');

    const spanNoteDiv = document.createElement('span');
    const notes = document.createElement('div');

    // Set image div
    image.setAttribute('src', this.image);
    imageDiv.append(image, nameDiv);
    imageDiv.classList.add('supect-image-div');
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
    notes.setAttribute('contenteditable', true);
    notes.textContent = this.notes;
    spanNoteDiv.textContent = 'Your notes:';
    noteDiv.append(spanNoteDiv, notes);
    noteDiv.classList.add('suspect-note-div');
    spanNoteDiv.classList.add('note-span');
    notes.classList.add('suspect-notes');

    // Fill the card
    card.append(imageDiv, infoDiv, noteDiv);

    card.classList.add('suspect-card');
    card.id = this.id + "suspect";
    if(!this.isStillSuspect)
      card.classList.add('not-a-suspect');

    return card;
  }
}