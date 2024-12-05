/**
 * Converts a given text string into a URL-friendly slug.
 *
 * This function transforms the text to lowercase, removes special characters,
 * and replaces spaces with hyphens.
 *
 * @param {string} text - The input text to be converted into a slug.
 * @returns {string} The URL-friendly slug generated from the input text.
 */
const convertToSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "-")
    .replace(/ +/g, "-");
};

export default convertToSlug;
