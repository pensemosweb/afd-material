import { html, css, LitElement } from 'lit';

export class PwTodoNov extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--pw-todo-nov-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      // items: Array
      todoItems: {
        type: Array,
        attribute: 'todo-items',
        reflect: true
      },
      _todoItems: Array,
      saludo: String,
    };
  }

  constructor() {
    console.log('Constructor');
    super();
    this.todoItems = [];
    this._todoItems = [];
    this.saludo = 'Hola';
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('ConnectedCallback')
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log('attributeChangedCallback antes');
    super.attributeChangedCallback(attrName, oldVal, newVal);
    console.log('attributeChangedCallback despues');
    console.log(attrName, oldVal, newVal, 'attributeChangedCallback');
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    console.log('disconnectedCallback')
  }

  performUpdate() {
    console.log('performUpdate Antes')
    super.performUpdate();
    console.log('performUpdate despues');
  }

  shouldUpdate(changedProps) {
    console.log('shouldUpdate');
    if (changedProps.has('todoItems') || changedProps.has('saludo')) {
      return true;
    }
    
    return false;
  }

  scheduleUpdate() {
    console.log('scheduleUpdate');
    super.scheduleUpdate();
  }

  willUpdate(changedProps) {
    console.log('willUpdate');
    this._todoItems = this.todoItems.map(item => ({ text: item, selected: false }))
  }

  update(changedProps) {
    console.log('update');
    super.update(changedProps);
  }

  render() {
    console.log('render');
    return html`
      ${this._date}
      ${JSON.stringify(this.todoItems)}
      <section>${this.saludo}</section>
      <section>${JSON.stringify(this._todoItems)}</section>
      <button @click=${this.unMetodo}>updateComplete</button>
    `;
  }

  // Pinta el dom

  firstUpdated(changedProps) {
    console.log('firstUpdated');
  }

  updated(changedProps) {
    console.log('Updated');
  }

  async unMetodo() {
    this.saludo = 'Hi';

    await this.updateComplete;

    alert(`Saludo es Hi`);
  }
}
