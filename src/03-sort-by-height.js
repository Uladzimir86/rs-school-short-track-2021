/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const resultArr = [];
  const sortArr = arr.slice().sort((a, b) => (a - b));
  let x = 0;
  while (x === 0) {
    if (sortArr[0] === -1) sortArr.shift();
    else x = 1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) resultArr.push(-1);
    else {
      resultArr.push(sortArr[0]);
      sortArr.shift();
    }
  }
  return resultArr;
}

module.exports = sortByHeight;
