const rock = document.querySelector("#Rock");
const scissor = document.querySelector("#Scissor");
const paper = document.querySelector("#Paper");

const playerScore = 0;
const computerScore = 0;
const roundNumber = 0;

rock.addEventListener("click", () => {
	// make selection for first player
	console.log("rock was selected");
	let player = "rock";
	let computer = selectionAI();
	console.log(computer);
	let result = determineWinner(player, computer);
	console.log(result);
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
		return "It's a Tie";
	} else if (player === "scissor" && computer === "paper") {
		// return player wins
		// updateScore();
		return "You Won";
	} else if (player === "scissor" && computer === "rock") {
		// return computer wins
		// updateScore();
		return "You Lost";
	} else if (player === "paper" && computer === "scissor") {
		// return computer wins
		// updateScore();
		return "You Lost";
	} else if (player === "paper" && computer === "rock") {
		// return player wins
		// updateScore();
		return "You Won";
	} else if (player === "rock" && computer === "paper") {
		// return computer wins
		// updateScore();
		return "You Lost";
	} else if (player === "rock" && computer === "scissor") {
		// return player wins
		// updateScore();
		return "You Won";
	}
}
