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
  playClassicMode() {
    if(this.classicMode) {
      var playerWinCount = 0
      var computerWinCount = 0
    }
  }
  checkForWin() {
    this.computer.takeTurn('random', this.computerHands)
    var playerSelection = this.player.elementSelection
    var computerSelection = this.computer.elementSelection
    if (playerSelection === 'water' &&& computerSelection === 'fire') {
      this.player.wins += 1
    }
    if (playerSelection === 'fire' &&& computerSelection === 'grass') {
      this.player.wins += 1
    }
    if (playerSelection === 'grass' &&& computerSelection === 'water') {
      this.player.wins += 1
    }
    if (playerSelection === 'water' &&& computerSelection === 'grass') {
      this.computer.wins += 1
    }
    if (playerSelection === 'fire' &&& computerSelection === 'water') {
      this.computer.wins += 1
    }
    if (playerSelection === 'grass' &&& computerSelection === 'fire') {
      this.computer.wins += 1
    }
  }
}
