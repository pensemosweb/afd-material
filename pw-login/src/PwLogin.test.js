import { html } from 'lit';
import { aTimeout, expect, fixture, oneEvent } from '@open-wc/testing';
import sinon from 'sinon';
import '../pw-login.js'
import { typeInField, typeInFormFields } from './testingHelpers.js';
import { sendKeys } from '@web/test-runner-commands';

let elem;
let elemRoot;
beforeEach(async () => {
  elem = await fixture(html`<pw-login></pw-login>`);
  elemRoot = elem.shadowRoot;
})

describe("When username and passowrd are entered correctly", () => {
  it('Then the login button should be activated', async () => {
    typeInFormFields(elemRoot, 'Jaime', '1234567');

    await elem.updateComplete;

    const loginBtn = elemRoot.querySelector('[data-testid="login"]');
    expect(loginBtn).not.to.have.attribute('disabled');
  });
});


it('When clicks on login button, Then the form submiting should be handled', async () => {
  const spyOnSubmit = sinon.spy(elem, 'onSubmit');
  const submitEvent = oneEvent(elemRoot.querySelector('[data-testid="form"]'), 'submit');
  const loginBtn = elemRoot.querySelector('[data-testid="login"]');

  typeInFormFields(elemRoot, 'Jaime', '1234567');
  await elem.updateComplete;
  loginBtn.dispatchEvent(new MouseEvent('click'));

  const result = await submitEvent;
  expect(result instanceof SubmitEvent).to.be.true;
  expect(spyOnSubmit).to.be.called;
});

it('When user press enter key, then the form submitting should be handle', async () => {
  const spyOnSubmit = sinon.spy(elem, 'onSubmit');
  const userName = elemRoot.querySelector('[data-testid="userName"]');
  const password = elemRoot.querySelector('[data-testid="password"]');

  typeInField(userName, 'jaime');
  typeInField(password, 'jaime');

  password.focus();
  await sendKeys({ press: 'Enter' });

  expect(spyOnSubmit).to.be.called;
});


it('When form is submitted, Then custom event submitting should be dispatch', async () => {
  const submitEvent = oneEvent(elem, 'pw-login-submit');

  typeInFormFields(elemRoot, 'Jaime', '1234567');
  await elem.updateComplete;
  elemRoot.querySelector('[data-testid="login"]').click();

  const { detail } = await submitEvent;
  expect(detail).not.to.be.null;
});

it('When form is submitted, Then custom event submitting should be dispatch', async () => {
  const submitEvent = oneEvent(elem, 'pw-login-submit');
  const form = elemRoot.querySelector('[data-testid="form"]')

  typeInFormFields(elemRoot, 'Jaime', '1234567');
  await elem.updateComplete;
  setTimeout(() => elem.onSubmit({ target: form, preventDefault: () => {} }))

  const { detail } = await submitEvent;
  expect(detail).not.to.be.null;
});
