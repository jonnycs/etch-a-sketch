const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
document.body.appendChild(gridContainer);

for (let i = 0; i < 256; i++) {
  const gridItem = document.createElement('div');
  gridItem.textContent = 'Grid item'
  gridItem.classList.add('grid-item');
  gridContainer.appendChild(gridItem);
}