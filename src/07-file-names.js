/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let count = 0;
  const arr = names.slice();
  for (let i = 0; i < arr.length; i++) {
    const index = arr.indexOf(arr[i], i + 1);
    if (index !== -1) {
      count += 1;
      const str = `${arr[index]}(${count})`;
      arr[index] = str;
      i -= 1;
    } else count = 0;
  }
  return arr;
}

module.exports = renameFiles;
