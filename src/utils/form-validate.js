function isFieldEmpty(input) {
  if (input.length === 0) {
    return true;
  }
  return false;
}

function emailValidation(email) {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (isFieldEmpty(email)) {
    return "- This field is required";
  }
  if (!regex.test(email)) {
    return "- Email address is invalid";
  }

  return null;
}

function passwordValidation(password) {
  if (isFieldEmpty(password)) {
    return "- This field is required";
  }

  if (password.length < 9) {
    return "- Must be at least 8 characters long";
  }

  return null;
}

function confirmPaswordValidation(password, confirmPassword) {
  if (isFieldEmpty(confirmPassword)) {
    return "- This field is required";
  }

  if (password !== confirmPassword) {
    return "- Password does not match";
  }

  return null;
}

function registerValidation(email, password, confirmPassword = null) {
  const errors = {};

  errors.email = emailValidation(email);
  errors.password = passwordValidation(password);
  errors.confirmPassword = confirmPaswordValidation(password, confirmPassword);

  return errors;
}

function loginValidation(email, password) {
  const errors = {};

  errors.email = emailValidation(email);

  if (isFieldEmpty(password)) {
    errors.password = "- This field is required";
  }

  return errors;
}

export { registerValidation, loginValidation };
