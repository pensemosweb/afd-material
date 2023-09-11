import { LitElement, html } from "lit"

class PWQuizzButton extends LitElement {
  static get is() {
    return 'pw-quizz-item';
  }

  static get properties() {
    return {
      isEnabled: { type: Boolean, reflect: true, attribute: 'is-enabled' }
    };
  }

  constructor() {
    super();
    this.value = {};
    this.isEnabled = false;
  }

  render() {
    return html`
      <button ?disabled=${!this.isEnabled}>
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('pw-quizz-button', PWQuizzButton);