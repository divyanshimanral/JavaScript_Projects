let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
let saveBtn = document.getElementById("save-btn");

const favoriteQuotes = JSON.parse(localStorage.getItem("favoriteQuotes")) || [];
const url = "https://api.quotable.io/random"; 

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
  };
  
window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);

saveBtn.addEventListener("click", () => {
  const quoteText = quote.innerText;
  const quoteAuthor = author.innerText;
  const quoteObj = {quote: quoteText, author: quoteAuthor};
  favoriteQuotes.push(quoteObj);
  localStorage.setItem("favoriteQuotes", JSON.stringify(favoriteQuotes));
})


