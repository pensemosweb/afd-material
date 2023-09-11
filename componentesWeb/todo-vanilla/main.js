
  const form = document.querySelector('form');
  const list = document.querySelector('ol');
  const todos = [];

  function submitHandler(e) {
    e.preventDefault();

    const data = new FormData(form);
    const text = data.get('todo-text');
    const item = { text, isDone: false };
    todos.push(item);


    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', (e) => {
      item.isDone = !item.isDone
    });

    const btnRemove = document.createElement('button');
    btnRemove.textContent = 'X';
    btnRemove.addEventListener('click', (e) => {
      const idx = todos.indexOf(item);
      todos.splice(idx, 1);
      e.target.closest('li').remove();
    });

    const li = document.createElement('li');
    li.textContent = text;
    li.appendChild(checkbox);
    li.appendChild(btnRemove);

    list.appendChild(li);

    form.reset();
  }
  form.addEventListener('submit', submitHandler);


let t = ['cenar', 'comer', 'cenar'];

let idx = t.indexOf('cenar');

t.splice(idx, 1);


t = t.filter(item => item !== 'cenar')

const uno = { text: 'cenar' };
const dos = { text: 'comer' };

let t = [uno, dos, uno];

//let idx = t.indexOf(t[0]);
let idx = t.indexOf(tres);

t.splice(idx, 1);