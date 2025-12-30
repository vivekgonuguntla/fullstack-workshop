const input = Number(
  prompt('Choose an option:\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius')
);

const temperature = Number(prompt('Enter the temperature:'));

const convertCtoF = (temp) => (temp * 9 / 5) + 32;
const convertFtoC = (temp) => (temp - 32) * 5 / 9;

if (Number.isNaN(input) || Number.isNaN(temperature)) {
  alert('Please enter valid numbers');
  console.log('Invalid input');
} else if (input === 1) {
  const fahrenheit = convertCtoF(temperature);
  alert(`${fahrenheit} °F`);
  console.log(`${fahrenheit} °F`);
} else if (input === 2) {
  const celsius = convertFtoC(temperature);
  alert(`${celsius} °C`);
  console.log(`${celsius} °C`);
} else {
  alert('Please choose only 1 or 2');
  console.log('Please choose only 1 or 2');
}
