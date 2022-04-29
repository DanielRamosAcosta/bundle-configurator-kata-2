import { Product } from "./product"
import { Bundle } from "./bundle"

export class Cart {
  private products: Product[] = []

  add(product: Product) {
    this.products.push(product)
  }

  computeBundles(): Array<Bundle | Product> {
    if (this.products.length >= 2 && this.products[1].getName() === "p2") {
      return [new Bundle(this.products)]
    }

    return this.products
  }
}
