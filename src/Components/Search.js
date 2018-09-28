import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartPng from './img/cart.png';
import SignInPng from './img/signIn.png';
import Lap1 from './img/lap1.png';
import Lap2 from './img/lap2.jpg';
import Lap3 from './img/lap3.jpg';
import Logo from './img/logo1.png';
import s from './img/ss.png';
import llogo from './images/logo.png';
import homeicon from './images/homeicon.png';
import carticon from './images/carticon.png';
import UserIcon from './images/usericon.png';
import Footer from './Footer';
import './Search.css';

export default class Search extends Component {

    SearchBtn(obj) {
        obj.props.history.push('/search');
    }

    Morebtn(obj) {
        obj.props.history.push('/details');
    }

    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <a href=""><img src={llogo} alt="laptop.lk" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarColor02">
                            <ul className="navbar-nav mr-auto">
                            </ul>
                            {/* <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                            </form> */}
                        </div>
                    </nav>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="logincreddiv">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/index"><img src={homeicon} alt="Home" /></a>&ensp;
                <a href="/cart"><img src={carticon} alt="Cart" /></a>&ensp;
                <a href="/login"><img src={UserIcon} alt="Login" /></a>&ensp;
                <a href="/customerreg">Sign Up</a></li>
                            <li className="breadcrumb-item"><a href="/passwordReset">Forgot Password</a></li>
                        </ol>
                    </div>
                </div>

                <div class="container" >
                    <form class="form-inline my-2 my-lg-0 row container">
                        <input class="form-control mr-sm-2 col-5" type="text" placeholder="Search" style={{ "margin-top": "1%" }} />
                        <select class="form-control col-4" id="exampleSelect1" style={{ "font-size": "13px", "margin-left": "12px", "margin-top": "1%" }}>
                            <option>Laptops</option>
                            <option>Batteries</option>
                            <option>Charges</option>
                            <option>Hard Drives</option>
                        </select>
                        <button class="btn btn-primary col-2" type="submit" onClick={() => this.SearchBtn(this)} style={{ "margin-left": "12px", "margin-top": "1%", "width": "3%" }}>
                            <img src={s} height="20" width="20" />
                        </button>
                    </form>
                    <ol class="breadcrumb" style={{ "margin-top": "1%" }}>
                        <li class="breadcrumb-item active">Dell</li>
                        <li class="breadcrumb-item sliders">94000 Rs.<input type="range" min="0" max="10" style={{ "float": "right" }} /></li>124000 Rs
                </ol>

                    <div class="card border-primary mb-3 grids" style={{ "background-color": "#E1DEDE" }}>
                        <div class="card-body row">
                            <div class="col-5">
                                <img src={Lap1} width="75%" height="75%" />
                            </div>
                            <div class="col-7">
                                <h4 class="card-title" style={{ "font-size": "18px" }}>Dell Inspiron I931</h4>
                                <p class="card-text" style={{ "font-size": "15px" }}>124000 Rs.</p>
                                <p class="card-text" style={{ "font-size": "15px" }}>8GB RAM 1TB HDD</p>
                                <button type="button" class="btn btn-primary" onClick={() => this.Morebtn(this)}>More</button>
                            </div>
                        </div>
                    </div>
                    <div class="card border-primary mb-3 grids" style={{ "background-color": "#E1DEDE" }}>
                        <div class="card-body row">
                            <div class="col-5">
                                <img src={Lap2} width="75%" height="75%" />
                            </div>
                            <div class="col-7">
                                <h4 class="card-title" style={{ "font-size": "18px" }}>Dell NoteBook</h4>
                                <p class="card-text" style={{ "font-size": "15px" }}>105000 Rs.</p>
                                <p class="card-text" style={{ "font-size": "15px" }}>4GB RAM 1TB HDD</p>
                                <button type="button" class="btn btn-primary" onClick={() => this.Morebtn(this)}>More</button>
                            </div>
                        </div>
                    </div>
                    <div class="card border-primary mb-3 grids" style={{ "background-color": "#E1DEDE" }}>
                        <div class="card-body row">
                            <div class="col-5">
                                <img src={Lap3} width="75%" height="75%" />
                            </div>
                            <div class="col-7">
                                <h4 class="card-title" style={{ "font-size": "18px" }}>Dell Inspiron I239</h4>
                                <p class="card-text" style={{ "font-size": "15px" }}>98000 Rs.</p>
                                <p class="card-text" style={{ "font-size": "15px" }}>4GB RAM 500GB HDD</p>
                                <button type="button" class="btn btn-primary" onClick={() => this.SearchBtn(this)}>More</button>
                            </div>
                        </div>
                    </div>
                    <div class="pages">
                        <ul class="pagination">
                            <li class="page-item disabled">
                                <a class="page-link" href="#">&laquo;</a>
                            </li>
                            <li class="page-item active">
                                <a class="page-link" href="#">1</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">2</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">3</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }

}