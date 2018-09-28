import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import homeicon from './images/homeicon.png';
import carticon from './images/carticon.png';
import UserIcon from './images/usericon.png';
import Lap1 from './images/laptop1.jpg';
import Lap2 from './images/laptop2.jpg';
import Lap3 from './images/laptop3.jpg';
import Printer1 from './images/printer1.png';
import Printer2 from './images/printer2.png';
import addItemIcon from './images/add.png';
import Visa from './images/visa.png';
import Master from './images/master.jpg';
import './Cart.css';
import swal from 'sweetalert2';


class Cart extends Component {
    removeItem(item, price, qty, hidprice) {
        document.getElementById(item).style.display = "none";
        // alert((document.getElementById(qty).value)*price);
        document.getElementById('carttotal').value -= parseInt(document.getElementById(hidprice).value);
        document.getElementById('carttotlabel').innerHTML = "Cart Value is Rs. " + document.getElementById('carttotal').value;
    }
    changeQty(e, input, pdiv, hidprice) {
        // input.qty=e;
        document.getElementById(pdiv).innerHTML = "Rs." + (e * input);
        document.getElementById('carttotal').value = parseInt(document.getElementById('carttotal').value) - parseInt(document.getElementById(hidprice).value);
        document.getElementById(hidprice).value = (e * input);
        document.getElementById('carttotal').value = parseInt(document.getElementById('carttotal').value) + parseInt(e * input);
        document.getElementById('carttotlabel').innerHTML = "Cart Value is Rs. " + document.getElementById('carttotal').value;
    }
    addItem() {
        if (document.getElementById('item5').style.display != "inline") {
            document.getElementById('item5').style.display = "inline";
            document.getElementById('carttotal').value = parseInt(document.getElementById('carttotal').value) + parseInt(23000);
            document.getElementById('carttotlabel').innerHTML = "Cart Value is Rs. " + document.getElementById('carttotal').value;
        }
    }
    checkout() {
        document.getElementById('paymentdiv').style.display = "inline";
    }
    paydiv2() {
        document.getElementById('crdselection').style.display = "none";
        document.getElementById('paymentdiv2').style.display = "inline";
    }
    confirmpay() {
        if (document.getElementById('cardno').value != "") {
            if (document.getElementById('cardcvc').value != "") {
                if (document.getElementById('cardname').value != "") {
                    if (document.getElementById('cardexpiry').value != "") {
                        swal({
                            type: 'success',
                            title: 'Success',
                            text: 'Your payment was accepted !'
                        });
                        this.props.history.push('/index');
                    } else {
                        swal({
                            type: 'error',
                            title: 'Oops...',
                            text: 'Card Expiry Date not Entered !'
                        });
                    }
                } else {
                    swal({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Card Holders Name not Entered !'
                    });
                }
            } else {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Card CVC Number is not entered !'
                });
            }
        } else {
            swal({
                type: 'error',
                title: 'Oops...',
                text: 'Card Number is not entered !'
            });
        }

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
                                <a href="/login">(Sign Out)</a>
                            </li>
                        </ol>
                    </div>
                </div>
                <div>
                    <h2 style={{ paddingLeft: '2%' }}>Order Summary</h2>
                    <h4 id="carttotlabel" style={{ paddingLeft: '5%' }}>Cart Value is Rs. 757,500.00</h4>
                    <input type="hidden" id='carttotal' value="757500" />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="row">
                            <div className="col-md-4" id="item1">
                                <div className="cartitems">
                                    <div className="card text-white bg-primary mb-3" >
                                        <div className="card-header"><button type="button" className="btn btn-danger" onClick={() => this.removeItem("item1", 110000, "itmqty1", "totitm1")}>Remove Item</button></div>
                                        <div className="card-body">
                                            <h4 className="card-title">HP ProBook 440 G5</h4>
                                            <input type="hidden" id='totitm1' value="110000" />
                                            <img src={Lap1} />
                                            <p className="card-text">
                                                8th Gen Intel Core i5 - 8250U (1.6GHz Up to 3.40GHz, 6MB Cache)<br />
                                                8GB DDR4<br />
                                                1TB HDD<br />
                                                3 Years Comprehensive<br />
                                                Qty :<select id="itmqty1" onChange={(e) => this.changeQty(e.target.value, 110000, "priceitm1", "totitm1")}>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                                <div id="priceitm1" style={{ backgroundColor: 'red', textAlign: 'center' }}>Rs. 110,000.00</div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4" id="item2">
                                <div className="cartitems">
                                    <div className="card text-white bg-primary mb-3" >
                                        <div className="card-header"><button type="button" className="btn btn-danger" onClick={() => this.removeItem("item2", 468000, "itmqty2", "totitm2")}>Remove Item</button></div>
                                        <div className="card-body">
                                            <h4 className="card-title">Asus ROG Zephyrus M</h4>
                                            <input type="hidden" id='totitm2' value="468000" />
                                            <img src={Lap2} />
                                            <p className="card-text">
                                                8th Gen Intel Core i7-8750H (2.20GHz up to 4.10GHz, 9MB Cache)<br />
                                                16GB DDR4 (2666MHz)<br />
                                                512GB M.2 NVMe SSD + 1TB FireCuda SHDD<br />
                                                8GB NVidia GeForce GTX 1070 GDDR5<br />
                                                Qty :<select id="itmqty2" onChange={(e) => this.changeQty(e.target.value, 468000, "priceitm2", "totitm2")}>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                                <div id="priceitm2" style={{ backgroundColor: 'red', textAlign: 'center' }}>Rs. 468,000.00</div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4" id="item3">
                                <div className="cartitems">
                                    <div className="card text-white bg-primary mb-3" >
                                        <div className="card-header"><button type="button" className="btn btn-danger" onClick={() => this.removeItem("item3", 160000, "itmqty3", "totitm3")}>Remove Item</button></div>
                                        <div className="card-body">
                                            <h4 className="card-title">Asus Vivobook S15</h4>
                                            <input type="hidden" id='totitm3' value="160000" />
                                            <img src={Lap3} />
                                            <p className="card-text">
                                                8th Gen Intel Core i7 - 8550U (1.8GHz Up to 4 GHz, 8 MB Cache)<br />
                                                8GB DDR4<br />
                                                256GB M.2 SSD + 1TB HDD<br />
                                                2GB NVidia GeForce MX150 GDDR5<br />
                                                2 Years Hardware + 2 Years Service<br />
                                                Qty :<select id="itmqty3" onChange={(e) => this.changeQty(e.target.value, 160000, "priceitm3", "totitm3")}>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                                <div id="priceitm3" style={{ backgroundColor: 'red', textAlign: 'center' }}>Rs. 160,000.00</div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4" id="item4">
                                <div className="cartitems">
                                    <div className="card text-white bg-primary mb-3" >
                                        <div className="card-header"><button type="button" className="btn btn-danger" onClick={() => this.removeItem("item4", 19500, "itmqty4", "totitm4")}>Remove Item</button></div>
                                        <div className="card-body">
                                            <h4 className="card-title">HP DeskJet 5275 All-in-One Printer</h4>
                                            <input type="hidden" id='totitm4' value="19500" />
                                            <img src={Printer1} />
                                            <p className="card-text">
                                                Functions - Print, copy, scan, fax, photo<br />
                                                Media sizes supported - A4; A5; B5; DL; C6; A6<br />
                                                Print speed color - Up to 7 ppm<br />
                                                2Print quality color (best) - Up to 4800 x 1200 optimized dpi color <br />
                                                Connectivity, standard - 1 Hi-Speed USB 2.0 / 1 Wi-Fi 802.11n <br />
                                                Qty :<select id="itmqty4" onChange={(e) => this.changeQty(e.target.value, 19500, "priceitm4", "totitm4")}>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                                <div id="priceitm4" style={{ backgroundColor: 'red', textAlign: 'center' }}>Rs. 19,500.00</div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4" id="item5" style={{ display: 'none' }}>
                                <div className="cartitems">
                                    <div className="card text-white bg-primary mb-3" >
                                        <div className="card-header"><button type="button" className="btn btn-danger" onClick={() => this.removeItem("item5", 23000, "itmqty5", "totitm5")}>Remove Item</button></div>
                                        <div className="card-body">
                                            <h4 className="card-title">HP Officejet Pro 6830 e-All-in-One Printer</h4>
                                            <input type="hidden" id='totitm5' value="23000" />
                                            <img src={Printer2} />
                                            <p className="card-text">
                                                Functions - Print, copy, scan, fax, Web <br />
                                                Print speed ISO - Up to 18 ppm (black), up to 10 ppm (color)<br />
                                                Connectivity, USB 2.0; Host USB;Ethernet; 1 Wireless; RJ-11 fax <br />
                                                Scan resolution, hardware - Up to 1200 x 1200 dpi <br />
                                                Copy resolution (black text) - Up to 600 x 600 dpi <br />
                                                Qty :<select id="itmqty5" onChange={(e) => this.changeQty(e.target.value, 23000, "priceitm5", "totitm5")}>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                                <div id="priceitm5" style={{ backgroundColor: 'red', textAlign: 'center' }}>Rs. 23,000.00</div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="cartitems">
                                    <div className="card text-white bg-primary mb-3" >
                                        <div className="card-header">Add More Items</div>
                                        <div className="card-body" style={{ display: 'flex', justifyContent: 'center' }}>
                                            <p><button className="transbtn" onClick={() => this.addItem()}><img src={addItemIcon} alt="Add another Item" /></button></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <button type="button" class="btn btn-success" style={{ width: '50%' }} onClick={() => this.checkout()} >Checkout</button>
                    </div>
                    <div id="paymentdiv" style={{ display: 'none' }} >
                        <h3 style={{ paddingLeft: '3%' }}>Payment Gateway</h3>
                        <div id="crdselection" style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="row">
                                <div className="col-md-6"><button className="transbtn" onClick={() => this.paydiv2()}><img src={Visa} alt="Visa" /></button></div>
                                <div className="col-md-6"><button className="transbtn" onClick={() => this.paydiv2()}><img src={Master} alt="Master" /></button></div>
                            </div>
                        </div>
                        <div id="paymentdiv2" style={{ display: 'none' }} >
                            <div className="carddetails">
                                <input id="cardno" type="number" className="form-control" placeholder="Card Number" /><br />
                                <input id="cardcvc" type="password" className="form-control" placeholder="CVC Number" /><br />
                                <input id="cardname" type="text" className="form-control" placeholder="Card Holder's Name" /><br />
                                <input id="cardexpiry" type="month" className="form-control" placeholder="Expiry Date" /><br />
                                <button type="button" class="btn btn-danger" onClick={() => this.confirmpay()}>Pay</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', marginTop:'3%'}}>
                    Copyright © Team Int Elegance 2K18
                </div>
            </div>
        );
    }
}
export default Cart;