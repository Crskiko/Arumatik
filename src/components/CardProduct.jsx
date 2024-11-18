import arrowIcon from "../assets/arrow-icon.svg";
import PropTypes from "prop-types";

/**
 * A card component that displays product name and image.
 *
 * @param {object} props - Props for the card.
 * @param {string} props.product - The object that contains `name` and `image`.
 * @param {string} props.product.name - The name of the product.
 * @param {string} props.product.image - The path URL of the product image.
 * @returns {JSX.Element} The product card component.
 */
function CardProduct({ product }) {
  return (
    <div className="flex flex-col items-center justify-center w-fit bg-white p-6 rounded-3xl shadow-sm">
      <img
        src={product.image}
        alt={product.name}
        className="w-80 h-48 overflow-hidden rounded-2xl mb-4"
      />

      <div className="flex items-center justify-between w-80">
        <h3 className="text-xl font-bold">{product.name}</h3>

        <div 
          className="bg-white w-8 h-8 flex items-center justify-center rounded-[50%] 
            border-2 border-blue cursor-pointer transform transition duration-200 hover:bg-beige 
            hover:border-beige hover:scale-110"
        >
          <img src={arrowIcon} alt="arrow-icon" className="ml-[0.05rem]" />
        </div>
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired
}

export default CardProduct;
