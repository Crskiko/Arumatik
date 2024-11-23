import CardCategory from "./CardCategory";
import Heading from "./Heading";

/**
 * Component that displays product categories in home page.
 *
 * @returns {JSX.Element} The rendered category section.
 */
function CategorySection() {
  return (
    <section id="product" className="h-[120vh]">
      <Heading
        text="Brose Our Products"
        desc="Explore our diverse range of industrial-grade solutions—from pallets to 
          containers—designed to meet the demands of any operation."
      ></Heading>

      <div className="grid grid-cols-2 gap-8 mt-10">
        <CardCategory
          name="Plastic Pallet"
          desc="Lightweight and durable for high-volume, easy handling."
          img="/images/sample.jpg"
          primary={false}
          reverse={false}
        ></CardCategory>

        <CardCategory
          name="Wooden Pallet"
          desc="Eco-friendly and strong, ideal for heavy-duty use."
          img="/images/sample.jpg"
          primary={true}
          reverse={true}
        ></CardCategory>

        <CardCategory
          name="Silica Gel"
          desc="Reliable moisture control to protect goods."
          img="/images/sample.jpg"
          primary={true}
          reverse={true}
        ></CardCategory>

        <CardCategory
          name="Container"
          desc="Secure, long-lasting storage for tough environments."
          img="/images/sample.jpg"
          primary={false}
          reverse={false}
        ></CardCategory>
      </div>
    </section>
  );
}

export default CategorySection;
