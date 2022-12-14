import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { AiFillCloseCircle } from 'react-icons/ai'

import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../redux/cartUISlice";

import "./Cart.scss";

const Carts = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const showCart = useSelector((state) => state.cartUi.cartIsVisible);

    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
    };
    return (
        <div className={`cart__container ${showCart && 'active'}`}>
            <div className={`cart ${showCart && 'active'}`}>
                <div className="cart__close">
                    <span onClick={toggleCart}>
                        <AiFillCloseCircle className="cart__close-icon" />
                    </span>
                </div>

                <div className="cart__item-list">
                    {cartProducts.length === 0 ? (
                        <h6 style={{ textAlign: 'center', marginTop: '50px' }}>No item added to the cart</h6>
                    ) : (
                        cartProducts.map((item, index) => (
                            <CartItem item={item} key={index} />
                        ))
                    )}
                </div>

                <div className={`cart__bottom ${showCart && 'active'}`}>
                    <h6>
                        Tổng cộng :<span>  {totalAmount.toLocaleString()}₫</span>
                    </h6>
                    <button>
                        <Link to="/checkout" onClick={toggleCart}>
                            Thanh Toán
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carts;
