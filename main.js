currentGame = new Game

chooseYourGameTitle = document.querySelector('.choose-your-game-title')
chooseYourFighterTitle = document.querySelector('.choose-your-fighter-title')
classicModeSelection = document.querySelector('.classic-mode-container')
difficultModeSelection = document.querySelector('.difficult-mode-container')
player1Token = document.querySelector('.trainer-sprite')
player1Title = document.querySelector('.trainer-title')
player1Wins = document.querySelector('.trainer-battles-won-title')
player2Token = document.querySelector('.rival-sprite')
player2Title = document.querySelector('.rival-title')
player2Wins = document.querySelector('.rival-battles-won-title')
classicFighters = document.querySelector('.classic-mode-sprites')
difficultFighters = document.querySelector('.difficult-mode-sprites')

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
  currentGame.player.elementSelection = player1Selection.name
  currentGame.makeSelections()
  console.log(currentGame.player.elementSelection)
  console.log(currentGame.computer.elementSelection)
  startBattle()
}

function startBattle() {
  if (currentGame.classicMode) {
    var fighters = classicFighters.children
    console.log(fighters)
  }
  console.log(currentGame.checkForWin())
}
