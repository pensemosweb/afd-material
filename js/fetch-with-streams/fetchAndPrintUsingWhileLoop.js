export async function fetchAndPrintUsingWhileLoop() {
  // const reader = response.body.getReader();
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    console.log("################################\n");
    console.log("CHUNK");
    console.log("################################\n", value);
    //console.log("Received", new TextDecoder().decode(value));
  }

  console.log("Completo");
}
