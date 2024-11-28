/**
 * Filters products by category and series.
 *
 * @param {Array<Object>} data - The array of product data.
 * @param {string} category - The selected category to filter by.
 * @param {string|null} series - The selected series to filter by (optional).
 * @returns {Array<Object>} An array of filtered products.
 */
const filterData = (data, category, series) => {
  if (!Array.isArray(data)) return [];

  return data.filter(item => item.category === category && (!series || item.series === series));
};

export default filterData;