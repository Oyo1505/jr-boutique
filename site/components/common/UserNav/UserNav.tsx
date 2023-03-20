import cn from 'clsx';
import Link from 'next/link';
import useCart from '@framework/cart/use-cart';
import { useUI } from '@components/ui/context';
import { Bag, Menu } from '@components/icons';
import React from 'react';
import {
  Button,
} from '@components/ui';

import type { LineItem } from '@commerce/types/cart';

import s from './UserNav.module.scss';

const countItem = (count: number, item: LineItem) => count + item.quantity;

const UserNav: React.FC<{
  className?: string
}> = ({ className }) => {
  const { data } = useCart();

  const {
    setSidebarView, openSidebar,
  } = useUI();

  const itemsCount = data?.lineItems?.reduce(countItem, 0) ?? 0;
  return (
    <nav className={cn(s.root, className)}>
      <ul className={s.list}>
        {process.env.COMMERCE_CART_ENABLED && (
          <li className={s.item}>
            <Button
              className={s.item}
              variant='naked'
              onClick={() => {
                setSidebarView('CART_VIEW');
                openSidebar();
              }}
              aria-label={`Cart items: ${itemsCount}`}
            >
              <Bag />
              {itemsCount > 0 && (
                <span className={s.bagCount}>{itemsCount}</span>
              )}
            </Button>
          </li>
        )}
        {process.env.COMMERCE_CUSTOMERAUTH_ENABLED && (
          <li className={s.item}>
            <Link href='/login'>Login</Link>

          </li>
        )}
        <li className={s.mobileMenu}>
          <Button
            className={s.item}
            aria-label='Menu'
            variant='naked'
            onClick={() => {
              setSidebarView('MOBILE_MENU_VIEW');
              openSidebar();
            }}
          >
            <Menu />
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
