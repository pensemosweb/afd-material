import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';

import '../pw-todo.js';

describe('PwTodo', () => {
  it('test onSubmit', async () => {
    const el = await fixture(html`<pw-todo></pw-todo>`);
    const stub_sendTodoText = sinon.stub(el, 'sendTodoText');
    stub_sendTodoText.returns("Hola");

    el.onSubmit({ preventDefault() {}, target: el.shadowRoot.querySelector('form') })

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });
});
