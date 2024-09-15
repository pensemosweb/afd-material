import _ from "lodash";
import imgPerfil from "./imgs/perfil.jpg";
import habilidades from "./habilidades.csv";
import sobreMi from "./sobreMi.yaml";
import experiencia from "./experiencia.json5";
import "./styles.scss";

const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

console.log(habilidades);

function addImage() {
  const miImagen = main.querySelector("img");
  miImagen.src = imgPerfil;
}

function addSobreMi() {
  const container = document.querySelector("#sobre-mi");
  Object.keys(sobreMi).forEach((key) => {
    const h3 = document.createElement("h3");
    h3.textContent = `${[key]}`;
    container.appendChild(h3);
    sobreMi[key].forEach((item) => {
      const p = document.createElement("p");
      p.textContent = `${item.name}: ${item.description}`;
      container.appendChild(p);
    });
  });
}

function addExperiencia() {
  const container = document.querySelector("#experiencia");
  experiencia.forEach((item) => {
    const h3 = document.createElement("h3");
    h3.textContent = `${item.title}`;
    container.appendChild(h3);
    const p = document.createElement("p");
    p.textContent = `${item.company}: ${item.description} ${item.date}`;
    container.appendChild(p);
  });
}

function addHabilidades() {
  const container = document.querySelector("#habilidades");
  habilidades.forEach((item) => {
    if (item.length < 2) return;
    const p = document.createElement("p");
    p.textContent = `${item[0]}, ${item[1]} años de experiencia, ${item[2]} de nivel de conocimiento.`;
    container.appendChild(p);
  });
}

function addFooter() {
  const footerText = document.createElement("p");
  footerText.textContent = "Jesus Vazquez Lobato";
  footer.appendChild(footerText);
}

addImage();
addSobreMi();
addExperiencia();
addHabilidades();
addFooter();
