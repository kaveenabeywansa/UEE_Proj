import React, { Component } from 'react';

class Logout extends Component {
    componentDidMount() {
        sessionStorage.clear();
        this.props.history.push('/Login');
    }
    render() {
        return (
            <div>
                <h1 className="logout">Logging Out...</h1>
            </div>
        );
    }
}
export default Logout;