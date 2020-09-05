class Wallet {
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
        } else if (type === '-') {
          return (_money -= value);
        } else {
          throw new Error('Wrong bet');
        }
      } else {
        console.log(typeof value);
        throw new Error('Wrong number');
      }
    };
  }
}

// const currentwallet = new Wallet(200);
