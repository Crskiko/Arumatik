import { useState } from "react";
import ArrowDownIcon from "../assets/icons/arrow-down-icon.svg";

/**
 * A dropdown component that displays a header with a title and a list of selectable items.
 *
 * @param {object} props - Props for the card.
 * @param {string} props.selected - The name of the selected product series.
 * @param {Array<string>} props.options - Array of series variations.
 * @param {() => void} props.setSeries - Callback function triggered when the option is clicked.
 * @returns {JSX.Element} The rendered dropdown component.
 */
function Dropdown({ selected, options, setSeries }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-80">
      <div
        className={`${
          isOpen
            ? "rounded-t-xl bg-white border-2 border-b-0 border-beige"
            : "rounded-xl bg-beige"
        } flex items-center justify-between px-6 py-3 cursor-pointer`}
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
      >
        <p className="text-base">{selected}</p>
        <img
          src={ArrowDownIcon}
          alt="arrow-icon"
          className={isOpen ? "rotate-180" : "rotate-0"}
        />
      </div>

      {isOpen && (
        <ul className="absolute z-10 border-2 border-t-0 border-beige bg-white rounded-b-xl cursor-pointer w-full">
          {options.map((value, index) => (
            <li
              key={index}
              className="text-sm px-6 py-3 transition-all duration-300 hover:bg-beige"
              onClick={() => {
                setSeries(value);
                setIsOpen(false);
              }}
            >
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
