import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useProductContext } from "../contexts/ProductContext";
import ErrorMessage from "../components/ErrorMessage";
import convertToSlug from "../utils/convertToSlug";
import convertToTitle from "../utils/convertToTitle";
import Button from "../components/Button";

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

  return (
    <div>
      <Navbar></Navbar>

      {/* Detail Section */}
      <section className="h-fit pt-28 pb-10">
        <div className="grid grid-cols-2 gap-16">
          <img
            src={`/images/${product.image}`}
            alt={convertToSlug(product.name)}
            className="w-[40vw] h-full object-contain bg-beige rounded-3xl"
          />

          <div className="w-[39vw]">
            <div className="flex justify-between items-center">
              <div className="mb-8">
                <p className="text-sm mb-3">{product.category}</p>
                <h1 className="text-3xl font-bold text-blue mb-1">
                  {product.name}
                </h1>
                <p className="text-base text-blue">{product.series || "No Series"}</p>
              </div>

              <Button
                label="Order Product"
                onClick={() => window.open("https://wa.me/6281807319641", "_blank")}
                primary={false}
              ></Button>
            </div>

            <div className="bg-beige py-6 px-7 rounded-2xl">
              <h3 className="text-lg font-bold mb-3">Details</h3>

              <div className="text-base">
                {Object.entries(product)
                  .filter(
                    ([key, _]) => !["series", "category", "image"].includes(key)
                  )
                  .map(([key, value], index) => (
                    <div key={index} className="grid grid-cols-3 py-1">
                      <p>{convertToTitle(key)}</p>
                      <p>:</p>
                      <p className="text-end">{value || "-"}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}

export default ProductDetailContainer;
