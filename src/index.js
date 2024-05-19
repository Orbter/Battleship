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
homepage();
createPlayerChoice('amit');

const opponentBoard = document.querySelectorAll('.enemy-row');
