function validatePassword(password) {
    const errors = [];
    const suggestions = [];
    let score = 0;

    if (password.length >= 8) score += 25;
    else errors.push('Too short');

    if (/[A-Z]/.test(password)) score += 20;
    else errors.push('Add uppercase letter');

    if (/[a-z]/.test(password)) score += 20;
    else errors.push('Add lowercase letter');

    if (/[0-9]/.test(password)) score += 20;
    else errors.push('Add number');

    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) score += 15;
    else errors.push('Add special character');

    
    suggestions.push(...errors);

    return {
        isValid: errors.length === 0,
        score: Math.min(score, 100),
        errors,
        suggestions
    };
}

console.log(validatePassword('abc'));

console.log(validatePassword('MyP@ssw0rd'));

