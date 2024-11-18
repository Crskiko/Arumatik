import CardCategory from "../components/CardCategory";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header></Header>

      <CardCategory name="Plastic Pallet" desc="Lightweight and durable for high-volume, easy handling." img="/sample.jpg" primary={true} reverse={true}></CardCategory>
    </div>
  );
}

export default Home;