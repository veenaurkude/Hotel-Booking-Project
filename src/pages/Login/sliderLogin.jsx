// Slider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from "../../assets/images/hotel.jpg";
import img2 from "../../assets/images/background.png";
import img3 from "../../assets/images/insert.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import "../../../node_modules/swiper/swiper-bundle.min.css"
import "../../../node_modules/swiper/swiper-bundle.min.css"
import './sliderLogin.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

function Slider() {
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
export default Slider
