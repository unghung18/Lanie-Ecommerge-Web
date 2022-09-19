import React from 'react';
import './Home.scss';
import Slider from '../../components/Slider/Slider';
import ProductCard from '../../components/ProductCard/ProductCard';

import SliderData from '../../fake-data/slider';
import latesProductsData from '../../fake-data/latesProducts';
import topSellerProductsData from '../../fake-data/topSelllerProducts'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';


import feature1 from '../../assets/image/feature1.webp';
import feature2 from '../../assets/image/feature2.webp';
import feature3 from '../../assets/image/feature3.webp';
import bannerHome from '../../assets/image/banner-home.jpg'


const Home = () => {
    return (
        <>
            {/*============================ Features ======================= */}
            <Slider data={SliderData} />
            {/*  */}

            {/*============================ Features ======================= */}
            <div className='features'>
                <div className='feature'>
                    <div className='feature-icon'>
                        <img src={feature1} alt='feature-icon' />
                    </div>
                    <h2>FAST SECURE PAYMENTS</h2>
                </div>
                <div className='feature'>
                    <div className='feature-icon'>
                        <img src={feature2} alt='feature-icon' />
                    </div>
                    <h2>PREMIUM PRODUCTS</h2>
                </div>
                <div className='feature'>
                    <div className='feature-icon'>
                        <img src={feature3} alt='feature-icon' />
                    </div>
                    <h2>FREE AND FAST DELIVERY</h2>
                </div>
            </div>
            {/*  */}

            {/*============================ latest-products ======================= */}
            <section className='latest-products'>
                <h2>LATEST PRODUCTS</h2>
                <Swiper
                    className='container latest-product__container'
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation={true}
                    speed={800}
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                >
                    {latesProductsData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <ProductCard data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            {/*  */}

            {/*============================ Top seller products ======================= */}
            <section className='top-seller-products'>
                <h2>BROWSE TOP SELLING PRODUCTS</h2>
                <div className='container top-seller-products__container'>
                    {topSellerProductsData.map((item, index) => (
                        <ProductCard key={index} data={item} />
                    ))}

                </div>
                <div className='loadmore'>
                    <a className='btn'>LOAD MORE</a>
                </div>
            </section>
            {/*  */}

            {/* ============================= Banner Home============================ */}
            <div className='container banner'>
                <img src={bannerHome} alt='banner-home'></img>
            </div>
            {/*  */}
        </>
    )
}

export default Home;