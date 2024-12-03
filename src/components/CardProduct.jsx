import ArrowIcon from "../assets/icons/arrow-icon.svg";
import PropTypes from "prop-types";
import convertToSlug from "../utils/convertToSlug";

/**
 * A card component that displays product name and image.
 *
 * @param {object} props - Props for the card.
 * @param {object} props.product - The object that contains `name` and `image`.
 * @param {string} props.product.name - The name of the product.
 * @param {string} props.product.image - The path URL of the product image.
 * @param {Function} props.onClick - Callback function triggered when the card is clicked.
 * @param {boolean} props.isMobile - Boolean that determines card size.
 * @returns {JSX.Element} The rendered product card component.
 */
function CardProduct({ product, onClick, isMobile }) {
  return (
    <button
      className={`group flex flex-col items-center justify-center w-fit bg-white cursor-pointer
      ${isMobile ? "rounded-xl p-4" : "rounded-3xl p-5"} shadow-sm transform transition-all duration-200 
      hover:scale-105 hover:bg-blue hover:text-white`}
      onClick={onClick}
    >
      <img
        src={`/images/${product.image}`}
        alt={`${convertToSlug(product.name)}-image`}
        className={`${isMobile ? "w-40 h-32 rounded-lg" : "w-64 h-36 rounded-2xl"} object-contain 
        overflow-hidden aspect-video mb-3 bg-beige`}
        loading="lazy"
      />

      <div className="flex items-center justify-between w-full">
        <h3 className={`${isMobile ? "text-sm" : "text-lg"} font-bold`}>{product.name}</h3>

        <div
          className={`bg-white flex items-center justify-center rounded-full border 
          ${isMobile ? "w-5 h-5 border-[1.8px]" : "w-6 h-6 border-2"} border-blue transform 
          transition duration-200 group-hover:bg-beige group-hover:border-beige group-hover:scale-125`}
        >
          <img src={ArrowIcon} alt="arrow-icon" className={`${isMobile ? "w-[0.4rem]" : "w-2"} ml-[0.07rem]`} />
        </div>
      </div>
    </button>
  );
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isMobile:PropTypes.bool.isRequired,
};

export default CardProduct;
