let totalPages = 0;
let pagesRead = 0;

function startTracking() {
  const inputTotalPages = document.getElementById('totalPages').value;
  if (inputTotalPages && inputTotalPages > 0) {
    totalPages = parseInt(inputTotalPages);
    pagesRead = 0;

    // Enable the 'Mark Page as Read' button
    document.getElementById('readPageButton').disabled = false;

    // Display initial progress
    updateProgress();
    document.getElementById('statusMessage').innerText = `Progress: 0%`;
    document.getElementById('pagesReadMessage').innerText = `Pages Read: 0`;  // Reset the pages read count
  } else {
    alert('Please enter a valid number of total pages.');
  }
}

function markPageRead() {
  if (pagesRead < totalPages) {
    pagesRead++;
    updateProgress();
  }

  // Update the "Pages Read" display
  document.getElementById('pagesReadMessage').innerText = `Pages Read: ${pagesRead}`;

  // Check if all pages are read
  if (pagesRead === totalPages) {
    alert('Congratulations! You have completed reading all pages.');
    document.getElementById('readPageButton').disabled = true;
  }
}

function updateProgress() {
  const progress = (pagesRead / totalPages) * 100;
  const progressBar = document.getElementById('progressBar');
  progressBar.style.width = progress + '%';

  // Update the status message
  document.getElementById('statusMessage').innerText = `Progress: ${Math.round(progress)}%`;
}
