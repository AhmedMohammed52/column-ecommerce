import ProductCard from "../ui/ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className=" grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
