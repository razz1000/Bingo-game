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


// Function for callling the random number 
let randomNumberGenerated = Math.floor(Math.random() * 76);




  
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
   

/* 
let buttonClickRandomNumberGenerator = () => {
    let newBingoNumber = document.querySelectorAll(".bingo-number")[0]
    newBingoNumber.classList.add("highlighted-cell")
    
}
 */


/*  
    var random;
    var max = 8
    function findRandom() {
      random = Math.floor(Math.random() * max) //Finds number between 0 - max
      console.log(random)
    }
    findRandom();

    let randomNumber = findRandom(). */
