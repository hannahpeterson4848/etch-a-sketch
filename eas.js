let initialGrid = (16*16);
function createInitialGrid () {
    for (let i=0; i<initialGrid; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('initialGrid');
        container.appendChild(newDiv);
    }
}
createInitialGrid ();