export interface Collection {
  /**
   *  The unique identifier for the product.
   */
  id: string

}

export type GetAllCollectionOperation = {
  data: { collections: Collection[] }
  variables: {
    ids?: string[]
    first?: number
  }
}