// Add button to choose grid size.
const gridSizeButton = document.createElement('button');
gridSizeButton.textContent = 'Choose Grid Size';
gridSizeButton.classList.add('grid-size-button');
document.body.appendChild(gridSizeButton);

// Add pen color buttons.
const redPenButton = document.createElement('button');
redPenButton.textContent = 'Red Pen';
document.body.appendChild(redPenButton);

const greenPenButton = document.createElement('button');
greenPenButton.textContent = 'Green Pen';
document.body.appendChild(greenPenButton);

const bluePenButton = document.createElement('button');
bluePenButton.textContent = 'Blue Pen';
document.body.appendChild(bluePenButton);

function changePenColor(color, gridItem, colorPenButton) {
  colorPenButton.addEventListener('click', () => {
    gridItem.className = '';
    gridItem.classList.add('grid-item', 'grid-item-size');

    gridItem.addEventListener('mouseover', () => {
      gridItem.classList.add(`grid-item-${color}-permahover`);
})})};


let gridSize = 16;
let totalGridItems = 256;
let gridContainer;

// Prompt the user to choose a grid size.
gridSizeButton.addEventListener('click', () => {
  gridSize = prompt('Enter a number from 1-100.');
  gridSize = Number(gridSize);
  // Checks gridSize value is valid.
  while (gridSize > 100 || gridSize <= 0 || isNaN(gridSize)) {
    gridSize = prompt('Enter a number from 0-100.');
    gridSize = Number(gridSize);
  }
  totalGridItems = gridSize * gridSize;

  // Remove and regenerate grid with user specified size.
  document.body.removeChild(gridContainer);
  generateGridContainer();
  generateGridItems();
});

function generateGridContainer() {
  gridContainer = document.createElement('div');
  gridContainer.classList.add('grid-container');
  document.body.appendChild(gridContainer);
}

function generateGridItems() {
    let gridItemSize = 800 / gridSize;
  for (let i = 0; i < totalGridItems; i++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item', 'grid-item-size');
    gridItem.style.flexBasis = `${gridItemSize}px`;
    gridContainer.appendChild(gridItem);

  changePenColor("red", gridItem, redPenButton);
  changePenColor("green", gridItem, greenPenButton);
  changePenColor("blue", gridItem, bluePenButton);
  }
}

generateGridContainer();
generateGridItems();