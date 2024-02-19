import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const headerStyle = {
    backgroundImage: `url("https://via.placeholder.com/1200x400")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    textAlign: 'center',
    paddingTop: '8rem',
    paddingBottom: '8rem',
    height: '50vh'
};

function ContactPage() {
    return (
        <div>
            {/* Banner Section */}
            <header style={headerStyle}>
                <h1>Contact Us</h1>
            </header>
            <Container className="py-5">
                <Row>
                    <Col md={6}>
                        <h1>Contact Us</h1>
                        <p>Have a question or want to get in touch? Fill out the form below:</p>
                        <Form>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className='mt-3 rounded-pill'>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6} className="d-flex align-items-center justify-content-center">
                        <img src="https://via.placeholder.com/400x400" alt="Contact" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className='mt-5'>
                        <h2 className='text-center'><strong>Our Location</strong></h2>
                        <div style={{ width: '100%', height: '300px', border: '1px solid #ddd' }}>
                            <iframe
                                title="Google Map"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-71.059773!3d42.360940!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQ4JzU1LjEiTiA3McKwMjAnMTQuMyJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default ContactPage;
