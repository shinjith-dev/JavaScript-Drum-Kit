const playKeySound = (key) => {
  const keyAudio = document.querySelector(`audio[data-key=${key}]`);
  keyAudio.currentTime = 0;
  keyAudio.play();
};

const keyPress = (e) => {
  const clickedKey = e.key.toUpperCase(),
    clickedElem = document.querySelector(`button[data-key="${clickedKey}"]`);
  if (clickedElem) {
    clickedElem.classList.add("clicked");
    playKeySound(clickedKey);
  }
};

window.addEventListener("keydown", (e) => keyPress(e));

window.addEventListener("keyup", (e) => {
  const clickedKey = e.key.toUpperCase(),
    clickedElem = document.querySelector(`button[data-key="${clickedKey}"]`);
  if (clickedElem && clickedElem.classList.contains("clicked"))
    clickedElem.classList.remove("clicked");
});

document.querySelectorAll(".drum-cntrl").forEach((btn) => {
  btn.addEventListener("click", (e) =>
    playKeySound(e.target.dataset.key.toUpperCase())
  );
});
