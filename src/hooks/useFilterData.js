import { useMemo, useState } from "react";
import filterData from "../utils/filterData";

/**
 * Custom hook to filter products by category and series.
 *
 * @param {Array<Object>} data - The array of product data.
 * @returns {Object} - Contains the filtered products, category, series, and setters.
 */
const useFilterData = (data) => {
  const [category, setCategory] = useState("Plastic Pallet");
  const [series, setSeries] = useState("Medium Duty");

  const products = useMemo(() => {
    return filterData(data, category, series);
  }, [data, category, series]);

  return {
    products,
    category,
    setCategory,
    series,
    setSeries,
  };
};

export default useFilterData;
