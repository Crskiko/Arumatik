import CardBenefit from "./CardBenefit";
import Heading from "./Heading";
import { data as benefit } from "../assets/data/benefit.json";
import PropTypes from "prop-types";

/**
 * Component that displays benefit cards in home page.
 *
 * @param {object} props - Props for the element.
 * @param {boolean} props.isMobile - Boolean that determines section size.
 * @returns {JSX.Element} The rendered benefit section.
 */
function BenefitSection({ isMobile }) {
  return (
    <section id="benefit" className={`${isMobile ? "sm:h-dvh h-fit py-16" : "h-dvh"} bg-blue`}>
      <Heading
        text="Why Choose Us"
        desc="Experience the difference with flexible options, reliable service, and complete 
          protection tailored to support your business growth."
        primary={false}
        isMobile={isMobile}
      ></Heading>

      <div 
        className={`grid auto-rows-[1fr] items-stretch mt-10 ${
          isMobile 
            ? "sm:grid-cols-2 gap-5 mx-6 grid-cols-1" 
            : "grid-cols-4 xl:gap-8 gap-6 xl:mx-28 mx-12"
          }
        `}
      >
        {benefit.map((v) => (
          <div key={v.id}>
            <CardBenefit
              name={v.title}
              desc={v.description}
              img={v.image}
              isMobile={true}
            ></CardBenefit>
          </div>
        ))}
      </div>
    </section>
  );
}

BenefitSection.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default BenefitSection;
