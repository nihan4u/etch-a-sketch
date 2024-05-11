document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector(".container");
    let mouseDown = false;
    let rainbowMode = false;
    let opacityMode = false
    let eraserMode = false;
    let defaultSize = 16;

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

const opacityButton = document.querySelector('#toggle-opacity');
opacityButton.addEventListener('click', toggleOpacity);

const eraserButton = document.querySelector('#toggle-eraser');
eraserButton.addEventListener('click', toggleEraser);

container.addEventListener('mousedown', handleMouseEvent);
container.addEventListener('mouseover', handleMouseEvent);
container.addEventListener('mouseup', handleMouseEvent);
container.addEventListener('mouseleave', handleMouseEvent);;

function handleMouseEvent(event) {
    if (event.target.classList.contains('grid-item')) {
        if (event.type === 'mousedown') {
            mouseDown = true;
            changeColor(event.target);
        } else if (event.type === 'mouseover' && mouseDown) {
            changeColor(event.target);
        } else if (event.type === 'mouseup') {
            mouseDown = false;
        }
    } else if (event.type === 'mouseleave') {
        mouseDown = false;
    }
}

function toggleRainbow() {
    rainbowMode = !rainbowMode;
}

function toggleOpacity() {
    opacityMode = !opacityMode;
}

function toggleEraser() {
    eraserMode = !eraserMode;
}

function changeColor(box) {
    if (rainbowMode === true) {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        box.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (eraserMode === true) {
        box.style.backgroundColor = '';
    } else {
        box.style.backgroundColor = 'black';
    }
};

function getCurrentOpacity() {
    const currentColor = window.getComputedStyle(box).getPropertyValue('background-color');
    const currentOpacity = parseFloat(currentColor.split())
}

function darkenBox(box) {
    if (opacityMode === true) {
        interactions++;
        const newOpacity = Math.min(getCurrentOpacity(box) + 0.1, 1);
        box.style.backgroundColor = `rgba(0, 0, 0, ${newOpacity}`;
    }
}

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