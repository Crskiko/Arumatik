import ButtonPrimary from "../buttons/ButtonPrimary";

function Header() {
  return (
    <div className="flex items-center justify-between bg-white w-screen shadow-sm py-5 px-28">
      <img src="/logo.png" alt="logo" />
      
      <ul className="flex items-center gap-10">
        <li className="cursor-pointer hover:text-blue hover:font-bold">Home</li>
        <li className="cursor-pointer hover:text-blue hover:font-bold">About</li>
        <li className="cursor-pointer hover:text-blue hover:font-bold">Products</li>
      </ul>

      <ButtonPrimary text="Contact Us"></ButtonPrimary>
    </div>
  );
}

export default Header;