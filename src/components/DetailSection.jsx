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
 * @param {boolean} props.isMobile - Boolean that determines section size.
 * @returns {JSX.Element} The rendered product detail section.
 */
function DetailSection({ product, onClick, isMobile }) {
  return (
    <section className={`${isMobile ? "mx-6" : "mx-0"} h-fit pt-32 pb-10`}>
      <div
        className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2 gap-16"}`}
      >
        <img
          src={`/images/${product.image}`}
          alt={convertToSlug(product.name)}
          className={`${
            isMobile
              ? "w-full h-auto py-8 rounded-2xl"
              : "w-[40vw] h-[29rem] rounded-3xl"
          } object-contain bg-beige mb-6`}
        />

        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className={isMobile ? "mb-6" : "mb-8"}>
              <p className={isMobile ? "text-xs mb-2" : "text-sm mb-3"}>{product.category}</p>
              <h1 className={`${isMobile ? "text-2xl" : "text-3xl"} font-bold text-blue mb-1`}>
                {product.name}
              </h1>
              <p className={`${isMobile ? "text-sm" : "text-base"} text-blue`}>
                {product.series || "No Series"}
              </p>
            </div>

            <Button
              label="Order Product"
              onClick={onClick}
              primary={false}
              isMobile={isMobile}
            ></Button>
          </div>

          <div className={`${isMobile ? "py-4 px-5" : "py-6 px-7"} bg-beige rounded-2xl`}>
            <h3 className={`${isMobile ? "text-sm mb-2" : "text-lg mb-3"} font-bold`}>Details</h3>

            <div className={isMobile ? "text-xs" : "text-base"}>
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
  onClick: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default DetailSection;
