import React from 'react';
import { Col } from 'react-bootstrap';

const Team = ({team}) => {
    return (
        <Col sm={6} xs={12} md={3}>
            <div className="team">
                <img src={team.img} alt="Team Image" className="img-fluid" />
                <h4>{team.name}</h4>
            </div>
        </Col>
    );
};

export default Team;