document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector(".container");
    let mouseDown = false;
    const defaultSize = 16;

    createGrid(container, defaultSize); 
    function createGrid(container, size) {
        for (let i = 0; i < size * size; i++) {
            const div = document.createElement("div");
            div.classList.add("grid-item");
            container.appendChild(div);
    } 
}
const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearGrid);

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

function changeColor(box) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    box.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
};

function clearGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => item.style.backgroundColor = '');
}
});