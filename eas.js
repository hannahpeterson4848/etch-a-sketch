let initialGrid = (16*16);

function createInitialGrid () {
    for (let i=0; i<initialGrid; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('initialGrid');
        container.appendChild(newDiv);
        newDiv.addEventListener("mouseenter", function () {
            newDiv.style.cssText = "background-color: blue";
        });
    }
}

createInitialGrid ();

document.querySelector('.button').addEventListener('click', promptGridSize)

const gridElement = document.getElementById("container");

function promptGridSize () {
    let promptUser = prompt("Please enter a number, between 1 and 100, for the numbers of squares per side of the new grid");
    if (promptUser < 100 && promptUser > 0) {
            updateGrid (promptUser);
        } else if (promptUser === null){
            return;
        } else {
            promptGridSize ();
    }
}

function updateGrid (promptUser) {
    gridElement.style.gridTemplateColumns = "repeat(promptUser, 8px)";
    gridElement.style.gridTemplateRows = "repeat(promptUser, 8px)";
    body.appendChild(gridElement);
    console.log(promptUser);
    
}



