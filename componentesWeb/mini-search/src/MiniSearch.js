import { html, css, LitElement } from 'lit';

export class MiniSearch extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--mini-search-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      characters: { type: Array }
    };
  }

  constructor() {
    super();
    this.characters = [];
  }

  render() {
    return html`
      ${JSON.stringify(this.characters)}
    `;
  }
}
