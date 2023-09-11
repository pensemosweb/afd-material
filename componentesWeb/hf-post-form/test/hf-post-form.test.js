import { html } from 'lit';
import { fixture, expect, oneEvent } from '@open-wc/testing';
import sinon from 'sinon';

import '../hf-post-form.js';

let el;
let elRoot;
beforeEach(async () => {
  el = await fixture(html`<hf-post-form></hf-post-form>`);
  elRoot = el.shadowRoot;
});

afterEach(() => {
  sinon.restore();
})

describe('When user wants to add an image of a post', () => {
  it('Then the form should load one image and show it, using input file', async () => {
    const onFileLoaded = oneEvent(el.fileReader, 'load');
    const inputFile = elRoot.querySelector('[data-testid="file"]');
    
    /* Modifying file property of input[type="file"] */
      Object.defineProperty(inputFile, 'files', {
        value: [new File([new ArrayBuffer(1)], 'hola.jpg')]
      });
      inputFile.dispatchEvent(new InputEvent('input'));
    
  
    await onFileLoaded;

    const img = elRoot.querySelector('[data-testid="selected-image"]');
    expect(img).to.not.be.null
  });

  it('Then the form should load one image and show it, using the method', async () => {
    const onFileLoaded = oneEvent(el.fileReader, 'load');
    const inputFile = elRoot.querySelector('[data-testid="file"]');
    
    // Or just using the function that the input triggers on input event (changes)
    el.onSelectFile({ target: { files: [new File([new ArrayBuffer(1)], 'hola.jpg')] }});
    await onFileLoaded;

    const img = elRoot.querySelector('[data-testid="selected-image"]');
    expect(img).to.not.be.null
  });
});
