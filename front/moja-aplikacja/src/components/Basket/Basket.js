import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BasketList } from "./BasketList";
import icon from '../../assets/empty car.png';
import './orderProcessStyle.css';
import './basketListStyle.css';
import './basket.css';


const Basket = () => {

  const shoppingList = useSelector(state => state.basket.shoppingList);

  return (
    <div className="basket">
      {shoppingList.length 
        ? BasketList(shoppingList)
        : <div className="error">
            <div className="empty-cart-section">
              <img src={icon} alt="" aria-label="empty-cart-icon" />
            </div>
            <div className="empty-cart-section">
              <span className="empty-cart-info">Twój koszyk jest pusty</span>
              <Link to='/'>
                <span className="return" tabIndex="4">Przejdź do strony głównej</span>
              </Link>
            </div>
        </div>}
    </div>
  )
}

export default Basket;