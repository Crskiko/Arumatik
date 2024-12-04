import { useState } from "react";
import ArrowDownIcon from "../assets/icons/arrow-down-icon.svg";
import PropTypes from "prop-types";

/**
 * A dropdown component that displays a header with a title and a list of selectable items.
 *
 * @param {object} props - Props for the card.
 * @param {string|null} props.selected - The name of the selected product series (optional).
 * @param {Array<string>} props.options - Array of series variations.
 * @param {Function} props.setSeries - Callback function triggered when the option is clicked.
 * @param {boolean} props.isMobile - Boolean that determines dropdown size.
 * @returns {JSX.Element} The rendered dropdown component.
 */
function Dropdown({ selected, options, setSeries, isMobile }) {
  const [isOpen, setIsOpen] = useState(false);

  let borderStyle = "border-2 border-b-0 border-beige";
  let roundedStyle;

  if (isOpen) {
    roundedStyle = isMobile ? "rounded-t-lg" : "rounded-t-xl";
  } else {
    roundedStyle = isMobile ? "rounded-lg" : "rounded-xl";
    borderStyle = "bg-beige"; // Adjust this if required
  }

  const buttonStateStyle = `${roundedStyle} ${isOpen ? "bg-white" : "bg-beige"} ${borderStyle}`;

  return (
    <div className="relative sm:w-80 w-60">
      <button
        className={`flex items-center justify-between cursor-pointer w-full 
        ${isMobile ? "px-4 py-2.5" : "px-6 py-3"} ${buttonStateStyle}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className={isMobile ? "text-sm" : "text-base"}>{selected}</p>
        <img
          src={ArrowDownIcon}
          alt="arrow-icon"
          className={isOpen ? "rotate-180" : "rotate-0"}
        />
      </button>

      {isOpen && (
        <ul
          className={`absolute z-10 border-2 border-t-0 border-beige bg-white cursor-pointer 
          ${isMobile ? "rounded-b-lg" : "rounded-b-xl"} w-full`}
        >
          {options.map((value) => (
            <li key={value}>
              <button
                className={`${
                  isMobile ? "text-xs px-4 py-2.5" : "text-sm px-6 py-3"
                } transition-all duration-300 hover:bg-beige w-full text-start`}
                onClick={() => {
                  setSeries(value);
                  setIsOpen(false);
                }}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  selected: PropTypes.string,
  options: PropTypes.array.isRequired,
  setSeries: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default Dropdown;
