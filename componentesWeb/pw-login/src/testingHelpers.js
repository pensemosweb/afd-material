
export function typeInField(field, value) {
  field.value = value;
  field.dispatchEvent(new InputEvent('input', { data: field.value }));
}

export function typeInFormFields(elemRoot, uName, uPassword) {
  const userName = elemRoot.querySelector('[data-testid="userName"]');
  const password = elemRoot.querySelector('[data-testid="password"]');
  typeInField(userName, uName);
  typeInField(password, uPassword);
}
