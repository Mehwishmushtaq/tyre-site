import React from 'react'
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/bootstrap/css/bootstrap-icon.css';
import '../assets/css/style.css';
import { Helmet } from 'react-helmet';

const Navbar = () => {
  return (
    <>
    <Helmet>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    </Helmet>
    
       <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark px-4 px-lg-5 py-2 py-lg-0">
          <a href="" className="navbar-brand p-0">
            <h1 className="m-0">Tyre Site</h1>
            {/* <img src="img/logo.png" alt="Logo" /> */}
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="/" className="nav-item nav-link active">Home</a>
              <a href="/about" className="nav-item nav-link">About</a>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                <div className="dropdown-menu m-0">
                  <a href="destination.html" className="dropdown-item">Mobile Tyre Fitting</a>
                  <a href="tour.html" className="dropdown-item">Mobile Tyre Repair</a>
                  <a href="booking.html" className="dropdown-item">Tyre Replacement</a>
                  <a href="gallery.html" className="dropdown-item">Flat Tyre</a>
                  <a href="guides.html" className="dropdown-item">Burst Tyre</a>
                  <a href="testimonial.html" className="dropdown-item">Part Worn Tyre</a>
                  <a href="404.html" className="dropdown-item">Jump Start</a>
                  <a href="404.html" className="dropdown-item">Locknut Wheel Removal</a>
                  <a href="404.html" className="dropdown-item">Mobile Breakdown</a>

                </div>
              </div>
              <a href="/blogs" className="nav-item nav-link">Blog</a>
              <a href="/contact" className="nav-item nav-link">Contact</a>
            </div>
            <a href="" className="btn btn-success rounded-pill py-2 px-4 ms-lg-4">Book Now</a>
          </div>
        </nav>
    </div>
 
    </>
  )
}

export default Navbar