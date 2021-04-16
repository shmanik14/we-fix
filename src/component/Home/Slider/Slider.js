import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../../images/slider-1.jpg';
import slider2 from '../../../images/slider-2.jpg';
import slider3 from '../../../images/slider-3.jpg';
import './Slider.css'

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider1}
                    alt="Fast & Quick Fix"
                    />
                    <Carousel.Caption>
                    <h3>Fast & Quick Fix</h3>
                    <p>Just send valuable laptop, PC, MAC, Mobile, Gaming Device or Smartphone and we'll take care of it.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Any Kind of Upgrades</h3>
                    <p>Just send valuable laptop, PC, MAC, Mobile, Gaming Device or Smartphone and we'll take care of it.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Data Recovery</h3>
                    <p>You Lose - We'll Find</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;