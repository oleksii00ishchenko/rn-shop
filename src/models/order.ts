import {ItemCart} from './cart';

export interface Order {
  id: string;
  userId: string;
  products: ItemCart[];
  price: number;
  createdAt: string;
  destination: string;
  deliveryTime: string;
  status: string;
}
