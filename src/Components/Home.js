import React, { Component } from 'react';
// import logo from './logo.svg';
import './Home.css';
import logo from './images/logo.png';
import homeicon from './images/homeicon.png';
import carticon from './images/carticon.png';
import UserIcon from './images/usericon.png';
import { Fade } from 'react-slideshow-image';
import Footer from './Footer';
import MobileFooter from './MobileFooter';
import Nav from './NavigationBar';

import Pic1 from './images/wide1.jpg';
import Pic2 from './images/wide2.jpg';
import Pic3 from './images/wide3.jpg';
import Lap1 from './img/lap1.png';
import Lap2 from './img/lap2.jpg';
import Lap3 from './img/lap3.jpg';
// import Pic1 from './images/laptoplk.JPG';
// import Pic2 from './images/tiny-laptops.jpg';
// import Pic3 from './images/Laptops-cashback-2._CB470588634_.jpg';
import contactus from './images/HomeContact.png';
import laptops from './images/HomeLaptops.png';
import add from './images/HomeSignup.png';
import aboutus from './images/HomeAbout.png';
import map from './images/HomeMap.png';
import cart from './images/HomeCart.png';
import swal from 'sweetalert2';
import Media from "react-media";

class App extends Component {
  gotocontact() {
    this.props.history.push('/index');
  }
  gotoabout() {
    this.props.history.push('/index');
  }
  gotocart() {
    this.props.history.push('/cart');
  }
  gotolaptops() {
    this.props.history.push('/search');
  }
  gotomap() {
    // this.props.history.push('/index');
    swal({
      type: 'info',
      title: 'Oops...',
      text: 'This Feature is still under construction !'
    });
  }
  gotosignup() {
    this.props.history.push('/jobprofile');
  }
  gotosearch(obj) {
    obj.props.history.push('/search');
  }
  Morebtn(obj) {
    obj.props.history.push('/details');
  }
  render() {
    const fadeImages = [
      './images/slide_2.JPG',
      './images/slide_3.jpg',
      './images/slide_4.jpg'
    ];

    const fadeProperties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
    }

    return (
      <div>
        <Media query={{ maxWidth: 599 }}>
          {matches =>
            matches ? (
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
                        <button className="btn btn-secondary my-2 my-sm-0" onClick={() => this.gotosearch(this)}>Search</button>
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
                
                <div style={{ width: '80%', marginRight: 'auto', marginLeft: 'auto' }}>
                  <Fade {...fadeProperties}>
                    <div className="each-fade">
                      <div className="image-container">
                        <img src={Pic1} />
                      </div>
                    </div>
                    <div className="each-fade">
                      <div className="image-container">
                        <img src={Pic2} />
                      </div>
                    </div>
                    <div className="each-fade">
                      <div className="image-container">
                        <img src={Pic3} />
                      </div>
                    </div>
                  </Fade>
                </div>
                <div>
                  <div className="td"></div>
                  <table className="td" style={{ textAlign: 'left' }}>
                    <tr>
                      <td>
                        <button className="transbtn" ><img className="button" src={contactus} alt="my image" onClick={() => this.gotocontact()} /></button>
                        <label>Contact Us</label>
                      </td>

                      <td>
                        <button className="transbtn" ><img className="button" src={laptops} alt="my image" onClick={() => this.gotolaptops()} /></button>
                        <label>Laptops</label>
                      </td>

                      <td>
                        <button className="transbtn" ><img className="button" src={add} alt="my image" onClick={() => this.gotosignup()} /></button>
                        <label>Job Profile</label>
                      </td>

                    </tr>
                    <tr>
                      <td>
                        <button className="transbtn" ><img className="button" src={aboutus} alt="my image" onClick={() => this.gotoabout()} /></button>
                        <label>About Us</label>
                      </td>
                      <td>
                        <button className="transbtn" ><img className="button" src={map} alt="my image" onClick={() => this.gotomap()} /></button>
                        <label>Location</label>
                      </td>
                      <td>
                        <button className="transbtn" ><img className="button" src={cart} alt="my image" onClick={() => this.gotocart()} /></button>
                        <label>Cart</label>
                      </td>
                    </tr>
                  </table>

                </div>
                <div>

                </div>
                <MobileFooter/>
              </div>
            ) : (
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
                      <button className="btn btn-secondary my-2 my-sm-0" onClick={() => this.gotosearch(this)}>Search</button>
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
              <Nav/>
              <div style={{ width: '80%', marginRight: 'auto', marginLeft: 'auto',marginTop:"1%" }}>
                <Fade {...fadeProperties}>
                  <div className="each-fade">
                    <div className="image-container">
                      <img src={Pic1} />
                    </div>
                  </div>
                  <div className="each-fade">
                    <div className="image-container">
                      <img src={Pic2} />
                    </div>
                  </div>
                  <div className="each-fade">
                    <div className="image-container">
                      <img src={Pic3} />
                    </div>
                  </div>
                </Fade>
              </div>
              <div class="container" style={{ marginTop:"2%" }}>
                        
                        <ol class="breadcrumb" style={{ "margin-top": "1%" }}>
                            <li class="breadcrumb-item active" style={{"color":"white","font-size":"20px" }}>Dell Laptops</li>
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

                        </div>

                        <ol class="breadcrumb" style={{ "margin-top": "1%" }}>
                            <li class="breadcrumb-item active" style={{"color":"white","font-size":"20px" }}>HP Laptops</li>
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

                        </div>

                        <ol class="breadcrumb" style={{ "margin-top": "1%" }}>
                            <li class="breadcrumb-item active" style={{"color":"white","font-size":"20px" }}>Asus Laptops</li>
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

                        </div>

                        <ol class="breadcrumb" style={{ "margin-top": "1%" }}>
                            <li class="breadcrumb-item active" style={{"color":"white","font-size":"20px" }}>Lenovo Laptops</li>
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

export default App;
