const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');


//function createInitialGrid (){
  //  for (i=1;i<=16;i++) {
    //    const ("content" + i) = document.createElement('div');
    //}
//}

let initialGrid = (16*16);

function createInitialGrid () {
    //let fragment = document.createDocumentFragment ();
    for (let i=0; i<=initialGrid; i++) {
        let e = document.createElement('div');
        
        e.innerHTML = initialGrid[i];
        container.appendChild(e);
    }
}

createInitialGrid ();