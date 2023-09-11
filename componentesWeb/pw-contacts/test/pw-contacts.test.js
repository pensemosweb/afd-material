import { fixture, expect, html, aTimeout } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';

import '../pw-contacts.js';
import { fillFieldsWithDummyData } from './testingHelpers.js';

let elem;
let  elemRoot;
beforeEach(async () => {
  elem = await fixture(html`<pw-contacts></pw-contacts>`);
  elemRoot = elem.shadowRoot;
});

describe('When user fills all fields and submit form ', () => {
  it('And clicks submit button, Then default form behaviour should be prevented', async () => {
    const form = elemRoot.querySelector('[data-testid="form"]');
    const spyOnSubmit = sinon.spy(elem, 'onSubmit');  
    
    fillFieldsWithDummyData(form);
  
    elem.requestUpdate(); // to spy correctly onSubmit method
    await elem.updateComplete;

    form.querySelector('[data-testid="submit"]').dispatchEvent(new MouseEvent('click'));
    
  
    expect(spyOnSubmit).to.be.called;
    spyOnSubmit.restore();
  });

  it('And press enter key, Then default form behaviour should be prevented', async () => {
    const form = elemRoot.querySelector('[data-testid="form"]');
    const spyOnSubmit = sinon.spy(elem, 'onSubmit');
    
    fillFieldsWithDummyData(form);
  
    elem.requestUpdate(); // to spy correctly onSubmit method
    await elem.updateComplete;

    const input = form.querySelector('[data-testid="tel"]');
    input.focus();

    await sendKeys({ press: 'Enter' });
  
    expect(spyOnSubmit).to.be.called;
    spyOnSubmit.restore();
  });
});