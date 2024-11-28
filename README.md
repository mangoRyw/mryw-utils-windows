
# mryw-utils-windows

A lightweight utility library for common JavaScript tasks like debouncing, throttling, deep cloning, and string manipulation.

## Installation

You can install this package via npm:

```bash
npm install mryw-utils-windows
```

## Functions

### debounce

Delays the execution of a function until a specified time has passed since it was last called.

**Parameters**:
- `func` (Function): The function to debounce.
- `delay` (number): The delay time in milliseconds.

**Returns**:
- A debounced version of the function.

**Example**:

```javascript
const { debounce } = require('mryw-utils-windows');

const logMessage = debounce(() => console.log("Hello, world!"), 1000);
logMessage();
```

---

### throttle

Limits the execution of a function to at most once every specified interval.

**Parameters**:
- `func` (Function): The function to throttle.
- `interval` (number): The interval time in milliseconds.

**Returns**:
- A throttled version of the function.

**Example**:

```javascript
const { throttle } = require('mryw-utils-windows');

const logMessage = throttle(() => console.log("Throttled!"), 1000);
logMessage();
```

---

### deepClone

Creates a deep copy of the provided object.

**Parameters**:
- `obj` (object): The object to deep clone.

**Returns**:
- A new object that is a deep copy of the input.

**Example**:

```javascript
const { deepClone } = require('mryw-utils-windows');

const original = { a: 1, b: { c: 2 } };
const copy = deepClone(original);

console.log(copy); // { a: 1, b: { c: 2 } }
console.log(copy === original); // false
```

---

### capitalize

Converts the first letter of the input string to uppercase.

**Parameters**:
- `str` (string): The string to capitalize.

**Returns**:
- A new string with the first letter capitalized.

**Example**:

```javascript
const { capitalize } = require('mryw-utils-windows');

console.log(capitalize("hello world")); // Output: "Hello world"
console.log(capitalize("javaScript")); // Output: "JavaScript"
```

---

## Keywords

- `utility`
- `debounce`
- `throttle`
- `deepClone`
- `capitalize`

## Author

Created by **mRyw**.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## GitHub Repository
"https://github.com/mangoRyw/mryw-utils-windows#readme"