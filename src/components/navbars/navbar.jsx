import React , { Component } from 'react';

class Navbar extends Component {
    render(){
        return (
            <nav className="navbar fixed-top">
                <a href="/app" className="navbar-logo active">
                    <span className="logo d-none d-xs-block"></span>
                    <span className="logo-mobile d-block d-xs-none"></span>
                </a>
            </nav>
        );
    }
}

export default Navbar;