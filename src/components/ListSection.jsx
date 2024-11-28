import { useNavigate } from "react-router-dom";
import CardProduct from "./CardProduct";
import PropTypes from "prop-types";

/**
 * Component that displays hero image, heading, and interactive navigation button in home page.
 *
 * @param {object} props - Props for the card.
 * @param {Array} props.products - The object that contains products data.
 * @param {boolean} props.isMobile - Boolean that determines section size.
 * @returns {JSX.Element} - The rendered list section.
 */
function ListSection({ products, isMobile }) {
  const navigate = useNavigate();

  return (
    <section className="h-fit mb-20">
      <div className={`grid ${isMobile ? "sm:grid-cols-2 gap-3 grid-cols-1" : "grid-cols-4 gap-6"} xl:mx-28 mx-12`}>
        {products.map((value) => (
          <div key={value.name}>
            <CardProduct
              product={value}
              onClick={() => navigate(`/products/${value.name}`)}
              isMobile={isMobile}
            ></CardProduct>
          </div>
        ))}
      </div>
    </section>
  );
}

ListSection.propTypes = {
  products: PropTypes.array.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default ListSection;
