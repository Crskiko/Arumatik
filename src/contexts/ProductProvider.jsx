import PropTypes from "prop-types";
import { useMemo } from "react";
import useFetch from "../hooks/useFetch";
import ProductContext from "./ProductContext";

/**
 * ProductProvider component that provides product data to its children.
 * It fetches the product data and stores it in the context.
 * 
 * @param {Object} props - The props of the component.
 * @param {React.ReactNode} props.children - The child components that will consume the context value.
 * @returns {React.ReactNode} - The wrapped children components with the provided context value.
 */
function ProductProvider({ children }) {
  const { data: products, loading, error } = useFetch("data/product.json");

  const value = useMemo(() => ({ products, loading, error }), [products, loading, error]);

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ProductProvider;