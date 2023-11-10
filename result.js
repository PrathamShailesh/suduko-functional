const nickname=localStorage.getItem('playerName')

const randomNumber = Math.floor(Math.random() * 3) + 1

var win_message2=`Congragulations! ${nickname} you've Solved the Sudoku master and conquered the board!`
var win_message3=`Congragulations! ${nickname} you've Achieved Sudoku supremacy and cracked the ultimate puzzle!`
var lose_message2=`You Lost! Back to the drawing board  ${nickname} -you will crack it next time.!`
var lose_message3=`Bad luck, ${nickname}! The complexity of this puzzle outsmarted you this round.`

var win_message=`Congratulations! ${nickname} You've conquered the Sudoku puzzle! Great job!`;
var lose_message=`You Lost ! Better Luck Next Time ${nickname}`

if (randomNumber === 2) {
    win_message = win_message2.slice(); 
    lose_message=lose_message2.slice()
  
}
else if(randomNumber===3){
    win_message=win_message3.slice();
    lose_message=lose_message3.slice()

}

let lost = new Audio("lose.mp3")

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