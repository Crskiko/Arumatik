import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";

/**
 * Main App component that defines the application's routing structure.
 * 
 * It uses React Router to define routes for the home page, product list, 
 * and individual product details. The routes are rendered within a 
 * `BrowserRouter` component.
 * 
 * @returns {JSX.Element} - The rendered JSX of the main application with routing.
 */
function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<ProductList></ProductList>}></Route>
        <Route
          path="/products/:productName"
          element={<ProductDetail></ProductDetail>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
