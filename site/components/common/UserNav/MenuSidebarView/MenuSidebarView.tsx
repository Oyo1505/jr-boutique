import Link from 'next/link';
import { useUI } from '@components/ui/context';
import SidebarLayout from '@components/common/SidebarLayout';
import s from './MenuSidebarView.module.scss';
import type { Link as LinkProps } from './index';

export default function MenuSidebarView({
  links = [],
}: {
  links?: LinkProps[]
}) {
  const { closeSidebar } = useUI();

  return (
    <SidebarLayout handleClose={() => closeSidebar()}>
      <div className={s.root}>
        <nav>
          <ul>
            {/* eslint-disable-next-line  jsx-a11y/no-noninteractive-element-interactions */}
            <li className={s.item} onClick={() => closeSidebar()}>
              <Link href='/search'>All</Link>
            </li>
            {links.map((l: any) => (
              /* eslint-disable-next-line  jsx-a11y/no-noninteractive-element-interactions */
              <li
                key={l.href}
                className={s.item}
                onClick={() => closeSidebar()}
              >
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </SidebarLayout>
  );
}
/* eslint-disable-next-line  no-unused-expressions */
MenuSidebarView;
