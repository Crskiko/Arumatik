import PropTypes from "prop-types";

function ButtonPrimary(text) {
  return (
    <div>
      <button className="bg-blue text-white text-lg px-5 py-3 rounded-xl shadow-lg transform transition duration-300 hover:scale-110">{text}</button>
    </div>
  );
}

ButtonPrimary.propTypes = {
  text: PropTypes.string.isRequired
}

export default ButtonPrimary;