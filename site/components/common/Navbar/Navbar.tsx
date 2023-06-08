/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC } from 'react';
import Link from 'next/link';
import { Container } from '@components/ui';
import { UserNav } from '@components/common';
import Image from 'next/image';
import s from './Navbar.module.scss';
import NavbarRoot from './NavbarRoot';
import headerLogo from '../../../public/assets/images/header/Header.png';

interface ILink {
  href: string
  label: string
}

interface NavbarProps {
  links?: ILink[]
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
    <Container className={s.container}>
      <div>
        <Link href='/' className={s.logo} aria-label='Logo'>
          <Image src={headerLogo} alt='header-logo' />
        </Link>
        <nav className={s.navMenu}>
          {links?.map((l: any, index: number) => (
            <>
              {index === links.length - 1 && (
                <Link href={l.href} key={l.href} className={s.link}>
                  {' '}
                  {l.label}
                </Link>
              )}
              {index !== links.length - 1 && (
                <>
                  {' '}
                  <Link href={l.href} key={l.href} className={s.link}>
                    {l.label}
                    {' '}
                  </Link>
                  {' '}
                  <span>/</span>
                </>
              )}
            </>
          ))}
          {process.env.COMMERCE_SEARCH_ENABLED && (
            <div className={s.searchBar}>loupe</div>
          )}
        </nav>
      </div>
      <div className={s.asideContainer}>
        <div className={s.logoReseau}>
          <a href='https://www.facebook.com/jrdistribution' />
          <a href='https://www.instagram.com/jrdistribution.particuliers' />
        </div>
        <UserNav />
      </div>
    </Container>
  </NavbarRoot>
);

export default Navbar;
