import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../images/logo.png';
import homeicon from '../images/homeicon.png';
import carticon from '../images/carticon.png';
import UserIcon from '../images/usericon.png';
import swal from 'sweetalert2';

class Login extends Component {
    clearFields() {
        document.getElementById("Email").value = "";
        document.getElementById("Password").value = "";
    }
    signIn(obj) {
        swal({
            type: 'success',
            title: 'Welcome',
            text: 'Login Successful !'
        });
        this.props.history.push('/index');
    }

    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <a href=""><img src={logo} alt="laptop.lk" /></a>
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
                    {/* <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/index"><img src={homeicon} alt="Home" /></a></li>
                        <li className="breadcrumb-item"><a href="">Asus</a></li>
                        <li className="breadcrumb-item"><a href="">Dell</a></li>
                        <li className="breadcrumb-item"><a href="">HP</a></li>
                        <li className="breadcrumb-item"><a href="">Lenovo</a></li>
                        <li className="breadcrumb-item"><a href="">Monitor</a></li>
                        <li className="breadcrumb-item"><a href="">Ultrabook</a></li>
                        <li className="breadcrumb-item"><a href="">Gaming</a></li>
                        <li className="breadcrumb-item"><a href="">Desktop</a></li>
                        <li className="breadcrumb-item"><a href="">Printer Scanner</a></li>
                        <li className="breadcrumb-item"><a href="">Ink Toner</a></li>
                        <li className="breadcrumb-item"><a href="">Accessories</a></li>
                        <li className="breadcrumb-item"><a href="/cart"><img src={carticon} alt="Cart" /></a></li>
                    </ol> */}
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
                <div className="LogInContainer" >
                    <form>
                        <fieldset>
                            {/* <div className="loginComps"> */}
                            <h1 className="h1x">Sign In </h1>
                            <table >
                                <tr>
                                    <td><label >Email</label></td>
                                    <td><input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Email Address" /></td>
                                </tr>
                                <tr>
                                    <td><label >Password</label></td>
                                    <td><input type="Password" className="form-control" id="Password" placeholder="Password" /></td>
                                </tr>
                            </table>
                            {/* <br /> */}
                            <input type="checkbox" />Remember Me.<br /><br />
                            <button type="button" className="btn_clear" onClick={() => this.clearFields()}>Reset Fields</button>
                            {'    '}
                            <button type="button" className="btn_SignIn" onClick={() => this.signIn(this)}>Sign In</button>
                            <br /><br />
                            <Link to="/passwordReset">Forgot Password</Link><br /><br />
                            <Link to="/customerreg">New User Registration</Link>
                            {/* </div> */}
                            <div>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3%' }}>
                    Copyright © Team Int Elegance 2K18
                </div>
            </div>
        );
    }
}


export default Login;