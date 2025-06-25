import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home"
import About from "../pages/aboutPage/About"
import Methodology from "../pages/methodologyPage/Methodology"

function Router(){
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="methodology" element={<Methodology />} />
      </Routes>
    </BrowserRouter>
  );    
}

export default Router