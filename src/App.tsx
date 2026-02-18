import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Home from "./pages/Home"
import TopBar from "./components/TopBar"
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
    </BrowserRouter>
  )
}

export default App
