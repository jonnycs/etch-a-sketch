// Add button to choose grid size.
const gridSizeButton = document.createElement('button');
gridSizeButton.textContent = 'Choose Grid Size';
gridSizeButton.classList.add('grid-size-button');
document.body.appendChild(gridSizeButton);

let gridSize = 16;
let totalGridItems = 256;
let gridContainer;

// Prompt the user to choose a grid size.
gridSizeButton.addEventListener('click', () => {
  gridSize = prompt('Choose a grid size! Max size is 100x100.');
  gridSize = Number(gridSize);
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
    gridItem.addEventListener('mouseover', () => {
    gridItem.classList.add('grid-item-permahover');
  })};
}

generateGridContainer();
generateGridItems();