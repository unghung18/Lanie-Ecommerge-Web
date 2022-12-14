import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';
import { BsMessenger } from 'react-icons/bs';
import './ProductCard.scss';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/cartSlice';

const ProductCard = ({ data }) => {

    const dispatch = useDispatch();
    return (
        <>
            <div className='latest-product__container-item'>
                <div className='pi-pic'/*  style={{ backgroundImage: `url(${data.image})` }} */>
                    {data.sale && <span className='tag-sale'>Sale</span>}
                    <img src={data.image} alt='product' />
                    <div className='pi-links' >
                        <a onClick={() => dispatch(cartActions.addItem(data))}>
                            <AiOutlineShopping />
                            <span>ADD TO CARD</span>
                        </a>
                        <a>
                            <BsMessenger />
                        </a>
                    </div>
                    <div className="overlay">
                        <Link to='' className="overlay-button">Chi tiết</Link>
                    </div>
                </div>
                <div className='pi-text'>
                    <p>{data.name}</p>
                    <h6>{data.price.toLocaleString()}₫</h6>
                </div>
            </div>
        </>
    )
}

export default ProductCard