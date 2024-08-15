export type SelectOption = {
  img?: string;
  label: string;
  value: string;
};

export type ProductType = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  numOfReviews?: number;
  imageUrl?: string;
  bannerImageUrl?: string;
  images?: string[];
  badges?: string[];
  shortDescription?: string;
  description?: string;
  caption?: string;
  slug?: string;
  quantity?: number;
  inStock?: boolean;
  discount?: number;
  sku?: string;
  brand?: string;
  category: string;
  colors?: string[];
  sizes?: string[];
  memories?: string[];
  storages?: string[];
};

export type SubCategory = {
  id: number;
  name: string;
  products: ProductType[];
  slug: string;
  topProduct: ProductType;
};

export type Category = {
  id: number;
  name: string;
  image?: string;
  subCategories: SubCategory[];
  slug: string;
  topProducts: ProductType[];
};

export type DealsProductType = {
  deadline: Date;
  products: ProductType[];
};

export type NewsType = {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: Date;
  author: string;
  slug: string;
  numOfComments?: number;
  shortDescription?: string;
};
