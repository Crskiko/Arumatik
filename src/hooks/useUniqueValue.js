import { useMemo } from "react"

/**
 * Custom hook to extract unique values from an array of objects.
 *
 * @param {Array<Object>} data - Array of product objects.
 * @param {string} key - The key whose unique values are needed (e.g., "category", "series").
 * @returns {Array<string>} - Array of unique values for the specified key.
 */
const useUniqueValue = (data, key) => {
  const result = useMemo(() => {
    if(!data || !Array.isArray(data)) return [];

    const values = data.map(item => item[key]);
    return [...new Set(values)];
  }, [data, key]);

  return result;
};

export default useUniqueValue;