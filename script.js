function mockLogin() {
    const name = document.getElementById('name').value;
    const studentNumber = document.getElementById('student-number').value;
    const course = document.getElementById('course').value;
    const section = document.getElementById('section').value;

    if (name && studentNumber && course && section) {
        alert("It's a prank! This is a mock website. Thanks for trying it out!");
    } else {
        alert('Please fill out all fields.');
    }
}
document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.profiles-track');
  const cards = document.querySelectorAll('.profile-card');
  const prevButton = document.querySelector('.slider-button.prev');
  const nextButton = document.querySelector('.slider-button.next');

  let currentIndex = 0;

  // Function to calculate the card width based on screen size
  function getCardWidth() {
    const card = cards[0];
    return card.offsetWidth + parseInt(window.getComputedStyle(card).marginRight); // card width + margin
  }

  // Function to calculate how many cards to show based on the window width
  function getCardsToShow() {
    return window.innerWidth <= 768 ? 2 : 3;  // 2 cards on mobile, 3 cards on desktop
  }

  // Function to update the slider position
  function updateSliderPosition() {
    const cardWidth = getCardWidth();
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  // Event listener for the previous button
  prevButton.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  });

  // Event listener for the next button
  nextButton.addEventListener('click', function () {
    const totalCards = cards.length;
    const cardsToShow = getCardsToShow();  // Get updated number of cards to show
    if (currentIndex < totalCards - cardsToShow) {
      currentIndex++;
      updateSliderPosition();
    }
  });

  // Update the number of cards shown on window resize
  window.addEventListener('resize', function () {
    updateSliderPosition();  // Update the slider position on window resize
  });

  // Initial update to set the first position
  updateSliderPosition();
});


