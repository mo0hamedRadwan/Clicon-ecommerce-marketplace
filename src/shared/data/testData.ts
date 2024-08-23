import {
  Category,
  DealsProductType,
  NewsType,
  SubCategory,
} from "apps/front-office/design-system/types";
import { ProductType } from "./../../apps/front-office/design-system/types/index";
import { categoryImages, newsImages, productImages } from "./images";

export const product1: ProductType = {
  id: 1,
  name: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black",
  price: 100,
  quantity: 1,
  imageUrl: productImages.productImg1,
  category: "category",
  stockStatus: true,
};

export const product2: ProductType = {
  id: 2,
  name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case IPX8 Waterproof Stereo Earphones in-Ear",
  price: 50,
  quantity: 2,
  imageUrl: productImages.productImg2,
  category: "category",
  stockStatus: false,
};

export const product3: ProductType = {
  id: 3,
  name: "Portable Wshing Machine, 11lbs capacity Model 18NMFIAM",
  price: 200,
  oldPrice: 250,
  quantity: 10,
  imageUrl: productImages.productImg1,
  category: "category",
  stockStatus: true,
};

export const product4: ProductType = {
  id: 4,
  name: "Product 4",
  price: 200,
  oldPrice: 250,
  discount: 20,
  quantity: 10,
  bannerImageUrl: productImages.productImg3,
  shortDescription:
    "ullam similique totam recusandae labore, architecto iure est laborum expedita consectetur id possimus.",
  category: "category",
};

export const sliderProduct: ProductType = {
  id: 5,
  name: "Product Product Product Product Product Product",
  price: 299,
  bannerImageUrl: productImages.productImg4,
  caption: "top product in website caption caption caption",
  shortDescription:
    "ullam similique totam recusandae labore, architecto iure est laborum expedita consectetur.",
  category: "category",
};

export const smallBannerProduct1: ProductType = {
  id: 6,
  name: "Product Product Product Product Product Product",
  price: 299,
  imageUrl: productImages.productImg5,
  discount: 29,
  caption: "top product in website caption caption caption",
  shortDescription:
    "ullam similique totam recusandae labore, architecto iure est laborum expedita consectetur.",
  category: "category",
};

export const smallBannerProduct2: ProductType = {
  id: 7,
  name: "Product Product Product Product Product Product",
  price: 299,
  imageUrl: productImages.productImg6,
  badges: ["20% off", "hot"],
  caption: "top product in website caption caption caption",
  shortDescription:
    "ullam similique totam recusandae labore, architecto iure est laborum expedita consectetur.",
  category: "category",
};

export const RealProduct: ProductType = {
  id: 100,
  name: "2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray",
  shortDescription:
    "ullam similique totam recusandae labore, architecto iure est laborum expedita consectetur.",
  description:
    "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.",
  price: 1699,
  oldPrice: 1999,
  discount: 500,
  category: "Electronics Devices",
  imageUrl: productImages.pMainImage,
  images: [
    productImages.pMainImage,
    productImages.pImage1,
    productImages.pImage2,
    productImages.pImage3,
    productImages.pImage4,
    productImages.pImage5,
    productImages.pImage6,
  ],
  badges: ["hot"],
  stockStatus: true,
  sku: "A264671",
  brand: "Apple",
  colors: ["", ""],
  sizes: ["13 inch", "15 inch", "17 inch", "21 inch"],
  memories: [
    "8GB unified memory",
    "16GB unified memory",
    "32GB unified memory",
  ],
  storages: [
    "128GB SSD Storage",
    "256GB SSD Storage",
    "512GB SSD Storage",
    "1TB SSD Storage",
  ],
};

export const BestProduct: ProductType = {
  id: 100,
  name: "2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray",
  shortDescription:
    "ullam similique totam recusandae labore, architecto iure est laborum expedita consectetur.",
  price: 1699,
  oldPrice: 1999,
  category: "Electronics Devices",
  imageUrl: productImages.pMainImage2,
  images: [
    productImages.pMainImage2,
    productImages.pImage1,
    productImages.pImage2,
    productImages.pImage3,
    productImages.pImage4,
    productImages.pImage5,
    productImages.pImage6,
  ],
  badges: ["20% off", "hot"],
  stockStatus: true,
  sku: "A264671",
  brand: "Apple",
  colors: ["", ""],
  sizes: ["13 inch", "15 inch", "17 inch", "21 inch"],
  memories: [
    "8GB unified memory",
    "16GB unified memory",
    "32GB unified memory",
  ],
  storages: [
    "128GB SSD Storage",
    "256GB SSD Storage",
    "512GB SSD Storage",
    "1TB SSD Storage",
  ],
};

export const cartProducts: ProductType[] = [product1, product2, product3];

export const wishlistProducts: ProductType[] = [product2, product3];

export const products: ProductType[] = [product1, product2, product3];

export const bestProducts: ProductType[] = [
  BestProduct,
  RealProduct,
  RealProduct,
  RealProduct,
  RealProduct,
  RealProduct,
  RealProduct,
  RealProduct,
  RealProduct,
  RealProduct,
];

export const bestDeals: DealsProductType = {
  deadline: new Date(2025, 0, 0),
  products: bestProducts,
};

