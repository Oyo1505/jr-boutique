// eslint-disable no-empty-pattern
import { FC } from 'react';
import cn from 'clsx';
import { Container } from '@components/ui';

import s from './Footer.module.scss';

interface Props {
  className?: string
  // eslint-disable-next-line  react/no-unused-prop-types
  children?: any
}

const Footer: FC<Props> = ({ className }) => {
  const rootClassName = cn(s.root, className);

  return (
    <footer className={rootClassName}>
      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-accent-2 py-12 text-primary bg-primary transition-colors duration-150' />
      </Container>
    </footer>
  );
};

export default Footer;
