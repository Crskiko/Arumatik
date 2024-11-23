import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Tab from "../components/Tab";
import useFetch from "../hooks/useFetch";
import useGroupData from "../hooks/useGroupData";
import useUniqueValue from "../hooks/useUniqueValue";

function ProductList() {
  const { data: product, loading, error } = useFetch('data/product.json');
  const categories = useUniqueValue(product, 'category');

  return (
    <div>
      <Navbar></Navbar>

      {/* Hero Section */}
      <section className="h-fit py-32">
        <Heading
          text="Browse Our Products"
          desc="Discover our selection of essential industrial products, designed to 
          streamline and enhance your operations."
        ></Heading>

        <div>

        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}

export default ProductList;
