// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// This function returns a random object from the quotes array.
function getRandomQuote() {
  return quotes[Math.floor(Math.random()*quotes.length)];
}

// This function uses the random object selected by getRandomQuote() to build a string that populates the html elements in index.html each time it is called.
// It also changes the background color of the body of the document and the html button element each time it is called.
// I wanted the random color of the background and the button to be different, or I would have had the function create the rgh string.
function printQuote() {
  var randQuote = getRandomQuote();
  var quoteStr = '<p class="quote">' + randQuote.quote + '</p>';
  quoteStr += '<p class="source">' + randQuote.source;
  quoteStr += '<span class="profession">' + randQuote.profession + '</span>';
  if (randQuote.citation !== undefined) {
    quoteStr += '<span class="citation">' + randQuote.citation + '</span>';
  }
  if (randQuote.year !== undefined) {
    quoteStr += '<span class="year">' + randQuote.year + '</span></p>';
  }
  quoteStr += '<p class="tag">' + randQuote.tag + '</p>';
  document.body.style.backgroundColor = 'rgb(' + getRandomColor() + ',' + getRandomColor() + ',' + getRandomColor() + ')';
  document.getElementById("loadQuote").style.background='rgb(' + getRandomColor() + ',' + getRandomColor() + ',' + getRandomColor() + ')';
  document.getElementById('quote-box').innerHTML = quoteStr;
}

// This function produces a random number between 0 and 255, not including 255, to use when producing random colors.
function getRandomColor() {
  return Math.random()*255;
}

// This array contains the quote objects used.
var quotes = [
  {quote: "Get busy living or get busy dying.", source: "Stephen King", citation: "The Shawshank Redemption", year: 1982, profession: "Author", tag: "Life Philosophy" },
  {quote: "Impossible is a word to be found only in the dictionary of fools.", source: "Napoleon Bonaparte", profession: "French Emperor", tag: "Inspirational" },
  {quote: "Most folks are as happy as they make up their minds to be.", source: "Abraham Lincoln", profession: "16th U.S. President", tag: "Life Philosophy" },
  {quote: "Not all who wander are lost.", source: "J.R.R. Tolkien", citation: "The Lord of the Rings", year: 1954, profession: "Writer & Poet", tag: "Life Philosophy"},
  {quote: "May the Force be with you.", source: "Alec Guinness", citation: "Star Wars", year: 1977, profession: "Actor", tag: "Pop Culture"}
];

// This method will call the printQuote function every 30 seconds.
window.setInterval(printQuote, 30000);
