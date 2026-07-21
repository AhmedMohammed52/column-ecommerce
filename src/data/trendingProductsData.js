import {
  sneakerImageOne,
  sneakerImageTwo,
  hoodieImage,
  ballImage,
} from "../assets";

const trendingProducts = [
  {
    id: 1,
    name: "Aero Runner Pro",
    brand: "ATHLIX",
    category: "Running",

    image: sneakerImageOne,

    price: 189,
    oldPrice: 240,
    discount: -21,

    rating: 4.8,
    reviews: 1284,

    createdAt: "2026-07-20",

    badge: {
      text: "Bestseller",
      color: "text-royal-foreground",
      bgColor: "bg-royal",
    },
  },

  {
    id: 2,
    name: "Trainer X",
    brand: "VANTAGE",
    category: "Training",

    image: sneakerImageTwo,

    price: 145,
    oldPrice: null,
    discount: null,

    rating: 4.6,
    reviews: 512,

    createdAt: "2026-07-27",

    badge: {
      text: "New",
      color: "text-background",
      bgColor: "bg-foreground",
    },
  },

  {
    id: 3,
    name: "Core Performance Hoodie",
    brand: "ATHLIX",
    category: "Apparel",

    image: hoodieImage,

    price: 98,
    oldPrice: 128,
    discount: -23,

    rating: 4.9,
    reviews: 2043,

    createdAt: "2026-08-15",

    badge: {
      text: "Sale",
      color: "text-destructive-foreground",
      bgColor: "bg-destructive",
    },
  },

  {
    id: 4,
    name: "Court Pro Basketball",
    brand: "NORTHPOINT",
    category: "Basketball",

    image: ballImage,

    price: 74,
    oldPrice: null,
    discount: null,

    rating: 4.7,
    reviews: 318,

    createdAt: "2026-04-02",

    badge: null,
  },
];

export default trendingProducts;
