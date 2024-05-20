function Ship(length) {
  let hits = 0;
  let sunk = false;
  const position = [];
  return {
    returnPlace() {
      return position.shift();
    },
    enterPosition(coordinates) {
      position.push(coordinates);
    },
    getNumOfHits() {
      return hits;
    },
    hit() {
      hits += 1;
    },
    isSunk() {
      return length === hits;
    },
    getLength() {
      return length;
    },
    getShip() {
      return {
        length,
        hits,
        sunk,
      };
    },
  };
}
function shipVS(
  carrier,
  battleShip,
  submarine,
  cruiser,
  destroyer,
  shipContainer
) {
  const carrierImg = new Image();
  const battleShipImg = new Image();
  const submarineImg = new Image();
  const cruiserImg = new Image();
  const destroyerImg = new Image();
  carrierImg.classList.add('carrier', 'ship-choose');
  battleShipImg.classList.add('battle-ship', 'ship-choose');
  submarineImg.classList.add('submarine', 'ship-choose');
  cruiserImg.classList.add('cruiser', 'ship-choose');
  destroyerImg.classList.add('destroyer', 'ship-choose');
  carrierImg.src = carrier;
  battleShipImg.src = battleShip;
  submarineImg.src = submarine;
  cruiserImg.src = cruiser;
  destroyerImg.src = destroyer;
  carrierImg.dataset.shipLength = 4;
  battleShipImg.dataset.shipLength = 3;
  submarineImg.dataset.shipLength = 2;
  cruiserImg.dataset.shipLength = 2;
  destroyerImg.dataset.shipLength = 1;

  carrierImg.dataset.shipColor = '#ff4d6d';
  battleShipImg.dataset.shipColor = '#faa307';
  submarineImg.dataset.shipColor = '#00b4d8';
  cruiserImg.dataset.shipColor = '#ffdd00';
  destroyerImg.dataset.shipColor = '#7bf1a8';

  carrierImg.style.cursor = 'pointer';
  battleShipImg.style.cursor = 'pointer';
  submarineImg.style.cursor = 'pointer';
  cruiserImg.style.cursor = 'pointer';
  destroyerImg.style.cursor = 'pointer';

  shipContainer.appendChild(carrierImg);
  shipContainer.appendChild(battleShipImg);
  shipContainer.appendChild(submarineImg);
  shipContainer.appendChild(cruiserImg);
  shipContainer.appendChild(destroyerImg);
}

export { Ship, shipVS };
