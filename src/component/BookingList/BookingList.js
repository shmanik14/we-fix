import React, { useState, useContext, useEffect } from 'react';
import { userContext } from '../../App';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import NavBar from '../Shared/Navbar/NavBar';
import './BookingList.css'

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orderedProducts, setOrderedProducts] = useState([]);
    useEffect(() => {
        fetch('https://desolate-spire-67620.herokuapp.com/userOrders?email='+loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => setOrderedProducts(data))
    } , [])
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
                                    <li className="book">Your Book List</li>
                                    <li className="book-user-name">{loggedInUser.name}</li>
                                </ul>
                            </div>
                            <Row>
                            {
                                orderedProducts.map(order => 
                                <Col xs={12} md={4}>
                                    <Card className="service">
                                        <Card.Img variant="top" src={order.book.image} />
                                        <Card.Body>
                                            <Card.Title>{order.book.pName}</Card.Title>
                                            <Card.Text>{order.book.description}</Card.Text>
                                        </Card.Body>
                                        <p className="status">Pending</p>
                                    </Card>
                                </Col>
                                )
                            }
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BookingList;