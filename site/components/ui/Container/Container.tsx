import cn from 'clsx';
import React, { FC } from 'react';
import s from './container.module.scss';

interface ContainerProps {
  className?: string
  children?: any
  el?: HTMLElement
  clean?: boolean
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  el = 'div',
  clean = false, // Full Width Screen
}) => {
  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> = el as any;

  return (
    <Component className={cn(className, s.container, clean)}>
      {children}
    </Component>
  );
};

export default Container;
