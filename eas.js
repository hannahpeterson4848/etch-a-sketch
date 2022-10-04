let initialGrid = (16*16);

//create initial 16 div x 16 div grid
function createInitialGrid () {
    for (let i=0; i<initialGrid; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('initialGrid');
        initialContainer.appendChild(newDiv);
        //add the 'hover' effect for the etch-a-sketch
        newDiv.addEventListener("mouseenter", function () {
            newDiv.style.cssText = "background-color: blue";
        });
    }
}

//createInitialGrid ();

document.querySelector('.button').addEventListener('click', promptGridSize)

//prompt user to enter a number from 0-100
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

//update the grid per the number the user input
function updateGrid (promptUser) {
    let newGridDivs = (+promptUser)*(+promptUser);
    for (let i=0; i<newGridDivs; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('userGrid');        
        container.appendChild(newDiv);
        //add the 'hover' effect for the etch-a-sketch
        newDiv.addEventListener("mouseenter", function () {
            newDiv.style.cssText = "background-color: blue";
        });
    }
        const newContainer = document.querySelector("#container");
        newContainer.style.gridTemplateColumns = `repeat(${+promptUser}, 1fr)`;
        newContainer.style.gridTemplateRows = `repeat(${+promptUser}, 1fr)`;
}


