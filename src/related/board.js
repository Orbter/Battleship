import { calculateNumber } from './logicGame';

function createBoardVs(container) {
  for (let col = 0; col < 8; col++) {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col');
    for (let row = 0; row < 8; row++) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('square');
      rowDiv.classList.add('player-row');

      rowDiv.dataset.rowNum = row;
      rowDiv.dataset.rowCol = col;
      colDiv.appendChild(rowDiv);
    }
    container.appendChild(colDiv);
  }
}

function createBoardChooseVs(container) {
  for (let col = 0; col < 8; col++) {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col');
    for (let row = 0; row < 8; row++) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('square-choose');
      rowDiv.dataset.rowNum = row;
      rowDiv.dataset.rowCol = col;
      colDiv.appendChild(rowDiv);
    }
    container.appendChild(colDiv);
  }
}

function enemyBoardVs(container) {
  for (let col = 0; col < 8; col++) {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col');
    for (let row = 0; row < 8; row++) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('square');
      rowDiv.classList.add('enemy-row');

      rowDiv.dataset.rowNum = row;
      rowDiv.dataset.colNum = col;
      colDiv.appendChild(rowDiv);
    }
    container.appendChild(colDiv);
  }
}

function updatePlayerBoardVs(shipElement, tile, isRotated) {
  const boardPlayer = board.getBoard();
  const allTiles = document.querySelectorAll('.player-row');
  const row = parseInt(tile.dataset.rowNum, 10);
  const col = parseInt(tile.dataset.rowCol, 10);
  const coordinates = [];
  coordinates.push(row, col);
  const num = calculateNumber(coordinates);
  const currentTile = allTiles[num];

  const shipContainer = document.querySelector('.popUp');
  if (!shipContainer || !shipElement || !tile) {
    return;
  }

  const shipImg = new Image();
  shipImg.src = shipElement.src;
  shipImg.classList.add('placed-ship');
  shipImg.style.position = 'absolute';
  shipImg.style.zIndex = '5';

  const shipTypes = [
    'carrier',
    'battle-ship',
    'submarine',
    'cruiser',
    'destroyer',
  ];
  shipTypes.forEach((type) => {
    if (shipElement.classList.contains(type)) {
      shipImg.classList.add(type);
    }
  });

  if (isRotated) {
    shipImg.style.transform = 'rotate(90deg)';
    shipImg.style.transformOrigin = 'top left';
    shipImg.style.left = `${offsetX + tileRect.height}px`;
  }
}

export {
  createBoardVs,
  enemyBoardVs,
  createBoardChooseVs,
  updatePlayerBoardVs,
};
