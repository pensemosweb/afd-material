import { LitElement, html } from "lit";

class PwTodoList extends LitElement {
  static get is() {
    return 'pw-todo-list'
  }

  static get properties() {
    return {
      todos: Array
    };
  }

  constructor() {
    super();
    this.todos = [];
  }

  render() {
    return html`
      <ol>
        ${this.todos.map(item => html`<li>${item.text}</li>`)}
      </ol>
    `;
  }
}

customElements.define(PwTodoList.is, PwTodoList);