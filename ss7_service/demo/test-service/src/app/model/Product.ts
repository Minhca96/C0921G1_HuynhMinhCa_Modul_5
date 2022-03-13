export class Product {
  productId: number;
  name: string;
  price: string;

  constructor(productId: number, name: string, price: string) {
    this.productId = productId;
    this.name = name;
    this.price = price;
  }
}
