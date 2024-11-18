import { Link } from "react-router-dom";
import ButtonPrimary from "./Button";
import logo from "/logo.svg";

/**
 *  A header component that displays the logo, menu options, and contact button.
 *
 * @returns {JSX.Element} The header component.
 */
function Header() {
  return (
    <div className="flex items-center justify-between bg-white w-screen shadow-sm py-5 px-28">
      <img src={logo} alt="logo" />

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

      <ButtonPrimary
        label="Contact Us"
        action={() => window.open("https://wa.me/6281807319641", "_blank")}
        primary={true}
      ></ButtonPrimary>
    </div>
  );
}

export default Header;
