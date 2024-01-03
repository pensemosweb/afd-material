const fs = require("fs");

//asyncrono, mientras este codigo se ejectua en el SO
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

const result = fs.readFileSync("file.txt", "utf8");
console.log(result + " sync");

// Yo puedeo hacer otras cosas
console.log("HOLA MUNDO DESDE NODEJS :D");
console.log(10 * 1000);
