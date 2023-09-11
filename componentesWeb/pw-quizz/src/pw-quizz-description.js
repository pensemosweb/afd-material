import { html, css, LitElement } from 'lit';

export class PwQuizzDescription extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--pw-quizz-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      value: String
    };
  }

  constructor() {
    super();
    this.value = '';
  }

  render() {
    return html`
      <p>${this.value}</p>
    `;
  }
}

customElements.define('pw-quizz-description', PwQuizzDescription);
