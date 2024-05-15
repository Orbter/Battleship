import { Ship } from './ship';

function createMatrix(rows, cols) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(0); // You can initialize the matrix with any value, here we use 0
    }
    matrix.push(row);
  }
  return matrix;
}
