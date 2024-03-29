import cn from 'clsx';
import {
  FC, ReactNode, Component, Children,
} from 'react';
// eslint-disable-next-line import/no-named-default
import { default as FastMarquee } from 'react-fast-marquee';
import s from './Marquee.module.scss';

interface MarqueeProps {
  className?: string
  children?: ReactNode[] | Component[] | any[]
  variant?: 'primary' | 'secondary'
}

const Marquee: FC<MarqueeProps> = ({
  className = '',
  children,
  variant = 'primary',
}) => {
  const rootClassName = cn(
    s.root,
    {
      [s.primary]: variant === 'primary',
      [s.secondary]: variant === 'secondary',
    },
    className,
  );

  return (
    <FastMarquee gradient={false} className={rootClassName}>
      {Children.map(children, (child) => ({
        ...child,
        props: {
          ...child.props,
          className: cn(child.props.className, `${variant}`),
        },
      }))}
    </FastMarquee>
  );
};

export default Marquee;
