import Heading from "./Heading";

/**
 * Component that displays logo images in home page.
 *
 * @returns {JSX.Element} The rendered client section.
 */
function ClientSection() {
  return (
    <section id="client">
      <Heading
        text="Our Clients"
        desc="Trusted by industry leaders who rely on our quality and commitment to keep their 
          operations running smoothly."
      ></Heading>

      <div className="flex flex-wrap justify-between items-center w-full px-36 mt-12">
        <img
          src="/images/logos/logo-garuda.png"
          alt="logo-garuda"
          className="max-w-24 opacity-20 transform 
          transition-all duration-500 cursor-pointer hover:opacity-100 hover:scale-105"
        />
        <img
          src="/images/logos/logo-indofood.png"
          alt="logo-indofood"
          className="max-w-20 opacity-20 transform transition-all duration-500 
            cursor-pointer hover:opacity-100 hover:scale-105"
        />
        <img
          src="/images/logos/logo-unilever.png"
          alt="logo-unilever"
          className="max-w-16 opacity-20 transform transition-all duration-500 
            cursor-pointer hover:opacity-100 hover:scale-105"
        />
        <img
          src="/images/logos/logo-p&g.png"
          alt="logo-p&g"
          className="max-w-24 opacity-20 transform transition-all duration-500 
            cursor-pointer hover:opacity-100 hover:scale-105"
        />
        <img
          src="/images/logos/logo-toyota.png"
          alt="logo-toyota"
          className="max-w-20 opacity-20 transform transition-all duration-500 
            cursor-pointer hover:opacity-100 hover:scale-105"
        />
        <img
          src="/images/logos/logo-dover.png"
          alt="logo-dover"
          className="max-w-36 opacity-20 transform transition-all duration-500 
            cursor-pointer hover:opacity-100 hover:scale-105"
        />
      </div>
    </section>
  );
}

export default ClientSection;
