const contentDiv = document.getElementById('content-div');
function resetMainDiv() {
  contentDiv.innerHTML = '';
  contentDiv.classList.remove('content-investigation-div');
  const burgerDivs = document.querySelectorAll('.burger-line');
  for (let i = 0; i < burgerDivs.length; i++) {
    burgerDivs[i].style.backgroundColor = 'black';
  }
}

function loadHomePage() {
  resetMainDiv();
  contentDiv.classList.remove('content-div-grid');
  contentDiv.classList.add('content-div-flex');

  const homeContainer = document.createElement('div');
  const homeImage = document.createElement('img');
  const homeTitle = document.createElement('h2');
  const homePContainer = document.createElement('div');
  const homeP1 = document.createElement('p');
  const homeP2 = document.createElement('p');
  const homeP3 = document.createElement('p');
  const homeSinc = document.createElement('p');
  const homeUs = document.createElement('p');

  homePContainer.append(homeP1, homeP2, homeP3, homeSinc, homeUs);
  homeContainer.append(homeImage, homeTitle, homePContainer);

  homeContainer.classList.add('home-container-div');

  homeImage.classList.add('home-image');
  homeImage.src = pageContents.homepage.image;

  homeTitle.classList.add('home-title');
  homeTitle.textContent = pageContents.homepage.title;

  homePContainer.classList.add('home-text-container');
  homeP1.textContent = pageContents.homepage.p1;
  homeP2.textContent = pageContents.homepage.p2;
  homeP3.textContent = pageContents.homepage.p3;
  homeSinc.textContent = pageContents.homepage.sincerly;
  homeUs.textContent = pageContents.homepage.us;
  
  contentDiv.append(homeContainer);
}

function loadInformationPage() {
  contentDiv.classList.remove('content-div-grid');
  contentDiv.classList.add('content-div-flex');
  resetMainDiv();
  const newsNotifications = document.createElement('div');
  const pageSplit = document.createElement('div');
  const interrigationZone = document.createElement('div');

  pageSplit.id = 'informationPageSplit';
  newsNotifications.classList.add('notification-section');
  interrigationZone.classList.add('interrogation-section');

  const interrigationHeader = document.createElement('div');
  interrigationHeader.innerHTML = `
  <h2>INFORMATION</h2>
  <p>Below you will find information such as interrogation records and more that might help the inverstigation.</p>`;
  interrigationHeader.classList.add('interrogation-information');

  contentDiv.append(interrigationHeader);

  if (notifications.length) {
    for (let i = 0; i < notifications.length; i++) {
      const notication = new Notification({
        title: notifications[i].title,
        content: notifications[i].content,
        location: notifications[i].location,
      })

      newsNotifications.append(notication.createHTML());
    }
  }

  for (let i = 0; i < interrogationArray.length; i++) {
    const interRecord = new InterrogationRecord({
      src: interrogationArray[i].src,
      date: interrogationArray[i].date,
      name: interrogationArray[i].name
   })

   interrigationZone.append(interRecord.createHTML());
 }

  contentDiv.append(newsNotifications, pageSplit, interrigationZone);
}

function loadInvestigationPage() {
  resetMainDiv();
  contentDiv.classList.remove('content-div-grid');
  contentDiv.classList.add('content-investigation-div');
  contentDiv.classList.add('content-div-flex');

  const guessDiv = document.createElement('div');

  guessDiv.classList.add('investigation-guess-div');
  guessDiv.innerHTML = `
    <h2>Submit your guess.</h2>
    <p>Choose wisely, you only got one guess since we don't have time for play.</p>
  `;

  const guessSuspects = document.createElement('div');
  guessDiv.append(guessSuspects);

  for (let i = 0; i < STATE.user.suspects.length; i++) {
    if (STATE.user.suspects[i].isStillSuspect) {
      const guessingSuspect = new SuspectGuess({
        "name": STATE.user.suspects[i].name,
        "height": STATE.user.suspects[i].height,
        "alibi": STATE.user.suspects[i].alibi,
        "nationality": STATE.user.suspects[i].nationality,
        // "notes": suspects[i].notes,
        "image": STATE.user.suspects[i].image,
        // "isStillSuspect": suspects[i].isStillSuspect,
        "id": STATE.user.suspects[i].id,
        "age": STATE.user.suspects[i].age,
      })
      guessSuspects.append(guessingSuspect.createHTML());
    }
  }

  contentDiv.append(guessDiv);
}

function loadSuspectPage() {
  resetMainDiv();
  contentDiv.classList.remove('content-div-flex');
  contentDiv.classList.add('content-div-grid');

  const burgerDivs = document.querySelectorAll('.burger-line');
  for (let i = 0; i < burgerDivs.length; i++) {
    console.log(burgerDivs[i])
    burgerDivs[i].style.backgroundColor = 'white';
  }

  suspects = STATE.user.suspects;

  for (let i = 0; i < suspects.length; i++) {
    let suspect = new Suspect ({
      "name": suspects[i].name,
      "height": suspects[i].height,
      "alibi": suspects[i].alibi,
      "nationality": suspects[i].nationality,
      "notes": suspects[i].notes,
      "image": suspects[i].image,
      "isStillSuspect": suspects[i].isStillSuspect,
      "id": suspects[i].id,
      "age": suspects[i].age,
    });

    contentDiv.append(suspect.createHTML());
  }
}

function loadNotesPage() {
  resetMainDiv();
  contentDiv.classList.remove('content-div-grid');
  contentDiv.classList.add('content-div-flex');

  const notesInfoTop = document.createElement('div');
  const noteh1 = document.createElement('h1');
  const noteAddButton = document.createElement('button');

  notesInfoTop.classList.add('notes-top-controll');
  noteAddButton.classList.add('note-add-button');

  noteh1.textContent = 'Notes';
  noteAddButton.textContent = '+';
  
  notesInfoTop.append(noteh1, noteAddButton);

  const allNotesContainer = document.createElement('div');

  contentDiv.append(notesInfoTop, allNotesContainer);

  allNotesContainer.id = "note-container";

  noteAddButton.addEventListener('click', () => {
    let highestId = 0;
    STATE.user.notes.forEach(note => {
      if (highestId <= note.id) {
        highestId = note.id + 1;
      }
    });

    const d = new Date()
    
    const newNote = {
      notes: 'Your notes...',
      id: highestId,
      date: `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`,
      title: 'New Note'
    }

    STATE.user.notes.push(newNote);

    addNewNote = new Notes({
      title: newNote.title,
      id: newNote.id,
      notes: newNote.notes,
      date: newNote.date
    });

    postToDatabase('POST', 'add note', addNewNote);
    
    allNotesContainer.prepend(addNewNote.createHTML());
  })

  STATE.user.notes.sort((a, b) => { a.date < b.date ? -1:1});
  STATE.user.notes.forEach(note => {
    oldNote = new Notes ({
      title: note.title,
      notes: note.notes,
      date: note.date,
      id: note.id,
    })

    allNotesContainer.append(oldNote.createHTML());
  })
}