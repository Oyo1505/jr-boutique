import '@assets/main.css';
import '@assets/chrome-bug.css';
import { FC, ReactNode, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Head } from '@components/common';
import { ManagedUIContext } from '@components/ui/context';

// eslint-disable-next-line react/jsx-no-useless-fragment
const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>;

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <>
      <Head />
      <ManagedUIContext>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ManagedUIContext>
    </>
  );
}
