// Create a variable that contains an array of quotes
var myQuotes = ["You \'ve gotta dance like there\'s nobody watching.", " You\'re not getting away from me.", "Never again.", "Be the change that you wish to see in the world.", "I envy people that know love.", "That have someone who takes them as they are.", "No one can make you feel inferior without your consent.", "I know that man is capable of great deeds.", "But if he isn\'t capable of great emotion, well, he leaves me cold."];
console.log(myQuotes);

// Generate the array
function generateQuotes() {
  var random = Math.floor(Math.random) * (myQuotes.length);
  var currentQuote = myQuotes[random];
  console.log(currentQuote);
}

var quoteChoice = Number(prompt('Your number of quotes'));

// Create a function to generate the quotes
function generatingQuotes() {
  var quote1 = ["You \'ve gotta dance like there\'s nobody watching.", " You\'re not getting away from me.", "Never again."]
  var quote2 = ["Be the change that you wish to see in the world.", "I envy people that know love.", "That have someone who takes them as they are."]
  var quote3 = ["No one can make you feel inferior without your consent.", "I know that man is capable of great deeds.", "But if he isn\'t capable of great emotion, well, he leaves me cold."]
  //Here I am using for loop to loop through the array and I use if else statement to set the conditions on how many qoutes the user wants

  for (let i = 0; i < 5; i++) {
    if (quoteChoice === "0") {
      return quote1;
    } else if (quoteChoice === "2") {
      return quote2;
    } else if (quoteChoice === "3") {
      return quote3;
    } else {
      undefined;
    }
    var currentQuote = "Here is the quote: " +
      quote1[Math.floor(Math.random() * quote1.length)] + ' ' +
      quote2[Math.floor(Math.random() * quote2.length)] + ' ' +
      quote3[Math.floor(Math.random() * quote3.length)] + '!';
    return currentQuote;
  }
}