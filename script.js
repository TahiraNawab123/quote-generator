const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" }
];

const colors = [
    '#f5f6fa', // light gray
    '#ffeaa7', // light yellow
    '#a29bfe', // light purple
    '#81ecec', // light teal
    '#fab1a0', // light orange
    '#55efc4', // light green
    '#fd79a8', // light pink
    '#74b9ff', // light blue
    '#fdcb6e', // gold
    '#636e72'  // dark gray
];

const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const btn = document.getElementById('generate-btn');

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteEl.textContent = `"${quote.text}"`;
    authorEl.textContent = `- ${quote.author}`;

    // Change background color
    const colorIndex = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[colorIndex];
}

btn.addEventListener('click', generateQuote);
