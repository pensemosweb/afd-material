import { html, css, LitElement, nothing } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
export class PwLogin extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--pw-login-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      userName: { type: String, attribute: 'user-name' },
      password: {
          type: String,
          attribute: 'password'
      },
      testUndefined: { type: undefined, attribute: 'test-undefined' },
      testNull: { type: null, attribute: 'test-null' },
      testBool: { type: Boolean, attribute: 'test-bool' },
      testNumber: { type: Number, attribute: 'test-number' },
      testObj: { type: Object, attribute: 'test-obj' }
    };
  }

  formRef = createRef();

  constructor() {
    super();
    this.userName = '';
    this.password = '';
  } 

  performUpdate() {
    super.performUpdate();
    console.log('performUpdate');
  }

  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
    console.log(name, oldVal, newVal);
  }

  shouldUpdate(changedProps) {
    super.shouldUpdate(changedProps);
    console.log('shouldUpdate', changedProps);
    return true;
  }

  willUpdate(changedProps) {
    super.willUpdate(changedProps);
    console.log('willUpdate');
  }

  render() {
    console.log('render');
    console.log('userName', this.userName);
    //const enabled = this.formRef?.value?.checkValidity();
    return html`
    <p>${this.testObj.key}</p>
      <p>
        ${this.testNumber} ${this.testUndefined} ${this.testNull} ${this.testBool}
      </p>
      <form ${ref(this.formRef)} @submit=${this.onSubmit} data-testid="form">
        <label for="userName">
          <input
            id="userName"
            data-testid="userName"
            name="userName"
            value=${this.userName}
            @input=${this.onInput}
            required
            pattern="[A-z]{3,30}"
          />
        </label>

        <!-- <label for="name">
          <input
            id="name"
            data-testid="name"
            name="name"
            required
            pattern="[A-zÀ-ú]+\\s{0,1}[A-zÀ-ú]+"
          />
        </label> -->

        <label for="password">
          <input
            id="password"
            data-testid=${nothing}
            name="password"
            type="password"
            value=${this.password}
            @input=${this.onInput}
            required
          />
        </label>

        <button
          data-testid="login"
        >Login</button>
      </form>

      ${this.userName}
      ${this.password}
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('connectedCallback');
  }

  update(changedProps) {
    super.update(changedProps);
    console.log('update');
  }

  firstUpdated(changedProps) {
    console.log('firstUpdated');
  }

  updated(changedProps) {
    console.log('updated');
  }

  onInput(e) {
    const field = e.target;
    this[field.name] = field.value;
  }

  onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const detail = {
      userName: data.get('userName'),
      password: data.get('password')
    };

    this.dispatchEvent(new CustomEvent('pw-login-submit', {
      detail
    }))
  }
}
