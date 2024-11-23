import ErrorMessage from "../components/ErrorMessage";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Tab from "../components/Tab";
import { useProductContext } from "../contexts/ProductContext";
import useUniqueValue from "../hooks/useUniqueValue";

function ProductList() {
  const { products, loading, error } = useProductContext();
  const categories = useUniqueValue(data, 'category');

  if (loading) return <Loading></Loading>;
  if (error) return <ErrorMessage error={error}></ErrorMessage>;

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
