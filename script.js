// Add button to choose grid size.
const gridSizeButton = document.createElement('button');
gridSizeButton.textContent = 'Choose Grid Size';
gridSizeButton.classList.add('grid-size-button');
document.body.appendChild(gridSizeButton);

let gridSize = 16;
let totalGridItems = 256;

// Prompt the user to choose a grid size.
gridSizeButton.addEventListener('click', () => {
  gridSize = prompt('Choose a grid size! Max size is 100x100.')
  totalGridItems = gridSize * gridSize;
});

// Generate grid container.
const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
document.body.appendChild(gridContainer);

// Generate grid elements.
for (let i = 0; i < totalGridItems; i++) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridContainer.appendChild(gridItem);
  gridItem.addEventListener('mouseover', () => {
  gridItem.classList.add('grid-item-permahover');
})};