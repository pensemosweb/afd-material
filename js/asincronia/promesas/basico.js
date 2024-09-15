function get(url) {
  return fetch(url).then((response) => response.json());
}

let pro = get("https://jsonplaceholder.typicode.com/todos");
console.log(pro);

let promise;

function getReuse(i) {
  promise = promise || get("https://jsonplaceholder.typicode.com/todos");

  return promise.then(function (response) {
    return get("https://jsonplaceholder.typicode.com/todos/" + i);
  });
}

getReuse(1).then((res) => {
  console.log(res);
  getReuse(2).then((res) => {
    console.log(res);
    getReuse(3).then((res) => {
      console.log(res);
      getReuse(4).then((res) => {
        console.log(res);
        getReuse(5).then((res) => {
          console.log(res);
        });
      });
    });
  });
});
