//Main audio player function
const playKeySound = (key) => {
  const keyAudio = document.querySelector(`audio[data-key=${key}]`);
  keyAudio.currentTime = 0;
  keyAudio.play();
};

//Keyboard key recognition and highliting
const keyPress = (e) => {
  const clickedKey = e.key.toUpperCase(),
    clickedElem = document.querySelector(`button[data-key="${clickedKey}"]`);
  if (clickedElem) {
    clickedElem.classList.add("clicked");
    playKeySound(clickedKey);
  }
};

//Keyboard keypress listener
window.addEventListener("keydown", (e) => keyPress(e));

//listener for removing highlighted effect
window.addEventListener("keyup", (e) => {
  const clickedKey = e.key.toUpperCase(),
    clickedElem = document.querySelector(`button[data-key="${clickedKey}"]`);
  if (clickedElem && clickedElem.classList.contains("clicked"))
    clickedElem.classList.remove("clicked");
});

//On screen button click listener
document.querySelectorAll(".drum-cntrl").forEach((btn) => {
  btn.addEventListener("click", (e) =>
    playKeySound(e.target.dataset.key.toUpperCase())
  );
});
