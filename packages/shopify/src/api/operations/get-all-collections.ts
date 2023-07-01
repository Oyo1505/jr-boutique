import type {
  OperationContext,
  OperationOptions,
} from '@vercel/commerce/api/operations'
import  getSiteCollectionsQuery  from '../../utils/queries/get-all-collections-query'

import { GetAllProductsOperation } from '@vercel/commerce/types/product'
import { Provider, ShopifyConfig } from '..'




export default function getAllCollectionsOperation({
  commerce,
}: OperationContext<Provider>) {
  async function getAllCollections<T extends GetAllProductsOperation>(opts?: {
    variables?: T['variables']
    config?: Partial<ShopifyConfig>
    preview?: boolean
  }): Promise<T['data']>

  async function getAllCollections<T extends GetAllProductsOperation>(
    opts: {
      variables?: T['variables']
      config?: Partial<ShopifyConfig>
      preview?: boolean
    } & OperationOptions
  ): Promise<T['data']>

  async function getAllCollections<T extends GetAllProductsOperation>({
    query = getSiteCollectionsQuery,
    variables,
    config,
  }: {
    query?: string
    variables?: T['variables']
    config?: Partial<ShopifyConfig>
    preview?: boolean
  } = {}): Promise<T['data']> {
    const { fetch, locale } = commerce.getConfig(config)

    const { data } = await fetch<
      any
    >(
      query,
      { variables },
      {
        ...(locale && {
          headers: {
            'Accept-Language': locale,
          },
        }),
      }
    )
      
    return {
      products: data.products.edges.map(({ node }:any) =>
        node
      ),
    }
  }

  return getAllCollections
}