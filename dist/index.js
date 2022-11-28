const rock = document.querySelector("#Rock");
const scissor = document.querySelector("#Scissor");
const paper = document.querySelector("#Rock");

const playerScore = 0;
const computerScore = 0;
const roundNumber = 0;

rock.addEventListener("click", () => {
	// make selection for first player
	let player = "rock";
	let computer = selectionAI();
	determineWinner(player, computer);
	updateRound();
});

paper.addEventListener("click", () => {
	// make selection for first player
	let player = "paper";
	let computer = selectionAI();
	determineWinner(player, computer);
	updateRound();
});

scissor.addEventListener("click", () => {
	// make selection for first player
	let player = "scissor";
	let computer = selectionAI();
	determineWinner(player, computer);
	updateRound();
});

function selectionAI() {
	// randomize function here
	switch (randomNum) {
		case "0":
			return "rock";
		case "1":
			return "paper";
		case "2":
			return "scissor";
	}
}

function determineWinner(player, computer) {
	// add code here
	if (player == computer) {
		//return tie
	} else if (player == "scissor" && computer == "paper") {
		// return player wins
		updateScore();
	} else if (player == "scissor" && computer == "rock") {
		// return computer wins
		updateScore();
	} else if (player == "paper" && computer == "scissor") {
		// return computer wins
		updateScore();
	} else if (player == "paper" && computer == "rock") {
		// return player wins
		updateScore();
	} else if (player == "rock" && computer == "paper") {
		// return computer wins
		updateScore();
	} else if (player == "rock" && computer == "scissor") {
		// return player wins
		updateScore();
	}
}
