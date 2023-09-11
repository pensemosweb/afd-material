import { LitElement, html } from 'lit';

class PwTodoItem extends LitElement {
  static get is(){
    return 'pw-todo-item';
  }

  static get properties() {
    return {
      value: { type: String },
      isDone: { type: Boolean }
    };
  }

  firstUpdated() {
    this.shadowRoot.addEventListener('pw-todo-item-done', (e) => {
      console.log('From pw-todo-item shadowRoot', e);
    });
  }

  render() {
    return html`
      <li>
        ${this.value}
        <label>
          <input type="checkbox" @click=${this.onDone}/> ${this.isDone}
        </label>
      </li>
      `;
  }

  onDone(e) {
    const event = new CustomEvent('pw-todo-item-done', {
      details: this.isDone,
      composed: true,
      //bubbles: true,
    });

    e.target.dispatchEvent(event);
    
  }
}

customElements.define(PwTodoItem.is, PwTodoItem);