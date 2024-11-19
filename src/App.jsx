import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ProductListPage from "./pages/ProductListPage"
import ProductDetailPage from "./pages/ProductDetailPage"

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<ProductListPage></ProductListPage>}></Route>
        <Route path="/products/:id" element={<ProductDetailPage></ProductDetailPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
