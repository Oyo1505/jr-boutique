import commerce from '@lib/api/commerce';
import { Layout } from '@components/common';
// import { ProductCard } from '@components/product';
// import { Grid } from '@components/ui';
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { AcceuilAvantages, Carrousel } from '@components/domains';
import styles from './index.module.scss';

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales };
  const bestSellingProductsPromise = commerce.getAllProducts({
    variables: { limit: 12, sortKey: 'BEST_SELLING' },
    config,
    preview,
    // Saleor provider only
    ...({ featured: true } as any),
  });
  const newProductsPromise = commerce.getAllProducts({
    variables: { first: 12 },
    config,
    preview,
    // Saleor provider only
    ...({ featured: true } as any),
  });
  const pagesPromise = commerce.getAllPages({ config, preview });
  const siteInfoPromise = commerce.getSiteInfo({ config, preview });
  const { products } = await bestSellingProductsPromise;
  const { products: newProduct } = await newProductsPromise;
  const { pages } = await pagesPromise;
  const { categories, brands } = await siteInfoPromise;

  return {
    props: {
      products,
      newProduct,
      categories,
      brands,
      pages,
    },
    revalidate: 60,
  };
}

export default function Home({
  products, newProduct,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(products);
  return (
    <div className={styles.container}>
      <AcceuilAvantages />
      <Carrousel title='Nouveautés' products={products} />
      <Carrousel title='Meilleures Ventes' products={newProduct} />
      {/* <Grid variant='filled'>
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              alt: product.name,
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
              priority: true,
            }}
          />
        ))}
      </Grid> */}

      {/* <HomeAllProductsGrid
        newestProducts={products}
        categories={categories}
        brands={brands}
      /> */}
    </div>
  );
}

Home.Layout = Layout;
