let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem);

//build api url
//call api url
//use api url to display
function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#poem-prompt");
  console.log(instructionsInput.value);
  const apiKey = "c49tafo312b920a246236ebd70ea80ab";
  let prompt = `write a poem about ${instructionsInput.value}`;
  let context =
    "you are a skilled poet who writes 3 line poems that are signed by 'SheCodes AI' at the bottom of the poem not the top. The sign off within a <strong> element. The sign off should happen on a new line.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

function displayPoem(response) {
  let poemElement = document.querySelector("#poem");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 0.1,
  });
}
