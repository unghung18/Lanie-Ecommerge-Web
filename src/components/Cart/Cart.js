import React from 'react';
import './Cart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { removeFromCart, increment, decrement, clear } from '../../redux/cartSlice';


const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    return (
        <>
            {cart.cartItems.length === 0 ? <div className='container cart-empty'>Giỏ hàng trống</div> :
                <div className="cart">
                    <div className='container cart__container'>
                        <table>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                            {cart.cartItems.map((item, index) => (
                                <tr key={index} className='cart-item'>
                                    <td>
                                        <div className="cart-item-product">
                                            <div className="cart-img" style={{ backgroundImage: `url(${item.image})` }}>
                                            </div>
                                            <div>
                                                <p>{item.name}</p>
                                                <small>{item.price.toLocaleString()}₫</small>
                                                <a onClick={() => dispatch(removeFromCart(item))}>Hủy bỏ</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='cart-item-quantity'>
                                            <button onClick={() => dispatch(decrement(item))}><MdArrowBackIosNew /></button>
                                            <input type='number' value={item.quantity} />
                                            <button onClick={() => dispatch(increment(item))}><MdArrowForwardIos /></button>
                                        </div>
                                    </td>
                                    <td>{(item.price * item.quantity).toLocaleString()}₫</td>
                                </tr>
                            ))}
                        </table>

                        <div className="total-price">
                            <table>
                                <tr>
                                    <td>Thành Tiền</td>
                                    <td>159,000₫</td>
                                </tr>
                                <tr>
                                    <td>Thuế</td>
                                    <td>159,000₫</td>
                                </tr>
                                <tr>
                                    <td>Tổng tiền</td>
                                    <td>159,000₫</td>
                                </tr>
                            </table>
                            <td><a className="btn" href="">Thanh toán</a></td>
                        </div>
                    </div>
                </div >
            }
        </>
    )
}

export default Cart