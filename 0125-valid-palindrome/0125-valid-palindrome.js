/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  const re = s.split("").reverse().join("");
  if (s === re) {
    return true;
  } else {
    return false;
  }
};