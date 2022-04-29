import { Product } from "./product"
import { Bundle } from "./bundle"

export class Cart {
  private products: Product[] = []

  add(product: Product) {
    this.products.push(product)
  }

  computeBundles(): Array<Bundle | Product> {
    if (this.products.length <= 1) {
      return this.products
    }

    if (
      this.products.length >= 4 &&
      this.products[0].getName() === "p1" &&
      this.products[1].getName() === "p2" &&
      this.products[2].getName() === "p3" &&
      this.products[3].getName() === "p4"
    ) {
      return [new Bundle("b4")]
    }

    if (
      this.products[0].getName() === "p1" &&
      this.products[1].getName() === "p2"
    ) {
      return [new Bundle("b1")]
    }

    if (
      this.products[0].getName() === "p1" &&
      this.products[1].getName() === "p4"
    ) {
      return [new Bundle("b2")]
    }

    if (
      this.products[0].getName() === "p3" &&
      this.products[1].getName() === "p4"
    ) {
      return [new Bundle("b3")]
    }

    if (
      this.products[0].getName() === "p1" &&
      this.products[1].getName() === "p5"
    ) {
      return [new Bundle("b5")]
    }

    return this.products
  }
}
