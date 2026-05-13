// 4. Throttle function
function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    let now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}