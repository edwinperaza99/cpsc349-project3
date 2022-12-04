import toggleTeam from './modules/toggle-team.js'
import toggleGame from './modules/toggle-game.js'

const team = document.getElementById('team')
team.addEventListener('click', () => toggleTeam())

const game = document.getElementById('gameBtn')
game.addEventListener('click', () => {
  window.localStorage.clear()
  toggleGame()
})

const continueBtn = document.getElementById('continue-btn')
if (window.localStorage.length !== 0) continueBtn.classList.remove('hidden')
continueBtn.addEventListener('click', () => toggleGame())
