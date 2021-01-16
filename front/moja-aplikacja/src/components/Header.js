import React from 'react';
import './styles.css'
import logo from '../assets/Księgarnia.png'


const Header = () => {
    return (
        <nav className="navbar sticky-top header navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                <img src={logo} alt="" width="100" height="100" className="d-inline-block align-top"/>
                </a>
            </div>
        </nav>
    )
}

export default Header;