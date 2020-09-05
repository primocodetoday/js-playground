class Statistics {
  constructor() {
    this.gameResult = [];
  }
  addGameToStats(win, bid) {
    let gameResult = {
      win,
      bid,
    };
    this.gameResult.push(gameResult);
  }
  showGameStats() {
    let counter = this.gameResult.length;
    let wins = this.gameResult.filter((result) => result.win).length;
    let losses = this.gameResult.filter((result) => !result.win).length;

    return [counter, wins, losses];
  }
}
