import { useContext } from "react"
import ProductContext from "../contexts/ProductContext"

/**
 * Custom hook to access the product context.
 * This hook returns the current product data, loading state, and error message.
 * 
 * @returns {Object} The product context value containing:
 *   - `products` (Array|Object): List of products.
 *   - `loading` (boolean): Boolean indicating if data is loading.
 *   - `error` (string|null): Error message (if any).
 */
const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("Hook must be used within a ProductProvider.");
  };

  return context;
};

export default useProductContext;