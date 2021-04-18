import React, { useState, useContext } from 'react';
import { userContext } from '../../App';
import { useForm } from "react-hook-form";
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../Shared/Navbar/NavBar';
import Sidebar from '../Sidebar/Sidebar';

const AddTestimonial = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const testimonialData = {
            name: data.name,
            company: data.company,
            description: data.description,
            date: new Date().toDateString('dd/MM/yyyy HH:MM:SS'),
        }
        const newTestimonial = {...loggedInUser, ...testimonialData};
        const url = `https://desolate-spire-67620.herokuapp.com/addTestimonial`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTestimonial)
        })
        .then(res => {
            console.log('server');
            alert('Testimonial Added Sucessfully')
        })
        console.log(data)
    };
    return (
        <div>
            <NavBar></NavBar>
            <Container>
                <Row>
                    <Col xs={12} md={3}>
                        <Sidebar></Sidebar>
                    </Col>
                    <Col xs={12} md={9}>
                    <div className="service-detail">
                            <div className="detail-header">
                                <ul>
                                    <li className="book">Add Your Review</li>
                                    <li className="book-user-name">{loggedInUser.name}</li>
                                </ul>
                            </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="pName">Testimonial Name</label>
                            <input className="form-control" name="name" placeholder="Name" {...register("name")} />
                                <br/>              
                            <label htmlFor="description">Company Name</label>
                            <input className="form-control" name="company" placeholder="Company Name" {...register("company")} />
                                <br/>             
                            <label htmlFor="description">Description</label>
                            <input className="form-control" name="description" placeholder="Testimonial Description" {...register("description")} />
                                <br/>
                            
                            <input type="submit" />
                        </form>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddTestimonial;