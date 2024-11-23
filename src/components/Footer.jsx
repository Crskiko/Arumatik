import Logo from "../assets/logo.svg";
import MailIcon from "../assets/icons/mail-icon.svg";
import PhoneIcon from "../assets/icons/phone-icon.svg";
import WAIcon from "../assets/icons/wa-icon.svg";

/**
 * A footer component that displays the logo and contact information.
 *
 * @returns {JSX.Element} - The rendered footer component.
 */
function Footer() {
  return (
    <footer className="flex justify-between bg-white py-10 px-28">
      <img src={Logo} alt="logo" />

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
    </footer>
  );
}

export default Footer;
