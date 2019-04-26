import React from 'react';
import Slider from 'react-slick';
// components
import slider1 from '../../assets/images/slider1.jpg';
import slider2 from '../../assets/images/slider2.png';
// styles
import styles from './SimpleSlider.module.css';

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
};

const SimpleSlider = () => (
  <div className={styles.simpleSlider}>
    <div className={styles.container}>
      <Slider {...settings}>
        <div className={styles.item}>
          <img className={styles.slider} src={slider1} alt="Biography" />
        </div>
        <div className={styles.item}>
          <img className={styles.slider} src={slider2} alt="Biography" />
        </div>
      </Slider>
    </div>
  </div>
);

export default SimpleSlider;
