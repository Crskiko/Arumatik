import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React, { Suspense } from "react";
import Loading from "./components/Loading";

/**
 * Main App component that defines the application's routing structure.
 *
 * It uses React Router to define routes for the home page, product list,
 * and individual product details. The routes are rendered within a
 * `BrowserRouter` component.
 *
 * @returns {JSX.Element} The rendered JSX of the main application with routing.
 */
function App() {
  const ProductList = React.lazy(() => import("./pages/ProductList"));
  const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));

  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <Suspense fallback={<Loading></Loading>}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/products" element={<ProductList></ProductList>}></Route>
          <Route
            path="/products/:productName"
            element={<ProductDetail></ProductDetail>}
          ></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
