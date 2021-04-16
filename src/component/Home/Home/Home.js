import React from 'react';
import NavBar from '../../Shared/Navbar/NavBar';
import HeaderTop from '../../Shared/HeaderTop/HeaderTop';
import Slider from '../Slider/Slider';
import Features from '../Features/Features';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Teams from '../Teams/Teams';
import Footer from '../../Shared/Footer/Footer';


const Home = () => {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <NavBar></NavBar>
            <Slider></Slider>
            <Features></Features>
            <Services></Services>
            <Testimonials></Testimonials>
            <Teams></Teams>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;