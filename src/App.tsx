import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import TopBar from "./components/Topbar"
function App() {

  return (
    <BrowserRouter>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
