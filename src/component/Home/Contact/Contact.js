import React from 'react';
import './Contact.css'
import { Container, Row, Col, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="contact">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="contact-detail">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.177223829524!2d91.83177061426939!3d22.346936146849043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad275a2d54701f%3A0xd788c24a7488498b!2sChittagong%20Press%20Club!5e0!3m2!1sen!2sbd!4v1618755139421!5m2!1sen!2sbd" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="contact-form">
                            <div className="contact-title">
                                <h3>Send Us Message</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repellendus, ex culpa recusandae</p>
                            </div>
                            <Form>
                                <Row>
                                    <Col>
                                    <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col>
                                    <Form.Control placeholder="Last name" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <Form.Control placeholder="Email Address" />
                                    </Col>
                                    <Col>
                                    <Form.Control placeholder="Phone Number" />
                                    </Col>
                                </Row>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={4} placeholder="Write Message..." />
                                </Form.Group>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;