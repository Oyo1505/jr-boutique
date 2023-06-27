import { FC } from 'react';
import Slider from 'react-slick';
import styles from './carrousel.module.scss';

const Carrousel: FC = ({ title }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 6000,
  };

  return (
    <div className={styles.container}>
      <div>
        <h4>{title}</h4>
      </div>

      <Slider {...settings}>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </Slider>
    </div>);
};

export default Carrousel;
