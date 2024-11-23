import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductList from "./pages/ProductList"
import ProductDetail from "./pages/ProductDetail"
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<ProductList></ProductList>}></Route>
        <Route path="/products/:productName" element={<ProductDetail></ProductDetail>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
