import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './page.module.css'


export default function Slider() {
  return (
    <div className={styles.slider}>
        <Swiper spaceBetween={40}
        slidesPerView={1.2}>
        <SwiperSlide><div className={styles.placeholder}></div></SwiperSlide>
        <SwiperSlide><div className={styles.placeholder}></div></SwiperSlide>
        <SwiperSlide><div className={styles.placeholder}></div></SwiperSlide>
        <SwiperSlide><div className={styles.placeholder}></div></SwiperSlide>
        <SwiperSlide><div className={styles.placeholder}></div></SwiperSlide>
        </Swiper>
    </div>
  );
};