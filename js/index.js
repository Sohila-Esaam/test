qoutesArray = [
  (quote1 = {
    qoute: " “Be yourself; everyone else is already taken.” ",
    author: "― Oscar Wilde",
  }),
  (quote2 = {
    qoute:
      " “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
    author: "― Marilyn Monroe",
  }),
  (quote3 = {
    qoute: " “So many books, so little time.” ",
    author: "― Frank Zappa",
  }),
  (quote4 = {
    qoute:
      " “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
    author: "― Albert Einstein",
  }),
  (quote5 = {
    qoute: " “A room without books is like a body without a soul.” ",
    author: "― Marcus Tullius Cicero",
  }),
  (quote6 = {
    qoute:
      " “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
    author: "― Bernard M. Baruch",
  }),
  (quote7 = {
    qoute: ` “You've gotta dance like there's nobody watching,
                    Love like you'll never be hurt,
                    Sing like there's nobody listening,
                    And live like it's heaven on earth.” `,
    author: "― William W. Purkey",
  }),
  (quote8 = {
    qoute:
      " “You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ",
    author: "― Dr. Seuss",
  }),
  (quote9 = {
    qoute: " “You only live once, but if you do it right, once is enough.” ",
    author: "― Mae West",
  }),
  (quote10 = {
    qoute: " “Be the change that you wish to see in the world.” ",
    author: "― Mahatma Gandhi",
  }),
];

var quoteOutput = document.getElementById("quoteOutput");
var authorOutput = document.getElementById("authorOutput");

function quotesGenerate(){
  var num = Math.round(Math.random(0, qoutesArray.length)*10 );
  quoteOutput.innerHTML = qoutesArray[num].qoute;
  authorOutput.innerHTML = qoutesArray[num].author;
  
}