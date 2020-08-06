// your code goes in here
function getQuote() {
    const quotes = [{
        author: 'Oscar Wilde',
        quote: 'Be yourself, everyone else is already taken.'
    }, 
    {
        author: 'Frank Zappa',
        quote: 'So many books, so little time.'
    },
    {
        author: 'Allen Saunders',
        quote: 'Life is what happens to us while we are making other plans.'
    },
    {
        author: 'Thomas A. Edison',
        quote: 'I have not failed. I\'ve just found 10,000 ways that won\'t work.'
    },
    {
        author: 'Friedrich Nietzsche',
        quote: 'That which does not kill us makes us stronger.'
    },
    {
        author: 'George Eliot',
        quote: 'It is never too late to be what you might have been.'
    }];

    var currentQuote = quotes[Math.floor(Math.random() * quotes.length)];

    document.getElementById('quote').innerHTML = '<i class="fas fa-quote-left"></i>' + currentQuote.quote;
    document.getElementById('author').innerHTML = '- ' + currentQuote.author;

}

document.getElementById('newQuote').addEventListener('click', () => {
    let currentQuote = document.getElementById('quote').innerText;
    // In case two quotes are the same - repeat generation
    while (currentQuote === document.getElementById('quote').innerText) {
        getQuote();
    }    
});