import PropTypes from "prop-types";
import Button from "./Button";

/**
 * The error page displayed when a route is not found or an error occurs.
 *
 * This page shows an error message and may provide navigation options back to the home or other sections.
 *
 * @param {object} props - Props for the page.
 * @param {string} props.error - The displayed error message.
 * @param {boolean} props.isMobile - Boolean that determines card size.
 * @returns {JSX.Element} The rendered Error page.
 */
function ErrorMessage({ error, isMobile }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-beige text-blue text-center">
      <h1 className={`${isMobile ? "text-2xl mb-3" : "text-3xl mb-4"} font-bold`}>Oops! Something went wrong.</h1>
      <p className={isMobile ? "text-xs mb-5" : "text-base mb-10"}>
        {error || "An unexpected error occurred."}
      </p>

      <Button
        label="Reload Page"
        onClick={() => window.location.reload()}
        primary={true}
        isMobile={isMobile}
      ></Button>
    </div>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default ErrorMessage;
