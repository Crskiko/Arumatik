import { useCallback, useEffect, useState } from "react";

/**
 * A hook to fetch data from JSON files converted to JS arrays.
 *
 * @param {string} file - The intended JSON file name.
 * @returns {{ data: Array<Object>; loading: boolean; error: string; refetch: Function }} - An object containing:
 *   - `data` (Array|Object): The parsed JSON data.
 *   - `loading` (boolean): Whether the data is still loading.
 *   - `error` (string|null): Any error encountered while loading.
 *   - `refetch` {function(): Promise<void>}: A function to manually trigger a re-fetch of the data.
 */
const useFetchData = (file) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`data/${file}`);
      if (!response.ok)
        throw new Error(`Failed to fetch data: ${response.statusText}`);

      console.log(response.json);
      const json = await JSON.parse(response);
      console.log(json);
      setData(json.data);
    } catch (err) {
      if (err.name === "SyntaxError") {
        setError("Error parsing to JSON.");
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    fetchData();
    console.log("fetching");
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetchData;
