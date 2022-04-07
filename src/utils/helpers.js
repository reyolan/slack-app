function getFirstChar(str) {
  return str.charAt(0).toUpperCase();
}

function getFirstTwoChars(str) {
  return str.charAt(0) + str.charAt(1);
}

function getEmailUsername(email) {
  return email.split("@")[0];
}

export { getFirstChar, getFirstTwoChars, getEmailUsername };
