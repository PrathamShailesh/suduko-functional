const nickname=localStorage.getItem('playerName')

console.log(nickname)


const win_message=`Congratulations! ${nickname} You've conquered the Sudoku puzzle! Great job!`;
const lose_message=`You Lost ! Better Luck Next Time ${nickname}`

let lost = new Audio("/lose.mp3")

window.onload = function() {
    const gameState = localStorage.getItem('gameState');
    const wrong = localStorage.getItem('wrong')
    const time =localStorage.getItem('time')
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    
    if (gameState === 'win' ) {
        document.querySelector(".win").innerText = win_message;
        document.querySelector(".try h2").innerText= 'Wrong Tries-'+wrong;
        // document.querySelector(".time h2").innerText= 'Time Taken-'+time;
        document.querySelector(".time h2").innerText = `Time Taken: ${minutes} : ${seconds} `;
    } else {
        lost.play()
        document.querySelector(".win").innerText = lose_message;
        document.querySelector(".try h2").innerText= 'Wrong Tries-'+wrong;
        document.querySelector(".time h2").innerText = `Time Taken: ${minutes} : ${seconds} `;
    }
};