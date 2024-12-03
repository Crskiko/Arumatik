import PropTypes from "prop-types";

/**
 * A card component that displays product categories.
 *
 * @param {object} props - Props for the card.
 * @param {string} props.name - The displayed category name.
 * @param {string} props.desc - A brief description of the product category.
 * @param {string} props.img - Path URL of the image displayed.
 * @param {boolean} props.primary - Boolean value that determines card style.
 * @param {boolean} props.reverse - Boolean value that determines card direction.
 * @param {Function} props.onClick - Callback function triggered when the card is clicked.
 * @param {boolean} props.isMobile - Boolean that determines card size.
 * @returns {JSX.Element} The rendered category card component.
 */
function CardCategory({
  name,
  desc,
  img,
  primary,
  reverse,
  onClick,
  isMobile,
}) {

  const cardDirection = reverse ? "flex-row-reverse" : "flex-row";
  const padding = reverse
    ? isMobile
      ? "pl-6"
      : "pl-9"
    : isMobile
    ? "pr-6"
    : "pr-9";
  const cardStyle = primary ? "bg-blue shadow-xl" : "bg-beige shadow-sm";
  const borderRadius = isMobile ? "rounded-2xl" : "rounded-3xl";
  const imageBorderRadius = reverse
    ? isMobile
      ? "rounded-e-2xl"
      : "rounded-e-3xl"
    : isMobile
    ? "rounded-s-2xl"
    : "rounded-s-3xl";
  const imageSize = isMobile ? "w-36 h-48" : "w-56 h-60";
  const textAlignment = reverse ? "text-start" : "text-end";
  const textColor = primary ? "text-white" : "text-black";
  const textWidth = isMobile ? "w-44" : "w-52";
  const titleSize = isMobile ? "text-lg mb-1" : "text-2xl mb-4";
  const descSize = isMobile ? "text-xs" : "text-sm";

  return (
    <button
      className={`flex ${cardDirection} ${padding} ${cardStyle} ${borderRadius} 
      items-center justify-between gap-5 w-fit transform transition duration-300 
      hover:scale-105 cursor-pointer`}
      onClick={onClick}
    >
      <img
        src={img}
        alt="category-image"
        className={`overflow-hidden object-cover ${imageBorderRadius} ${imageSize}`}
        loading="lazy"
      />

      <div className={`${textColor} ${textAlignment} ${textWidth}`}>
        <h2 className={`${titleSize} font-bold`}>{name}</h2>
        <p className={descSize}>{desc}</p>
      </div>
    </button>
  );
}

CardCategory.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  primary: PropTypes.bool.isRequired,
  reverse: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default CardCategory;
