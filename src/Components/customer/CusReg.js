import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CusReg.css';
import logo from '../images/logo.png';
import homeicon from '../images/homeicon.png';
import carticon from '../images/carticon.png';
import swal from 'sweetalert2';

class CustomerReg extends Component {
    registerCus(obj) {
        swal({
            type: 'success',
            title: 'Success',
            text: 'YourAccount was Created !'
        });
        this.props.history.push('/login');
    };
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
                <div className="container">
                    <div className="signup">
                        <center><h1>Sign Up</h1></center>
                        <div className="row">
                            <div className="col-md-3">
                            </div>
                            <div className="col-md-6">
                                <form>
                                    <fieldset>
                                        <table>
                                            <tr>
                                                <div className="Personal_Information">
                                                    <label htmlFor="exampleInputEmail1">Personal Information</label>
                                                </div>
                                            </tr>
                                            <br />
                                            <tr>
                                                <td><label htmlFor="First_Name">First_Name</label></td>
                                                <td><input type="text" className="form-control" id="First_Name" aria-describedby="emailHelp" placeholder="First Name"></input></td>
                                            </tr>

                                            <tr>
                                                <td><label htmlFor="Last_Name">Last_Name</label></td>
                                                <td><input type="text" className="form-control" id="Last_Name" aria-describedby="emailHelp" placeholder="Last Name"></input></td>
                                            </tr>

                                            <tr>
                                                <td><label htmlFor="NIC_Passport">NIC_Passport</label></td>
                                                <td><input type="text" className="form-control" id="NIC_Passport" aria-describedby="emailHelp" placeholder="NIC_Passport"></input></td>
                                            </tr>

                                            <tr>
                                                <td><label htmlFor="DateOfBirth">DateOfBirth</label></td>
                                                <td><input type="date" className="form-control" /></td>
                                            </tr>

                                            <tr>
                                                <td><label htmlFor="Gender">Gender</label></td>
                                                <td><select className="form-control" id="Gender">
                                                    <option>Female</option>
                                                    <option>Male</option>
                                                </select></td>
                                            </tr>

                                        </table>
                                        <br />

                                        <table>
                                            <tr>
                                                <div className="Account_Information">
                                                    <label htmlFor="exampleInputEmail1">Account Information</label>
                                                </div>
                                            </tr>
                                            <br />
                                            <tr>
                                                <td><label htmlFor="First_Name">Email Address</label></td>
                                                <td><input type="text" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Email Address"></input></td>
                                            </tr>

                                            <tr>
                                                <td><label htmlFor="Password">Password</label></td>
                                                <td><input type="text" className="form-control" id="Password" aria-describedby="emailHelp" placeholder="Password"></input></td>
                                            </tr>

                                            <tr>
                                                <td><label htmlFor="ReType_Password">ReType_Password</label></td>
                                                <td><input type="text" className="form-control" id="ReType_Password" aria-describedby="emailHelp" placeholder="ReType Password"></input></td>
                                            </tr>

                                            <tr>
                                                <td><label htmlFor="Security_Question">Security_Question</label></td>
                                                <td><input type="text" className="form-control" id="Security_Question" aria-describedby="emailHelp" placeholder="Security Question"></input></td>
                                            </tr>

                                            <tr>
                                                <td><label htmlFor="Security_Answer">Security_Answer</label></td>
                                                <td><input type="text" className="form-control" id="Security_Answer" aria-describedby="emailHelp" placeholder="Security_Answer"></input></td>
                                            </tr>

                                        </table>
                                        <br />
                                        <table>
                                            <tr>
                                                <div className="Contact_Information">
                                                    <label htmlFor="exampleInputEmail1">Contact Information</label>
                                                </div>
                                            </tr>
                                            <br />
                                            <tr>
                                                <td><label htmlFor="Address">Address</label></td>
                                                <td><input type="text" className="form-control" id="Address" aria-describedby="emailHelp" placeholder="Address"></input></td>
                                            </tr>

                                            <tr>
                                                <td><label htmlFor="Mobile_Number">Mobile_Number</label></td>
                                                <td><input type="text" className="form-control" id="Mobile" aria-describedby="emailHelp" placeholder="Mobile Number"></input></td>
                                            </tr>

                                        </table>
                                    </fieldset>
                                </form>
                                {/* <button className="btn btn-primary" onClick={() => this.registerCus(this)}>Submit</button> */}
                                <div className="row">
                                    <div className="col-md-4">
                                        <button type="Submit" className="btn_reg" onClick={() => this.registerCus(this)}>Submit</button>
                                    </div>
                                </div>
                                <br /><br />
                                <Link to="/Login">Already have an Account... SignIn</Link>
                            </div>
                            <div className="col-md-3">

                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3%' }}>
                    Copyright © Team Int Elegance 2K18
                </div>
            </div>
        );
    }
}
export default CustomerReg;