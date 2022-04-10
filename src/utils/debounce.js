// function debounce(callbackFn, delay) {
//   let timeoutId;
//   return () => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(callbackFn, delay);
//   };
// }

// const debounce = (callbackFn, delay) => {
//   let timerId;
//   return (...args) => {
//     const context = this;
//     if (timerId) clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       timerId = null;
//       callbackFn.apply(context, args);
//     }, delay);
//   };
// };

//https://javascript.plainenglish.io/implementing-debouncing-in-react-f3316ef344f5

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
