import { html, css, LitElement } from 'lit';
import styles from './pw-date-styles.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

export class PwDate extends LitElement {
  static get styles() {
    return [
      styles,
      css`
        :host {
          border: 1px solid red;
        }
      `,
      //sharedStylesDates
    ];
  }

  static get properties() {
    return {
      date: {
        type: Date,
        converter(value) {
          return new Date(value);
        }
      },
      dateOptions: { type: Object },
      timeOptions: { type: Object },
      locale: { type: String },
      color: { type: String }
    };
  }

  constructor() {
    super();
    this.date = new Date();
    this.dateOptions = {};
    this.timeOptions = {};
    this._dateOptions = {
      weekday: 'short', // long, short, narrow
      year: 'numeric', // numeric, 2-digit
      month: '2-digit', // numeric, 2-digit, long, short, narrow
      day: '2-digit', // numeric, 2-digit
      //dateStyle: 'full', // full, long, medium, short
      //timeStyle: 'full', // full, long, medium, short

    };
    this._timeOptions = {
      // numeric, 2-digit
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    this.locale = 'es-MX';
    this.color = 'blue';
    this.classes = {};
  }

  render() {
    const containerClasses = {
      'before-contaier': true ? true : false,
      'btn-primary': this.color ? true: false
    };

    console.log(this.color);
    return html`
      <style>
        :host {
          background-color: ${this.color};
        }
      </style>
      <div class=${classMap(containerClasses)}>
        <slot name="before"></slot>
      </div>
      <p class="content">${this.getFormattedDate(this.date)}</p>
      <slot name="after"></slot>
      <button @click="${this.cambiarColor}">Cambiar Color</button>
    `;
  }

  cambiarColor() {
    this.color = 'pink';
  }

  getFormattedDate(date) {
    const dateStr =  date.toLocaleDateString(this.locale, { ...this._dateOptions, ...this.dateOptions });
    const timeStr = date.toLocaleTimeString(this.locale, { ...this._timeOptions, ...this.timeOptions });

    return `${dateStr} ${timeStr}`;
  }
}
