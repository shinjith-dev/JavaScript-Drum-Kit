const playKeySound = (elem, key) => {
  const keyAudio = document.querySelector(`audio[data-key=${key}]`);
  keyAudio.currentTime = 0;
  keyAudio.play();
};

window.addEventListener("keydown", (e) => {
  const clickedKey = e.key.toUpperCase(),
    clickedElem = document.querySelector(`button[data-key="${clickedKey}"]`);
  if (clickedElem) {
    clickedElem.classList.add("clicked");
    playKeySound(clickedElem, clickedKey);
  }
});

window.addEventListener("keyup", (e) => {
  const clickedKey = e.key.toUpperCase(),
    clickedElem = document.querySelector(`button[data-key="${clickedKey}"]`);
  if (clickedElem && clickedElem.classList.contains("clicked"))
    clickedElem.classList.remove("clicked");
});
