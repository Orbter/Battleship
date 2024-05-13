import { createBoardVs } from './board';

function createPlayerChoice(name) {
  const homePage = document.querySelector('.home-page');
  homePage.style.display = 'none';
  const chooseContainer = document.createElement('div');
  const boardContainer = document.createElement('div');
  const h2 = document.createElement('h2');
  const headline = document.createElement('div');
  const body = document.getElementById('body');
  // classes
  chooseContainer.style.zIndex = '10';
  chooseContainer.classList.add('popUp');
  boardContainer.classList.add('board');
  h2.classList.add('chooseHead');
  // text contact
  h2.textContent = `${name} choose where to place your ship`;
  createBoardVs(boardContainer);
  headline.appendChild(h2);
  chooseContainer.appendChild(headline);
  chooseContainer.appendChild(boardContainer);
  body.appendChild(chooseContainer);
}

export { createPlayerChoice };
