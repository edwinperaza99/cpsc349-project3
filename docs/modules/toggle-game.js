let currRound = 0
let playerScore = 0
let computerScore = 0

function gameNav () {
  const mainNav = document.querySelectorAll('.main-nav')
  mainNav.forEach((elem) => elem.classList.add('hidden'))

  const gameNav = document.querySelectorAll('.game-nav')
  gameNav.forEach((elem) => {
    elem.classList.remove('hidden')
    elem.classList.add('flex')
  })

  const exitBtn = document.getElementById('exit-btn')
  exitBtn.classList.remove('hidden')

  if (window.localStorage.length !== 0) {
    playerScore = window.localStorage.playerScore
    computerScore = window.localStorage.computerScore
    currRound = window.localStorage.rounds
  }

  for (let i = 1; i <= playerScore; i++) {
    const scoreDot = document.getElementById(`user-score-${i}`)
    scoreDot.classList.remove('bg-slate-400')
    scoreDot.classList.add('bg-emerald-400')
  }

  for (let i = 1; i <= computerScore; i++) {
    const scoreDot = document.getElementById(`comp-score-${i}`)
    scoreDot.classList.remove('bg-slate-400')
    scoreDot.classList.add('bg-rose-400')
  }
}

function selectHand () {
  const selection = document.getElementById('selection')
  const choice = document.querySelectorAll('.choice')
  const rock = document.getElementById('rock')
  const paper = document.getElementById('paper')
  const scissors = document.getElementById('scissors')

  choice.forEach((elem) =>
    elem.addEventListener('click', () => selection.classList.add('hidden'))
  )

  rock.addEventListener('click', () => {
    const player = 'rock'
    const computer = selectionAI()
    determineWinner(player, computer)
    battleground(player, computer)
    currRound++
  })

  paper.addEventListener('click', () => {
    const player = 'paper'
    const computer = selectionAI()
    determineWinner(player, computer)
    battleground(player, computer)
    currRound++
  })

  scissors.addEventListener('click', () => {
    const player = 'scissors'
    const computer = selectionAI()
    determineWinner(player, computer)
    battleground(player, computer)
    currRound++
  })
}

function selectionAI () {
  // randomize function here
  const randomNum = Math.floor(Math.random() * 3) + 1
  switch (randomNum) {
    case 1:
      return 'rock'
    case 2:
      return 'paper'
    case 3:
      return 'scissors'
  }
}

function battleground (player, computer) {
  const main = document.getElementById('battle')
  const battleground = document.getElementById('battleground')
  const playerHand = document.createElement('img')
  const vs = document.createElement('h1')
  const computerHand = document.createElement('img')

  main.classList.remove('hidden')
  main.classList.add('flex')

  playerHand.setAttribute('id', 'player-hand')
  playerHand.setAttribute('src', `./src/emojis/${player}.webp`)
  playerHand.setAttribute(
    'class',
    'h-32 drop-shadow-[0_3px_15px_rgba(214,137,9,0.5)]'
  )

  if (player === 'scissors') playerHand.classList.add('-scale-x-100')

  vs.setAttribute('id', 'vs-text')
  vs.setAttribute('class', 'h-fit p-4 text-neutral-100 text-lg bg-slate-900')
  vs.textContent = 'vs.'

  computerHand.setAttribute('id', 'computer-hand')
  computerHand.setAttribute('src', `./src/emojis/${computer}.webp`)
  computerHand.setAttribute(
    'class',
    'h-32 drop-shadow-[0_3px_15px_rgba(214,137,9,0.5)]'
  )

  battleground.append(playerHand, vs, computerHand)
  main.appendChild(battleground)
}

function resultBar (message) {
  const resultBar = document.getElementById('result-bar')
  const status = document.getElementById('game-status')
  const button = document.getElementById('round-btn')
  const link = document.getElementById('round-btn-link')

  resultBar.classList.remove('hidden')
  resultBar.classList.add('flex')

  status.textContent = message

  if (playerScore === 3 || computerScore === 3) {
    link.setAttribute('href', '/')
    button.textContent = 'end game'
    window.localStorage.clear()
  } else {
    button.textContent = 'next round >'
    button.addEventListener('click', () => reset())
  }
}

function reset () {
  const battleground = document.getElementById('battle')
  const resultBar = document.getElementById('result-bar')
  const selection = document.getElementById('selection')
  const choice = document.querySelectorAll('.choice')
  const playerHand = document.getElementById('player-hand')
  const computerHand = document.getElementById('computer-hand')
  const vsTxt = document.getElementById('vs-text')

  battleground.classList.add('hidden')
  battleground.classList.remove('flex')

  resultBar.classList.add('hidden')
  resultBar.classList.remove('flex')

  playerHand.remove()
  computerHand.remove()
  vsTxt.remove()

  choice.forEach(() => selection.classList.remove('hidden'))
}

function determineWinner (player, computer) {
  if (player === computer) {
    // return tie
    resultBar("it's a tie!")
  } else if (
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'rock' && computer === 'scissors')
  ) {
    // return player wins
    updateScore('player')
    resultBar('user won!')
  } else {
    // return computer wins
    updateScore('computer')
    resultBar('computer won!')
  }
}

function updateScore (winner) {
  if (winner === 'player') {
    playerScore++
    updateStorage()

    const scoreDot = document.getElementById(`user-score-${playerScore}`)
    scoreDot.classList.remove('bg-slate-400')
    scoreDot.classList.add('bg-emerald-400')
  } else if (winner === 'computer') {
    computerScore++
    updateStorage()

    const scoreDot = document.getElementById(`comp-score-${computerScore}`)
    scoreDot.classList.remove('bg-slate-400')
    scoreDot.classList.add('bg-rose-400')
  }
}

function updateStorage () {
  // add code here to update storage
  window.localStorage.setItem('playerScore', playerScore)
  window.localStorage.setItem('computerScore', computerScore)
  window.localStorage.setItem('rounds', currRound)
}

export default function toggleGame () {
  const home = document.getElementById('home')
  const game = document.getElementById('game')
  const footerTxt = document.getElementById('footer-txt')

  home.classList.add('hidden')
  game.classList.remove('hidden')
  game.classList.add('flex')
  footerTxt.classList.add('hidden')

  gameNav()
  selectHand()
}
