import { useEffect, useState } from "react";

/**
 * A hook to fetch data from JSON files converted to JS arrays.
 *
 * @param {string} file - The intended JSON file name.
 * @returns {{ data: any; loading: boolean; error: string; }} - The data, loading and error status.
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