import CardBenefit from "./CardBenefit";
import Heading from "./Heading";
import { data as benefit } from "../assets/data/benefit.json";

/**
 * Component that displays benefit cards in home page.
 *
 * @returns {JSX.Element} The rendered benefit section.
 */
function BenefitSection() {
  return (
    <section id="benefit" className="bg-blue">
      <Heading
        text="Why Choose Us"
        desc="Experience the difference with flexible options, reliable service, and complete 
          protection tailored to support your business growth."
        primary={false}
      ></Heading>

      <div className="flex flex-wrap items-center gap-8 mt-10">
        {benefit.map((v) => (
          <div key={v.id}>
            <CardBenefit
              name={v.title}
              desc={v.description}
              img={v.image}
            ></CardBenefit>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BenefitSection;
