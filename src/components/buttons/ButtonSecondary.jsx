import PropTypes from "prop-types";

function ButtonSecondary(text) {
  return (
    <div>
      <button className="bg-white border border-blue text-lg px-5 py-3 rounded-xl shadow-md transform transition duration-300 hover:scale-110">{text}</button>
    </div>
  );
}

ButtonSecondary.propTypes = {
  text: PropTypes.string.isRequired
}

export default ButtonSecondary;