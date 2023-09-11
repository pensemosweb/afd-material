import { html, css, LitElement } from 'lit';
import './pw-todo-form.js';
import './pw-todo-list.js';

export class PwTodo extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--pw-todo-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      todos: { type: Array }
    };
  }

  constructor() {
    super();
    this.todos = [];
    this.addEventListener('pw-todo-form-add', console.log.bind(null, 'pw-todo'));
    this.addEventListener('pw-todo-item-done', console.log.bind(null, 'pw-todo'));
    this.addEventListener('input', console.log.bind(null, 'normalEvent pw-todo'));
    this.addEventListener('click', console.log.bind(null, 'normalEvent click pw-todo'));
  }

  render() {
    return html`
      <pw-todo-form
        @pw-todo-form-add=${this.onAddTodo}
        
      ></pw-todo-form>
      <div @pw-todo-item-done=${console.log.bind(null, 'div > pw-todo-list')}>
        <pw-todo-list
          .todos=${this.todos}
          @pw-todo-item-done=${console.log.bind(null, 'pw-todo-list')}
          @input=${console.log.bind(null, 'normalEvent pw-todo-list')}
        ></pw-todo-list>
      </div>
    `;
  }

  onAddTodo(e) {
    console.log(e);
    this.todos = [...this.todos, { text: e.detail, isDone: false }]
  }
}
