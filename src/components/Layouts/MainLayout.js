import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Carts from '../Cart/Cart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './MainLayout.scss';

const MainLayout = () => {
    const showCart = useSelector((state) => state.cartUi.cartIsVisible);
    return (
        <>
            <Header />
            {showCart && <Carts />}
            <div className='main'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default MainLayout