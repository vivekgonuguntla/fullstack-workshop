const validatePassword = (password) => {
  const errors = [];

  const rules = [
    { test: /.{8,}/, message: 'Too short', score: 25 },
    { test: /[A-Z]/, message: 'Add uppercase letter', score: 20 },
    { test: /[a-z]/, message: 'Add lowercase letter', score: 20 },
    { test: /[0-9]/, message: 'Add number', score: 20 },
    { test: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, message: 'Add special character', score: 15 },
  ];

  const score = rules.reduce((acc, rule) => {
    if (rule.test.test(password)) return acc + rule.score;
    errors.push(`${rule.message}`);
    return acc;
  }, 0);

  return {
    isValid: errors.length === 0,
    score: Math.min(score, 100),
    errors,
    suggestions: [...errors]
  };
};


console.log(validatePassword('abc'));     
console.log(validatePassword('MyP@ssw0rd')); 
