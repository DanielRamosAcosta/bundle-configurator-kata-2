import { Cart } from "./cart"
import { Product } from "./product"

describe("cart", () => {
  it("returns the same product if its alone", () => {
    const cart = new Cart()
    const p1 = new Product("p1")

    cart.add(p1)

    expect(cart.computeBundles()).toEqual([p1])
  })

  it.todo("returns the two products if is not possible to create a bundle")

  it.todo("creates a bundle if is possible")
})
