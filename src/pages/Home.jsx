import CardCategory from "../components/CardCategory";
import Header from "../components/Header";
import truck from "../assets/truck-icon.svg";
import CardBenefit from "../components/CardBenefit";
import CardProduct from "../components/CardProduct";

function Home() {
  const data = {
    "name": "EN4-1111",
    "series": "Medium Duty",
    "category": "Plastic Pallet",
    "image": "plastic/medium-duty/EN4-1111.jpg",
    "size": "1100 x 1100 x 150 mm",
    "material": "PPC / HDPE",
    "type": "Grille deck surface, Non-Reversible",
    "color": "Blue",
    "static_load": "4000 kg",
    "dynamic_load": "1000 kg",
    "racking_load": "800 kg"
  }

  return (
    <div>
      <Header></Header>

      <CardCategory name="Plastic Pallet" desc="Lightweight and durable for high-volume, easy handling." img="/sample.jpg" primary={true} reverse={true}></CardCategory>

      <CardBenefit name="Local Delivery" desc="Bringing convenience right to your door." img={truck}></CardBenefit>

      <CardProduct product={data}></CardProduct>
    </div>
  );
}

export default Home;