import React from "react";
import "./Cart.scss";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/cartSlice";
import { IoIosAdd, IoIosCloseCircleOutline } from 'react-icons/io';
import { RiSubtractLine } from 'react-icons/ri';

const CartItem = ({ item }) => {
    const { id, name, price, image, quantity, totalPrice } = item;

    const dispatch = useDispatch();

    const incrementItem = () => {
        dispatch(
            cartActions.addItem({
                id,
                name,
                price,
                image,
            })
        );
    };

    const decreaseItem = () => {
        dispatch(cartActions.removeItem(id));
    };

    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id));
    };

    return (
        <div className="cart__item">
            <div className="cart__item-info">
                <img src={image} alt="product-img" />

                <div className="cart__product-info">
                    <div>
                        <h6 className="cart__product-title">{name}</h6>
                        <p className="cart__product-price">
                            SL: {quantity}<span>Giá: {totalPrice.toLocaleString()}₫</span>
                        </p>
                        <div className="increase__decrease-btn">
                            <span className="increase__btn" onClick={incrementItem}>
                                <IoIosAdd />
                            </span>
                            <span className="quantity">{quantity}</span>
                            <span className="decrease__btn" onClick={decreaseItem}>
                                <RiSubtractLine />
                            </span>
                        </div>
                    </div>

                    <span className="delete__btn" onClick={deleteItem}>
                        <IoIosCloseCircleOutline className="delete__btn" />
                    </span>
                </div>
            </div>
        </div >
    );
};

export default CartItem;
