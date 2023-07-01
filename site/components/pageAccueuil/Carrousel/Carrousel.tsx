/* eslint-disable import/no-extraneous-dependencies */
import { FC } from 'react';
import Link from 'next/link';
import { PriceAndAddToCartButton } from '@components/ui';
import Slider from 'react-slick';
import styles from './Carrousel.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {
  title : string
  products?:any
}

const Carrousel: FC<Props> = ({ title, products }) => {
  const settings = {
    dots: true,
    dotsClass: styles.dots,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <div className={styles.container}>

      <h4 className={styles.title}>{title}</h4>

      <Slider {...settings}>
        {products && products?.map((product:any, index:number) => <div key={`${product?.name}-${index}`} className={styles.lastProducts}>
          <Link href={`product/${product?.slug}`}>
            <div className={styles.imageProduct}>
              <img src={product?.images?.[0].url} loading='lazy' alt={product?.images?.[0].altText} />
            </div>
          </Link>
          <div>
            <div>{product?.name}</div>
            <div>{product?.description}</div>
            <PriceAndAddToCartButton product={product} />
          </div>
        </div>,
        )}
      </Slider>
    </div>);
};

export default Carrousel;
