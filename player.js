class Player {
  constructor() {
    this.name = name
    this.wins = 0
    this.elementSelection = undefined
  }
  takeTurn(element, hands) {
    if (element === 'random') {
      var index = Math.floor(Math.random() * 3)
      this.elementSelection = hands[index]
    }
  }
}
