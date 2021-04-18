import React, { useState, useContext } from 'react';
import { userContext } from '../../App';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../Shared/Navbar/NavBar';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [imageURL, setImageURL] = useState(null);
    console.log(imageURL)
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'ea9e86076a87189ae321024384da284c')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const bookData = {
            pName: data.pName,
            description: data.description,
            date: new Date().toDateString('dd/MM/yyyy HH:MM:SS'),
            image: imageURL
        }
        const newBooking = {...loggedInUser, ...bookData};
        const url = `https://desolate-spire-67620.herokuapp.com/addService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
        .then(res => {
            console.log('server');
            alert('Service Added Sucessfully')
        })
        console.log(data)
        console.log(newBooking)
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
                            <label htmlFor="pName">Service Name</label>
                                <input className="form-control" name="pName" placeholder="Service Name" {...register("pName")} />
                                <br/>              
                            <label htmlFor="description">Service Description</label>
                                <input className="form-control" name="description" placeholder="Description" {...register("description")} />
                                <br/>
                            <label htmlFor="image">Upload Service Image</label>
                                <input className="form-control" name="image" type="file" onChange={handleImageUpload} />
                                <br/>
                                <input type="submit" />
                        </form> 
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddService;