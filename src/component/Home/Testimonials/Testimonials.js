import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css'

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch(`https://desolate-spire-67620.herokuapp.com/testimonials`)
        .then(res => res.json())
        .then(data => setTestimonials(data))
    }, [])
    return (
        <div className="testimonials">
            <Container>
               <div className="section-title">
                   <h1>Our Testimonials</h1>
               </div>
                <Row>
                    {
                    testimonials.map(testimonial => <Testimonial key={testimonial._id} testimonial={testimonial}></Testimonial>)  
                    }
                </Row>
           </Container> 
        </div>
    );
};

export default Testimonials;