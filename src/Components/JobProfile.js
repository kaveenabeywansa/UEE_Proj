import React, { Component } from 'react';
import logo from './images/logo.png';
import homeicon from './images/homeicon.png';
import carticon from './images/carticon.png';
import UserIcon from './images/usericon.png';
class JobProfile extends Component {
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
                        <li className="breadcrumb-item"><a href=""><img src={homeicon} alt="Home" /></a></li>
                        <li className="breadcrumb-item"><a href="">Asus</a></li>
                        <li className="breadcrumb-item"><a href="">Dell</a></li>
                        <li className="breadcrumb-item"><a href="">HP</a></li>
                        <li className="breadcrumb-item"><a href="">Lenovo</a></li>
                        <li className="breadcrumb-item"><a href="">Monitor</a></li>
                        <li className="breadcrumb-item"><a href="">Ultrabook</a></li>
                        <li className="breadcrumb-item"><a href="">Gaming</a></li>
                        <li className="breadcrumb-item"><a href="">Desktop</a></li>
                        <li className="breadcrumb-item"><a href="">Printer & Scanner</a></li>
                        <li className="breadcrumb-item"><a href="">Ink & Toner</a></li>
                        <li className="breadcrumb-item"><a href="">Accessories</a></li>
                        <li className="breadcrumb-item"><a href=""><img src={carticon} alt="Cart" /></a></li>
                    </ol>
                    {/* <div className="logincreddiv">
                        <table>
                        <tbody>
                            <tr>
                                <td><input type="email" className="form-control" id="uname" placeholder="Enter Username" /></td>
                                <td><input type="password" className="form-control" id="upass" placeholder="Password" /></td>
                                <td><button type="button" className="btn btn-danger">Login</button></td>
                            </tr>
                            <tr>
                                <td><a href="">New User Sign Up</a></td>
                                <td><a href="">Forgot Your Password</a></td>
                            </tr>
                            </tbody>
                        </table>
                    </div> */}
                    <div className="loggeduser">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href=""><img src={UserIcon} alt="Bruce Wayne" /></a>
                                &ensp;<a href="">Welcome Bruce Wayne</a>
                                <a href="">(Sign Out)</a>
                            </li>
                        </ol>
                    </div>
                </div>
                <h1>Job Profile</h1>
            </div>
        );
    }
}
export default JobProfile;