import React, { Component } from 'react';

export default class NavigationBar extends Component {

    render() {
        return (
            <div class="container">
                <div class="row" style={{"margin-top":"1%"}}>
                    <div class="col-1" style={{"background-color":"black","color":"white","padding":"1%","text-align":"center"}}>Dell</div>
                    <div class="col-1" style={{"background-color":"black","color":"white","padding":"1%","text-align":"center"}}>HP</div>
                    <div class="col-1" style={{"background-color":"black","color":"white","padding":"1%","text-align":"center"}}>Asus</div>
                    <div class="col-1" style={{"background-color":"black","color":"white","padding":"1%","text-align":"center"}}>Lenovo</div>
                    <div class="col-1" style={{"background-color":"black","color":"white","padding":"1%","text-align":"center"}}>McIntosh</div>
                    <div class="col-1" style={{"background-color":"black","color":"white","padding":"1%","text-align":"center"}}>Monitor</div>
                    <div class="col-1" style={{"background-color":"black","color":"white","padding":"1%","text-align":"center"}}>Printer</div>
                    <div class="col-1" style={{"background-color":"black","color":"white","padding":"1%","text-align":"center"}}>Scanner</div>
                    <div class="col-1" style={{"background-color":"black","color":"white","padding":"1%","text-align":"center"}}>Singer</div>
                    <div class="col-1" style={{"background-color":"black","color":"white","padding":"1%","text-align":"center"}}>Abans</div>
                    <div class="col-2" style={{"background-color":"black","color":"white","padding":"1%"}}>Accessories</div>
                </div>
            </div>
        );
    }
}
