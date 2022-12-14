import React from 'react';
import { Outlet } from 'react-router-dom';
import Carts from '../Cart/Cart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './MainLayout.scss';

const MainLayout = () => {
    return (
        <>
            <Header />
            <Carts />
            <div className='main'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default MainLayout