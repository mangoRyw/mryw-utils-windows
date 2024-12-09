// Debounce 
function debounce(fn, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  }
  
  // Throttle 
  function throttle(fn, limit) {
    let lastFn;
    let lastTime = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastTime >= limit) {
        fn(...args);
        lastTime = now;
      } else {
        clearTimeout(lastFn);
        lastFn = setTimeout(() => {
          fn(...args);
          lastTime = now;
        }, limit - (now - lastTime));
      }
    };
  }
  
  // Deep Clone 
  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  function capitalize(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Expected a string as input');
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Check if an object is empty
function isEmpty(obj) {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Expected an object as input');
  }
  return Object.keys(obj).length === 0;
}

module.exports = { debounce, throttle, deepClone, capitalize, isEmpty };
  