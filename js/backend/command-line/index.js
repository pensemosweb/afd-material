const yargs = require("yargs");
const notas = require("./notas.js");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Agregar una nota nueva",
  builder: {
    title: {
      describe: "Titulo",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Contenido",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notas.agregar(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Eliminar una nota",
  builder: {
    title: {
      describe: "Titulo",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notas.eliminar(argv.title);
  },
});

yargs.command({
  command: "read",
  describe: "Leer una nota",
  builder: {
    title: {
      describe: "Titulo",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notas.consultar(argv.title);
  },
});

yargs.parse();
