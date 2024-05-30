import { createPlayerChoice } from './chooseVS';

function WinScreen(name) {
  const overlay = document.querySelector('.overlay');
  const winContainer = document.createElement('div');
  const winMessage = document.createElement('h2');
  const playAgainButton = document.createElement('button');
  overlay.style.display = 'block';
  winContainer.classList.add('win-container');
  winContainer.style.zIndex = '20';
  winMessage.classList.add('winMessage');
  playAgainButton.classList.add('button');
  playAgainButton.classList.add('button-play-again');

  winMessage.textContent = `${name} Wins`;
  playAgainButton.textContent = 'Play Again!';

  winContainer.appendChild(winMessage);
  winContainer.appendChild(playAgainButton);
  body.appendChild(winContainer);

  playAgainButton.addEventListener('click', () => {
    resetGame(name);
  });
}

function resetGame(name) {
  const overlay = document.querySelector('.overlay');
  const winContainer = document.querySelector('.win-container');
  const popUp = document.querySelector('.popUp');
  const playerBoard = document.querySelector('.player-board');
  const opponentBoard = document.querySelector('.opponent-board');

  popUp.remove();
  overlay.remove();
  winContainer.remove();
  while (playerBoard.firstChild) {
    playerBoard.removeChild(playerBoard.firstChild);
  }
  while (opponentBoard.firstChild) {
    opponentBoard.removeChild(opponentBoard.firstChild);
  }
  createPlayerChoice(name);
}

export { WinScreen };
