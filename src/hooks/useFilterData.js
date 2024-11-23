import { useMemo, useState } from "react"
import filterData from "../utils/filterData";

const useFilterData = (data) => {
  const [category, setCategory] = useState('');
  const [series, setSeries] = useState('');

  const products = useMemo(() => {
    if (!category) return [];

    return filterData(data, category, series);
  }, [data, category, series]);

  return {
    products,
    category,
    setCategory,
    series,
    setSeries
  };
};

export default useFilterData;