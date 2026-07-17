import Features from "./features/Features";
import Hero from "./hero/Hero";
import Categories from "./categories/Categories";
import TrendingProducts from "./trending-products/TrendingProducts";

export default function HomeContent() {
  return (
    <main className="flex-1 pb-20 lg:pb-0">
      <Hero />

      <Features />

      <Categories />

      <TrendingProducts />
    </main>
  );
}
