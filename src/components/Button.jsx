import PropTypes from "prop-types";

/**
 * A button component that triggers an action when clicked.
 *
 * @param {object} props - Props for the button.
 * @param {string} props.label - The text displayed on the button.
 * @param {() => void} props.onClick - Callback function triggered when the button is clicked.
 * @param {boolean} props.primary - Boolean that determines the button styling.
 * @returns {JSX.Element} The rendered button component.
 */
function Button({ label, onClick, primary }) {
  return (
    <div>
      <button
        className={`${primary ? "bg-blue text-white" : "bg-white border border-blue"}
        text-lg px-5 py-3 rounded-xl shadow-lg transform transition duration-300 hover:scale-110`}
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
};

export default Button;
