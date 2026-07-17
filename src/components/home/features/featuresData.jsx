import { LuTruck, LuTimer, LuShieldCheck, LuSparkles } from "react-icons/lu";

const features = [
  {
    icon: <LuTruck className="size-5 text-foreground" />,
    title: "Free shipping",
    description: "On orders over $120",
  },
  {
    icon: <LuTimer className="size-5 text-foreground" />,
    title: "Fast delivery",
    description: "2-day express available",
  },
  {
    icon: <LuShieldCheck className="size-5 text-foreground" />,
    title: "2-year warranty",
    description: "On all footwear",
  },
  {
    icon: <LuSparkles className="size-5 text-foreground" />,
    title: "Members earn 2×",
    description: "Points on every order",
  },
];

export default features;
