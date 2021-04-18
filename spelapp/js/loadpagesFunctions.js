const contentDiv = document.getElementById('content-div');
function resetMainDiv() {
  contentDiv.innerHTML = '';
}

function loadHomePage() {
  resetMainDiv();
  console.log('homepage');
}

function loadInformationPage() {
  resetMainDiv();
  console.log('infopage');
}

function loadProfilePage() {
  resetMainDiv();
  console.log('profilepage');
}

function loadSuspectPage() {
  resetMainDiv();
  contentDiv.classList.remove('content-div-flex');
  contentDiv.classList.add('content-div-grid');
  suspects = STATE.user.suspects;

  for (let i = 0; i < suspects.length; i++) {
    let suspect = new Suspect({
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
  console.log('notespage');
}