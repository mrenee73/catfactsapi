document.addEventListener("click", function (event) {
  
    if (!event.target.matches("#button")) return;
  
    fetch("https://cat-fact.herokuapp.com/facts/random")
      .then((response) => response.json())
      .then((data) => console.log(data));
    });
  
  function renderFacts(data) {
    const setup = document.getElementById("setup");
    const factoid = document.getElementById("factoid");
    setup.innerHTML = data.setup;
    factoid.innerHTML = data.factoid;
    const error = document.getElementById("error");
    error.innerHTML = "";
  }
  
  function renderError() {
    const error = document.getElementById("error");
    error.innerHTML = "Whoops, something went wrong. Please try again later!";
  }
  