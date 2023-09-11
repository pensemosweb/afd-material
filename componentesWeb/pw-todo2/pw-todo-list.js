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
      <ol @pw-todo-item-done=${console.log.bind(null, 'pw-todo-item < ol')}
      @input=${console.log.bind(null, 'click ol')}
      >
        ${this.todos.map(item => html`
          <pw-todo-item 
            .value=${item.text}
            .is-done=${item.isDone}
            @pw-todo-item-done=${console.log.bind(null, 'pw-todo-item')}
            @input=${console.log.bind(null, 'normalEvent pw-todo-item')}
            >
          </pw-todo-item>`)}
      </ol>
    `;
  }
}

customElements.define('pw-todo-list', PwTodoList);