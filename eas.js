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

function promptGridSize () {
    let promptUser = prompt("Please enter a number, between 1 and 100, for the numbers of squares per side of the new grid");
    if (promptUser < 100 && promptUser > 0) {
            updateGrid ();
        } else if (promptUser === null){
            return;
        } else {
            promptGridSize ();
    }
}

const gridElement = document.querySelector("#container");

function updateGrid () {
    gridElement.style["grid-template-columns"] = "repeat(promptUser)";
    gridElement.style["grid-template-rows"] = "repeat(promptUser)";
    body.appendChild(gridElement);
}



