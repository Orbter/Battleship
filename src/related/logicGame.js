import { Player } from './player';

function createPLayers(name) {
  const mainPlayer = Player(name);
  const computer = Player('computer');
  function startGame(coordinates) {
    mainPlayer.receiveAttack(coordinates);
  }
}

export { startGame, createPLayers };
