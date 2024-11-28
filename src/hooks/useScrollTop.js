import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook that scrolls the window to the top whenever the route changes.
 *
 * This hook listens to changes in the current location using `react-router-dom`'s `useLocation`
 * and triggers a scroll to the top of the page.
 *
 * @returns {void} This hook does not return any value.
 */
const useScrollTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
};

export default useScrollTop;
