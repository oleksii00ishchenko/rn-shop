export interface ItemCart {
  productId: string;
  amount: number;
}

export interface Cart {
  products: ItemCart[];
  orderPrice: number;
}
