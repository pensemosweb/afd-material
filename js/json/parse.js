JSON.parse(`[
  {
    "text": "Hacer ejercicio",
    "completed": true
  },
  {
    "text": "Desayunar",
    "completed": true
  }
]`);

const todos = [
  {
    id: "94445643-fea8-4501-96cb-586da368752b",
    title: "cervantes",
    completed: false,
  },
  {
    id: "31e9b620-1e13-4e3c-b7b3-e3e93dd6e57a",
    title: "jaime",
    completed: false,
  },
  {
    id: "19535acf-003b-481f-b995-d899fa4507da",
    title: "velasco",
    completed: true,
  },
];

const mappedTodos = [];
for (let i = 0; i < todos.length; i++) {
  const item = todos[i];
  mappedTodos.push(item.title);
}

console.log(mappedTodos); // ["cervantes", "jaime", "velasco"]

todos.map((item) => item.title);
