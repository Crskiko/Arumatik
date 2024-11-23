import PropTypes from "prop-types";
import Button from "./Button";
import ArrowV2Icon from "../assets/icons/arrow-v2-icon.svg";

/**
 * Component that displays hero image, heading, and interactive navigation button in home page.
 *
 * @param {object} props - Props for the card.
 * @param {() => void} props.navigate - Callback function for navigation button.
 * @param {() => void} props.scroll - Callback function for scrolling to section.
 * @returns {JSX.Element} The rendered hero section.
 */
function HeroSection({ navigate, scroll }) {
  return (
    <section id="hero" className="relative">
      <div className="flex justify-between items-center w-full px-28">
        <div className="w-[34rem]">
          <h1 className="text-3xl font-bold text-blue mb-5">
            Efficient, Sustainable Pallet Solutions for Every Need
          </h1>

          <p className="text-sm mb-16">
            From logistics hubs to factories, we provide high-quality pallet
            racks with flexible rental and purchase options, including delivery
            and comprehensive warranties across Java.
          </p>

          <Button
            label="Explore Products"
            onClick={navigate}
            primary={false}
          ></Button>
        </div>

        <img
          src="/images/sample.jpg"
          alt="hero-img"
          className="w-[26rem] h-[26rem] overflow-hidden rounded-[2.5rem]"
        />
      </div>

      <div
        className="bg-blue w-6 h-6 rounded-full flex items-center justify-center absolute bottom-10"
        onMouseOver={scroll}
      >
        <img src={ArrowV2Icon} alt="arrow-icon" className="ml-[0.05rem] w-4" />
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  navigate: PropTypes.func.isRequired,
  scroll: PropTypes.func.isRequired
}

export default HeroSection;
