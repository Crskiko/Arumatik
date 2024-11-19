import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Tab from "../components/Tab";

function ProductListPage() {
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

export default ProductListPage;
