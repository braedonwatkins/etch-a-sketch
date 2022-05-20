// NOTE: Mouse States
/*
    1. Active: When mouse clicks inside grid
        a. Solid: Paints solid color over any grid cell that is hovered (mouseenter)
        b. Rainbow: Paints random color over any grid cell that is hovered (mouseenter)
    2. Inactive (Active toggled off): Default
*/


const cells = document.querySelectorAll(".cell");
const mouse = document.createElement("div");
const grid = document.querySelector(".grid");

mouse.classList.add("solid");


cells.forEach((cell) => {
    cell.addEventListener('mouseenter', colorCell);
});

grid.addEventListener('click', toggleBrush);


function colorCell(e) {
    if(mouse.classList.contains("active")) {
        if(mouse.classList.contains("solid")){
            e.target.style.background = "black";
        }
        else if(mouse.classList.contains("rainbow")) {
            e.target.style.backgroundColor = randomColor();
        }
    }
}

function toggleBrush(e) {
    mouse.classList.toggle("active");
    console.log(`${mouse.classList}`);
}

function randomColor() {
    let r = Math.floor(Math.random() * 255).toString();
    let g = Math.floor(Math.random() * 255).toString();
    let b = Math.floor(Math.random() * 255).toString();
    // let a = Math.floor(Math.random()).toString();

    return (`rgb(${r},${g},${b})`);
}