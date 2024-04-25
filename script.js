document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector(".container");

for (i = 0; i < 16 * 16; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    container.appendChild(div);
}

const boxes = document.querySelectorAll('.grid-item')
boxes.forEach (box => {
    box.addEventListener('mouseover', function(event) {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        box.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    });
});
});