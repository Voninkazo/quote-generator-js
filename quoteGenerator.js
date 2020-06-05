// Create three arrays of object.
const quote1 = [
  'You \'ve gotta dance like there\'s nobody watching.',
  ' You\'re not getting away from me.',
  'Never again.'
]
const quote2 = [
  'Be the change that you wish to see in the world.',
  'I envy people that know love.',
  'That have someone who takes them as they are.'
]
const quote3 = [
  'No one can make you feel inferior without your consent.',
  'I know that man is capable of great deeds.',
  'But if he isn\'t capable of great emotion, well, he leaves me cold.'
]

// Generate the array randomly 
let quoteRandom1 = Math.floor(Math.random) * (quote1.length);
let quoteRandom2 = Math.floor(Math.random) * (quote2.length);
let quoteRandom3 = Math.floor(Math.random) * (quote3.length);

// Here I want to access the final quote
let finalQuote = `${quote1[quoteRandom1]} + ' ' + ${quote2[quoteRandom2]} + ' ' + ${quote3[quoteRandom3]}` + '.';
// Console log the final quote 
console.log(finalQuote);

// Create a prompt for the users to enter the number of quotation they want

function enterFunction() {
  let numberOfquote = Number(prompt('Enter your number of quote you want to look at:'));
  if (numberOfquote >= 1 && numberOfquote <= 5) {
    console.log(finalQuote[1]);
  }
  for (let i = 1; i <= 5; i++) {
    if (numberOfquote === 1 && numberOfquote <= 5) {
      console.log(finalQuote);
    } else {
      console.log("choose number between 1 to 5");
    }
  }
  return enterFunction();
}