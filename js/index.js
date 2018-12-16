var xhr = new XMLHttpRequest();
var url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
xhr.open('GET', url, true);
xhr.onload = function() {
    if (this.status !== 200) return;
    var quotesList = JSON.parse(this.responseText).quotes;

    window.onload = loadQuote(quotesList);
    document.querySelector('.button').addEventListener('click', function () {
        loadQuote(quotesList);
    });
};

xhr.send();


function loadQuote(arr) {
    var randomItem = arr[Math.floor(Math.random() * arr.length)];
    document.querySelector('.quote-text').textContent = randomItem.quote;
    document.getElementById('author').textContent = randomItem.author;
    var randomColor = Math.floor(Math.random() * colorArray.length);
    document.body.style.backgroundColor = colorArray[randomColor];
    document.querySelector('.button').style.backgroundColor = colorArray[randomColor];
}

var colorArray = [
    '#FF6633', '#FFB399', '#FF33FF', '#00B3E6', '#E6B333',
    '#3366E6', '#999966', '#00AFFF', '#B34D4D', '#80B300',
    '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6',
    '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC', '#66994D',
    '#B366CC', '#4D8000', '#B33300', '#CC80CC', '#66664D',
    '#991AFF', '#E666FF', '#4DB3FF', '#1AB399', '#E666B3',
    '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066',
    '#809980', '#1AFF33', '#999933', '#FF3380', '#CCCC00',
    '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380',
    '#FF4D4D', '#0800e6', '#6666FF'
];
