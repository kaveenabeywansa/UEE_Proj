import React, { Component } from 'react';
import './css/demo.css';
import './css/footer-distributed-with-address-and-phones.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer-distributed">

                    <div className="footer-left">

                        <h3>Laptop<span>.lk</span></h3>

                        <p className="footer-links">
                            <a href="#">Home</a>
                            ·
        <a href="#">Blog</a>
                            ·
        <a href="#">Pricing</a>
                            ·
        <a href="#">About</a>
                            ·
        <a href="#">Faq</a>
                            ·
        <a href="#">Contact</a>
                        </p>

                        <p className="footer-company-name">Laptop.lk &copy; 2018</p>
                    </div>

                    <div className="footer-center">

                        <div>
                            <i className="fa fa-map-marker"></i>
                            <p><span>102,</span>Unity Plaza, Colombo</p>
                        </div>

                        <div>
                            <i className="fa fa-phone"></i>
                            <p>0114 389 459</p>
                        </div>

                        <div>
                            <i className="fa fa-envelope"></i>
                            <p><a href="mailto:support@company.com">info@laptop.lk</a></p>
                        </div>

                    </div>

                    <div className="footer-right">

                        <p className="footer-company-about">
                            <span>About the company</span>
                            Laptop.lk was incorporated & established in 1996, and to date is a well-known leading retail store. With lot of effort and dedication the management desired to have a multi branded laptop outlet in one roof only then IT Galaxy (Pvt) was established as the multi branded retail store in the Island in 2012 and of course the first of its kind.
                            </p>

                        <div className="footer-icons">

                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                            <a href="#"><i className="fa fa-github"></i></a>

                        </div>

                    </div>

                </footer>
            </div>
        );
    }
}
export default Footer;