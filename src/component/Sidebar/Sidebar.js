import React, { useState, useEffect } from 'react';
import './Sidebar.css'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [users, setUsers] = useState([]);
    console.log(users)
    useEffect(() => {
        fetch(`https://desolate-spire-67620.herokuapp.com/users`)
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <div className="sidebar">
            <Nav className="flex-column">
                {
                    users.role == 'admin' ? 
                    <>
                        <Link to='/addService'> Add Service</Link>
                        <Link to='/orderList'> Order List</Link>
                        <Link to='/makeAdmin'> Make Admin</Link>
                        <Link to='/manageService'> Manage Service</Link> 
                    </>
                    : 
                    <>
                        <Link to='/bookingList'> Booking List</Link>
                        <Link to='/addTestimonial'> Add Testimonial</Link>
                        <Link to='/'> Book Service</Link>
                    </>
                }
                
                
                
                
            </Nav>
        </div>
    );
};

export default Sidebar;