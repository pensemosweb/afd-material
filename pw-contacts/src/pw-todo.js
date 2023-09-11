import { html, LitElement } from "lit";
import './pw-todo-form.js';
import './pw-todo-list.js';

class PwTodo extends LitElement {
  static get properties() {
    return {
      todos: Array
    }
  }

  constructor() {
    super();
    this.todos = [];
  }

  render() {
    return html`
      <pw-todo-form @pw-todo-form-add=${this.onAdd}></pw-todo-form>
      <pw-todo-list .todos=${this.todos}></pw-todo-list>
    `;
  }

  onAdd(e) {
    this.todos = [...this.todos, { text: e.detail, isDone: false }];
  }
}

customElements.define('pw-todo', PwTodo);