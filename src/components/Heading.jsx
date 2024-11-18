import PropTypes from "prop-types";

/**
 * A heading component that displays heading and sub heading of a section.
 *
 * @param {object} props - Props for the texts.
 * @param {string} props.text - The displayed heading text.
 * @param {string} props.desc - The sub heading text.
 * @returns {JSX.Element} The rendered heading component.
 */
function Heading({ text, desc }) {
  return (
    <div className="text-center w-[36rem]">
      <h1 className="text-2xl font-bold text-blue mb-3">{text}</h1>
      <p className="text-sm">{desc}</p>
    </div>
  );
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
}

export default Heading;