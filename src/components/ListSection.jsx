import { useNavigate } from "react-router-dom";
import CardProduct from "./CardProduct";
import PropTypes from "prop-types";

/**
 * Component that displays hero image, heading, and interactive navigation button in home page.
 *
 * @param {object} props - Props for the card.
 * @param {Array} props.products - The object that contains products data.
 * @returns {JSX.Element} The rendered list section.
 */
function ListSection({ products }) {
  const navigate = useNavigate();

  return (
    <section className="h-fit mb-20">
      <div className="grid grid-cols-4 gap-6">
        {products.map((value) => (
          <div key={value.name}>
            <CardProduct
              product={value}
              onClick={() => navigate(`/products/${value.name}`)}
            ></CardProduct>
          </div>
        ))}
      </div>
    </section>
  );
}

ListSection.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ListSection;
