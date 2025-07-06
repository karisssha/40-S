import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home"
import About from "../pages/aboutPage/About"
import Methodology from "../pages/methodologyPage/Methodology"
import Contact from "../pages/contactPage/ContactPage"

function Router(){
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="methodology" element={<Methodology />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );    
}

export default Router