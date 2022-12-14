import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai'
import bannerProduct from '../../assets/image/banner-product.webp';
import { Link, useNavigate } from 'react-router-dom';
import './Product.scss';

const Product = () => {
    const navigate = useNavigate();

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
                        <h4 className="categories-heading">Danh mục sản phẩm</h4>
                        {categoriesData.map((item, index) => (
                            <ul key={index} className="hashmenu">
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
                            <ul className='product-content-heading-fillter'>
                                <li>
                                    Kích cỡ
                                    <AiFillCaretDown />
                                </li>
                                <li>
                                    Màu sắc
                                    <AiFillCaretDown />
                                </li>
                                <li>
                                    Gias
                                    <AiFillCaretDown />
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