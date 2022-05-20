const cells = document.querySelectorAll(".cell");
const grid = document.querySelector(".grid");
console.log(`${cells}`);

cells.forEach((cell) => {
    cell.addEventListener('mouseenter', colorCell);
});

grid.addEventListener('click', toggleBrush);


function colorCell(e) {
    console.log('cell');
}

function toggleBrush(e) {
    console.log('grid');
}

// NOTE: Mouse States
/*
    1. Active: When mouse clicks inside grid
        a. Solid: Paints solid color over any grid cell that is hovered (mouseenter)
        b. Rainbow: Paints random color over any grid cell that is hovered (mouseenter)
    2. Inactive (Active toggled off): Default
*/

let active = true; // should be false but for testing we will have this to true
let brush = "solid";

