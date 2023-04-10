let currentPlayer = 'circle';

const btnElm1 = document.querySelector('.table:nth-child(1)');
const btnElm2 = document.querySelector('.table:nth-child(2)');
const btnElm3 = document.querySelector('.table:nth-child(3)');
const btnElm4 = document.querySelector('.table:nth-child(4)');
const btnElm5 = document.querySelector('.table:nth-child(5)');
const btnElm6 = document.querySelector('.table:nth-child(6)');
const btnElm7 = document.querySelector('.table:nth-child(7)');
const btnElm8 = document.querySelector('.table:nth-child(8)');
const btnElm9 = document.querySelector('.table:nth-child(9)');
const btnElm10 = document.querySelector('.table:nth-child(10)'); 


const circleElm = document.querySelector('.circle')

const changeSign = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    currentPlayer = 'cross';
    document.querySelector('.circle').classList.remove('board__field--circle');
    document.querySelector('.circle').classList.add('board__field--cross');
  } else {
    event.target.classList.add('board__field--cross');
    currentPlayer = 'circle';
    document.querySelector('.circle').classList.remove('board__field--cross');
    document.querySelector('.circle').classList.add('board__field--circle');
  }

  event.target.disabled = true;
};


btnElm1.addEventListener('click', changeSign)
btnElm2.addEventListener('click', changeSign)
btnElm3.addEventListener('click', changeSign)
btnElm4.addEventListener('click', changeSign)
btnElm5.addEventListener('click', changeSign)
btnElm6.addEventListener('click', changeSign)
btnElm7.addEventListener('click', changeSign)
btnElm8.addEventListener('click', changeSign)
btnElm9.addEventListener('click', changeSign)
btnElm10.addEventListener('click', changeSign) 


const restartElm = document.querySelector('.restart')
restart.addEventListener('click', (event) => {
  if (confirm('Opravdu chceš začít znovu?')) {
      event.preventDefault()
  }
}) 


