import { jsBlock } from './jsBlock'
import { TimerBlock } from './TimerBlock'
import { JS_CREATION_DATE } from '../core/constants/settings'

export default class App {
  #jsBlock
  #timerBlock

  constructor() {
    this.#jsBlock = new jsBlock();
    this.#timerBlock = new TimerBlock(JS_CREATION_DATE)
  }
  run() {
    const jsBlockHtml = this.#jsBlock.render()
    const timerBlockHtml = this.#timerBlock.render()
    document.body.append(jsBlockHtml, timerBlockHtml)
  }
}