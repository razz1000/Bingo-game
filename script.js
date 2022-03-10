/* window.onload(onLoadFunction);

let onLoadFunction = () => { 
}
 */

// Creating the 76 numbers for the bingo Board
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

//This below is the function for the buttonClickRandomNumberGenerator   
 let buttonClickRandomNumberGenerator = () => {
    let newBingoNumber = document.querySelectorAll(".bingo-number")

    function getRandomNumber() { 
        var randomNumber = Math.floor( Math.random() * 76 ) + 1; return randomNumber; } 
        let dieroll = getRandomNumber();

    for (let i = 1; i < newBingoNumber.length; i++) {
    if (dieroll === parseInt(newBingoNumber[i].innerText)) {

        newBingoNumber[i].classList.add("highlighted-cell")
        buttonClickRandomNumberGenerator;            
    }
    }
}



let totalUserBoardNumbers = 24;
 
let createUserBoard = () => {
    let userBoardNumber = document.querySelector(".userboard-frame");
    for (let i = 1; i <= totalUserBoardNumbers; i++) {
        let newUserBoardNumber = document.createElement("div")
        newUserBoardNumber.innerText += i 
        userBoardNumber.appendChild(newUserBoardNumber);
        newUserBoardNumber.classList.add("userboard-number")
    }
}
createUserBoard();