import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/customer/Login'
import Cus from './Components/customer/CusReg';
import ResetPassword from './Components/customer/ResetPassword';
import Cart from './Components/Cart';
import JobProfile from './Components/JobProfile';
import Home from './Components/Home';
import Search from './Components/Search';
import MoreDetails from './Components/MoreDetails';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/search" exact component={Search} />
                <Route path="/details" exact component={MoreDetails} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/jobprofile" exact component={JobProfile} />
                <Route path="/index" exact component={Home} />
                <Route path="/" exact component={Login} />
                <Route path="/login" exact component={Login} />
                <Route path="/customerReg" exact component={Cus} />
                <Route path="/passwordReset" exact component={ResetPassword} />
            </Switch>
        </BrowserRouter>
    )
}