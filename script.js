// Simple animated terminal greeting with "hacker" effect
const headerP = document.querySelector('header p');
const greeting = 'Welcome to my world of Cybersecurity & Hacking.';
let i = 0;

function typeText() {
  if (i <= greeting.length) {
    headerP.textContent = greeting.substring(0, i) + (i % 2 === 0 ? '_' : '');
    i++;
    setTimeout(typeText, 60); // adjust typing speed here
  }
}

window.onload = () => {
  headerP.textContent = '';
  typeText();
};

// Animating background overlay (already in CSS)
