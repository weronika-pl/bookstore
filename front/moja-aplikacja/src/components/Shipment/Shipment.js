import React from "react";
import orderProgress from "./orderProcess";
import TextInput from "./TextInput";
import "./shipment.css";
import "../Basket/orderProcessStyle.css";

const Shipment = () => {
    return (
        <div className="main">
            {orderProgress()}
            <div className="form-container">
                <form className="order-form" autocomplete="off" method="POST">
                    <TextInput title="Imię" name="first-name"/>
                    <TextInput title="Nazwisko" name="last-name"/>
                    <TextInput title="Miejscowość" name="city"/>
                    <TextInput title="Kod pocztowy" name="zip-code"/>
                    <button
                        className="go-to-shipment"
                        aria-label="go-to-shipment"
                        type="button">
                        ZAMAWIAM I PŁACĘ
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Shipment;