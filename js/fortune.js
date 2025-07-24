const fortunes = [
  { text: "You will have a great day!", color: "#ffdfd5" },
  { text: "Success is on your way.", color: "#d5ffd5" },
  { text: "Happiness comes from within.", color: "#d5e8ff" }
];

// PRESETS: one object per button, each with 5 properties
const presets = {
  preset1: {
    color:           "#e74c3c",
    backgroundColor: "#fdebd0",
    borderColor:     "#c0392b",
    fontFamily:      "Georgia, serif",
    fontSize:        "1.4em"
  },
  preset2: {
    color:           "#27ae60",
    backgroundColor: "#d4efdf",
    borderColor:     "#1e8449",
    fontFamily:      "Verdana, sans-serif",
    fontSize:        "1.2em"
  },
  preset3: {
    color:           "#2980b9",
    backgroundColor: "#d6eaf8",
    borderColor:     "#21618c",
    fontFamily:      "Courier New, monospace",
    fontSize:        "1.3em"
  },
  preset4: {
    color:           "#f39c12",
    backgroundColor: "#fcf3cf",
    borderColor:     "#b9770e",
    fontFamily:      "Tahoma, sans-serif",
    fontSize:        "1.5em"
  }
};

function loadFortune() {
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  const box = document.getElementById("fortune-box");

  box.textContent        = fortune.text;
  box.style.backgroundColor = fortune.color;
  box.style.border      = "2px solid #ccc";
  box.style.color       = "#333";
  box.style.fontFamily  = "Arial, sans-serif";
  box.style.padding     = "15px";
  box.style.borderRadius= "10px";
  box.style.fontSize    = "1.2em";
}

// apply all five properties from a preset
function applyPreset(presetKey) {
  const box = document.getElementById("fortune-box");
  const p = presets[presetKey];
  box.style.color           = p.color;
  box.style.backgroundColor = p.backgroundColor;
  box.style.borderColor     = p.borderColor;
  box.style.fontFamily      = p.fontFamily;
  box.style.fontSize        = p.fontSize;
}

window.onload = loadFortune;
