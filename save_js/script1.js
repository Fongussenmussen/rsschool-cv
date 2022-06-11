'use strict';
// Extracting text
const animatedString = document.querySelector('.animatedHeading');
const strText = animatedString.innerText;
// Splitting text for chars
const splitText = strText.split('');
// Deleting text
animatedString.textContent = '';
// Adding every char to span with opacity 0
for (let i = 0; i < splitText.length; i++) {
  animatedString.innerHTML += '<span>' + splitText[i] + "</span>";
}
// Choosing these spans 
let char = 0;
let timer = setInterval(onTick, 0);
// Ontick Function
function onTick() {
  const span = animatedString.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}
// End of interval timer
function complete() {
 clearInterval(timer);
 timer = null;
}


const asdasda = document.querySelectorAll('span.fade');

console.log(asdasda);
