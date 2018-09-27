import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './Components/Cart';
import JobProfile from './Components/JobProfile';

export default () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route path="/cart" exact component={Cart} />
                <Route path="/jobprofile" exact component={JobProfile} />
            </Switch>
        </BrowserRouter>
    )
}