/**
 * Converts a JSON key to a title case string.
 *
 * @param {string} key - The JSON key to convert.
 * @returns {string} The formatted title case string.
 */
function convertToTitle(key) {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export default convertToTitle;
