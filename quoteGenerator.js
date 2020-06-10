// Create three arrays of object.
const quote1 = [
  'You \'ve gotta dance like there\'s nobody watching.',
  ' You\'re not getting away from me.',
  'Never again.'
];
const quote2 = [
  'Be the change that you wish to see in the world.',
  'I envy people that know love.',
  'That have someone who takes them as they are.'
];
const quote3 = [
  'No one can make you feel inferior without your consent.',
  'I know that man is capable of great deeds.',
  'But if he isn\'t capable of great emotion, well, he leaves me cold.'
];

// Generate the array randomly 
let quoteRandom1 = Math.floor(Math.random) * (quote1.length);
let quoteRandom2 = Math.floor(Math.random) * (quote2.length);
let quoteRandom3 = Math.floor(Math.random) * (quote3.length);
let string1 = quote1[quoteRandom1];
let string2 = quote2[quoteRandom2];
let string3 = quote3[quoteRandom3];

// // Here I want to access the final quote
// let finalQuote = `${string1} ${string2}  ${string3}`;
// // Console log the final quote 
// console.log(finalQuote);

function enterFunction() {
  // Create a prompt for the users to enter the number of quotation they want
  let numberOfquote = prompt('Enter your number of quote you want to look at, between 1 to 5:');

  // Let's check if the prompt gives us something between 1 to 5
  if (numberOfquote >= 1 && numberOfquote <= 5) {

    // Here we use for loop to last the number of times that the user entered in the prompt
    for (let i = 0; i < numberOfquote; i++) {

      // Generate random index numbers
      let randomIndex1 = Math.floor((Math.random() * (quote1.length)));
      let randomIndex2 = Math.floor((Math.random() * (quote2.length)));
      let randomIndex3 = Math.floor((Math.random() * (quote3.length)));

      // And here is the generated quotes
      let string1 = quote1[randomIndex1];
      let string2 = quote2[randomIndex2];
      let string3 = quote3[randomIndex3];
      console.log(`${string1} ${string2} ${string3}`)
    }
  } else {
    return "Choose between 1 to 5";
  }
} enterFunction();

// Let's create new arrays and they must be differnet from each other
let firstLoveQuote = [
  "We love the things we love for what they are.",
  "Do not settle for a relationship that won’t let you be yourself.",
  "Only time can heal your broken heart, just as only time can heal his broken arms and legs."
];

let secondLoveQuote = [
  "Love is absolute loyalty.",
  "People fade but loyalty never fades.",
  "You can depend so much on certain people.",
  "And that\’s love even if it doesn\’t seem very exciting."
];

let thridLoveQuote = [
  "Love is a promise.",
  "Love is a souvenir\,once given never forgotten.",
  "Never let it disappear."
];

let firstInpiringQuote = [
  "Say yes more than no!",
  "Why stop dreaming when you are awake?",
  "The only time you should look back, is to see how far you’ve come."
];

let secondInspiringQuote = [
  "Three things in life – your health, your mission, and the people you love.",
  "That\’s it.",
  "Happiness is the highest form of health." 
];

let thirdInpireQuote = [
  "A good laugh and a long sleep are the best cures in the doctor\’s book.",
  "The greatest of follies is to sacrifice health for any other kind of happiness.",
  "What is called genius is the abundance of life and health."
];