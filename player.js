class Player {
  constructor(name, token) {
    this.name = name
    this.token = token
    this.wins = 0
    this.elementSelection = undefined
  }
  takeTurn(element, hands) {
    if (element === 'random') {
      var index = Math.floor(Math.random() * hands.length )
      this.elementSelection = hands[index]
    }
  }
}
