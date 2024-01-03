const express = require("express");
const server = express();
const port = 3000;

const menu = [
  {
    name: "Pizza",
    price: 5,
  },
  {
    name: "Burger",
    price: 6,
  },
  {
    name: "Salad",
    price: 7,
  },
];

server.get("/", (req, res) => {
  res.send("Hola mundo!");
});

server.get("/menu", (req, res) => {
  res.json(menu);
});

server.get("/menu/:name", (req, res) => {
  const dish = menu.find(
    (dish) => dish.name.toLowerCase() == req.params.name.toLowerCase()
  );
  res.json(dish);
});

server.get("/menu/price/:price", (req, res) => {
  const dishes = menu.filter((dish) => dish.price == req.params.price);
  res.json(dishes);
});

server.post("/menu", (req, res) => {
  const dish = req.body;
  menu.push(dish);
  res.json(dish);
});

server.listen(port, () => {
  console.log(`Example server listening at http://localhost:${port}`);
});
