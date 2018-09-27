import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './Components/Cart';

export default () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route path="/cart" exact component={Cart} />
            </Switch>
        </BrowserRouter>
    )
}