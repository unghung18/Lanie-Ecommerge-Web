import React from 'react';
import './Slider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/effect-fade';

const Slider = ({ data }) => {
    return (
        <div className='slider'>
            <Swiper
                loop={true}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                speed={800}
                effect="fade"
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                style={{
                    "--swiper-pagination-color": "#fff",
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index} className='slider__myslide' style={{ backgroundImage: `url(${item.image})` }}>
                        <div className='container slider__container'>
                            <div className='slider__content'>
                                <span>{item.title}</span>
                                <h2>{item.name}</h2>
                                <p>{item.desc}</p>
                            </div>
                            <div className='slider__offercard'>
                                <span>chỉ từ</span>
                                <h2>{item.price}</h2>
                                <p>xem ngay</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

export default Slider