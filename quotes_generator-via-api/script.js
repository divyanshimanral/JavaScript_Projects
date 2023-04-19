let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
// let btn2 = document.getElementById("btn2");

const favoriteQuotes = [];
const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      console.log(item.content);
      console.log(item.author);
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
// btn2.addEventListener("click", () => {
//   favoriteQuotes.push();
//   console.log("Quote added to favorites");
// });

// const favoritesList = document.createElement("ul");
// for (let i = 0; i < favoriteQuotes.length; i++) {
//   const listItem = document.createElement("li");
//   listItem.textContent = favoriteQuotes[i];
//   favoritesList.appendChild(listItem);
// }
// document.body.appendChild(favoritesList);


