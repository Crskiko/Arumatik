import Heading from "./Heading";
import PropTypes from "prop-types";

/**
 * Component that displays vision and mission in home page.
 *
 * @param {object} props - Props for the element.
 * @param {boolean} props.isMobile - Boolean that determines section size.
 * @returns {JSX.Element} The rendered about section.
 */
function AboutSection({ targetSection, isMobile }) {
  return (
    <section id="about" className="bg-beige" ref={targetSection}>
      <Heading
        text="About Us"
        desc="Trusted across Indonesia for high-quality, sustainable pallet solutions tailored 
          to logistics and manufacturing needs."
        isMobile={isMobile}
      ></Heading>

      <div className={`grid mt-10 ${
        isMobile 
          ? "grid-cols-1 gap-5 mx-6" 
          : "grid-cols-2 gap-8 xl:mx-28 mx-12"
        }`}
      >
        <div
          className={`${
            isMobile
              ? "py-8 px-7 rounded-2xl"
              : "px-10 py-12 rounded-3xl"
          } bg-white shadow-sm cursor-default transform transition duration-300 hover:scale-105`}
        >
          <h3 className={`${isMobile ? "text-sm mb-1" : "text-lg mb-2"} font-bold`}>
            Vision
          </h3>
          <p className={isMobile ? "text-xs" : "text-base"}>
            To become Indonesia’s most advanced pallet manufacturer, continually
            adapting to meet the evolving needs of our clients.
          </p>
        </div>
        <div
          className={`${
            isMobile
              ? "py-8 px-7 rounded-2xl"
              : "px-10 py-12 rounded-3xl"
          } bg-white shadow-sm cursor-default transform transition duration-300 hover:scale-105`}
        >
          <h3 className={`${isMobile ? "text-sm mb-1" : "text-lg mb-2"} font-bold`}>
            Mission
          </h3>
          <ol className={`${isMobile ? "text-xs" : "text-base"} list-decimal ml-4`}>
            <li>Drive innovation to lead market trends.</li>
            <li>Stay ahead with a forward-thinking approach.</li>
            <li>Proactively meet client needs.</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

AboutSection.propTypes = {
  targetSection: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  isMobile: PropTypes.bool.isRequired,
};

export default AboutSection;
