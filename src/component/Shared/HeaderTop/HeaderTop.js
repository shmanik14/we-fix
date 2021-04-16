import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HeaderTop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { Nav } from 'react-bootstrap';

const HeaderTop = () => {
    return (
        <div className="header-top">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="contact-info">
                            <ul>
                                <li><span><FontAwesomeIcon icon={faPhone} /></span><a href="#"> +8801717 222 222</a></li>
                                <li><span><FontAwesomeIcon icon={faEnvelope} /></span><a href="#">info@wefix.com</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="social">
                        <Nav className="ml-auto">
                            <ul>
                                <li><a href=""><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href=""><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href=""><FontAwesomeIcon icon={faPinterestP} /></a></li>
                                <li><a href=""><FontAwesomeIcon icon={faYoutube} /></a></li>
                            </ul>
                        </Nav>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderTop;