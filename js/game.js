/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/extensions
import Quote from './Quote.js'

// TODO:
// * - drawing player HP
// * - game over

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
    // drawing board with quote and category
    this.categoryWrapper.innerHTML = category
    this.quote = new Quote(text)
  }

  guess(label, event) {
    event.target.disabled = true
    this.quote.guess(label)
    this.drawQuote()
  }

  drawLetters() {
    for (let index = 0; index < 26; index += 1) {
      const label = (index + 10).toString(36)
      const button = document.createElement('button')
      button.innerHTML = label
      button.addEventListener('click', (event) => this.guess(label, event))
      this.lettersWrapper.appendChild(button)
    }
  }

  drawQuote() {
    const content = this.quote.getContent()
    this.wordWrapper.innerHTML = content
  }

  start() {
    this.drawLetters()
    this.drawQuote()
  }
}

const game = new Game({
  outputWrapper: document.getElementById('output'),
  wordWrapper: document.getElementById('word'),
  categoryWrapper: document.getElementById('category'),
  lettersWrapper: document.getElementById('letters'),
})
game.start()
