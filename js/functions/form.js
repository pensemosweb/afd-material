function clearField(selector) {
  const field = document.querySelector(selector);
  field.value = '';

  return undefined;
}

function sendMessage(event) {
  event.preventDefault();
  clearField('#name');
  clearField('#phone');
  clearField('#email');
}

function avoidDefaultBehaviour(patito) {
  patito.preventDefault();
}