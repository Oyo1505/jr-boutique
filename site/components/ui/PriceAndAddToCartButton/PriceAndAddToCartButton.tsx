import ProductShopify from '@components/product/product.model';
import React, { FC } from 'react';
import Image from 'next/image';
import useAddToCart from '@components/product/hooks/addToCart';
import styles from './PriceAndAddToCartButton.module.scss';
import panierLogo from '../../../public/assets/images/diver/AjouterPanier.png';

interface Props {
  product : ProductShopify
}

const PriceAndAddToCartButton: FC<Props> = ({ product }) => {
  const { addToCart } = useAddToCart({ product });
  return (
    <div className={styles.container}>
      <div className={styles.value}>
        <span>{product?.price?.value}</span>
        <span> €</span>
      </div>
      <div>
        <div onClick={addToCart}>
          <Image src={panierLogo} alt='panierLogo' />
        </div>
      </div>
    </div>);
};

export default PriceAndAddToCartButton;
