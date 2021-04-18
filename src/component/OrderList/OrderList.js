import React, { useState, useContext, useEffect } from 'react';
import { userContext } from '../../App';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Sidebar from '../Sidebar/Sidebar';
import NavBar from '../Shared/Navbar/NavBar';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orders, setOrderes] = useState([]);
    useEffect(() => {
        fetch('https://desolate-spire-67620.herokuapp.com/orders', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => setOrderes(data))
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
                                    <li className="book">Order List</li>
                                    <li className="book-user-name">{loggedInUser.name}</li>
                                </ul>
                            </div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>Name</th>
                                    <th>Email ID</th>
                                    <th>Service</th>
                                    <th>Pay With</th>
                                    <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    orders.map(order => 
                                    <tr>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td>{order.book.pName}</td>
                                        <td>Credit Card</td>
                                        <td>pending</td>
                                    </tr>
                                    )
                                }
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OrderList;