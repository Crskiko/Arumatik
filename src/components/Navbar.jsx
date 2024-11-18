import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Button from "./Button";

/**
 * A navigation bar component that displays the logo, menu options, and contact button.
 *
 * @returns {JSX.Element} The rendered navbar component.
 */
function Navbar() {
  return (
    <div className="fixed z-50 flex items-center justify-between bg-white w-screen shadow-sm py-5 px-28">
      <img src={Logo} alt="logo" />

      <nav>
        <ul className="flex items-center gap-10">
          <Link to={"/"}>
            <li className="cursor-pointer hover:text-blue hover:font-bold">
              Home
            </li>
          </Link>

          <Link to={"/#about"}>
            <li className="cursor-pointer hover:text-blue hover:font-bold">
              About
            </li>
          </Link>

          <Link to={"/products"}>
            <li className="cursor-pointer hover:text-blue hover:font-bold">
              Products
            </li>
          </Link>
        </ul>
      </nav>

      <Button
        label="Contact Us"
        onClick={() => window.open("https://wa.me/6281807319641", "_blank")}
        primary={true}
      ></Button>
    </div>
  );
}

export default Navbar;
