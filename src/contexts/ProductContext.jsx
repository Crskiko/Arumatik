import PropTypes from "prop-types";
import { createContext, useContext, useMemo } from "react";
import { data as products } from "../assets/data/product.json";

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
  const value = useMemo(() => {
    return products;
  }, [products]);

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
 * @returns {Array} The product context value containing a list of products.
 */
export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context) throw new Error("Hook must be used within a ProductProvider.");

  return context;
};
