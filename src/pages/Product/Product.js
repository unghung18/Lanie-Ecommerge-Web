import React from 'react';
import bannerProduct from '../../assets/image/banner-product.webp';
import { Link } from 'react-router-dom';
import './Product.scss';

const Product = () => {

    const categoriesData = [
        {
            title: 'Sale',
            items: ['Sale up to 50%', 'Sale 70%', 'Đồng giá 149k']
        },
        {
            title: 'Đầm',
            items: ['Đầm xuông', 'Đầm dáng A', 'Đầm ôm']
        },
        {
            title: 'Sale',
            items: ['Sale up to 50%', 'Sale 70%', 'Đồng giá 149k']
        },
        {
            title: 'Sale',
            items: ['Sale up to 50%', 'Sale 70%', 'Đồng giá 149k']
        }
    ]
    return (
        <>
            <div className='banner'>
                <img src={bannerProduct} alt='banner-home'></img>
            </div>

            <div className="product">
                <div className='container product__container'>
                    <div className="product-categories">
                        <h4 className="categories-heading">Danh mục tất cả sản phẩm</h4>
                        {categoriesData.map((item, index) => (
                            <ul key={index} className="hasmenu">
                                <h4>{item.title}</h4>
                                {item.items.map((item, index) => (
                                    <li key={index}>
                                        <Link to='/product'>{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                    <div className="product-content">
                        <div className="product-content-heading">
                            <h3>TẤT CẢ SẢN PHẨM</h3>
                            <ul>
                                <li>
                                    Kích cỡ
                                    <i className="fa-solid fa-caret-down"></i>
                                </li>
                                <li>
                                    Màu sắc
                                    <i className="fa-solid fa-caret-down"></i>
                                </li>
                                <li>
                                    Gias
                                    <i className="fa-solid fa-caret-down"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product