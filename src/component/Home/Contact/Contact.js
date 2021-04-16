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