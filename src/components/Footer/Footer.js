import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import payImg from '../../assets/image/payImage.webp';
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__logo'>
                <h1>Lanie</h1>
            </div>
            <div className='container footer__widgets'>
                <div className='footer__widget about-widget'>
                    <h2 className="widget-title">ABOUT</h2>
                    <p>Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis. Nullam frin-gilla faucibus
                        urna, id dapibus erat iaculis ut. Integer ac sem.
                    </p>
                    <img src={payImg} alt='pay-img'></img>

                </div>
                <div className='footer__widget questions-widget'>
                    <h2 className="widget-title">Giải Đáp</h2>
                    <ul>
                        <li><Link to="">Chính sách giao nhận - Vận chuyển</Link></li>
                        <li><Link to="">Hướng dẫn thanh toán</Link></li>
                        <li><Link to="">Tra cứu đơn hàng</Link></li>
                        <li><Link to="">Hướng dẫn chọn Size</Link></li>
                        <li><Link to="">Quy định đổi hàng</Link></li>
                        <li><Link to="">Quy định bảo hành và sửa chữa</Link></li>
                        <li><Link to="">Khách hàng thân thiết</Link></li>
                    </ul>
                </div >
                <div className='footer__widget post-widget'>
                    <h2 className="widget-title">Giới Thiệu</h2>
                    <ul>
                        <li><Link to="">Giới thiệu</Link></li>
                        <li><Link to="">NgocAnh's Blog</Link></li>
                        <li><Link to="">Tuyển dụng</Link></li>
                        <li><Link to="">Showroom</Link></li>
                        <li><Link to="">Liên hệ</Link></li>
                    </ul>
                </div>
                <div className='footer__widget contact-widget'>
                    <h2 className="widget-title">Liên Hệ</h2>
                    <ul>
                        <li>
                            <p><span>Tên thương hiệu: </span>Lanie Shop</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p><span>Địa chỉ: </span>Thôn Đông Thành, Trường Yên, Hoa Lư, Ninh Bình</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p><span>Hotline: </span>0966976692</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p><span>Email: </span>ngocanh1997vn@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div >
            <div className='container footer__socials'>
                <a href='' to=''>
                    <FaFacebookF className='social-link-icon' />
                    <span>Facebook</span>
                </a>
                <a href='' to=''>
                    <FaInstagram className='social-link-icon' />
                    <span>Instagram</span>
                </a>
                <a href='' to=''>
                    <FaTiktok className='social-link-icon' />
                    <span>TikTok</span>
                </a>
                <a href='' to=''>
                    <FaTwitter className='social-link-icon' />
                    <span>Twitter</span>
                </a>
            </div>
            <div className='footer__copyright'>
                <p>Cory right ©2022 All rights reserved</p>
            </div>
        </div >
    )
}

export default Footer