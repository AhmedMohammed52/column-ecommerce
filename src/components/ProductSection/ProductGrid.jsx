import ProductCard from "../ui/ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mt-10">
      {products.map((item) => (
        <ProductCard product={item} key={item.id} />
      ))}
    </div>
  );
}
