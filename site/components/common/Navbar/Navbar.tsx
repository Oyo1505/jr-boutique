import { FC } from 'react';
import Link from 'next/link';
import { Container } from '@components/ui';
import { Searchbar, UserNav } from '@components/common';
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
    <Container clean>
      <div className={s.nav}>
        <div>
          <Link href='/' className={s.logo} aria-label='Logo'>
            <Image src={headerLogo} alt='header-logo' />
          </Link>
          <nav className={s.navMenu}>
            {links?.map((l) => (
              <Link href={l.href} key={l.href} className={s.link}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        {process.env.COMMERCE_SEARCH_ENABLED && (
          <div className='justify-center flex-1 hidden lg:flex'>
            <Searchbar />
          </div>
        )}
        <div className='flex items-center justify-end flex-1 space-x-8'>
          <UserNav />
        </div>
      </div>
      {process.env.COMMERCE_SEARCH_ENABLED && (
        <div className='flex pb-4 lg:px-6 lg:hidden'>
          <Searchbar id='mobile-search' />
        </div>
      )}
    </Container>
  </NavbarRoot>
);

export default Navbar;
