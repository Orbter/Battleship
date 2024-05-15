function Ship(length) {
  let hits = 0;
  let sunk = false;
  return {
    getNumOfHits() {
      return hits;
    },
    hit() {
      hits += 1;
    },
    isSunk() {
      return length === hits;
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
export { Ship };
