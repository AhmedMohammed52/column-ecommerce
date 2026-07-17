import SectionHeader from "../../ui/SectionHeader";
import trendingProducts from "../../../data/trendingProductsData";
import ProductCard from "../../ui/ProductCard";

export default function TrendingProducts() {
  return (
    <div className="container-athlix py-16">
      <SectionHeader
        eyebrow="TRENDING NOW"
        title="What athletes are wearing"
        linkText="Shop trending"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mt-10">
        {trendingProducts.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
