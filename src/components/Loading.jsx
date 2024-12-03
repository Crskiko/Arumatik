/**
 * The loading page displayed during data fetching or transitions.
 *
 * @returns {JSX.Element} The rendered Loading page.
 */
function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-beige">
      <div className="flex gap-2">
        <span className="dot w-4 h-4 bg-blue rounded-full animate-bounce1"></span>
        <span className="dot w-4 h-4 bg-blue rounded-full animate-bounce2"></span>
        <span className="dot w-4 h-4 bg-blue rounded-full animate-bounce3"></span>
      </div>
    </div>
  );
}

export default Loading;
