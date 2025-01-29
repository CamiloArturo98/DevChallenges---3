// References
let searchBtn = document.querySelector("#search-btn"),
  input = document.querySelector("#movie-search"),
  movieResult = document.querySelector("#movies-results");

searchBtn.addEventListener("click", () => {
  let inputValue = input.value;
  inputValue = `https://www.omdbapi.com/?t=${inputValue}&apikey=231b5f86`;
  fetch(inputValue)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })

    .then((data) => {
      
      data.Title;
      data.Year;
      data.Poster;

      let img = document.createElement("img");
      let dataa = (movieResult.innerHTML = `<h3>${data.Title} ${data.Year}</h3>`);
      img.src = `${data.Poster}`;
      movieResult.appendChild(img, dataa);
    })

    .catch((err) => {
      alert("Se ha producido un error :" + err.message);
    });
});

