// Arrow function to calculate BMI and return category
const calculateBMI = (weight, height) => {
  const bmi = weight / (height ** 2);
  let category = '';

  if (bmi < 18.5) category = 'Underweight';
  else if (bmi >= 18.5 && bmi <= 24.9) category = 'Normal weight';
  else if (bmi >= 25 && bmi <= 29.9) category = 'Overweight';
  else category = 'Obese';

  return { bmi: bmi.toFixed(2), category };
};

// Ask for number of users
const numUsers = Number(prompt("How many users do you want to calculate BMI for?"));
const users = [];

// Collect weight and height for each user
for (let i = 0; i < numUsers; i++) {
  const weight = Number(prompt(`Enter weight in kg for user ${i + 1}:`));
  const height = Number(prompt(`Enter height in meters for user ${i + 1}:`));
  users.push({ weight, height });
}

// Calculate BMI for all users using map
const results = users.map((user, index) => {
  const res = calculateBMI(user.weight, user.height);
  return { ...res, user: index + 1 };
});

// Display results
results.forEach(res => {
  alert(`User ${res.user}: BMI is ${res.bmi} and category is ${res.category}`);
  console.log(`User ${res.user}: BMI is ${res.bmi} and category is ${res.category}`);
});
