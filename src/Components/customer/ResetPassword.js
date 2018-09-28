import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import homeicon from '../images/homeicon.png';
import carticon from '../images/carticon.png';
import UserIcon from '../images/usericon.png';
import './Login.css';
import swal from 'sweetalert2';
import Footer from '../Footer';
//import './ResetPassword.css';

class ResetPassword extends Component {
    clearFields() {
        document.getElementById("Email").value = "";
        document.getElementById("Password").value = "";
    }
    sendmail() {
        document.getElementById('secques').style.display = "inline";
        document.getElementById('emailfield').style.display = "none";
    }
    answered() {
        document.getElementById('passfields').style.display = "inline";
        document.getElementById('secques').style.display = "none";
    }
    changepass() {
        swal({
            type: 'success',
            title: 'Success',
            text: 'Your Password was changed !'
        });
        this.props.history.push('/login');
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
                <div className="resetpasscontainer" >
                    <form>
                        <h1>Reset Password Form</h1>
                        <div id="emailfield" className="form-group">
                            <label for="user1" class="label">Email Address*</label>
                            <input name="resetemail" id="resetemail" type="text" class="input" required />
                            <button onClick={() => this.sendmail()} >Next</button>
                        </div>
                        <div id="secques" className="form-group" style={{ display: 'none' }}>
                            <input type="hidden" id="realsecans" name="realsecans" value="" />
                            <label id='secqst' for="user1" class="label">Security Question :</label>
                            <strong> What is your nickname? *</strong><br />
                            <input name="resetemail" id="resetemail" type="text" class="input" placeholder="Answer" required />
                            <button onClick={() => this.answered()} >Next</button>
                        </div>
                        <br />
                        <div id="passfields" class="group" style={{ display: 'none' }}>
                            <label for="password1" class="label"> New Password*</label>
                            <input id="newPass" name="newPass" type="password" class="input" data-type="password" required />
                            <button onClick={() => this.changepass()} >Proceed</button>
                        </div>
                    </form>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default ResetPassword;
