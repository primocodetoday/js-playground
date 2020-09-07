export default class Quote {
  constructor(text) {
    this.text = text
    this.tried = []
  }

  getContent() {
    let content = ''
    // eslint-disable-next-line no-restricted-syntax
    for (const char of this.text) {
      if (char === ' ' || this.tried.includes(char)) {
        content += char
      } else {
        content += '_'
      }
    }
    return content
  }

  guess(letter) {
    if (!this.text.includes(letter)) {
      return false
    }
    this.tried.push(letter)
    return true
  }
}
