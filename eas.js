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
document.querySelector('.button').addEventListener('click', promptGridSize)

function promptGridSize () {
    let promptUser = prompt("Please enter the number of squares per side for the new grid");
    return (promptUser);
}

createInitialGrid ();

