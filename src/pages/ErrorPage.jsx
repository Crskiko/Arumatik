import PropTypes from "prop-types";
import Button from "../components/Button";

/**
 * The error page displayed when a route is not found or an error occurs.
 *
 * This page shows an error message and may provide navigation options back to the home or other sections.
 *
 * @param {object} props - Props for the page.
 * @param {string} props.error - The displayed error message.
 * @returns {JSX.Element} The rendered Error page.
 */
function ErrorPage({ error }) {
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

ErrorPage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorPage;
