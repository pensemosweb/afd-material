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

  render() {
    return html`
      <li 
      @pw-todo-item-done=${console.log.bind(null, 'li')}
      @input=${console.log.bind(null, 'normalEvent li')}
      >
        ${this.value}
        <label>
          <input type="checkbox" @click=${this.onDone}/> ${this.isDone}</label>
      </li>
      `;
  }

  onDone(e) {
    const event = new CustomEvent('pw-todo-item-done', {
      details: !this.isDone,
      composed: true,
      bubbles: true
    });

    this.shadowRoot.querySelector('input').dispatchEvent(event);
    //this.dispatchEvent(event);
  }
}

customElements.define(PwTodoItem.is, PwTodoItem);