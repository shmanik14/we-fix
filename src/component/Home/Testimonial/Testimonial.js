import React from 'react';
import { Col } from 'react-bootstrap';

const Testimonial = ({testimonial}) => {
    return (
        <Col sm={6} xs={12} md={4}>
            <div className="testimonial">
                <p>{testimonial.description}</p>
                <div className="testimonial-name">
                    <h5>{testimonial.name}</h5>
                    <p>{testimonial.designation}</p>
                </div>
            </div>
        </Col>
    );
};

export default Testimonial;