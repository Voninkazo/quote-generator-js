// Create three arrays of object.
const quote1 = [
  'You \'ve gotta dance like there\'s nobody watching.',
  ' You\'re not getting away from me.',
  'Never again.'
]
const quote2 = [
  'Be the change that you wish to see in the world.',
  'I envy people that know love.', 'That have someone who takes them as they are.'
]
const quote3 = [
  'No one can make you feel inferior without your consent.',
  'I know that man is capable of great deeds.',
  'But if he isn\'t capable of great emotion, well, he leaves me cold.'
]

// Generate the array randomly
function generateQuotes() {
  var quoteRandom1 = Math.floor(Math.random) * (quote1.length);
  var quoteRandom2 = Math.floor(Math.random) * (quote2.length);
  var quoteRandom3 = Math.floor(Math.random) * (quote3.length);
}

//Here I am using for loop to loop through the array and I use if else statement to set the conditions on how many qoutes the user wants

for (let i = 0; i < quote1.length + quote2.length + quote3.length; i++) {
  var randomQuote = quote1 + ` ` + quote2 + ` ` + ` ` + quote3;
  var singleQuote = [];
  singleQuote.push(randomQuote);
}
console.log(singleQuote);