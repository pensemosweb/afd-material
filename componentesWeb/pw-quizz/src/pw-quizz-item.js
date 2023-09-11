import { LitElement, html } from "lit"
import './pw-quizz-description.js';
import './pw-quizz-button.js';
import './pw-quizz-answer.js';

class PwQuizzItem extends LitElement {
  static get is() {
    return 'pw-quizz-item';
  }

  static get properties() {
    return {
      value: { type: Object },
      isLast: { type: Boolean, attribute: 'is-last', reflect: true },
      _areButtonsEnabled: { type: Boolean, state: true }
    };
  }

  constructor() {
    super();
    this.value = {};
    this._areButtonsEnabled = false;
    this.prev = this.changeItem.bind(this, 'prev');
    this.next = this.changeItem.bind(this, 'next');
  }

  render() {
    return html`
      <pw-quizz-description .value=${this.value.description}></pw-quizz-description>
      <pw-quizz-answer
        .items=${this.value.options}
        @pw-answer-selected=${this.onAnswerSelected}
      ></pw-quizz-answer>
        <pw-quizz-button
          @click=${this.prev}
          ?is-enabled=${this._areButtonsEnabled}
        >
          Anterior
        </pw-quizz-button>
      ${
        this.isLast 
          ? html`<pw-quizz-button
            @click=${this.finalize}
            ?is-enabled=${this._areButtonsEnabled}
          >
            Finalizar
          </pw-quizz-button>` 
          : html`<pw-quizz-button
            @click=${this.next}
            ?is-enabled=${this._areButtonsEnabled}
          >
            Siguiente
          </pw-quizz-button>`
      }
      
    `;
  }

  onAnswerSelected(e) {
    this.value.answer = e.detail; 
    this._areButtonsEnabled = true;
  }

  finalize() {
    const finalizeEvent = new CustomEvent('finalize');

    this.dispatchEvent(finalizeEvent);
  }

  changeItem(type) {
    if (this._areButtonsEnabled === false) {
      return;
    }

    const changeEvent = new CustomEvent(type);

    this.dispatchEvent(changeEvent);
  }
}

customElements.define('pw-quizz-item', PwQuizzItem);