

const quotes = [
    {
        quote: 
        "That is what marriage really means: helping one another to reach the full status of being persons, responsible and autonomous beings who do not run away from life.",
        author: "Paul Tournier",
    },
    {
        quote: "If you would be a real seeker after truth, it is necessary that at least once in your life you doubt, as far as possible, all things.",
        author: "Rene Descartes",
    },
    {
        quote: "Money frees you from doing things you dislike. Since I dislike doing nearly everything, money is handy.",
        author: "Groucho Marx",
    },
    {
        quote: "There is no pleasure in having nothing to do; the fun is in having lots to do and not doing it.",
        author: "Mary Wilson Little",
    },
    {
        quote: "Never leave that 'till tomorrow which you can do today.",
        author: "Benjamin Franklin",
    },
    {
        quote: "When they discover the center of the universe, a lot of people will be disappointed to discover they are not it.",
        author: "Bernard Bailey",
    },
    {
        quote: "Genius without education is like silver in the mine.",
        author: "Benjamin Franklin",
    },
    {
        quote: "It is possible to fail in many ways...while to succeed is possible only in one way.",
        author: "Aristotle",
    },
    {
        quote: "Dying is a very dull, dreary affair. And my advice to you is to have nothing whatever to do with it.",
        author: "William Somerset Maugham",
    },
    {
        quote: "The most important work you and I will ever do will be within the walls of our own homes.",
        author: "Harold B. Lee",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const daysQuote = quotes[Math.round(Math.random() * quotes.length)];

quote.innerText = daysQuote.quote;
author.innerText = daysQuote.author;