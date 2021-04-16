import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css'

const testimonials = [
    {
        id: 1,
        name: 'Walter White',
        designation: 'Laptop Repair',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        id: 2,
        name: 'Laptop Repair',
        designation: 'Laptop Repair',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        id: 3,
        name: 'Laptop Repair',
        designation: 'Laptop Repair',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    }
]

const Testimonials = () => {
    return (
        <div className="testimonials">
            <Container>
               <div className="section-title">
                   <h1>Our Testimonials</h1>
               </div>
                <Row>
                    {
                    testimonials.map(testimonial => <Testimonial key={testimonial.id} testimonial={testimonial}></Testimonial>)  
                    }
                </Row>
           </Container> 
        </div>
    );
};

export default Testimonials;