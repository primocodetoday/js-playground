/* eslint-disable import/extensions */
import Wallet from './scripts/Wallet.js';
import Statistics from './scripts/Statistics.js';
import Draw from './scripts/Draw.js';
import Result from './scripts/Result.js';

class Game {
  constructor() {
    this.stats = new Statistics();
    this.wallet = new Wallet(200);

    document.querySelector('.start').addEventListener('click', this.startGame.bind(this));
    this.boards = document.querySelectorAll('div.area');
    this.bid = document.querySelector('.bid');

    this.spanResullt = document.querySelector('.result');
    this.spanBallance = document.querySelector('.ballance');
    this.spanPlays = document.querySelector('.plays');
    this.spanWins = document.querySelector('.wins');
    this.spanLosses = document.querySelector('.losses');

    this.render();
  }

  render(
    colors = ['gray', 'gray', 'gray'],
    money = this.wallet.getWalletValue(),
    result = '',
    stats = [0, 0, 0],
    bid = 0,
    won = 0,
  ) {
    this.boards.forEach((board, index) => {
      board.style.backgroundColor = colors[index];
    });
    if (result) {
      result = `You win ${won} $`;
    } else if (!result && result !== '') {
      result = `You lose ${bid} $`;
    }
    this.spanResullt.textContent = result;
    this.spanBallance.textContent = money;
    this.spanPlays.textContent = stats[0];
    this.spanWins.textContent = stats[1];
    this.spanLosses.textContent = stats[2];
  }

  startGame() {
    if (this.bid.value < 1) return alert('Bet to low');
    const bid = Math.floor(this.bid.value);

    if (!this.wallet.checkCanPlay(bid)) {
      return alert('You dont have money for this');
    }

    this.wallet.changeWallet(bid, '-');

    this.draw = new Draw();
    const colors = this.draw.getDrawResult();

    const win = Result.checkWinner(colors);
    const won = Result.moneyWin(win, bid);
    this.wallet.changeWallet(won);
    this.stats.addGameToStats(win, bid);

    this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStats(), bid, won);
  }
}

const game = new Game();
