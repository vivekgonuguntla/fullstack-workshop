const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submit");

function showError(input, message) {
  const field = input.parentElement;
  field.className = "field error";
  field.querySelector("small").innerText = message;
}

function showSuccess(input) {
  const field = input.parentElement;
  field.className = "field success";
}


function checkUsername() {
  const value = username.value.trim();
  if (value.length < 3 || value.length > 15) {
    showError(username, "Username must be 3-15 characters");
    return false;
  }
  for (let c of value) {
    if (!(/[a-zA-Z0-9]/).test(c)) {
      showError(username, "Only letters and numbers allowed");
      return false;
    }
  }
  showSuccess(username);
  return true;
}


function checkEmail() {
  const value = email.value.trim();
  const at = value.indexOf("@");
  const dot = value.lastIndexOf(".");
  if (at <= 0 || dot <= at + 1 || dot === value.length - 1) {
    showError(email, "Enter a valid email");
    return false;
  }
  showSuccess(email);
  return true;
}


function checkPassword() {
  const value = password.value;
  if (value.length < 8) {
    showError(password, "At least 8 characters");
    return false;
  }

  let upper = false, number = false, special = false;
  for (let c of value) {
    if (c >= "A" && c <= "Z") upper = true;
    else if (c >= "0" && c <= "9") number = true;
    else special = true;
  }

  if (!upper || !number || !special) {
    showError(password, "1 uppercase, 1 number & 1 special char");
    return false;
  }

  showSuccess(password);
  return true;
}


function checkConfirmPassword() {
  if (confirmPassword.value !== password.value || confirmPassword.value === "") {
    showError(confirmPassword, "Passwords do not match");
    return false;
  }
  showSuccess(confirmPassword);
  return true;
}


function checkForm() {
  if (
    checkUsername() &&
    checkEmail() &&
    checkPassword() &&
    checkConfirmPassword()
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}


username.addEventListener("blur", () => { checkUsername(); checkForm(); });
email.addEventListener("blur", () => { checkEmail(); checkForm(); });
password.addEventListener("blur", () => { checkPassword(); checkForm(); });
confirmPassword.addEventListener("blur", () => { checkConfirmPassword(); checkForm(); });

/* Prevent submit */
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
