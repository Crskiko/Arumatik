import { HashLink } from "react-router-hash-link";
import Logo from "../assets/logo.svg";
import Button from "./Button";

/**
 * A navigation bar component that displays the logo, menu options, and contact button.
 *
 * @returns {JSX.Element} - The rendered navbar component.
 */
function Navbar() {
  return (
    <nav className="fixed z-50 flex items-center justify-between bg-white w-screen shadow-sm py-4 px-28">
      <HashLink to={"/"}>
        <img src={Logo} alt="logo" />
      </HashLink>

      <ul className="flex items-center gap-10">
        <HashLink to={"/"}>
          <li className="text-sm cursor-pointer hover:text-blue hover:font-bold">
            Home
          </li>
        </HashLink>

        <HashLink to={"/#about"}>
          <li className="text-sm cursor-pointer hover:text-blue hover:font-bold">
            About
          </li>
        </HashLink>

        <HashLink to={"/products"}>
          <li className="text-sm cursor-pointer hover:text-blue hover:font-bold">
            Products
          </li>
        </HashLink>
      </ul>

      <Button
        label="Contact Us"
        onClick={() => window.open("https://wa.me/6281807319641", "_blank")}
        primary={true}
      ></Button>
    </nav>
  );
}

export default Navbar;
