export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  imageUrl: string;
  category: string;
  affiliateUrl: string;
  features: string[];
  pros: string[];
  cons: string[];
  isTrending?: boolean;
  isLimitedTime?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
  readTime: string;
}
