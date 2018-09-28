import React, { Component } from 'react';
import logo from './images/logo.png';
import homeicon from './images/homeicon.png';
import carticon from './images/carticon.png';
import UserIcon from './images/usericon.png';
import './JobProfile.css';
class JobProfile extends Component {

    CreateProfile() {
        document.getElementById('CreateTab').style.display = "inline";
        document.getElementById('ViewTab').style.display = "none";
    }
    ViewProfile() {
        document.getElementById('ViewTab').style.display = "inline";
        document.getElementById('CreateTab').style.display = "none";
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
                    <ol className="breadcrumb">
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
                    </ol>
                    <div className="logincreddiv">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/login">Login</a></li>
                            <li className="breadcrumb-item"><a href="/customerreg">Sign Up</a></li>
                            <li className="breadcrumb-item"><a href="/passwordReset">Forgot Password</a></li>
                        </ol>
                    </div>
                </div>
                <center><h1>Job Profile</h1></center>
                <div className="tabs">
                    <div className="tab">
                        <button className="tablinks" onClick={()=>this.CreateProfile()}>Create Profile</button>
                        <button className="tablinks" onClick={()=>this.ViewProfile()}>View Profile</button>
                    </div>

                    <div id="CreateTab" className="tabcontent">
                        <h3>Create Profile</h3>
                        <p>sdfsfdsf</p>
                    </div>

                    <div id="ViewTab" className="tabcontent" style={{display:'none'}}>
                        <h3>View Profile</h3>
                    </div>

                </div>
            </div>
        );
    }
}
export default JobProfile;