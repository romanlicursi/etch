let container = document.getElementById(`container`);
let erase = document.getElementById(`erase`)

for (let i = 0; i < 256; i++) {
    let square = document.createElement(`div`);
    square.classList.add(`square`);
    square.addEventListener(`mouseover`, function(e) {
        e.target.style.backgroundColor = getRandomColor();
    });
    container.appendChild(square);
}   

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

erase.addEventListener(`click`, function() {

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let choice = prompt("How many squares would you like each side to be?");

    choice = Math.floor(choice);

    while (isNaN(choice) || choice > 100 || choice < 1) {
        alert("Your number is invalid! Pick a number from 1 to 100.")
        choice = prompt("How many squares would you like each side to be?");
    }

    // Assuming a 1px border on each side of a square
    const borderSize = 1; // Border size in pixels
    const totalBorderPerSquare = borderSize * 2; // Total border size per square (left + right)

    // Adjust squareSize calculation to account for borders
    const squareSize = (192 - (choice * totalBorderPerSquare)) / choice;

    for (let i = 0; i < choice * choice; i++) {
        let square = document.createElement(`div`);
        square.classList.add(`square`); 
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.border = `${borderSize}px solid black`; // Set border size and style
        square.addEventListener(`mouseover`, function(e) {
            e.target.style.backgroundColor = getRandomColor();
        });
        container.appendChild(square);
    }
})