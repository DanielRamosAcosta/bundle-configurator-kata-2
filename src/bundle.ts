import { Product } from "./product"

export class Bundle {
  constructor(
    private readonly products: Product[],
    private bundleName: string,
  ) {}
}
