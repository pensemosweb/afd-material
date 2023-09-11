import { html, css, LitElement } from 'lit';
import './pw-quizz-item.js';
import styles, { saludar } from './pw-quizz-styles.js';

console.log(saludar());

export class PwQuizz extends LitElement {
  static get styles() {
    return styles
  }

  static get properties() {
    return {
      items: Array,
      current: Number,
      score: Number,
      _items: Array
    };
  }

  constructor() {
    super();
    this.items = [];
    this.current = 0;
  }

  willUpdate(changedProps) {
    if(changedProps.has('items')) {
      this._items = this.items.map(item => ({ value: item, selected: false }));
    }
  }

  render() {
    return html`
      ${this.items.map((item, index) => html`
        <pw-quizz-item
          .value=${item}
          ?hidden=${this.current!==index}
          @next=${this.setNext}
          @prev=${this.setPrev}
          ?is-last=${this.isLast(index)}
          @finalize=${this.finalize}
        >
        </pw-quizz-item>
      `)}

      <h1>${this.score}</h1>
    `;
  }

  setNext(e) {
    if (this.current === this.items.length - 1) {
      return;
    }

    this.current = this.current + 1;
  }

  setPrev() {
    if (this.current === 0) {
      return;
    }

    this.current = this.current - 1;
  }

  isLast(index) {
    return index === this.items.length - 1
  }

  finalize() {
    this.score = this.items.reduce((prev, current) => {
      return prev + (current.answer === current.optionCorrect ? 1 : 0);
    }, 0);
  }
}
