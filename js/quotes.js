const quoteText = document.querySelector(".quoteContent"),
quoteBtn = document.querySelector("button"),
authorName = document.querySelector(".author");

// function randomQuote(){
//     quoteBtn.classList.add("loading");
//     fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
//         quoteText.innerText = result.content;
//         authorName.innerText = result.author;
//         quoteBtn.classList.remove("loading");
//     });
// }
// quoteBtn.addEventListener("click", randomQuote);




//BAD  WAY

let quotes=[
    {
        author:"Oscar Wilde",
        quoteContent:"Be yourself; everyone else is already taken."
    },
    {
        author:"Marilyn Monroe",
        quoteContent:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    },
    {
        author:"Albert Einstein",
        quoteContent:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },
    {
        author:"Frank Zappa",
        quoteContent:"So many books, so little time."
    },
    {
        author:"Marcus Tullius Cicero",
        quoteContent:"A room without books is like a body without a soul."
    },
    {
        author:"Bernard M. Baruch",
        quoteContent:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
    },
    {
        author:"Oscar Wilde",
        quoteContent:"You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth."
    },
    {
        author:"Dr. Seuss",
        quoteContent:"You know you're in love when you can't fall asleep because reality is finally better than your dreams."
    },
]
function randomQuotes(author, quotecontent){
    qouteindex=Math.floor(Math.random()*quotes.length);
    quoteText.innerText = author;
    authorName.innerText =quotecontent;
 }
 let qouteindex=1;
quoteBtn.addEventListener("click", event=>{randomQuotes(quotes[qouteindex].author,quotes[qouteindex].quoteContent)});