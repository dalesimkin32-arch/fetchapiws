console.log("Halo Whirled!");

async function getMyStuffFromOverThere() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("HTTP Response:", response);
  const json = await response.json();
  console.log("JSON Data:", json);
}

async function getChuckJokeOfTheDay() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  console.log("HTTP Response:", response);
  const chuck = await response.json();
  console.log("JSON data: ", chuck);
  console.log(chuck.value);
}

getMyStuffFromOverThere();

getChuckJokeOfTheDay();

async function getSuffin() {
  const response = await fetch("https://v2.jokeapi.dev/joke/Any");
  console.log("HTTP Response:", response);
  const jokeRes = await response.json();
  console.log("JSON data: ", jokeRes);
  /* console.log(joke.); */
  if (jokeRes.type === "single") {
    jokeText = jokeRes.joke;
  } else if (jokeRes.type === "twopart") {
    jokeText = jokeRes.setup + "/n" + jokeRes.delivery;
  }
  console.log(jokeText);
}

getSuffin();
