import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home"
import About from "../pages/aboutPage/About"

function Router(){
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );    
}

export default Router