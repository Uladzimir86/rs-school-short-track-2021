/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const len = str.length;
  if (len === 0) return str;
  let i = 0;
  let count = 1;
  let res = '';
  while (i < len - 1) {
    if (str[i] === str[i + 1]) {
      count += 1;
      i += 1;
    } else if (count === 1) {
      res += `${str[i]}`;
      i += 1;
    } else {
      res += `${count}${str[i]}`;
      count = 1;
      i += 1;
    }
  }
  if (count === 1) {
    res += `${str[i]}`;
  } else {
    res += `${count}${str[i]}`;
  }
  return res;
}

module.exports = encodeLine;
