const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Get Quotes From API
// Alternative source of quotes
// https://zenquotes.io/api/random

async function getQuotes() {
    loading();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        showQuote();
    } catch (error) {
        alert(error)
    }
}

function showQuote() {
    loading();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    authorText.textContent = quote.author ?? 'Unknown'; // .textContent sets the text content of an element
    // Check quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote'); // .classlist.add() adds a class to an element
    } else {
        quoteText.classList.remove('long-quote'); // .classlist.remove() removes a class from an element
    }
    quoteText.textContent = quote.text;
    complete()
}

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank'); // Opens a new window
}

// Event Listeners
newQuoteBtn.addEventListener('click', showQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();
