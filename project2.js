// As a user I want to be able to:
// - type in text
// - click submit
// - view giphs on a page
// From tech side:
//- detect when submit is clicked
//- grab user input
//- use user input in api call
//-parse the response
//- display data

// let url = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=20&q=`;

// const categoryContainer = document.querySelector('.js-data-container');
const formButton = document.getElementById("formButton");
const inputQuery = document.getElementById("inputQuery");

formButton.addEventListener("submit", function (event) {
  event.preventDefault();
  const query = inputQuery.value;
  searchBar(query);
});
function searchBar(query) {
  const apiKey = "yNi8ZAj9qBwJtgL88PnOmQA0EiTUvKe3";
  let urlSite = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=20&q=${query}`;

  fetch(urlSite)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json.data[0].images.fixed_width.url);
      const result = document.getElementById("data-container");
      let resultHTML = "";
      json.data.map((obj) => {
        const url = obj.images.fixed_width.url;
        const width = obj.images.fixed_width.width;
        const title = obj.title;
        resultHTML += `<img src="${url}"width="${width}"title="${title}"alt="title">`;
        return resultHTML;
      });
      // json.data.forEach(function (obj) {
      //   console.log(obj);
      //   const url = obj.images.fixed_width.url;
      //   const width = obj.images.fixed_width.width;
      //   const title = obj.title;
      //   resultHTML += `<img src="${url}"width="${width}"title="${title}"alt="title">`;
      // });
      result.innerHTML = resultHTML;
    })
    .catch(function (error) {
      console.log(error.message);
    });
}


//       json.data.forEach(function (obj) {
//         const img = document.createElement('img');
//         img.src = obj.images.fixed_width.url;
//         img.alt = obj.title;
//         dataContainer.appendChild(img);
//       });
//     })
//     // .then(function (json) {
//     //     console.log(json);
//     //   console.log(json.data[0].images.fixed_width.url);
//     //   json.data.forEach(function (obj) {
//     //     console.log(obj.images.fixed_width.url);

//     .catch(function (error) {
//       console.error(error.message);
//     });
// }
// document.getElementById('search-button').addEventListener('submit', function(event) {
//   event.preventDefault();
//   const query = document.getElementById('inputQuery').value;
//   if(query){
//     callapi(query);
//
