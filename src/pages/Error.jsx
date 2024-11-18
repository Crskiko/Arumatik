import PropTypes from "prop-types";
import Button from "../components/Button";

/**
 * An error page that appears when an error occurred.
 *
 * @param {object} props - Props for the page.
 * @param {string} props.error - The displayed error message.
 * @returns {*} - The rendered error page.
 */
function Error({ error }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-beige text-blue">
      <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-base mb-10">{error || "An unexpected error occurred."}</p>

      <Button
        label="Reload Page"
        onClick={() => window.location.reload()}
        primary={true}
      ></Button>
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
