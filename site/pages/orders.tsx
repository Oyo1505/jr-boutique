import type { GetStaticPropsContext } from 'next';
import commerce from '@lib/api/commerce';
import { Bag } from '@components/icons';
import { Layout } from '@components/common';
import { Container, Text } from '@components/ui';

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales };
  const pagesPromise = commerce.getAllPages({ config, preview });
  const siteInfoPromise = commerce.getSiteInfo({ config, preview });
  const { pages } = await pagesPromise;
  const { categories } = await siteInfoPromise;

  return {
    props: { pages, categories },
  };
}

export default function Orders() {
  return (
    <Container>
      <Text variant='pageHeading'>My Orders</Text>
      <div>
        <span>
          <Bag />
        </span>
        <h2>
          No orders found
        </h2>
        <p>
          Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake.
        </p>
      </div>
    </Container>
  );
}

Orders.Layout = Layout;
