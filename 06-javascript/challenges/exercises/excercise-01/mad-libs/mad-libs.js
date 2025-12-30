// Arrow function to generate the story
const createStory = ({ name, adjective, noun, verb, place }) => 
  `One day ${name} found a ${adjective} ${noun} that could ${verb} in the ${place}.`;

// Ask user for inputs dynamically using an array of prompts
const prompts = [
  { key: 'name', text: 'Enter your name:' },
  { key: 'adjective', text: 'Enter an adjective:' },
  { key: 'noun', text: 'Enter a noun:' },
  { key: 'verb', text: 'Enter a verb:' },
  { key: 'place', text: 'Enter a place:' }
];

// Collect user inputs using reduce
const userInputs = prompts.reduce((acc, item) => {
  acc[item.key] = prompt(item.text);
  return acc;
}, {});

// Generate and display story
const story = createStory(userInputs);
alert(story);
console.log(story);
