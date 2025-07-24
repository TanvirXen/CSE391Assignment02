const fortunes = [
  { text: "You will have a great day!", color: "#ffdfd5" },
  { text: "Success is on your way.", color: "#d5ffd5" },
  { text: "Happiness comes from within.", color: "#d5e8ff" }
];

function loadFortune() {
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  const box = document.getElementById('fortune-box');

  box.textContent = fortune.text;
  box.style.backgroundColor = fortune.color;
  box.style.border = '2px solid #ccc';
  box.style.color = '#333';
  box.style.fontFamily = 'Arial, sans-serif';
  box.style.padding = '15px';
  box.style.borderRadius = '10px';
  box.style.fontSize = '1.2em';
}

// ✅ Each button applies a separate visual change:
function changeFontColor() {
  document.getElementById('fortune-box').style.color = getRandomColor();
}
function changeBgColor() {
  document.getElementById('fortune-box').style.backgroundColor = getRandomColor();
}
function changeBorderColor() {
  document.getElementById('fortune-box').style.borderColor = getRandomColor();
}
function changeFont() {
  const fonts = ['Courier New', 'Georgia', 'Verdana', 'Tahoma', 'Impact', 'Lucida Console'];
  const font = fonts[Math.floor(Math.random() * fonts.length)];
  document.getElementById('fortune-box').style.fontFamily = font;
  document.getElementById('fortune-box').style.fontSize = `${Math.floor(Math.random() * 4 + 1)}em`;
}

// Utility function
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
}

// Load one fortune on page load
window.onload = loadFortune;