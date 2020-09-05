export default class Wallet {
  constructor(money) {
    let _money = money;

    this.getWalletValue = () => _money;

    this.checkCanPlay = (bet) => {
      if (_money >= bet) return true;
      return false;
    };

    this.changeWallet = (value, type = '+') => {
      if (typeof value === 'number' && !isNaN(value)) {
        if (type === '+') {
          return (_money += value);
        }
        if (type === '-') {
          return (_money -= value);
        }
        throw new Error('Wrong bet');
      } else {
        throw new Error('Wrong number');
      }
    };
  }
}

// const currentwallet = new Wallet(200);
