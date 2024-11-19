import { useEffect, useState } from "react";

/**
 * A hook to fetch data from JSON files converted to JS arrays.
 *
 * @param {string} file - The intended JSON file name.
 * @returns {{ data: Array<Object>; loading: boolean; error: string; }} - An object containing:
 *   - `data` (Array|Object): The parsed JSON data.
 *   - `loading` (boolean): Whether the data is still loading.
 *   - `error` (string|null): Any error encountered while loading.
 * 
 * @example
 * const { data, loading, error } = useProductData('/data/products.json');
 * if (loading) return <p>Loading...</p>;
 * if (error) return <p>Error: {error}</p>;
 * return <ProductList products={data} />;
 */
const useFetch = (file) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`data/${file}`);
        if (!response.ok) throw new Error('Failed to fetch data.');

        const json = await response.json();
        setData(json.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      };
    };

    fetchData();
  }, [file]);

  return { data, loading, error };
};

export default useFetch;