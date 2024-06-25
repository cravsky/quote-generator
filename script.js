let apiQuotes = [];

// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        // console.log(apiQuotes);
        console.log(getRandomQuote(apiQuotes));
    } catch (error) {
        alert(error)
    }

}

function getRandomQuote(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// On Load
getQuotes();
// console.log(getRandomQuote(apiQuotes));