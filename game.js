// var Player = require('./player.js')

// Something to research: Do I need to make a new game class each time game gets a reset.

class Game {
  constructor() {
    this.player = new Player('Trainer')
    this.computer = new Player('Rival')
    this.classicMode = false
    this.difficultMode = false
    this.classicHands = ['water', 'fire', 'grass']
    this.difficultHands = ['water', 'fire', 'grass', 'electric', 'ground']
  }
  selectClassicMode() {
    this.classicMode = true
    this.difficultMode = false
  }
  selectDifficultMode() {
    this.difficultMode = true
    this.classicMode = false
  }
  resetGame() {
    this.player.wins = 0
    this.computer.wins = 0
  }
  makeSelections() {
    if (this.classicMode) {
      this.computer.takeTurn('random', this.classicHands)
    } else if (this.difficultMode) {
      this.computer.takeTurn('random', this.difficultHands)
    }
  }
  checkForWin() {
    var playerSelection = this.player.elementSelection
    var computerSelection = this.computer.elementSelection
    if (playerSelection === computerSelection) {
      return "It's a draw!"
    }
    if (playerSelection === 'water' && computerSelection === 'fire') {
      this.player.wins += 1
    }
    if (playerSelection === 'water' && computerSelection === 'ground') {
      this.player.wins += 1
    }
    if (playerSelection === 'fire' && computerSelection === 'grass') {
      this.player.wins += 1
    }
    if (playerSelection === 'fire' && computerSelection === 'electric') {
      this.player.wins += 1
    }
    if (playerSelection === 'grass' && computerSelection === 'water') {
      this.player.wins += 1
    }
    if (playerSelection === 'grass' && computerSelection === 'ground') {
      this.player.wins += 1
    }
    if (playerSelection === 'electric' && computerSelection === 'water') {
      this.player.wins += 1
    }
    if (playerSelection === 'electric' && computerSelection === 'grass') {
      this.player.wins += 1
    }
    if (playerSelection === 'ground' && computerSelection === 'electric') {
      this.player.wins += 1
    }
    if (playerSelection === 'ground' && computerSelection === 'fire') {
      this.player.wins += 1
    }
    if (playerSelection === 'water' && computerSelection === 'grass') {
      this.computer.wins += 1
    }
    if (playerSelection === 'water' && computerSelection === 'electric') {
      this.computer.wins += 1
    }
    if (playerSelection === 'fire' && computerSelection === 'water') {
      this.computer.wins += 1
    }
    if (playerSelection === 'fire' && computerSelection === 'ground') {
      this.computer.wins += 1
    }
    if (playerSelection === 'grass' && computerSelection === 'fire') {
      this.computer.wins += 1
    }
    if (playerSelection === 'grass' && computerSelection === 'electric') {
      this.computer.wins += 1
    }
    if (playerSelection === 'electric' && computerSelection === 'ground') {
      this.computer.wins += 1
    }
    if (playerSelection === 'electric' && computerSelection === 'fire') {
      this.computer.wins += 1
    }
    if (playerSelection === 'ground' && computerSelection === 'water') {
      this.computer.wins += 1
    }
    if (playerSelection === 'ground' && computerSelection === 'grass') {
      this.computer.wins += 1
    }
  }

}

// var newGame = new Game

// console.log('Player 1 Wins: ' + newGame.player.wins)
// console.log('Player 2 Wins: ' + newGame.computer.wins)
// newGame.selectClassicMode()
// newGame.makeSelections()
// newGame.checkForWin()
// console.log('Round 1')
// console.log('Player 1 Wins: ' + newGame.player.wins)
// console.log('Player 2 Wins: ' + newGame.computer.wins)
// console.log('Player 1 Selection: ' + newGame.player.elementSelection)
// console.log('Player 2 Selection: ' + newGame.computer.elementSelection)
// newGame.makeSelections()
// newGame.checkForWin()
// console.log('Round 2')
// console.log('Player 1 Wins: ' + newGame.player.wins)
// console.log('Player 2 Wins: ' + newGame.computer.wins)
// console.log('Player 1 Selection: ' + newGame.player.elementSelection)
// console.log('Player 2 Selection: ' + newGame.computer.elementSelection)
// newGame.makeSelections()
// newGame.checkForWin()
// console.log('Round 3')
// console.log('Player 1 Wins: ' + newGame.player.wins)
// console.log('Player 2 Wins: ' + newGame.computer.wins)
// console.log('Player 1 Selection: ' + newGame.player.elementSelection)
// console.log('Player 2 Selection: ' + newGame.computer.elementSelection)
// newGame.resetGame()
// console.log('RESET!')
// console.log('Player 1 Wins: ' + newGame.player.wins)
// console.log('Player 2 Wins: ' + newGame.computer.wins)
