import React, { useState, useContext } from 'react';
import { userContext } from '../../App';
import { useForm } from "react-hook-form";
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../Shared/Navbar/NavBar';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const bookData = {
            email: data.email,
            role: 'admin'
        }
        const url = `https://desolate-spire-67620.herokuapp.com/addUser`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
        .then(res => {
            console.log('server');
            alert('Admin Added Sucessfully')
        })
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="pName">Email</label>
                                <input type="email" className="form-control" name="email" placeholder="Email address" {...register("email")} />
                                <br/> 
                                <input type="submit" />
                        </form> 
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MakeAdmin;