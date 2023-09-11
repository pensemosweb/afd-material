const jaime = {
  name: 'Jaime',
  hasGlasses: true,
  hasChildren: true,
  childrenAmount: 2,
  lastName: 'Cervantes',
  age: 35
};

jaime.isMarried = false;
jaime.isUgly = false;
jaime.speak = function (question) {
  return 'Hola, soy Jaime ' + question;
};

jaime.direccion = {
  calle: 'Melchor Ocampo',
  num: 2,
  colonia: 'Las flores',
  getAddress: function getAddress() {
    return this.calle + ' ' + this.num + ' ' + this.colonia;
  }
}

function saludar() {
  return 'Hola';
}

function getAddress() {
  return 'get Address';
}

const speakResult = jaime.speak('¿Cómo te llamas?');
console.log(speakResult);
document.querySelector('#mensaje').innerHTML = speakResult;