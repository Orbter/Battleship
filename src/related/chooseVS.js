import { createBoardChooseVs } from './board';
import { Ship } from './ship';

function createPlayerChoice(name) {
  const homePage = document.querySelector('.home-page');
  homePage.style.display = 'none';
  const chooseContainer = document.createElement('div');
  const boardContainer = document.createElement('div');
  const overlay = document.createElement('div');
  const h2 = document.createElement('h2');
  const headline = document.createElement('div');
  const shipContainer = document.createElement('div');
  const buttonContainer = document.createElement('div');
  const clearButton = document.createElement('button');
  const startButton = document.createElement('button');
  const body = document.getElementById('body');

  // classes
  chooseContainer.style.zIndex = '10';
  chooseContainer.classList.add('popUp');
  boardContainer.classList.add('board');
  h2.classList.add('chooseHead');
  overlay.classList.add('overlay');
  shipContainer.classList.add('ship-container');
  shipContainer.style.zIndex = '10';
  clearButton.classList.add('button');
  startButton.classList.add('button');
  clearButton.classList.add('button-clear');
  startButton.classList.add('button-start');
  buttonContainer.classList.add('button-container-choose');

  // text contact
  h2.textContent = `${name} choose where to place your ship`;
  clearButton.textContent = 'Clear';
  startButton.textContent = 'Start';
  createBoardChooseVs(boardContainer);
  headline.appendChild(h2);
  buttonContainer.appendChild(clearButton);
  buttonContainer.appendChild(startButton);

  chooseContainer.appendChild(headline);
  chooseContainer.appendChild(buttonContainer);
  chooseContainer.appendChild(boardContainer);
  chooseContainer.appendChild(shipContainer);

  body.appendChild(overlay);
  body.appendChild(chooseContainer);
}

function createPlayerChoiceLogic() {
  const allShips = [];
  const ship5 = Ship(5);
  const ship4 = Ship(4);
  const ship3 = Ship(3);
  const ship3Also = Ship(3);
  const ship2 = Ship(2);
  const ship1 = Ship(1);
  allShips.push(ship5, ship4, ship3, ship3Also, ship2, ship1);
}

export { createPlayerChoice };
