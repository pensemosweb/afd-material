function handleSend(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const data = Object.fromEntries(formData.entries());

  console.log(data);
}

const form = document.querySelector('#form');
form.addEventListener('submit', handleSend);