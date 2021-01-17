import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css'
import logo from '../../assets/Księgarnia.png'


const Header = () => {
    return (
        <header className="header"> 
                <div className="logo">
                    <Link to='/'>
                        <img src={logo} width="100px" height="100px" alt="" />
                    </Link>
                </div>
                <div className="callToActions">
                    <ul>
                        <li>
                            <Link to='/basket'>
                                Basket
                            </Link>
                        </li>
                    </ul>
                </div>
        </header>
    )
}

export default Header;