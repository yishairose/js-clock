
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


setInterval(function () {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours() % 12;
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = (((hours / 12) * 360) + 90) + minutesDegrees / 12;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}, 1000)

const quartz = document.querySelector('.quartz');
const automatic = document.querySelector('.automatic');

automatic.addEventListener('click', function () {
    console.log('clicked')
    secondHand.classList.add('transition');


})
quartz.addEventListener('click', function () {
    console.log('clicked')
    secondHand.classList.remove('transition');


})



