import toggleTeam from "./modules/toggle-team.js";
import { createCards } from "./modules/team-cards.js";

const team = document.getElementById("team");
createCards();

team.addEventListener("click", () => {
	toggleTeam();
});

// localStorage.setItem("rounds", "0");
function displayButtons() {
	if (
		localStorage.getItem("rounds") === null ||
		localStorage.getItem("rounds") === "0"
	) {
		document.querySelector("#buttons").classList.add("hidden");
	}
}
displayButtons();

// This function will determine if the continue button should appear or not
function displayContinue() {
	if (localStorage.getItem("rounds") !== undefined) {
		// display button
		// change attribute
	}
}

const rock = document.querySelector("#Rock");
const scissor = document.querySelector("#Scissor");
const paper = document.querySelector("#Paper");

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

rock.addEventListener("click", () => {
	// make selection for first player

	let player = "rock";
	let computer = selectionAI();

	changeImage(player, computer);
	let result = determineWinner(player, computer);

	console.log("player score: ", playerScore);
	console.log("computer score: ", computerScore);
	roundNumber++;

	document.getElementById("round_number").textContent = roundNumber;
	// call update round to display message of round on screen and do roundNumber there too
	// updateRound();
});

paper.addEventListener("click", () => {
	// make selection for first player

	let player = "paper";
	let computer = selectionAI();

	changeImage(player, computer);
	let result = determineWinner(player, computer);

	console.log("player score: ", playerScore);
	console.log("computer score: ", computerScore);
	roundNumber++;

	document.getElementById("round_number").textContent = roundNumber;
	// updateRound();
});

scissor.addEventListener("click", () => {
	// make selection for first player

	let player = "scissor";
	let computer = selectionAI();

	changeImage(player, computer);
	let result = determineWinner(player, computer);

	console.log("player score: ", playerScore);
	console.log("computer score: ", computerScore);
	roundNumber++;

	document.getElementById("round_number").textContent = roundNumber;
	// updateRound();
});

function selectionAI() {
	// randomize function here
	let randomNum = Math.floor(Math.random() * 3) + 1;
	switch (randomNum) {
		//took out quotes
		case 1:
			return "rock";
		case 2:
			return "paper";
		case 3:
			return "scissor";
	}
}

function determineWinner(player, computer) {
	// add code here
	if (player === computer) {
		//return tie

		const won = document.querySelector("#whoWon");
		won.textContent = "It's a Tie";
		return "It's a Tie";
	} else if (
		(player === "scissor" && computer === "paper") ||
		(player === "paper" && computer === "rock") ||
		(player === "rock" && computer === "scissor")
	) {
		// return player wins
		updateScore("player");
		const won = document.querySelector("#whoWon");
		won.textContent = "You Won This Round!";

		return "You Won";
	} else if (
		(player === "scissor" && computer === "rock") ||
		(player === "paper" && computer === "scissor") ||
		(player === "rock" && computer === "paper")
	) {
		// return computer wins
		updateScore("computer");
		const won = document.querySelector("#whoWon");
		won.textContent = "Computer Won This Round!";

		return "You Lost";
	}
}

function updateScore(winner) {
	if (winner === "player") {
		playerScore++;
	} else if (winner === "computer") {
		computerScore++;
	}
}

function updateStorage() {
	// add code here to update storage
	localStorage.setItem("playerScore", playerScore);
	localStorage.setItem("computerScore", computerScore);
	localStorage.setItem("rounds", roundNumber);
}

function changeImage(player, computer) {
	const firstSelection = document.querySelector("#player_selection");
	const secondSelection = document.querySelector("#computer_selection");
	switch (player) {
		case "rock":
			firstSelection.src = "../src/emojis/rock.webp";
			break;
		case "paper":
			firstSelection.src = "../src/emojis/paper.webp";
			break;
		case "scissor":
			firstSelection.src = "../src/emojis/scissors.webp";
			break;
	}
	switch (computer) {
		case "rock":
			secondSelection.src = "../src/emojis/rock.webp";
			break;
		case "paper":
			secondSelection.src = "../src/emojis/paper.webp";
			break;
		case "scissor":
			secondSelection.src = "../src/emojis/scissors.webp";
			break;
	}
}
