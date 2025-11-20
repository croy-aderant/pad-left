# pad-left

An npm package that provides a function to prepend HTML white space characters (`&nbsp;`) to a string.

## Installation

```bash
npm install pad-left
```

## Usage

```javascript
const padLeft = require('pad-left');

// Prepend 3 HTML white space characters
const result = padLeft('Hello', 3);
console.log(result); // "&nbsp;&nbsp;&nbsp;Hello"
```

## API

### `padLeft(str, count)`

Prepends HTML white space characters to a string.

**Parameters:**
- `str` (string): The string to pad
- `count` (number): The number of HTML white space characters (`&nbsp;`) to prepend (must be a non-negative integer)

**Returns:**
- (string): The string with HTML white space characters prepended

**Throws:**
- `TypeError`: If the first argument is not a string
- `TypeError`: If the second argument is not a non-negative integer

## Examples

```javascript
const padLeft = require('pad-left');

// Basic usage
padLeft('Hello', 3);  // "&nbsp;&nbsp;&nbsp;Hello"

// Zero padding
padLeft('World', 0);  // "World"

// Empty string
padLeft('', 5);       // "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
```

## License

MIT
