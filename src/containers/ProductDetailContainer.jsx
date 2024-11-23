import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useProductContext } from "../contexts/ProductContext";
import ErrorMessage from "../components/ErrorMessage";
import useScrollTop from "../hooks/useScrollTop";
import DetailSection from "../components/DetailSection";

/**
 * Container for the Product Detail page.
 * Fetches and displays product data.
 *
 * @returns {JSX.Element} The rendered product detail component.
 */
function ProductDetailContainer() {
  const { productName } = useParams();
  const products = useProductContext();
  const product = products.find((item) => item.name === productName);

  if (!product)
    return <ErrorMessage error={"Product not found."}></ErrorMessage>;

  useScrollTop();

  return (
    <div>
      <Navbar></Navbar>

      <DetailSection
        product={product}
        onClick={() => window.open("https://wa.me/6281807319641", "_blank")}
      ></DetailSection>

      <Footer></Footer>
    </div>
  );
}

export default ProductDetailContainer;
