import PropTypes from "prop-types";

/**
 * A card component that displays product categories.
 *
 * @param {object} props - Props for the card.
 * @param {string} props.name - The displayed category card.
 * @param {string} props.desc - A brief description of the product category.
 * @param {string} props.img - Path URL of the image displayed.
 * @param {boolean} props.primary - Boolean value that determines card style.
 * @param {boolean} props.reverse - Boolean value that determines card direction.
 * @returns {JSX.Element} The category card component.
 */
function CardCategory({ name, desc, img, primary, reverse }) {
  return (
    <div
      className={`flex ${reverse ? "flex-row-reverse pl-9" : "flex-row pr-9"} 
        ${primary ? "bg-blue shadow-xl" : "bg-beige shadow-sm"} items-center justify-between w-[592px] h-72 
        rounded-3xl mx-5 transform transition duration-300 hover:scale-105 cursor-pointer`}
    >
      <img
        src={img}
        alt="category"
        className={`w-64 h-72 overflow-hidden ${reverse ? "rounded-e-3xl" : "rounded-s-3xl"}`}
      />

      <div 
        className={`${primary ? "text-white" : "text-black"} 
          ${reverse ? "text-start" : "text-end"} w-60`}
      >
        <h2 className="text-3xl font-bold mb-4">{name}</h2>
        <p className="text-base">{desc}</p>
      </div>
    </div>
  );
}

CardCategory.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  primary: PropTypes.bool.isRequired,
  reverse: PropTypes.bool.isRequired,
};

export default CardCategory;
