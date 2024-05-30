import './styles/main.scss';
import { createPlayerChoice } from './related/chooseVS';
import { page } from './related/page';
import battleship from './photos/battleship.png';
import metal from './photos/seamless-metal.jpg';

function homepage() {
  const homePhoto = document.querySelector('.home-page');
  homePhoto.style.backgroundImage = `url(${battleship})`;
  const logo = document.querySelector('.logo');
  const title = document.querySelector('.title');

  logo.style.backgroundImage = `url(${metal})`;
  logo.style.webkitBackgroundClip = 'text';
  logo.style.backgroundClip = 'text';
}
function startingTheGame() {
  const gameForm = document.querySelector('.start-game');
  gameForm.addEventListener('click', (event) => {
    event.preventDefault();

    const inputElement = document.getElementById('name');
    const label = document.querySelector('.label');
    if (inputElement.value.trim() === '') {
      inputElement.style.borderColor = '#c1121f';
      label.textContent = 'please enter a real Name';
    } else {
      const inputValue = inputElement.value;
      createPlayerChoice(inputValue);
    }
  });
}

homepage();
startingTheGame();
