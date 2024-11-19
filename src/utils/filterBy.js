/**
 * Filters an array of objects by a specific key-value pair.
 *
 * @param {Array<Object>} array - The array of objects to filter.
 * @param {string} key - The key to filter the objects by.
 * @param {any} value - The value to match for the specified key.
 * @returns {Array<Object>} - An array of objects that match the specified key-value pair.
 *
 * @example
 * const products = [
 *   { category: 'A', name: 'Item 1' },
 *   { category: 'B', name: 'Item 2' }
 * ];
 * const filtered = filterBy(products, 'category', 'A');
 * // filtered = [{ category: 'A', name: 'Item 1' }]
 */
const filterBy = (array, key, value) => {
  return array.filter(item => item[key] === value);
};

export default filterBy;