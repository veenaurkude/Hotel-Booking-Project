
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from "./Img/img1.jpg";
import img2 from "./Img/img2.jpg";
import img3 from "./Img/img3.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../../../node_modules/swiper/swiper-bundle.min.css"
import './Slider.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
