import {
  Category,
  Product,
  SubCategory,
} from "apps/front-office/design-system/types";
import { productImages } from "./images";

const product1: Product = {
  id: 1,
  name: "Product 1",
  price: 100,
  quantity: 1,
  imageUrl: productImages.productImg1,
};

const product2: Product = {
  id: 2,
  name: "Product 2",
  price: 50,
  quantity: 2,
  imageUrl: productImages.productImg2,
};

const product3: Product = {
  id: 3,
  name: "Product 3",
  price: 200,
  oldPrice: 250,
  quantity: 10,
  imageUrl: productImages.productImg1,
};

const product4: Product = {
  id: 4,
  name: "Product 4",
  price: 200,
  oldPrice: 250,
  discount: 20,
  quantity: 10,
  bannerImageUrl: productImages.productImg3,
  shortDescription:
    "ullam similique totam recusandae labore, architecto iure est laborum expedita consectetur id possimus.",
};

export const cartProducts: Product[] = [product1, product2, product3];

export const wishlistProducts: Product[] = [product2, product3];

export const products: Product[] = [product1, product2, product3];

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
    subCategories: subcategories,
    slug: "computer-and-laptop",
    topProducts: products,
  },
  {
    id: 2,
    name: "Computer Accessories",
    subCategories: subcategories,
    slug: "computer-accessories",
    topProducts: products,
  },
  {
    id: 3,
    name: "SmartPhone",
    subCategories: subcategories,
    slug: "smartphone",
    topProducts: products,
  },
  {
    id: 4,
    name: "Headphone",
    subCategories: subcategories,
    slug: "headphone",
    topProducts: products,
  },
  {
    id: 5,
    name: "Mobile Accessories",
    subCategories: subcategories,
    slug: "mobile-accessories",
    topProducts: products,
  },
  {
    id: 6,
    name: "Gaming Console",
    subCategories: subcategories,
    slug: "gaming-console",
    topProducts: products,
  },
  {
    id: 7,
    name: "Camera & Photo",
    subCategories: subcategories,
    slug: "camera-and-photo",
    topProducts: products,
  },
  {
    id: 8,
    name: "TV & Homes Appliances",
    subCategories: subcategories,
    slug: "tv-and-homes-appliances",
    topProducts: products,
  },
  {
    id: 9,
    name: "Watchs & Accessories",
    subCategories: subcategories,
    slug: "watchs-and-accessories",
    topProducts: products,
  },
  {
    id: 10,
    name: "GPS & Navigation",
    subCategories: subcategories,
    slug: "gps-and-navigation",
    topProducts: products,
  },
  {
    id: 11,
    name: "Warable Technology",
    subCategories: subcategories,
    slug: "warable-technology",
    topProducts: products,
  },
];