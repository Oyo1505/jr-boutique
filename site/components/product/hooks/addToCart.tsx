import { useState } from 'react';
import { useAddItem } from '@framework/cart';
import { useUI } from '@components/ui';
import ProductShopify from '../product.model';

interface Props {
  product: ProductShopify

}

const useAddToCart = ({
  product,
}:Props) => {
  const addItem = useAddItem();
  const { openSidebar, setSidebarView } = useUI();
  const [, setLoading] = useState(false);
  const [, setError] = useState<null | Error>(null);
  // const [, setSelectedOptions] = useState<SelectedOptions>({});

  const addToCart = async () => {
    setLoading(true);
    setError(null);
    try {
      await addItem({
        productId: String(product?.id),
        variantId: String(product?.variants?.[0]?.id),
      });
      setSidebarView('CART_VIEW');
      openSidebar();
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err instanceof Error) {
        console.error(err);
        setError({
          ...err,
          message: 'Could not add item to cart. Please try again.',
        });
      }
    }
  };
  return { addToCart };
};

export default useAddToCart;
