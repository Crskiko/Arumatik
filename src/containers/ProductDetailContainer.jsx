import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useProductContext } from "../contexts/ProductContext";
import ErrorMessage from "../components/ErrorMessage";
import useScrollTop from "../hooks/useScrollTop";
import DetailSection from "../components/DetailSection";
import useMediaQuery from "../hooks/useMediaQuery";
import React, { Suspense } from "react";
import Loading from "../components/Loading";

/**
 * Container for the Product Detail page.
 * Fetches and displays product data.
 *
 * @returns {JSX.Element} The rendered product detail component.
 */
function ProductDetailContainer() {
  const { productName } = useParams();
  const products = useProductContext();
  const product = products.data.find((item) => item.name === productName);
  const matches = useMediaQuery("(max-width: 780px)");

  const DetailSection = React.lazy(() => import("../components/DetailSection"));

  useScrollTop();

  if (!product)
    return <ErrorMessage error={"Product not found."} isMobile={matches}></ErrorMessage>;

  return (
    <div>
      <Navbar isMobile={matches}></Navbar>

      <Suspense fallback={<Loading></Loading>}>
        <DetailSection
          product={product}
          onClick={() => window.open("https://wa.me/6281807319641", "_blank")}
          isMobile={matches}
        ></DetailSection>
      </Suspense>

      <Footer isMobile={matches}></Footer>
    </div>
  );
}

export default ProductDetailContainer;
