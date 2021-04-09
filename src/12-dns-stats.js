/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  const arrTemplates = []; // массив шаблонов (доменов)
  // ф-ция по производству шаблонов
  function addTemplatesArr(arrr) {
    let templ = '';
    for (let i = 0; i < arrr.length; i++) {
      templ += `.${arrr[i]}`;
      arrTemplates.push(templ);
    }
  }
  for (let i = 0; i < domains.length; i++) {
    arr = domains[i].split('.').reverse();
    addTemplatesArr(arr);
  }

  const map = new Map(); // именованная коллекция
  for (let i = 0; i < arrTemplates.length; i++) {
    if (map.has(arrTemplates[i])) {
      const value = map.get(arrTemplates[i]);
      map.set(arrTemplates[i], value + 1);
    } else map.set(arrTemplates[i], 1);
  }
  // const result = {};
  // for (const domain of map.keys()) {
  //   result[domain] = map.get(domain);
  // }

  return Object.fromEntries(map);
}

module.exports = getDNSStats;
