// Followed this tutorial: https://www.codewithfaraz.com/content/361/how-to-create-a-scroll-down-button-html-css-javascript-tutorial#javascript-code

document.getElementById('eButton').addEventListener('click', function() {
  window.scrollBy({
    behavior: 'smooth'
  });
});