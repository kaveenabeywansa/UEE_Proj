import React, { Component } from 'react';
// import logo from './logo.svg';
import './Home.css';
import logo from './images/logo.png';
import homeicon from './images/homeicon.png';
import carticon from './images/carticon.png';
import UserIcon from './images/usericon.png';
import { Fade } from 'react-slideshow-image';

import Pic1 from './images/laptoplk.JPG';
import Pic2 from './images/tiny-laptops.jpg';
import Pic3 from './images/Laptops-cashback-2._CB470588634_.jpg';
import contactus from './images/HomeContact.png';
import laptops from './images/HomeLaptops.png';
import add from './images/HomeSignup.png';
import aboutus from './images/HomeAbout.png';
import map from './images/HomeMap.png';
import cart from './images/HomeCart.png';
import swal from 'sweetalert2';

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

        <div style={{ width: '80%', marginRight: '5%', marginLeft: '5%' }}>
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
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3%' }}>
          Copyright © Team Int Elegance 2K18
        </div>
      </div>
    );
  }
}

export default App;
