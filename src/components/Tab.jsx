import PropTypes from "prop-types";

/**
 * A tab component that displays product category name and triggers a filtering function.
 *
 * @param {object} props - Props for the card.
 * @param {string} props.name - The name of the product category.
 * @param {boolean} props.isActive - Boolean value that shows tab activation statue.
 * @param {() => void} props.onClick - Callback function triggered when the tab is clicked.
 * @returns {JSX.Element} The rendered tab component.
 */
function Tab({ name, isActive, onClick }) {
  return (
    <button
      type="button"
      className="group flex flex-col items-center justify-center gap-2 cursor-pointer"
      onClick={onClick}
    >
      <h3
        className={`${isActive ? "text-blue font-bold text-lg" : "text-base text-grey"} 
        transition-all duration-500 ease-in-out group-hover:text-blue group-hover:font-bold 
        group-hover:text-lg`}
      >
        {name}
      </h3>
      <div
        className={`${isActive ? "w-24 h-[0.2rem]" : "w-0 h-0"} bg-blue rounded-sm 
        transition-all duration-500 ease-in-out overflow-hidden group-hover:w-24 group-hover:h-[0.2rem]`}
      ></div>
    </button>
  );
}

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Tab;
