import React, { useState, useContext, useEffect } from 'react';
import { userContext } from '../../App';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Sidebar from '../Sidebar/Sidebar';
import NavBar from '../Shared/Navbar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import './ManageService.css';

const MangeService = () => {

    const updateService = (id) => {
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const taskName = {id, name, description};
        fetch(`https://desolate-spire-67620.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(taskName)
            })
            .then(res => res.json())
            .then(result => {
                if(result){
                    const update = document.getElementById('update');
                    update.innerHTML = '';
                }
        })
    }

    const loadService = (id) => {
        fetch(`https://desolate-spire-67620.herokuapp.com/service/${id}`)
        .then(res => res.json())
        .then(result => {
            const update = document.getElementById('update');
            update.innerHTML = `
                <h3>Service Name & ID: ${result.pName} & ${id}</h3><br>
                Service Name: <input type="text" class="form-control" id="name" value="${result.pName}">
                Service Description: <input type="text" class="form-control" id="description" value="${result.description}">
                <button onClick="updateService('${id}')">Update</button>
            `;
        })
    }

    

    const deleteProduct = (id) => {
        fetch(`https://desolate-spire-67620.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted', result)
            alert('Product Deleted Successfully')
            
        })
    }
    
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [manageServices, setManageServices] = useState([]);
    useEffect(() => {
        fetch('https://desolate-spire-67620.herokuapp.com/services', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => setManageServices(data))
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
                                    <li className="book">Manage Service</li>
                                    <li className="book-user-name">{loggedInUser.name}</li>
                                </ul>
                            </div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>Service Name</th>
                                    <th>Service Description</th>
                                    <th>Service Price</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    manageServices.map(ms => 
                                    <tr>
                                        <td>{ms.pName}</td>
                                        <td>{ms.description}</td>
                                        <td>$50</td>
                                        <td className="action-btn"><span onClick={() => loadService(ms._id)}> <FontAwesomeIcon icon={faEdit} /> </span><span onClick={() => deleteProduct(ms._id)}> <FontAwesomeIcon icon={faTrashAlt} /> </span></td>
                                    </tr>
                                    )
                                }
                                </tbody>
                            </Table>
                            <div id="update">

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MangeService;