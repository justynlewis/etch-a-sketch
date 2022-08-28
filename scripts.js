const gridContainer = document.querySelector('.grid-container');
document.body.appendChild(gridContainer);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createGrid(size) {
    removeAllChildNodes(gridContainer);
    // root.style.setProperty('--value', 'size'); 
    for (let i = 0; i < size * size; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.toggle('grid-square');
        gridSquare.addEventListener('mouseover', function() {
            gridSquare.setAttribute("style", "background-color: black");
        });
        gridContainer.appendChild(gridSquare);
    }
}

const slider = document.querySelector('.slider');
let boardSize = document.createElement('h3');
boardSize.textContent = "Current board size: " + slider.value + "x" + slider.value;



var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var value = rootStyles.getPropertyValue('--value');

slider.oninput = function() {
    value = slider.value;
    boardSize.textContent = "Current board size: " + value + "x" + value;
    
     
    gridContainer.setAttribute("style", "grid-template-columns: repeat(" + this.value + ", 1fr)");
    createGrid(value);
}

const info = document.querySelector('.info');
info.appendChild(boardSize);

createGrid(value);
