import convertToSlug from "../utils/convertToSlug";
import convertToTitle from "../utils/convertToTitle";
import Button from "./Button";
import PropTypes from "prop-types";

/**
 * Component that displays image and product details in product detail page.
 *
 * @param {object} props - Props for the card.
 * @param {object} props.product - THe object that contains product data.
 * @param {() => void} props.onClick - Callback function triggered when the button is clicked.
 * @returns {JSX.Element} The rendered product detail section.
 */
function DetailSection({ product, onClick }) {
  return (
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
              <p className="text-base text-blue">
                {product.series || "No Series"}
              </p>
            </div>

            <Button
              label="Order Product"
              onClick={onClick}
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
  );
}

DetailSection.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default DetailSection;
