/* window.onload(onLoadFunction);

let onLoadFunction = () => { 
}
 */



// Creating the 76 numbers 
let totalBingoNumbers = 76;
 
let createBingoNumbers = () => {
    let bingoNumbers = document.querySelector(".bingo-frame");
    for (let i = 1; i <= totalBingoNumbers; i++) {
        let newBingoNumber = document.createElement("div")
        newBingoNumber.innerText += i 
        bingoNumbers.appendChild(newBingoNumber);
        newBingoNumber.classList.add("bingo-number")
    }
}
createBingoNumbers();
