document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector(".container");
    let mouseDown = false;
    let rainbowMode = false;
    const defaultSize = 16;

    createGrid(container, defaultSize);
    function createGrid(container, size) {
        container.style.setProperty('--grid-size', size)
        for (let i = 0; i < size * size; i++) {
            const div = document.createElement("div");
            div.classList.add("grid-item");
            container.appendChild(div);
    }
}
const clearButton = document.querySelector('#clear-grid');
clearButton.addEventListener('click', clearGrid);

const changeGridButton = document.querySelector('#change-grid');
changeGridButton.addEventListener('click', changeGrid);

const rainbowButton = document.querySelector('#toggle-rainbow');
rainbowButton.addEventListener('click', toggleRainbow);

container.addEventListener('mousedown', handleMouseDown);
container.addEventListener('mouseover', handleMouseOver);
container.addEventListener('mouseup', handleMouseUp);
container.addEventListener('mouseleave', handleMouseLeave);

function handleMouseDown(event) {
    if (event.target.classList.contains('grid-item')) {
        mouseDown = true;
        changeColor(event.target);
    }
}

function handleMouseOver(event) {
    if (mouseDown && event.target.classList.contains('grid-item')) {
        changeColor(event.target);
    }
}

function handleMouseUp() {
    mouseDown = false;
}

function handleMouseLeave() {
    mouseDown = false;
}

function toggleRainbow() {
    if (rainbowMode === false) {
        rainbowMode = true;
    }
    else if (rainbowMode === true) {
        rainbowMode = false;
    }
}

function changeColor(box) {
    if (rainbowMode === true) {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        box.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
    else {
        box.style.backgroundColor = 'black';
    }
};

function changeGrid() {
    const newSize = parseInt(prompt('Enter new size'));
    if (newSize && !isNaN(newSize) && newSize > 0 && newSize < 25) {
        clearGrid();
        createGrid(container, newSize);
    } else {
        alert('Please enter a valid width.');
    }
}

function clearGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => item.style.backgroundColor = '');
}
});