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

  it.each([
    ["p1", "p2"],
    ["p1", "p4"],
  ])(
    "creates only one bundle when all the products belong to it",
    (...productNames) => {
      const cart = new Cart()
      const products = productNames.map((p) => new Product(p))
      products.forEach((p) => cart.add(p))

      const bundles = cart.computeBundles()

      const expectedBundle = new Bundle(products)
      expect(bundles).toEqual([expectedBundle])
    },
  )
})
