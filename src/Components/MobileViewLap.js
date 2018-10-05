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
import MobileFooter from './MobileFooter';
import Nav from './NavigationBar';
import Media from "react-media";

export default class MoreDetails extends Component {

    Searchbtn(obj) {
        obj.props.history.push('/search');
    }

    Morebtn(obj) {
        obj.props.history.push('/details');
    }

    render() {
        return (
            <div>
                <Media query="(max-width: 599px)">
                {matches =>
                    matches ? (
                        <div>
                            <div>
                                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mm" aria-controls="mm">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <a href="/"><img src={llogo} /></a>
                                    <a href="/cart"><img src={carticon} alt="Cart" /></a>&ensp;
                                    <a href="/login"><img src={UserIcon} alt="Login" /></a>&ensp;
                                    <div className="collapse navbar-collapse" id="navbarColor02">
                                        <ul className="navbar-nav mr-auto">
                                        </ul>
                                    </div>
                                    
                                </nav>
                                <form className="container form-inline my-2 my-lg-0" style={{"margin-left":"3px","float":"right"}}>
                                            <input class="form-control col-5" type="text" placeholder="Search"/>
                                            <select class="form-control col-4" id="exampleSelect1" style={{"font-size":"13px","margin-left":"1%"}}>
                                                <option>Laptops</option>
                                                <option>Batteries</option>
                                                <option>Charges</option>
                                                <option>Hard Drives</option>
                                            </select>
                                            <button class="btn btn-success col-2" type="submit" onClick={() => this.Searchbtn(this)} style={{"margin-left":"12px","width":"1%"}}>
                                                <img src={s} height="20" width="20"/>
                                            </button>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <div>

                        </div>
                    )
                }
                </Media>
            </div>
        )
    }
}