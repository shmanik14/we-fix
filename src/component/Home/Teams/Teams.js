import React from 'react';
import { Container, Row } from 'react-bootstrap';
import team1 from '../../../images/team1.jpg'
import Team from '../Team/Team';
import './Teams.css'
const teams = [
    {
        id: 1,
        img: team1,
        name: 'Alex Hales'
    },
    {
        id: 2,
        img: team1,
        name: 'Alex Hales'
    },
    {
        id: 3,
        img: team1,
        name: 'Alex Hales'
    },
    {
        id: 4,
        img: team1,
        name: 'Alex Hales'
    }
]

const Teams = () => {
    return (
        <div className="teams">
            <Container>
               <div className="section-title">
                   <h1>Our Expert Team</h1>
               </div>
                <Row>
                    {
                    teams.map(team => <Team key={team.id} team={team}></Team>)  
                    } 
                </Row>
            </Container> 
        </div>
    );
};

export default Teams;