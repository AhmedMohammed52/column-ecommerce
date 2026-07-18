import {
  hoodieImage,
  ballImage,
  leggingsImage,
  watchImage,
} from "../assets/index";

const newArrivalsData = [
  {
    id: 1,
    name: "Core Performance Hoodie",
    brand: "ATHLIX",
    category: "Apparel",

    image: hoodieImage,

    price: 98,
    oldPrice: 128,
    discount: -23,

    rating: 4.9,
    reviews: 2043,

    badge: {
      text: "Sale",
      color: "text-destructive-foreground",
      bgColor: "bg-destructive",
    },
  },

  {
    id: 2,
    name: "Court Pro Basketball",
    brand: "NORTHPOINT",
    category: "Basketball",

    image: ballImage,

    price: 74,
    oldPrice: null,
    discount: null,

    rating: 4.7,
    reviews: 318,

    badge: null,
  },

  {
    id: 3,
    name: "Flex Compression Leggings",
    brand: "MERIDIAN",
    category: "Training",

    image: leggingsImage,

    price: 88,
    oldPrice: null,
    discount: null,

    rating: 4.8,
    reviews: 964,

    badge: {
      text: "New",
      color: "text-background",
      bgColor: "bg-foreground",
    },
  },

  {
    id: 4,
    name: "Orbit GPS Sport Watch",
    brand: "ORBIT",
    category: "Accessories",

    image: watchImage,

    price: 349,
    oldPrice: 429,
    discount: -19,

    rating: 4.7,
    reviews: 421,

    badge: {
      text: "Limited",
      color: "text-emerald-foreground",
      bgColor: "bg-emerald",
    },
  },
];

export default newArrivalsData;
