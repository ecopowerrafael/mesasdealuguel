export interface Product {
  id: string;
  slug: string;
  aliases?: string[];
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  specs?: string[];
  dimensions?: string;
  material?: string;
  priceEstimate?: number; // Estimated unit rental rate in BRL
  rating?: number;
  reviewCount?: number;
}

export interface Category {
  id: string;
  slug: string;
  aliases?: string[];
  title: string;
  icon: string; // Lucide icon name
  image: string;
  imageAlt: string;
  description: string;
  seoContent?: {
    h1: string;
    h2Title: string;
    paragraphs: string[];
    faq: { question: string; answer: string }[];
    eventTips: string[];
  };
  products: Product[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Rich article text with sections
  author: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  category: string;
  keywords: string[];
}

export interface BudgetItem {
  product: Product;
  categoryTitle: string;
  quantity: number;
}

