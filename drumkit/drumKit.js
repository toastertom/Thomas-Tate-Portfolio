function playSound (evnt) {

  const audio = document.querySelector(`audio[data-key="${evnt.keyCode}"]`); // This selects the audio element.

  const key = document.querySelector(`.key[data-key="${evnt.keyCode}"]`);// This selects the <div> with the class="key".

  if (!audio) return; //this will stop the function from running if there is no audio associated with the pressed key.

  audio.currentTime = 0;// allows the audio to restart when the key is pressed multiple times.

  audio.play();// excecutes audio file.

  key.classList.add('playing');//This adds the CSS class of "playing" to the key being pressed.

  // console.log(audio);
  // console.log(key);
};

function removeTransition(evnt) {
  if (evnt.propertyName !== 'transform') return;

  this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));


window.addEventListener('keydown', playSound);//On keydown this executes the playSound function.
