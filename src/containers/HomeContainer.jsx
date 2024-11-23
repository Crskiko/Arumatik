import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import ArrowV2Icon from "../assets/icons/arrow-v2-icon.svg";
import Heading from "../components/Heading";
import CardBenefit from "../components/CardBenefit";
import CardCategory from "../components/CardCategory";
import { useRef } from "react";
import useScrollTop from "../hooks/useScrollTop";
import { data as benefit } from "../assets/data/benefit.json";
import ErrorMessage from "../components/ErrorMessage";

/**
 * Main container for the home page.
 * Fetches data, handles error states, and organizes sections.
 * 
 * @returns {JSX.Element} The rendered home component.
 */
function HomeContainer() {
  const targetSection = useRef(null);
  const navigate = useNavigate();
  
  useScrollTop();

  if (!benefit) return <ErrorMessage error={"Data not found."}></ErrorMessage>;

  return (
    <div>
      <Navbar></Navbar>

      {/* Hero Section */}
      <section id="hero" className="relative">
        <div className="flex justify-between items-center w-full px-28">
          <div className="w-[34rem]">
            <h1 className="text-3xl font-bold text-blue mb-5">
              Efficient, Sustainable Pallet Solutions for Every Need
            </h1>
            <p className="text-sm mb-16">
              From logistics hubs to factories, we provide high-quality pallet
              racks with flexible rental and purchase options, including
              delivery and comprehensive warranties across Java.
            </p>
            <Button
              label="Explore Products"
              onClick={() => navigate("/products")}
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
          onMouseOver={() => { 
            if (targetSection.current) targetSection.current.scrollIntoView(); 
          }}
        >
          <img
            src={ArrowV2Icon}
            alt="arrow-icon"
            className="ml-[0.05rem] w-4"
          />
        </div>
      </section>

      {/* About Section */}
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
              To become Indonesia’s most advanced pallet manufacturer,
              continually adapting to meet the evolving needs of our clients.
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

      {/* Benefit Section */}
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

      {/* Product Section */}
      <section id="product" className="h-[120vh]">
        <Heading
          text="Brose Our Products"
          desc="Explore our diverse range of industrial-grade solutions—from pallets to 
          containers—designed to meet the demands of any operation."
        ></Heading>

        <div className="grid grid-cols-2 gap-8 mt-10">
          <CardCategory
            name="Plastic Pallet"
            desc="Lightweight and durable for high-volume, easy handling."
            img="/images/sample.jpg"
            primary={false}
            reverse={false}
          ></CardCategory>

          <CardCategory
            name="Wooden Pallet"
            desc="Eco-friendly and strong, ideal for heavy-duty use."
            img="/images/sample.jpg"
            primary={true}
            reverse={true}
          ></CardCategory>

          <CardCategory
            name="Silica Gel"
            desc="Reliable moisture control to protect goods."
            img="/images/sample.jpg"
            primary={true}
            reverse={true}
          ></CardCategory>

          <CardCategory
            name="Container"
            desc="Secure, long-lasting storage for tough environments."
            img="/images/sample.jpg"
            primary={false}
            reverse={false}
          ></CardCategory>
        </div>
      </section>

      {/* Client Section */}
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

      <Footer></Footer>
    </div>
  );
}

export default HomeContainer;
