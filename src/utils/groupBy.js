/**
 * Groups an array of objects by a specified key.
 *
 * @param {Array<Object>} array - The array of objects to group.
 * @param {string} key - The key to group the objects by.
 * @returns {Object} - An object where each key is a unique value from the specified key, 
 * and the value is an array of objects with that key.
 *
 * @example
 * const products = [
 *   { category: 'A', name: 'Item 1' },
 *   { category: 'B', name: 'Item 2' },
 *   { category: 'A', name: 'Item 3' }
 * ];
 * const grouped = groupBy(products, 'category');
 * // grouped = { A: [{...}, {...}], B: [{...}] }
 */
const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    const groupKey = item[key];

    if (!result[groupKey]) {
      result[groupKey] = [];
    };

    result[groupKey].push(item);
    return result;
  }, {});
};

export default groupBy;