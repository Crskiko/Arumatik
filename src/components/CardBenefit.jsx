import PropTypes from "prop-types";

/**
 * A card component that displays company benefit.
 *
 * @param {object} props - Props for the card.
 * @param {string} props.name - The benefit displayed.
 * @param {string} props.desc - A brief description of the benefit.
 * @param {string} props.img - Path URL of the image displayed.
 * @param {boolean} props.isMobile - Boolean that determines card size.
 * @returns {JSX.Element} The rendered category card component.
 */
function CardBenefit({ name, desc, img, isMobile }) {
  return (
    <div
      className={`${
        isMobile ? "px-4 py-6" : "px-5 py-8"
      } flex flex-col justify-center items-center 
      bg-white shadow-sm rounded-3xl h-full transform transition duration-300 
      hover:scale-105 cursor-default`}
    >
      <img
        src={img}
        alt="icon"
        className={isMobile ? "max-w-16 mb-2" : "max-w-20 mb-5"}
        loading="lazy"
      />

      <div className="text-center">
        <h3 className={`${isMobile ? "text-sm mb-1" : "text-lg mb-2"} font-bold`}>
          {name}
        </h3>
        <p className={isMobile ? "text-xs" : "text-sm"}>{desc}</p>
      </div>
    </div>
  );
}

CardBenefit.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default CardBenefit;
