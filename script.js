'use strict';
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const showBtns = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < showBtns.length; i++) {
  showBtns[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

closeBtn.addEventListener('click', () => {
  hideModalAndOverlay();
});

overlay.addEventListener('click', () => {
  hideModalAndOverlay();
});

function hideModalAndOverlay() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

document.addEventListener('keydown', e => {
  if (
    e.key === 'Escape' &&
    !modal.classList.contains('hidden') &&
    !overlay.classList.contains('hidden')
  ) {
    hideModalAndOverlay();
  }
});

// e represents the event object
