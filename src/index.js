function fetchJokes(joke) {
  // code here :
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!joke) {
        reject("idontgetit");
      } else {
        resolve(fetch(joke));
      }
    }, 1000);
  });
}

async function displayJokes() {
  // code here :
  const response = await fetchJokes(
    "https://official-joke-api.appspot.com/random_joke"
  );
  const data = await response.json();

  const element = document.getElementById("joke-container");
  const pelement = document.createElement("p");
  element.appendChild(pelement);
  console.log(data.setup);
  pelement.innerHTML = `${data.setup}`;
  const answerelement = document.createElement("p");
  element.appendChild(answerelement);
  answerelement.innerHTML = `${data.punchline}`;
  console.log(data);
}

// don't forget to invoke the function :
// displayJokes()

displayJokes();
