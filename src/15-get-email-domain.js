/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let res = email;
  const index = res.indexOf('@', 0);
  if (index !== -1) {
    res = getEmailDomain(email.slice(index + 1));
  }
  return res;
}

module.exports = getEmailDomain;
