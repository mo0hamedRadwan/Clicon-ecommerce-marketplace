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
  shortDescription?: string;
  description?: string;
  caption?: string;
  slug?: string;
  quantity?: number;
  inStock?: boolean;
  discount?: number;
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
  subCategories: SubCategory[];
  slug: string;
  topProducts: ProductType[];
};
