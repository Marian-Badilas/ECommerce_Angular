export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  stats: ProductStats;
  category: string;
};

export type ProductStats = {
  quantity: string;
  calories: string;
  total: string;
};
