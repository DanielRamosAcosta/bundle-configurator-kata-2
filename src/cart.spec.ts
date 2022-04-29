import { Cart } from "./cart"
import { Product } from "./product"
import { Bundle } from "./bundle"

describe("cart", () => {
  it("returns the same product if its alone", () => {
    const cart = new Cart()
    const p1 = new Product("p1")
    cart.add(p1)

    const bundles = cart.computeBundles()

    expect(bundles).toEqual([p1])
  })

  it("returns the two products if is not possible to create a bundle", () => {
    const cart = new Cart()
    const p1 = new Product("p1")
    const p3 = new Product("p3")
    cart.add(p1)
    cart.add(p3)

    const bundles = cart.computeBundles()

    expect(bundles).toEqual([p1, p3])
  })

  it("creates a bundle if is possible", () => {
    const cart = new Cart()
    const p1 = new Product("p1")
    const p2 = new Product("p2")
    cart.add(p1)
    cart.add(p2)

    const bundles = cart.computeBundles()

    const b1 = new Bundle([p1, p2])
    expect(bundles).toEqual([b1])
  })
})