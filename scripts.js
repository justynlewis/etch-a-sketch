const gridContainer = document.querySelector('.grid-container');
document.body.appendChild(gridContainer);

function createGrid() {
    for (let i = 0; i < 256; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.toggle('grid-square');
        gridSquare.addEventListener('mouseover', function() {
            gridSquare.setAttribute("style", "background-color: black");
        });
        gridContainer.appendChild(gridSquare);
    }
}

const slider = document.querySelector('.slider');
let boardSize = document.createElement('p');
boardSize.textContent = slider.ariaValueMax(

/* const info = document.querySelector('.info');
info.appendChild(boardSize); */


createGrid();
