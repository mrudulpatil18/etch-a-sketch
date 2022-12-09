
const container = document.querySelector('.container');


function covered(e){
    this.classList.add('covered');
}

function createGrid(l){
    let a = `${500/l}px`;
    for(let i = 1; i<=l; i++){
        let line = document.createElement('div');
        line.classList.add(`line`);
        for(let j = 1; j <=l; j++){
            let coloumn = document.createElement('div');
            coloumn.style.width = a;
            coloumn.style.height = a;
            coloumn.classList.add(`coloum`);
            line.appendChild(coloumn);
        }
        container.appendChild(line);
    }
    const boxes = document.querySelectorAll('.coloum');
    boxes.forEach(box=> {
        box.addEventListener('mouseover', covered);
    })

}



function reset(){
    const lines = document.querySelectorAll('.line');
    const boxes = document.querySelectorAll('.coloum');
    boxes.forEach(box=> {
        box.remove();
    })
    lines.forEach(line=> {
        line.remove();
    })
    let width = 1000;
    while(width > 100 || width < 1){
        width = prompt("Enter Grid Size", "eg. 20");
    }
    createGrid(width);
}

createGrid(16);