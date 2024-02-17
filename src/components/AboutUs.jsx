import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'aos/dist/aos.css';
import aos from 'aos';

function AboutUsPage() {
  React.useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <header className="bg-dark text-light py-4 text-center">
        <Container>
          <h1>About Us</h1>
        </Container>
      </header>

      <Container className="py-5">
        <Row data-aos="fade-up">
          <Col md={6}>
            <h2>Our Mission</h2>
            <p>We are dedicated to providing high-quality mobile fit tyre services to ensure safety and convenience for our customers.</p>
          </Col>
          <Col md={6}>
            <img src="mission_image.jpg" alt="Mission" className="img-fluid" />
          </Col>
        </Row>

        <Row className="mt-5" data-aos="fade-up">
          <Col md={6}>
            <h2>Our Team</h2>
            <img src="team_image.jpg" alt="Team" className="img-fluid" />
          </Col>
          <Col md={6}>
            <p>Our team consists of experienced professionals in the automotive industry who are committed to delivering excellent service and customer satisfaction.</p>
          </Col>
        </Row>

        <Row className="mt-5" data-aos="fade-up">
          <Col md={6}>
            <h2>Why Choose Us?</h2>
            <ul>
              <li>Convenient mobile service</li>
              <li>Wide selection of tyres</li>
              <li>Expertise and professionalism</li>
              <li>Competitive pricing</li>
              <li>Customer satisfaction guarantee</li>
            </ul>
          </Col>
          <Col md={6}>
            <h2>Our Values</h2>
            <p>At Mobile Fit Tyres, we prioritize integrity, reliability, and safety in everything we do. We strive to build lasting relationships with our customers based on trust and transparency.</p>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default AboutUsPage;
