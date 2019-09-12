const container = document.querySelector('.container');

const btn = document.createElement('button');
btn.textContent  = 'Reset the grid';
container.insertAdjacentElement('beforebegin', btn);
btn.classList.add('btn');

// Create grid squares & add in container
function createDivs(num) {
  for (let i = 0; i < Math.pow(num, 2); i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }

  let cellDimensions = (635.97 / num);
  container.style.display = 'grid';
  container.style.gridTemplateRows = `repeat(${num}, ${cellDimensions}px)`;
  container.style.gridTemplateColumns = `repeat(${num}, ${cellDimensions}px)`;

  let gridSquares = document.querySelectorAll('.square');
  gridSquares.forEach(square => square.addEventListener('mouseenter', changeColor));
}

// Change grid square background color
function changeColor() {
  this.style.backgroundColor = '#ffc0cb';
}

// Clear grid & prompt to make the new grid
function clearGrid() {
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild); // Removes all grid squares
  }
  let num = prompt('How many squares per side to make the new grid?', 16);
  createDivs(num); // Create new grid
}

window.onload = createDivs(16);
btn.addEventListener('click', clearGrid);
