let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem);

function generatePoem(event) {
  console.log("in generate poem");
  event.preventDefault();
  let poemElement = document.querySelector("#poem");

  new Typewriter("#poem", {
    strings: "hello world",
    autoStart: true,
  });
}
