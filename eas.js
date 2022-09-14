const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');


//function createInitialGrid (){
  //  for (i=1;i<=16;i++) {
    //    const ("content" + i) = document.createElement('div');
    //}
//}

let initialGrid = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'];

function createInitialGrid () {
    //let fragment = document.createDocumentFragment ();
    for (let i=0; i<initialGrid.length; i++) {
        let e = document.createElement('div');
        e.innerHTML = initialGrid[i];
        container.appendChild(e);
    }
}

createInitialGrid ();