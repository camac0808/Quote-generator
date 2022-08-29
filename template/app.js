const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// Show new quote
const newQuote = () => {
  const quote = data[Math.floor(Math.random() * data.length)];
  // If author is blank, replace unknown
  if (quote.author === null) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  // Quote length to determine styling font size
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
};

// Tweet Quote
const tweetQuote = () => {
  const TWITTER_URL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(TWITTER_URL, "_blank");
};

// Get quotes from API
const getQuotes = async () => {
  const API_URL = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(API_URL);
    data = await response.json();
    newQuote();
  } catch (err) {
    console.log(err);
  }
};

// Event listener
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On load
getQuotes();

// Another option quote api
// https://zenquotes.io/api/quotes json array 50 random on each request
// https://zenquotes.io/api/today generate the quote of the day on each request
// https://zenquotes.io/api/random generate a random quote on each request
