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
  stockStatus?: boolean;
  discount?: number;
  sku?: string;
  brand?: string;
  category?: string;
  colors?: string[];
  sizes?: string[];
  memories?: string[];
  storages?: string[];
};

export type Product = {
  id: string;
  isActive: boolean;
  affiliateCommission: { value: string; type: string };
  name: string;
  shortDescription?: string;
  description: string;
  badge: string;
  price?: number;
  salePrice: number;
  dimensions: { width: string; height: string; length: string; weight: string };
  discount: {
    percentage: string;
    amount: string;
    startsAt: string;
    endsAt: string;
  };
  howWasMade: string;
  inStock?: boolean;
  brand: string;
  model: string;
  cost: string;
  stock: {
    available: number | string;
    lowStockThreshold: number | string;
  };
  slug?: string;
  purchase: {
    minQuantity: number | string;
    maxQuantity: number | string;
  };
  package: { width: string; height: string; length: string; weight: string };
  unit: string;
  warranty: { type: string; duration: string };
  returns: { isAllowed: boolean; type: string; duration: string };
  sortOrder: string;
  sku: string;
  type: string;
  images: {
    url: string;
  }[];
  relatedProducts: Product[];
  category: Category;
  inCart?: boolean;
  inWishlist?: boolean;
  inCompare?: boolean;
};

export type SubCategory = {
  id: string;
  name: string;
  slug: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  image: string;
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

export type OrderActivityType = {
  icon: string;
  iconColor: string;
  iconBgColor: string;
  description: string;
  date: Date;
};

export type OrderType = {
  id: number;
  productsNum: number;
  totalPrice: number;
  statusNumber: number;
  orderDate: Date;
  expectedDate: Date;
  orderActivities: OrderActivityType[];
};

export type Row = {
  columns: {
    module: {
      id: number;
      title: string;
      products?: Product[];
      categories?: Category[];
      posts?: Post[];
      banner?: Banner;
      slider?: Slider;
    };
  }[];
};

export type Banner = {
  id: string;
  image: {
    url: string;
  };
};

export type Slider = {
  banners: Banner[];
};

export type Post = {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: {
    url: string;
  };
  slug: string;
  createdBy: {
    name: string;
  };
  createdAt: {
    date: string;
  };
};

export type Order = {
  id: number;
  products: Product[];
};

export type CartItem = {
  id: string;
  product: Product;
  quantity: number;
  salePrice: number;
  total: {
    finalPrice: number;
  };
};

export type User = {
  accessToken: string;
  cartProducts: string[];
  id: string;
  totalCart: number;
  totalCompare: number;
  totalWishlist: number;
};

export type Cart = {
  items: CartItem[];
  subtotal: number;
  discount?: number;
  shippingFees?: number;
};

export type Wishlist = {
  products: Product[];
};
