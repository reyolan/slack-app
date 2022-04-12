function debounce(callbackFn, delay) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callbackFn.apply(this, args);
    }, delay);
  };
}

export default debounce;
