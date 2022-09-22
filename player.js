class Player {
  constructor() {
    this.name = name
    this.win = 0
    this.playerSelection = undefined
  }
  takeTurn(element, hands) {
    // this.playerSelection = element
    if (element === 'random') {
      var index = Math.floor(Math.random() * 3)
      this.playerSelection = hands[index]
    }
  }
}
