import Heading from "./Heading";
import PropTypes from "prop-types";

/**
 * Component that displays vision and mission in home page.
 *
 * @returns {JSX.Element} The rendered about section.
 */
function AboutSection({ targetSection }) {
  return (
    <section id="about" className="bg-beige" ref={targetSection}>
      <Heading
        text="About Us"
        desc="Trusted across Indonesia for high-quality, sustainable pallet solutions tailored 
          to logistics and manufacturing needs."
      ></Heading>

      <div className="flex flex-wrap items-center justify-center gap-8 mx-28 mt-10">
        <div
          className="bg-white shadow-sm px-10 py-12 w-[30rem] rounded-3xl cursor-default
            transform transition duration-300 hover:scale-105"
        >
          <h3 className="text-lg font-bold mb-2">Vision</h3>
          <p className="text-base">
            To become Indonesia’s most advanced pallet manufacturer, continually
            adapting to meet the evolving needs of our clients.
          </p>
        </div>
        <div
          className="bg-white shadow-sm px-10 py-12 w-[30rem] rounded-3xl cursor-default
            transform transition duration-300 hover:scale-105"
        >
          <h3 className="text-lg font-bold mb-2">Mission</h3>
          <ol className="list-decimal text-base ml-4">
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
};

export default AboutSection;
