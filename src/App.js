import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Navbarcomponent from './components/navbar';
import Properties from './pages/Properties';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Footer from './components/footer';
import Error from './pages/error';


function App() {
  return (
    <div className="App">
      <Router>
          {/* <ScrollToTop /> */}
          <Navbarcomponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
