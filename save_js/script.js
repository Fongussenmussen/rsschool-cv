'use strict';

// var ftitle = document.querySelector('.old-heading');
// var newftitle = document.querySelector('.new-heading');
// console.log(ftitle);
// ftitle.addEventListener('mouseenter', function() {
// 	ftitle.style.display = 'none';
// 	newftitle.style.display = 'block';
// });

// Trying to animate shit

// extracting text

const text = document.querySelector('.old-heading');
const newText = document.querySelector('.new-heading');
// Деление на спаны
const strText = text.textContent;
const strNewText = newText.textContent;

// console.log(strText);
// console.log(strNewText);
// console.log(strText.length);
// console.log(strNewText.length);

// Разрезает на части
const splitText = strText.split('');
text.textContent = '';
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += '<span>' + splitText[i] + "</span>";
}

// для олдов
const splitNewText = strNewText.split('');
newText.textContent = '';
for (let i = 0; i < splitNewText.length; i++) {
  newText.innerHTML += '<span>' + splitNewText[i] + "</span>";
}



console.log(splitText);
console.log(splitNewText);


// Запуск функции 
let char = 0;
let timer = setInterval(onTick, 10);

function onTick() {
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}


function complete() {
	clearInterval(timer);
	timer = null;
}

// ВЫБОР ОЛД СТРИНГ
const animatedString = document.querySelector('.animatedString')
// ВЫБОР АНИМЕШНЫХ СПАНОВ
const animatedList = animatedString.querySelectorAll('span.animated')
// ВЫБОР НОВОЙ СТРОКИ, КОТОРАЯ БУДЕТ ОТОБРАЖАТЬСЯ
const newString = 'BlaBlaBla';
// ЗАМЕНА ПОБУКВЕННО СТАРОГО  NEW_STRING 
const newStringList = newString.split('')
animatedList.forEach((element, index) => {
    element.textContent = newString[index]
})




// 𓀕𓂖𓃘𓄒𓅅𓎑 𓆈𓇘 𓉡𓉢𓄓𓉝 𓃩𓀓 𓂙𓃛𓌗𓅂𓆋𓇔 𓉦𓍴𓌓𓎅𓃙𓃨𓎃𓌕𓉋𓉜𓉞 𓈤𓉓𓊑 𓋍 𓍦𓎂 𓎞𓎑𓌳 𓏓𓏫𓐏𓉞𓎂𓉗𓅆𓉢𓉤 