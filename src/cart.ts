import { Product } from "./product"

export class Cart {
  private products: Product[] = []

  add(product: Product) {
    this.products.push(product)
  }

  computeBundles() {
    return this.products
  }
}
