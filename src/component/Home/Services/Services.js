import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';
import laptop from '../../../images/laptop-repair.jpg';
import mobile from '../../../images/mobile-repair.jpg';
import data from '../../../images/data-recovery.jpg';
const services = [
    {
        id: 1,
        img: laptop,
        title: 'Laptop Repair',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        id: 2,
        img: mobile,
        title: 'Mobile Repair',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        id: 3,
        img: data,
        title: 'Data Recovery',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    }
]

const Services = () => {
    return (
        <div className="services">
           <Container>
               <div className="section-title">
                   <h1>Our Services</h1>
               </div>
            <Row>
                {
                  services.map(service => <Service key={service.id} service={service}></Service>)  
                }
            </Row>
           </Container> 
        </div>
    );
};

export default Services;