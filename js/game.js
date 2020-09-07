class Game {
  quotes = [
    {
      text: 'pan tadeusz',
      category: 'Utwór literacki',
    },
    {
      text: 'ogniem i mieczem',
      category: 'Utwór literacki',
    },
    {
      text: 'dzien niepodległosci',
      category: 'Film',
    },
  ]

  constructor({ outputWrapper, wordWrapper, categoryWrapper, lettersWrapper }) {
    this.outputWrapper = outputWrapper
    this.wordWrapper = wordWrapper
    this.categoryWrapper = categoryWrapper
    this.lettersWrapper = lettersWrapper

    const { text, category } = this.quotes[
      Math.floor(Math.random() * this.quotes.length)
    ]
    this.categoryWrapper.innerHTML = category
  }

  guess(letter) {}

  drawLetters() {
    for (let index = 0; index < 26; index += 1) {
      const label = (index + 10).toString(36)
      const button = document.createElement('button')
      button.innerHTML = label
      button.addEventListener('click', () => this.guess(label))
      this.lettersWrapper.appendChild(button)
    }
  }

  start() {
    this.drawLetters()
  }
}

const game = new Game({
  outputWrapper: document.getElementById('output'),
  wordWrapper: document.getElementById('word'),
  categoryWrapper: document.getElementById('category'),
  lettersWrapper: document.getElementById('letters'),
})
game.start()
