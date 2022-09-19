import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './MainLayout.scss';

const MainLayout = () => {
    return (
        <>
            <Header />
            <div className='main'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default MainLayout