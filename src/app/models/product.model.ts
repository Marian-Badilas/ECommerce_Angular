export type Product = {
  name: string;
  image: string;
  price: number;
  stats: ProductStats;
};

export type ProductStats = {
  quantity: string;
  calories: string;
  total: string;
};
