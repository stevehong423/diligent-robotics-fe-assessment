export type ProductType = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};

export const INITIAL_PRODUCT = {
  brand: "",
  category: "",
  description: "",
  discountPercentage: 0,
  id: 0,
  images: [""],
  price: 0,
  rating: 0,
  stock: 0,
  thumbnail: "",
  title: "",
};

export const VALID_PRODUCT = {
  brand: "Apple",
  category: "smartphones",
  description: "Test Description",
  discountPercentage: 9.15,
  id: 1,
  images: [
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
  ],
  price: 549,
  rating: 4.69,
  stock: 94,
  thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  title: "iphone 9",
};
