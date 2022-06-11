'use strict';

const hoursBlock = document.querySelector('.clock-hours')
const minutesBlock = document.querySelector('.clock-minutes');
const secondsBlock = document.querySelector('.clock-seconds');

const dateDefine = () => {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	const fHours = hours < 10 ? '0' + hours : hours;  
	const fMinutes = minutes < 10 ? '0' + minutes : minutes;  
	const fSeconds = seconds < 10 ? '0' + seconds : seconds; 

  hoursBlock.textContent = fHours;
  minutesBlock.textContent = fMinutes;
  secondsBlock.textContent = fSeconds;
} 
setInterval(dateDefine, 500);

