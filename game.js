// var Player = require('./player.js')

class Game {
  constructor() {
    this.player = new Player('Trainer' ,'assets/trainer.png')
    this.computer = new Player('Rival', 'assets/rival.png')
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
    } else if ( (playerSelection === 'water' && computerSelection === 'fire')
    || (playerSelection === 'water' && computerSelection === 'ground')
    || (playerSelection === 'fire' && computerSelection === 'grass')
    || (playerSelection === 'fire' && computerSelection === 'electric')
    || (playerSelection === 'grass' && computerSelection === 'water')
    || (playerSelection === 'grass' && computerSelection === 'ground')
    || (playerSelection === 'electric' && computerSelection === 'water')
    || (playerSelection === 'electric' && computerSelection === 'grass')
    || (playerSelection === 'ground' && computerSelection === 'electric')
    || (playerSelection === 'ground' && computerSelection === 'fire') ) {
      this.player.wins += 1
      return `${this.player.name} wins this battle!`
    } else {
      this.computer.wins += 1
      return `${this.computer.name} wins this battle!`
    }
  }
}
