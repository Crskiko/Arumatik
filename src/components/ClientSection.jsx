import Heading from "./Heading";
import PropTypes from "prop-types";

/**
 * Component that displays logo images in home page.
 *
 * @param {object} props - Props for the element.
 * @param {boolean} props.isMobile - Boolean that determines section size.
 * @returns {JSX.Element} The rendered client section.
 */
function ClientSection({ isMobile }) {
  return (
    <section id="client">
      <Heading
        text="Our Clients"
        desc="Trusted by industry leaders who rely on our quality and commitment to keep their 
          operations running smoothly."
        isMobile={isMobile}
      ></Heading>

      <div 
        className={`flex ${isMobile ? "flex-col" : "flex-row"} justify-center items-center 
        xl:gap-16 gap-10 w-full 2xl:px-48 xl:px-28 px-12 mt-12`}
      >
        <img
          src="/images/logos/logo-garuda.webp"
          alt="logo-garuda"
          className="max-w-24 opacity-20 transform transition-all duration-500 
          cursor-default hover:opacity-100 hover:scale-105"
          loading="lazy"
        />
        <img
          src="/images/logos/logo-indofood.webp"
          alt="logo-indofood"
          className="max-w-20 opacity-20 transform transition-all duration-500 
            cursor-default hover:opacity-100 hover:scale-105"
          loading="lazy"
        />
        <img
          src="/images/logos/logo-unilever.webp"
          alt="logo-unilever"
          className="max-w-16 opacity-20 transform transition-all duration-500 
            cursor-default hover:opacity-100 hover:scale-105"
          loading="lazy"
        />
        <img
          src="/images/logos/logo-p&g.webp"
          alt="logo-p&g"
          className="max-w-24 opacity-20 transform transition-all duration-500 
            cursor-default hover:opacity-100 hover:scale-105"
          loading="lazy"
        />
        <img
          src="/images/logos/logo-toyota.webp"
          alt="logo-toyota"
          className="max-w-20 opacity-20 transform transition-all duration-500 
            cursor-default hover:opacity-100 hover:scale-105"
          loading="lazy"
        />
        <img
          src="/images/logos/logo-dover.webp"
          alt="logo-dover"
          className="max-w-36 opacity-20 transform transition-all duration-500 
            cursor-default hover:opacity-100 hover:scale-105"
          loading="lazy"
        />
      </div>
    </section>
  );
}

ClientSection.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default ClientSection;
