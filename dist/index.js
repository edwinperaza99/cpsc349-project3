const rock = document.querySelector("#Rock");
const scissor = document.querySelector("#Scissor");
const paper = document.querySelector("#Paper");

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

rock.addEventListener("click", () => {
	// make selection for first player
	console.log("rock was selected");
	let player = "rock";
	let computer = selectionAI();
	console.log(computer);
	let result = determineWinner(player, computer);
	console.log(result);
	console.log("player score: ", playerScore);
	console.log("computer score: ", computerScore);
	roundNumber++;
	console.log("We are in round: ", roundNumber);
	// call update round to display message of round on screen and do roundNumber there too
	// updateRound();
});

paper.addEventListener("click", () => {
	// make selection for first player
	console.log("paper was selected");
	let player = "paper";
	let computer = selectionAI();
	console.log(computer);
	let result = determineWinner(player, computer);
	console.log(result);
	console.log("player score: ", playerScore);
	console.log("computer score: ", computerScore);
	roundNumber++;
	console.log("We are in round: ", roundNumber);
	// updateRound();
});

scissor.addEventListener("click", () => {
	// make selection for first player
	console.log("scissor was selected");
	let player = "scissor";
	let computer = selectionAI();
	console.log(computer);
	let result = determineWinner(player, computer);
	console.log(result);
	console.log("player score: ", playerScore);
	console.log("computer score: ", computerScore);
	roundNumber++;
	console.log("We are in round: ", roundNumber);
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
		// const resultMessage = document.querySelector("#Result");
		// resultMessage.textContent = "It's a Tie";
		return "It's a Tie";
	} else if (
		(player === "scissor" && computer === "paper") ||
		(player === "paper" && computer === "rock") ||
		(player === "rock" && computer === "scissor")
	) {
		// return player wins
		updateScore("player");
		// const resultMessage = document.querySelector("#Result");
		// resultMessage.textContent = "You Won!";
		return "You Won";
	} else if (
		(player === "scissor" && computer === "rock") ||
		(player === "paper" && computer === "scissor") ||
		(player === "rock" && computer === "paper")
	) {
		// return computer wins
		updateScore("computer");
		// const resultMessage = document.querySelector("#Result");
		// resultMessage.textContent = "You lost :/";
		return "You Lost";
	}
}

function updateScore(winner) {
	if (winner == "player") {
		playerScore++;
	} else if (winner == "computer") {
		computerScore++;
	}
}

function updateStorage() {
	// add code here to update storage
}
