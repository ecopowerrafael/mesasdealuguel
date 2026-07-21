export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string; // Lucide icon name
  image: string;
  description: string;
  products: Product[];
}

export interface BudgetItem {
  product: Product;
  categoryTitle: string;
  quantity: number;
}
