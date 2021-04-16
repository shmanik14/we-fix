import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const Service = ({service}) => {
    return (
        <Col sm={6} xs={12} md={4}>
            <Card className="service">
                <Card.Img variant="top" src={service.img} />
                <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <Button className="we-btn" variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;