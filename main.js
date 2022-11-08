var chooseYourGameTitle = document.querySelector('.choose-your-game-title')
var chooseYourFighterTitle = document.querySelector('.choose-your-fighter-title')
var battleResultTitle = document.querySelector('.battle-result-title')
var classicModeSelection = document.querySelector('.classic-mode-container')
var difficultModeSelection = document.querySelector('.difficult-mode-container')
var changeModeButton = document.querySelector('.change-mode-button')
var player1Token = document.querySelector('.trainer-sprite')
var player1Title = document.querySelector('.trainer-title')
var player1Wins = document.querySelector('.trainer-battles-won-title')
var player2Token = document.querySelector('.rival-sprite')
var player2Title = document.querySelector('.rival-title')
var player2Wins = document.querySelector('.rival-battles-won-title')
var fightersContainer = document.querySelector('.fighter-selection-container')
var classicFighters = document.querySelector('.classic-mode-sprites')
var difficultFighters = document.querySelector('.difficult-mode-sprites')
var battleScene = document.querySelector('.battle-container')

currentGame = new Game

window.addEventListener('load', initializePage)
classicModeSelection.addEventListener('click', playClassicMode)
difficultModeSelection.addEventListener('click', playDifficultMode)
classicFighters.addEventListener('click', selectFighter)
difficultFighters.addEventListener('click', selectFighter)
changeModeButton.addEventListener('click', changeMode)

function initializePage() {
  player1Title.innerText = currentGame.player.name
  player2Title.innerText = currentGame.computer.name
  player1Token.setAttribute('src', currentGame.player.token)
  player2Token.setAttribute('src', currentGame.computer.token)
}

function playClassicMode() {
  currentGame.selectClassicMode()
  hide(chooseYourGameTitle)
  hide(classicModeSelection)
  hide(difficultModeSelection)
  hide(difficultFighters)
  hide(battleScene)
  hide(battleResultTitle)
  unhide(chooseYourFighterTitle)
  unhide(fightersContainer)
  unhide(classicFighters)
  unhide(changeModeButton)
  changeModeButton.disabled = false
}

function playDifficultMode() {
  currentGame.selectDifficultMode()
  hide(chooseYourGameTitle)
  hide(classicModeSelection)
  hide(difficultModeSelection)
  hide(battleScene)
  hide(battleResultTitle)
  unhide(chooseYourFighterTitle)
  unhide(fightersContainer)
  unhide(classicFighters)
  unhide(difficultFighters)
  unhide(changeModeButton)
  changeModeButton.disabled = false
}

function selectFighter() {
  var player1Selection = event.target.closest('img')
  if(player1Selection) {
    currentGame.player.elementSelection = player1Selection.name
    battleScene.innerHTML = `<img src='assets/${player1Selection.name}.png'>`
    currentGame.makeSelections()
    battleScene.innerHTML += `<img src='assets/${currentGame.computer.elementSelection}.png'>`
    hide(fightersContainer)
    unhide(battleScene)
    startBattle()
  }
}

function startBattle() {
  battleResultTitle.innerText = currentGame.checkForWin()
  updateScores()
  hide(chooseYourFighterTitle)
  unhide(battleResultTitle)
  startNewRound()
}

function changeMode() {
  currentGame.resetGame()
  updateScores()
  hide(battleScene)
  hide(battleResultTitle)
  hide(chooseYourFighterTitle)
  hide(changeModeButton)
  hide(fightersContainer)
  unhide(chooseYourGameTitle)
  unhide(classicModeSelection)
  unhide(difficultModeSelection)
}

function updateScores() {
  player1Wins.innerText = `Battles won: ${currentGame.player.wins}`
  player2Wins.innerText = `Battles won: ${currentGame.computer.wins}`
}

function startNewRound() {
  changeModeButton.disabled = true
  if (currentGame.classicMode) {
    setTimeout(playClassicMode, 2000)
  } else if (currentGame.difficultMode) {
    setTimeout(playDifficultMode, 2000)
  }
}

function hide(item) {
  item.classList.add('hidden')
}

function unhide(item) {
  item.classList.remove('hidden')
}
