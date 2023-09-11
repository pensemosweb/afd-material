import { LitElement, html } from 'lit';

class PwTodoForm extends LitElement {
  static get is() {
    return 'pw-todo-form';
  }

  constructor() {
    super();    
  }

  firstUpdated() {
    super.connectedCallback();  
  }

  render() {
    return html`
      <form @submit=${this.onSubmit}>
        <input
          type="text" 
          name="todo-text"
        >
        <button>Agregar</button>
      </form>
    `;
  }

  onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const text = data.get('todo-text');

    this.sendTodoText(text);
  }

  sendTodoText(text) {
    const addTodo = new CustomEvent('pw-todo-form-add', {
      detail: text,
    });

    this.dispatchEvent(addTodo);
  }
}

customElements.define(PwTodoForm.is, PwTodoForm);