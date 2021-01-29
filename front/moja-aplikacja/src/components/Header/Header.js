import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import toggleSearchBar from "../../redux/header/headerAction";
import { handleQty } from "../../redux/basket/basketUtils"
import './styles.css'
import logo from '../../assets/Księgarnia.png'


const Header = () => {
    const dispatch = useDispatch();

    const { search } = useSelector(state => state.search)

    const numOfBooksInCart = useSelector(state => handleQty(state.basket.shoppingList))

    const onToggleSearchBar = () => dispatch(toggleSearchBar())

    return (
        <nav className="header"> 
            <div className="logo">
                <Link to='/'>
                    <img src={logo} width="100px" height="100px" alt="" aria-label="logo" />
                </Link>
            </div>
            <ul className="menu">
                <li>
                    <input
                    type='text'
                    id='search'
                    name='search'
                    aria-label='search-bar'
                    placeholder='Znajdź w księgarni'
                    className={search ? 'search-active' : 'search-hidden'}
                    />
                </li>
                <li>
                    <span className="fa-stack fa-2x search-bar" aria-label="search" onClick={onToggleSearchBar}>
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fas fa-search fa-stack-1x search"></i>
                    </span>
                </li>
                <li>
                    <Link to='/basket'>
                        <span className="fa-stack fa-2x basket" aria-label="basket">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-shopping-cart fa-stack-1x cart"></i>
                        </span>
                    </Link>
                </li>
                <li className="quantity">
                    ({numOfBooksInCart})
                </li>
            </ul>
        </nav>
    )
}

export default Header;