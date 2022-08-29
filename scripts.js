const gridContainer = document.querySelector('.grid-container');
document.body.appendChild(gridContainer);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

var colorPickerText = document.createElement('h2');
colorPickerText.textContent = "Color Picker";


var colorPicker = document.createElement('input');
colorPicker.setAttribute("type", "color");
colorPicker.textContent = "Color Picker";
var color = colorPicker.value;
colorPicker.oninput = function() {
    color = colorPicker.value;
}


const slider = document.querySelector('.slider');
let boardSize = document.createElement('h3');
boardSize.textContent = "Current board size: " + slider.value + "x" + slider.value;


var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var value = rootStyles.getPropertyValue('--value');

function createGrid(size) {
    removeAllChildNodes(gridContainer);
    for (let i = 0; i < size * size; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.toggle('grid-square');
        gridSquare.addEventListener('mouseover', function() {
            gridSquare.setAttribute("style", "background-color: " + color + "");
        });
        gridContainer.appendChild(gridSquare);
    }
}

var clearButton = document.createElement('button');
clearButton.textContent = "Clear board"
clearButton.onclick = function() {
    createGrid(value);
}


slider.oninput = function() {
    value = slider.value;
    boardSize.textContent = "Current board size: " + value + "x" + value;
    
     
    gridContainer.setAttribute("style", "grid-template-columns: repeat(" + this.value + ", 1fr)");
    createGrid(value);
}

const info = document.querySelector('.info');
info.appendChild(boardSize);
info.appendChild(colorPickerText);
info.appendChild(colorPicker);
info.appendChild(clearButton);


createGrid(value);
