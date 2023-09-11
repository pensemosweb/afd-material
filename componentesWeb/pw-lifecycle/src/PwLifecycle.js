import { html, css, LitElement } from 'lit';

export class PwLifecycle extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--pw-lifecycle-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  performUpdate() {
    super.performUpdate();
    console.log('performUpdate');
  }

  shouldUpdate(changedProps) {
    console.log('shouldUpdate', changedProps);
    console.log('counter-->', this.counter);
    if (
      (changedProps.has('counter') && this.counter > 20) ||
      changedProps.get('counter') === undefined
    ) {
      return true;
    }

    return false;
  }

  willUpdate(changedProps) {
    console.log('willUpdate', changedProps);
    if(changedProps.has('counter') && this.counter === 25) {
      this.title = 'Llegamos a 25'
    }
  }

  render() {
    console.log('render');
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
/*
class Lit {
  performUpdate() {
    shouldUpdate();
    render();
  }
}

class PwLifecycle extends Lit {
  performUpdate() {
    super.performUpdate();
    console.log('performUpdate');
  }
}

*/
