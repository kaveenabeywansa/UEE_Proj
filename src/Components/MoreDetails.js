import React, { Component } from 'react';
import swal from 'sweetalert2';
import CartPng from './img/cart.png';
import SignInPng from './img/signIn.png';
import Lap1 from './img/lap1.png';
import Logo from './img/logo1.png';
import s from './img/ss.png';
import llogo from './images/logo.png';
import homeicon from './images/homeicon.png';
import carticon from './images/carticon.png';
import UserIcon from './images/usericon.png';
import Footer from './Footer';

export default class MoreDetails extends Component {

    alert(obj) {
        swal("Are you sure you want to add this to cart?", {
            buttons: ["No", "Yes"],
        });

        swal({
            title: 'Are you sure?',
            text: "Do you want to add this to cart?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Add it!'
        }).then((result) => {
            if (result.value) {
                swal(
                    'Added!',
                    'Added to Cart.',
                    'success'
                )
            }
        })
    }


    Searchbtn(obj) {
        obj.props.history.push('/search');
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
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                            </form>
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
                        <button class="btn btn-primary col-2" type="submit" onClick={() => this.Searchbtn(this)} style={{ "margin-left": "12px", "margin-top": "1%" }}>
                            <img src={s} height="20" width="20" />
                        </button>
                    </form>

                    <div class="container" style={{ "margin-top": "15px" }}>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item active">Dell</li>
                        </ol>
                        <div class="card border-primary mb-3" style={{ "background-color": "#E1DEDE" }}>
                            <div class="card-body row">
                                <div class="col-5">
                                    <img src={Lap1} width="70%" height="60%" />
                                </div>
                                <div class="col-7">
                                    <h4 class="card-title" style={{ "font-size": "18px" }}>Dell Inspiron I931</h4>
                                    <p class="card-text" style={{ "font-size": "13px" }}>4GB RAM 1TB HDD</p>
                                    <p class="card-text" style={{ "font-size": "13px" }}>15.6' Display</p>
                                    <p class="card-text" style={{ "font-size": "13px" }}>2 Year Warranty</p>
                                    <p class="card-text" style={{ "font-size": "13px" }}>Core I-5 with 2.6 Processor</p>
                                    <p class="card-text" style={{ "font-size": "13px" }}>Made in USA</p>
                                    <p class="card-text" style={{ "font-size": "13px" }}>Battery, Mouse, Case, Charger free</p>
                                    <p class="card-text" style={{ "font-size": "13px" }}>Ubuntu and Windows dual boot</p>
                                    <p class="card-text" style={{ "font-size": "13px" }}>124000 Rs.</p>

                                </div>
                            </div>
                            {/* <div class="card-body row">
                        <div>
                            
                        </div>    
                    </div> */}
                            <div class="container row" style={{ "margin-bottom": "10px" }}>
                                <select class="form-control col-4" id="exampleSelect1" style={{ "font-size": "13px", "margin-left": "20px" }}>
                                    <option>Quantity</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <button type="button" class="btn btn-primary col-5" style={{ "height": "10%", "margin-left": "20px" }} onClick={() => this.alert(this)}>Add to Cart</button>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}