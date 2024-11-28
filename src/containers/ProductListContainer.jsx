import ErrorMessage from "../components/ErrorMessage";
import { useProductContext } from "../contexts/ProductContext";
import useFilterData from "../hooks/useFilterData";
import useUniqueValue from "../hooks/useUniqueValue";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useScrollTop from "../hooks/useScrollTop";
import FilterSection from "../components/FilterSection";
import ListSection from "../components/ListSection";
import useMediaQuery from "../hooks/useMediaQuery";

/**
 * Container for the Product List page.
 * Fetches and filters product data, and handles display logic for product categories and series.
 *
 * @returns {JSX.Element} - The rendered product list component.
 */
function ProductListContainer() {
  const products = useProductContext();
  const {
    products: filteredProducts,
    category: selectedCategory,
    setCategory,
    series: selectedSeries,
    setSeries,
  } = useFilterData(products);
  const category = useUniqueValue(products, "category");
  const series = useUniqueValue(products, "series");
  const matches = useMediaQuery("(max-width: 900px)");

  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    if (state) setCategory(state.category);
  }, [state]);

  useScrollTop();

  if (!products)
    return (
      <ErrorMessage
        error={"Products not found."}
        isMobile={matches}
      ></ErrorMessage>
    );

  return (
    <div>
      <Navbar isMobile={matches}></Navbar>

      <FilterSection
        categories={category}
        selectedCategory={selectedCategory}
        setCategory={setCategory}
        series={series}
        selectedSeries={selectedSeries}
        setSeries={setSeries}
        isMobile={matches}
      ></FilterSection>

      <ListSection products={filteredProducts} isMobile={matches}></ListSection>

      <Footer isMobile={matches}></Footer>
    </div>
  );
}

export default ProductListContainer;
