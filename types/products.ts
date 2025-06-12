export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: number;
  name: Name;
  slug: Slug;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}

export enum Name {
  Clothes = "Clothes",
  Electronics = "Electronics",
  Furniture = "Furniture",
  Miscellaneous = "Miscellaneous",
  Shoes = "Shoes",
}

export enum Slug {
  Clothes = "clothes",
  Electronics = "electronics",
  Furniture = "furniture",
  Miscellaneous = "miscellaneous",
  Shoes = "shoes",
}
