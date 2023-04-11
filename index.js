let currentPlayer = 'circle';

const btnElm1 = document.querySelector('button:nth-child(1)');
//console.log(btnElm1)
const btnElm2 = document.querySelector('button:nth-child(2)');
const btnElm3 = document.querySelector('button:nth-child(3)');
const btnElm4 = document.querySelector('button:nth-child(4)');
const btnElm5 = document.querySelector('button:nth-child(5)');
const btnElm6 = document.querySelector('button:nth-child(6)');
const btnElm7 = document.querySelector('button:nth-child(7)');
const btnElm8 = document.querySelector('button:nth-child(8)');
const btnElm9 = document.querySelector('button:nth-child(9)');
const btnElm10 = document.querySelector('button:nth-child(10)');

const circleElm = document.querySelector('.circle');

const changeSign = (event) => {
  if (currentPlayer === 'circle') {
    currentPlayer = 'cross';
    circleElm.classList.remove('board__field--cross');
    circleElm.classList.add('board__field--circle');
  } else {
    currentPlayer = 'circle';
    circleElm.classList.remove('board__field--circle');
    circleElm.classList.add('board__field--cross');
  }

  event.target.disabled = true;
};

/*
const changeSign = (event) => {
  if (currentPlayer === 'circle') {
    circleElm.classList.add('board__field--circle');
    //circleElm.event.target.classList.add('board__field--circle');
  } else {
    circleElm.classList.remove('board__field--circle');
    circleElm.classList.add('board__field--cross');
    //circleElm.event.target.classList.add('board__field--cross');
  }

  event.target.disabled = true;
};
*/

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


const restartElm = document.querySelector('.restart')
restartElm.addEventListener('click', (event) => {
  if (!confirm('Opravdu chceš začít znovu?')) {
      event.preventDefault()
  }
}) 

