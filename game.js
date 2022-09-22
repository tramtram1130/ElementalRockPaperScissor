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
    var playerSelection = this.player.playerSelection
    var computerSelection = this.computer.playerSelection
  }
}
