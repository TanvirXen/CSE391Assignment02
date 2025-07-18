const fortunes = [
  "You will have a great day!",
  "Success is on your way.",
  "Happiness comes from within.",
  "Be bold and courageous.",
  "A new opportunity will arise.",
  "You are capable of amazing things.",
  "Today is your lucky day.",
  "Great things never come from comfort zones.",
  "Dream big, work hard.",
  "Be yourself; everyone else is taken."
];

document.getElementById('fortune-box').textContent =
  fortunes[Math.floor(Math.random() * fortunes.length)];

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
  document.getElementById('fortune-box').style.fontFamily = 'Courier New, monospace';
  document.getElementById('fortune-box').style.fontSize = '1.2em';
}
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
}
