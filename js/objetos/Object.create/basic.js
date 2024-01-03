const persona = {
  comer() {
    return "Estoy comiendo";
  },
  nadar() {
    return "Estoy nadando";
  },
};

const jaime = Object.create(persona);
jaime.molestar = function () {
  return "Estoy molestando";
};
