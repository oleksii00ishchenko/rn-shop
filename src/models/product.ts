export interface Product {
  id: string;
  userId: string; //link products to user by id
  createdAt: string;
  title: string;
  price: number;
  available: boolean;
  amount: number;
  image: string;
  category: Category[];
  description: string;
}

interface Category {
  title: string;
  id: string;
}
