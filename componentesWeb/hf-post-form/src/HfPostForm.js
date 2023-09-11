import { html, css, LitElement } from 'lit';

export class HfPostForm extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hf-post-form-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      imgSrc: { type: String, state: true }
    };
  }

  constructor() {
    super();
    this.imgSrc = '';
  }

  render() {
    return html`
      <form>
        <input type="file" @input=${this.onSelectFile} accept=".jpg, .png, .jpeg, .svg, .webp" data-testid="file">
        <input type="file" @input=${this.onSelectFile} accept=".jpg, .png, .jpeg, .svg, .webp" multiple>
        ${
          this.imgSrc && html`
            <img src=${this.imgSrc} alt="preview file" width="400" data-testid="selected-image">
            <p>
              Bytes: ${this.bytesSize}
              Approx Size: ${this.size}
            </p>
          `
        }

      </form>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.fileReader = new FileReader();
    this.fileReader.addEventListener('load', this.loadImage.bind(this));
  }

  loadImage(e) {
    // e is a ProgressEvent
    this.imgSrc = e.target.result;
  }

  disconnectedCallback() {
    super.connectedCallback();
    this.fileReader.removeEventListener('load', this.loadImage);
  }

  onSelectFile(event) {
    const inputFile = event.target;
    const file = inputFile.files[0];
    const bytes = file?.size;
    

    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    
    const exponent = Math.min(Math.floor(bytes / Math.log(1024)), units.length - 1);
    const approx = bytes / 1024 ** exponent;
    this.bytesSize = bytes;
    this.size = `${approx.toFixed(2)} ${units[exponent]}`;

    this.fileReader.readAsDataURL(file);
  }
}
