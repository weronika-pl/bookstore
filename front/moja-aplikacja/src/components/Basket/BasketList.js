import React from 'react';
import { useDispatch } from "react-redux";
import orderProgress from "./orderProcess";
import { addToShoppingCart, removeBook, reduceQty } from "../../redux/basket/basketActions";

export const BasketList = list => {
    
    const dispatch = useDispatch();

    const incrementing = (item, e) => {
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
                {// label raczej powinien byc powiazany z inputem
                }
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
                            // e jest domyslnie przekazywane
                            onKeyDown={() => this.incrementing()}
                            tabIndex="5">
                            {//font awesome raczej jako biblioteka reactowa
                            // https://fontawesome.com/how-to-use/on-the-web/using-with/react
                            // wszystkie ikonki powinny miec aria-label
                            }
                            <i className="fa fa-circle fa-stack-2x increment" aria-label="Add one more"></i>
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
                    {/*operacje zmiennoprzecinkowe lol*/}
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
        </div>
    </div>
    )
}