import PropTypes from "prop-types";

/**
 * A card component that displays company benefit.
 *
 * @param {object} props - Props for the card.
 * @param {string} props.name - The benefit displayed.
 * @param {string} props.desc - A brief description of the benefit.
 * @param {string} props.img - Path URL of the image displayed.
 * @returns {JSX.Element} - The rendered category card component.
 */
function CardBenefit({ name, desc, img }) {
  return (
    <div
      className="flex flex-col justify-center items-center bg-white shadow-sm w-fit px-5 py-8 
      rounded-3xl transform transition duration-300 hover:scale-105 cursor-default"
    >
      <img src={img} alt="icon" className="max-w-20 mb-5" />

      <div className="text-center w-52">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
}

CardBenefit.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default CardBenefit;
