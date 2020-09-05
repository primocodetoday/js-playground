export default class Draw {
  constructor() {
    this.options = ['red', 'green', 'blue'];
    const result = this.drawResult();
    this.getDrawResult = () => result;
  }

  drawResult() {
    const colors = [];

    for (let i = 0; i < this.options.length; i += 1) {
      const index = Math.floor(Math.random() * this.options.length);
      const color = this.options[index];
      colors.push(color);
    }
    return colors;
  }
}
