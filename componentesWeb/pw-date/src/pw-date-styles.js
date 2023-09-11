import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
    padding: 25px;
    
    color: var(--pw-date-text-color, #000);
  }

  :host([algo-otro]) {
    background-color: pink;
  }

  :host([hidden]) {
    display: none;
  }

  p {
    color: orange;
  }

  ::slotted(p) {
    color: red;
  }

`;