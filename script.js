
const container = document.querySelector('.container');

for(let i = 1; i<=16; i++){
    let line = document.createElement('div');
    line.classList.add(`line`);
    for(let j = 1; j <=16; j++){
        let coloumn = document.createElement('div');
        coloumn.classList.add(`coloum`);
        line.appendChild(coloumn);
    }
    container.appendChild(line);
}

const lines = document.querySelectorAll('.line');
lines.forEach(line=> {
    
})

const boxes = document.querySelectorAll('.coloum');
boxes.forEach(box=> {
    
})
