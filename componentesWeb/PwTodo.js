import { LitElement, html, css } from 'https://unpkg.com/lit@2.3.1/index.js?module';

export class PwTodo extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      :host {
        display: block;
        border: 2px solid red;
      }

      h1 {
        color: green;
      }
    `;
  }


  render() {
    return html`
      <slot></slot>
      <h1>Estoy en las sombras</h1>
    `;
  }
}