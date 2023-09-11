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
      todos: {
        type: Array, 
        attribute: 'todos-items',
        converter: {
          fromAttribute(value) {
            const items = JSON.parse(value);

            if (Array.isArray(items)) {
              return items.map(item => {
                return {
                  text: item,
                  isDone: false
                }
              });
            }

            return [];
          },
          toAttribute(value) {
            if (Array.isArray(value)) {
              return JSON.stringify(value);
            }

            return '';
          }
        },
        reflect: true
      },
      _todos: { type: Array, state: true },
      title: {
        type: String,
        hasChanged(newVal, oldVal) {
          //console.log(newVal, oldVal);
          if(newVal !== oldVal) {
            //console.log('Si cambio');
            return true;
          }

          return false;
        },
        converter: {
          fromAttribute(value, type) {
            if(typeof value === 'string') {
              return type(value);
            }

            return '';
          },
          toAttribute(value, type) {
            if(typeof value === 'string') {
              return type(value);
            }

            return '';
          }
        }
      }
    };
  }

  constructor() {
    super();
    this.todos = []; 
    this.title = 'Mini todo';   
  }

  render() {
    return html`
      <h1>${this.title}</h1>
      <pw-todo-form @pw-todo-form-add=${this.onAddTodo}></pw-todo-form>
      <pw-todo-list .todos=${this.todos} @pw-todo-item-done=${this.onDone}></pw-todo-list>
    `;
  }

  onAddTodo(e) {
    //this.title = 'Mini todo';
    this.todos = [...this.todos, { text: e.detail, isDone: false }]
  }

  onDone(e) {
    console.log('From pw-todo', e);
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('keydown', this.onDone);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this.onDone);
  }
}
