import React from 'react';
import Slider from 'react-slick';
// components
import slider1 from '../../assets/images/slider1.jpg';
import slider2 from '../../assets/images/slider2.jpg';
// styles
import styles from './SimpleSlider.module.css';

function SampleNextArrow(props) {
  const arrowClasses = [styles.arrow];
  const { className, style, onClick } = props;
  arrowClasses.push(className);
  return (
    <div
      className={arrowClasses.join(' ')}
      style={{
        ...style,
        display: 'block',
        color: 'blue',
        position: 'absolute',
        right: '65px',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const arrowClasses = [styles.arrow];
  const { className, style, onClick } = props;
  arrowClasses.push(className);
  return (
    <div
      className={arrowClasses.join(' ')}
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        left: '40px',
        zIndex: '999',
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  adaptiveHeight: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  dotsClass: styles.dots,
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
