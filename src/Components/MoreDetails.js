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
                        <div style={{ "margin-top": "1%" }}>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" style={{"color":"white"}}>Dell Inspiron I931</li>
                            </ol>
                            
                                <div  id="item1" style={{"width":"110%"}}>
                                    <div className="cartitems">
                                        <div className="card text-white bg-primary mb-8" >
                                            <div className="card-body">
                                                <h4 class="card-title" style={{ "font-size": "22px","text-align":"center","color":"black"}}>Dell Inspiron I931</h4>
                                                
                                                <div>
                                                    <div>
                                                        <img src={Lap1} width="80%" height="80%" style={{"margin-left":"auto","margin-right":"auto","min-width":"100px","min-height":"100px"}}/>
                                                    </div>
                                                    
                                                    <div>
                                                        <p class="card-text" style={{ "font-size": "15px" }}>4GB RAM 1TB HDD</p>
                                                        <p class="card-text" style={{ "font-size": "15px" }}>15.6' Display</p>
                                                        <p class="card-text" style={{ "font-size": "15px" }}>2 Year Warranty</p>
                                                        <p class="card-text" style={{ "font-size": "15px" }}>Core I-5 with 2.6 Processor</p>
                                                        <p class="card-text" style={{ "font-size": "15px" }}>Made in USA</p>
                                                        <p class="card-text" style={{ "font-size": "15px" }}>Battery, Mouse, Case, Charger free</p>
                                                        <p class="card-text" style={{ "font-size": "15px" }}>Ubuntu and Windows dual boot</p>
                                                        <p class="card-text" style={{ "font-size": "15px" }}>124000 Rs.</p>
                                                        <div class="row" style={{ "margin-bottom": "10px" }}>
                                                            <select class="form-control col-5" id="exampleSelect1" style={{ "font-size": "12px", "margin-left": "10px" }}>
                                                                <option>Quantity</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                            </select>
                                                            <button type="button" class="btn btn-success col-5" style={{ "height": "10%", "margin-left": "20px" }} onClick={() => this.alert(this)}>Add to Cart</button>
                                                        </div>
                                                    </div>          
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                    <MobileFooter/>
                    </div>
                    ) : (
                    <div><div>
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

                    <div class="container" style={{ "margin-top": "15px" }}>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item active" style={{"color":"white"}}>Dell Inspiron I931</li>
                        </ol>
                        
                            <div className="col-md-12" id="item1" style={{"margin-left":"4%"}}>
                                <div className="cartitems">
                                    <div className="card text-white bg-primary mb-8" >
                                        <div className="card-body">
                                            <h4 class="card-title" style={{ "font-size": "22px","text-align":"center","color":"black"}}>Dell Inspiron I931</h4>
                                            
                                            <div className="row">
                                                <div class="col-5">
                                                    <img src={Lap1} width="80%" height="80%" style={{"margin-left":"auto","margin-right":"auto","min-width":"100px","min-height":"100px"}}/>
                                                </div>
                                                
                                                <div class="col-7">
                                                    <p class="card-text" style={{ "font-size": "15px" }}>4GB RAM 1TB HDD</p>
                                                    <p class="card-text" style={{ "font-size": "15px" }}>15.6' Display</p>
                                                    <p class="card-text" style={{ "font-size": "15px" }}>2 Year Warranty</p>
                                                    <p class="card-text" style={{ "font-size": "15px" }}>Core I-5 with 2.6 Processor</p>
                                                    <p class="card-text" style={{ "font-size": "15px" }}>Made in USA</p>
                                                    <p class="card-text" style={{ "font-size": "15px" }}>Battery, Mouse, Case, Charger free</p>
                                                    <p class="card-text" style={{ "font-size": "15px" }}>Ubuntu and Windows dual boot</p>
                                                    <p class="card-text" style={{ "font-size": "15px" }}>124000 Rs.</p>
                                                    <div class="row" style={{ "margin-bottom": "10px" }}>
                                                        <select class="form-control col-4" id="exampleSelect1" style={{ "font-size": "13px", "margin-left": "20px" }}>
                                                            <option>Quantity</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </select>
                                                        <button type="button" class="btn btn-success col-5" style={{ "height": "10%", "margin-left": "20px" }} onClick={() => this.alert(this)}>Add to Cart</button>
                                                    </div>
                                                </div>          
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                {/* </div> */}
                <Footer/></div>
                    )
                }
                </Media>
                
            </div>
        );
    }
}