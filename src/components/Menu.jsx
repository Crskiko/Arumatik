import PropTypes from "prop-types";
import { HashLink } from "react-router-hash-link";

/**
 * A menu component that displays the navigation options.
 *
 * @param {object} props - Props for the element.
 * @param {boolean} props.isMobile - Boolean that determines menu size.
 * @returns {JSX.Element} - The rendered menu component.
 */
function Menu({ isMobile }) {
  return (
    <ul className={`${isMobile ? "text-xs" : "text-sm"} flex items-center gap-10`}>
      <HashLink to={"/"}>
        <li className="cursor-pointer hover:text-blue hover:font-bold">Home</li>
      </HashLink>

      <HashLink to={"/#about"}>
        <li className="cursor-pointer hover:text-blue hover:font-bold">
          About
        </li>
      </HashLink>

      <HashLink to={"/products"}>
        <li className="cursor-pointer hover:text-blue hover:font-bold">
          Products
        </li>
      </HashLink>
    </ul>
  );
}

Menu.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Menu;
