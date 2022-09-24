chooseYourGameTitle = document.querySelector('.choose-your-game-title')
chooseYourFighterTitle = document.querySelector('.choose-your-fighter-title')
battleResultTitle = document.querySelector('.battle-result-title')
classicModeSelection = document.querySelector('.classic-mode-container')
difficultModeSelection = document.querySelector('.difficult-mode-container')
player1Token = document.querySelector('.trainer-sprite')
player1Title = document.querySelector('.trainer-title')
player1Wins = document.querySelector('.trainer-battles-won-title')
player2Token = document.querySelector('.rival-sprite')
player2Title = document.querySelector('.rival-title')
player2Wins = document.querySelector('.rival-battles-won-title')
fightersContainer = document.querySelector('.fighter-selection-container')
classicFighters = document.querySelector('.classic-mode-sprites')
difficultFighters = document.querySelector('.difficult-mode-sprites')
battleScene = document.querySelector('.battle-container')

currentGame = new Game
player1Title.innerText = currentGame.player.name
player2Title.innerText = currentGame.computer.name

classicModeSelection.addEventListener('click', playClassicMode)
difficultModeSelection.addEventListener('click', playDifficultMode)
classicFighters.addEventListener('click', selectFighter)
difficultFighters.addEventListener('click', selectFighter)

function hide(item) {
  item.classList.add('hidden')
}

function unhide(item) {
  item.classList.remove('hidden')
}

function playClassicMode() {
  console.log('Classic Mode')
  currentGame.selectClassicMode()
  hide(chooseYourGameTitle)
  hide(classicModeSelection)
  hide(difficultModeSelection)
  unhide(chooseYourFighterTitle)
  unhide(classicFighters)
}

function playDifficultMode() {
  console.log('Difficult Mode')
  currentGame.selectDifficultMode()
  hide(chooseYourGameTitle)
  hide(classicModeSelection)
  hide(difficultModeSelection)
  unhide(chooseYourFighterTitle)
  unhide(classicFighters)
  unhide(difficultFighters)
}

function selectFighter() {
  var player1Selection = event.target.closest('img')
  battleScene.appendChild(player1Selection)
  currentGame.player.elementSelection = player1Selection.name
  currentGame.makeSelections()
  hide(fightersContainer)
  unhide(battleScene)
  console.log(currentGame.player.elementSelection)
  console.log(currentGame.computer.elementSelection)
  startBattle()
}

function startBattle() {
  currentGame.checkForWin()
  player1Wins.innerText = `Battles won: ${currentGame.player.wins}`
  player2Wins.innerText = `Battles won: ${currentGame.computer.wins}`
  battleResultTitle.innerText = currentGame.checkForWin()
  hide(chooseYourFighterTitle)
  unhide(battleResultTitle)
  console.log(currentGame.checkForWin())
}
