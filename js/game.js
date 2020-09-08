/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
import Quote from './Quote.js'
import quotes from './quotes.js'

class Game {
  currentStep = 0

  lastStep = 7

  constructor({ outputWrapper, wordWrapper, categoryWrapper, lettersWrapper }) {
    this.outputWrapper = outputWrapper
    this.wordWrapper = wordWrapper
    this.categoryWrapper = categoryWrapper
    this.lettersWrapper = lettersWrapper
    this.quotes = quotes

    const { text, category } = this.quotes[
      Math.floor(Math.random() * this.quotes.length)
    ]
    // drawing board with quote and category
    this.categoryWrapper.innerHTML = category
    this.quote = new Quote(text.toLowerCase())
  }

  guess(label, event) {
    event.target.disabled = true
    if (this.quote.guess(label)) {
      this.drawQuote()
    } else {
      this.currentStep += 1
      document.getElementsByClassName('step')[
        this.currentStep
      ].style.opacity = 1
      if (this.currentStep === this.lastStep) {
        this.handleLose()
      }
    }
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
    if (!content.includes('_')) {
      this.handleWin()
    }
  }

  start() {
    this.drawLetters()
    this.drawQuote()
    document.getElementsByClassName('step')[this.currentStep].style.opacity = 1
  }

  handleWin() {
    this.wordWrapper.innerHTML = 'You Win. Congratulations'
    this.lettersWrapper.innerHTML = ''
    this.categoryWrapper.innerHTML = ''
  }

  handleLose() {
    this.wordWrapper.innerHTML = "I'm sorry. You Lose. Try again !"
    this.lettersWrapper.innerHTML = ''
    this.categoryWrapper.innerHTML = ''
  }
}

const game = new Game({
  outputWrapper: document.getElementById('output'),
  wordWrapper: document.getElementById('word'),
  categoryWrapper: document.getElementById('category'),
  lettersWrapper: document.getElementById('letters'),
})

game.start()
