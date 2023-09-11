import { html, css, LitElement } from 'lit';

export class PwDateDic extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--pw-date-dic-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      date: { type: Date },
      _formattedDate: { type: String, state: true }
    };
  }

  render() {
    return html`
      <p class="content">${this._formattedDate}</p>
    `;
  }

  updated(changedProps) {
    if (changedProps.has('date')) {
      this._formattedDate = this.getFormattedDate();
    }
  }

  getFormattedDate() {
    const dateText =  this.date.toLocaleDateString();
    const timeText = this.date.toLocaleTimeString();

    return `${dateText} ${timeText}`;
  }
}
