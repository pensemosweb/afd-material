import { LitElement, html } from "lit";

class PWTodoForm extends LitElement {
  static get is() {
    return 'pw-todo-form';
  }

  render() {
    return html`
      <form @submit=${this.onSubmit}>
        <input name="text" />
        <button>Agregar</button>
      </form>
    `;
  }

  onSubmit(e) {
    e.preventDefault();
  
    const data = new FormData(e.target);
    const text = data.get('text');
    this.sendText(text);
  }

  sendText(text) {
    const event = new CustomEvent('pw-todo-form-add', { detail: text });

    this.dispatchEvent(event);
  }
}

customElements.define(PWTodoForm.is, PWTodoForm);