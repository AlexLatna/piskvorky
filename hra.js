import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

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

  const playFieldSigns = playFieldArray.map((sign) => {
    if (sign.classList.contains('board__field--cross')) {
      return 'x';
    } else if (sign.classList.contains('board__field--circle')) {
      return 'o';
    } else {
      return '_';
    }
  });
  
  const winner = findWinner(playFieldSigns);
  if (winner === 'x') {
    setTimeout(() => {
      alert('Vyhrál křížik!');
      location.reload();
    }, 300);
  } else if (winner === 'o') {
    setTimeout(() => {
      alert('Vyhrálo kolečko!');
      location.reload();
    }, 300);
  } else if (winner === 'tie') {
    setTimeout(() => {
      alert('Hra skončila remízou.');
      location.reload();
    }, 300);
  }
  
};



//vytvorenie poľa z main
const playField = document.querySelectorAll('button');
const playFieldArray = Array.from(playField);




const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', changeSign);
});


const restartElm = document.querySelector('.restart');
restartElm.addEventListener('click', (event) => {
  if (confirm('Opravdu chceš začít znovu?')) {
    location.reload();
  } else {
    event.preventDefault();
  }
});
