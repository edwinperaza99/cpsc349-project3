import toggleTeam from "./modules/toggle-team.js";
import { createCards } from "./modules/team-cards.js";

const team = document.getElementById("team");
createCards();

team.addEventListener("click", () => {
  toggleTeam();
});

// const rock = document.querySelector("#Rock");
// const scissor = document.querySelector("#Scissor");
// const paper = document.querySelector("#Rock");

// const playerScore = 0;
// const computerScore = 0;
// const roundNumber = 0;

// rock.addEventListener("click", () => {
//   // make selection for first player
//   let player = "rock";
//   let computer = selectionAI();
//   determineWinner(player, computer);
//   updateRound();
// });

// paper.addEventListener("click", () => {
//   // make selection for first player
//   let player = "paper";
//   let computer = selectionAI();
//   determineWinner(player, computer);
//   updateRound();
// });

// scissor.addEventListener("click", () => {
//   // make selection for first player
//   let player = "scissor";
//   let computer = selectionAI();
//   determineWinner(player, computer);
//   updateRound();
// });

// function selectionAI() {
//   // randomize function here
//   let randomNum = Math.floor(Math.random() * 3) + 1;
//   switch (randomNum) {
//     //took out quotes
//     case 0:
//       return "rock";
//     case 1:
//       return "paper";
//     case 2:
//       return "scissor";
//   }
// }

// function determineWinner(player, computer) {
//   // add code here
//   if (player === computer) {
//     //return tie
//     return "It's a Tie";
//   } else if (player === "scissor" && computer === "paper") {
//     // return player wins
//     updateScore();
//     return "You Won";
//   } else if (player === "scissor" && computer === "rock") {
//     // return computer wins
//     updateScore();
//     return "You Lost";
//   } else if (player === "paper" && computer === "scissor") {
//     // return computer wins
//     updateScore();
//     return "You Lost";
//   } else if (player === "paper" && computer === "rock") {
//     // return player wins
//     updateScore();
//     return "You Won";
//   } else if (player === "rock" && computer === "paper") {
//     // return computer wins
//     updateScore();
//     return "You Lost";
//   } else if (player === "rock" && computer === "scissor") {
//     // return player wins
//     updateScore();
//     return "You Won";
//   }
// }
