import React from 'react';
import './Sidebar.css'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Nav className="flex-column">
                <Link to='/addTestimonial'> Add Testimonial</Link>
                <Link to='/addService'> Add Service</Link>
                <Link to='/bookingList'> Booking List</Link>
                <Link to='/orderList'> Order List</Link>
                <Link to='/manageService'> Manage Service</Link>
            </Nav>
        </div>
    );
};

export default Sidebar;