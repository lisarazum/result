import * as DateUtils from '../core/utils/date'

export class TimerBlock {
  #date
  #timerContainer
  #timerTextHtml

  constructor(date) {
    this.#date = date
    this.#timerContainer = document.createElement('div')
    this.#timerTextHtml = document.createElement('h2')
  }

  #getTimerContent() {
    return DateUtils.getPreciseDateDifference(new Date(), this.#date)
  }

  #enableDateUpdate() {
    setInterval(() => {
      this.#timerTextHtml.textContent = this.#getTimerContent()
    }, 1000)
  }

  render() {
    this.#timerContainer.id = 'times'
    this.#timerTextHtml.className = 'timer-text'
    this.#timerTextHtml.textContent = this.#getTimerContent()

    const todayDateHtml = document.createElement('div')
    todayDateHtml.className = 'today-date'
    todayDateHtml.textContent = `Today: ${DateUtils.getTodayDateFormat(new Date())}`

    this.#timerContainer.append(this.#timerTextHtml, todayDateHtml)
    this.#enableDateUpdate()

    return this.#timerContainer
  }
}