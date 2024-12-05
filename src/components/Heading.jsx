import PropTypes from "prop-types";

/**
 * A heading component that displays heading and sub heading of a section.
 *
 * @param {object} props - Props for the texts.
 * @param {string} props.text - The displayed heading text.
 * @param {string} props.desc - The sub heading text.
 * @param {boolean} [prop.primary=true] - Boolean that determines the text styling. Defaults to `true`.
 * @param {boolean} props.isMobile - Boolean that determines heading size.
 * @returns {JSX.Element} The rendered heading component.
 */
function Heading({ text, desc, primary = true, isMobile }) {
  return (
    <div className={`text-center ${isMobile ? "w-fit px-6" : "w-[36rem]"}`}>
      <h1
        className={`${primary ? "text-blue" : "text-white"} 
        ${isMobile ? "text-lg mb-1" : "text-2xl mb-3"} font-bold`}
      >
        {text}
      </h1>
      <p
        className={`${primary ? "text-black" : "text-white"} 
        ${isMobile ? "text-xs" : "text-sm"}`}
      >
        {desc}
      </p>
    </div>
  );
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  isMobile: PropTypes.bool.isRequired,
};

export default Heading;
