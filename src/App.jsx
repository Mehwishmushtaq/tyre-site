import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import AboutUsPage from './components/AboutUs';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutUsPage/>} />

      </Routes>
      <AboutUsPage />
    </Router>
  )
}

export default App