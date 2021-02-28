import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import orderProgress from "./orderProcess";
import { addToShoppingCart, removeBook, reduceQty } from "../../redux/basket/basketActions";

export const BasketList = list => {
    
    const dispatch = useDispatch();

    const incrementing = (e, item) => {
        const key = e.which || e.keyCode || 0;
        if (key === 13) {
            dispatch(addToShoppingCart(item));
        }
    }

    const decrementing = (e, item) => {
        const key = e.which || e.keyCode || 0;
        if (key === 13) {
            dispatch(reduceQty(item));
        }
    }

    const removing = (e, item) => {
        const key = e.which || e.keyCode || 0;
        if (key === 13) {
            dispatch(removeBook(item));
        }
    }

    return (
        <div className="main">
        {orderProgress()}
        <div className="basket-list">
            <div className="column-labels">
                <label className="cover-label">Książka</label>
                <label className="book-title-label">Tytuł książki</label>
                <label className="qty">Ilość</label>
                <label className="total-label">Suma</label>
                <label className="trash-label"></label>
            </div>
            {list.map(item => {
                return(
                <div className="item">
                    <div className="cover">
                        <img className="book-img" aria-label="cover" src={item.cover_url}></img>
                    </div>
                    <div className="book-title">{item.title}</div>
                    <div className="qty-basket">
                        <span 
                            className="fa-stack" 
                            aria-label="increment" 
                            onClick={() => dispatch(addToShoppingCart(item))}
                            onKeyDown={e => incrementing(e, item)}
                            tabIndex="5">
                            <i className="fa fa-circle fa-stack-2x increment"></i>
                            <i className="fas fa-plus fa-stack-1x"></i>
                        </span>
                        <span className="quantity-basket">{item.quantity}</span>
                        <span 
                            className="fa-stack" 
                            aria-label="decrement" 
                            onClick={() => dispatch(reduceQty(item))}
                            onKeyDown={e => decrementing(e, item)}
                            tabIndex="6">
                            <i className="fa fa-circle fa-stack-2x decrement"></i>
                            <i className="fas fa-minus fa-stack-1x"></i>
                        </span>
                    </div>
                    <div className="total">{((item.price/100).toFixed(2))*item.quantity} zł</div>
                    <div className="trash">
                        <span 
                            className="fa-stack" 
                            aria-label="trash" 
                            onClick={() => dispatch(removeBook(item))}
                            onKeyDown={e => removing(e, item)}
                            tabIndex="7">
                            <i className="fa fa-circle fa-stack-2x trash-button"></i>
                            <i className="fas fa-trash-alt fa-stack-1x"></i>
                        </span>
                    </div>
                </div>
                )
            })}
            <div className="total-cost">
                <span className="total-cost-text">Wartość do zapłaty:</span>
                <span className="total-cost-number">
                    {list.reduce((a, b) => a + (((b.price/100).toFixed(2))*b.quantity), 0)} zł
                </span>
                <Link to="/shipment">
                    <button
                        className="go-to-shipment"
                        aria-label="go-to-shipment"
                        type="button">
                        DALEJ
                    </button>
                </Link>
            </div>
        </div>
    </div>
    )
}