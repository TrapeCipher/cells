const textLines = [
    "სათაური... ",
    "უჯრედების გაგება მათი სტრუქტურა,",
    "ფუნქციები და შესწავლა"
];

const container = document.getElementById("typewriter");

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
    if (lineIndex < textLines.length) {
        let currentLine = textLines[lineIndex];
        let newElement = document.createElement("p"); // Create a new paragraph for each line
        container.appendChild(newElement);
        
        let interval = setInterval(() => {
            if (charIndex < currentLine.length) {
                newElement.textContent += currentLine[charIndex];
                charIndex++;
            } else {
                clearInterval(interval);
                charIndex = 0;
                lineIndex++;
                setTimeout(typeLine, 1000); // Delay before the next line starts typing
            }
        }, 100); // Adjust typing speed (milliseconds per character)
    }
}

typeLine();



function openModal() {
    document.getElementById("myModal").style.display = "flex";
}
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}