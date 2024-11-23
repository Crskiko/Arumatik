import CardProduct from "../components/CardProduct";
import ErrorMessage from "../components/ErrorMessage";
import Heading from "../components/Heading";
import Loading from "../components/Loading";
import Tab from "../components/Tab";
import { useProductContext } from "../contexts/ProductContext";
import useFilterData from "../hooks/useFilterData";
import useUniqueValue from "../hooks/useUniqueValue";
import Dropdown from "../components/Dropdown";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useScrollTop from "../hooks/useScrollTop";

/**
 * Container for the Product List page.
 * Fetches and filters product data, and handles display logic for product categories and series.
 *
 * @returns {JSX.Element} The rendered product list component.
 */
function ProductListContainer() {
  const { products, loading, error } = useProductContext();
  const {
    products: filteredProducts,
    category: selectedCategory,
    setCategory,
    series: selectedSeries,
    setSeries,
  } = useFilterData(products);
  const categories = useUniqueValue(products, "category");
  const series = useUniqueValue(products, "series");

  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    if (state) setCategory(state.category);
  }, [state]);
  
  useScrollTop();

  if (loading) return <Loading></Loading>;
  if (error) return <ErrorMessage error={error}></ErrorMessage>;

  return (
    <div>
      <Navbar></Navbar>

      {/* Hero Section */}
      <section className="h-fit pt-32">
        <Heading
          text="Browse Our Products"
          desc="Discover our selection of essential industrial products, designed to 
          streamline and enhance your operations."
        ></Heading>

        <div className="flex justify-between w-full mt-16 mb-10 px-24">
          <div className="flex items-center gap-8">
            {categories.map((value, index) => (
              <div key={index}>
                <Tab
                  name={value}
                  isActive={value === selectedCategory ? true : false}
                  onClick={() => {
                    setCategory(value);
                  }}
                ></Tab>
              </div>
            ))}
          </div>

          {selectedCategory === "Plastic Pallet" && (
            <Dropdown
              selected={selectedSeries}
              options={series}
              setSeries={setSeries}
            ></Dropdown>
          )}
        </div>
      </section>

      {/* Products Section */}
      <section className="h-fit mb-20">
        <div className="grid grid-cols-4 gap-6">
          {filteredProducts.map((value) => (
            <div key={value.name}>
              <CardProduct product={value}></CardProduct>
            </div>
          ))}
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}

export default ProductListContainer;
