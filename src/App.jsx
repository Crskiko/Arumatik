import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductListPage from "./pages/ProductListPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/products" element={<ProductListPage></ProductListPage>}></Route>
        <Route path="/products/:id" element={<ProductDetailPage></ProductDetailPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
