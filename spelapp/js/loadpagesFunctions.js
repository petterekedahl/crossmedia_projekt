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
  console.log('suspectpage');
}

function loadNotesPage() {
  resetMainDiv();
  console.log('notespage');
}