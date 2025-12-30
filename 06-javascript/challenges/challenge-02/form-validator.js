const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submit");

const showError = (input, message) => {
  const field = input.parentElement;
  field.className = "field error";
  field.querySelector("small").innerText = `${message}`;
};

const showSuccess = (input) => {
  const field = input.parentElement;
  field.className = "field success";
};

const checkUsername = () => {
  const value = username.value.trim();
  if (value.length < 3 || value.length > 15) {
    showError(username, `Username must be 3-15 characters`);
    return false;
  }

  
  if ([...value].some(c => !/[a-zA-Z0-9]/.test(c))) {
    showError(username, `Only letters and numbers allowed`);
    return false;
  }

  showSuccess(username);
  return true;
};

const checkEmail = () => {
  const value = email.value.trim();
  const at = value.indexOf("@");
  const dot = value.lastIndexOf(".");
  if (at <= 0 || dot <= at + 1 || dot === value.length - 1) {
    showError(email, `Enter a valid email`);
    return false;
  }
  showSuccess(email);
  return true;
};

const checkPassword = () => {
  const value = password.value;
  if (value.length < 8) {
    showError(password, `At least 8 characters`);
    return false;
  }

  let upper = false, number = false, special = false;

  [...value].forEach(c => {
    if (c >= "A" && c <= "Z") upper = true;
    else if (c >= "0" && c <= "9") number = true;
    else special = true;
  });

  if (!upper || !number || !special) {
    showError(password, `1 uppercase, 1 number & 1 special char`);
    return false;
  }

  showSuccess(password);
  return true;
};

const checkConfirmPassword = () => {
  if (confirmPassword.value !== password.value || confirmPassword.value === "") {
    showError(confirmPassword, `Passwords do not match`);
    return false;
  }
  showSuccess(confirmPassword);
  return true;
};

const checkForm = () => {
  submitBtn.disabled = !(
    checkUsername() &&
    checkEmail() &&
    checkPassword() &&
    checkConfirmPassword()
  );
};


[username, email, password, confirmPassword].forEach(input => {
  input.addEventListener("blur", () => { 
    switch(input.id) {
      case 'username': checkUsername(); break;
      case 'email': checkEmail(); break;
      case 'password': checkPassword(); break;
      case 'confirmPassword': checkConfirmPassword(); break;
    }
    checkForm();
  });
});


form.addEventListener("submit", (e) => e.preventDefault());
