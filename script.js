// NOTE: Mouse States
/*
    1. Active: When mouse clicks inside grid
        a. Solid: Paints solid color over any grid cell that is hovered (mouseenter)
        b. Rainbow: Paints random color over any grid cell that is hovered (mouseenter)
    2. Inactive (Active toggled off): Default
*/
const mouse = document.createElement("div");
const grid = document.querySelector(".grid");

const solidButton = document.querySelector(".solid");
const rainbowButton = document.querySelector(".rainbow");
const resizeButton = document.querySelector(".resize");
const eraseButton = document.querySelector(".erase");

mouse.classList.add("solid"); //default brush type


// cells.forEach((cell) => {
//     cell.addEventListener('mouseenter', colorCell);
// });
grid.addEventListener('click', toggleActive);
grid.addEventListener('mouseenter', colorCell, {capture:true});
solidButton.addEventListener('click', toggleBrush);
rainbowButton.addEventListener('click', toggleBrush);
resizeButton.addEventListener('click', resizeGrid)


function colorCell(e) {
    console.log(`${e.target.classList}`);

    if(mouse.classList.contains("active")) {
        if(mouse.classList.contains("solid")){
            if(e.target.classList.contains("cell")){
                e.target.style.background = "black";
            }
        }
        else if(mouse.classList.contains("rainbow")) {
            if(e.target.classList.contains("cell")){
                e.target.style.backgroundColor = randomColor();
            }
        }
    }
}

function toggleActive(e) {
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

function toggleBrush(e) {
    if(e.target.classList.contains("solid")) {
        if(mouse.classList.contains("rainbow")){
            mouse.classList.toggle("solid");
            mouse.classList.toggle("rainbow");
        }
    }
    else if(e.target.classList.contains("rainbow")) {
        if(mouse.classList.contains("solid")){
            mouse.classList.toggle("solid");
            mouse.classList.toggle("rainbow");
        }
    }
}

function resizeGrid() { 
    // 1. get square dimensions of grid
    // using gridPrompt this way feels poorly written but idk how to make it better
    let gridLen = gridPrompt();
    if(isNaN(gridLen)) {alert("error in grid resize. please enter number <= 100."); return;}
    let gridSize = gridLen ** 2;


    if(gridSize !== grid.childElementCount) {
        grid.innerHTML = "";

        // 3. add / remove children 
        if(gridSize > grid.childElementCount){
            while(gridSize > grid.childElementCount)
            {
                const newCell = document.createElement("div");
                newCell.className = "cell";
                
                grid.appendChild(newCell);
            }

            console.log(`grid: ${grid.childElementCount}`);

            grid.style.gridTemplateColumns = `repeat(${gridLen}, auto)`;
            grid.style.gridTemplateRows = `repeat(${gridLen}, auto)`;
        }
    }


    // 4. refactors grid properties to evenly space divs
}

function gridPrompt() {
    let size;
    do{ 
        size = prompt("Please enter an integer <= 100");
        if(size === "" || size === null)  {return;}
        else {size = parseInt(size);}

        // console.log(`${size} and ${typeof(size)}`);
    }while(size > 100 || !Number.isInteger(size));

    return size;
}