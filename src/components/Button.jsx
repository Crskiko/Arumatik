import PropTypes from "prop-types";

/**
 * A button component that triggers an action when clicked.
 *
 * @param {object} props - Props for the button.
 * @param {string} props.label - The text displayed on the button.
 * @param {Function} props.onClick - Callback function triggered when the button is clicked.
 * @param {boolean} props.primary - Boolean that determines the button styling.
 * @param {boolean} props.isMobile - Determines the size of the button.
 * @returns {JSX.Element} The rendered button component.
 */
function Button({ label, onClick, primary, isMobile }) {
  return (
    <div>
      <button
        className={`${
          primary
            ? "bg-blue text-white shadow-lg"
            : "bg-white border border-blue shadow-md"
        } ${
          isMobile
            ? "text-xs px-3 py-2 rounded-lg"
            : "text-base px-5 py-3 rounded-xl"
        } transform transition duration-300 hover:scale-105`}
        onClick={onClick}
        type="button"
      >
        {label}
      </button>
    </div>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  primary: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default Button;
