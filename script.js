'use strict';
// Clock hands
const smallHand = document.querySelector('#small-hand');
const bigHand = document.querySelector('#big-hand');
const secondHand = document.querySelector('#second-hand');

// Time variables

const handRotation = function () {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();

  //   secondHand.style.transform = `rotate(${rotationDegree}deg)`;
};

setInterval(handRotation, 1000);
