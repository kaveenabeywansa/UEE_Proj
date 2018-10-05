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
import MobileFooter from './MobileFooter';
import Nav from './NavigationBar';
import './Search.css';
import Media from "react-media";

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
                <Media query={{ maxWidth: 599 }}>
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
                    <div class="container" >
                        
                        <ol class="breadcrumb" style={{ "margin-top": "1%" }}>
                            <li class="breadcrumb-item active" style={{"color":"white"}}>Dell</li>
                            <li class="breadcrumb-item sliders" style={{ "float": "right" }}>94000 Rs.<input type="range" min="0" max="10"  style={{ "float": "right" }}/></li>124000 Rs
                        </ol>

                        
                            <div className="row">
                            <div id="item1" style={{"width":"110%","margin-left":"8%"}}>
                                <div className="cartitems">
                                    <div className="card text-white bg-primary mb-3" >
                                        <div className="card-body">
                                            <h4 class="card-title" style={{ "font-size": "18px","text-align":"center","color":"black"}}>Dell Inspiron I931</h4>
                                            <center><img src={Lap1} width="100" height="100"/>
                                            <p class="card-text" style={{ "font-size": "15px" }}>124000 Rs.</p>
                                            <p class="card-text" style={{ "font-size": "15px" }}>8GB RAM 1TB HDD</p>
                                            <button type="button" class="btn btn-success" onClick={() => this.Morebtn(this)}>More Details</button></center>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="item1" style={{"width":"110%","margin-left":"8%"}}>
                                <div className="cartitems">
                                    <div className="card text-white bg-primary mb-3" >
                                        <div className="card-body">
                                            <h4 class="card-title" style={{ "font-size": "18px","text-align":"center","color":"black"}}>Dell Inspiron I931</h4>
                                            <center><img src={Lap1} width="100" height="100"/>
                                            <p class="card-text" style={{ "font-size": "15px" }}>124000 Rs.</p>
                                            <p class="card-text" style={{ "font-size": "15px" }}>8GB RAM 1TB HDD</p>
                                            <button type="button" class="btn btn-success" onClick={() => this.Morebtn(this)}>More Details</button></center>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="item1" style={{"width":"110%","margin-left":"8%"}}>
                                <div className="cartitems">
                                    <div className="card text-white bg-primary mb-3" >
                                        <div className="card-body">
                                            <h4 class="card-title" style={{ "font-size": "18px","text-align":"center","color":"black"}}>Dell Inspiron I931</h4>
                                            <center><img src={Lap1} width="100" height="100"/>
                                            <p class="card-text" style={{ "font-size": "15px" }}>124000 Rs.</p>
                                            <p class="card-text" style={{ "font-size": "15px" }}>8GB RAM 1TB HDD</p>
                                            <button type="button" class="btn btn-success" onClick={() => this.Morebtn(this)}>More Details</button></center>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="item1" style={{"width":"110%","margin-left":"8%"}}>
                                <div className="cartitems">
                                    <div className="card text-white bg-primary mb-3" >
                                        <div className="card-body">
                                            <h4 class="card-title" style={{ "font-size": "18px","text-align":"center","color":"black"}}>Dell Inspiron I931</h4>
                                            <center><img src={Lap1} width="100" height="100"/>
                                            <p class="card-text" style={{ "font-size": "15px" }}>124000 Rs.</p>
                                            <p class="card-text" style={{ "font-size": "15px" }}>8GB RAM 1TB HDD</p>
                                            <button type="button" class="btn btn-success" onClick={() => this.Morebtn(this)}>More Details</button></center>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="item1" style={{"width":"110%","margin-left":"8%"}}>
                                <div className="cartitems">
                                    <div className="card text-white bg-primary mb-3" >
                                        <div className="card-body">
                                            <h4 class="card-title" style={{ "font-size": "18px","text-align":"center","color":"black"}}>Dell Inspiron I931</h4>
                                            <center><img src={Lap1} width="100" height="100"/>
                                            <p class="card-text" style={{ "font-size": "15px" }}>124000 Rs.</p>
                                            <p class="card-text" style={{ "font-size": "15px" }}>8GB RAM 1TB HDD</p>
                                            <button type="button" class="btn btn-success" onClick={() => this.Morebtn(this)}>More Details</button></center>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="pages" style={{"margin-top":"1%"}}>
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
                                <li class="page-item">
                                    <a class="page-link" href="#">&raquo;</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <MobileFooter/>
                    </div>
                    ) : (
                    <div>
                        <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a href="/"><img src={llogo} alt="laptop.lk" /></a>
                        <div className="collapse navbar-collapse" id="navbarColor02">
                            <ul className="navbar-nav mr-auto">
                            </ul>
                            <form className="form-inline my-2 my-lg-0" style={{"margin-left":"3px","float":"right"}}>
                                <input class="form-control col-3" type="text" placeholder="Search" style={{"min-width":"150px"}}/>
                                <select class="form-control col-2" id="exampleSelect1" style={{"font-size":"13px","min-width":"100px","margin-left":"1%"}}>
                                    <option>Laptops</option>
                                    <option>Batteries</option>
                                    <option>Charges</option>
                                    <option>Hard Drives</option>
                                </select>
                                <button class="btn btn-success col-2" type="submit" onClick={() => this.Searchbtn(this)} style={{"margin-left":"12px","width":"1%"}}>
                                    <img src={s} height="20" width="20"/>
                                </button>
                            </form>
                            <a href="/cart"><img src={carticon} alt="Cart" /></a>&ensp;
                            <a href="/login"><img src={UserIcon} alt="Login" /></a>&ensp;
                        </div>
                    </nav>
                </div>
                    <Nav/>
                    <div class="container" >
                        
                        <ol class="breadcrumb" style={{ "margin-top": "1%" }}>
                            <li class="breadcrumb-item active" style={{"color":"white"}}>Dell</li>
                            <li class="breadcrumb-item sliders" style={{ "float": "right" }}>94000 Rs.<input type="range" min="0" max="10"  style={{ "float": "right" }}/></li>124000 Rs
                        </ol>

                        <div className="row">
                        <div className="col-md-4" id="item1" style={{"min-width":"350px"}}>
                            <div className="cartitems">
                                <div className="card text-white bg-primary mb-3" >
                                    <div className="card-body">
                                        <h4 class="card-title" style={{ "font-size": "18px","text-align":"center","color":"black"}}>Dell Inspiron I931</h4>
                                        <center><img src={Lap1} width="100" height="100"/>
                                        <p class="card-text" style={{ "font-size": "15px" }}>124000 Rs.</p>
                                        <p class="card-text" style={{ "font-size": "15px" }}>8GB RAM 1TB HDD</p>
                                        <button type="button" class="btn btn-success" onClick={() => this.Morebtn(this)}>More Details</button></center>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4" id="item2" style={{"min-width":"350px"}}>
                            <div className="cartitems">
                                <div className="card text-white bg-primary mb-3" >
                                    <div className="card-body">
                                        <h4 class="card-title" style={{ "font-size": "18px","text-align":"center","color":"black"}}>Dell Inspiron I931</h4>
                                        <center><img src={Lap1} width="100" height="100"/>
                                        <p class="card-text" style={{ "font-size": "15px" }}>124000 Rs.</p>
                                        <p class="card-text" style={{ "font-size": "15px" }}>8GB RAM 1TB HDD</p>
                                        <button type="button" class="btn btn-success" onClick={() => this.Morebtn(this)}>More Details</button></center>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4" id="item3" style={{"min-width":"350px"}}>
                            <div className="cartitems">
                                <div className="card text-white bg-primary mb-3" >
                                    <div className="card-body">
                                        <h4 class="card-title" style={{ "font-size": "18px","text-align":"center","color":"black"}}>Dell Inspiron I931</h4>
                                        <center><img src={Lap1} width="100" height="100"/>
                                        <p class="card-text" style={{ "font-size": "15px" }}>124000 Rs.</p>
                                        <p class="card-text" style={{ "font-size": "15px" }}>8GB RAM 1TB HDD</p>
                                        <button type="button" class="btn btn-success" onClick={() => this.Morebtn(this)}>More Details</button></center>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4" id="item4" style={{"min-width":"350px"}}>
                            <div className="cartitems">
                                <div className="card text-white bg-primary mb-3" >
                                    <div className="card-body">
                                        <h4 class="card-title" style={{ "font-size": "18px","text-align":"center","color":"black"}}>Dell Inspiron I931</h4>
                                        <center><img src={Lap1} width="100" height="100"/>
                                        <p class="card-text" style={{ "font-size": "15px" }}>124000 Rs.</p>
                                        <p class="card-text" style={{ "font-size": "15px" }}>8GB RAM 1TB HDD</p>
                                        <button type="button" class="btn btn-success" onClick={() => this.Morebtn(this)}>More Details</button></center>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4" id="item5" style={{"min-width":"350px"}}>
                            <div className="cartitems">
                                <div className="card text-white bg-primary mb-3" >
                                    <div className="card-body">
                                        <h4 class="card-title" style={{ "font-size": "18px","text-align":"center","color":"black"}}>Dell Inspiron I931</h4>
                                        <center><img src={Lap1} width="100" height="100"/>
                                        <p class="card-text" style={{ "font-size": "15px" }}>124000 Rs.</p>
                                        <p class="card-text" style={{ "font-size": "15px" }}>8GB RAM 1TB HDD</p>
                                        <button type="button" class="btn btn-success" onClick={() => this.Morebtn(this)}>More Details</button></center>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                        <div class="pages" style={{"margin-top":"1%"}}>
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
                                <li class="page-item">
                                    <a class="page-link" href="#">&raquo;</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Footer/>
                    </div>
                    )
                }
                </Media>
                
            </div>
        );
    }

}