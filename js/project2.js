const nextButton = document.getElementById("nextButton");
const formButton = document.getElementById("formButton");
const inputQuery = document.getElementById("inputQuery");
const result = document.getElementById("imageDiv");

formButton.addEventListener("submit", function (event) {
  event.preventDefault();
  const query = inputQuery.value;
  searchBar(query);
});

function searchBar(query) {
  const apiKey = "yNi8ZAj9qBwJtgL88PnOmQA0EiTUvKe3";
  let urlSite = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=25&q=${query}`;

  fetch(urlSite)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Bad response");
      }
      return response.json();
    })
    .then(function (json) {
      console.log(json.data[0].images.fixed_width.url);
      let resultHTML = "";
      json.data.map((obj) => {
        const url = obj.images.fixed_width.url;
        const width = obj.images.fixed_width.width;
        const title = obj.title;
        resultHTML += `<img class="items" src="${url}" width="${width}" title="${title}" alt="title">`;
        return resultHTML;
      });

      result.innerHTML = resultHTML;
    })
    .catch(function (error) {
      console.log(error.message);
    });
}
