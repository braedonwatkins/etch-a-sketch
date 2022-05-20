const cells = document.querySelectorAll(".cell");
const grid = document.querySelector(".grid");
console.log(`${cells}`);


cells.forEach((cell) => {
    cell.addEventListener('mouseenter', () => console.log('cell'));
});

grid.addEventListener('click', () => console.log('grid'));



// NOTE: Mouse States
/*
    1. Active: When mouse clicks inside grid
        a. Solid: Paints solid color over any grid cell that is hovered (mouseenter)
        b. Rainbow: Paints random color over any grid cell that is hovered (mouseenter)
    2. Inactive (Active toggled off): Default
*/

let active = true;
let brush = "solid";

