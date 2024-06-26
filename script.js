const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Get Quotes From API
// Alternative source of quotes
// https://zenquotes.io/api/random


async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        const quote = getRandomQuote(apiQuotes);
        authorText.textContent = quote.author ?? 'Unknown'; // .textContent sets the text content of an element

        // Check quote length to determine styling
        if (quote.text.length > 120) {
            quoteText.classList.add('long-quote'); // .classlist.add() adds a class to an element
        } else {
            quoteText.classList.remove('long-quote'); // .classlist.remove() removes a class from an element
        }

        quoteText.textContent = quote.text;
    } catch (error) {
        alert(error)
    }
}


function getRandomQuote(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank'); // Opens a new window
}

// Event Listeners
newQuoteBtn.addEventListener('click', getQuotes);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();
// console.log(getRandomQuote(apiQuotes));