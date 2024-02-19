import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import AboutUsPage from './components/AboutUs';
import BlogPage from './components/Blogs';
import ContactPage from './components/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/blogs" element={<BlogPage/>} />
        <Route path="/contact" element={<ContactPage/>} />

      </Routes>
    </Router>
  )
}

export default App