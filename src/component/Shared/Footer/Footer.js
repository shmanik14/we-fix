import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png'

const Footer = () => {
    return (
        <div class="footer">
        <div class="container">
          <div class="footer-top">
            <div class="row">
                <div class="col-lg-3">
                    <div class="about">
                        <h3 class="info-title">About Us</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, sapiente, corrupti, officia placeat quibusdam inventore laudantium dolorum iste enim libero nihil. Provident, omnis aperiam maiores saepe aut magnam quas ratione.</p>
                    </div>
                </div>
              <div class="col-lg-3">
                <div class="info-box">
                  <h3 class="info-title">Information</h3>
                  <nav class="nav flex-column footer-nav">
                    <a class="nav-link" href="#">Delivery Information</a>
                    <a class="nav-link" href="#">Terms & Conditions</a>
                    <a class="nav-link" href="#">Contact</a>
                    <a class="nav-link" href="#">Returns</a>
                  </nav>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="info-box">
                  <h3 class="info-title">My Account</h3>
                  <nav class="nav flex-column footer-nav">
                    <a class="nav-link" href="#">My account</a>
                    <a class="nav-link" href="#">Wishlist</a>
                    <a class="nav-link" href="#">Privacy Policy</a>
                    <a class="nav-link" href="#">Frequently Questions</a>
                    <a class="nav-link" href="#">Order History</a>
                  </nav>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="info-box">
                  <h3 class="info-title">CATEGORIES</h3>
                  <nav class="nav flex-column footer-nav">
                    <a class="nav-link" href="#">Men Fashion</a>
                    <a class="nav-link" href="#">Women Fashion</a>
                    <a class="nav-link" href="#">Kids Cloth</a>
                    <a class="nav-link" href="#">Baby Diaper</a>
                    <a class="nav-link" href="#">Men Jacket</a>
                  </nav>
                </div>
              </div>          
            </div>

          </div>
          <div class="copyright text-center">
            <div class="row">
              <p>COPYRIGHT © SAHADAT. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;