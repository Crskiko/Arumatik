import CardCategory from "./CardCategory";
import Heading from "./Heading";
import { data as category } from "../assets/data/category.json";
import { useNavigate } from "react-router-dom";

/**
 * Component that displays product categories in home page.
 *
 * @returns {JSX.Element} The rendered category section.
 */
function CategorySection() {
  const navigate = useNavigate();

  return (
    <section id="product" className="h-[120vh]">
      <Heading
        text="Brose Our Products"
        desc="Explore our diverse range of industrial-grade solutions—from pallets to 
          containers—designed to meet the demands of any operation."
      ></Heading>

      <div className="grid grid-cols-2 gap-8 mt-10">
        {category.map((value, index) => (
          <div key={index}>
            <CardCategory
              name={value.name}
              desc={value.description}
              img={`/images/${value.image}`}
              primary={[0, 3].includes(index) ? false : true}
              reverse={[0, 4].includes(index) ? false : true}
              onClick={() => navigate('/products', { state: { category: value.name } })}
            ></CardCategory>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
