import Logo from "../assets/logo.svg";
import MailIcon from "../assets/icons/mail-icon.svg";
import PhoneIcon from "../assets/icons/phone-icon.svg";
import WAIcon from "../assets/icons/wa-icon.svg";
import PropTypes from "prop-types";

/**
 * A footer component that displays the logo and contact information.
 *
 * @param {object} props - Props for the element.
 * @param {boolean} props.isMobile - Boolean that determines footer size.
 * @returns {JSX.Element} The rendered footer component.
 */
function Footer({ isMobile }) {
  return (
    <footer
      className={`bg-white flex ${
        isMobile
          ? "flex-col justify-center items-center py-7"
          : "flex-row justify-between py-10 xl:px-28 px-12"
      }`}
    >
      <img
        src={Logo}
        alt="logo"
        className={isMobile ? "max-w-[35%]" : "max-w-full"}
      />

      {isMobile ? (
        <div className="mt-4">
          <div className="flex flex-col items-center justify-end gap-3">
            <div className="flex items-center gap-2">
              <img src={MailIcon} alt="mail-icon" />
              <p className="text-xs">amrpalletplastik@gmail.com</p>
            </div>

            <div className="flex gap-5 justify-center">
              <div className="flex items-center gap-2">
                <img src={PhoneIcon} alt="phone-icon" />
                <p className="text-xs">087778914119</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={WAIcon} alt="wa-icon" />
                <p className="text-xs">081807319641</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-end gap-9">
            <div className="flex items-center gap-2">
              <img src={MailIcon} alt="mail-icon" />
              <p className="text-xs">amrpalletplastik@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={PhoneIcon} alt="phone-icon" />
              <p className="text-xs">087778914119</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={WAIcon} alt="wa-icon" />
              <p className="text-xs">081807319641</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

Footer.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Footer;
