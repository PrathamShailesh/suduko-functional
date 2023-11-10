const nickname = localStorage.getItem("playerName");

//generating random numbers from 1-3;
const randomNumber = Math.floor(Math.random() * 3) + 1;


//lost message phrases
var lost_messge = [
  `You Lost! Back to the drawing board  ${nickname} -you will crack it next time.!`,
  `Bad luck, ${nickname}! The complexity of this puzzle outsmarted you this round.`,
];
//win message phrase
var win = [
    `Congragulations! ${nickname} you've Solved the Sudoku master and conquered the board!`,
    `Congragulations! ${nickname} you've Achieved Sudoku supremacy and cracked the ultimate puzzle!`
    
]


var win_message = [`Congratulations! ${nickname} You've conquered the Sudoku puzzle! Great job!`];
var lose_message = [`You Lost ! Better Luck Next Time ${nickname}`];

//if the random number is 2 or 3 it will change the initial message
if (randomNumber === 2) {
  win_message = win[0].slice();
  lose_message = lost_messge[0].slice();
} else if (randomNumber === 3) {
  win_message = win[1].slice();
  lose_message = lost_messge[1].slice();
}


//lose audio
let lost = new Audio("lose.mp3");

window.onload = function () {
  const gameState = localStorage.getItem("gameState");
  const wrong = localStorage.getItem("wrong");
  const time = localStorage.getItem("time");
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
//if the player wins or loses the score and win phrase should display 
  if (gameState === "win") {
    document.querySelector(".win").innerText = win_message;
    document.querySelector(".try h2").innerText = "Wrong Tries-" + wrong;
    document.querySelector(
      ".time h2"
    ).innerText = `Time Taken: ${minutes} : ${seconds} `;
  } else {
    lost.play();
    document.querySelector(".win").innerText = lose_message;
    document.querySelector(".try h2").innerText = "Wrong Tries-" + wrong;
    document.querySelector(
      ".time h2"
    ).innerText = `Time Taken: ${minutes} : ${seconds} `;
  }
};
