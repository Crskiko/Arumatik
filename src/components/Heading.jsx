import PropTypes from "prop-types";

/**
 * A heading component that displays heading and sub heading of a section.
 *
 * @param {object} props - Props for the texts.
 * @param {string} props.text - The displayed heading text.
 * @param {string} props.desc - The sub heading text.
 * @param {boolean} prop.primary - Boolean that determines the text styling.
 * @returns {JSX.Element} - The rendered heading component.
 */
function Heading({ text, desc, primary = true }) {
  return (
    <div className="text-center w-[36rem]">
      <h1 className={`${primary ? "text-blue" : "text-white"} text-2xl font-bold mb-3`}>{text}</h1>
      <p className={`${primary ? "text-black" : "text-white"} text-sm`}>{desc}</p>
    </div>
  );
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  primary: PropTypes.bool
}

export default Heading;