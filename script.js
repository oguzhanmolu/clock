'use strict';
// Clock hands
const smallHand = document.querySelector('#small-hand');
const bigHand = document.querySelector('#big-hand');
const secondHand = document.querySelector('#second-hand');

// Hand rotations with each second
const handRotation = function () {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  console.log(hours, minutes, seconds);

  smallHand.style.transform = `rotate(${hours * 30}deg)`;
  bigHand.style.transform = `rotate(${minutes * 6}deg)`;
  secondHand.style.transform = `rotate(${seconds * 6}deg)`;
};
setInterval(handRotation, 1000);
