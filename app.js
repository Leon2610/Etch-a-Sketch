const container = document.getElementById('container');
const buttonsContainer = document.querySelector('.buttons');
const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
const btnRGB = document.createElement('button');
const btnSize = document.createElement('button');
const btnReset = document.createElement('button');

function drawTable(col, row) {
    for (let i = 0; i < (col * row); i++) {
        const div = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        container.appendChild(div).classList.add('box');
    }
}

function grayColor() {
    const boxs = container.querySelectorAll('.box');
    btnGray.textContent = 'Gray';
    btnGray.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let Rnum = Math.floor(Math.random() * 255);
            box.style.background = `rgb(${Rnum}, ${Rnum}, ${Rnum})`;
        }))
    })
    buttonsContainer.appendChild(btnGray).classList.add('btn');
}

function Color() {
    const boxs = container.querySelectorAll('.box');
    btnRGB.textContent = 'RGB Color';
    btnRGB.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 255);
            let G = Math.floor(Math.random() * 255);
            let B = Math.floor(Math.random() * 255);
            box.style.background = `rgb(${R}, ${G}, ${B})`;
        }))
    })
    buttonsContainer.appendChild(btnRGB).classList.add('btn');
}

function BlackColor() {
    const boxs = container.querySelectorAll('.box');
    btnBlack.textContent = 'Black Color';
    btnBlack.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black';
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn');
}

function reset() {
    /* const boxs = container.querySelectorAll('.box');
    btnReset.textContent = 'Reset';
    btnReset.addEventListener('click', () => {
        boxs.forEach(box => box.style.background = 'white');
    })
    buttonsContainer.appendChild(btnReset).classList.add('btn'); */
    const boxs = container.querySelectorAll('.box');
    boxs.forEach(box => box.remove());
}

function resize() {
    btnSize.textContent = 'Resize';
    btnSize.addEventListener('click', () => {
        let size = prompt('How much do you want the grid to be?');
        if (size === null || size < 1 || size > 41) {
            reset();
            drawTable(16,16);
            grayColor();
            Color();
            BlackColor();
        } else {
            reset();
            drawTable(size,size);
            grayColor();
            Color();
            BlackColor();
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn');
}

drawTable(16,16);
grayColor();
Color();
BlackColor();
resize();

