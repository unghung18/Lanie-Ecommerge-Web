import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { BiShoppingBag } from 'react-icons/bi';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { cartUiActions } from '../../redux/cartUISlice';

const Header = () => {
    const isUser = localStorage.getItem('user');
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();

    const logout = async () => {
        const result = await signOut(auth)
        console.log(result)
    }
    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
    };
    return (
        <div className='header'>
            <div className="container header__top">
                <div className='header__logo'>
                    <Link to='/'>Lanie Clothing</Link>
                </div>
                <div className='header__search'>
                    <input type='text' placeholder='Search on Lanie'></input>
                    <div className='header__search-icon'>
                        <BsSearch className='header__search-icon-icon' />
                    </div>

                </div>
                <div className='header__top-right'>
                    {!isUser ?
                        <div className='header__top-right-item'>
                            <Link to='/login'>
                                <FiLogIn className='header__top-right-item-icon' />
                                Sign In or Create Account
                            </Link>
                        </div>
                        :
                        <>
                            <div className='header__top-right-item'>
                                <Link to='/login' onClick={() => logout}>
                                    {JSON.parse(isUser).displayName}
                                    <FiLogOut className='header__top-right-item-icon' />
                                </Link>
                            </div>
                        </>
                    }
                    <div className='header__top-right-item' onClick={toggleCart}>
                        <a>
                            <div className='shopping-cart-item'>
                                <div className='total-quantity'><span>{totalQuantity}</span></div>
                                <BiShoppingBag className='header__top-right-item-icon' />
                            </div>
                            <span>Shopping Cart</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='header__menu'>
                <div className='container'>
                    <div className='header__menu-item'>
                        <Link className='header__menu-item-link' to='/'>Home</Link>
                    </div>
                    <div className='header__menu-item'>
                        <Link className='header__menu-item-link' to='/product'>Sản phẩm</Link>
                    </div>
                    <div className='header__menu-item display-submenu'>
                        <Link className='header__menu-item-link' to='/sale'>Sale</Link>
                        <ul className='submenu'>
                            <li>
                                <Link to=''>30%</Link>
                            </li>
                            <li>
                                <Link to=''>30%</Link>
                            </li>
                            <li>
                                <Link to=''>30%</Link>
                            </li>
                            <li>
                                <Link to=''>30%</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='header__menu-item'>
                        <Link className='header__menu-item-link' to='/cart'>Cart</Link>
                    </div>
                    <div className='header__menu-item'>
                        <Link className='header__menu-item-link' to='/contact'>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header