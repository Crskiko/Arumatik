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
 * @param {() => void} props.onClick - Callback function triggered when the card is clicked.
 * @returns {JSX.Element} - The rendered product card component.
 */
function CardProduct({ product, onClick }) {
  return (
    <div
      className="group flex flex-col items-center justify-center w-fit bg-white p-5 cursor-pointer
      rounded-3xl shadow-sm transform transition-all duration-300 hover:scale-105"
      onClick={onClick}
    >
      <img
        src={`/images/${product.image}`}
        alt={convertToSlug(product.name)}
        className="w-64 h-36 object-cover overflow-hidden rounded-2xl mb-3"
      />

      <div className="flex items-center justify-between w-64">
        <h3 className="text-lg font-bold">{product.name}</h3>

        <div
          className="bg-white w-6 h-6 flex items-center justify-center rounded-full 
          border-2 border-blue transform transition duration-200 group-hover:bg-beige 
          group-hover:border-beige group-hover:scale-125"
        >
          <img src={ArrowIcon} alt="arrow-icon" className="ml-[0.07rem] w-2" />
        </div>
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardProduct;
