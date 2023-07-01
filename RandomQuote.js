const quoteText = document.querySelector('#quote-text');
const author = document.querySelector('#author')
const newQuote = document.querySelector('#btn')

function getQuote(){
    fetch('http://api.quotable.io/random')           
    .then(response => response.json())
    .then(data =>{
        quoteText.innerText = data.content;
        author.innerText = data.author;

    } );
}
newQuote.addEventListener("click", getQuote)