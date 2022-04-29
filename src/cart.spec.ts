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

  it("creates a bundle if is possible p1 and p2", () => {
    const cart = new Cart()
    const p1 = new Product("p1")
    const p2 = new Product("p2")
    cart.add(p1)
    cart.add(p2)

    const bundles = cart.computeBundles()

    const b1 = new Bundle([p1, p2])
    expect(bundles).toEqual([b1])
  })

  it("creates a bundle if is possible p1 and p4", () => {
    const cart = new Cart()
    const p1 = new Product("p1")
    const p4 = new Product("p4")
    cart.add(p1)
    cart.add(p4)

    const bundles = cart.computeBundles()

    const b2 = new Bundle([p1, p4])
    expect(bundles).toEqual([b2])
  })

  it.each([
    ["p1", "p2"],
    ["p1", "p4"],
  ])("works", (aa, bb) => {
    const cart = new Cart()
    const a = new Product(aa)
    const b = new Product(bb)
    cart.add(a)
    cart.add(b)

    const bundles = cart.computeBundles()

    const b2 = new Bundle([a, b])
    expect(bundles).toEqual([b2])
  })
})
