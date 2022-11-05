
let size = document.querySelector(".size")
let paintArea = document.querySelector(".paint-area")
let picker = document.querySelector(".color-palette");
let colorMode = document.querySelector(".color-mode-btn");
let rainbowMode = document.querySelector(".rainbow-btn");
let earsierMode = document.querySelector(".earser-btn")
let clearAll = document.querySelector(".clearall-btn")

let currentMode = colorMode;

function createGrid(sizeVal){

    for (let i = 0; i < sizeVal*sizeVal; i++) {
        let pixel = document.createElement("div");
        paintArea.appendChild(pixel);
        pixel.addEventListener("mouseover",changeColor)
        pixel.addEventListener("mousedown",changeColor)
    }
    paintArea.style.gridTemplateRows = `repeat(${sizeVal}, 1fr)`;
    paintArea.style.gridTemplateColumns = `repeat(${sizeVal}, 1fr)`;
}

function clearGrid(){
    paintArea.innerHTML = "";
    createGrid(size.value);
}

function changeColor(e){
   if(currentMode == colorMode){
    e.target.style.backgroundColor = picker.value;
   }
   if(currentMode == rainbowMode){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${r},${g},${b})`
   }
   if(currentMode == earsierMode){
    e.target.style.backgroundColor = "white"
   }
}

function changeMode(mode){
    currentMode = mode;
}

size.onchange = () => {
    clearGrid()
    createGrid(size.value);
}


window.onload = () => {
    createGrid("16");
}

colorMode.onclick = () => changeMode(colorMode)
rainbowMode.onclick = () => changeMode(rainbowMode);
earsierMode.onclick = () => changeMode(earsierMode);
clearAll.onclick = () => clearGrid();