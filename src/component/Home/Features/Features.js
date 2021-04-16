import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import featureImg from '../../../images/phone.jpg';
import icon1 from '../../../images/fast-delivery.png';
import icon2 from '../../../images/money-bag.png';
import icon3 from '../../../images/warranty.png';
import icon4 from '../../../images/read.png';
import './Feature.css';

const features = [
    {
        icon: icon1,
        title: 'WE ARE FAST',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        icon: icon2,
        title: 'NO FIX, NO FEE',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        icon: icon3,
        title: '30 DAYS WARRANTY',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        icon: icon4,
        title: 'EXPERT STAFF',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    }
]

const Features = () => {
    return (
        <div className="features">
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <div className="feature-img">
                            <img src={featureImg} alt="Feature Image" className="img-fluid" />
                        </div>
                    </Col>
                    <Col className="feature-center" xs={12} md={8}>
                        <div className="feature">
                            <Row>                               
                                {
                                features.map(feature => 
                                    <Col xs={12} md={6}>
                                        <div className="single-feature">
                                            <img src={feature.icon} alt="Feature Image" className="img-fluid" />
                                            <h4>{feature.title}</h4>
                                            <p>{feature.description}</p>
                                        </div>
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

export default Features;