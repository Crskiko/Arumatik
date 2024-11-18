import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/headers/Header"

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Header></Header>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
