import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Works from "./pages/Works/Works";
import Laws from "./pages/Laws/Laws";
import Articles from "./pages/Articles/Articles";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/faaliyet-alanlari" element={<Works />} />
          <Route path="/makaleler" element={<Articles />} />
          <Route path="/vatandaslik" element={<Laws />} />
          <Route path="/ceza" element={<Laws />} />
          <Route path="/ticaret" element={<Laws />} />
          <Route path="/sirketler" element={<Laws />} />
          <Route path="/is" element={<Laws />} />
          <Route path="/icra-ve-iflas" element={<Laws />} />
          <Route path="/imar" element={<Laws />} />
          <Route path="/miras" element={<Laws />} />
          <Route path="/aile" element={<Laws />} />
          <Route path="/kisisel-veriler" element={<Laws />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
