/**
 * Prepends HTML white space characters (&nbsp;) to a string
 * @param {string} str - The string to pad
 * @param {number} count - The number of HTML white space characters to prepend
 * @returns {string} The string with HTML white space characters prepended
 */
function padLeft(str, count) {
  if (typeof str !== 'string') {
    throw new TypeError('First argument must be a string');
  }
  
  if (typeof count !== 'number' || !Number.isInteger(count) || count < 0) {
    throw new TypeError('Second argument must be a non-negative integer');
  }
  
  const nbsp = '&nbsp;';
  return nbsp.repeat(count) + str;
}

module.exports = padLeft;

