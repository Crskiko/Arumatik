import PropTypes from "prop-types";

/**
 * A tab component that displays product category name and triggers a filtering function.
 *
 * @param {object} props - Props for the card.
 * @param {string} props.name - The name of the product category.
 * @param {boolean} props.isActive - Boolean value that shows tab activation statue.
 * @param {Function} props.onClick - Callback function triggered when the tab is clicked.
 * @param {boolean} props.isMobile - Boolean that determines tab size.
 * @returns {JSX.Element} The rendered tab component.
 */
function Tab({ name, isActive = false, onClick, isMobile }) {
  const textStyle = isActive
    ? `${
        isMobile ? "text-blue font-bold text-sm" : "text-blue font-bold text-lg"
      }`
    : `${isMobile ? "text-xs text-grey" : "text-base text-grey"}`;
  const hoverTextStyle = isMobile
    ? "group-hover:text-sm"
    : "group-hover:text-lg";

  return (
    <button
      type="button"
      className="group flex flex-col items-center justify-center gap-2 cursor-pointer"
      onClick={onClick}
    >
      <h3
        className={`${textStyle} transition-all duration-500 ease-in-out 
        group-hover:text-blue group-hover:font-bold ${hoverTextStyle}`}
      >
        {name}
      </h3>
      <div
        className={`${
          isActive ? "w-24 h-[0.2rem]" : "w-0 h-0"
        } bg-blue rounded-sm transition-all 
        duration-500 ease-in-out overflow-hidden group-hover:w-24 group-hover:h-[0.2rem]`}
      ></div>
    </button>
  );
}

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default Tab;
