import trendingProducts from "../../../data/trendingProductsData";
import ProductSection from "../../ProductSection/ProductSection";

export default function TrendingProducts() {
  return (
    <section className="container-athlix py-16">
      <ProductSection
        eyebrow="Trending Now"
        title="What athletes are wearing"
        linkText="Shop Trending"
        buttonLink="/products"
        products={trendingProducts}
      />
    </section>
  );
}
