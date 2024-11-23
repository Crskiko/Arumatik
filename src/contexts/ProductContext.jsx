import PropTypes from "prop-types";
import { createContext, useContext, useMemo } from "react";
import useFetchData from "../hooks/useFetchData";

/**
 * Context to store product data.
 */
const ProductContext = createContext();

/**
 * ProductProvider component that provides product data to its children.
 * It fetches the product data and stores it in the context.
 *
 * @param {Object} props - The props of the component.
 * @param {React.ReactNode} props.children - The child components that will consume the context value.
 * @returns {React.ReactNode} - The wrapped children components with the provided context value.
 */
export const ProductProvider = ({ children }) => {
  const { data: products, loading, error } = useFetchData("product.json");

  const value = useMemo(() => {
    return { products, loading, error }
  }, [products, loading, error]);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Custom hook to access the product context.
 * This hook returns the current product data, loading state, and error message.
 *
 * @returns {Object} The product context value containing:
 *   - `products` (Array|Object): List of products.
 *   - `loading` (boolean): Boolean indicating if data is loading.
 *   - `error` (string|null): Error message (if any).
 */
export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context) throw new Error("Hook must be used within a ProductProvider.");

  return context;
};
