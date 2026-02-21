import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Home from "./pages/Home"
import TopBar from "./components/TopBar"
import Footer from "./components/Footer"
function App() {
  const [isShowBody, setIsShowBody] = useState<boolean>(true);
  return (
    <BrowserRouter>
      <TopBar setIsShowBody={setIsShowBody}/>
      <div className={isShowBody ? "block" : "hidden"}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
