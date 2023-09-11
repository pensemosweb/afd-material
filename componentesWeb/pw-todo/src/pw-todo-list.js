import { html, LitElement } from 'lit';
import './pw-todo-item.js';

class PwTodoList extends LitElement {

  static get properties() {
    return {
      todos: { type: Array }
    }
  }

  constructor() {
    super();
    this.todos = [];
  }

  render() {
    return html`
      <ol>
        ${this.todos.map(item => html`
          <pw-todo-item 
            .value=${item.text}
            .is-done=${item.isDone}
            @pw-todo-item-done=${(e) => console.log('From pw-todo-list', e)}
            >
          </pw-todo-item>`)}
      </ol>
    `;
  }
}

customElements.define('pw-todo-list', PwTodoList);