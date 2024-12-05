import { useEffect, useState } from "react";

/**
 * A custom hook to determine if a given media query matches the current viewport.
 *
 * This hook listens for changes in the viewport that match the provided media query
 * and updates its state accordingly.
 *
 * @param {string} query - The media query to evaluate (e.g., `(min-width: 768px)`).
 * @returns {boolean} A boolean indicating whether the media query matches the current viewport.
 */
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const updateMatch = (event) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener("change", updateMatch);

    return () => mediaQueryList.removeEventListener("change", updateMatch);
  }, [query]);


  return matches;
};

export default useMediaQuery;
