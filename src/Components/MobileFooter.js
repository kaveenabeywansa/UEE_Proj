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

                    <div className="footer-right">

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