export function renderVista() {
  console.log("#######################");
  console.log("RENDER VISTA");
  console.log("#######################");
  console.log(saludo); // Tiene acceso a saludo si se ejecuta desde el exterior, donde la constante saludo ya ha sido definida
  renderHeader();
  renderMain();
  renderFooter();
}

//Si se invoca antes de la inicializacion de la constante saludo, pasara un error, no hay elevado de constantes
// Uncaught ReferenceErrpr: Cannot access 'saludo' before initialization
// renderVista();

export function renderHeader() {
  console.log("------------------");
  console.log("renderHeader");
  console.log("------------------");
  renderMenu();
  renderBanner();
  renderSearchForm();
  // ....
}

export function renderMain() {
  console.log("------------------");
  console.log("renderMain");
  console.log("------------------");
  renderContent();
  renderAside();
  // ...
}

export function renderFooter() {
  // ...
  console.log("------------------");
  console.log("renderFooter");
  console.log("------------------");
  renderSocialLinks();
}

function renderMenu() {
  // ...
  console.log("renderMenu");
}

function renderBanner() {
  // ...
  console.log("renderBanner");
}

function renderSearchForm() {
  // ...
  console.log("renderSearchForm");
}

function renderContent() {
  // ...
  console.log("renderContent");
}

function renderAside() {
  // ...
  console.log("renderAside");
}
function renderSocialLinks() {
  console.log("renderSocialLinks");
}

const saludo = "HOLA";
