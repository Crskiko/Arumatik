import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import ArrowV2Icon from "../assets/arrow-v2-icon.svg";
import Heading from "../components/Heading";
import CardBenefit from "../components/CardBenefit";

function Home() {
  const navigate = useNavigate();

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
            src="/sample.jpg"
            alt="hero-img"
            className="w-[26rem] h-[26rem] overflow-hidden rounded-[40px]"
          />
        </div>

        <a
          className="bg-blue w-6 h-6 rounded-[50%] flex items-center justify-center absolute bottom-10 
          transform transition duration-300 hover:scale-110"
          href="#about"
        >
          <img src={ArrowV2Icon} alt="arrow-icon" className="ml-[0.05rem] w-4" />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="bg-beige">
        <Heading
          text="About Us"
          desc="Trusted across Indonesia for high-quality, sustainable pallet solutions tailored 
          to logistics and manufacturing needs."
        ></Heading>

        <div className="flex justify-center gap-8 mx-28 mt-10">
          <div 
            className="bg-white shadow-sm px-10 py-12 w-[30rem] rounded-2xl transform 
            transition duration-300 hover:scale-105"
          >
            <h3 className="text-lg font-bold mb-2">Vision</h3>
            <p className="text-base">
              To become Indonesia’s most advanced pallet manufacturer,
              continually adapting to meet the evolving needs of our clients.
            </p>
          </div>
          <div 
            className="bg-white shadow-sm px-10 py-12 w-[30rem] rounded-2xl transform 
            transition duration-300 hover:scale-105"
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
      <section id="benefit">
        <Heading
          text="Why Choose Us"
          desc="Experience the difference with flexible options, reliable service, and complete 
          protection tailored to support your business growth."
        ></Heading>

        <div>
          <CardBenefit></CardBenefit>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}

export default Home;
