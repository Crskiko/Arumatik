import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProductProvider } from "./contexts/ProductContext.jsx";

/**
 * Entry point for the React application.
 * 
 * This file renders the `App` component inside the `StrictMode` wrapper and 
 * wraps it in the `ProductProvider` context provider to manage product-related state.
 * 
 * @returns {void} This function does not return anything as it renders the app to the DOM.
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </StrictMode>
);
