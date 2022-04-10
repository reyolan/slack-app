// function debounce(callbackFn, delay) {
//   let timeoutId;
//   return () => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(callbackFn, delay);
//   };
// }

const debounce = (callbackFn, delay) => {
  let timer;
  return (...args) => {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      callbackFn.apply(context, args);
    }, delay);
  };
};

//https://javascript.plainenglish.io/implementing-debouncing-in-react-f3316ef344f5

export default debounce;
