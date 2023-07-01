/* eslint-disable semi */
export default interface ProductShopify {
  name: string
  id:string
  price: {
    value : number
  }
  variants?:any
}