const subcategories: SubCategory[] = [
  {
    id: 1,
    name: "SubCategory 1",
    products: products,
    slug: "subcategory-1",
    topProduct: product4,
  },
  {
    id: 2,
    name: "SubCategory 2",
    products: products,
    slug: "subcategory-2",
    topProduct: product4,
  },
  {
    id: 3,
    name: "SubCategory 3",
    products: products,
    slug: "subcategory-3",
    topProduct: product4,
  },
  {
    id: 4,
    name: "SubCategory 4",
    products: products,
    slug: "subcategory-4",
    topProduct: product4,
  },
  {
    id: 5,
    name: "SubCategory 5",
    products: products,
    slug: "subcategory-5",
    topProduct: product4,
  },
  {
    id: 6,
    name: "SubCategory 6",
    products: products,
    slug: "subcategory-6",
    topProduct: product4,
  },
  {
    id: 7,
    name: "SubCategory 7",
    products: products,
    slug: "subcategory-7",
    topProduct: product4,
  },
  {
    id: 8,
    name: "SubCategory 8",
    products: products,
    slug: "subcategory-8",
    topProduct: product4,
  },
  {
    id: 9,
    name: "SubCategory 9",
    products: products,
    slug: "subcategory-9",
    topProduct: product4,
  },
  {
    id: 10,
    name: "SubCategory 10",
    products: products,
    slug: "subcategory-10",
    topProduct: product4,
  },
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Computer & Laptop",
    image: categoryImages.catImg1,
    subCategories: subcategories,
    slug: "computer-and-laptop",
    topProducts: products,
  },
  {
    id: 2,
    name: "Computer Accessories",
    image: categoryImages.catImg2,
    subCategories: subcategories,
    slug: "computer-accessories",
    topProducts: products,
  },
  {
    id: 3,
    name: "SmartPhone",
    image: categoryImages.catImg3,
    subCategories: subcategories,
    slug: "smartphone",
    topProducts: products,
  },
  {
    id: 4,
    name: "Headphone",
    image: categoryImages.catImg4,
    subCategories: subcategories,
    slug: "headphone",
    topProducts: products,
  },
  {
    id: 5,
    name: "Mobile Accessories",
    image: categoryImages.catImg5,
    subCategories: subcategories,
    slug: "mobile-accessories",
    topProducts: products,
  },
  {
    id: 6,
    name: "Gaming Console",
    image: categoryImages.catImg6,
    subCategories: subcategories,
    slug: "gaming-console",
    topProducts: products,
  },
  {
    id: 7,
    name: "Camera & Photo",
    image: categoryImages.catImg7,
    subCategories: subcategories,
    slug: "camera-and-photo",
    topProducts: products,
  },
  {
    id: 8,
    image: categoryImages.catImg1,
    name: "TV & Homes Appliances",
    subCategories: subcategories,
    slug: "tv-and-homes-appliances",
    topProducts: products,
  },
  {
    id: 9,
    name: "Watchs & Accessories",
    image: categoryImages.catImg2,
    subCategories: subcategories,
    slug: "watchs-and-accessories",
    topProducts: products,
  },
  {
    id: 10,
    name: "GPS & Navigation",
    image: categoryImages.catImg3,
    subCategories: subcategories,
    slug: "gps-and-navigation",
    topProducts: products,
  },
  {
    id: 11,
    name: "Warable Technology",
    image: categoryImages.catImg4,
    subCategories: subcategories,
    slug: "warable-technology",
    topProducts: products,
  },
];

/////////////////////////////////////////////////////////////////

export const new1: NewsType = {
  id: 1,
  title: "New iPhone 13 Pro Max released!",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis orci vel massa facilisis viverra. Sed non felis vel ipsum eleifend pharetra.",
  shortDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis orci vel massa facilisis viverra. Sed non felis vel ipsum eleifend pharetra.",
  imageUrl: newsImages.newsImage1,
  createdAt: new Date(2022, 1, 1),
  author: "John Doe",
  slug: "new-iphone-13-pro-max-released",
  numOfComments: 150,
};

export const new2: NewsType = {
  id: 2,
  title: "New iPhone 13 Pro Max released!",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis orci vel massa facilisis viverra. Sed non felis vel ipsum eleifend pharetra.",
  shortDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis orci vel massa facilisis viverra. Sed non felis vel ipsum eleifend pharetra.",
  imageUrl: newsImages.newsImage2,
  createdAt: new Date(2022, 4, 1),
  author: "John Doe",
  slug: "new-iphone-13-pro-max-released",
  numOfComments: 150,
};

export const new3: NewsType = {
  id: 3,
  title: "New iPhone 13 Pro Max released!",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis orci vel massa facilisis viverra. Sed non felis vel ipsum eleifend pharetra.",
  shortDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis orci vel massa facilisis viverra. Sed non felis vel ipsum eleifend pharetra.",
  imageUrl: newsImages.newsImage3,
  createdAt: new Date(2022, 8, 8),
  author: "John Doe",
  slug: "new-iphone-13-pro-max-released",
  numOfComments: 150,
};

export const news: NewsType[] = [new1, new2, new3];
