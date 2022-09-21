import React from 'react';
import './Cart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../redux/cartSlice';
import { AiOutlineDelete } from 'react-icons/ai';


const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    return (
        <>
            {cartItems.length === 0 ? <div className='container cart-empty'>Giỏ hàng trống</div> :
                <div className="cart-page">
                    <div className='container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Title</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <Tr item={item} key={item.id} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div >
            }
        </>
    )
}

const Tr = (props) => {
    const { id, image, name, price, quantity } = props.item;
    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch();
    };
    return (
        <tr>
            <td className="text-center cart__img-box">
                <img src={image} alt="" />
            </td>
            <td className="text-center">{name}</td>
            <td className="text-center">${price}</td>
            <td className="text-center">{quantity}</td>
            <td className="text-center cart__item-del">
                <AiOutlineDelete onClick={() => dispatch(cartActions.deleteItem(id))} />
                <i class="ri-delete-bin-line" ></i>
            </td>
        </tr>
    );
};


export default Cart

