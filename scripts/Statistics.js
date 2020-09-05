export default class Statistics {
  constructor() {
    this.gameResult = [];
  }

  addGameToStats(win, bid) {
    const gameResult = {
      win,
      bid,
    };
    this.gameResult.push(gameResult);
  }

  showGameStats() {
    const counter = this.gameResult.length;
    const wins = this.gameResult.filter((result) => result.win).length;
    const losses = this.gameResult.filter((result) => !result.win).length;

    return [counter, wins, losses];
  }
}
