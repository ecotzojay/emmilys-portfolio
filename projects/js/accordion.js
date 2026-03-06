//accordion.js

//Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  //Select all elements with the class accordion-header
  const buttons = document.querySelectorAll('.accordion-header');

  //Add a click event listener to each accordion header
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      //Check if the clicked accordion is already expanded
      const expanded = button.getAttribute('aria-expanded') === 'true';

      //Close all accordions by resetting aria attributes and hiding panels
      buttons.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
      document.querySelectorAll('.accordion-panel').forEach(panel => panel.hidden = true);

      //If the clicked accordion was closed, open it
      if (!expanded) {
        //Set aria-expanded to true for accessibility
        button.setAttribute('aria-expanded', 'true');
        //Get the corresponding panel by ID using aria-controls
        const panel = document.getElementById(button.getAttribute('aria-controls'));
        //If the panel exists, show it and optionally focus it
        if (panel) {
          panel.hidden = false;
          panel.focus?.(); //Focus the panel if it supports focus
        }
      }
    });
  });
});
