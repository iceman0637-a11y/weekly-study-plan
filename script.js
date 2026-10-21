const timeEL = document.getElementById("time");
const dateEL = document.getElementById("date");

function updateClock() {
    const now = new Date();

    timeEL.textContent = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

    dateEL.textContent = now.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    });

}

updateClock();
setInterval(updateClock, 1000);

const quotes = ["One day, all your hard work will pay off.", 
  "The earlier you start working on something, the earlier you will see results.",
  "Life is short. Live it. Fear is natural. Face it. Memory is powerful. Use it.",
  "Do what is right, not what is easy.",
  "We generate fears while we do nothing. We overcome these fears by taking action.",
  "If we wait until we’re ready, we’ll be waiting for the rest of our lives.",
  "It’s never too late to be what you might have been.",
  "You don’t have to be great to start. But you have to start to be great.",
  "Every morning you have two choices: continue to sleep with your dreams, or wake up and chase them.",
  "Nobody can go back and start a new beginning, but anyone can start today and make a new ending.",
  "Work hard in silence. Let success make the noise.",
  "Be stronger than your excuses.",
  "If your dreams don’t scare you, they aren’t big enough."
];

let randomNum = Math.floor(Math.random()*quotes.length);

const randomQuote = document.getElementById("randomQuote");

function printRandomQuote() {
  randomQuote.textContent = quotes[randomNum];
}

printRandomQuote();