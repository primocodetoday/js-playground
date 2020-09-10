export default class Wallet {
  constructor(startCash) {
    let money = startCash;

    this.getWalletValue = () => money;

    this.checkCanPlay = (bet) => {
      if (money >= bet) return true;
      return false;
    };

    this.changeWallet = (bid, type) => {
      if (typeof bid === 'number') {
        if (type === '+') {
          money += bid;
        }
        if (type === '-') {
          money -= bid;
        }
        throw new Error('Wrong bet');
      } else {
        throw new Error('Wrong number');
      }
    };
  }
}
