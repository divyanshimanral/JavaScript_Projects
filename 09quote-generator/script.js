// Get the DOM elements we need
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const generateBtn = document.getElementById("generate-btn");
const saveBtn = document.getElementById("save-btn");
const displayBtn = document.getElementById("display-btn");
const savedQuotesContainer = document.getElementById("saved-quotes-container");

// Get saved quotes from local storage, or initialize to empty array
let savedQuotes = JSON.parse(localStorage.getItem("savedQuotes")) || [];

// Generate a random quote and update the DOM
const generateQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quoteEl.textContent = `" ${data.content} "`;
      authorEl.textContent = `- ${data.author}`;
    });
};

// Save the current quote to local storage, if it's not already saved
const saveQuote = () => {
  const quote = quoteEl.textContent;
  const author = authorEl.textContent.slice(2); // Remove the leading "- "

  // Check if the quote is already in the saved quotes array
  if (savedQuotes.some((q) => q.quote === quote && q.author === author)) {
    alert("This quote is already saved.");
    return;
  }

  // Add the quote to the saved quotes array
  savedQuotes.push({ quote, author });

  // Save the updated array to local storage
  localStorage.setItem("savedQuotes", JSON.stringify(savedQuotes));
};

// Remove a saved quote from the list and local storage
const removeQuote = (quoteIndex) => {
  savedQuotes.splice(quoteIndex, 1);
  localStorage.setItem("savedQuotes", JSON.stringify(savedQuotes));
  displaySavedQuotes();
};

// Display the saved quotes in the DOM
const displaySavedQuotes = () => {
  // Clear any previously displayed quotes
  savedQuotesContainer.innerHTML = "";

  // Create a new list element for each saved quote
  savedQuotes.forEach((quote, index) => {
    const li = document.createElement("li");
    li.classList.add('list');
    li.textContent = `${quote.quote} ${quote.author}`;

    // Add a button to remove the quote from the list
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("btn");
    removeBtn.addEventListener("click", () => {
      removeQuote(index);
    });

    li.appendChild(removeBtn);
    savedQuotesContainer.appendChild(li);
  });
};

// Add event listeners to the buttons
generateBtn.addEventListener("click", generateQuote);
saveBtn.addEventListener("click", saveQuote);
displayBtn.addEventListener("click", displaySavedQuotes);

// Generate an initial quote when the page loads
generateQuote();
