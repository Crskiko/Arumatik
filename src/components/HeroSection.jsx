import PropTypes from "prop-types";
import Button from "./Button";
import ArrowV2Icon from "../assets/icons/arrow-v2-icon.svg";

/**
 * Component that displays hero image, heading, and interactive navigation button in home page.
 *
 * @param {object} props - Props for the card.
 * @param {() => void} props.navigate - Callback function for navigation button.
 * @param {() => void} props.scroll - Callback function for scrolling to section.
 * @param {boolean} props.isMobile - Boolean that determines section size.
 * @returns {JSX.Element} The rendered hero section.
 */
function HeroSection({ navigate, scroll, isMobile }) {
  return (
    <section id="hero" className="relative">
      <div
        className={`flex ${isMobile ? "flex-col px-6" : "flex-row px-28"} 
        justify-between items-center w-full`}
      >
        <div className={isMobile ? "text-center" : "w-[34rem]"}>
          <h1 className={`${isMobile ? "text-2xl mb-4" : "text-3xl mb-5"} font-bold text-blue`}>
            Efficient, Sustainable Pallet Solutions for Every Need
          </h1>

          <p className={isMobile ? "text-xs mb-6" : "text-sm mb-16"}>
            From logistics hubs to factories, we provide high-quality pallet
            racks with flexible rental and purchase options, including delivery
            and comprehensive warranties across Java.
          </p>

          <Button
            label="Explore Products"
            onClick={navigate}
            primary={false}
            isMobile={isMobile}
          ></Button>
        </div>

        <img
          src="/images/sample.jpg"
          alt="hero-img"
          className={`${
            isMobile 
              ? "w-80 h-80 rounded-2xl mt-10" 
              : "w-[26rem] h-[26rem] rounded-[2.5rem]"
          } overflow-hidden`}
        />
      </div>

      <button
        className="bg-blue w-6 h-6 rounded-full flex items-center justify-center absolute bottom-10"
        onMouseOver={scroll}
        onFocus={scroll}
      >
        <img src={ArrowV2Icon} alt="arrow-icon" className="ml-[0.05rem] w-4" />
      </button>
    </section>
  );
}

HeroSection.propTypes = {
  navigate: PropTypes.func.isRequired,
  scroll: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default HeroSection;
