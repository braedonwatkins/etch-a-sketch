// NOTE: Mouse States
/*
    1. Active: When mouse clicks inside grid
        a. Solid: Paints solid color over any grid cell that is hovered (mouseenter)
        b. Rainbow: Paints random color over any grid cell that is hovered (mouseenter)
    2. Inactive (Active toggled off): Default
*/
let mouse = document.createElement("div");
mouse.classList.add("active"); // should be false but for testing we will have this to true
let brush = "solid";


const cells = document.querySelectorAll(".cell");
const grid = document.querySelector(".grid");
console.log(`${cells}`);

cells.forEach((cell) => {
    cell.addEventListener('mouseenter', colorCell);
});

grid.addEventListener('click', toggleBrush);


function colorCell(e) {
    if(mouse.classList.contains("active")) {
        if(brush === "solid"){
            e.target.style.background = "black";
        }
        else if(brush === "rainbow") {

        }
    }
}

function toggleBrush(e) {
    mouse.classList.toggle("active");
    console.log(`${mouse.classList}`);
}
