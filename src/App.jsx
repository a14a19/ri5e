import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import ServicesPage from "./pages/ServicesPage";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route exact path="/*" element={<Home />} />
      <Route exact path="/about-us/*" element={<AboutUs />} />
      <Route exact path="/services/*" element={<ServicesPage />} />
      <Route exact path="/careers/*" element={<Careers />} />
      <Route exact path="/contact/*" element={<Contact />} />
    </Routes>
  )
}

export default App
