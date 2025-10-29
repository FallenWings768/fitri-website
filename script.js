// Color button logic
const button = document.getElementById("colorButton");
let isGreen = false;
button.addEventListener("click", function() {
  if (isGreen) {
    document.body.style.backgroundColor = "white";
    button.textContent = "Click Me!";
  } else {
    document.body.style.backgroundColor = "lightgreen";
    button.textContent = "Revert Color!";
  }
  isGreen = !isGreen;
});

// Music button logic
const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");
let isPlaying = false;

musicButton.addEventListener("click", function() {
  if (isPlaying) {
    music.pause();
    musicButton.textContent = "Play Music";
  } else {
    music.play();
    musicButton.textContent = "Pause Music";
  }
  isPlaying = !isPlaying;
});
// Color button logic
const button = document.getElementById("colorButton");
let isGreen = false;
button.addEventListener("click", function() {
  if (isGreen) {
    document.body.style.backgroundColor = "white";
    button.textContent = "Click Me!";
  } else {
    document.body.style.backgroundColor = "lightgreen";
    button.textContent = "Revert Color!";
  }
  isGreen = !isGreen;
});

// Music button logic
const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");
let isPlaying = false;

musicButton.addEventListener("click", function() {
  if (isPlaying) {
    music.pause();
    musicButton.textContent = "Play Music";
  } else {
    music.play();
    musicButton.textContent = "Pause Music";
  }
  isPlaying = !isPlaying;
});
