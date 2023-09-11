export function typeInField(field, value) {
  field.value = value;
  field.dispatchEvent(new InputEvent('input', { data: field.value }));
}

export function fillFieldsWithDummyData(container) {
  typeInField(container.querySelector('[data-testid="name"]'), 'Jaime');
  typeInField(container.querySelector('[data-testid="lastName"]'), 'Cervantes');
  typeInField(container.querySelector('[data-testid="email"]'), 'jaime.cervantes.ve@gmail.com');
  typeInField(container.querySelector('[data-testid="tel"]'), '2781092116');
}