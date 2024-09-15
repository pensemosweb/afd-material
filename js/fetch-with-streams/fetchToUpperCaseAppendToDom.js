function upperCaseStream() {
  return new TransformStream({
    transform(chunk, controller) {
      controller.enqueue(chunk.toUpperCase());
    },
  });
}

function appendToDOMStream(el) {
  return new WritableStream({
    write(chunk) {
      el.append(chunk);
    },
  });
}

export function fetchToUpperCaseAppendToDom() {
  fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.body
      .pipeThrough(new TextDecoderStream())
      //.pipeThrough(upperCaseStream())
      .pipeThrough(
        new TransformStream({
          transform(chunk, controller) {
            const heading = document.createElement("h1");
            heading.textContent = "##########CHUNK##########";
            document.querySelector("#response").append(heading);
            controller.enqueue(chunk);
          },
        })
      )
      .pipeTo(appendToDOMStream(document.querySelector("#response")))
  );
}
