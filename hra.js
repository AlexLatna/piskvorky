import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

/*
const btnElm1 = document.querySelector('button:nth-child(1)');
console.log(btnElm1)
const btnElm2 = document.querySelector('button:nth-child(2)');
const btnElm3 = document.querySelector('button:nth-child(3)');
const btnElm4 = document.querySelector('button:nth-child(4)');
const btnElm5 = document.querySelector('button:nth-child(5)');
const btnElm6 = document.querySelector('button:nth-child(6)');
const btnElm7 = document.querySelector('button:nth-child(7)');
const btnElm8 = document.querySelector('button:nth-child(8)');
const btnElm9 = document.querySelector('button:nth-child(9)');
const btnElm10 = document.querySelector('button:nth-child(10)');
*/
//podmienka úkol 3
const changeSign = (event) => {
  if (currentPlayer === 'circle') {
    currentPlayer = 'cross';
    event.target.classList.remove('board__field--cross');
    event.target.classList.add('board__field--circle');
    document.getElementById('hrac').classList.remove('circle');
    document.getElementById('hrac').classList.add('cross');
  } else {
    currentPlayer = 'circle';
    event.target.classList.remove('board__field--circle');
    event.target.classList.add('board__field--cross');
    document.getElementById('hrac').classList.remove('cross');
    document.getElementById('hrac').classList.add('circle');
  }

  event.target.disabled = true;
};

//vytvorenie poľa z main
const playField = document.querySelectorAll('button');
const playFieldArray = Array.from(playField);
const Signs = playFieldArray.map((sign) => {
  if (sign.classList.contains('board__field--cross')) {
    return 'x';
  } else if (sign.classList.contains('board__field--circle')) {
    return 'o';
  } else {
    return '_';
  }
});



const winner = findWinner(playFieldArray);
if (winner === 'x') {
  setTimeout(() => {
    alert('Vyhrál křížik!');
    location.reload();
  }, 200);
} else if (winner === 'o') {
  setTimeout(() => {
    alert('Vyhrálo kolečko!');
    location.reload();
  }, 200);
} else if (winner === 'tie') {
  setTimeout(() => {
    alert('Hra skončila remízou.');
    location.reload();
  }, 200);
}



const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
  button.addEventListener('click', changeSign);
});

/*
btnElm1.addEventListener('click', changeSign);
btnElm2.addEventListener('click', changeSign);
btnElm3.addEventListener('click', changeSign);
btnElm4.addEventListener('click', changeSign);
btnElm5.addEventListener('click', changeSign);
btnElm6.addEventListener('click', changeSign);
btnElm7.addEventListener('click', changeSign);
btnElm8.addEventListener('click', changeSign);
btnElm9.addEventListener('click', changeSign);
btnElm10.addEventListener('click', changeSign);
*/

/*
const restartElm = document.querySelector('.restart')
restartElm.addEventListener('click', (event) => {
  if (!confirm('Opravdu chceš začít znovu?')) {
      event.preventDefault()
  }
}) */
