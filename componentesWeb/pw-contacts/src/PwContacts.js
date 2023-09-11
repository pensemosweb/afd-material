import { html, css, LitElement } from 'lit';
import './pw-todo.js';

export class PwContacts extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--pw-contacts-text-color, #000);
        margin-bottom: 100px;
      }
    `;
  }

  render() {
    return html`
      <form @submit=${this.onSubmit} data-testid="form">
        <label for="name">
          <input
            id="name"
            data-testid="name"
            name="name"
            required  
          />
        </label>
        <label for="lastName">
          <input
            id="lastName"
            data-testid="lastName"
            name="lastName"
            required  
          />
        </label>
        <label for="email">
          <input
            id="email"
            type="email"
            data-testid="email"
            name="email"
            required
          />
        </label>

        <label for="tel">
          <input
            id="tel"
            type="tel"
            data-testid="tel"
            name="tel"
            @keydown=${this.onKeyup}
            required  
          />
        </label>

        <button data-testid="submit">Agregar</button>
      </form>

      <pw-todo></pw-todo>
    `;
  }

  onKeyup(e) {
    console.log(e);
  }

  onSubmit(e) {
    console.log(e);
    e.preventDefault();
    const data = new FormData(e.target);
  }
}
