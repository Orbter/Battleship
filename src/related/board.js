function createBoardVs(container) {
  for (let col = 0; col < 8; col++) {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col');
    for (let row = 0; row < 8; row++) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('square');
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

export { createBoardVs, enemyBoardVs, createBoardChooseVs };
