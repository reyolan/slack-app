function getFirstChar(str) {
  return str.charAt(0).toUpperCase();
}

function getFirstTwoChars(str) {
  return str.charAt(0) + str.charAt(1);
}

function getEmailUsername(email) {
  return email.split("@")[0];
}

function getDayToday() {
  const today = new Date();
  return today.getDate();
}

function getYearToday() {
  const today = new Date();
  return today.getFullYear();
}

function getTime(givenDate) {
  const date = new Date(givenDate);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const hourText = hour % 12 || 12;
  const minuteText = minute < 10 ? `0${minute}` : minute;
  const period = hour >= 0 && hour < 12 ? "AM" : "PM";

  return `${hourText}:${minuteText} ${period}`;
}

function isYesterday(date) {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (yesterday.toDateString() === new Date(date).toDateString()) {
    return true;
  }

  return false;
}

function convertUTCDatetoLocalDate(date) {
  if (new Date(date).toDateString() === new Date().toDateString()) {
    return `Today at ${getTime(date)}`;
  }

  if (isYesterday(date)) {
    return `Yesterday at ${getTime(date)}`;
  }

  return new Date(date).toLocaleDateString();
}

function storeInLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export {
  getFirstChar,
  getFirstTwoChars,
  getEmailUsername,
  getDayToday,
  getYearToday,
  convertUTCDatetoLocalDate,
  storeInLocalStorage,
  getFromLocalStorage,
};
