import React from 'react';
import { useMediaQuery } from "react-responsive";
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SlideBanner = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div>
        <p className='best-collection'>2024 S/S Best Collection</p>
      <Swiper
        className="banner"
        centeredSlides = {true}
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={isMobile ? 1 : 3}
        autoplay={{ delay: 5000 }}	
        
        
      >
        <SwiperSlide><img src='https://i.pinimg.com/736x/9f/72/9b/9f729bcb28da64361ef68834344a76dc.jpg' alt='Slide 4'></img></SwiperSlide>
        <SwiperSlide><img src='https://i.pinimg.com/564x/ad/34/1a/ad341aea949cb85ac648ffd609d51c1c.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='https://i.pinimg.com/564x/fe/2d/05/fe2d0554b52bc3f70d5c3ce4a91b6c58.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='https://i.pinimg.com/564x/ad/c6/7b/adc67bb3b2ba7a0adc3663a6b5b9c99e.jpg' alt='Slide 1'></img></SwiperSlide>
        <SwiperSlide><img src='https://i.pinimg.com/564x/2f/58/52/2f5852fa7c8d3ec7e0b6288f248c0a58.jpg' alt='Slide 2'></img></SwiperSlide>
        <SwiperSlide><img src='https://i.pinimg.com/564x/c2/cc/8e/c2cc8e85ccb432cecd28606c7c06bc6f.jpg' alt='Slide 3'></img></SwiperSlide>
        <SwiperSlide><img src='https://i.pinimg.com/736x/52/35/1a/52351aa19736735d449bd9e5a7f29f6e.jpg'></img></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SlideBanner;
