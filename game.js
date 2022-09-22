var Player = require('./player.js')

class Game {
  constructor() {
    this.player = new Player
    this.computer = new Player
    this.classicMode = false
    this.difficultMode = false
    this.playerHands = ['water', 'fire', 'grass']
    this.computerHands = ['water', 'fire', 'grass']
  }
  selectClassicMode() {
    this.classicMode = true
    this.difficultMode = false
  }
  selectDifficultMode() {
    this.difficultMode = true
    this.classicMode = false
  }
  // playClassicMode() {
  //   if(this.classicMode) {
  //     var playerWinCount = 0
  //     var computerWinCount = 0
  //   }
  // }
  resetGame() {
    this.player.wins = 0
    this.computer.wins = 0
  }
  checkForWin() {
    this.computer.takeTurn('random', this.computerHands)
    this.player.elementSelection = 'water'
    var playerSelection = this.player.elementSelection
    var computerSelection = this.computer.elementSelection
    if (playerSelection === computerSelection) {
      return "It's a draw!"
    }
    if (playerSelection === 'water' && computerSelection === 'fire') {
      this.player.wins += 1
    }
    if (playerSelection === 'fire' && computerSelection === 'grass') {
      this.player.wins += 1
    }
    if (playerSelection === 'grass' && computerSelection === 'water') {
      this.player.wins += 1
    }
    if (playerSelection === 'water' && computerSelection === 'grass') {
      this.computer.wins += 1
    }
    if (playerSelection === 'fire' && computerSelection === 'water') {
      this.computer.wins += 1
    }
    if (playerSelection === 'grass' && computerSelection === 'fire') {
      this.computer.wins += 1
    }
  }

}

var newGame = new Game

console.log('Player 1 Wins: ' + newGame.player.wins)
console.log('Player 2 Wins: ' + newGame.computer.wins)
newGame.checkForWin()
console.log('Round 1')
console.log('Player 1 Wins: ' + newGame.player.wins)
console.log('Player 2 Wins: ' + newGame.computer.wins)
console.log('Player 1 Selection: ' + newGame.player.elementSelection)
console.log('Player 2 Selection: ' + newGame.computer.elementSelection)
newGame.checkForWin()
console.log('Round 2')
console.log('Player 1 Wins: ' + newGame.player.wins)
console.log('Player 2 Wins: ' + newGame.computer.wins)
console.log('Player 1 Selection: ' + newGame.player.elementSelection)
console.log('Player 2 Selection: ' + newGame.computer.elementSelection)
newGame.checkForWin()
console.log('Round 3')
console.log('Player 1 Wins: ' + newGame.player.wins)
console.log('Player 2 Wins: ' + newGame.computer.wins)
console.log('Player 1 Selection: ' + newGame.player.elementSelection)
console.log('Player 2 Selection: ' + newGame.computer.elementSelection)
newGame.resetGame()
console.log('RESET!')
console.log('Player 1 Wins: ' + newGame.player.wins)
console.log('Player 2 Wins: ' + newGame.computer.wins)
