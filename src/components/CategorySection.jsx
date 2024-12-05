import CardCategory from "./CardCategory";
import Heading from "./Heading";
import { data as category } from "../assets/data/category.json";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Component that displays product categories in home page.
 *
 * @param {object} props - Props for the element.
 * @param {boolean} props.isMobile - Boolean that determines section size.
 * @returns {JSX.Element} The rendered category section.
 */
function CategorySection({ isMobile }) {
  const navigate = useNavigate();

  return (
    <section id="product" className="h-fit my-40">
      <Heading
        text="Brose Our Products"
        desc="Explore our diverse range of industrial-grade solutions—from pallets to 
          containers—designed to meet the demands of any operation."
        isMobile={isMobile}
      ></Heading>

      <div 
        className={`grid ${
          isMobile 
            ? "grid-cols-1 gap-6 mx-6" 
            : "xl:grid-cols-2 gap-8 mx-28 grid-cols-1"
          } mt-10`
        }
      >
        {category.map((value, index) => (
          <div key={value.name}>
            <CardCategory
              name={value.name}
              desc={value.description}
              img={`/images/${value.image}`}
              primary={isMobile ? [0, 2].includes(index) : [0, 3].includes(index)}
              reverse={isMobile ? [1, 3].includes(index) : [1, 4].includes(index)}
              onClick={() => navigate("/products", { state: { category: value.name } })}
              isMobile={isMobile}
            ></CardCategory>
          </div>
        ))}
      </div>
    </section>
  );
}

CategorySection.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default CategorySection;
