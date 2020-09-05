class Draw {
  constructor() {
    this.options = ['red', 'green', 'blue'];
    const _result = this.drawResult();
    this.getDrawresult = () => _result;
  }

  drawResult() {
    const colors = [];

    for (let i = 0; i < this.options.length; i++) {
      const index = Math.floor(Math.random() * this.options.length);
      const color = this.options[index];
      colors.push(color);
    }
    return colors;
  }
}
