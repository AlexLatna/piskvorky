import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

//vytvorenie poľa z main
const playField = document.querySelectorAll('button');
const playFieldArray = Array.from(playField);
const playFieldArrayApi = () => {
  const dim = 10;
  let board = Array(dim * dim);
  board.fill('_');

  let index = 0;
  playField.forEach((btn) => {
    const objClass = btn.getAttribute('class');
    if (objClass != null) {
      if (objClass ==='board__field--cross') {
        board[index] = 'x';
      } else if (objClass==='board__field--circle') {
        board[index] = 'o';
      }
    }
    index++;
  });
  return board;
};

//podmienka úkol 3
const changeSign = (event) => {
  if (currentPlayer === 'circle') {
    currentPlayer = 'cross';
    event.target.classList.remove('board__field--cross');
    event.target.classList.add('board__field--circle');
    document.getElementById('hrac').classList.remove('circle');
    document.getElementById('hrac').classList.add('cross');
    moveByPC();
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

  //funkcia- vracia víťaza
  const winner = findWinner(playFieldSigns);
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
};

//volanie API
const moveByPC = () => {
  currentPlayer = 'cross';
  buttons.forEach((button) => {
    button.disabled = true;
  });
  fetch('https://piskvorky.czechitas-podklady.cz/api/suggest-next-move', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      board: playFieldArrayApi(),
      player: 'x',
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const { x, y } = data.position;
      const index = x + y * 10;
      buttons.forEach((button) => {
        if (
          button.classList.contains('board__field--cross') ||
          button.classList.contains('board__field--circle')
        ) {
          button.disabled = true;
        } else {
          button.disabled = false;
        }
      });
      buttons[index].click();
    });
};

//click event listener na každé tlačítko
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', changeSign);
});

//kontrola, či user chce reštartovať
const restartElm = document.querySelector('.restart');
restartElm.addEventListener('click', (event) => {
  if (confirm('Opravdu chceš začít znovu?')) {
    location.reload();
  } else {
    event.preventDefault();
  }
});
