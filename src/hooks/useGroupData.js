import groupBy from "../utils/groupBy";
import useFetch from "./useFetch"

/**
 * Custom hook to fetch JSON data and group it by a specific key.
 *
 * @param {string} jsonFilePath - The path to the JSON file.
 * @param {string} groupKey - The key to group the data by.
 * @returns {{ groupData: object; loading: boolean; error: string; }} - An object containing:
 *   - `groupedData` (Object|null): The grouped data, or null if no grouping is applied.
 *   - `loading` (boolean): Whether the data is still loading.
 *   - `error` (string|null): Any error encountered while loading.
 *
 * @example
 * const { groupedData, loading, error } = useGroupedProducts('/data/products.json', 'category');
 * if (loading) return <p>Loading...</p>;
 * if (error) return <p>Error: {error}</p>;
 * return Object.keys(groupedData).map((category) => (
 *   <div key={category}>
 *     <h3>{category}</h3>
 *     <ProductList products={groupedData[category]} />
 *   </div>
 * ));
 */
const useGroupData = (file, groupKey) => {
  const { data, loading, error } = useFetch(file);

  const groupData = groupKey && data ? groupBy(data, groupKey) : null;

  return { groupData, loading, error };
};

export default useGroupData;