class PwLifeCycle extends HTMLElement {
  constructor() {
    super();
    console.log('constructor');
  }

  static observedAttributes = ['style'];

  /**
   * Se ejecuta cuando se inserta el elemento en el DOM
   */
  connectedCallback() {
    // super.connectedCallback(); --> Lit
    console.log('connectedCallback');
  }

  /**
   * Cuando un attributo cambia
   */
  attributeChangedCallback(attrName, oldValue, newValue) {
    // super.attributeChangedCallback(attrName, oldValue, newValue) --> Lit
    console.log('attributeChangedCallback');
    console.log(attrName, oldValue, newValue);
  }

  /**
   * Cuando el elemento se elimina o desconnecta del DOM. Puede ser cuando se mueve de lugar
   */
  disconnectedCallback() {
    console.log('disconnectedCallback');
  }

  adoptedCallback() {
  }
}

customElements.define('pw-lifecycle', PwLifeCycle);

const pwLC = document.createElement('pw-lifecycle');
document.body.appendChild(pwLC);