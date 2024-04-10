import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Admissions from "./Pages/Admissions";
import Academics from "./Pages/Academics";
import ContactUs from "./Pages/ContactUs";
import ExtraCurricular from "./Pages/ExtraCurricular";
import NoticeAndNews from "./Pages/NoticeAndNews";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/extra-curricular" element={<ExtraCurricular />} />
        <Route path="/notice-and-news" element={<NoticeAndNews />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
