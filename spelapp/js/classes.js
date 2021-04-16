class Suspect {
  constructor(data) {
    this.name = data.name,
    this.height = data.height,
    this.alibi = data.alibi,
    this.nationality = data.nationality,
    this.notes = data.notes,
    this.image = data.image
  }

  createHTML() {
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

    // Set info div
    // set age
    const ageDiv = document.createElement('div');
    const ageSpan = document.createElement('span');
    const ageP = document.createElement('p');
    ageSpan.textContent = 'Age: ';
    ageP.textContent = this.age;
    ageDiv.append(ageSpan, ageP);

    // set height
    const heightDiv = document.createElement('div');
    const heightSpan = document.createElement('span');
    const heightP = document.createElement('p');
    heightSpan.textContent = 'Height: ';
    heightP.textContent = this.height;
    heightDiv.append(heightSpan, heightP);

    //set alibi
    const alibiDiv = document.createElement('div');
    const alibiSpan = document.createElement('span');
    const alibiP = document.createElement('p');
    alibiSpan.textContent = 'Alibi: ';
    alibiP.textContent = this.alibi;
    alibiDiv.append(alibiSpan, alibiP);

    // set nationality
    const nationalityDiv = document.createElement('div');
    const nationalitySpan = document.createElement('span');
    const nationalityP = document.createElement('p');
    nationalitySpan.textContent = 'Nationality: ';
    nationalityP.textContent = this.nationality;
    nationalityDiv.append(nationalitySpan, nationalityP);

    infoDiv.append(ageDiv, heightDiv, alibiDiv, nationalityDiv);

    // Notes
    notes.setAttribute('contenteditable', true);
    notes.textContent = this.notes;
    spanNoteDiv.textContent = 'Your notes:';
    noteDiv.append(spanNoteDiv, notes);

    // Fill the card
    card.append(imageDiv, infoDiv, noteDiv);

    return card;
  }
}