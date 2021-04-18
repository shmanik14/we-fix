import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Service = ({service}) => {
    const history = useHistory()
    const handleBook = (id) => {
        history.push(`/book/${id}`);
    }
    return (
        <Col sm={6} xs={12} md={4}>
            <Card className="service">
                <Card.Img variant="top" src={service.image} />
                <Card.Body>
                    <Card.Title>{service.pName}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <Button onClick={() => handleBook(service._id)} className="we-btn" variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;