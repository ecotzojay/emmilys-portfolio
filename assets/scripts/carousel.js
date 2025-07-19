//carousel.js

//Wait for the HTML content to fully load before running the script
window.addEventListener('DOMContentLoaded', () => {
  //Select all elements with the class 'carousel-text'
  const texts = document.querySelectorAll('.carousel-text');
  let current = 0;

  //Function to show the next carousel text
  function showNextText() {
    //Loop through each text element
    texts.forEach((el, i) => {
      // Show the current text by setting opacity to 1, hide others by setting to 0
      el.style.opacity = (i === current) ? '1' : '0';
    });
    //Move to the next text, wrap around when reaching the end
    current = (current + 1) % texts.length;
  }

  //Initial setup: only show the first text and hide the rest
  texts.forEach((el, i) => {
    el.style.opacity = (i === 0) ? '1' : '0'; //Show first, hide others
    el.style.position = 'absolute'; //Stack texts on top of each other
    el.style.top = '0'; //Align top
    el.style.left = '0'; //Align left
    el.style.transition = 'opacity 1s ease-in-out'; //Smooth fade transition
  });

  //Change the visible text every 4 seconds
  setInterval(showNextText, 4000);
});
