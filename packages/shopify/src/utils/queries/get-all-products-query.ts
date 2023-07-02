export const productConnectionFragment = /* GraphQL */ `
  fragment productConnection on ProductConnection {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    edges {
      node {
        id
        title
        vendor
        handle
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        variants(first: 1) {
          edges {
            node {
              id
              title
              sku
              availableForSale
            }
          }
        }
        images(first: 1) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              url
              altText
              width
              height
            }
          }
        }
      }
    }
  }
`

const getAllProductsQuery = /* GraphQL */ `
  query getAllProducts(
    $first: Int = 250
    $query: String = ""
    $sortKey: ProductSortKeys = RELEVANCE
    $reverse: Boolean = false
  ) {
    products(
      first: $first
      sortKey: $sortKey
      reverse: $reverse
      query: $query
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          title
          vendor
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                title
                sku
                availableForSale
              }
            }
          }
          images(first: 1) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                url
                altText
                width
                height
              }
            }
          }
        }
      }
    }
  }

  ${productConnectionFragment}
`
export default getAllProductsQuery
