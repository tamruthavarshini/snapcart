import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import slider1 from '../../assets/slider_1.png';
import slider2 from '../../assets/slider_2.png';
import './headerSlider.css';

const HeaderSlider = () => {
    let settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true
    };

    return (
        <div className='slider'>
            <Slider {...settings}>
                <div className='slider-item'>
                    <img src={slider1} alt="Slider 1" className="slider-image" />
                </div>
                <div className='slider-item'>
                    <img src={slider2} alt="Slider 2" className="slider-image" />
                </div>
            </Slider>
        </div>
    );
};

export default HeaderSlider;
