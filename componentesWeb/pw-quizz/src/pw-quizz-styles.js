import { css, unsafeCSS } from 'lit';

const padding = 25;

export default css`

  :host {
    display: block;
    padding: ${unsafeCSS(padding)}px;
    color: var(--pw-quizz-text-color, #000);
  }
`;

export function saludar() {
  return 'Hola';
}