import { HashLink } from "react-router-hash-link";
import Logo from "../assets/logo.svg";
import Button from "./Button";
import PropTypes from "prop-types";
import Menu from "./Menu";

/**
 * A navigation bar component that displays the logo, menu options, and contact button.
 *
 * @param {object} props - Props for the element.
 * @param {boolean} props.isMobile - Boolean that determines navbar size.
 * @returns {JSX.Element} The rendered navbar component.
 */
function Navbar({ isMobile }) {
  return (
    <nav className="fixed z-50 bg-white w-screen shadow-sm py-4">
      {isMobile ? (
        <div className="flex flex-col items-center gap-4 px-6">
          <div className="flex items-center justify-between w-full">
            <HashLink to={"/"}>
              <img src={Logo} alt="logo" className="max-w-[80%]" />
            </HashLink>

            <Button
              label="Contact Us"
              onClick={() => window.open("https://wa.me/6281807319641", "_blank")}
              primary={true}
              isMobile={isMobile}
            ></Button>
          </div>
          
          <Menu isMobile={isMobile}></Menu>
        </div>
      ) : (
        <div className="flex items-center justify-between 2xl:px-48 xl:px-28 px-12">
          <HashLink to={"/"}>
            <img src={Logo} alt="logo" className="max-w-full" />
          </HashLink>

          <Menu isMobile={isMobile}></Menu>

          <Button
            label="Contact Us"
            onClick={() => window.open("https://wa.me/6281807319641", "_blank")}
            primary={true}
            isMobile={isMobile}
          ></Button>
        </div>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Navbar;
