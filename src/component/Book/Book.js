import React, { useState, useEffect, useContext } from 'react';
import { userContext } from '../../App';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import NavBar from '../Shared/Navbar/NavBar';
import PaymentProcess from '../PaymentProcess/PaymentProcess';

const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const {id} = useParams();
    const [book, setBook] = useState({});

    const userDetail = {
        ...loggedInUser,
        role: 'user'
    }

    fetch('https://desolate-spire-67620.herokuapp.com/addUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetail)
        })
        .then(res => res.json())
        .then(data => {
            console.log('added');
        })

    const handlePaymentSuccess = paymentId => {
        const orderDetail = {
            ...loggedInUser,
            book,  
            paymentId,
            orderTime: new Date()
        }

        fetch('https://desolate-spire-67620.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetail)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Your Order Placed successfully');
            }
        })
    }
    
    useEffect(() => {
        fetch(`https://desolate-spire-67620.herokuapp.com/book/${id}`)
        .then(res => res.json())
        .then(data => setBook(data))
    }, [id])
    console.log(book)
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
                                    <li className="book">Book</li>
                                    <li className="book-user-name">{loggedInUser.name}</li>
                                </ul>
                            </div>
                            <ul className="book-info">
                                <li>{book.pName}</li>
                                <li>{book.description}</li>
                                <p>Your service charge will be $1000</p>
                            </ul>
                            <PaymentProcess handlePayment={handlePaymentSuccess}></PaymentProcess>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Book;